const completionSpec: Fig.Spec = {
  name: "sagemaker",
  description:
    "Provides APIs for creating and managing SageMaker resources.  Other Resources:    SageMaker Developer Guide     Amazon Augmented AI Runtime API Reference",
  subcommands: [
    {
      name: "add-association",
      description:
        "Creates an association between the source and the destination. A source can be associated with multiple destinations, and a destination can be associated with multiple sources. An association is a lineage tracking entity. For more information, see Amazon SageMaker ML Lineage Tracking",
      options: [
        {
          name: "--source-arn",
          description: "The ARN of the source",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description: "The Amazon Resource Name (ARN) of the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-type",
          description:
            "The type of association. The following are suggested uses for each type. Amazon SageMaker places no restrictions on their use.   ContributedTo - The source contributed to the destination or had a part in enabling the destination. For example, the training data contributed to the training job.   AssociatedWith - The source is connected to the destination. For example, an approval workflow is associated with a model deployment.   DerivedFrom - The destination is a modification of the source. For example, a digest output of a channel input for a processing job is derived from the original inputs.   Produced - The source generated the destination. For example, a training job produced a model artifact",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "add-tags",
      description:
        "Adds or overwrites one or more tags for the specified SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see Amazon Web Services Tagging Strategies.  Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the Tags parameter of CreateHyperParameterTuningJob    Tags that you add to a SageMaker Domain or User Profile by calling this API are also added to any Apps that the Domain or User Profile launches after you call this API, but not to Apps that the Domain or User Profile launched before you called this API. To make sure that the tags associated with a Domain or User Profile are also added to all Apps that the Domain or User Profile launches, add the tags when you first create the Domain or User Profile by specifying them in the Tags parameter of CreateDomain or CreateUserProfile",
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
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources",
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
      name: "associate-trial-component",
      description:
        "Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the DisassociateTrialComponent API",
      options: [
        {
          name: "--trial-component-name",
          description: "The name of the component to associated with the trial",
          args: {
            name: "string",
          },
        },
        {
          name: "--trial-name",
          description: "The name of the trial to associate with",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-describe-model-package",
      description:
        "This action batch describes a list of versioned model packages",
      options: [
        {
          name: "--model-package-arn-list",
          description:
            "The list of Amazon Resource Name (ARN) of the model package groups",
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
      name: "create-action",
      description:
        "Creates an action. An action is a lineage tracking entity that represents an action or activity. For example, a model deployment or an HPO job. Generally, an action involves at least one input or output artifact. For more information, see Amazon SageMaker ML Lineage Tracking",
      options: [
        {
          name: "--action-name",
          description:
            "The name of the action. Must be unique to your account in an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description: "The source type, ID, and URI",
          args: {
            name: "structure",
          },
        },
        {
          name: "--action-type",
          description: "The action type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--properties",
          description: "A list of properties to add to the action",
          args: {
            name: "map",
          },
        },
        {
          name: "--metadata-properties",
          description:
            "Metadata properties of the tracking entity, trial, or trial component",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the action",
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
      name: "create-algorithm",
      description:
        "Create a machine learning algorithm that you can use in SageMaker and list in the Amazon Web Services Marketplace",
      options: [
        {
          name: "--algorithm-name",
          description: "The name of the algorithm",
          args: {
            name: "string",
          },
        },
        {
          name: "--algorithm-description",
          description: "A description of the algorithm",
          args: {
            name: "string",
          },
        },
        {
          name: "--training-specification",
          description:
            "Specifies details about training jobs run by this algorithm, including the following:   The Amazon ECR path of the container and the version digest of the algorithm.   The hyperparameters that the algorithm supports.   The instance types that the algorithm supports for training.   Whether the algorithm supports distributed training.   The metrics that the algorithm emits to Amazon CloudWatch.   Which metrics that the algorithm emits can be used as the objective metric for hyperparameter tuning jobs.   The input channels that the algorithm supports for training data. For example, an algorithm might support train, validation, and test channels",
          args: {
            name: "structure",
          },
        },
        {
          name: "--inference-specification",
          description:
            "Specifies details about inference jobs that the algorithm runs, including the following:   The Amazon ECR paths of containers that contain the inference code and model artifacts.   The instance types that the algorithm supports for transform jobs and real-time endpoints used for inference.   The input and output content formats that the algorithm supports for inference",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-specification",
          description:
            "Specifies configurations for one or more training jobs and that SageMaker runs to test the algorithm's training code and, optionally, one or more batch transform jobs that SageMaker runs to test the algorithm's inference code",
          args: {
            name: "structure",
          },
        },
        {
          name: "--certify-for-marketplace",
          description:
            "Whether to certify the algorithm so that it can be listed in Amazon Web Services Marketplace",
        },
        {
          name: "--no-certify-for-marketplace",
          description:
            "Whether to certify the algorithm so that it can be listed in Amazon Web Services Marketplace",
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources",
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
      name: "create-app",
      description:
        "Creates a running app for the specified UserProfile. This operation is automatically invoked by Amazon SageMaker upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously",
      options: [
        {
          name: "--domain-id",
          description: "The domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name",
          description:
            "The user profile name. If this value is not set, then SpaceName must be set",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-name",
          description:
            "The name of the space. If this value is not set, then UserProfileName must be set",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-type",
          description: "The type of app",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-name",
          description: "The name of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Each tag consists of a key and an optional value. Tag keys must be unique per resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-spec",
          description:
            "The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.  The value of InstanceType passed as part of the ResourceSpec in the CreateApp call overrides the value passed as part of the ResourceSpec configured for the user profile or the domain. If InstanceType is not specified in any of those three ResourceSpec values for a KernelGateway app, the CreateApp call fails with a request validation error",
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
      name: "create-app-image-config",
      description:
        "Creates a configuration for running a SageMaker image as a KernelGateway app. The configuration specifies the Amazon Elastic File System storage volume on the image, and a list of the kernels in the image",
      options: [
        {
          name: "--app-image-config-name",
          description:
            "The name of the AppImageConfig. Must be unique to your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the AppImageConfig",
          args: {
            name: "list",
          },
        },
        {
          name: "--kernel-gateway-image-config",
          description:
            "The KernelGatewayImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel will be shown to users before the image starts. Once the image runs, all kernels are visible in JupyterLab",
          args: {
            name: "structure",
          },
        },
        {
          name: "--jupyter-lab-app-image-config",
          description:
            "The JupyterLabAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in JupyterLab",
          args: {
            name: "structure",
          },
        },
        {
          name: "--code-editor-app-image-config",
          description:
            "The CodeEditorAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in Code Editor",
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
      name: "create-artifact",
      description:
        "Creates an artifact. An artifact is a lineage tracking entity that represents a URI addressable object or data. Some examples are the S3 URI of a dataset and the ECR registry path of an image. For more information, see Amazon SageMaker ML Lineage Tracking",
      options: [
        {
          name: "--artifact-name",
          description:
            "The name of the artifact. Must be unique to your account in an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description: "The ID, ID type, and URI of the source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--artifact-type",
          description: "The artifact type",
          args: {
            name: "string",
          },
        },
        {
          name: "--properties",
          description: "A list of properties to add to the artifact",
          args: {
            name: "map",
          },
        },
        {
          name: "--metadata-properties",
          description:
            "Metadata properties of the tracking entity, trial, or trial component",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the artifact",
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
      name: "create-auto-ml-job",
      description:
        "Creates an Autopilot job also referred to as Autopilot experiment or AutoML job.  We recommend using the new versions CreateAutoMLJobV2 and DescribeAutoMLJobV2, which offer backward compatibility.  CreateAutoMLJobV2 can manage tabular problem types identical to those of its previous version CreateAutoMLJob, as well as time-series forecasting, non-tabular problem types such as image or text classification, and text generation (LLMs fine-tuning). Find guidelines about how to migrate a CreateAutoMLJob to CreateAutoMLJobV2 in Migrate a CreateAutoMLJob to CreateAutoMLJobV2.  You can find the best-performing model after you run an AutoML job by calling DescribeAutoMLJobV2 (recommended) or DescribeAutoMLJob",
      options: [
        {
          name: "--auto-ml-job-name",
          description:
            "Identifies an Autopilot job. The name must be unique to your account and is case insensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-config",
          description:
            "An array of channel objects that describes the input data and its location. Each channel is a named input source. Similar to InputDataConfig supported by HyperParameterTrainingJobDefinition. Format(s) supported: CSV, Parquet. A minimum of 500 rows is required for the training dataset. There is not a minimum number of rows required for the validation dataset",
          args: {
            name: "list",
          },
        },
        {
          name: "--output-data-config",
          description:
            "Provides information about encryption and the Amazon S3 output path needed to store artifacts from an AutoML job. Format(s) supported: CSV",
          args: {
            name: "structure",
          },
        },
        {
          name: "--problem-type",
          description:
            "Defines the type of supervised learning problem available for the candidates. For more information, see  SageMaker Autopilot problem types",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-ml-job-objective",
          description:
            "Specifies a metric to minimize or maximize as the objective of a job. If not specified, the default objective metric depends on the problem type. See AutoMLJobObjective for the default values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-ml-job-config",
          description:
            "A collection of settings used to configure an AutoML job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description: "The ARN of the role that is used to access the data",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-candidate-definitions-only",
          description:
            "Generates possible candidates without training the models. A candidate is a combination of data preprocessors, algorithms, and algorithm parameter settings",
        },
        {
          name: "--no-generate-candidate-definitions-only",
          description:
            "Generates possible candidates without training the models. A candidate is a combination of data preprocessors, algorithms, and algorithm parameter settings",
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web ServicesResources. Tag keys must be unique per resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--model-deploy-config",
          description:
            "Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment",
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
      name: "create-auto-ml-job-v2",
      description:
        "Creates an Autopilot job also referred to as Autopilot experiment or AutoML job V2.   CreateAutoMLJobV2 and DescribeAutoMLJobV2 are new versions of CreateAutoMLJob and DescribeAutoMLJob which offer backward compatibility.  CreateAutoMLJobV2 can manage tabular problem types identical to those of its previous version CreateAutoMLJob, as well as time-series forecasting, non-tabular problem types such as image or text classification, and text generation (LLMs fine-tuning). Find guidelines about how to migrate a CreateAutoMLJob to CreateAutoMLJobV2 in Migrate a CreateAutoMLJob to CreateAutoMLJobV2.  For the list of available problem types supported by CreateAutoMLJobV2, see AutoMLProblemTypeConfig. You can find the best-performing model after you run an AutoML job V2 by calling DescribeAutoMLJobV2",
      options: [
        {
          name: "--auto-ml-job-name",
          description:
            "Identifies an Autopilot job. The name must be unique to your account and is case insensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-ml-job-input-data-config",
          description:
            "An array of channel objects describing the input data and their location. Each channel is a named input source. Similar to the InputDataConfig attribute in the CreateAutoMLJob input parameters. The supported formats depend on the problem type:   For tabular problem types: S3Prefix, ManifestFile.   For image classification: S3Prefix, ManifestFile, AugmentedManifestFile.   For text classification: S3Prefix.   For time-series forecasting: S3Prefix.   For text generation (LLMs fine-tuning): S3Prefix",
          args: {
            name: "list",
          },
        },
        {
          name: "--output-data-config",
          description:
            "Provides information about encryption and the Amazon S3 output path needed to store artifacts from an AutoML job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-ml-problem-type-config",
          description:
            "Defines the configuration settings of one of the supported problem types",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description: "The ARN of the role that is used to access the data",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, such as by purpose, owner, or environment. For more information, see Tagging Amazon Web ServicesResources. Tag keys must be unique per resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-config",
          description:
            "The security configuration for traffic encryption or Amazon VPC settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-ml-job-objective",
          description:
            "Specifies a metric to minimize or maximize as the objective of a job. If not specified, the default objective metric depends on the problem type. For the list of default values per problem type, see AutoMLJobObjective.    For tabular problem types: You must either provide both the AutoMLJobObjective and indicate the type of supervised learning problem in AutoMLProblemTypeConfig (TabularJobConfig.ProblemType), or none at all.   For text generation problem types (LLMs fine-tuning): Fine-tuning language models in Autopilot does not require setting the AutoMLJobObjective field. Autopilot fine-tunes LLMs without requiring multiple candidates to be trained and evaluated. Instead, using your dataset, Autopilot directly fine-tunes your target model to enhance a default objective metric, the cross-entropy loss. After fine-tuning a language model, you can evaluate the quality of its generated text using different metrics. For a list of the available metrics, see Metrics for fine-tuning LLMs in Autopilot",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-deploy-config",
          description:
            "Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-split-config",
          description:
            "This structure specifies how to split the data into train and validation datasets. The validation and training datasets must contain the same headers. For jobs created by calling CreateAutoMLJob, the validation dataset must be less than 2 GB in size.  This attribute must not be set for the time-series forecasting problem type, as Autopilot automatically splits the input dataset into training and validation sets",
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
      name: "create-cluster",
      description:
        "Creates a SageMaker HyperPod cluster. SageMaker HyperPod is a capability of SageMaker for creating and managing persistent clusters for developing large machine learning models, such as large language models (LLMs) and diffusion models. To learn more, see Amazon SageMaker HyperPod in the Amazon SageMaker Developer Guide",
      options: [
        {
          name: "--cluster-name",
          description: "The name for the new SageMaker HyperPod cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-groups",
          description:
            "The instance groups to be created in the SageMaker HyperPod cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Custom tags for managing the SageMaker HyperPod cluster as an Amazon Web Services resource. You can add tags to your cluster in the same way you add them in other Amazon Web Services services that support tagging. To learn more about tagging Amazon Web Services resources in general, see Tagging Amazon Web Services Resources User Guide",
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
      name: "create-code-repository",
      description:
        "Creates a Git repository as a resource in your SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with. The repository can be hosted either in Amazon Web Services CodeCommit or in any other Git repository",
      options: [
        {
          name: "--code-repository-name",
          description:
            "The name of the Git repository. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen)",
          args: {
            name: "string",
          },
        },
        {
          name: "--git-config",
          description:
            "Specifies details about the repository, including the URL where the repository is located, the default branch, and credentials to use to access the repository",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources",
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
      name: "create-compilation-job",
      description:
        "Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with Amazon Web Services IoT Greengrass. In that case, deploy them as an ML resource. In the request body, you provide the following:   A name for the compilation job    Information about the input model artifacts    The output location for the compiled model and the device (target) that the model runs on    The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job.    You can also provide a Tag to track the model compilation job's resource use and costs. The response body contains the CompilationJobArn for the compiled job. To stop a model compilation job, use StopCompilationJob. To get information about a particular model compilation job, use DescribeCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs",
      options: [
        {
          name: "--compilation-job-name",
          description:
            "A name for the model compilation job. The name must be unique within the Amazon Web Services Region and within your Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.  During model compilation, Amazon SageMaker needs your permission to:   Read input data from an S3 bucket   Write model artifacts to an S3 bucket   Write logs to Amazon CloudWatch Logs   Publish metrics to Amazon CloudWatch   You grant permissions for all of these tasks to an IAM role. To pass this role to Amazon SageMaker, the caller of this API must have the iam:PassRole permission. For more information, see Amazon SageMaker Roles",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-package-version-arn",
          description:
            "The Amazon Resource Name (ARN) of a versioned model package. Provide either a ModelPackageVersionArn or an InputConfig object in the request syntax. The presence of both objects in the CreateCompilationJob request will return an exception",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-config",
          description:
            "Provides information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-config",
          description:
            "Provides information about the output location for the compiled model and the target device the model runs on",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-config",
          description:
            "A VpcConfig object that specifies the VPC that you want your compilation job to connect to. Control access to your models by configuring the VPC. For more information, see Protect Compilation Jobs by Using an Amazon Virtual Private Cloud",
          args: {
            name: "structure",
          },
        },
        {
          name: "--stopping-condition",
          description:
            "Specifies a limit to how long a model compilation job can run. When the job reaches the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training costs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources",
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
      name: "create-context",
      description:
        "Creates a context. A context is a lineage tracking entity that represents a logical grouping of other tracking or experiment entities. Some examples are an endpoint and a model package. For more information, see Amazon SageMaker ML Lineage Tracking",
      options: [
        {
          name: "--context-name",
          description:
            "The name of the context. Must be unique to your account in an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description: "The source type, ID, and URI",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context-type",
          description: "The context type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the context",
          args: {
            name: "string",
          },
        },
        {
          name: "--properties",
          description: "A list of properties to add to the context",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the context",
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
      name: "create-data-quality-job-definition",
      description:
        "Creates a definition for a job that monitors data quality and drift. For information about model monitor, see Amazon SageMaker Model Monitor",
      options: [
        {
          name: "--job-definition-name",
          description: "The name for the monitoring job definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-quality-baseline-config",
          description:
            "Configures the constraints and baselines for the monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-quality-app-specification",
          description: "Specifies the container that runs the monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-quality-job-input",
          description:
            "A list of inputs for the monitoring job. Currently endpoints are supported as monitoring inputs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-quality-job-output-config",
          description: "The output configuration for monitoring jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-resources",
          description:
            "Identifies the resources to deploy for a monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-config",
          description:
            "Specifies networking configuration for the monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--stopping-condition",
          description:
            "A time limit for how long the monitoring job is allowed to run before stopping",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) An array of key-value pairs. For more information, see  Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide",
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
      name: "create-device-fleet",
      description: "Creates a device fleet",
      options: [
        {
          name: "--device-fleet-name",
          description: "The name of the fleet that the device belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT)",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-config",
          description:
            "The output configuration for storing sample data collected by the fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Creates tags for the specified fleet",
          args: {
            name: "list",
          },
        },
        {
          name: "--enable-iot-role-alias",
          description:
            'Whether to create an Amazon Web Services IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-{DeviceFleetName}". For example, if your device fleet is called "demo-fleet", the name of the role alias will be "SageMakerEdge-demo-fleet"',
        },
        {
          name: "--no-enable-iot-role-alias",
          description:
            'Whether to create an Amazon Web Services IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-{DeviceFleetName}". For example, if your device fleet is called "demo-fleet", the name of the role alias will be "SageMakerEdge-demo-fleet"',
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-domain",
      description:
        "Creates a Domain. A domain consists of an associated Amazon Elastic File System volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other.  EFS storage  When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files. SageMaker uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see Protect Data at Rest Using Encryption.  VPC configuration  All traffic between the domain and the Amazon EFS volume is through the specified VPC and subnets. For other traffic, you can specify the AppNetworkAccessType parameter. AppNetworkAccessType corresponds to the network access type that you choose when you onboard to the domain. The following options are available:    PublicInternetOnly - Non-EFS traffic goes through a VPC managed by Amazon SageMaker, which allows internet access. This is the default value.    VpcOnly - All traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway. When internet access is disabled, you won't be able to run a Amazon SageMaker Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime or a NAT gateway and your security groups allow outbound connections.    NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a Amazon SageMaker Studio app successfully.  For more information, see Connect Amazon SageMaker Studio Notebooks to Resources in a VPC",
      options: [
        {
          name: "--domain-name",
          description: "A name for the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-mode",
          description:
            "The mode of authentication that members use to access the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-user-settings",
          description:
            "The default settings to use to create a user profile when UserSettings isn't specified in the call to the CreateUserProfile API.  SecurityGroups is aggregated when specified in both calls. For all other settings in UserSettings, the values specified in CreateUserProfile take precedence over those specified in CreateDomain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--domain-settings",
          description: "A collection of Domain settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--subnet-ids",
          description: "The VPC subnets that the domain uses for communication",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to associated with the Domain. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API. Tags that you specify for the Domain are also added to all Apps that the Domain launches",
          args: {
            name: "list",
          },
        },
        {
          name: "--app-network-access-type",
          description:
            "Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly.    PublicInternetOnly - Non-EFS traffic is through a VPC managed by Amazon SageMaker, which allows direct internet access    VpcOnly - All traffic is through the specified VPC and subnets",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-efs-file-system-kms-key-id",
          description: "Use KmsKeyId",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "SageMaker uses Amazon Web Services KMS to encrypt EFS and EBS volumes attached to the domain with an Amazon Web Services managed key by default. For more control, specify a customer managed key",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-security-group-management",
          description:
            "The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided. If setting up the domain for use with RStudio, this value must be set to Service",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-space-settings",
          description: "The default settings used to create a space",
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
      name: "create-edge-deployment-plan",
      description:
        "Creates an edge deployment plan, consisting of multiple stages. Each stage may have a different deployment configuration and devices",
      options: [
        {
          name: "--edge-deployment-plan-name",
          description: "The name of the edge deployment plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-configs",
          description:
            "List of models associated with the edge deployment plan",
          args: {
            name: "list",
          },
        },
        {
          name: "--device-fleet-name",
          description: "The device fleet used for this edge deployment plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--stages",
          description:
            "List of stages of the edge deployment plan. The number of stages is limited to 10 per deployment",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "List of tags with which to tag the edge deployment plan",
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
      name: "create-edge-deployment-stage",
      description: "Creates a new stage in an existing edge deployment plan",
      options: [
        {
          name: "--edge-deployment-plan-name",
          description: "The name of the edge deployment plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--stages",
          description: "List of stages to be added to the edge deployment plan",
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
      name: "create-edge-packaging-job",
      description:
        "Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify",
      options: [
        {
          name: "--edge-packaging-job-name",
          description: "The name of the edge packaging job",
          args: {
            name: "string",
          },
        },
        {
          name: "--compilation-job-name",
          description:
            "The name of the SageMaker Neo compilation job that will be used to locate model artifacts for packaging",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description: "The name of the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-version",
          description: "The version of the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to download and upload the model, and to contact SageMaker Neo",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-config",
          description:
            "Provides information about the output location for the packaged model",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-key",
          description:
            "The Amazon Web Services KMS key to use when encrypting the EBS volume the edge packaging job runs on",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Creates tags for the packaging job",
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
      name: "create-endpoint",
      description:
        'Creates an endpoint using the endpoint configuration specified in the request. SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the CreateEndpointConfig API.   Use this API to deploy models using SageMaker hosting services.    You must not delete an EndpointConfig that is in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig.  The endpoint name must be unique within an Amazon Web Services Region in your Amazon Web Services account.  When it receives the request, SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them.   When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting  Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read.  When SageMaker receives the request, it sets the endpoint status to Creating. After it creates the endpoint, it sets the status to InService. SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the DescribeEndpoint API. If any of the models hosted at this endpoint get model data from an Amazon S3 location, SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the S3 path you provided. Amazon Web Services STS is activated in your Amazon Web Services account by default. If you previously deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see Activating and Deactivating Amazon Web Services STS in an Amazon Web Services Region in the Amazon Web Services Identity and Access Management User Guide.   To add the IAM role policies for using this API operation, go to the IAM console, and choose Roles in the left navigation pane. Search the IAM role that you want to grant access to use the CreateEndpoint and CreateEndpointConfig API operations, add the following policies to the role.    Option 1: For a full SageMaker access, search and attach the AmazonSageMakerFullAccess policy.   Option 2: For granting a limited access to an IAM role, paste the following Action elements manually into the JSON file of the IAM role:   "Action": ["sagemaker:CreateEndpoint", "sagemaker:CreateEndpointConfig"]   "Resource": [   "arn:aws:sagemaker:region:account-id:endpoint/endpointName"   "arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName"   ]  For more information, see SageMaker API Permissions: Actions, Permissions, and Resources Reference',
      options: [
        {
          name: "--endpoint-name",
          description:
            "The name of the endpoint.The name must be unique within an Amazon Web Services Region in your Amazon Web Services account. The name is case-insensitive in CreateEndpoint, but the case is preserved and must be matched in InvokeEndpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-config-name",
          description:
            "The name of an endpoint configuration. For more information, see CreateEndpointConfig",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-config",
          description:
            "The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources",
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
      name: "create-endpoint-config",
      description:
        "Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want SageMaker to provision. Then you call the CreateEndpoint API.   Use this API if you want to use SageMaker hosting services to deploy models into production.   In the request, you define a ProductionVariant, for each model that you want to deploy. Each ProductionVariant parameter also describes the resources that you want SageMaker to provision. This includes the number and type of ML compute instances to deploy.  If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B.   When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting  Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read",
      options: [
        {
          name: "--endpoint-config-name",
          description:
            "The name of the endpoint configuration. You specify this name in a CreateEndpoint request",
          args: {
            name: "string",
          },
        },
        {
          name: "--production-variants",
          description:
            "An array of ProductionVariant objects, one for each model that you want to host at this endpoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-capture-config",
          description:
            "Configuration to control how SageMaker captures inference data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. The KmsKeyId can be any of the following formats:    Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias    The KMS key policy must grant permission to the IAM role that you specify in your CreateEndpoint, UpdateEndpoint requests. For more information, refer to the Amazon Web Services Key Management Service section Using Key Policies in Amazon Web Services KMS    Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a KmsKeyId when using an instance type with local storage. If any of the models that you specify in the ProductionVariants parameter use nitro-based instances with local storage, do not specify a value for the KmsKeyId parameter. If you specify a value for KmsKeyId when using any nitro-based instances with local storage, the call to CreateEndpointConfig fails. For a list of instance types that support local instance storage, see Instance Store Volumes. For more information about local instance storage encryption, see SSD Instance Store Volumes",
          args: {
            name: "string",
          },
        },
        {
          name: "--async-inference-config",
          description:
            "Specifies configuration for how an endpoint performs asynchronous inference. This is a required field in order for your Endpoint to be invoked using InvokeEndpointAsync",
          args: {
            name: "structure",
          },
        },
        {
          name: "--explainer-config",
          description:
            "A member of CreateEndpointConfig that enables explainers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--shadow-production-variants",
          description:
            "An array of ProductionVariant objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants. If you use this field, you can only specify one variant for ProductionVariants and one variant for ShadowProductionVariants",
          args: {
            name: "list",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform actions on your behalf. For more information, see SageMaker Roles.   To be able to pass this role to Amazon SageMaker, the caller of this action must have the iam:PassRole permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enable-network-isolation",
          description:
            "Sets whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers",
        },
        {
          name: "--no-enable-network-isolation",
          description:
            "Sets whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-experiment",
      description:
        "Creates a SageMaker experiment. An experiment is a collection of trials that are observed, compared and evaluated as a group. A trial is a set of steps, called trial components, that produce a machine learning model.  In the Studio UI, trials are referred to as run groups and trial components are referred to as runs.  The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant. When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to experiments, trials, trial components and then use the Search API to search for the tags. To add a description to an experiment, specify the optional Description parameter. To add a description later, or to change the description, call the UpdateExperiment API. To get a list of all your experiments, call the ListExperiments API. To view an experiment's properties, call the DescribeExperiment API. To get a list of all the trials associated with an experiment, call the ListTrials API. To create a trial call the CreateTrial API",
      options: [
        {
          name: "--experiment-name",
          description:
            "The name of the experiment. The name must be unique in your Amazon Web Services account and is not case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The name of the experiment as displayed. The name doesn't need to be unique. If you don't specify DisplayName, the value in ExperimentName is displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the experiment. You can use Search API to search on the tags",
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
      name: "create-feature-group",
      description:
        "Create a new FeatureGroup. A FeatureGroup is a group of Features defined in the FeatureStore to describe a Record.  The FeatureGroup defines the schema and features contained in the FeatureGroup. A FeatureGroup definition is composed of a list of Features, a RecordIdentifierFeatureName, an EventTimeFeatureName and configurations for its OnlineStore and OfflineStore. Check Amazon Web Services service quotas to see the FeatureGroups quota for your Amazon Web Services account. Note that it can take approximately 10-15 minutes to provision an OnlineStore FeatureGroup with the InMemory StorageType.  You must include at least one of OnlineStoreConfig and OfflineStoreConfig to create a FeatureGroup",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name of the FeatureGroup. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account. The name:   Must start with an alphanumeric character.   Can only include alphanumeric characters, underscores, and hyphens. Spaces are not allowed",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-identifier-feature-name",
          description:
            "The name of the Feature whose value uniquely identifies a Record defined in the FeatureStore. Only the latest record per identifier value will be stored in the OnlineStore. RecordIdentifierFeatureName must be one of feature definitions' names. You use the RecordIdentifierFeatureName to access data in a FeatureStore. This name:   Must start with an alphanumeric character.   Can only contains alphanumeric characters, hyphens, underscores. Spaces are not allowed",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-time-feature-name",
          description:
            "The name of the feature that stores the EventTime of a Record in a FeatureGroup. An EventTime is a point in time when a new event occurs that corresponds to the creation or update of a Record in a FeatureGroup. All Records in the FeatureGroup must have a corresponding EventTime. An EventTime can be a String or Fractional.     Fractional: EventTime feature values must be a Unix timestamp in seconds.    String: EventTime feature values must be an ISO-8601 string in the format. The following formats are supported yyyy-MM-dd'T'HH:mm:ssZ and yyyy-MM-dd'T'HH:mm:ss.SSSZ where yyyy, MM, and dd represent the year, month, and day respectively and HH, mm, ss, and if applicable, SSS represent the hour, month, second and milliseconds respsectively. 'T' and Z are constants",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-definitions",
          description:
            "A list of Feature names and types. Name and Type is compulsory per Feature.  Valid feature FeatureTypes are Integral, Fractional and String.  FeatureNames cannot be any of the following: is_deleted, write_time, api_invocation_time  You can create up to 2,500 FeatureDefinitions per FeatureGroup",
          args: {
            name: "list",
          },
        },
        {
          name: "--online-store-config",
          description:
            "You can turn the OnlineStore on or off by specifying True for the EnableOnlineStore flag in OnlineStoreConfig. You can also include an Amazon Web Services KMS key ID (KMSKeyId) for at-rest encryption of the OnlineStore. The default value is False",
          args: {
            name: "structure",
          },
        },
        {
          name: "--offline-store-config",
          description:
            "Use this to configure an OfflineFeatureStore. This parameter allows you to specify:   The Amazon Simple Storage Service (Amazon S3) location of an OfflineStore.   A configuration for an Amazon Web Services Glue or Amazon Web Services Hive data catalog.    An KMS encryption key to encrypt the Amazon S3 location used for OfflineStore. If KMS encryption key is not specified, by default we encrypt all data at rest using Amazon Web Services KMS key. By defining your bucket-level key for SSE, you can reduce Amazon Web Services KMS requests costs by up to 99 percent.   Format for the offline store table. Supported formats are Glue (Default) and Apache Iceberg.   To learn more about this parameter, see OfflineStoreConfig",
          args: {
            name: "structure",
          },
        },
        {
          name: "--throughput-config",
          description:
            "Used to set feature group throughput configuration. There are two modes: ON_DEMAND and PROVISIONED. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled.  Note: PROVISIONED throughput mode is supported only for feature groups that are offline-only, or use the  Standard  tier online store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the OfflineStore if an OfflineStoreConfig is provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A free-form description of a FeatureGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags used to identify Features in each FeatureGroup",
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
      name: "create-flow-definition",
      description: "Creates a flow definition",
      options: [
        {
          name: "--flow-definition-name",
          description: "The name of your flow definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--human-loop-request-source",
          description:
            "Container for configuring the source of human task requests. Use to specify if Amazon Rekognition or Amazon Textract is used as an integration source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--human-loop-activation-config",
          description:
            "An object containing information about the events that trigger a human workflow",
          args: {
            name: "structure",
          },
        },
        {
          name: "--human-loop-config",
          description:
            "An object containing information about the tasks the human reviewers will perform",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-config",
          description:
            "An object containing information about where the human review results will be uploaded",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the role needed to call other services on your behalf. For example, arn:aws:iam::1234567890:role/service-role/AmazonSageMaker-ExecutionRole-20180111T151298",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs that contain metadata to help you categorize and organize a flow definition. Each tag consists of a key and a value, both of which you define",
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
      name: "create-hub",
      description:
        "Create a hub.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--hub-name",
          description: "The name of the hub to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-description",
          description: "A description of the hub",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-display-name",
          description: "The display name of the hub",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-search-keywords",
          description: "The searchable keywords for the hub",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-storage-config",
          description: "The Amazon S3 storage configuration for the hub",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Any tags to associate with the hub",
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
      name: "create-human-task-ui",
      description:
        "Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area",
      options: [
        {
          name: "--human-task-ui-name",
          description: "The name of the user interface you are creating",
          args: {
            name: "string",
          },
        },
        {
          name: "--ui-template",
          description: "The Liquid template for the worker user interface",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. Each tag consists of a key and a value, both of which you define",
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
      name: "create-hyper-parameter-tuning-job",
      description:
        "Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose. A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and trial components for each training job that it runs. You can view these entities in Amazon SageMaker Studio. For more information, see View Experiments, Trials, and Trial Components.  Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error",
      options: [
        {
          name: "--hyper-parameter-tuning-job-name",
          description:
            "The name of the tuning job. This name is the prefix for the names of all training jobs that this tuning job launches. The name must be unique within the same Amazon Web Services account and Amazon Web Services Region. The name must have 1 to 32 characters. Valid characters are a-z, A-Z, 0-9, and : + = @ _ % - (hyphen). The name is not case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--hyper-parameter-tuning-job-config",
          description:
            "The HyperParameterTuningJobConfig object that describes the tuning job, including the search strategy, the objective metric used to evaluate training jobs, ranges of parameters to search, and resource limits for the tuning job. For more information, see How Hyperparameter Tuning Works",
          args: {
            name: "structure",
          },
        },
        {
          name: "--training-job-definition",
          description:
            "The HyperParameterTrainingJobDefinition object that describes the training jobs that this tuning job launches, including static hyperparameters, input data configuration, output data configuration, resource configuration, and stopping condition",
          args: {
            name: "structure",
          },
        },
        {
          name: "--training-job-definitions",
          description:
            "A list of the HyperParameterTrainingJobDefinition objects launched for this tuning job",
          args: {
            name: "list",
          },
        },
        {
          name: "--warm-start-config",
          description:
            "Specifies the configuration for starting the hyperparameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job. All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric. If you specify IDENTICAL_DATA_AND_ALGORITHM as the WarmStartType value for the warm start configuration, the training job that performs the best in the new tuning job is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.  All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources. Tags that you specify for the tuning job are also added to all training jobs that the tuning job launches",
          args: {
            name: "list",
          },
        },
        {
          name: "--autotune",
          description:
            "Configures SageMaker Automatic model tuning (AMT) to automatically find optimal parameters for the following fields:    ParameterRanges: The names and ranges of parameters that a hyperparameter tuning job can optimize.    ResourceLimits: The maximum resources that can be used for a training job. These resources include the maximum number of training jobs, the maximum runtime of a tuning job, and the maximum number of training jobs to run at the same time.    TrainingJobEarlyStoppingType: A flag that specifies whether or not to use early stopping for training jobs launched by a hyperparameter tuning job.    RetryStrategy: The number of times to retry a training job.    Strategy: Specifies how hyperparameter tuning chooses the combinations of hyperparameter values to use for the training jobs that it launches.    ConvergenceDetected: A flag to indicate that Automatic model tuning (AMT) has detected model convergence",
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
      name: "create-image",
      description:
        "Creates a custom SageMaker image. A SageMaker image is a set of image versions. Each image version represents a container image stored in Amazon ECR. For more information, see Bring your own SageMaker image",
      options: [
        {
          name: "--description",
          description: "The description of the image",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the image. If not provided, ImageName is displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-name",
          description: "The name of the image. Must be unique to your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of an IAM role that enables Amazon SageMaker to perform tasks on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the image",
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
      name: "create-image-version",
      description:
        "Creates a version of the SageMaker image specified by ImageName. The version represents the Amazon ECR container image specified by BaseImage",
      options: [
        {
          name: "--base-image",
          description:
            "The registry path of the container image to use as the starting point for this version. The path is an Amazon ECR URI in the following format:  <acct-id>.dkr.ecr.<region>.amazonaws.com/<repo-name[:tag] or [@digest]>",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique ID. If not specified, the Amazon Web Services CLI and Amazon Web Services SDKs, such as the SDK for Python (Boto3), add a unique value to the call",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-name",
          description: "The ImageName of the Image to create a version of",
          args: {
            name: "string",
          },
        },
        {
          name: "--aliases",
          description: "A list of aliases created with the image version",
          args: {
            name: "list",
          },
        },
        {
          name: "--vendor-guidance",
          description:
            "The stability of the image version, specified by the maintainer.    NOT_PROVIDED: The maintainers did not provide a status for image version stability.    STABLE: The image version is stable.    TO_BE_ARCHIVED: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months.    ARCHIVED: The image version is archived. Archived image versions are not searchable and are no longer actively supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-type",
          description:
            "Indicates SageMaker job type compatibility.    TRAINING: The image version is compatible with SageMaker training jobs.    INFERENCE: The image version is compatible with SageMaker inference jobs.    NOTEBOOK_KERNEL: The image version is compatible with SageMaker notebook kernels",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-framework",
          description:
            "The machine learning framework vended in the image version",
          args: {
            name: "string",
          },
        },
        {
          name: "--programming-lang",
          description: "The supported programming language and its version",
          args: {
            name: "string",
          },
        },
        {
          name: "--processor",
          description:
            "Indicates CPU or GPU compatibility.    CPU: The image version is compatible with CPU.    GPU: The image version is compatible with GPU",
          args: {
            name: "string",
          },
        },
        {
          name: "--horovod",
          description: "Indicates Horovod compatibility",
        },
        {
          name: "--no-horovod",
          description: "Indicates Horovod compatibility",
        },
        {
          name: "--release-notes",
          description: "The maintainer description of the image version",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-inference-component",
      description:
        "Creates an inference component, which is a SageMaker hosting object that you can use to deploy a model to an endpoint. In the inference component settings, you specify the model, the endpoint, and how the model utilizes the resources that the endpoint hosts. You can optimize resource utilization by tailoring how the required CPU cores, accelerators, and memory are allocated. You can deploy multiple inference components to an endpoint, where each inference component contains one model and the resource utilization needs for that individual model. After you deploy an inference component, you can directly invoke the associated model when you use the InvokeEndpoint API action",
      options: [
        {
          name: "--inference-component-name",
          description: "A unique name to assign to the inference component",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-name",
          description:
            "The name of an existing endpoint where you host the inference component",
          args: {
            name: "string",
          },
        },
        {
          name: "--variant-name",
          description:
            "The name of an existing production variant where you host the inference component",
          args: {
            name: "string",
          },
        },
        {
          name: "--specification",
          description:
            "Details about the resources to deploy with this inference component, including the model, container, and compute resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--runtime-config",
          description:
            "Runtime settings for a model that is deployed with an inference component",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs associated with the model. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference",
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
      name: "create-inference-experiment",
      description:
        "Creates an inference experiment using the configurations specified in the request.   Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For more information about inference experiments, see Shadow tests.   Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration.   While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants. For more information, see View, monitor, and edit shadow tests",
      options: [
        {
          name: "--name",
          description: "The name for the inference experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the inference experiment that you want to run. The following types of experiments are possible:     ShadowMode: You can use this type to validate a shadow variant. For more information, see Shadow tests",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "The duration for which you want the inference experiment to run. If you don't specify this field, the experiment automatically starts immediately upon creation and concludes after 7 days",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description for the inference experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-name",
          description:
            "The name of the Amazon SageMaker endpoint on which you want to run the inference experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-variants",
          description:
            "An array of ModelVariantConfig objects. There is one for each variant in the inference experiment. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-storage-config",
          description:
            "The Amazon S3 location and configuration for storing inference request and response data.   This is an optional parameter that you can use for data capture. For more information, see Capture data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--shadow-mode-config",
          description:
            "The configuration of ShadowMode inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kms-key",
          description:
            'The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. The KmsKey can be any of the following formats:    KMS key ID  "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS key  "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"    KMS key Alias  "alias/ExampleAlias"    Amazon Resource Name (ARN) of a KMS key Alias  "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"     If you use a KMS key ID or an alias of your KMS key, the Amazon SageMaker execution role must include permissions to call kms:Encrypt. If you don\'t provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role\'s account. Amazon SageMaker uses server-side encryption with KMS managed keys for OutputDataConfig. If you use a bucket policy with an s3:PutObject permission that only allows objects with server-side encryption, set the condition key of s3:x-amz-server-side-encryption to "aws:kms". For more information, see KMS managed Encryption Keys in the Amazon Simple Storage Service Developer Guide.   The KMS key policy must grant permission to the IAM role that you specify in your CreateEndpoint and UpdateEndpoint requests. For more information, see Using Key Policies in Amazon Web Services KMS in the Amazon Web Services Key Management Service Developer Guide',
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging your Amazon Web Services Resources",
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
      name: "create-inference-recommendations-job",
      description:
        "Starts a recommendation job. You can create either an instance recommendation or load test job",
      options: [
        {
          name: "--job-name",
          description:
            "A name for the recommendation job. The name must be unique within the Amazon Web Services Region and within your Amazon Web Services account. The job name is passed down to the resources created by the recommendation job. The names of resources (such as the model, endpoint configuration, endpoint, and compilation) that are prefixed with the job name are truncated at 40 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-type",
          description:
            "Defines the type of recommendation job. Specify Default to initiate an instance recommendation and Advanced to initiate a load test. If left unspecified, Amazon SageMaker Inference Recommender will run an instance recommendation (DEFAULT) job",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-config",
          description:
            "Provides information about the versioned model package Amazon Resource Name (ARN), the traffic pattern, and endpoint configurations",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-description",
          description: "Description of the recommendation job",
          args: {
            name: "string",
          },
        },
        {
          name: "--stopping-conditions",
          description:
            "A set of conditions for stopping a recommendation job. If any of the conditions are met, the job is automatically stopped",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-config",
          description:
            "Provides information about the output artifacts and the KMS key to use for Amazon S3 server-side encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference",
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
      name: "create-labeling-job",
      description:
        "Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models.  You can select your workforce from one of three providers:   A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.   One or more vendors that you select from the Amazon Web Services Marketplace. Vendors provide expertise in specific areas.    The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.   You can also use automated data labeling to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses active learning to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see Using Automated Data Labeling. The data objects to be labeled are contained in an Amazon S3 bucket. You create a manifest file that describes the location of each object. For more information, see Using Input and Output Data. The output can be used as the manifest file for another labeling job or as training data for your machine learning models. You can use this operation to create a static labeling job or a streaming labeling job. A static labeling job stops if all data objects in the input manifest file identified in ManifestS3Uri have been labeled. A streaming labeling job runs perpetually until it is manually stopped, or remains idle for 10 days. You can send new data objects to an active (InProgress) streaming labeling job in real time. To learn how to create a static labeling job, see Create a Labeling Job (API)  in the Amazon SageMaker Developer Guide. To learn how to create a streaming labeling job, see Create a Streaming Labeling Job",
      options: [
        {
          name: "--labeling-job-name",
          description:
            "The name of the labeling job. This name is used to identify the job in a list of labeling jobs. Labeling job names must be unique within an Amazon Web Services account and region. LabelingJobName is not case sensitive. For example, Example-job and example-job are considered the same labeling job name by Ground Truth",
          args: {
            name: "string",
          },
        },
        {
          name: "--label-attribute-name",
          description:
            'The attribute name to use for the label in the output manifest file. This is the key for the key/value pair formed with the label that a worker assigns to the object. The LabelAttributeName must meet the following requirements.   The name can\'t end with "-metadata".    If you are using one of the following built-in task types, the attribute name must end with "-ref". If the task type you are using is not listed below, the attribute name must not end with "-ref".   Image semantic segmentation (SemanticSegmentation), and adjustment (AdjustmentSemanticSegmentation) and verification (VerificationSemanticSegmentation) labeling jobs for this task type.   Video frame object detection (VideoObjectDetection), and adjustment and verification (AdjustmentVideoObjectDetection) labeling jobs for this task type.   Video frame object tracking (VideoObjectTracking), and adjustment and verification (AdjustmentVideoObjectTracking) labeling jobs for this task type.   3D point cloud semantic segmentation (3DPointCloudSemanticSegmentation), and adjustment and verification (Adjustment3DPointCloudSemanticSegmentation) labeling jobs for this task type.    3D point cloud object tracking (3DPointCloudObjectTracking), and adjustment and verification (Adjustment3DPointCloudObjectTracking) labeling jobs for this task type.        If you are creating an adjustment or verification labeling job, you must use a different LabelAttributeName than the one used in the original labeling job. The original labeling job is the Ground Truth labeling job that produced the labels that you want verified or adjusted. To learn more about adjustment and verification labeling jobs, see Verify and Adjust Labels',
          args: {
            name: "string",
          },
        },
        {
          name: "--input-config",
          description:
            "Input data for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects. You must specify at least one of the following: S3DataSource or SnsDataSource.    Use SnsDataSource to specify an SNS input topic for a streaming labeling job. If you do not specify and SNS input topic ARN, Ground Truth will create a one-time labeling job that stops after all data objects in the input manifest file have been labeled.   Use S3DataSource to specify an input manifest file for both streaming and one-time labeling jobs. Adding an S3DataSource is optional if you use SnsDataSource to create a streaming labeling job.   If you use the Amazon Mechanical Turk workforce, your input data should not include confidential information, personal information or protected health information. Use ContentClassifiers to specify that your data is free of personally identifiable information and adult content",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-config",
          description:
            "The location of the output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt the output data, if any",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete data labeling",
          args: {
            name: "string",
          },
        },
        {
          name: "--label-category-config-s3-uri",
          description:
            'The S3 URI of the file, referred to as a label category configuration file, that defines the categories used to label the data objects. For 3D point cloud and video frame task types, you can add label category attributes and frame attributes to your label category configuration file. To learn how, see Create a Labeling Category Configuration File for 3D Point Cloud Labeling Jobs.  For named entity recognition jobs, in addition to "labels", you must provide worker instructions in the label category configuration file using the "instructions" parameter: "instructions": {"shortInstruction":"<h1>Add header</h1><p>Add Instructions</p>", "fullInstruction":"<p>Add additional instructions.</p>"}. For details and an example, see Create a Named Entity Recognition Labeling Job (API) . For all other built-in task types and custom tasks, your label category configuration file must be a JSON file in the following format. Identify the labels you want to use by replacing label_1, label_2,...,label_n with your label categories.  {    "document-version": "2018-11-28",   "labels": [{"label": "label_1"},{"label": "label_2"},...{"label": "label_n"}]   }  Note the following about the label category configuration file:   For image classification and text classification (single and multi-label) you must specify at least two label categories. For all other task types, the minimum number of label categories required is one.    Each label category must be unique, you cannot specify duplicate label categories.   If you create a 3D point cloud or video frame adjustment or verification labeling job, you must include auditLabelAttributeName in the label category configuration. Use this parameter to enter the  LabelAttributeName  of the labeling job you want to adjust or verify annotations of',
          args: {
            name: "string",
          },
        },
        {
          name: "--stopping-conditions",
          description:
            "A set of conditions for stopping the labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling",
          args: {
            name: "structure",
          },
        },
        {
          name: "--labeling-job-algorithms-config",
          description:
            "Configures the information required to perform automated data labeling",
          args: {
            name: "structure",
          },
        },
        {
          name: "--human-task-config",
          description:
            "Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key/value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide",
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
      name: "create-model",
      description:
        "Creates a model in SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions. Use this API to create a model if you want to use SageMaker hosting services or run a batch transform job. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API. SageMaker then deploys all of the containers that you defined for the model in the hosting environment.  To run a batch transform using your model, you start a job with the CreateTransformJob API. SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location. In the request, you also provide an IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role",
      options: [
        {
          name: "--model-name",
          description: "The name of the new model",
          args: {
            name: "string",
          },
        },
        {
          name: "--primary-container",
          description:
            "The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--containers",
          description: "Specifies the containers in the inference pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--inference-execution-config",
          description:
            "Specifies details of how containers in a multi-container endpoint are called",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs. Deploying on ML compute instances is part of model hosting. For more information, see SageMaker Roles.   To be able to pass this role to SageMaker, the caller of this API must have the iam:PassRole permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-config",
          description:
            "A VpcConfig object that specifies the VPC that you want your model to connect to. Control access to and from your model container by configuring the VPC. VpcConfig is used in hosting services and in batch transform. For more information, see Protect Endpoints by Using an Amazon Virtual Private Cloud and Protect Data in Batch Transform Jobs by Using an Amazon Virtual Private Cloud",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enable-network-isolation",
          description:
            "Isolates the model container. No inbound or outbound network calls can be made to or from the model container",
        },
        {
          name: "--no-enable-network-isolation",
          description:
            "Isolates the model container. No inbound or outbound network calls can be made to or from the model container",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-model-bias-job-definition",
      description: "Creates the definition for a model bias job",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the bias job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-bias-baseline-config",
          description: "The baseline configuration for a model bias job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-bias-app-specification",
          description:
            "Configures the model bias job to run a specified Docker container image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-bias-job-input",
          description: "Inputs for the model bias job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-bias-job-output-config",
          description: "The output configuration for monitoring jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-resources",
          description:
            "Identifies the resources to deploy for a monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-config",
          description: "Networking options for a model bias job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--stopping-condition",
          description:
            "A time limit for how long the monitoring job is allowed to run before stopping",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) An array of key-value pairs. For more information, see  Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide",
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
      name: "create-model-card",
      description:
        "Creates an Amazon SageMaker Model Card. For information about how to use model cards, see Amazon SageMaker Model Card",
      options: [
        {
          name: "--model-card-name",
          description: "The unique name of the model card",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-config",
          description:
            "An optional Key Management Service key to encrypt, decrypt, and re-encrypt model card content for regulated workloads with highly sensitive data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--content",
          description:
            "The content of the model card. Content must be in model card JSON schema and provided as a string",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-card-status",
          description:
            "The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.    Draft: The model card is a work in progress.    PendingReview: The model card is pending review.    Approved: The model card is approved.    Archived: The model card is archived. No more updates should be made to the model card, but it can still be exported",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs used to manage metadata for model cards",
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
      name: "create-model-card-export-job",
      description: "Creates an Amazon SageMaker Model Card export job",
      options: [
        {
          name: "--model-card-name",
          description:
            "The name or Amazon Resource Name (ARN) of the model card to export",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-card-version",
          description:
            "The version of the model card to export. If a version is not provided, then the latest version of the model card is exported",
          args: {
            name: "integer",
          },
        },
        {
          name: "--model-card-export-job-name",
          description: "The name of the model card export job",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-config",
          description:
            "The model card output configuration that specifies the Amazon S3 path for exporting",
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
      name: "create-model-explainability-job-definition",
      description: "Creates the definition for a model explainability job",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the model explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-explainability-baseline-config",
          description:
            "The baseline configuration for a model explainability job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-explainability-app-specification",
          description:
            "Configures the model explainability job to run a specified Docker container image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-explainability-job-input",
          description: "Inputs for the model explainability job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-explainability-job-output-config",
          description: "The output configuration for monitoring jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-resources",
          description:
            "Identifies the resources to deploy for a monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-config",
          description: "Networking options for a model explainability job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--stopping-condition",
          description:
            "A time limit for how long the monitoring job is allowed to run before stopping",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) An array of key-value pairs. For more information, see  Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide",
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
      name: "create-model-package",
      description:
        "Creates a model package that you can use to create SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker. To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for InferenceSpecification. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for SourceAlgorithmSpecification.  There are two types of model packages:   Versioned - a model that is part of a model group in the model registry.   Unversioned - a model package that is not part of a model group",
      options: [
        {
          name: "--model-package-name",
          description:
            "The name of the model package. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen). This parameter is required for unversioned models. It is not applicable to versioned models",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-package-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the model package group that this model version belongs to. This parameter is required for versioned models, and does not apply to unversioned models",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-package-description",
          description: "A description of the model package",
          args: {
            name: "string",
          },
        },
        {
          name: "--inference-specification",
          description:
            "Specifies details about inference jobs that you can run with models based on this model package, including the following information:   The Amazon ECR paths of containers that contain the inference code and model artifacts.   The instance types that the model package supports for transform jobs and real-time endpoints used for inference.   The input and output content formats that the model package supports for inference",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-specification",
          description:
            "Specifies configurations for one or more transform jobs that SageMaker runs to test the model package",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-algorithm-specification",
          description:
            "Details about the algorithm that was used to create the model package",
          args: {
            name: "structure",
          },
        },
        {
          name: "--certify-for-marketplace",
          description:
            "Whether to certify the model package for listing on Amazon Web Services Marketplace. This parameter is optional for unversioned models, and does not apply to versioned models",
        },
        {
          name: "--no-certify-for-marketplace",
          description:
            "Whether to certify the model package for listing on Amazon Web Services Marketplace. This parameter is optional for unversioned models, and does not apply to versioned models",
        },
        {
          name: "--tags",
          description:
            "A list of key value pairs associated with the model. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference Guide. If you supply ModelPackageGroupName, your model package belongs to the model group you specify and uses the tags associated with the model group. In this case, you cannot supply a tag argument",
          args: {
            name: "list",
          },
        },
        {
          name: "--model-approval-status",
          description:
            "Whether the model is approved for deployment. This parameter is optional for versioned models, and does not apply to unversioned models. For versioned models, the value of this parameter must be set to Approved to deploy the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-properties",
          description:
            "Metadata properties of the tracking entity, trial, or trial component",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-metrics",
          description: "A structure that contains model metrics reports",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique token that guarantees that the call to this API is idempotent",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The machine learning domain of your model package and its components. Common machine learning domains include computer vision and natural language processing",
          args: {
            name: "string",
          },
        },
        {
          name: "--task",
          description:
            'The machine learning task your model package accomplishes. Common machine learning tasks include object detection and image classification. The following tasks are supported by Inference Recommender: "IMAGE_CLASSIFICATION" | "OBJECT_DETECTION" | "TEXT_GENERATION" |"IMAGE_SEGMENTATION" | "FILL_MASK" | "CLASSIFICATION" | "REGRESSION" | "OTHER". Specify "OTHER" if none of the tasks listed fit your use case',
          args: {
            name: "string",
          },
        },
        {
          name: "--sample-payload-url",
          description:
            "The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). This archive can hold multiple files that are all equally used in the load test. Each file in the archive must satisfy the size constraints of the InvokeEndpoint call",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-metadata-properties",
          description:
            "The metadata properties associated with the model package versions",
          args: {
            name: "map",
          },
        },
        {
          name: "--drift-check-baselines",
          description:
            "Represents the drift check baselines that can be used when the model monitor is set using the model package. For more information, see the topic on Drift Detection against Previous Baselines in SageMaker Pipelines in the Amazon SageMaker Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-inference-specifications",
          description:
            "An array of additional Inference Specification objects. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts",
          args: {
            name: "list",
          },
        },
        {
          name: "--skip-model-validation",
          description: "Indicates if you want to skip model validation",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-uri",
          description:
            "The URI of the source for the model package. If you want to clone a model package, set it to the model package Amazon Resource Name (ARN). If you want to register a model, set it to the model ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-model-package-group",
      description:
        "Creates a model group. A model group contains a group of model versions",
      options: [
        {
          name: "--model-package-group-name",
          description: "The name of the model group",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-package-group-description",
          description: "A description for the model group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key value pairs associated with the model group. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference Guide",
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
      name: "create-model-quality-job-definition",
      description:
        "Creates a definition for a job that monitors model quality and drift. For information about model monitor, see Amazon SageMaker Model Monitor",
      options: [
        {
          name: "--job-definition-name",
          description: "The name of the monitoring job definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-quality-baseline-config",
          description:
            "Specifies the constraints and baselines for the monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-quality-app-specification",
          description: "The container that runs the monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-quality-job-input",
          description:
            "A list of the inputs that are monitored. Currently endpoints are supported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-quality-job-output-config",
          description: "The output configuration for monitoring jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-resources",
          description:
            "Identifies the resources to deploy for a monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-config",
          description:
            "Specifies the network configuration for the monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--stopping-condition",
          description:
            "A time limit for how long the monitoring job is allowed to run before stopping",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) An array of key-value pairs. For more information, see  Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide",
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
      name: "create-monitoring-schedule",
      description:
        "Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data captured for an Amazon SageMaker Endpoint",
      options: [
        {
          name: "--monitoring-schedule-name",
          description:
            "The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within an Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitoring-schedule-config",
          description:
            "The configuration object that specifies the monitoring schedule and defines the monitoring job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide",
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
      name: "create-notebook-instance",
      description:
        "Creates an SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook.  In a CreateNotebookInstance request, specify the type of ML compute instance that you want to run. SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance.  SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use SageMaker with a specific algorithm or with a machine learning framework.  After receiving the request, SageMaker does the following:   Creates a network interface in the SageMaker VPC.   (Option) If you specified SubnetId, SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.   Launches an EC2 instance of the type specified in the request in the SageMaker VPC. If you specified SubnetId of your VPC, SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.   After creating the notebook instance, SageMaker returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it. After SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating SageMaker endpoints, and validate hosted models.  For more information, see How It Works",
      options: [
        {
          name: "--notebook-instance-name",
          description: "The name of the new notebook instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-type",
          description:
            "The type of ML compute instance to launch for the notebook instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-id",
          description:
            "The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet",
          args: {
            name: "list",
          },
        },
        {
          name: "--role-arn",
          description:
            "When you send any requests to Amazon Web Services resources from the notebook instance, SageMaker assumes this role to perform tasks on your behalf. You must grant this role necessary permissions so SageMaker can perform these tasks. The policy must allow the SageMaker service principal (sagemaker.amazonaws.com) permissions to assume this role. For more information, see SageMaker Roles.   To be able to pass this role to SageMaker, the caller of this API must have the iam:PassRole permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on the storage volume attached to your notebook instance. The KMS key you provide must be enabled. For information, see Enabling and Disabling Keys in the Amazon Web Services Key Management Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--lifecycle-config-name",
          description:
            "The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--direct-internet-access",
          description:
            "Sets whether SageMaker provides internet access to the notebook instance. If you set this to Disabled this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker training and endpoint services unless you configure a NAT Gateway in your VPC. For more information, see Notebook Instances Are Internet-Enabled by Default. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-size-in-gb",
          description:
            "The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB",
          args: {
            name: "integer",
          },
        },
        {
          name: "--accelerator-types",
          description:
            "A list of Elastic Inference (EI) instance types to associate with this notebook instance. Currently, only one instance type can be associated with a notebook instance. For more information, see Using Elastic Inference in Amazon SageMaker",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-code-repository",
          description:
            "A Git repository to associate with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in Amazon Web Services CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with SageMaker Notebook Instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-code-repositories",
          description:
            "An array of up to three Git repositories to associate with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in Amazon Web Services CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with SageMaker Notebook Instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--root-access",
          description:
            "Whether root access is enabled or disabled for users of the notebook instance. The default value is Enabled.  Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform-identifier",
          description:
            "The platform identifier of the notebook instance runtime environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-metadata-service-configuration",
          description:
            "Information on the IMDS configuration of the notebook instance",
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
      name: "create-notebook-instance-lifecycle-config",
      description:
        "Creates a lifecycle configuration that you can associate with a notebook instance. A lifecycle configuration is a collection of shell scripts that run when you create or start a notebook instance. Each lifecycle configuration script has a limit of 16384 characters. The value of the $PATH environment variable that is available to both scripts is /sbin:bin:/usr/sbin:/usr/bin. View Amazon CloudWatch Logs for notebook instance lifecycle configurations in log group /aws/sagemaker/NotebookInstances in log stream [notebook-instance-name]/[LifecycleConfigHook]. Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance",
      options: [
        {
          name: "--notebook-instance-lifecycle-config-name",
          description: "The name of the lifecycle configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--on-create",
          description:
            "A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string",
          args: {
            name: "list",
          },
        },
        {
          name: "--on-start",
          description:
            "A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string",
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
      name: "create-pipeline",
      description: "Creates a pipeline using a JSON pipeline definition",
      options: [
        {
          name: "--pipeline-name",
          description: "The name of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-display-name",
          description: "The display name of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-definition",
          description: "The JSON pipeline definition of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-definition-s3-location",
          description:
            "The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--pipeline-description",
          description: "A description of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the role used by the pipeline to access and create resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the created pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--parallelism-configuration",
          description:
            "This is the configuration that controls the parallelism of the pipeline. If specified, it applies to all runs of this pipeline by default",
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
      name: "create-presigned-domain-url",
      description:
        "Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to the domain, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System volume. This operation can only be called when the authentication mode equals IAM.  The IAM role or user passed to this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app. You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see Connect to Amazon SageMaker Studio Through an Interface VPC Endpoint .  The URL that you get from a call to CreatePresignedDomainUrl has a default timeout of 5 minutes. You can configure this value using ExpiresInSeconds. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page",
      options: [
        {
          name: "--domain-id",
          description: "The domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name",
          description: "The name of the UserProfile to sign-in as",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-expiration-duration-in-seconds",
          description:
            "The session expiration duration in seconds. This value defaults to 43200",
          args: {
            name: "integer",
          },
        },
        {
          name: "--expires-in-seconds",
          description:
            "The number of seconds until the pre-signed URL expires. This value defaults to 300",
          args: {
            name: "integer",
          },
        },
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--landing-uri",
          description:
            "The landing page that the user is directed to when accessing the presigned URL. Using this value, users can access Studio or Studio Classic, even if it is not the default experience for the domain. The supported values are:    studio::relative/path: Directs users to the relative path in Studio.    app:JupyterServer:relative/path: Directs users to the relative path in the Studio Classic application.    app:JupyterLab:relative/path: Directs users to the relative path in the JupyterLab application.    app:RStudioServerPro:relative/path: Directs users to the relative path in the RStudio application.    app:CodeEditor:relative/path: Directs users to the relative path in the Code Editor, based on Code-OSS, Visual Studio Code - Open Source application.    app:Canvas:relative/path: Directs users to the relative path in the Canvas application",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-presigned-notebook-instance-url",
      description:
        "Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the SageMaker console, when you choose Open next to a notebook instance, SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.  The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance. You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the NotIpAddress condition operator and the aws:SourceIP condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see Limit Access to a Notebook Instance by IP Address.  The URL that you get from a call to CreatePresignedNotebookInstanceUrl is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page",
      options: [
        {
          name: "--notebook-instance-name",
          description: "The name of the notebook instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-expiration-duration-in-seconds",
          description:
            "The duration of the session, in seconds. The default is 12 hours",
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
      name: "create-processing-job",
      description: "Creates a processing job",
      options: [
        {
          name: "--processing-inputs",
          description:
            "An array of inputs configuring the data to download into the processing container",
          args: {
            name: "list",
          },
        },
        {
          name: "--processing-output-config",
          description: "Output configuration for the processing job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--processing-job-name",
          description:
            "The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--processing-resources",
          description:
            "Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance",
          args: {
            name: "structure",
          },
        },
        {
          name: "--stopping-condition",
          description:
            "The time limit for how long the processing job is allowed to run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--app-specification",
          description:
            "Configures the processing job to run a specified Docker container image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--environment",
          description:
            "The environment variables to set in the Docker container. Up to 100 key and values entries in the map are supported",
          args: {
            name: "map",
          },
        },
        {
          name: "--network-config",
          description:
            "Networking options for a processing job, such as whether to allow inbound and outbound network calls to and from processing containers, and the VPC subnets and security groups to use for VPC-enabled processing jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--experiment-config",
          description:
            "Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:    CreateProcessingJob     CreateTrainingJob     CreateTransformJob",
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
      name: "create-project",
      description:
        "Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model",
      options: [
        {
          name: "--project-name",
          description: "The name of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-description",
          description: "A description for the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-catalog-provisioning-details",
          description:
            "The product ID and provisioning artifact ID to provision a service catalog. The provisioning artifact ID will default to the latest provisioning artifact ID of the product, if you don't provide the provisioning artifact ID. For more information, see What is Amazon Web Services Service Catalog",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs that you want to use to organize and track your Amazon Web Services resource costs. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference Guide",
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
      name: "create-space",
      description:
        "Creates a private space or a space used for real time collaboration in a domain",
      options: [
        {
          name: "--domain-id",
          description: "The ID of the associated domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to associated with the space. Each tag consists of a key and an optional value. Tag keys must be unique for each resource. Tags are searchable using the Search API",
          args: {
            name: "list",
          },
        },
        {
          name: "--space-settings",
          description: "A collection of space settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ownership-settings",
          description: "A collection of ownership settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--space-sharing-settings",
          description: "A collection of space sharing settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--space-display-name",
          description:
            "The name of the space that appears in the SageMaker Studio UI",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-studio-lifecycle-config",
      description:
        "Creates a new Amazon SageMaker Studio Lifecycle Configuration",
      options: [
        {
          name: "--studio-lifecycle-config-name",
          description:
            "The name of the Amazon SageMaker Studio Lifecycle Configuration to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--studio-lifecycle-config-content",
          description:
            "The content of your Amazon SageMaker Studio Lifecycle Configuration script. This content must be base64 encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--studio-lifecycle-config-app-type",
          description:
            "The App type that the Lifecycle Configuration is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API",
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
      name: "create-training-job",
      description:
        "Starts a model training job. After training completes, SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify.  If you choose to host your model using SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than SageMaker, provided that you know how to use them for inference.  In the request body, you provide the following:     AlgorithmSpecification - Identifies the training algorithm to use.     HyperParameters - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see Algorithms.   Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.     InputDataConfig - Describes the input required by the training job and the Amazon S3, EFS, or FSx location where it is stored.    OutputDataConfig - Identifies the Amazon S3 bucket where you want SageMaker to save the results of model training.     ResourceConfig - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance.     EnableManagedSpotTraining - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see Managed Spot Training.     RoleArn - The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that SageMaker can successfully complete model training.     StoppingCondition - To help cap training costs, use MaxRuntimeInSeconds to set a time limit for training. Use MaxWaitTimeInSeconds to specify how long a managed spot training job has to complete.     Environment - The environment variables to set in the Docker container.    RetryStrategy - The number of times to retry the job when the job fails due to an InternalServerError.    For more information about SageMaker, see How It Works",
      options: [
        {
          name: "--training-job-name",
          description:
            "The name of the training job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--hyper-parameters",
          description:
            "Algorithm-specific parameters that influence the quality of the model. You set hyperparameters before you start the learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see Algorithms.  You can specify a maximum of 100 hyperparameters. Each hyperparameter is a key-value pair. Each key and value is limited to 256 characters, as specified by the Length Constraint.   Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error",
          args: {
            name: "map",
          },
        },
        {
          name: "--algorithm-specification",
          description:
            "The registry path of the Docker image that contains the training algorithm and algorithm-specific metadata, including the input mode. For more information about algorithms provided by SageMaker, see Algorithms. For information about providing your own algorithms, see Using Your Own Algorithms with Amazon SageMaker",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume to perform tasks on your behalf.  During model training, SageMaker needs your permission to read input data from an S3 bucket, download a Docker image that contains training code, write model artifacts to an S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant permissions for all of these tasks to an IAM role. For more information, see SageMaker Roles.   To be able to pass this role to SageMaker, the caller of this API must have the iam:PassRole permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-config",
          description:
            "An array of Channel objects. Each channel is a named input source. InputDataConfig describes the input data and its location.  Algorithms can accept input data from one or more channels. For example, an algorithm might have two channels of input data, training_data and validation_data. The configuration for each channel provides the S3, EFS, or FSx location where the input data is stored. It also provides information about the stored data: the MIME type, compression method, and whether the data is wrapped in RecordIO format.  Depending on the input mode that the algorithm supports, SageMaker either copies input data files from an S3 bucket to a local directory in the Docker container, or makes it available as input streams. For example, if you specify an EFS location, input data files are available as input streams. They do not need to be downloaded. Your input must be in the same Amazon Web Services region as your training job",
          args: {
            name: "list",
          },
        },
        {
          name: "--output-data-config",
          description:
            "Specifies the path to the S3 location where you want to store model artifacts. SageMaker creates subfolders for the artifacts",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-config",
          description:
            "The resources, including the ML compute instances and ML storage volumes, to use for model training.  ML storage volumes store model artifacts and incremental states. Training algorithms might also use ML storage volumes for scratch space. If you want SageMaker to use the ML storage volume to store the training data, choose File as the TrainingInputMode in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-config",
          description:
            "A VpcConfig object that specifies the VPC that you want your training job to connect to. Control access to and from your training container by configuring the VPC. For more information, see Protect Training Jobs by Using an Amazon Virtual Private Cloud",
          args: {
            name: "structure",
          },
        },
        {
          name: "--stopping-condition",
          description:
            "Specifies a limit to how long a model training job can run. It also specifies how long a managed Spot training job has to complete. When the job reaches the time limit, SageMaker ends the training job. Use this API to cap model training costs. To stop a job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--enable-network-isolation",
          description:
            "Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If you enable network isolation for training jobs that are configured to use a VPC, SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access",
        },
        {
          name: "--no-enable-network-isolation",
          description:
            "Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If you enable network isolation for training jobs that are configured to use a VPC, SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access",
        },
        {
          name: "--enable-inter-container-traffic-encryption",
          description:
            "To encrypt all communications between ML compute instances in distributed training, choose True. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training. For more information, see Protect Communications Between ML Compute Instances in a Distributed Training Job",
        },
        {
          name: "--no-enable-inter-container-traffic-encryption",
          description:
            "To encrypt all communications between ML compute instances in distributed training, choose True. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training. For more information, see Protect Communications Between ML Compute Instances in a Distributed Training Job",
        },
        {
          name: "--enable-managed-spot-training",
          description:
            "To train models using managed spot training, choose True. Managed spot training provides a fully managed and scalable infrastructure for training machine learning models. this option is useful when training jobs can be interrupted and when there is flexibility when the training job is run.  The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be used as a starting point to train models incrementally. Amazon SageMaker provides metrics and logs in CloudWatch. They can be used to see when managed spot training jobs are running, interrupted, resumed, or completed",
        },
        {
          name: "--no-enable-managed-spot-training",
          description:
            "To train models using managed spot training, choose True. Managed spot training provides a fully managed and scalable infrastructure for training machine learning models. this option is useful when training jobs can be interrupted and when there is flexibility when the training job is run.  The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be used as a starting point to train models incrementally. Amazon SageMaker provides metrics and logs in CloudWatch. They can be used to see when managed spot training jobs are running, interrupted, resumed, or completed",
        },
        {
          name: "--checkpoint-config",
          description:
            "Contains information about the output location for managed spot training checkpoint data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--debug-hook-config",
          description:
            "Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the DebugHookConfig parameter, see Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--debug-rule-configurations",
          description:
            "Configuration information for Amazon SageMaker Debugger rules for debugging output tensors",
          args: {
            name: "list",
          },
        },
        {
          name: "--tensor-board-output-config",
          description:
            "Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--experiment-config",
          description:
            "Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:    CreateProcessingJob     CreateTrainingJob     CreateTransformJob",
          args: {
            name: "structure",
          },
        },
        {
          name: "--profiler-config",
          description:
            "Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths",
          args: {
            name: "structure",
          },
        },
        {
          name: "--profiler-rule-configurations",
          description:
            "Configuration information for Amazon SageMaker Debugger rules for profiling system and framework metrics",
          args: {
            name: "list",
          },
        },
        {
          name: "--environment",
          description:
            "The environment variables to set in the Docker container",
          args: {
            name: "map",
          },
        },
        {
          name: "--retry-strategy",
          description:
            "The number of times to retry the job when the job fails due to an InternalServerError",
          args: {
            name: "structure",
          },
        },
        {
          name: "--remote-debug-config",
          description:
            "Configuration for remote debugging. To learn more about the remote debugging functionality of SageMaker, see Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging",
          args: {
            name: "structure",
          },
        },
        {
          name: "--infra-check-config",
          description:
            "Contains information about the infrastructure health check configuration for the training job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--session-chaining-config",
          description:
            "Contains information about attribute-based access control (ABAC) for the training job",
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
      name: "create-transform-job",
      description:
        "Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify. To perform batch transformations, you create a transform job and use the data that you have readily available. In the request body, you provide the following:    TransformJobName - Identifies the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.    ModelName - Identifies the model to use. ModelName must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services account. For information on creating a model, see CreateModel.    TransformInput - Describes the dataset to be transformed and the Amazon S3 location where it is stored.    TransformOutput - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.    TransformResources - Identifies the ML compute instances for the transform job.   For more information about how batch transformation works, see Batch Transform",
      options: [
        {
          name: "--transform-job-name",
          description:
            "The name of the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description:
            "The name of the model that you want to use for the transform job. ModelName must be the name of an existing Amazon SageMaker model within an Amazon Web Services Region in an Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-concurrent-transforms",
          description:
            "The maximum number of parallel requests that can be sent to each instance in a transform job. If MaxConcurrentTransforms is set to 0 or left unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your chosen algorithm. If the execution-parameters endpoint is not enabled, the default value is 1. For more information on execution-parameters, see How Containers Serve Requests. For built-in algorithms, you don't need to set a value for MaxConcurrentTransforms",
          args: {
            name: "integer",
          },
        },
        {
          name: "--model-client-config",
          description:
            "Configures the timeout and maximum number of retries for processing a transform job invocation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-payload-in-mb",
          description:
            "The maximum allowed size of the payload, in MB. A payload is the data portion of a record (without metadata). The value in MaxPayloadInMB must be greater than, or equal to, the size of a single record. To estimate the size of a record in MB, divide the size of your dataset by the number of records. To ensure that the records fit within the maximum payload size, we recommend using a slightly larger value. The default value is 6 MB.  The value of MaxPayloadInMB cannot be greater than 100 MB. If you specify the MaxConcurrentTransforms parameter, the value of (MaxConcurrentTransforms * MaxPayloadInMB) also cannot exceed 100 MB. For cases where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding, set the value to 0. This feature works only in supported algorithms. Currently, Amazon SageMaker built-in algorithms do not support HTTP chunked encoding",
          args: {
            name: "integer",
          },
        },
        {
          name: "--batch-strategy",
          description:
            "Specifies the number of records to include in a mini-batch for an HTTP inference request. A record  is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record.  To enable the batch strategy, you must set the SplitType property to Line, RecordIO, or TFRecord. To use only one record when making an HTTP invocation request to a container, set BatchStrategy to SingleRecord and SplitType to Line. To fit as many records in a mini-batch as can fit within the MaxPayloadInMB limit, set BatchStrategy to MultiRecord and SplitType to Line",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment",
          description:
            "The environment variables to set in the Docker container. We support up to 16 key and values entries in the map",
          args: {
            name: "map",
          },
        },
        {
          name: "--transform-input",
          description:
            "Describes the input source and the way the transform job consumes it",
          args: {
            name: "structure",
          },
        },
        {
          name: "--transform-output",
          description: "Describes the results of the transform job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-capture-config",
          description:
            "Configuration to control how SageMaker captures inference data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--transform-resources",
          description:
            "Describes the resources, including ML instance types and ML instance count, to use for the transform job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-processing",
          description:
            "The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see Associate Prediction Results with their Corresponding Input Records",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--experiment-config",
          description:
            "Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:    CreateProcessingJob     CreateTrainingJob     CreateTransformJob",
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
      name: "create-trial",
      description:
        "Creates an SageMaker trial. A trial is a set of steps called trial components that produce a machine learning model. A trial is part of a single SageMaker experiment. When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial and then use the Search API to search for the tags. To get a list of all your trials, call the ListTrials API. To view a trial's properties, call the DescribeTrial API. To create a trial component, call the CreateTrialComponent API",
      options: [
        {
          name: "--trial-name",
          description:
            "The name of the trial. The name must be unique in your Amazon Web Services account and is not case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The name of the trial as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialName is displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--experiment-name",
          description: "The name of the experiment to associate the trial with",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-properties",
          description:
            "Metadata properties of the tracking entity, trial, or trial component",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the trial. You can use Search API to search on the tags",
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
      name: "create-trial-component",
      description:
        "Creates a trial component, which is a stage of a machine learning trial. A trial is composed of one or more trial components. A trial component can be used in multiple trials. Trial components include pre-processing jobs, training jobs, and batch transform jobs. When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial component and then use the Search API to search for the tags",
      options: [
        {
          name: "--trial-component-name",
          description:
            "The name of the component. The name must be unique in your Amazon Web Services account and is not case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The name of the component as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status of the component. States include:   InProgress   Completed   Failed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--start-time",
          description: "When the component started",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description: "When the component ended",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--parameters",
          description: "The hyperparameters for the component",
          args: {
            name: "map",
          },
        },
        {
          name: "--input-artifacts",
          description:
            "The input artifacts for the component. Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types",
          args: {
            name: "map",
          },
        },
        {
          name: "--output-artifacts",
          description:
            "The output artifacts for the component. Examples of output artifacts are metrics, snapshots, logs, and images",
          args: {
            name: "map",
          },
        },
        {
          name: "--metadata-properties",
          description:
            "Metadata properties of the tracking entity, trial, or trial component",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the component. You can use Search API to search on the tags",
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
      name: "create-user-profile",
      description:
        'Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to a domain. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user\'s private Amazon Elastic File System home directory',
      options: [
        {
          name: "--domain-id",
          description: "The ID of the associated Domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name",
          description:
            "A name for the UserProfile. This value is not case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--single-sign-on-user-identifier",
          description:
            "A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is \"UserName\". If the Domain's AuthMode is IAM Identity Center, this field is required. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--single-sign-on-user-value",
          description:
            "The username of the associated Amazon Web Services Single Sign-On User for this UserProfile. If the Domain's AuthMode is IAM Identity Center, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags that you specify for the User Profile are also added to all Apps that the User Profile launches",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-settings",
          description: "A collection of settings",
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
      name: "create-workforce",
      description:
        "Use this operation to create a workforce. This operation will return an error if a workforce already exists in the Amazon Web Services Region that you specify. You can only create one workforce in each Amazon Web Services Region per Amazon Web Services account. If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use the DeleteWorkforce API operation to delete the existing workforce and then use CreateWorkforce to create a new workforce. To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in CognitoConfig. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see  Create a Private Workforce (Amazon Cognito). To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in OidcConfig. Your OIDC IdP must support groups because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see  Create a Private Workforce (OIDC IdP)",
      options: [
        {
          name: "--cognito-config",
          description:
            "Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single  Amazon Cognito user pool. Do not use OidcConfig if you specify values for CognitoConfig",
          args: {
            name: "structure",
          },
        },
        {
          name: "--oidc-config",
          description:
            "Use this parameter to configure a private workforce using your own OIDC Identity Provider. Do not use CognitoConfig if you specify values for OidcConfig",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-ip-config",
          description:
            "A list of IP address ranges (CIDRs). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workforce-name",
          description: "The name of the private workforce",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs that contain metadata to help you categorize and organize our workforce. Each tag consists of a key and a value, both of which you define",
          args: {
            name: "list",
          },
        },
        {
          name: "--workforce-vpc-config",
          description: "Use this parameter to configure a workforce using VPC",
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
      name: "create-workteam",
      description:
        "Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team. You cannot create more than 25 work teams in an account and region",
      options: [
        {
          name: "--workteam-name",
          description:
            "The name of the work team. Use this name to identify the work team",
          args: {
            name: "string",
          },
        },
        {
          name: "--workforce-name",
          description: "The name of the workforce",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-definitions",
          description:
            "A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.  Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use CognitoMemberDefinition. For workforces created using your own OIDC identity provider (IdP) use OidcMemberDefinition. Do not provide input for both of these parameters in a single request. For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito user groups within the user pool used to create a workforce. All of the CognitoMemberDefinition objects that make up the member definition must have the same ClientId and UserPool values. To add a Amazon Cognito user group to an existing worker pool, see Adding groups to a User Pool. For more information about user pools, see Amazon Cognito User Pools. For workforces created using your own OIDC IdP, specify the user groups that you want to include in your private work team in OidcMemberDefinition by listing those groups in Groups",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "A description of the work team",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-configuration",
          description:
            "Configures notification of workers regarding available or expiring work items",
          args: {
            name: "structure",
          },
        },
        {
          name: "--worker-access-configuration",
          description:
            "Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. For more information, see Resource Tag and Using Cost Allocation Tags in the  Amazon Web Services Billing and Cost Management User Guide",
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
      name: "delete-action",
      description: "Deletes an action",
      options: [
        {
          name: "--action-name",
          description: "The name of the action to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-algorithm",
      description: "Removes the specified algorithm from your account",
      options: [
        {
          name: "--algorithm-name",
          description: "The name of the algorithm to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-app",
      description: "Used to stop and delete an app",
      options: [
        {
          name: "--domain-id",
          description: "The domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name",
          description:
            "The user profile name. If this value is not set, then SpaceName must be set",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-name",
          description:
            "The name of the space. If this value is not set, then UserProfileName must be set",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-type",
          description: "The type of app",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-name",
          description: "The name of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-app-image-config",
      description: "Deletes an AppImageConfig",
      options: [
        {
          name: "--app-image-config-name",
          description: "The name of the AppImageConfig to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-artifact",
      description:
        "Deletes an artifact. Either ArtifactArn or Source must be specified",
      options: [
        {
          name: "--artifact-arn",
          description:
            "The Amazon Resource Name (ARN) of the artifact to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description: "The URI of the source",
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
      name: "delete-association",
      description: "Deletes an association",
      options: [
        {
          name: "--source-arn",
          description: "The ARN of the source",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description: "The Amazon Resource Name (ARN) of the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-cluster",
      description: "Delete a SageMaker HyperPod cluster",
      options: [
        {
          name: "--cluster-name",
          description:
            "The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-code-repository",
      description: "Deletes the specified Git repository from your account",
      options: [
        {
          name: "--code-repository-name",
          description: "The name of the Git repository to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-compilation-job",
      description:
        "Deletes the specified compilation job. This action deletes only the compilation job resource in Amazon SageMaker. It doesn't delete other resources that are related to that job, such as the model artifacts that the job creates, the compilation logs in CloudWatch, the compiled model, or the IAM role. You can delete a compilation job only if its current status is COMPLETED, FAILED, or STOPPED. If the job status is STARTING or INPROGRESS, stop the job, and then delete it after its status becomes STOPPED",
      options: [
        {
          name: "--compilation-job-name",
          description: "The name of the compilation job to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-context",
      description: "Deletes an context",
      options: [
        {
          name: "--context-name",
          description: "The name of the context to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-data-quality-job-definition",
      description: "Deletes a data quality monitoring job definition",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the data quality monitoring job definition to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-device-fleet",
      description: "Deletes a fleet",
      options: [
        {
          name: "--device-fleet-name",
          description: "The name of the fleet to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-domain",
      description:
        "Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using IAM Identity Center. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts",
      options: [
        {
          name: "--domain-id",
          description: "The domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--retention-policy",
          description:
            "The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted. By default, all resources are retained (not automatically deleted)",
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
      name: "delete-edge-deployment-plan",
      description:
        "Deletes an edge deployment plan if (and only if) all the stages in the plan are inactive or there are no stages in the plan",
      options: [
        {
          name: "--edge-deployment-plan-name",
          description: "The name of the edge deployment plan to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-edge-deployment-stage",
      description:
        "Delete a stage in an edge deployment plan if (and only if) the stage is inactive",
      options: [
        {
          name: "--edge-deployment-plan-name",
          description:
            "The name of the edge deployment plan from which the stage will be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description: "The name of the stage",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-endpoint",
      description:
        "Deletes an endpoint. SageMaker frees up all of the resources that were deployed when the endpoint was created.  SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the RevokeGrant API call. When you delete your endpoint, SageMaker asynchronously deletes associated endpoint resources such as KMS key grants. You might still see these resources in your account for a few minutes after deleting your endpoint. Do not delete or revoke the permissions for your  ExecutionRoleArn , otherwise SageMaker cannot delete these resources",
      options: [
        {
          name: "--endpoint-name",
          description: "The name of the endpoint that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-endpoint-config",
      description:
        "Deletes an endpoint configuration. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration.  You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges",
      options: [
        {
          name: "--endpoint-config-name",
          description:
            "The name of the endpoint configuration that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-experiment",
      description:
        "Deletes an SageMaker experiment. All trials associated with the experiment must be deleted first. Use the ListTrials API to get a list of the trials associated with the experiment",
      options: [
        {
          name: "--experiment-name",
          description: "The name of the experiment to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-feature-group",
      description:
        "Delete the FeatureGroup and any data that was written to the OnlineStore of the FeatureGroup. Data cannot be accessed from the OnlineStore immediately after DeleteFeatureGroup is called.  Data written into the OfflineStore will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your OfflineStore are not deleted.  Note that it can take approximately 10-15 minutes to delete an OnlineStore FeatureGroup with the InMemory StorageType",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name of the FeatureGroup you want to delete. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-flow-definition",
      description: "Deletes the specified flow definition",
      options: [
        {
          name: "--flow-definition-name",
          description: "The name of the flow definition you are deleting",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-hub",
      description:
        "Delete a hub.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--hub-name",
          description: "The name of the hub to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-hub-content",
      description:
        "Delete the contents of a hub.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--hub-name",
          description: "The name of the hub that you want to delete content in",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-type",
          description: "The type of content that you want to delete from a hub",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-name",
          description:
            "The name of the content that you want to delete from a hub",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-version",
          description:
            "The version of the content that you want to delete from a hub",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-human-task-ui",
      description:
        "Use this operation to delete a human task user interface (worker task template).  To see a list of human task user interfaces (work task templates) in your account, use ListHumanTaskUis. When you delete a worker task template, it no longer appears when you call ListHumanTaskUis",
      options: [
        {
          name: "--human-task-ui-name",
          description:
            "The name of the human task user interface (work task template) you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-hyper-parameter-tuning-job",
      description:
        "Deletes a hyperparameter tuning job. The DeleteHyperParameterTuningJob API deletes only the tuning job entry that was created in SageMaker when you called the CreateHyperParameterTuningJob API. It does not delete training jobs, artifacts, or the IAM role that you specified when creating the model",
      options: [
        {
          name: "--hyper-parameter-tuning-job-name",
          description:
            "The name of the hyperparameter tuning job that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-image",
      description:
        "Deletes a SageMaker image and all versions of the image. The container images aren't deleted",
      options: [
        {
          name: "--image-name",
          description: "The name of the image to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-image-version",
      description:
        "Deletes a version of a SageMaker image. The container image the version represents isn't deleted",
      options: [
        {
          name: "--image-name",
          description: "The name of the image to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description: "The alias of the image to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description: "The version to delete",
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
      name: "delete-inference-component",
      description: "Deletes an inference component",
      options: [
        {
          name: "--inference-component-name",
          description: "The name of the inference component to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-inference-experiment",
      description:
        "Deletes an inference experiment.   This operation does not delete your endpoint, variants, or any underlying resources. This operation only deletes the metadata of your experiment",
      options: [
        {
          name: "--name",
          description:
            "The name of the inference experiment you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-model",
      description:
        "Deletes a model. The DeleteModel API deletes only the model entry that was created in SageMaker when you called the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model",
      options: [
        {
          name: "--model-name",
          description: "The name of the model to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-model-bias-job-definition",
      description: "Deletes an Amazon SageMaker model bias job definition",
      options: [
        {
          name: "--job-definition-name",
          description: "The name of the model bias job definition to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-model-card",
      description: "Deletes an Amazon SageMaker Model Card",
      options: [
        {
          name: "--model-card-name",
          description: "The name of the model card to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-model-explainability-job-definition",
      description:
        "Deletes an Amazon SageMaker model explainability job definition",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the model explainability job definition to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-model-package",
      description:
        "Deletes a model package. A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker",
      options: [
        {
          name: "--model-package-name",
          description:
            "The name or Amazon Resource Name (ARN) of the model package to delete. When you specify a name, the name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen)",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-model-package-group",
      description: "Deletes the specified model group",
      options: [
        {
          name: "--model-package-group-name",
          description: "The name of the model group to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-model-package-group-policy",
      description: "Deletes a model group resource policy",
      options: [
        {
          name: "--model-package-group-name",
          description:
            "The name of the model group for which to delete the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-model-quality-job-definition",
      description:
        "Deletes the secified model quality monitoring job definition",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the model quality monitoring job definition to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-monitoring-schedule",
      description:
        "Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule",
      options: [
        {
          name: "--monitoring-schedule-name",
          description: "The name of the monitoring schedule to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-notebook-instance",
      description:
        "Deletes an SageMaker notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API.   When you delete a notebook instance, you lose all of your data. SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance",
      options: [
        {
          name: "--notebook-instance-name",
          description: "The name of the SageMaker notebook instance to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-notebook-instance-lifecycle-config",
      description: "Deletes a notebook instance lifecycle configuration",
      options: [
        {
          name: "--notebook-instance-lifecycle-config-name",
          description: "The name of the lifecycle configuration to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-pipeline",
      description:
        "Deletes a pipeline if there are no running instances of the pipeline. To delete a pipeline, you must stop all running instances of the pipeline using the StopPipelineExecution API. When you delete a pipeline, all instances of the pipeline are deleted",
      options: [
        {
          name: "--pipeline-name",
          description: "The name of the pipeline to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-project",
      description: "Delete the specified project",
      options: [
        {
          name: "--project-name",
          description: "The name of the project to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-space",
      description: "Used to delete a space",
      options: [
        {
          name: "--domain-id",
          description: "The ID of the associated domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-studio-lifecycle-config",
      description:
        "Deletes the Amazon SageMaker Studio Lifecycle Configuration. In order to delete the Lifecycle Configuration, there must be no running apps using the Lifecycle Configuration. You must also remove the Lifecycle Configuration from UserSettings in all Domains and UserProfiles",
      options: [
        {
          name: "--studio-lifecycle-config-name",
          description:
            "The name of the Amazon SageMaker Studio Lifecycle Configuration to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-tags",
      description:
        "Deletes the specified tags from an SageMaker resource. To list a resource's tags, use the ListTags API.   When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API.   When you call this API to delete tags from a SageMaker Domain or User Profile, the deleted tags are not removed from Apps that the SageMaker Domain or User Profile launched before you called this API",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource whose tags you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "An array or one or more tag keys to delete",
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
      name: "delete-trial",
      description:
        "Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the DescribeTrialComponent API to get the list of trial components",
      options: [
        {
          name: "--trial-name",
          description: "The name of the trial to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-trial-component",
      description:
        "Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the DisassociateTrialComponent API",
      options: [
        {
          name: "--trial-component-name",
          description: "The name of the component to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user-profile",
      description:
        "Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts",
      options: [
        {
          name: "--domain-id",
          description: "The domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name",
          description: "The user profile name",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-workforce",
      description:
        "Use this operation to delete a workforce. If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use this operation to delete the existing workforce and then use CreateWorkforce to create a new workforce.  If a private workforce contains one or more work teams, you must use the DeleteWorkteam operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will recieve a ResourceInUse error",
      options: [
        {
          name: "--workforce-name",
          description: "The name of the workforce",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-workteam",
      description:
        "Deletes an existing work team. This operation can't be undone",
      options: [
        {
          name: "--workteam-name",
          description: "The name of the work team to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "deregister-devices",
      description:
        "Deregisters the specified devices. After you deregister a device, you will need to re-register the devices",
      options: [
        {
          name: "--device-fleet-name",
          description: "The name of the fleet the devices belong to",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-names",
          description: "The unique IDs of the devices",
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
      name: "describe-action",
      description: "Describes an action",
      options: [
        {
          name: "--action-name",
          description: "The name of the action to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-algorithm",
      description:
        "Returns a description of the specified algorithm that is in your account",
      options: [
        {
          name: "--algorithm-name",
          description: "The name of the algorithm to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-app",
      description: "Describes the app",
      options: [
        {
          name: "--domain-id",
          description: "The domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name",
          description:
            "The user profile name. If this value is not set, then SpaceName must be set",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-type",
          description: "The type of app",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-name",
          description: "The name of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-app-image-config",
      description: "Describes an AppImageConfig",
      options: [
        {
          name: "--app-image-config-name",
          description: "The name of the AppImageConfig to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-artifact",
      description: "Describes an artifact",
      options: [
        {
          name: "--artifact-arn",
          description:
            "The Amazon Resource Name (ARN) of the artifact to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-auto-ml-job",
      description:
        "Returns information about an AutoML job created by calling CreateAutoMLJob.  AutoML jobs created by calling CreateAutoMLJobV2 cannot be described by DescribeAutoMLJob",
      options: [
        {
          name: "--auto-ml-job-name",
          description:
            "Requests information about an AutoML job using its unique name",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-auto-ml-job-v2",
      description:
        "Returns information about an AutoML job created by calling CreateAutoMLJobV2 or CreateAutoMLJob",
      options: [
        {
          name: "--auto-ml-job-name",
          description:
            "Requests information about an AutoML job V2 using its unique name",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-cluster",
      description: "Retrieves information of a SageMaker HyperPod cluster",
      options: [
        {
          name: "--cluster-name",
          description:
            "The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-cluster-node",
      description:
        "Retrieves information of an instance (also called a node interchangeably) of a SageMaker HyperPod cluster",
      options: [
        {
          name: "--cluster-name",
          description:
            "The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster in which the instance is",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-id",
          description: "The ID of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-code-repository",
      description: "Gets details about the specified Git repository",
      options: [
        {
          name: "--code-repository-name",
          description: "The name of the Git repository to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-compilation-job",
      description:
        "Returns information about a model compilation job. To create a model compilation job, use CreateCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs",
      options: [
        {
          name: "--compilation-job-name",
          description:
            "The name of the model compilation job that you want information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-context",
      description: "Describes a context",
      options: [
        {
          name: "--context-name",
          description: "The name of the context to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-data-quality-job-definition",
      description:
        "Gets the details of a data quality monitoring job definition",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the data quality monitoring job definition to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-device",
      description: "Describes the device",
      options: [
        {
          name: "--next-token",
          description: "Next token of device description",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-name",
          description: "The unique ID of the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-fleet-name",
          description: "The name of the fleet the devices belong to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-device-fleet",
      description: "A description of the fleet the device belongs to",
      options: [
        {
          name: "--device-fleet-name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-domain",
      description: "The description of the domain",
      options: [
        {
          name: "--domain-id",
          description: "The domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-edge-deployment-plan",
      description:
        "Describes an edge deployment plan with deployment status per stage",
      options: [
        {
          name: "--edge-deployment-plan-name",
          description: "The name of the deployment plan to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the edge deployment plan has enough stages to require tokening, then this is the response from the last list of stages returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to select (50 by default)",
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
      name: "describe-edge-packaging-job",
      description: "A description of edge packaging jobs",
      options: [
        {
          name: "--edge-packaging-job-name",
          description: "The name of the edge packaging job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-endpoint",
      description: "Returns the description of an endpoint",
      options: [
        {
          name: "--endpoint-name",
          description: "The name of the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-endpoint-config",
      description:
        "Returns the description of an endpoint configuration created using the CreateEndpointConfig API",
      options: [
        {
          name: "--endpoint-config-name",
          description: "The name of the endpoint configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-experiment",
      description: "Provides a list of an experiment's properties",
      options: [
        {
          name: "--experiment-name",
          description: "The name of the experiment to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-feature-group",
      description:
        "Use this operation to describe a FeatureGroup. The response includes information on the creation time, FeatureGroup name, the unique identifier for each FeatureGroup, and more",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the FeatureGroup you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to resume pagination of the list of Features (FeatureDefinitions). 2,500 Features are returned by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-feature-metadata",
      description: "Shows the metadata for a feature within a feature group",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group containing the feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-name",
          description: "The name of the feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-flow-definition",
      description: "Returns information about the specified flow definition",
      options: [
        {
          name: "--flow-definition-name",
          description: "The name of the flow definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-hub",
      description:
        "Describe a hub.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--hub-name",
          description: "The name of the hub to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-hub-content",
      description:
        "Describe the content of a hub.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--hub-name",
          description:
            "The name of the hub that contains the content to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-type",
          description: "The type of content in the hub",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-name",
          description: "The name of the content to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-version",
          description: "The version of the content to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-human-task-ui",
      description:
        "Returns information about the requested human task user interface (worker task template)",
      options: [
        {
          name: "--human-task-ui-name",
          description:
            "The name of the human task user interface (worker task template) you want information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-hyper-parameter-tuning-job",
      description:
        "Returns a description of a hyperparameter tuning job, depending on the fields selected. These fields can include the name, Amazon Resource Name (ARN), job status of your tuning job and more",
      options: [
        {
          name: "--hyper-parameter-tuning-job-name",
          description: "The name of the tuning job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-image",
      description: "Describes a SageMaker image",
      options: [
        {
          name: "--image-name",
          description: "The name of the image to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-image-version",
      description: "Describes a version of a SageMaker image",
      options: [
        {
          name: "--image-name",
          description: "The name of the image",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description: "The alias of the image version",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version of the image. If not specified, the latest version is described",
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
      name: "describe-inference-component",
      description: "Returns information about an inference component",
      options: [
        {
          name: "--inference-component-name",
          description: "The name of the inference component",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-inference-experiment",
      description: "Returns details about an inference experiment",
      options: [
        {
          name: "--name",
          description: "The name of the inference experiment to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-inference-recommendations-job",
      description:
        "Provides the results of the Inference Recommender job. One or more recommendation jobs are returned",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-labeling-job",
      description: "Gets information about a labeling job",
      options: [
        {
          name: "--labeling-job-name",
          description: "The name of the labeling job to return information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-lineage-group",
      description:
        "Provides a list of properties for the requested lineage group. For more information, see  Cross-Account Lineage Tracking  in the Amazon SageMaker Developer Guide",
      options: [
        {
          name: "--lineage-group-name",
          description: "The name of the lineage group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-model",
      description:
        "Describes a model that you created using the CreateModel API",
      options: [
        {
          name: "--model-name",
          description: "The name of the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-model-bias-job-definition",
      description: "Returns a description of a model bias job definition",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the model bias job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-model-card",
      description:
        "Describes the content, creation time, and security configuration of an Amazon SageMaker Model Card",
      options: [
        {
          name: "--model-card-name",
          description:
            "The name or Amazon Resource Name (ARN) of the model card to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-card-version",
          description:
            "The version of the model card to describe. If a version is not provided, then the latest version of the model card is described",
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
      name: "describe-model-card-export-job",
      description: "Describes an Amazon SageMaker Model Card export job",
      options: [
        {
          name: "--model-card-export-job-arn",
          description:
            "The Amazon Resource Name (ARN) of the model card export job to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-model-explainability-job-definition",
      description:
        "Returns a description of a model explainability job definition",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the model explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-model-package",
      description:
        "Returns a description of the specified model package, which is used to create SageMaker models or list them on Amazon Web Services Marketplace. To create models in SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace",
      options: [
        {
          name: "--model-package-name",
          description:
            "The name or Amazon Resource Name (ARN) of the model package to describe. When you specify a name, the name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen)",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-model-package-group",
      description: "Gets a description for the specified model group",
      options: [
        {
          name: "--model-package-group-name",
          description: "The name of the model group to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-model-quality-job-definition",
      description: "Returns a description of a model quality job definition",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the model quality job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-monitoring-schedule",
      description: "Describes the schedule for a monitoring job",
      options: [
        {
          name: "--monitoring-schedule-name",
          description: "Name of a previously created monitoring schedule",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-notebook-instance",
      description: "Returns information about a notebook instance",
      options: [
        {
          name: "--notebook-instance-name",
          description:
            "The name of the notebook instance that you want information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-notebook-instance-lifecycle-config",
      description:
        "Returns a description of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance",
      options: [
        {
          name: "--notebook-instance-lifecycle-config-name",
          description: "The name of the lifecycle configuration to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-pipeline",
      description: "Describes the details of a pipeline",
      options: [
        {
          name: "--pipeline-name",
          description:
            "The name or Amazon Resource Name (ARN) of the pipeline to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-pipeline-definition-for-execution",
      description:
        "Describes the details of an execution's pipeline definition",
      options: [
        {
          name: "--pipeline-execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-pipeline-execution",
      description: "Describes the details of a pipeline execution",
      options: [
        {
          name: "--pipeline-execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-processing-job",
      description: "Returns a description of a processing job",
      options: [
        {
          name: "--processing-job-name",
          description:
            "The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-project",
      description: "Describes the details of a project",
      options: [
        {
          name: "--project-name",
          description: "The name of the project to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-space",
      description: "Describes the space",
      options: [
        {
          name: "--domain-id",
          description: "The ID of the associated domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-studio-lifecycle-config",
      description:
        "Describes the Amazon SageMaker Studio Lifecycle Configuration",
      options: [
        {
          name: "--studio-lifecycle-config-name",
          description:
            "The name of the Amazon SageMaker Studio Lifecycle Configuration to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-subscribed-workteam",
      description:
        "Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the Amazon Web Services Marketplace",
      options: [
        {
          name: "--workteam-arn",
          description:
            "The Amazon Resource Name (ARN) of the subscribed work team to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-training-job",
      description:
        "Returns information about a training job.  Some of the attributes below only appear if the training job successfully starts. If the training job fails, TrainingJobStatus is Failed and, depending on the FailureReason, attributes like TrainingStartTime, TrainingTimeInSeconds, TrainingEndTime, and BillableTimeInSeconds may not be present in the response",
      options: [
        {
          name: "--training-job-name",
          description: "The name of the training job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-transform-job",
      description: "Returns information about a transform job",
      options: [
        {
          name: "--transform-job-name",
          description:
            "The name of the transform job that you want to view details of",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-trial",
      description: "Provides a list of a trial's properties",
      options: [
        {
          name: "--trial-name",
          description: "The name of the trial to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-trial-component",
      description: "Provides a list of a trials component's properties",
      options: [
        {
          name: "--trial-component-name",
          description: "The name of the trial component to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user-profile",
      description:
        "Describes a user profile. For more information, see CreateUserProfile",
      options: [
        {
          name: "--domain-id",
          description: "The domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name",
          description:
            "The user profile name. This value is not case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-workforce",
      description:
        "Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (CIDRs). Allowable IP address ranges are the IP addresses that workers can use to access tasks.   This operation applies only to private workforces",
      options: [
        {
          name: "--workforce-name",
          description:
            "The name of the private workforce whose access you want to restrict. WorkforceName is automatically set to default when a workforce is created and cannot be modified",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-workteam",
      description:
        "Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN)",
      options: [
        {
          name: "--workteam-name",
          description: "The name of the work team to return a description of",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disable-sagemaker-servicecatalog-portfolio",
      description:
        "Disables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects",
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
      name: "disassociate-trial-component",
      description:
        "Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the AssociateTrialComponent API. To get a list of the trials a component is associated with, use the Search API. Specify ExperimentTrialComponent for the Resource parameter. The list appears in the response under Results.TrialComponent.Parents",
      options: [
        {
          name: "--trial-component-name",
          description:
            "The name of the component to disassociate from the trial",
          args: {
            name: "string",
          },
        },
        {
          name: "--trial-name",
          description: "The name of the trial to disassociate from",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "enable-sagemaker-servicecatalog-portfolio",
      description:
        "Enables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects",
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
      name: "get-device-fleet-report",
      description: "Describes a fleet",
      options: [
        {
          name: "--device-fleet-name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-lineage-group-policy",
      description: "The resource policy for the lineage group",
      options: [
        {
          name: "--lineage-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the lineage group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-model-package-group-policy",
      description:
        "Gets a resource policy that manages access for a model group. For information about resource policies, see Identity-based policies and resource-based policies in the Amazon Web Services Identity and Access Management User Guide",
      options: [
        {
          name: "--model-package-group-name",
          description:
            "The name of the model group for which to get the resource policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-sagemaker-servicecatalog-portfolio-status",
      description:
        "Gets the status of Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects",
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
      name: "get-scaling-configuration-recommendation",
      description:
        "Starts an Amazon SageMaker Inference Recommender autoscaling recommendation job. Returns recommendations for autoscaling policies that you can apply to your SageMaker endpoint",
      options: [
        {
          name: "--inference-recommendations-job-name",
          description:
            "The name of a previously completed Inference Recommender job",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommendation-id",
          description:
            "The recommendation ID of a previously completed inference recommendation. This ID should come from one of the recommendations returned by the job specified in the InferenceRecommendationsJobName field. Specify either this field or the EndpointName field",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-name",
          description:
            "The name of an endpoint benchmarked during a previously completed inference recommendation job. This name should come from one of the recommendations returned by the job specified in the InferenceRecommendationsJobName field. Specify either this field or the RecommendationId field",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-cpu-utilization-per-core",
          description:
            "The percentage of how much utilization you want an instance to use before autoscaling. The default value is 50%",
          args: {
            name: "integer",
          },
        },
        {
          name: "--scaling-policy-objective",
          description:
            "An object where you specify the anticipated traffic pattern for an endpoint",
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
      name: "get-search-suggestions",
      description:
        "An auto-complete API for the search functionality in the SageMaker console. It returns suggestions of possible matches for the property name to use in Search queries. Provides suggestions for HyperParameters, Tags, and Metrics",
      options: [
        {
          name: "--resource",
          description: "The name of the SageMaker resource to search for",
          args: {
            name: "string",
          },
        },
        {
          name: "--suggestion-query",
          description:
            "Limits the property names that are included in the response",
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
      name: "import-hub-content",
      description:
        "Import hub content.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--hub-content-name",
          description: "The name of the hub content to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-version",
          description: "The version of the hub content to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-type",
          description: "The type of hub content to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-schema-version",
          description: "The version of the hub content schema to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-name",
          description: "The name of the hub to import content into",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-display-name",
          description: "The display name of the hub content to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-description",
          description: "A description of the hub content to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-markdown",
          description:
            "A string that provides a description of the hub content. This string can include links, tables, and standard markdown formating",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-document",
          description:
            "The hub content document that describes information about the hub content such as type, associated containers, scripts, and more",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-search-keywords",
          description: "The searchable keywords of the hub content",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Any tags associated with the hub content",
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
      name: "list-actions",
      description: "Lists the actions in your account and their properties",
      options: [
        {
          name: "--source-uri",
          description:
            "A filter that returns only actions with the specified source URI",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-type",
          description:
            "A filter that returns only actions of the specified type",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-after",
          description:
            "A filter that returns only actions created on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A filter that returns only actions created on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListActions didn't return the full set of actions, the call returns a token for getting the next set of actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of actions to return in the response. The default value is 10",
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
      name: "list-algorithms",
      description:
        "Lists the machine learning algorithms that have been created",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only algorithms created after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only algorithms created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of algorithms to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the algorithm name. This filter returns only algorithms whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListAlgorithms request was truncated, the response includes a NextToken. To retrieve the next set of algorithms, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The parameter by which to sort the results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for the results. The default is Ascending",
          args: {
            name: "string",
          },
        },
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
      name: "list-aliases",
      description: "Lists the aliases of a specified image or image version",
      options: [
        {
          name: "--image-name",
          description: "The name of the image",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description: "The alias of the image version",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of aliases to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListAliases didn't return the full set of aliases, the call returns a token for retrieving the next set of aliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version of the image. If image version is not specified, the aliases of all versions of the image are listed",
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
      name: "list-app-image-configs",
      description:
        "Lists the AppImageConfigs in your account and their properties. The list can be filtered by creation time or modified time, and whether the AppImageConfig name contains a specified string",
      options: [
        {
          name: "--max-results",
          description:
            "The total number of items to return in the response. If the total number of items available is more than the value specified, a NextToken is provided in the response. To resume pagination, provide the NextToken value in the as part of a subsequent call. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListImages didn't return the full set of AppImageConfigs, the call returns a token for getting the next set of AppImageConfigs",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A filter that returns only AppImageConfigs whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only AppImageConfigs created on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only AppImageConfigs created on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--modified-time-before",
          description:
            "A filter that returns only AppImageConfigs modified on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--modified-time-after",
          description:
            "A filter that returns only AppImageConfigs modified on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is Descending",
          args: {
            name: "string",
          },
        },
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
      name: "list-apps",
      description: "Lists apps",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "This parameter defines the maximum number of results that can be returned in a single response. The MaxResults parameter is an upper bound, not a target. If there are more results available than the value specified, a NextToken is provided in the response. The NextToken indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for MaxResults is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for the results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The parameter by which to sort the results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-id-equals",
          description: "A parameter to search for the domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name-equals",
          description:
            "A parameter to search by user profile name. If SpaceNameEquals is set, then this value cannot be set",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-name-equals",
          description:
            "A parameter to search by space name. If UserProfileNameEquals is set, then this value cannot be set",
          args: {
            name: "string",
          },
        },
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
      name: "list-artifacts",
      description: "Lists the artifacts in your account and their properties",
      options: [
        {
          name: "--source-uri",
          description:
            "A filter that returns only artifacts with the specified source URI",
          args: {
            name: "string",
          },
        },
        {
          name: "--artifact-type",
          description:
            "A filter that returns only artifacts of the specified type",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-after",
          description:
            "A filter that returns only artifacts created on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A filter that returns only artifacts created on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListArtifacts didn't return the full set of artifacts, the call returns a token for getting the next set of artifacts",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of artifacts to return in the response. The default value is 10",
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
      name: "list-associations",
      description:
        "Lists the associations in your account and their properties",
      options: [
        {
          name: "--source-arn",
          description:
            "A filter that returns only associations with the specified source ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description:
            "A filter that returns only associations with the specified destination Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-type",
          description:
            "A filter that returns only associations with the specified source type",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-type",
          description:
            "A filter that returns only associations with the specified destination type",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-type",
          description:
            "A filter that returns only associations of the specified type",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-after",
          description:
            "A filter that returns only associations created on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A filter that returns only associations created on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListAssociations didn't return the full set of associations, the call returns a token for getting the next set of associations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of associations to return in the response. The default value is 10",
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
      name: "list-auto-ml-jobs",
      description: "Request a list of jobs",
      options: [
        {
          name: "--creation-time-after",
          description: "Request a list of jobs, using a filter for time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description: "Request a list of jobs, using a filter for time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description: "Request a list of jobs, using a filter for time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description: "Request a list of jobs, using a filter for time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description: "Request a list of jobs, using a search filter for name",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description: "Request a list of jobs, using a filter for status",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for the results. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The parameter by which to sort the results. The default is Name",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Request a list of jobs up to a specified limit",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-candidates-for-auto-ml-job",
      description: "List the candidates created for the job",
      options: [
        {
          name: "--auto-ml-job-name",
          description:
            "List the candidates created for the job by providing the job's name",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description: "List the candidates for the job and filter by status",
          args: {
            name: "string",
          },
        },
        {
          name: "--candidate-name-equals",
          description:
            "List the candidates for the job and filter by candidate name",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for the results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The parameter by which to sort the results. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "List the job's candidates up to a specified limit",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-cluster-nodes",
      description:
        "Retrieves the list of instances (also called nodes interchangeably) in a SageMaker HyperPod cluster",
      options: [
        {
          name: "--cluster-name",
          description:
            "The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster in which you want to retrieve the list of nodes",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns nodes in a SageMaker HyperPod cluster created after the specified time. Timestamps are formatted according to the ISO 8601 standard.  Acceptable formats include:    YYYY-MM-DDThh:mm:ss.sssTZD (UTC), for example, 2014-10-01T20:30:00.000Z     YYYY-MM-DDThh:mm:ss.sssTZD (with offset), for example, 2014-10-01T12:30:00.000-08:00     YYYY-MM-DD, for example, 2014-10-01    Unix time in seconds, for example, 1412195400. This is also referred to as Unix Epoch time and represents the number of seconds since midnight, January 1, 1970 UTC.   For more information about the timestamp format, see Timestamp in the Amazon Web Services Command Line Interface User Guide",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The acceptable formats are the same as the timestamp formats for CreationTimeAfter. For more information about the timestamp format, see Timestamp in the Amazon Web Services Command Line Interface User Guide",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--instance-group-name-contains",
          description:
            "A filter that returns the instance groups whose name contain a specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of nodes to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListClusterNodes request was truncated, the response includes a NextToken. To retrieve the next set of cluster nodes, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field by which to sort results. The default value is CREATION_TIME",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for results. The default value is Ascending",
          args: {
            name: "string",
          },
        },
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
      name: "list-clusters",
      description: "Retrieves the list of SageMaker HyperPod clusters",
      options: [
        {
          name: "--creation-time-after",
          description:
            "Set a start time for the time range during which you want to list SageMaker HyperPod clusters. Timestamps are formatted according to the ISO 8601 standard.  Acceptable formats include:    YYYY-MM-DDThh:mm:ss.sssTZD (UTC), for example, 2014-10-01T20:30:00.000Z     YYYY-MM-DDThh:mm:ss.sssTZD (with offset), for example, 2014-10-01T12:30:00.000-08:00     YYYY-MM-DD, for example, 2014-10-01    Unix time in seconds, for example, 1412195400. This is also referred to as Unix Epoch time and represents the number of seconds since midnight, January 1, 1970 UTC.   For more information about the timestamp format, see Timestamp in the Amazon Web Services Command Line Interface User Guide",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Set an end time for the time range during which you want to list SageMaker HyperPod clusters. A filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The acceptable formats are the same as the timestamp formats for CreationTimeAfter. For more information about the timestamp format, see Timestamp in the Amazon Web Services Command Line Interface User Guide",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "Set the maximum number of SageMaker HyperPod clusters to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "Set the maximum number of instances to print in the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Set the next token to retrieve the list of SageMaker HyperPod clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field by which to sort results. The default value is CREATION_TIME",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for results. The default value is Ascending",
          args: {
            name: "string",
          },
        },
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
      name: "list-code-repositories",
      description: "Gets a list of the Git repositories in your account",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only Git repositories that were created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only Git repositories that were created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only Git repositories that were last modified after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only Git repositories that were last modified before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Git repositories to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the Git repositories name. This filter returns only repositories whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of a ListCodeRepositoriesOutput request was truncated, the response includes a NextToken. To get the next set of Git repositories, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The field to sort results by. The default is Name",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
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
      name: "list-compilation-jobs",
      description:
        "Lists model compilation jobs that satisfy various filters. To create a model compilation job, use CreateCompilationJob. To get information about a particular model compilation job you have created, use DescribeCompilationJob",
      options: [
        {
          name: "--next-token",
          description:
            "If the result of the previous ListCompilationJobs request was truncated, the response includes a NextToken. To retrieve the next set of model compilation jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of model compilation jobs to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns the model compilation jobs that were created after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns the model compilation jobs that were created before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns the model compilation jobs that were modified after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns the model compilation jobs that were modified before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "A filter that returns the model compilation jobs whose name contains a specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves model compilation jobs with a specific CompilationJobStatus status",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field by which to sort results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
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
      name: "list-contexts",
      description: "Lists the contexts in your account and their properties",
      options: [
        {
          name: "--source-uri",
          description:
            "A filter that returns only contexts with the specified source URI",
          args: {
            name: "string",
          },
        },
        {
          name: "--context-type",
          description:
            "A filter that returns only contexts of the specified type",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-after",
          description:
            "A filter that returns only contexts created on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A filter that returns only contexts created on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListContexts didn't return the full set of contexts, the call returns a token for getting the next set of contexts",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of contexts to return in the response. The default value is 10",
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
      name: "list-data-quality-job-definitions",
      description: "Lists the data quality job definitions in your account",
      options: [
        {
          name: "--endpoint-name",
          description:
            "A filter that lists the data quality job definitions associated with the specified endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Whether to sort the results in Ascending or Descending order. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListDataQualityJobDefinitions request was truncated, the response includes a NextToken. To retrieve the next set of transform jobs, use the token in the next request.>",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of data quality monitoring job definitions to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the data quality monitoring job definition name. This filter returns only data quality monitoring job definitions whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only data quality monitoring job definitions created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only data quality monitoring job definitions created after the specified time",
          args: {
            name: "timestamp",
          },
        },
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
      name: "list-device-fleets",
      description: "Returns a list of devices in the fleet",
      options: [
        {
          name: "--next-token",
          description:
            "The response from the last list when returning a list large enough to need tokening",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to select",
          args: {
            name: "integer",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Filter fleets where packaging job was created after specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Filter fleets where the edge packaging job was created before specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description: "Select fleets where the job was updated after X",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description: "Select fleets where the job was updated before X",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "Filter for fleets containing this name in their fleet device name",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The column to sort by",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "What direction to sort in",
          args: {
            name: "string",
          },
        },
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
      name: "list-devices",
      description: "A list of devices",
      options: [
        {
          name: "--next-token",
          description:
            "The response from the last list when returning a list large enough to need tokening",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results to select",
          args: {
            name: "integer",
          },
        },
        {
          name: "--latest-heartbeat-after",
          description: "Select fleets where the job was updated after X",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--model-name",
          description:
            "A filter that searches devices that contains this name in any of their models",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-fleet-name",
          description:
            "Filter for fleets containing this name in their device fleet name",
          args: {
            name: "string",
          },
        },
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
      name: "list-domains",
      description: "Lists the domains",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "This parameter defines the maximum number of results that can be returned in a single response. The MaxResults parameter is an upper bound, not a target. If there are more results available than the value specified, a NextToken is provided in the response. The NextToken indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for MaxResults is 10",
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
      name: "list-edge-deployment-plans",
      description: "Lists all edge deployment plans",
      options: [
        {
          name: "--next-token",
          description:
            "The response from the last list when returning a list large enough to need tokening",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to select (50 by default)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--creation-time-after",
          description: "Selects edge deployment plans created after this time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description: "Selects edge deployment plans created before this time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "Selects edge deployment plans that were last updated after this time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "Selects edge deployment plans that were last updated before this time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "Selects edge deployment plans with names containing this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-fleet-name-contains",
          description:
            "Selects edge deployment plans with a device fleet name containing this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The column by which to sort the edge deployment plans. Can be one of NAME, DEVICEFLEETNAME, CREATIONTIME, LASTMODIFIEDTIME",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The direction of the sorting (ascending or descending)",
          args: {
            name: "string",
          },
        },
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
      name: "list-edge-packaging-jobs",
      description: "Returns a list of edge packaging jobs",
      options: [
        {
          name: "--next-token",
          description:
            "The response from the last list when returning a list large enough to need tokening",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results to select",
          args: {
            name: "integer",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Select jobs where the job was created after specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Select jobs where the job was created before specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "Select jobs where the job was updated after specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "Select jobs where the job was updated before specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "Filter for jobs containing this name in their packaging job name",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name-contains",
          description:
            "Filter for jobs where the model name contains this string",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description: "The job status to filter for",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "Use to specify what column to sort by",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "What direction to sort by",
          args: {
            name: "string",
          },
        },
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
      name: "list-endpoint-configs",
      description: "Lists endpoint configurations",
      options: [
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListEndpointConfig request was truncated, the response includes a NextToken. To retrieve the next set of endpoint configurations, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of training jobs to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the endpoint configuration name. This filter returns only endpoint configurations whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only endpoint configurations created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only endpoint configurations with a creation time greater than or equal to the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
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
      name: "list-endpoints",
      description: "Lists endpoints",
      options: [
        {
          name: "--sort-by",
          description: "Sorts the list of results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of a ListEndpoints request was truncated, the response includes a NextToken. To retrieve the next set of endpoints, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of endpoints to return in the response. This value defaults to 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in endpoint names. This filter returns only endpoints whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only endpoints that were created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only endpoints with a creation time greater than or equal to the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only endpoints that were modified before the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only endpoints that were modified after the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that returns only endpoints with the specified status",
          args: {
            name: "string",
          },
        },
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
      name: "list-experiments",
      description:
        "Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time",
      options: [
        {
          name: "--created-after",
          description:
            "A filter that returns only experiments created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A filter that returns only experiments created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListExperiments didn't return the full set of experiments, the call returns a token for getting the next set of experiments",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of experiments to return in the response. The default value is 10",
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
      name: "list-feature-groups",
      description: "List FeatureGroups based on given filter and order",
      options: [
        {
          name: "--name-contains",
          description:
            "A string that partially matches one or more FeatureGroups names. Filters FeatureGroups by name",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-group-status-equals",
          description: "A FeatureGroup status. Filters by FeatureGroup status",
          args: {
            name: "string",
          },
        },
        {
          name: "--offline-store-status-equals",
          description: "An OfflineStore status. Filters by OfflineStore status",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Use this parameter to search for FeatureGroupss created after a specific date and time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Use this parameter to search for FeatureGroupss created before a specific date and time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-order",
          description: "The order in which feature groups are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The value on which the feature group list is sorted",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by ListFeatureGroups",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to resume pagination of ListFeatureGroups results",
          args: {
            name: "string",
          },
        },
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
      name: "list-flow-definitions",
      description:
        "Returns information about the flow definitions in your account",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only flow definitions that were created before the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-order",
          description:
            "An optional value that specifies whether you want the results sorted in Ascending or Descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A token to resume pagination",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of items to return. If the total number of available items is more than the value specified in MaxResults, then a NextToken will be provided in the output that you can use to resume pagination",
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
      name: "list-hub-content-versions",
      description:
        "List hub content versions.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--hub-name",
          description: "The name of the hub to list the content versions of",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-type",
          description: "The type of hub content to list versions of",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-name",
          description: "The name of the hub content",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-version",
          description: "The lower bound of the hub content versions to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-schema-version",
          description: "The upper bound of the hub content schema version",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Only list hub content versions that were created before the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Only list hub content versions that were created after the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "Sort hub content versions by either name or creation time",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Sort hub content versions by ascending or descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of hub content versions to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListHubContentVersions request was truncated, the response includes a NextToken. To retrieve the next set of hub content versions, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-hub-contents",
      description:
        "List the contents of a hub.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--hub-name",
          description: "The name of the hub to list the contents of",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-content-type",
          description: "The type of hub content to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "Only list hub content if the name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-schema-version",
          description: "The upper bound of the hub content schema verion",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Only list hub content that was created before the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Only list hub content that was created after the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "Sort hub content versions by either name or creation time",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "Sort hubs by ascending or descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum amount of hub content to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListHubContents request was truncated, the response includes a NextToken. To retrieve the next set of hub content, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-hubs",
      description:
        "List all existing hubs.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--name-contains",
          description:
            "Only list hubs with names that contain the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Only list hubs that were created before the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Only list hubs that were created after the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "Only list hubs that were last modified before the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "Only list hubs that were last modified after the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description: "Sort hubs by either name or creation time",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "Sort hubs by ascending or descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of hubs to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListHubs request was truncated, the response includes a NextToken. To retrieve the next set of hubs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-human-task-uis",
      description:
        "Returns information about the human task user interfaces in your account",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only human task user interfaces that were created before the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-order",
          description:
            "An optional value that specifies whether you want the results sorted in Ascending or Descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A token to resume pagination",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of items to return. If the total number of available items is more than the value specified in MaxResults, then a NextToken will be provided in the output that you can use to resume pagination",
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
      name: "list-hyper-parameter-tuning-jobs",
      description:
        "Gets a list of HyperParameterTuningJobSummary objects that describe the hyperparameter tuning jobs launched in your account",
      options: [
        {
          name: "--next-token",
          description:
            "If the result of the previous ListHyperParameterTuningJobs request was truncated, the response includes a NextToken. To retrieve the next set of tuning jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of tuning jobs to return. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description: "The field to sort results by. The default is Name",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the tuning job name. This filter returns only tuning jobs whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only tuning jobs that were created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only tuning jobs that were created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only tuning jobs that were modified after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only tuning jobs that were modified before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that returns only tuning jobs with the specified status",
          args: {
            name: "string",
          },
        },
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
      name: "list-image-versions",
      description:
        "Lists the versions of a specified image and their properties. The list can be filtered by creation time or modified time",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only versions created on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only versions created on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--image-name",
          description: "The name of the image to list the versions of",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only versions modified on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only versions modified on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of versions to return in the response. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListImageVersions didn't return the full set of versions, the call returns a token for getting the next set of versions",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CREATION_TIME",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is DESCENDING",
          args: {
            name: "string",
          },
        },
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
      name: "list-images",
      description:
        "Lists the images in your account and their properties. The list can be filtered by creation time or modified time, and whether the image name contains a specified string",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only images created on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only images created on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only images modified on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only images modified on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of images to return in the response. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A filter that returns only images whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListImages didn't return the full set of images, the call returns a token for getting the next set of images",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CREATION_TIME",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is DESCENDING",
          args: {
            name: "string",
          },
        },
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
      name: "list-inference-components",
      description:
        "Lists the inference components in your account and their properties",
      options: [
        {
          name: "--sort-by",
          description:
            "The field by which to sort the inference components in the response. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that you use to get the next set of results following a truncated response. If the response to the previous request was truncated, that response provides the value for this token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of inference components to return in the response. This value defaults to 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "Filters the results to only those inference components with a name that contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Filters the results to only those inference components that were created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Filters the results to only those inference components that were created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "Filters the results to only those inference components that were updated before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "Filters the results to only those inference components that were updated after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "Filters the results to only those inference components with the specified status",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-name-equals",
          description:
            "An endpoint name to filter the listed inference components. The response includes only those inference components that are hosted at the specified endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--variant-name-equals",
          description:
            "A production variant name to filter the listed inference components. The response includes only those inference components that are hosted at the specified variant",
          args: {
            name: "string",
          },
        },
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
      name: "list-inference-experiments",
      description: "Returns the list of all inference experiments",
      options: [
        {
          name: "--name-contains",
          description:
            "Selects inference experiments whose names contain this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Selects inference experiments of this type. For the possible types of inference experiments, see CreateInferenceExperiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "Selects inference experiments which are in this status. For the possible statuses, see DescribeInferenceExperiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Selects inference experiments which were created after this timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Selects inference experiments which were created before this timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "Selects inference experiments which were last modified after this timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "Selects inference experiments which were last modified before this timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The column by which to sort the listed inference experiments",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The direction of sorting (ascending or descending)",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The response from the last list when returning a list large enough to need tokening",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to select",
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
      name: "list-inference-recommendations-job-steps",
      description:
        "Returns a list of the subtasks for an Inference Recommender job. The supported subtasks are benchmarks, which evaluate the performance of your model on different instance types",
      options: [
        {
          name: "--job-name",
          description: "The name for the Inference Recommender job",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "A filter to return benchmarks of a specified status. If this field is left empty, then all benchmarks are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-type",
          description:
            "A filter to return details about the specified type of subtask.  BENCHMARK: Evaluate the performance of your model on different instance types",
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
            "A token that you can specify to return more results from the list. Specify this field if you have a token that was returned from a previous request",
          args: {
            name: "string",
          },
        },
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
      name: "list-inference-recommendations-jobs",
      description: "Lists recommendation jobs that satisfy various filters",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only jobs created after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only jobs created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only jobs that were last modified after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only jobs that were last modified before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the job name. This filter returns only recommendations whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves only inference recommendations jobs with a specific status",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The parameter by which to sort the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListInferenceRecommendationsJobsRequest request was truncated, the response includes a NextToken. To retrieve the next set of recommendations, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of recommendations to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--model-name-equals",
          description:
            "A filter that returns only jobs that were created for this model",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-package-version-arn-equals",
          description:
            "A filter that returns only jobs that were created for this versioned model package",
          args: {
            name: "string",
          },
        },
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
      name: "list-labeling-jobs",
      description: "Gets a list of labeling jobs",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only labeling jobs created after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only labeling jobs created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only labeling jobs modified after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only labeling jobs modified before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of labeling jobs to return in each page of the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListLabelingJobs request was truncated, the response includes a NextToken. To retrieve the next set of labeling jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the labeling job name. This filter returns only labeling jobs whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves only labeling jobs with a specific status",
          args: {
            name: "string",
          },
        },
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
      name: "list-labeling-jobs-for-workteam",
      description:
        "Gets a list of labeling jobs assigned to a specified work team",
      options: [
        {
          name: "--workteam-arn",
          description:
            "The Amazon Resource Name (ARN) of the work team for which you want to see labeling jobs for",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of labeling jobs to return in each page of the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListLabelingJobsForWorkteam request was truncated, the response includes a NextToken. To retrieve the next set of labeling jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only labeling jobs created after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only labeling jobs created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--job-reference-code-contains",
          description:
            "A filter the limits jobs to only the ones whose job reference code contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
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
      name: "list-lineage-groups",
      description:
        "A list of lineage groups shared with your Amazon Web Services account. For more information, see  Cross-Account Lineage Tracking  in the Amazon SageMaker Developer Guide",
      options: [
        {
          name: "--created-after",
          description:
            "A timestamp to filter against lineage groups created after a certain point in time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A timestamp to filter against lineage groups created before a certain point in time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The parameter by which to sort the results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for the results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response is truncated, SageMaker returns this token. To retrieve the next set of algorithms, use it in the subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of endpoints to return in the response. This value defaults to 10",
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
      name: "list-model-bias-job-definitions",
      description:
        "Lists model bias jobs definitions that satisfy various filters",
      options: [
        {
          name: "--endpoint-name",
          description: "Name of the endpoint to monitor for model bias",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Whether to sort results by the Name or CreationTime field. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Whether to sort the results in Ascending or Descending order. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of model bias jobs to return in the response. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "Filter for model bias jobs whose name contains a specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only model bias jobs created before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only model bias jobs created after a specified time",
          args: {
            name: "timestamp",
          },
        },
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
      name: "list-model-card-export-jobs",
      description: "List the export jobs for the Amazon SageMaker Model Card",
      options: [
        {
          name: "--model-card-name",
          description:
            "List export jobs for the model card with the specified name",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-card-version",
          description:
            "List export jobs for the model card with the specified version",
          args: {
            name: "integer",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Only list model card export jobs that were created after the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Only list model card export jobs that were created before the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--model-card-export-job-name-contains",
          description:
            "Only list model card export jobs with names that contain the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "Only list model card export jobs with the specified status",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Sort model card export jobs by either name or creation time. Sorts by creation time by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Sort model card export jobs by ascending or descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListModelCardExportJobs request was truncated, the response includes a NextToken. To retrieve the next set of model card export jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of model card export jobs to list",
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
      name: "list-model-card-versions",
      description: "List existing versions of an Amazon SageMaker Model Card",
      options: [
        {
          name: "--creation-time-after",
          description:
            "Only list model card versions that were created after the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Only list model card versions that were created before the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of model card versions to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--model-card-name",
          description:
            "List model card versions for the model card with the specified name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-card-status",
          description:
            "Only list model card versions with the specified approval status",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListModelCardVersions request was truncated, the response includes a NextToken. To retrieve the next set of model card versions, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Sort listed model card versions by version. Sorts by version by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Sort model card versions by ascending or descending order",
          args: {
            name: "string",
          },
        },
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
      name: "list-model-cards",
      description: "List existing model cards",
      options: [
        {
          name: "--creation-time-after",
          description:
            "Only list model cards that were created after the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Only list model cards that were created before the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of model cards to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "Only list model cards with names that contain the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-card-status",
          description:
            "Only list model cards with the specified approval status",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListModelCards request was truncated, the response includes a NextToken. To retrieve the next set of model cards, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Sort model cards by either name or creation time. Sorts by creation time by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "Sort model cards by ascending or descending order",
          args: {
            name: "string",
          },
        },
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
      name: "list-model-explainability-job-definitions",
      description:
        "Lists model explainability job definitions that satisfy various filters",
      options: [
        {
          name: "--endpoint-name",
          description:
            "Name of the endpoint to monitor for model explainability",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Whether to sort results by the Name or CreationTime field. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Whether to sort the results in Ascending or Descending order. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of jobs to return in the response. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "Filter for model explainability jobs whose name contains a specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only model explainability jobs created before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only model explainability jobs created after a specified time",
          args: {
            name: "timestamp",
          },
        },
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
      name: "list-model-metadata",
      description:
        "Lists the domain, framework, task, and model name of standard machine learning models found in common model zoos",
      options: [
        {
          name: "--search-expression",
          description:
            "One or more filters that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. Specify the Framework, FrameworkVersion, Domain or Task to filter supported. Filter names and values are case-sensitive",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListModelMetadataResponse request was truncated, the response includes a NextToken. To retrieve the next set of model metadata, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of models to return in the response",
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
      name: "list-model-package-groups",
      description:
        "Gets a list of the model groups in your Amazon Web Services account",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only model groups created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only model groups created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the model group name. This filter returns only model groups whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListModelPackageGroups request was truncated, the response includes a NextToken. To retrieve the next set of model groups, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
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
      name: "list-model-packages",
      description: "Lists the model packages that have been created",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only model packages created after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only model packages created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of model packages to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the model package name. This filter returns only model packages whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-approval-status",
          description:
            "A filter that returns only the model packages with the specified approval status",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-package-group-name",
          description:
            "A filter that returns only model versions that belong to the specified model group",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-package-type",
          description:
            "A filter that returns only the model packages of the specified type. This can be one of the following values.    UNVERSIONED - List only unversioined models. This is the default value if no ModelPackageType is specified.    VERSIONED - List only versioned models.    BOTH - List both versioned and unversioned models",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListModelPackages request was truncated, the response includes a NextToken. To retrieve the next set of model packages, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The parameter by which to sort the results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for the results. The default is Ascending",
          args: {
            name: "string",
          },
        },
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
      name: "list-model-quality-job-definitions",
      description:
        "Gets a list of model quality monitoring job definitions in your account",
      options: [
        {
          name: "--endpoint-name",
          description:
            "A filter that returns only model quality monitoring job definitions that are associated with the specified endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Whether to sort the results in Ascending or Descending order. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListModelQualityJobDefinitions request was truncated, the response includes a NextToken. To retrieve the next set of model quality monitoring job definitions, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a call to ListModelQualityJobDefinitions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the transform job name. This filter returns only model quality monitoring job definitions whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only model quality monitoring job definitions created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only model quality monitoring job definitions created after the specified time",
          args: {
            name: "timestamp",
          },
        },
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
      name: "list-models",
      description: "Lists models created with the CreateModel API",
      options: [
        {
          name: "--sort-by",
          description: "Sorts the list of results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to a previous ListModels request was truncated, the response includes a NextToken. To retrieve the next set of models, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of models to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the model name. This filter returns only models whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only models created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only models with a creation time greater than or equal to the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
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
      name: "list-monitoring-alert-history",
      description: "Gets a list of past alerts in a model monitoring schedule",
      options: [
        {
          name: "--monitoring-schedule-name",
          description: "The name of a monitoring schedule",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitoring-alert-name",
          description: "The name of a monitoring alert",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field used to sort results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order, whether Ascending or Descending, of the alert history. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListMonitoringAlertHistory request was truncated, the response includes a NextToken. To retrieve the next set of alerts in the history, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to display. The default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only alerts created on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only alerts created on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves only alerts with a specific status",
          args: {
            name: "string",
          },
        },
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
      name: "list-monitoring-alerts",
      description: "Gets the alerts for a single monitoring schedule",
      options: [
        {
          name: "--monitoring-schedule-name",
          description: "The name of a monitoring schedule",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListMonitoringAlerts request was truncated, the response includes a NextToken. To retrieve the next set of alerts in the history, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to display. The default is 100",
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
      name: "list-monitoring-executions",
      description: "Returns list of all monitoring job executions",
      options: [
        {
          name: "--monitoring-schedule-name",
          description: "Name of a specific schedule to fetch jobs for",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-name",
          description: "Name of a specific endpoint to fetch jobs for",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Whether to sort the results by the Status, CreationTime, or ScheduledTime field. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Whether to sort the results in Ascending or Descending order. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of jobs to return in the response. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--scheduled-time-before",
          description: "Filter for jobs scheduled before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--scheduled-time-after",
          description: "Filter for jobs scheduled after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only jobs created before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only jobs created after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only jobs modified after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only jobs modified before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves only jobs with a specific status",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitoring-job-definition-name",
          description:
            "Gets a list of the monitoring job runs of the specified monitoring job definitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitoring-type-equals",
          description:
            "A filter that returns only the monitoring job runs of the specified monitoring type",
          args: {
            name: "string",
          },
        },
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
      name: "list-monitoring-schedules",
      description: "Returns list of all monitoring schedules",
      options: [
        {
          name: "--endpoint-name",
          description: "Name of a specific endpoint to fetch schedules for",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Whether to sort the results by the Status, CreationTime, or ScheduledTime field. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Whether to sort the results in Ascending or Descending order. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of jobs to return in the response. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "Filter for monitoring schedules whose name contains a specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only monitoring schedules created before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only monitoring schedules created after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only monitoring schedules modified before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only monitoring schedules modified after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that returns only monitoring schedules modified before a specified time",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitoring-job-definition-name",
          description:
            "Gets a list of the monitoring schedules for the specified monitoring job definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitoring-type-equals",
          description:
            "A filter that returns only the monitoring schedules for the specified monitoring type",
          args: {
            name: "string",
          },
        },
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
      name: "list-notebook-instance-lifecycle-configs",
      description:
        "Lists notebook instance lifestyle configurations created with the CreateNotebookInstanceLifecycleConfig API",
      options: [
        {
          name: "--next-token",
          description:
            "If the result of a ListNotebookInstanceLifecycleConfigs request was truncated, the response includes a NextToken. To get the next set of lifecycle configurations, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of lifecycle configurations to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description: "Sorts the list of results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the lifecycle configuration name. This filter returns only lifecycle configurations whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only lifecycle configurations that were created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only lifecycle configurations that were created after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only lifecycle configurations that were modified before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only lifecycle configurations that were modified after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
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
      name: "list-notebook-instances",
      description:
        "Returns a list of the SageMaker notebook instances in the requester's account in an Amazon Web Services Region",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous call to the ListNotebookInstances is truncated, the response includes a NextToken. You can use this token in your subsequent ListNotebookInstances request to fetch the next set of notebook instances.   You might specify a filter or a sort order in your request. When response is truncated, you must use the same values for the filer and sort order in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of notebook instances to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description: "The field to sort results by. The default is Name",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the notebook instances' name. This filter returns only notebook instances whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only notebook instances that were created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only notebook instances that were created after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only notebook instances that were modified before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only notebook instances that were modified after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that returns only notebook instances with the specified status",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-instance-lifecycle-config-name-contains",
          description:
            "A string in the name of a notebook instances lifecycle configuration associated with this notebook instance. This filter returns only notebook instances associated with a lifecycle configuration with a name that contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-code-repository-contains",
          description:
            "A string in the name or URL of a Git repository associated with this notebook instance. This filter returns only notebook instances associated with a git repository with a name that contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-code-repository-equals",
          description:
            "A filter that returns only notebook instances with associated with the specified git repository",
          args: {
            name: "string",
          },
        },
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
      name: "list-pipeline-execution-steps",
      description: "Gets a list of PipeLineExecutionStep objects",
      options: [
        {
          name: "--pipeline-execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListPipelineExecutionSteps request was truncated, the response includes a NextToken. To retrieve the next set of pipeline execution steps, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of pipeline execution steps to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description:
            "The field by which to sort results. The default is CreatedTime",
          args: {
            name: "string",
          },
        },
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
      name: "list-pipeline-executions",
      description: "Gets a list of the pipeline executions",
      options: [
        {
          name: "--pipeline-name",
          description: "The name or Amazon Resource Name (ARN) of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-after",
          description:
            "A filter that returns the pipeline executions that were created after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A filter that returns the pipeline executions that were created before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field by which to sort results. The default is CreatedTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListPipelineExecutions request was truncated, the response includes a NextToken. To retrieve the next set of pipeline executions, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of pipeline executions to return in the response",
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
      name: "list-pipeline-parameters-for-execution",
      description: "Gets a list of parameters for a pipeline execution",
      options: [
        {
          name: "--pipeline-execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListPipelineParametersForExecution request was truncated, the response includes a NextToken. To retrieve the next set of parameters, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of parameters to return in the response",
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
      name: "list-pipelines",
      description: "Gets a list of pipelines",
      options: [
        {
          name: "--pipeline-name-prefix",
          description: "The prefix of the pipeline name",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-after",
          description:
            "A filter that returns the pipelines that were created after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A filter that returns the pipelines that were created before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field by which to sort results. The default is CreatedTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListPipelines request was truncated, the response includes a NextToken. To retrieve the next set of pipelines, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of pipelines to return in the response",
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
      name: "list-processing-jobs",
      description: "Lists processing jobs that satisfy various filters",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only processing jobs created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only processing jobs created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only processing jobs modified after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only processing jobs modified before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the processing job name. This filter returns only processing jobs whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves only processing jobs with a specific status",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListProcessingJobs request was truncated, the response includes a NextToken. To retrieve the next set of processing jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of processing jobs to return in the response",
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
      name: "list-projects",
      description:
        "Gets a list of the projects in an Amazon Web Services account",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns the projects that were created after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns the projects that were created before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of projects to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "A filter that returns the projects whose name contains a specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListProjects request was truncated, the response includes a NextToken. To retrieve the next set of projects, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field by which to sort results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-resource-catalogs",
      description:
        "Lists Amazon SageMaker Catalogs based on given filters and orders. The maximum number of ResourceCatalogs viewable is 1000",
      options: [
        {
          name: "--name-contains",
          description:
            "A string that partially matches one or more ResourceCatalogs names. Filters ResourceCatalog by name",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Use this parameter to search for ResourceCatalogs created after a specific date and time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Use this parameter to search for ResourceCatalogs created before a specific date and time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-order",
          description: "The order in which the resource catalogs are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The value on which the resource catalog list is sorted",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by ListResourceCatalogs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to resume pagination of ListResourceCatalogs results",
          args: {
            name: "string",
          },
        },
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
      name: "list-spaces",
      description: "Lists spaces",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "This parameter defines the maximum number of results that can be returned in a single response. The MaxResults parameter is an upper bound, not a target. If there are more results available than the value specified, a NextToken is provided in the response. The NextToken indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for MaxResults is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for the results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The parameter by which to sort the results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-id-equals",
          description: "A parameter to search for the domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-name-contains",
          description: "A parameter by which to filter the results",
          args: {
            name: "string",
          },
        },
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
      name: "list-stage-devices",
      description:
        "Lists devices allocated to the stage, containing detailed device information and deployment status",
      options: [
        {
          name: "--next-token",
          description:
            "The response from the last list when returning a list large enough to neeed tokening",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of requests to select",
          args: {
            name: "integer",
          },
        },
        {
          name: "--edge-deployment-plan-name",
          description: "The name of the edge deployment plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclude-devices-deployed-in-other-stage",
          description: "Toggle for excluding devices deployed in other stages",
        },
        {
          name: "--no-exclude-devices-deployed-in-other-stage",
          description: "Toggle for excluding devices deployed in other stages",
        },
        {
          name: "--stage-name",
          description: "The name of the stage in the deployment",
          args: {
            name: "string",
          },
        },
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
      name: "list-studio-lifecycle-configs",
      description:
        "Lists the Amazon SageMaker Studio Lifecycle Configurations in your Amazon Web Services Account",
      options: [
        {
          name: "--max-results",
          description:
            "The total number of items to return in the response. If the total number of items available is more than the value specified, a NextToken is provided in the response. To resume pagination, provide the NextToken value in the as part of a subsequent call. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListStudioLifecycleConfigs didn't return the full set of Lifecycle Configurations, the call returns a token for getting the next set of Lifecycle Configurations",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the Lifecycle Configuration name. This filter returns only Lifecycle Configurations whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-type-equals",
          description:
            "A parameter to search for the App Type to which the Lifecycle Configuration is attached",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only Lifecycle Configurations created on or before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only Lifecycle Configurations created on or after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--modified-time-before",
          description:
            "A filter that returns only Lifecycle Configurations modified before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--modified-time-after",
          description:
            "A filter that returns only Lifecycle Configurations modified after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is Descending",
          args: {
            name: "string",
          },
        },
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
      name: "list-subscribed-workteams",
      description:
        "Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The list may be empty if no work team satisfies the filter specified in the NameContains parameter",
      options: [
        {
          name: "--name-contains",
          description:
            "A string in the work team name. This filter returns only work teams whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListSubscribedWorkteams request was truncated, the response includes a NextToken. To retrieve the next set of labeling jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of work teams to return in each page of the response",
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
      name: "list-tags",
      description: "Returns the tags for the specified SageMaker resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to the previous ListTags request is truncated, SageMaker returns this token. To retrieve the next set of tags, use it in the subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of tags to return",
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
      name: "list-training-jobs",
      description:
        "Lists training jobs.  When StatusEquals and MaxResults are set at the same time, the MaxResults number of training jobs are first retrieved ignoring the StatusEquals parameter and then they are filtered by the StatusEquals parameter, which is returned as a response. For example, if ListTrainingJobs is invoked with the following parameters:  { ... MaxResults: 100, StatusEquals: InProgress ... }  First, 100 trainings jobs with any status, including those other than InProgress, are selected (sorted according to the creation time, from the most current to the oldest). Next, those with a status of InProgress are returned. You can quickly test the API using the following Amazon Web Services CLI code.  aws sagemaker list-training-jobs --max-results 100 --status-equals InProgress",
      options: [
        {
          name: "--next-token",
          description:
            "If the result of the previous ListTrainingJobs request was truncated, the response includes a NextToken. To retrieve the next set of training jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of training jobs to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only training jobs created after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only training jobs created before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only training jobs modified after the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only training jobs modified before the specified time (timestamp)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the training job name. This filter returns only training jobs whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves only training jobs with a specific status",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--warm-pool-status-equals",
          description:
            "A filter that retrieves only training jobs with a specific warm pool status",
          args: {
            name: "string",
          },
        },
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
      name: "list-training-jobs-for-hyper-parameter-tuning-job",
      description:
        "Gets a list of TrainingJobSummary objects that describe the training jobs that a hyperparameter tuning job launched",
      options: [
        {
          name: "--hyper-parameter-tuning-job-name",
          description:
            "The name of the tuning job whose training jobs you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListTrainingJobsForHyperParameterTuningJob request was truncated, the response includes a NextToken. To retrieve the next set of training jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of training jobs to return. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that returns only training jobs with the specified status",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is Name. If the value of this field is FinalObjectiveMetricValue, any training jobs that did not return an objective metric are not listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
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
      name: "list-transform-jobs",
      description: "Lists transform jobs",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns only transform jobs created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns only transform jobs created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-after",
          description:
            "A filter that returns only transform jobs modified after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-time-before",
          description:
            "A filter that returns only transform jobs modified before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the transform job name. This filter returns only transform jobs whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves only transform jobs with a specific status",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListTransformJobs request was truncated, the response includes a NextToken. To retrieve the next set of transform jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of transform jobs to return in the response. The default value is 10",
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
      name: "list-trial-components",
      description:
        "Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:    ExperimentName     SourceArn     TrialName",
      options: [
        {
          name: "--experiment-name",
          description:
            "A filter that returns only components that are part of the specified experiment. If you specify ExperimentName, you can't filter by SourceArn or TrialName",
          args: {
            name: "string",
          },
        },
        {
          name: "--trial-name",
          description:
            "A filter that returns only components that are part of the specified trial. If you specify TrialName, you can't filter by ExperimentName or SourceArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-arn",
          description:
            "A filter that returns only components that have the specified source Amazon Resource Name (ARN). If you specify SourceArn, you can't filter by ExperimentName or TrialName",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-after",
          description:
            "A filter that returns only components created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A filter that returns only components created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of components to return in the response. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListTrialComponents didn't return the full set of components, the call returns a token for getting the next set of components",
          args: {
            name: "string",
          },
        },
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
      name: "list-trials",
      description:
        "Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time",
      options: [
        {
          name: "--experiment-name",
          description:
            "A filter that returns only trials that are part of the specified experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--trial-component-name",
          description:
            "A filter that returns only trials that are associated with the specified trial component",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-after",
          description:
            "A filter that returns only trials created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "A filter that returns only trials created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "The property used to sort results. The default value is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order. The default value is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of trials to return in the response. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous call to ListTrials didn't return the full set of trials, the call returns a token for getting the next set of trials",
          args: {
            name: "string",
          },
        },
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
      name: "list-user-profiles",
      description: "Lists user profiles",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "This parameter defines the maximum number of results that can be returned in a single response. The MaxResults parameter is an upper bound, not a target. If there are more results available than the value specified, a NextToken is provided in the response. The NextToken indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for MaxResults is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order for the results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The parameter by which to sort the results. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-id-equals",
          description: "A parameter by which to filter the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name-contains",
          description: "A parameter by which to filter the results",
          args: {
            name: "string",
          },
        },
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
      name: "list-workforces",
      description:
        "Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only have one private workforce per Amazon Web Services Region",
      options: [
        {
          name: "--sort-by",
          description:
            "Sort workforces using the workforce name or creation date",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "Sort workforces in ascending or descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A filter you can use to search for workforces using part of the workforce name",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A token to resume pagination",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of workforces returned in the response",
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
      name: "list-workteams",
      description:
        "Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the NameContains parameter",
      options: [
        {
          name: "--sort-by",
          description:
            "The field to sort results by. The default is CreationTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for results. The default is Ascending",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A string in the work team's name. This filter returns only work teams whose name contains the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous ListWorkteams request was truncated, the response includes a NextToken. To retrieve the next set of labeling jobs, use the token in the next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of work teams to return in each page of the response",
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
      name: "put-model-package-group-policy",
      description:
        "Adds a resouce policy to control access to a model group. For information about resoure policies, see Identity-based policies and resource-based policies in the Amazon Web Services Identity and Access Management User Guide",
      options: [
        {
          name: "--model-package-group-name",
          description:
            "The name of the model group to add a resource policy to",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-policy",
          description: "The resource policy for the model group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "query-lineage",
      description:
        "Use this action to inspect your lineage and discover relationships between entities. For more information, see  Querying Lineage Entities in the Amazon SageMaker Developer Guide",
      options: [
        {
          name: "--start-arns",
          description:
            "A list of resource Amazon Resource Name (ARN) that represent the starting point for your lineage query",
          args: {
            name: "list",
          },
        },
        {
          name: "--direction",
          description:
            "Associations between lineage entities have a direction. This parameter determines the direction from the StartArn(s) that the query traverses",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-edges",
          description:
            "Setting this value to True retrieves not only the entities of interest but also the Associations and lineage entities on the path. Set to False to only return lineage entities that match your query",
        },
        {
          name: "--no-include-edges",
          description:
            "Setting this value to True retrieves not only the entities of interest but also the Associations and lineage entities on the path. Set to False to only return lineage entities that match your query",
        },
        {
          name: "--filters",
          description:
            "A set of filtering parameters that allow you to specify which entities should be returned.   Properties - Key-value pairs to match on the lineage entities' properties.   LineageTypes - A set of lineage entity types to match on. For example: TrialComponent, Artifact, or Context.   CreatedBefore - Filter entities created before this date.   ModifiedBefore - Filter entities modified before this date.   ModifiedAfter - Filter entities modified after this date",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-depth",
          description:
            "The maximum depth in lineage relationships from the StartArns that are traversed. Depth is a measure of the number of Associations from the StartArn entity to the matched results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-results",
          description:
            "Limits the number of vertices in the results. Use the NextToken in a response to to retrieve the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Limits the number of vertices in the request. Use the NextToken in a response to to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "register-devices",
      description: "Register devices",
      options: [
        {
          name: "--device-fleet-name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--devices",
          description:
            "A list of devices to register with SageMaker Edge Manager",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags associated with devices",
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
      name: "render-ui-template",
      description:
        "Renders the UI template so that you can preview the worker's experience",
      options: [
        {
          name: "--ui-template",
          description:
            "A Template object containing the worker UI template to render",
          args: {
            name: "structure",
          },
        },
        {
          name: "--task",
          description:
            "A RenderableTask object containing a representative task to render",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) that has access to the S3 objects that are used by the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--human-task-ui-arn",
          description:
            "The HumanTaskUiArn of the worker UI that you want to render. Do not provide a HumanTaskUiArn if you use the UiTemplate parameter. See a list of available Human Ui Amazon Resource Names (ARNs) in UiConfig",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "retry-pipeline-execution",
      description: "Retry the execution of the pipeline",
      options: [
        {
          name: "--pipeline-execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once",
          args: {
            name: "string",
          },
        },
        {
          name: "--parallelism-configuration",
          description:
            "This configuration, if specified, overrides the parallelism configuration of the parent pipeline",
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
      name: "search",
      description:
        "Finds SageMaker resources that match a search query. Matching resources are returned as a list of SearchRecord objects in the response. You can sort the search results by any resource property in a ascending or descending order. You can query against the following value types: numeric, text, Boolean, and timestamp.  The Search API may provide access to otherwise restricted data. See Amazon SageMaker API Permissions: Actions, Permissions, and Resources Reference for more information",
      options: [
        {
          name: "--resource",
          description: "The name of the SageMaker resource to search for",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-expression",
          description:
            "A Boolean conditional statement. Resources must satisfy this condition to be included in search results. You must provide at least one subexpression, filter, or nested filter. The maximum number of recursive SubExpressions, NestedFilters, and Filters that can be included in a SearchExpression object is 50",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The name of the resource property used to sort the SearchResults. The default is LastModifiedTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If more than MaxResults resources match the specified SearchExpression, the response includes a NextToken. The NextToken can be passed to the next SearchRequest to continue retrieving results",
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
          name: "--cross-account-filter-option",
          description:
            'A cross account filter option. When the value is "CrossAccount" the search results will only include resources made discoverable to you from other accounts. When the value is "SameAccount" or null the search results will only include resources from your account. Default is null. For more information on searching for resources made discoverable to your account, see  Search discoverable resources in the SageMaker Developer Guide. The maximum number of ResourceCatalogs viewable is 1000',
          args: {
            name: "string",
          },
        },
        {
          name: "--visibility-conditions",
          description:
            "Limits the results of your search request to the resources that you can access",
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
      name: "send-pipeline-execution-step-failure",
      description:
        "Notifies the pipeline that the execution of a callback step failed, along with a message describing why. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS)",
      options: [
        {
          name: "--callback-token",
          description: "The pipeline generated token from the Amazon SQS queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--failure-reason",
          description: "A message describing why the step failed",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "send-pipeline-execution-step-success",
      description:
        "Notifies the pipeline that the execution of a callback step succeeded and provides a list of the step's output parameters. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS)",
      options: [
        {
          name: "--callback-token",
          description: "The pipeline generated token from the Amazon SQS queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-parameters",
          description: "A list of the output parameters of the callback step",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-edge-deployment-stage",
      description: "Starts a stage in an edge deployment plan",
      options: [
        {
          name: "--edge-deployment-plan-name",
          description: "The name of the edge deployment plan to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description: "The name of the stage to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-inference-experiment",
      description: "Starts an inference experiment",
      options: [
        {
          name: "--name",
          description: "The name of the inference experiment to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-monitoring-schedule",
      description:
        "Starts a previously stopped monitoring schedule.  By default, when you successfully create a new schedule, the status of a monitoring schedule is scheduled",
      options: [
        {
          name: "--monitoring-schedule-name",
          description: "The name of the schedule to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-notebook-instance",
      description:
        "Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, SageMaker sets the notebook instance status to InService. A notebook instance's status must be InService before you can connect to your Jupyter notebook",
      options: [
        {
          name: "--notebook-instance-name",
          description: "The name of the notebook instance to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-pipeline-execution",
      description: "Starts a pipeline execution",
      options: [
        {
          name: "--pipeline-name",
          description: "The name or Amazon Resource Name (ARN) of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-execution-display-name",
          description: "The display name of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-parameters",
          description:
            "Contains a list of pipeline parameters. This list can be empty",
          args: {
            name: "list",
          },
        },
        {
          name: "--pipeline-execution-description",
          description: "The description of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once",
          args: {
            name: "string",
          },
        },
        {
          name: "--parallelism-configuration",
          description:
            "This configuration, if specified, overrides the parallelism configuration of the parent pipeline for this specific run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--selective-execution-config",
          description:
            "The selective execution configuration applied to the pipeline run",
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
      name: "stop-auto-ml-job",
      description: "A method for forcing a running job to shut down",
      options: [
        {
          name: "--auto-ml-job-name",
          description: "The name of the object you are requesting",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-compilation-job",
      description:
        "Stops a model compilation job.  To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal. When it receives a StopCompilationJob request, Amazon SageMaker changes the CompilationJobStatus of the job to Stopping. After Amazon SageMaker stops the job, it sets the CompilationJobStatus to Stopped",
      options: [
        {
          name: "--compilation-job-name",
          description: "The name of the model compilation job to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-edge-deployment-stage",
      description: "Stops a stage in an edge deployment plan",
      options: [
        {
          name: "--edge-deployment-plan-name",
          description: "The name of the edge deployment plan to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description: "The name of the stage to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-edge-packaging-job",
      description: "Request to stop an edge packaging job",
      options: [
        {
          name: "--edge-packaging-job-name",
          description: "The name of the edge packaging job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-hyper-parameter-tuning-job",
      description:
        "Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched. All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the Stopped state, it releases all reserved resources for the tuning job",
      options: [
        {
          name: "--hyper-parameter-tuning-job-name",
          description: "The name of the tuning job to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-inference-experiment",
      description: "Stops an inference experiment",
      options: [
        {
          name: "--name",
          description: "The name of the inference experiment to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-variant-actions",
          description:
            "Array of key-value pairs, with names of variants mapped to actions. The possible actions are the following:     Promote - Promote the shadow variant to a production variant    Remove - Delete the variant    Retain - Keep the variant as it is",
          args: {
            name: "map",
          },
        },
        {
          name: "--desired-model-variants",
          description:
            "An array of ModelVariantConfig objects. There is one for each variant that you want to deploy after the inference experiment stops. Each ModelVariantConfig describes the infrastructure configuration for deploying the corresponding variant",
          args: {
            name: "list",
          },
        },
        {
          name: "--desired-state",
          description:
            "The desired state of the experiment after stopping. The possible states are the following:     Completed: The experiment completed successfully    Cancelled: The experiment was canceled",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description: "The reason for stopping the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-inference-recommendations-job",
      description: "Stops an Inference Recommender job",
      options: [
        {
          name: "--job-name",
          description: "The name of the job you want to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-labeling-job",
      description:
        "Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket",
      options: [
        {
          name: "--labeling-job-name",
          description: "The name of the labeling job to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-monitoring-schedule",
      description: "Stops a previously started monitoring schedule",
      options: [
        {
          name: "--monitoring-schedule-name",
          description: "The name of the schedule to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-notebook-instance",
      description:
        "Terminates the ML compute instance. Before terminating the instance, SageMaker disconnects the ML storage volume from it. SageMaker preserves the ML storage volume. SageMaker stops charging you for the ML compute instance when you call StopNotebookInstance. To access data on the ML storage volume for a notebook instance that has been terminated, call the StartNotebookInstance API. StartNotebookInstance launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work",
      options: [
        {
          name: "--notebook-instance-name",
          description: "The name of the notebook instance to terminate",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-pipeline-execution",
      description:
        'Stops a pipeline execution.  Callback Step  A pipeline execution won\'t stop while a callback step is running. When you call StopPipelineExecution on a pipeline execution with a running callback step, SageMaker Pipelines sends an additional Amazon SQS message to the specified SQS queue. The body of the SQS message contains a "Status" field which is set to "Stopping". You should add logic to your Amazon SQS message consumer to take any needed action (for example, resource cleanup) upon receipt of the message followed by a call to SendPipelineExecutionStepSuccess or SendPipelineExecutionStepFailure. Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution.  Lambda Step  A pipeline execution can\'t be stopped while a lambda step is running because the Lambda function invoked by the lambda step can\'t be stopped. If you attempt to stop the execution while the Lambda function is running, the pipeline waits for the Lambda function to finish or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function finishes, the pipeline execution status is Stopped. If the timeout is hit the pipeline execution status is Failed',
      options: [
        {
          name: "--pipeline-execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-processing-job",
      description: "Stops a processing job",
      options: [
        {
          name: "--processing-job-name",
          description: "The name of the processing job to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-training-job",
      description:
        "Stops a training job. To stop a job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost.  When it receives a StopTrainingJob request, SageMaker changes the status of the job to Stopping. After SageMaker stops the job, it sets the status to Stopped",
      options: [
        {
          name: "--training-job-name",
          description: "The name of the training job to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-transform-job",
      description:
        "Stops a batch transform job. When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping. After Amazon SageMaker stops the job, the status is set to Stopped. When you stop a batch transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3",
      options: [
        {
          name: "--transform-job-name",
          description: "The name of the batch transform job to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-action",
      description: "Updates an action",
      options: [
        {
          name: "--action-name",
          description: "The name of the action to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description for the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The new status for the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--properties",
          description:
            "The new list of properties. Overwrites the current property list",
          args: {
            name: "map",
          },
        },
        {
          name: "--properties-to-remove",
          description: "A list of properties to remove",
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
      name: "update-app-image-config",
      description: "Updates the properties of an AppImageConfig",
      options: [
        {
          name: "--app-image-config-name",
          description: "The name of the AppImageConfig to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--kernel-gateway-image-config",
          description: "The new KernelGateway app to run on the image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--jupyter-lab-app-image-config",
          description: "The JupyterLab app running on the image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--code-editor-app-image-config",
          description: "The Code Editor app running on the image",
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
      name: "update-artifact",
      description: "Updates an artifact",
      options: [
        {
          name: "--artifact-arn",
          description:
            "The Amazon Resource Name (ARN) of the artifact to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--artifact-name",
          description: "The new name for the artifact",
          args: {
            name: "string",
          },
        },
        {
          name: "--properties",
          description:
            "The new list of properties. Overwrites the current property list",
          args: {
            name: "map",
          },
        },
        {
          name: "--properties-to-remove",
          description: "A list of properties to remove",
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
      name: "update-cluster",
      description: "Updates a SageMaker HyperPod cluster",
      options: [
        {
          name: "--cluster-name",
          description:
            "Specify the name of the SageMaker HyperPod cluster you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-groups",
          description: "Specify the instance groups to update",
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
      name: "update-cluster-software",
      description:
        "Updates the platform software of a SageMaker HyperPod cluster for security patching. To learn how to use this API, see Update the SageMaker HyperPod platform software of a cluster",
      options: [
        {
          name: "--cluster-name",
          description:
            "Specify the name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster you want to update for security patching",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-code-repository",
      description:
        "Updates the specified Git repository with the specified values",
      options: [
        {
          name: "--code-repository-name",
          description: "The name of the Git repository to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--git-config",
          description:
            'The configuration of the git repository, including the URL and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the repository. The secret must have a staging label of AWSCURRENT and must be in the following format:  {"username": UserName, "password": Password}',
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
      name: "update-context",
      description: "Updates a context",
      options: [
        {
          name: "--context-name",
          description: "The name of the context to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description for the context",
          args: {
            name: "string",
          },
        },
        {
          name: "--properties",
          description:
            "The new list of properties. Overwrites the current property list",
          args: {
            name: "map",
          },
        },
        {
          name: "--properties-to-remove",
          description: "A list of properties to remove",
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
      name: "update-device-fleet",
      description: "Updates a fleet of devices",
      options: [
        {
          name: "--device-fleet-name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description: "The Amazon Resource Name (ARN) of the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Description of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-config",
          description:
            "Output configuration for storing sample data collected by the fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enable-iot-role-alias",
          description:
            'Whether to create an Amazon Web Services IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-{DeviceFleetName}". For example, if your device fleet is called "demo-fleet", the name of the role alias will be "SageMakerEdge-demo-fleet"',
        },
        {
          name: "--no-enable-iot-role-alias",
          description:
            'Whether to create an Amazon Web Services IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-{DeviceFleetName}". For example, if your device fleet is called "demo-fleet", the name of the role alias will be "SageMakerEdge-demo-fleet"',
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-devices",
      description: "Updates one or more devices in a fleet",
      options: [
        {
          name: "--device-fleet-name",
          description: "The name of the fleet the devices belong to",
          args: {
            name: "string",
          },
        },
        {
          name: "--devices",
          description: "List of devices to register with Edge Manager agent",
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
      name: "update-domain",
      description:
        "Updates the default settings for new user profiles in the domain",
      options: [
        {
          name: "--domain-id",
          description: "The ID of the domain to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-user-settings",
          description: "A collection of settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--domain-settings-for-update",
          description:
            "A collection of DomainSettings configuration values to update",
          args: {
            name: "structure",
          },
        },
        {
          name: "--app-security-group-management",
          description:
            "The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided. If setting up the domain for use with RStudio, this value must be set to Service",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-space-settings",
          description:
            "The default settings used to create a space within the domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "The VPC subnets that Studio uses for communication. If removing subnets, ensure there are no apps in the InService, Pending, or Deleting state",
          args: {
            name: "list",
          },
        },
        {
          name: "--app-network-access-type",
          description:
            "Specifies the VPC used for non-EFS traffic.    PublicInternetOnly - Non-EFS traffic is through a VPC managed by Amazon SageMaker, which allows direct internet access.    VpcOnly - All Studio traffic is through the specified VPC and subnets.   This configuration can only be modified if there are no apps in the InService, Pending, or Deleting state. The configuration cannot be updated if DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is already set or DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided as part of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-endpoint",
      description:
        "Deploys the EndpointConfig specified in the request to a new fleet of instances. SageMaker shifts endpoint traffic to the new instances with the updated endpoint configuration and then deletes the old instances using the previous EndpointConfig (there is no availability loss). For more information about how to control the update and traffic shifting process, see  Update models in production. When SageMaker receives the request, it sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API.   You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges",
      options: [
        {
          name: "--endpoint-name",
          description:
            "The name of the endpoint whose configuration you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-config-name",
          description: "The name of the new endpoint configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--retain-all-variant-properties",
          description:
            "When updating endpoint resources, enables or disables the retention of variant properties, such as the instance count or the variant weight. To retain the variant properties of an endpoint when updating it, set RetainAllVariantProperties to true. To use the variant properties specified in a new EndpointConfig call when updating an endpoint, set RetainAllVariantProperties to false. The default is false",
        },
        {
          name: "--no-retain-all-variant-properties",
          description:
            "When updating endpoint resources, enables or disables the retention of variant properties, such as the instance count or the variant weight. To retain the variant properties of an endpoint when updating it, set RetainAllVariantProperties to true. To use the variant properties specified in a new EndpointConfig call when updating an endpoint, set RetainAllVariantProperties to false. The default is false",
        },
        {
          name: "--exclude-retained-variant-properties",
          description:
            "When you are updating endpoint resources with RetainAllVariantProperties, whose value is set to true, ExcludeRetainedVariantProperties specifies the list of type VariantProperty to override with the values provided by EndpointConfig. If you don't specify a value for ExcludeRetainedVariantProperties, no variant properties are overridden",
          args: {
            name: "list",
          },
        },
        {
          name: "--deployment-config",
          description:
            "The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retain-deployment-config",
          description:
            "Specifies whether to reuse the last deployment configuration. The default value is false (the configuration is not reused)",
        },
        {
          name: "--no-retain-deployment-config",
          description:
            "Specifies whether to reuse the last deployment configuration. The default value is false (the configuration is not reused)",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-endpoint-weights-and-capacities",
      description:
        "Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, SageMaker sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API",
      options: [
        {
          name: "--endpoint-name",
          description: "The name of an existing SageMaker endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-weights-and-capacities",
          description:
            "An object that provides new capacity and weight values for a variant",
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
      name: "update-experiment",
      description:
        "Adds, updates, or removes the description of an experiment. Updates the display name of an experiment",
      options: [
        {
          name: "--experiment-name",
          description: "The name of the experiment to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The name of the experiment as displayed. The name doesn't need to be unique. If DisplayName isn't specified, ExperimentName is displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-feature-group",
      description:
        "Updates the feature group by either adding features or updating the online store configuration. Use one of the following request parameters at a time while using the UpdateFeatureGroup API. You can add features for your feature group using the FeatureAdditions request parameter. Features cannot be removed from a feature group. You can update the online store configuration by using the OnlineStoreConfig request parameter. If a TtlDuration is specified, the default TtlDuration applies for all records added to the feature group after the feature group is updated. If a record level TtlDuration exists from using the PutRecord API, the record level TtlDuration applies to that record instead of the default TtlDuration. To remove the default TtlDuration from an existing feature group, use the UpdateFeatureGroup API and set the TtlDuration Unit and Value to null",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-additions",
          description:
            "Updates the feature group. Updating a feature group is an asynchronous operation. When you get an HTTP 200 response, you've made a valid request. It takes some time after you've made a valid request for Feature Store to update the feature group",
          args: {
            name: "list",
          },
        },
        {
          name: "--online-store-config",
          description: "Updates the feature group online store configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--throughput-config",
          description:
            "The new throughput configuration for the feature group. You can switch between on-demand and provisioned modes or update the read / write capacity of provisioned feature groups. You can switch a feature group to on-demand only once in a 24 hour period",
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
      name: "update-feature-metadata",
      description:
        "Updates the description and parameters of the feature group",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group containing the feature that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-name",
          description: "The name of the feature that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description that you can write to better describe the feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameter-additions",
          description:
            "A list of key-value pairs that you can add to better describe the feature",
          args: {
            name: "list",
          },
        },
        {
          name: "--parameter-removals",
          description:
            "A list of parameter keys that you can specify to remove parameters that describe your feature",
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
      name: "update-hub",
      description:
        "Update a hub.  Hub APIs are only callable through SageMaker Studio",
      options: [
        {
          name: "--hub-name",
          description: "The name of the hub to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-description",
          description: "A description of the updated hub",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-display-name",
          description: "The display name of the hub",
          args: {
            name: "string",
          },
        },
        {
          name: "--hub-search-keywords",
          description: "The searchable keywords for the hub",
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
      name: "update-image",
      description:
        "Updates the properties of a SageMaker image. To change the image's tags, use the AddTags and DeleteTags APIs",
      options: [
        {
          name: "--delete-properties",
          description:
            "A list of properties to delete. Only the Description and DisplayName properties can be deleted",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "The new description for the image",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The new display name for the image",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-name",
          description: "The name of the image to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The new ARN for the IAM role that enables Amazon SageMaker to perform tasks on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-image-version",
      description: "Updates the properties of a SageMaker image version",
      options: [
        {
          name: "--image-name",
          description: "The name of the image",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description: "The alias of the image version",
          args: {
            name: "string",
          },
        },
        {
          name: "--aliases-to-add",
          description: "A list of aliases to add",
          args: {
            name: "list",
          },
        },
        {
          name: "--aliases-to-delete",
          description: "A list of aliases to delete",
          args: {
            name: "list",
          },
        },
        {
          name: "--vendor-guidance",
          description:
            "The availability of the image version specified by the maintainer.    NOT_PROVIDED: The maintainers did not provide a status for image version stability.    STABLE: The image version is stable.    TO_BE_ARCHIVED: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months.    ARCHIVED: The image version is archived. Archived image versions are not searchable and are no longer actively supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-type",
          description:
            "Indicates SageMaker job type compatibility.    TRAINING: The image version is compatible with SageMaker training jobs.    INFERENCE: The image version is compatible with SageMaker inference jobs.    NOTEBOOK_KERNEL: The image version is compatible with SageMaker notebook kernels",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-framework",
          description:
            "The machine learning framework vended in the image version",
          args: {
            name: "string",
          },
        },
        {
          name: "--programming-lang",
          description: "The supported programming language and its version",
          args: {
            name: "string",
          },
        },
        {
          name: "--processor",
          description:
            "Indicates CPU or GPU compatibility.    CPU: The image version is compatible with CPU.    GPU: The image version is compatible with GPU",
          args: {
            name: "string",
          },
        },
        {
          name: "--horovod",
          description: "Indicates Horovod compatibility",
        },
        {
          name: "--no-horovod",
          description: "Indicates Horovod compatibility",
        },
        {
          name: "--release-notes",
          description: "The maintainer description of the image version",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description: "The version of the image",
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
      name: "update-inference-component",
      description: "Updates an inference component",
      options: [
        {
          name: "--inference-component-name",
          description: "The name of the inference component",
          args: {
            name: "string",
          },
        },
        {
          name: "--specification",
          description:
            "Details about the resources to deploy with this inference component, including the model, container, and compute resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--runtime-config",
          description:
            "Runtime settings for a model that is deployed with an inference component",
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
      name: "update-inference-component-runtime-config",
      description:
        "Runtime settings for a model that is deployed with an inference component",
      options: [
        {
          name: "--inference-component-name",
          description: "The name of the inference component to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-runtime-config",
          description:
            "Runtime settings for a model that is deployed with an inference component",
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
      name: "update-inference-experiment",
      description:
        "Updates an inference experiment that you created. The status of the inference experiment has to be either Created, Running. For more information on the status of an inference experiment, see DescribeInferenceExperiment",
      options: [
        {
          name: "--name",
          description: "The name of the inference experiment to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "The duration for which the inference experiment will run. If the status of the inference experiment is Created, then you can update both the start and end dates. If the status of the inference experiment is Running, then you can update only the end date",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The description of the inference experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-variants",
          description:
            "An array of ModelVariantConfig objects. There is one for each variant, whose infrastructure configuration you want to update",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-storage-config",
          description:
            "The Amazon S3 location and configuration for storing inference request and response data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--shadow-mode-config",
          description:
            "The configuration of ShadowMode inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates",
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
      name: "update-model-card",
      description:
        "Update an Amazon SageMaker Model Card.  You cannot update both model card content and model card status in a single call",
      options: [
        {
          name: "--model-card-name",
          description:
            "The name or Amazon Resource Name (ARN) of the model card to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "The updated model card content. Content must be in model card JSON schema and provided as a string. When updating model card content, be sure to include the full content and not just updated content",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-card-status",
          description:
            "The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.    Draft: The model card is a work in progress.    PendingReview: The model card is pending review.    Approved: The model card is approved.    Archived: The model card is archived. No more updates should be made to the model card, but it can still be exported",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-model-package",
      description: "Updates a versioned model",
      options: [
        {
          name: "--model-package-arn",
          description: "The Amazon Resource Name (ARN) of the model package",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-approval-status",
          description: "The approval status of the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-description",
          description: "A description for the approval status of the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-metadata-properties",
          description:
            "The metadata properties associated with the model package versions",
          args: {
            name: "map",
          },
        },
        {
          name: "--customer-metadata-properties-to-remove",
          description:
            "The metadata properties associated with the model package versions to remove",
          args: {
            name: "list",
          },
        },
        {
          name: "--additional-inference-specifications-to-add",
          description:
            "An array of additional Inference Specification objects to be added to the existing array additional Inference Specification. Total number of additional Inference Specifications can not exceed 15. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts",
          args: {
            name: "list",
          },
        },
        {
          name: "--inference-specification",
          description:
            "Specifies details about inference jobs that you can run with models based on this model package, including the following information:   The Amazon ECR paths of containers that contain the inference code and model artifacts.   The instance types that the model package supports for transform jobs and real-time endpoints used for inference.   The input and output content formats that the model package supports for inference",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-uri",
          description: "The URI of the source for the model package",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-monitoring-alert",
      description: "Update the parameters of a model monitor alert",
      options: [
        {
          name: "--monitoring-schedule-name",
          description: "The name of a monitoring schedule",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitoring-alert-name",
          description: "The name of a monitoring alert",
          args: {
            name: "string",
          },
        },
        {
          name: "--datapoints-to-alert",
          description:
            "Within EvaluationPeriod, how many execution failures will raise an alert",
          args: {
            name: "integer",
          },
        },
        {
          name: "--evaluation-period",
          description:
            "The number of most recent monitoring executions to consider when evaluating alert status",
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
      name: "update-monitoring-schedule",
      description: "Updates a previously created schedule",
      options: [
        {
          name: "--monitoring-schedule-name",
          description:
            "The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within an Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitoring-schedule-config",
          description:
            "The configuration object that specifies the monitoring schedule and defines the monitoring job",
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
      name: "update-notebook-instance",
      description:
        "Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements",
      options: [
        {
          name: "--notebook-instance-name",
          description: "The name of the notebook instance to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-type",
          description: "The Amazon ML compute instance type",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access the notebook instance. For more information, see SageMaker Roles.   To be able to pass this role to SageMaker, the caller of this API must have the iam:PassRole permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-config-name",
          description:
            "The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--disassociate-lifecycle-config",
          description:
            "Set to true to remove the notebook instance lifecycle configuration currently associated with the notebook instance. This operation is idempotent. If you specify a lifecycle configuration that is not associated with the notebook instance when you call this method, it does not throw an error",
        },
        {
          name: "--no-disassociate-lifecycle-config",
          description:
            "Set to true to remove the notebook instance lifecycle configuration currently associated with the notebook instance. This operation is idempotent. If you specify a lifecycle configuration that is not associated with the notebook instance when you call this method, it does not throw an error",
        },
        {
          name: "--volume-size-in-gb",
          description:
            "The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB. ML storage volumes are encrypted, so SageMaker can't determine the amount of available free space on the volume. Because of this, you can increase the volume size when you update a notebook instance, but you can't decrease the volume size. If you want to decrease the size of the ML storage volume in use, create a new notebook instance with the desired size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--default-code-repository",
          description:
            "The Git repository to associate with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in Amazon Web Services CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with SageMaker Notebook Instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-code-repositories",
          description:
            "An array of up to three Git repositories to associate with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in Amazon Web Services CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with SageMaker Notebook Instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--accelerator-types",
          description:
            "A list of the Elastic Inference (EI) instance types to associate with this notebook instance. Currently only one EI instance type can be associated with a notebook instance. For more information, see Using Elastic Inference in Amazon SageMaker",
          args: {
            name: "list",
          },
        },
        {
          name: "--disassociate-accelerator-types",
          description:
            "A list of the Elastic Inference (EI) instance types to remove from this notebook instance. This operation is idempotent. If you specify an accelerator type that is not associated with the notebook instance when you call this method, it does not throw an error",
        },
        {
          name: "--no-disassociate-accelerator-types",
          description:
            "A list of the Elastic Inference (EI) instance types to remove from this notebook instance. This operation is idempotent. If you specify an accelerator type that is not associated with the notebook instance when you call this method, it does not throw an error",
        },
        {
          name: "--disassociate-default-code-repository",
          description:
            "The name or URL of the default Git repository to remove from this notebook instance. This operation is idempotent. If you specify a Git repository that is not associated with the notebook instance when you call this method, it does not throw an error",
        },
        {
          name: "--no-disassociate-default-code-repository",
          description:
            "The name or URL of the default Git repository to remove from this notebook instance. This operation is idempotent. If you specify a Git repository that is not associated with the notebook instance when you call this method, it does not throw an error",
        },
        {
          name: "--disassociate-additional-code-repositories",
          description:
            "A list of names or URLs of the default Git repositories to remove from this notebook instance. This operation is idempotent. If you specify a Git repository that is not associated with the notebook instance when you call this method, it does not throw an error",
        },
        {
          name: "--no-disassociate-additional-code-repositories",
          description:
            "A list of names or URLs of the default Git repositories to remove from this notebook instance. This operation is idempotent. If you specify a Git repository that is not associated with the notebook instance when you call this method, it does not throw an error",
        },
        {
          name: "--root-access",
          description:
            "Whether root access is enabled or disabled for users of the notebook instance. The default value is Enabled.  If you set this to Disabled, users don't have root access on the notebook instance, but lifecycle configuration scripts still run with root permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-metadata-service-configuration",
          description:
            "Information on the IMDS configuration of the notebook instance",
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
      name: "update-notebook-instance-lifecycle-config",
      description:
        "Updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API",
      options: [
        {
          name: "--notebook-instance-lifecycle-config-name",
          description: "The name of the lifecycle configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--on-create",
          description:
            "The shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string",
          args: {
            name: "list",
          },
        },
        {
          name: "--on-start",
          description:
            "The shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string",
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
      name: "update-pipeline",
      description: "Updates a pipeline",
      options: [
        {
          name: "--pipeline-name",
          description: "The name of the pipeline to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-display-name",
          description: "The display name of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-definition",
          description: "The JSON pipeline definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-definition-s3-location",
          description:
            "The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--pipeline-description",
          description: "The description of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) that the pipeline uses to execute",
          args: {
            name: "string",
          },
        },
        {
          name: "--parallelism-configuration",
          description:
            "If specified, it applies to all executions of this pipeline by default",
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
      name: "update-pipeline-execution",
      description: "Updates a pipeline execution",
      options: [
        {
          name: "--pipeline-execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-execution-description",
          description: "The description of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-execution-display-name",
          description: "The display name of the pipeline execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--parallelism-configuration",
          description:
            "This configuration, if specified, overrides the parallelism configuration of the parent pipeline for this specific run",
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
      name: "update-project",
      description:
        "Updates a machine learning (ML) project that is created from a template that sets up an ML pipeline from training to deploying an approved model.  You must not update a project that is in use. If you update the ServiceCatalogProvisioningUpdateDetails of a project that is active or being created, or updated, you may lose resources already created by the project",
      options: [
        {
          name: "--project-name",
          description: "The name of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-description",
          description: "The description for the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-catalog-provisioning-update-details",
          description:
            "The product ID and provisioning artifact ID to provision a service catalog. The provisioning artifact ID will default to the latest provisioning artifact ID of the product, if you don't provide the provisioning artifact ID. For more information, see What is Amazon Web Services Service Catalog",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources. In addition, the project must have tag update constraints set in order to include this parameter in the request. For more information, see Amazon Web Services Service Catalog Tag Update Constraints",
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
      name: "update-space",
      description: "Updates the settings of a space",
      options: [
        {
          name: "--domain-id",
          description: "The ID of the associated domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--space-settings",
          description: "A collection of space settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--space-display-name",
          description:
            "The name of the space that appears in the Amazon SageMaker Studio UI",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-training-job",
      description:
        "Update a model training job to request a new Debugger profiling configuration or to change warm pool retention length",
      options: [
        {
          name: "--training-job-name",
          description:
            "The name of a training job to update the Debugger profiling configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--profiler-config",
          description:
            "Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths",
          args: {
            name: "structure",
          },
        },
        {
          name: "--profiler-rule-configurations",
          description:
            "Configuration information for Amazon SageMaker Debugger rules for profiling system and framework metrics",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-config",
          description:
            "The training job ResourceConfig to update warm pool retention length",
          args: {
            name: "structure",
          },
        },
        {
          name: "--remote-debug-config",
          description:
            "Configuration for remote debugging while the training job is running. You can update the remote debugging configuration when the SecondaryStatus of the job is Downloading or Training.To learn more about the remote debugging functionality of SageMaker, see Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging",
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
      name: "update-trial",
      description: "Updates the display name of a trial",
      options: [
        {
          name: "--trial-name",
          description: "The name of the trial to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The name of the trial as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialName is displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-trial-component",
      description: "Updates one or more properties of a trial component",
      options: [
        {
          name: "--trial-component-name",
          description: "The name of the component to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The name of the component as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The new status of the component",
          args: {
            name: "structure",
          },
        },
        {
          name: "--start-time",
          description: "When the component started",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description: "When the component ended",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--parameters",
          description:
            "Replaces all of the component's hyperparameters with the specified hyperparameters or add new hyperparameters. Existing hyperparameters are replaced if the trial component is updated with an identical hyperparameter key",
          args: {
            name: "map",
          },
        },
        {
          name: "--parameters-to-remove",
          description: "The hyperparameters to remove from the component",
          args: {
            name: "list",
          },
        },
        {
          name: "--input-artifacts",
          description:
            "Replaces all of the component's input artifacts with the specified artifacts or adds new input artifacts. Existing input artifacts are replaced if the trial component is updated with an identical input artifact key",
          args: {
            name: "map",
          },
        },
        {
          name: "--input-artifacts-to-remove",
          description: "The input artifacts to remove from the component",
          args: {
            name: "list",
          },
        },
        {
          name: "--output-artifacts",
          description:
            "Replaces all of the component's output artifacts with the specified artifacts or adds new output artifacts. Existing output artifacts are replaced if the trial component is updated with an identical output artifact key",
          args: {
            name: "map",
          },
        },
        {
          name: "--output-artifacts-to-remove",
          description: "The output artifacts to remove from the component",
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
      name: "update-user-profile",
      description: "Updates a user profile",
      options: [
        {
          name: "--domain-id",
          description: "The domain ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-profile-name",
          description: "The user profile name",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-settings",
          description: "A collection of settings",
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
      name: "update-workforce",
      description:
        'Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration. The worker portal is now supported in VPC and public internet.  Use SourceIpConfig to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten CIDRs. By default, a workforce isn\'t restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a Not Found error message on the worker portal. To restrict access to all the workers in public internet, add the SourceIpConfig CIDR value as "10.0.0.0/16".  Amazon SageMaker does not support Source Ip restriction for worker portals in VPC.  Use OidcConfig to update the configuration of a workforce created using your own OIDC IdP.   You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the DeleteWorkteam operation.  After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the DescribeWorkforce operation.  This operation only applies to private workforces',
      options: [
        {
          name: "--workforce-name",
          description:
            "The name of the private workforce that you want to update. You can find your workforce name by using the ListWorkforces operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-ip-config",
          description:
            "A list of one to ten worker IP address ranges (CIDRs) that can be used to access tasks assigned to this workforce. Maximum: Ten CIDR values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--oidc-config",
          description:
            "Use this parameter to update your OIDC Identity Provider (IdP) configuration for a workforce made using your own IdP",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workforce-vpc-config",
          description:
            "Use this parameter to update your VPC configuration for a workforce",
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
      name: "update-workteam",
      description:
        "Updates an existing work team with new member definitions or description",
      options: [
        {
          name: "--workteam-name",
          description: "The name of the work team to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-definitions",
          description:
            "A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.  Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use CognitoMemberDefinition. For workforces created using your own OIDC identity provider (IdP) use OidcMemberDefinition. You should not provide input for both of these parameters in a single request. For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito user groups within the user pool used to create a workforce. All of the CognitoMemberDefinition objects that make up the member definition must have the same ClientId and UserPool values. To add a Amazon Cognito user group to an existing worker pool, see Adding groups to a User Pool. For more information about user pools, see Amazon Cognito User Pools. For workforces created using your own OIDC IdP, specify the user groups that you want to include in your private work team in OidcMemberDefinition by listing those groups in Groups. Be aware that user groups that are already in the work team must also be listed in Groups when you make this request to remain on the work team. If you do not include these user groups, they will no longer be associated with the work team you update",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "An updated description for the work team",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-configuration",
          description:
            "Configures SNS topic notifications for available or expiring work items",
          args: {
            name: "structure",
          },
        },
        {
          name: "--worker-access-configuration",
          description:
            "Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "endpoint-deleted",
          description:
            "Wait until ValidationException is thrown when polling with ``describe-endpoint``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--endpoint-name",
              description: "The name of the endpoint",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "endpoint-in-service",
          description:
            "Wait until JMESPath query EndpointStatus returns InService when polling with ``describe-endpoint``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--endpoint-name",
              description: "The name of the endpoint",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "image-created",
          description:
            "Wait until JMESPath query ImageStatus returns CREATED when polling with ``describe-image``. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--image-name",
              description: "The name of the image to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "image-deleted",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-image``. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--image-name",
              description: "The name of the image to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "image-updated",
          description:
            "Wait until JMESPath query ImageStatus returns CREATED when polling with ``describe-image``. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--image-name",
              description: "The name of the image to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "image-version-created",
          description:
            "Wait until JMESPath query ImageVersionStatus returns CREATED when polling with ``describe-image-version``. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--image-name",
              description: "The name of the image",
              args: {
                name: "string",
              },
            },
            {
              name: "--version",
              description:
                "The version of the image. If not specified, the latest version is described",
              args: {
                name: "integer",
              },
            },
            {
              name: "--alias",
              description: "The alias of the image version",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "image-version-deleted",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-image-version``. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--image-name",
              description: "The name of the image",
              args: {
                name: "string",
              },
            },
            {
              name: "--version",
              description:
                "The version of the image. If not specified, the latest version is described",
              args: {
                name: "integer",
              },
            },
            {
              name: "--alias",
              description: "The alias of the image version",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "notebook-instance-deleted",
          description:
            "Wait until ValidationException is thrown when polling with ``describe-notebook-instance``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--notebook-instance-name",
              description:
                "The name of the notebook instance that you want information about",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "notebook-instance-in-service",
          description:
            "Wait until JMESPath query NotebookInstanceStatus returns InService when polling with ``describe-notebook-instance``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--notebook-instance-name",
              description:
                "The name of the notebook instance that you want information about",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "notebook-instance-stopped",
          description:
            "Wait until JMESPath query NotebookInstanceStatus returns Stopped when polling with ``describe-notebook-instance``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--notebook-instance-name",
              description:
                "The name of the notebook instance that you want information about",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "processing-job-completed-or-stopped",
          description:
            "Wait until JMESPath query ProcessingJobStatus returns Completed when polling with ``describe-processing-job``. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--processing-job-name",
              description:
                "The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "training-job-completed-or-stopped",
          description:
            "Wait until JMESPath query TrainingJobStatus returns Completed when polling with ``describe-training-job``. It will poll every 120 seconds until a successful state has been reached. This will exit with a return code of 255 after 180 failed checks",
          options: [
            {
              name: "--training-job-name",
              description: "The name of the training job",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "transform-job-completed-or-stopped",
          description:
            "Wait until JMESPath query TransformJobStatus returns Completed when polling with ``describe-transform-job``. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--transform-job-name",
              description:
                "The name of the transform job that you want to view details of",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
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
    },
  ],
};
export default completionSpec;
