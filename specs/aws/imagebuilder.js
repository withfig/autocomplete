var completionSpec = {
    name: "imagebuilder",
    description: 'EC2 Image Builder is a fully managed AWS service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date "golden" server images that are pre-installed and pre-configured with software and settings to meet specific IT standards.',
    subcommands: [
        {
            name: "cancel-image-creation",
            description: "CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.",
            options: [
                {
                    name: "--image-build-version-arn",
                    description: "The Amazon Resource Name (ARN) of the image whose creation you want to cancel.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token used to make this request idempotent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-component",
            description: "Creates a new component that can be used to build, validate, test, and assess your image.",
            options: [
                {
                    name: "--name",
                    description: "The name of the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--semantic-version",
                    description: "The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the component. Describes the contents of the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--change-description",
                    description: "The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--platform",
                    description: "The platform of the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--supported-os-versions",
                    description: "The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the parent image OS version during image recipe creation.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--data",
                    description: "The data of the component. Used to specify the data inline. Either data or uri can be used to specify the data within the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--uri",
                    description: "The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either data or uri can be used to specify the data within the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--kms-key-id",
                    description: "The ID of the KMS key that should be used to encrypt this component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The tags of the component.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token of the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-container-recipe",
            description: "Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.",
            options: [
                {
                    name: "--container-type",
                    description: "The type of container to create.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the container recipe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the container recipe.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--semantic-version",
                    description: "The semantic version of the container recipe (&lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;).",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--components",
                    description: "Components for build and test that are included in the container recipe.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--instance-configuration",
                    description: "A group of options that can be used to configure an instance for building and testing container images.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--dockerfile-template-data",
                    description: "The Dockerfile template used to build your image as an inline data blob.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--dockerfile-template-uri",
                    description: "The S3 URI for the Dockerfile that will be used to build your container image.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--platform-override",
                    description: "Specifies the operating system platform when you use a custom source image.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--image-os-version-override",
                    description: "Specifies the operating system version for the source image.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--parent-image",
                    description: "The source image for the container recipe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "Tags that are attached to the container recipe.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--working-directory",
                    description: "The working directory for use during build and test workflows.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--target-repository",
                    description: "The destination repository for the container image.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--kms-key-id",
                    description: "Identifies which KMS key is used to encrypt the container image.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The client token used to make this request idempotent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-distribution-configuration",
            description: "Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.",
            options: [
                {
                    name: "--name",
                    description: "The name of the distribution configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the distribution configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--distributions",
                    description: "The distributions of the distribution configuration.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The tags of the distribution configuration.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token of the distribution configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-image",
            description: "Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration.",
            options: [
                {
                    name: "--image-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--container-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--distribution-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--infrastructure-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--image-tests-configuration",
                    description: "The image tests configuration of the image.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--enhanced-image-metadata-enabled",
                    description: "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.",
                },
                {
                    name: "--no-enhanced-image-metadata-enabled",
                    description: "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.",
                },
                {
                    name: "--tags",
                    description: "The tags of the image.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token used to make this request idempotent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-image-pipeline",
            description: "Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.",
            options: [
                {
                    name: "--name",
                    description: "The name of the image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--image-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--container-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--infrastructure-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--distribution-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--image-tests-configuration",
                    description: "The image test configuration of the image pipeline.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--enhanced-image-metadata-enabled",
                    description: "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.",
                },
                {
                    name: "--no-enhanced-image-metadata-enabled",
                    description: "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.",
                },
                {
                    name: "--schedule",
                    description: "The schedule of the image pipeline.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--status",
                    description: "The status of the image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The tags of the image pipeline.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token used to make this request idempotent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-image-recipe",
            description: "Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.",
            options: [
                {
                    name: "--name",
                    description: "The name of the image recipe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the image recipe.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--semantic-version",
                    description: "The semantic version of the image recipe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--components",
                    description: "The components of the image recipe.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--parent-image",
                    description: "The parent image of the image recipe. The value of the string can be the ARN of the parent image or an AMI ID. The format for the ARN follows this example: arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/xxxx.x.x. You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--block-device-mappings",
                    description: "The block device mappings of the image recipe.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The tags of the image recipe.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--working-directory",
                    description: "The working directory to be used during build and test workflows.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token used to make this request idempotent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-infrastructure-configuration",
            description: "Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.",
            options: [
                {
                    name: "--name",
                    description: "The name of the infrastructure configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the infrastructure configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--instance-types",
                    description: "The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--instance-profile-name",
                    description: "The instance profile to associate with the instance used to customize your EC2 AMI.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--security-group-ids",
                    description: "The security group IDs to associate with the instance used to customize your EC2 AMI.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--subnet-id",
                    description: "The subnet ID in which to place the instance used to customize your EC2 AMI.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--logging",
                    description: "The logging configuration of the infrastructure configuration.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--key-pair",
                    description: "The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--terminate-instance-on-failure",
                    description: "The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.",
                },
                {
                    name: "--no-terminate-instance-on-failure",
                    description: "The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.",
                },
                {
                    name: "--sns-topic-arn",
                    description: "The SNS topic on which to send image build events.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--resource-tags",
                    description: "The tags attached to the resource created by Image Builder.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The tags of the infrastructure configuration.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token used to make this request idempotent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-component",
            description: "Deletes a component build version.",
            options: [
                {
                    name: "--component-build-version-arn",
                    description: "The Amazon Resource Name (ARN) of the component build version to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-container-recipe",
            description: "Deletes a container recipe.",
            options: [
                {
                    name: "--container-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the container recipe to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-distribution-configuration",
            description: "Deletes a distribution configuration.",
            options: [
                {
                    name: "--distribution-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the distribution configuration to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-image",
            description: "Deletes an image.",
            options: [
                {
                    name: "--image-build-version-arn",
                    description: "The Amazon Resource Name (ARN) of the image to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-image-pipeline",
            description: "Deletes an image pipeline.",
            options: [
                {
                    name: "--image-pipeline-arn",
                    description: "The Amazon Resource Name (ARN) of the image pipeline to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-image-recipe",
            description: "Deletes an image recipe.",
            options: [
                {
                    name: "--image-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the image recipe to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-infrastructure-configuration",
            description: "Deletes an infrastructure configuration.",
            options: [
                {
                    name: "--infrastructure-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the infrastructure configuration to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-component",
            description: "Gets a component object.",
            options: [
                {
                    name: "--component-build-version-arn",
                    description: 'The Amazon Resource Name (ARN) of the component that you want to retrieve. Regex requires "/\\d+$" suffix.',
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-component-policy",
            description: "Gets a component policy.",
            options: [
                {
                    name: "--component-arn",
                    description: "The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-container-recipe",
            description: "Retrieves a container recipe.",
            options: [
                {
                    name: "--container-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the container recipe to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-container-recipe-policy",
            description: "Retrieves the policy for a container recipe.",
            options: [
                {
                    name: "--container-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the container recipe for the policy being requested.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-distribution-configuration",
            description: "Gets a distribution configuration.",
            options: [
                {
                    name: "--distribution-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-image",
            description: "Gets an image.",
            options: [
                {
                    name: "--image-build-version-arn",
                    description: "The Amazon Resource Name (ARN) of the image that you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-image-pipeline",
            description: "Gets an image pipeline.",
            options: [
                {
                    name: "--image-pipeline-arn",
                    description: "The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-image-policy",
            description: "Gets an image policy.",
            options: [
                {
                    name: "--image-arn",
                    description: "The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-image-recipe",
            description: "Gets an image recipe.",
            options: [
                {
                    name: "--image-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-image-recipe-policy",
            description: "Gets an image recipe policy.",
            options: [
                {
                    name: "--image-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-infrastructure-configuration",
            description: "Gets an infrastructure configuration.",
            options: [
                {
                    name: "--infrastructure-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "import-component",
            description: "Imports a component and transforms its data into a component document.",
            options: [
                {
                    name: "--name",
                    description: "The name of the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--semantic-version",
                    description: "The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the component. Describes the contents of the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--change-description",
                    description: "The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--type",
                    description: "The type of the component denotes whether the component is used to build the image or only to test it.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--format",
                    description: "The format of the resource that you want to import as a component.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--platform",
                    description: "The platform of the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--data",
                    description: "The data of the component. Used to specify the data inline. Either data or uri can be used to specify the data within the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--uri",
                    description: "The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either data or uri can be used to specify the data within the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--kms-key-id",
                    description: "The ID of the KMS key that should be used to encrypt this component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The tags of the component.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token of the component.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-component-build-versions",
            description: "Returns the list of component build versions for the specified semantic version.",
            options: [
                {
                    name: "--component-version-arn",
                    description: "The component version Amazon Resource Name (ARN) whose versions you want to list.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--max-results",
                    description: "The maximum items to return in a request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-components",
            description: "Returns the list of component build versions for the specified semantic version.",
            options: [
                {
                    name: "--owner",
                    description: "The owner defines which components you want to list. By default, this request will only show components owned by your account. You can use this field to specify if you want to view components owned by yourself, by Amazon, or those components that have been shared with you by other customers.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--by-name",
                    description: "Returns the list of component build versions for the specified semantic version.",
                },
                {
                    name: "--no-by-name",
                    description: "Returns the list of component build versions for the specified semantic version.",
                },
                {
                    name: "--max-results",
                    description: "The maximum items to return in a request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-container-recipes",
            description: "Returns a list of container recipes.",
            options: [
                {
                    name: "--owner",
                    description: "Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "Request filters that are used to narrow the list of container images that are returned.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return in the list.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Provides a token for pagination, which determines where to begin the next set of results when the current set reaches the maximum for one request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-distribution-configurations",
            description: "Returns a list of distribution configurations.",
            options: [
                {
                    name: "--filters",
                    description: "The filters.    name - The name of this distribution configuration.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum items to return in a request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-image-build-versions",
            description: "Returns a list of image build versions.",
            options: [
                {
                    name: "--image-version-arn",
                    description: "The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum items to return in a request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-image-packages",
            description: "List the Packages that are associated with an Image Build Version, as determined by AWS Systems Manager Inventory at build time.",
            options: [
                {
                    name: "--image-build-version-arn",
                    description: "Filter results for the ListImagePackages request by the Image Build Version ARN",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--max-results",
                    description: "The maxiumum number of results to return from the ListImagePackages request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-image-pipeline-images",
            description: "Returns a list of images created by the specified pipeline.",
            options: [
                {
                    name: "--image-pipeline-arn",
                    description: "The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum items to return in a request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-image-pipelines",
            description: "Returns a list of image pipelines.",
            options: [
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum items to return in a request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-image-recipes",
            description: "Returns a list of image recipes.",
            options: [
                {
                    name: "--owner",
                    description: "The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum items to return in a request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-images",
            description: "Returns the list of images that you have access to.",
            options: [
                {
                    name: "--owner",
                    description: "The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--by-name",
                    description: "Requests a list of images with a specific recipe name.",
                },
                {
                    name: "--no-by-name",
                    description: "Requests a list of images with a specific recipe name.",
                },
                {
                    name: "--max-results",
                    description: "The maximum items to return in a request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--include-deprecated",
                    description: "Includes deprecated images in the response list.",
                },
                {
                    name: "--no-include-deprecated",
                    description: "Includes deprecated images in the response list.",
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-infrastructure-configurations",
            description: "Returns a list of infrastructure configurations.",
            options: [
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum items to return in a request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A token to specify where to start paginating. This is the NextToken from a previously truncated response.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-tags-for-resource",
            description: "Returns the list of tags for the specified resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "put-component-policy",
            description: "Applies a policy to a component. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutComponentPolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.",
            options: [
                {
                    name: "--component-arn",
                    description: "The Amazon Resource Name (ARN) of the component that this policy should be applied to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--policy",
                    description: "The policy to apply.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "put-container-recipe-policy",
            description: "Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API PutContainerImagePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.",
            options: [
                {
                    name: "--container-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--policy",
                    description: "The policy to apply to the container recipe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "put-image-policy",
            description: "Applies a policy to an image. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImagePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.",
            options: [
                {
                    name: "--image-arn",
                    description: "The Amazon Resource Name (ARN) of the image that this policy should be applied to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--policy",
                    description: "The policy to apply.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "put-image-recipe-policy",
            description: "Applies a policy to an image recipe. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImageRecipePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.",
            options: [
                {
                    name: "--image-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--policy",
                    description: "The policy to apply.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "start-image-pipeline-execution",
            description: "Manually triggers a pipeline to create an image.",
            options: [
                {
                    name: "--image-pipeline-arn",
                    description: "The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token used to make this request idempotent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "tag-resource",
            description: "Adds a tag to a resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource that you want to tag.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The tags to apply to the resource.",
                    args: {
                        name: "map",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "untag-resource",
            description: "Removes a tag from a resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource that you want to untag.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tag-keys",
                    description: "The tag keys to remove from the resource.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-distribution-configuration",
            description: "Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.",
            options: [
                {
                    name: "--distribution-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the distribution configuration that you want to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the distribution configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--distributions",
                    description: "The distributions of the distribution configuration.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token of the distribution configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-image-pipeline",
            description: "Updates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.",
            options: [
                {
                    name: "--image-pipeline-arn",
                    description: "The Amazon Resource Name (ARN) of the image pipeline that you want to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--image-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--container-recipe-arn",
                    description: "The Amazon Resource Name (ARN) of the container pipeline to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--infrastructure-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images updated by this image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--distribution-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images updated by this image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--image-tests-configuration",
                    description: "The image test configuration of the image pipeline.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--enhanced-image-metadata-enabled",
                    description: "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.",
                },
                {
                    name: "--no-enhanced-image-metadata-enabled",
                    description: "Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.",
                },
                {
                    name: "--schedule",
                    description: "The schedule of the image pipeline.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--status",
                    description: "The status of the image pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token used to make this request idempotent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-infrastructure-configuration",
            description: "Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.",
            options: [
                {
                    name: "--infrastructure-configuration-arn",
                    description: "The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description of the infrastructure configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--instance-types",
                    description: "The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--instance-profile-name",
                    description: "The instance profile to associate with the instance used to customize your EC2 AMI.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--security-group-ids",
                    description: "The security group IDs to associate with the instance used to customize your EC2 AMI.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--subnet-id",
                    description: "The subnet ID to place the instance used to customize your EC2 AMI in.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--logging",
                    description: "The logging configuration of the infrastructure configuration.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--key-pair",
                    description: "The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--terminate-instance-on-failure",
                    description: "The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.",
                },
                {
                    name: "--no-terminate-instance-on-failure",
                    description: "The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.",
                },
                {
                    name: "--sns-topic-arn",
                    description: "The SNS topic on which to send image build events.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "The idempotency token used to make this request idempotent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--resource-tags",
                    description: "The tags attached to the resource created by Image Builder.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
    ],
};

