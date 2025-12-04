const completionSpec: Fig.Spec = {
  name: "imagebuilder",
  description:
    'EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date "golden" server images that are pre-installed and pre-configured with software and settings to meet specific IT standards',
  subcommands: [
    {
      name: "cancel-image-creation",
      description:
        "CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state",
      options: [
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image that you want to cancel creation for",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "cancel-lifecycle-execution",
      description: "Cancel a specific image lifecycle policy runtime instance",
      options: [
        {
          name: "--lifecycle-execution-id",
          description:
            "Identifies the specific runtime instance of the image lifecycle to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-component",
      description:
        "Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:   Inline, using the data property in the request body.   A URL that points to a YAML document file stored in Amazon S3, using the uri property in the request body",
      options: [
        {
          name: "--name",
          description: "The name of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the component. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Describes the contents of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-description",
          description:
            "The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform",
          description: "The operating system platform of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--supported-os-versions",
          description:
            "The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation",
          args: {
            name: "list",
          },
        },
        {
          name: "--data",
          description:
            "Component data contains inline YAML document content for the component. Alternatively, you can specify the uri of a YAML document file stored in Amazon S3. However, you cannot specify both properties",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The uri of a YAML component document file. This must be an S3 URL (s3://bucket/key), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota. Alternatively, you can specify the YAML document inline, using the component data property. You cannot specify both properties",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the KMS key that is used to encrypt this component",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags that apply to the component",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-container-recipe",
      description:
        "Creates a new container recipe. Container recipes define how images are configured, tested, and assessed",
      options: [
        {
          name: "--container-type",
          description: "The type of container to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the container recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the container recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the container recipe. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--components",
          description:
            "Components for build and test that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-configuration",
          description:
            "A group of options that can be used to configure an instance for building and testing container images",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dockerfile-template-data",
          description:
            "The Dockerfile template used to build your image as an inline data blob",
          args: {
            name: "string",
          },
        },
        {
          name: "--dockerfile-template-uri",
          description:
            "The Amazon S3 URI for the Dockerfile that will be used to build your container image",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform-override",
          description:
            "Specifies the operating system platform when you use a custom base image",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-os-version-override",
          description:
            "Specifies the operating system version for the base image",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-image",
          description: "The base image for the container recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags that are attached to the container recipe",
          args: {
            name: "map",
          },
        },
        {
          name: "--working-directory",
          description:
            "The working directory for use during build and test workflows",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-repository",
          description: "The destination repository for the container image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "Identifies which KMS key is used to encrypt the Dockerfile template",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-distribution-configuration",
      description:
        "Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline",
      options: [
        {
          name: "--name",
          description: "The name of the distribution configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the distribution configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--distributions",
          description: "The distributions of the distribution configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags of the distribution configuration",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested",
          args: {
            name: "string",
          },
        },
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-tests-configuration",
          description: "The image tests configuration of the image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enhanced-image-metadata-enabled",
          description:
            "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default",
        },
        {
          name: "--no-enhanced-image-metadata-enabled",
          description:
            "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default",
        },
        {
          name: "--tags",
          description: "The tags of the image",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-scanning-configuration",
          description: "Contains settings for vulnerability scans",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workflows",
          description: "Contains an array of workflow configuration objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-image-pipeline",
      description:
        "Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images",
      options: [
        {
          name: "--name",
          description: "The name of the image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-tests-configuration",
          description: "The image test configuration of the image pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enhanced-image-metadata-enabled",
          description:
            "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default",
        },
        {
          name: "--no-enhanced-image-metadata-enabled",
          description:
            "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default",
        },
        {
          name: "--schedule",
          description: "The schedule of the image pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--status",
          description: "The status of the image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags of the image pipeline",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-scanning-configuration",
          description: "Contains settings for vulnerability scans",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workflows",
          description: "Contains an array of workflow configuration objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-image-recipe",
      description:
        "Creates a new image recipe. Image recipes define how images are configured, tested, and assessed",
      options: [
        {
          name: "--name",
          description: "The name of the image recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the image recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the image recipe. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--components",
          description: "The components included in the image recipe",
          args: {
            name: "list",
          },
        },
        {
          name: "--parent-image",
          description:
            "The base image of the image recipe. The value of the string can be the ARN of the base image or an AMI ID. The format for the ARN follows this example: arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x. You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder",
          args: {
            name: "string",
          },
        },
        {
          name: "--block-device-mappings",
          description: "The block device mappings of the image recipe",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags of the image recipe",
          args: {
            name: "map",
          },
        },
        {
          name: "--working-directory",
          description:
            "The working directory used during build and test workflows",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-instance-configuration",
          description:
            "Specify additional settings and launch scripts for your build instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-infrastructure-configuration",
      description:
        "Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested",
      options: [
        {
          name: "--name",
          description: "The name of the infrastructure configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the infrastructure configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-types",
          description:
            "The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-profile-name",
          description:
            "The instance profile to associate with the instance used to customize your Amazon EC2 AMI",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "The security group IDs to associate with the instance used to customize your Amazon EC2 AMI",
          args: {
            name: "list",
          },
        },
        {
          name: "--subnet-id",
          description:
            "The subnet ID in which to place the instance used to customize your Amazon EC2 AMI",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging",
          description:
            "The logging configuration of the infrastructure configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-pair",
          description:
            "The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image",
          args: {
            name: "string",
          },
        },
        {
          name: "--terminate-instance-on-failure",
          description:
            "The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails",
        },
        {
          name: "--no-terminate-instance-on-failure",
          description:
            "The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails",
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.  EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description:
            "The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during the build process. Tags are formatted as key value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--instance-metadata-options",
          description:
            "The instance metadata options that you can set for the HTTP requests that pipeline builds use to launch EC2 build and test instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata tags to assign to the infrastructure configuration resource that Image Builder creates as output. Tags are formatted as key value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--placement",
          description:
            "The instance placement settings that define where the instances that are launched from your image will run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-lifecycle-policy",
      description: "Create a lifecycle policy resource",
      options: [
        {
          name: "--name",
          description: "The name of the lifecycle policy to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Optional description for the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Indicates whether the lifecycle policy resource is enabled",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run lifecycle actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of Image Builder resource that the lifecycle policy applies to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-details",
          description: "Configuration details for the lifecycle policy rules",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-selection",
          description:
            "Selection criteria for the resources that the lifecycle policy applies to",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags to apply to the lifecycle policy resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-workflow",
      description:
        "Create a new workflow or a new version of an existing workflow",
      options: [
        {
          name: "--name",
          description: "The name of the workflow to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of this workflow resource. The semantic version syntax adheres to the following rules.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Describes the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-description",
          description:
            "Describes what change has been made in this version of the workflow, or what makes this version different from other versions of the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description:
            "Contains the UTF-8 encoded YAML document content for the workflow. Alternatively, you can specify the uri of a YAML document file stored in Amazon S3. However, you cannot specify both properties",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The uri of a YAML component document file. This must be an S3 URL (s3://bucket/key), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota. Alternatively, you can specify the YAML document inline, using the component data property. You cannot specify both properties",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the KMS key that is used to encrypt this workflow resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags that apply to the workflow resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The phase in the image build process for which the workflow resource is responsible",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-component",
      description: "Deletes a component build version",
      options: [
        {
          name: "--component-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the component build version to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-container-recipe",
      description: "Deletes a container recipe",
      options: [
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-distribution-configuration",
      description: "Deletes a distribution configuration",
      options: [
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.   To deregister an EC2 Linux AMI, see Deregister your Linux AMI in the  Amazon EC2 User Guide .   To deregister an EC2 Windows AMI, see Deregister your Windows AMI in the  Amazon EC2 Windows Guide .   To delete a container image from Amazon ECR, see Deleting an image in the Amazon ECR User Guide",
      options: [
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the Image Builder image resource to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-image-pipeline",
      description: "Deletes an image pipeline",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-image-recipe",
      description: "Deletes an image recipe",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-infrastructure-configuration",
      description: "Deletes an infrastructure configuration",
      options: [
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-lifecycle-policy",
      description: "Delete the specified lifecycle policy resource",
      options: [
        {
          name: "--lifecycle-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the lifecycle policy resource to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-workflow",
      description: "Deletes a specific workflow resource",
      options: [
        {
          name: "--workflow-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the workflow resource to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-component",
      description: "Gets a component object",
      options: [
        {
          name: "--component-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the component that you want to get. Regex requires the suffix /\\d+$",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-component-policy",
      description: "Gets a component policy",
      options: [
        {
          name: "--component-arn",
          description:
            "The Amazon Resource Name (ARN) of the component whose policy you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-container-recipe",
      description: "Retrieves a container recipe",
      options: [
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-container-recipe-policy",
      description: "Retrieves the policy for a container recipe",
      options: [
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe for the policy being requested",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-distribution-configuration",
      description: "Gets a distribution configuration",
      options: [
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-image",
      description: "Gets an image",
      options: [
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image that you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-image-pipeline",
      description: "Gets an image pipeline",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-image-policy",
      description: "Gets an image policy",
      options: [
        {
          name: "--image-arn",
          description:
            "The Amazon Resource Name (ARN) of the image whose policy you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-image-recipe",
      description: "Gets an image recipe",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-image-recipe-policy",
      description: "Gets an image recipe policy",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-infrastructure-configuration",
      description: "Gets an infrastructure configuration",
      options: [
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-lifecycle-execution",
      description:
        "Get the runtime information that was logged for a specific runtime instance of the lifecycle policy",
      options: [
        {
          name: "--lifecycle-execution-id",
          description:
            "Use the unique identifier for a runtime instance of the lifecycle policy to get runtime details",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-lifecycle-policy",
      description: "Get details for the specified image lifecycle policy",
      options: [
        {
          name: "--lifecycle-policy-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the image lifecycle policy resource to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-marketplace-resource",
      description:
        "Verify the subscription and perform resource dependency checks on the requested Amazon Web Services Marketplace resource. For Amazon Web Services Marketplace components, the response contains fields to download the components and their artifacts",
      options: [
        {
          name: "--resource-type",
          description:
            "Specifies which type of Amazon Web Services Marketplace resource Image Builder retrieves",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies an Amazon Web Services Marketplace resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-location",
          description:
            "The bucket path that you can specify to download the resource from Amazon S3",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-workflow",
      description: "Get a workflow resource object",
      options: [
        {
          name: "--workflow-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the workflow resource that you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-workflow-execution",
      description:
        "Get the runtime information that was logged for a specific runtime instance of the workflow",
      options: [
        {
          name: "--workflow-execution-id",
          description:
            "Use the unique identifier for a runtime instance of the workflow to get runtime details",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-workflow-step-execution",
      description:
        "Get the runtime information that was logged for a specific runtime instance of the workflow step",
      options: [
        {
          name: "--step-execution-id",
          description:
            "Use the unique identifier for a specific runtime instance of the workflow step to get runtime details for that step",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "import-component",
      description:
        "Imports a component and transforms its data into a component document",
      options: [
        {
          name: "--name",
          description: "The name of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the component. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the component. Describes the contents of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-description",
          description:
            "The change description of the component. This description indicates the change that has been made in this version, or what makes this version different from other versions of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the component denotes whether the component is used to build the image, or only to test it",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description:
            "The format of the resource that you want to import as a component",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform",
          description: "The platform of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description:
            "The data of the component. Used to specify the data inline. Either data or uri can be used to specify the data within the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The uri of the component. Must be an Amazon S3 URL and the requester must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either data or uri can be used to specify the data within the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the KMS key that should be used to encrypt this component",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags of the component",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "import-vm-image",
      description:
        "When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM\u2019s environment, settings, and data. The Amazon EC2 API ImportImage action uses those files to import your VM and create an AMI. To import using the CLI command, see import-image  You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe",
      options: [
        {
          name: "--name",
          description:
            "The name of the base image that is created by the import process",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.  Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description for the base image that is created by the import process",
          args: {
            name: "string",
          },
        },
        {
          name: "--platform",
          description: "The operating system platform for the imported VM",
          args: {
            name: "string",
          },
        },
        {
          name: "--os-version",
          description: "The operating system version for the imported VM",
          args: {
            name: "string",
          },
        },
        {
          name: "--vm-import-task-id",
          description:
            "The importTaskId (API) or ImportTaskId (CLI) from the Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in the AMI that is created from the VM source as the base image for your recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags that are attached to the import resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-component-build-versions",
      description:
        "Returns the list of component build versions for the specified component version Amazon Resource Name (ARN)",
      options: [
        {
          name: "--component-version-arn",
          description:
            "The component version Amazon Resource Name (ARN) whose versions you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-components",
      description:
        "Returns the list of components that can be filtered by name, or by using the listed filters to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.  The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.  Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards",
      options: [
        {
          name: "--owner",
          description:
            "Filters results based on the type of owner for the component. By default, this request returns a list of components that your account owns. To see results for other types of owners, you can specify components that Amazon manages, third party components, or components that other accounts have shared with you",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    description     name     platform     supportedOsVersion     type     version",
          args: {
            name: "list",
          },
        },
        {
          name: "--by-name",
          description: "Returns the list of components for the specified name",
        },
        {
          name: "--no-by-name",
          description: "Returns the list of components for the specified name",
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-container-recipes",
      description: "Returns a list of container recipes",
      options: [
        {
          name: "--owner",
          description:
            "Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    containerType     name     parentImage     platform",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-distribution-configurations",
      description: "Returns a list of distribution configurations",
      options: [
        {
          name: "--filters",
          description: "You can filter on name to streamline results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-image-build-versions",
      description: "Returns a list of image build versions",
      options: [
        {
          name: "--image-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    name     osVersion     platform     type     version",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-image-packages",
      description:
        "List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time",
      options: [
        {
          name: "--image-build-version-arn",
          description:
            "Filter results for the ListImagePackages request by the Image Build Version ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-image-pipeline-images",
      description: "Returns a list of images created by the specified pipeline",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline whose images you want to view",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    name     version",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-image-pipelines",
      description: "Returns a list of image pipelines",
      options: [
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    description     distributionConfigurationArn     imageRecipeArn     infrastructureConfigurationArn     name     status",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-image-recipes",
      description: "Returns a list of image recipes",
      options: [
        {
          name: "--owner",
          description:
            "The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    name     parentImage     platform",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-image-scan-finding-aggregations",
      description:
        "Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the imagePipelineArn filter. If you don't specify a filter, Image Builder returns an aggregation for your account. To streamline results, you can use the following filters in your request:    accountId     imageBuildVersionArn     imagePipelineArn     vulnerabilityId",
      options: [
        {
          name: "--filter",
          description:
            "A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-image-scan-findings",
      description: "Returns a list of image scan findings for your account",
      options: [
        {
          name: "--filters",
          description:
            "An array of name value pairs that you can use to filter your results. You can use the following filters to streamline results:    imageBuildVersionArn     imagePipelineArn     vulnerabilityId     severity    If you don't request a filter, then all findings in your account are listed",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results",
      options: [
        {
          name: "--owner",
          description:
            "The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Use the following filters to streamline results:    name     osVersion     platform     type     version",
          args: {
            name: "list",
          },
        },
        {
          name: "--by-name",
          description: "Requests a list of images with a specific recipe name",
        },
        {
          name: "--no-by-name",
          description: "Requests a list of images with a specific recipe name",
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-deprecated",
          description: "Includes deprecated images in the response list",
        },
        {
          name: "--no-include-deprecated",
          description: "Includes deprecated images in the response list",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-infrastructure-configurations",
      description: "Returns a list of infrastructure configurations",
      options: [
        {
          name: "--filters",
          description: "You can filter on name to streamline results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-lifecycle-execution-resources",
      description:
        "List resources that the runtime instance of the image lifecycle identified for lifecycle actions",
      options: [
        {
          name: "--lifecycle-execution-id",
          description:
            "Use the unique identifier for a runtime instance of the lifecycle policy to get runtime details",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-resource-id",
          description:
            "You can leave this empty to get a list of Image Builder resources that were identified for lifecycle actions. To get a list of associated resources that are impacted for an individual resource (the parent), specify its Amazon Resource Name (ARN). Associated resources are produced from your image and distributed when you run a build, such as AMIs or container images stored in ECR repositories",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-lifecycle-executions",
      description:
        "Get the lifecycle runtime history for the specified resource",
      options: [
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which to get a list of lifecycle runtime instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-lifecycle-policies",
      description:
        "Get a list of lifecycle policies in your Amazon Web Services account",
      options: [
        {
          name: "--filters",
          description:
            "Streamline results based on one of the following values: Name, Status",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Returns the list of tags for the specified resource",
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-waiting-workflow-steps",
      description:
        "Get a list of workflow steps that are waiting for action for workflows in your Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-workflow-build-versions",
      description:
        "Returns a list of build versions for a specific workflow resource",
      options: [
        {
          name: "--workflow-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the workflow resource for which to get a list of build versions",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-workflow-executions",
      description:
        "Returns a list of workflow runtime instance metadata objects for a specific image build version",
      options: [
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-build-version-arn",
          description:
            "List all workflow runtime instances for the specified image build version resource ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-workflow-step-executions",
      description:
        "Returns runtime data for each step in a runtime instance of the workflow that you specify in the request",
      options: [
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-execution-id",
          description:
            "The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-workflows",
      description:
        "Lists workflow build versions based on filtering parameters",
      options: [
        {
          name: "--owner",
          description:
            "Used to get a list of workflow build version filtered by the identity of the creator",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Used to streamline search results",
          args: {
            name: "list",
          },
        },
        {
          name: "--by-name",
          description:
            "Specify all or part of the workflow name to streamline results",
        },
        {
          name: "--no-by-name",
          description:
            "Specify all or part of the workflow name to streamline results",
        },
        {
          name: "--max-results",
          description: "The maximum items to return in a request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to specify where to start paginating. This is the nextToken from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-component-policy",
      description:
        "Applies a policy to a component. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutComponentPolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared",
      options: [
        {
          name: "--component-arn",
          description:
            "The Amazon Resource Name (ARN) of the component that this policy should be applied to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The policy to apply",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-container-recipe-policy",
      description:
        "Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API PutContainerImagePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared",
      options: [
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The policy to apply to the container recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-image-policy",
      description:
        "Applies a policy to an image. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImagePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared",
      options: [
        {
          name: "--image-arn",
          description:
            "The Amazon Resource Name (ARN) of the image that this policy should be applied to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The policy to apply",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-image-recipe-policy",
      description:
        "Applies a policy to an image recipe. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImageRecipePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared",
      options: [
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The policy to apply",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "send-workflow-step-action",
      description:
        "Pauses or resumes image creation when the associated workflow runs a WaitForAction step",
      options: [
        {
          name: "--step-execution-id",
          description:
            "Uniquely identifies the workflow step that sent the step action",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-build-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the image build version to send action for",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "The action for the image creation process to take while a workflow WaitForAction step waits for an asynchronous action to complete",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description: "The reason why this action is sent",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-image-pipeline-execution",
      description: "Manually triggers a pipeline to create an image",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-resource-state-update",
      description:
        "Begin asynchronous resource state update for lifecycle changes to the specified image resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the Image Builder resource that is updated. The state update might also impact associated resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "Indicates the lifecycle action to take for this request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role that\u2019s used to update image state",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-resources",
          description: "A list of image resources to update state for",
          args: {
            name: "structure",
          },
        },
        {
          name: "--exclusion-rules",
          description:
            "Skip action on the image resource and associated resources if specified exclusion rules are met",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-at",
          description:
            "The timestamp that indicates when resources are updated by a lifecycle action",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Adds a tag to a resource",
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
          description: "The tags to apply to the resource",
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
      description: "Removes a tag from a resource",
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
          description: "The tag keys to remove from the resource",
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
      name: "update-distribution-configuration",
      description:
        "Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline",
      options: [
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the distribution configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--distributions",
          description: "The distributions of the distribution configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-image-pipeline",
      description:
        "Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images. You must specify exactly one recipe for your image, using either a containerRecipeArn or an imageRecipeArn.  UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed",
      options: [
        {
          name: "--image-pipeline-arn",
          description:
            "The Amazon Resource Name (ARN) of the image pipeline that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the container pipeline to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to build images that this image pipeline has updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--distribution-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to configure and distribute images that this image pipeline has updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-tests-configuration",
          description: "The image test configuration of the image pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enhanced-image-metadata-enabled",
          description:
            "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default",
        },
        {
          name: "--no-enhanced-image-metadata-enabled",
          description:
            "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default",
        },
        {
          name: "--schedule",
          description: "The schedule of the image pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--status",
          description: "The status of the image pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-scanning-configuration",
          description: "Contains settings for vulnerability scans",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workflows",
          description: "Contains the workflows to run for the pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-infrastructure-configuration",
      description:
        "Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested",
      options: [
        {
          name: "--infrastructure-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the infrastructure configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-types",
          description:
            "The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-profile-name",
          description:
            "The instance profile to associate with the instance used to customize your Amazon EC2 AMI",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "The security group IDs to associate with the instance used to customize your Amazon EC2 AMI",
          args: {
            name: "list",
          },
        },
        {
          name: "--subnet-id",
          description:
            "The subnet ID to place the instance used to customize your Amazon EC2 AMI in",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging",
          description:
            "The logging configuration of the infrastructure configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-pair",
          description:
            "The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image",
          args: {
            name: "string",
          },
        },
        {
          name: "--terminate-instance-on-failure",
          description:
            "The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails",
        },
        {
          name: "--no-terminate-instance-on-failure",
          description:
            "The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails",
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.  EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description:
            "The tags attached to the resource created by Image Builder",
          args: {
            name: "map",
          },
        },
        {
          name: "--instance-metadata-options",
          description:
            "The instance metadata options that you can set for the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see one of the following links:    Configure the instance metadata options in the  Amazon EC2 User Guide  for Linux instances.    Configure the instance metadata options in the  Amazon EC2 Windows Guide  for Windows instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--placement",
          description:
            "The instance placement settings that define where the instances that are launched from your image will run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-lifecycle-policy",
      description: "Update the specified lifecycle policy",
      options: [
        {
          name: "--lifecycle-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the lifecycle policy resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Optional description for the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Indicates whether the lifecycle policy resource is enabled",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to update the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of image resource that the lifecycle policy applies to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-details",
          description:
            "The configuration details for a lifecycle policy resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-selection",
          description:
            "Selection criteria for resources that the lifecycle policy applies to",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see Ensuring idempotency in the Amazon EC2 API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
