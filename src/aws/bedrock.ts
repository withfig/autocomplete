const completionSpec: Fig.Spec = {
  name: "bedrock",
  description:
    "Describes the API operations for creating, managing, fine-turning, and evaluating Amazon Bedrock models",
  subcommands: [
    {
      name: "batch-delete-evaluation-job",
      description:
        "Deletes a batch of evaluation jobs. An evaluation job can only be deleted if it has following status FAILED, COMPLETED, and STOPPED. You can request up to 25 model evaluation jobs be deleted in a single request",
      options: [
        {
          name: "--job-identifiers",
          description:
            "A list of one or more evaluation job Amazon Resource Names (ARNs) you want to delete",
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
      name: "create-evaluation-job",
      description: "Creates an evaluation job",
      options: [
        {
          name: "--job-name",
          description:
            "A name for the evaluation job. Names must unique with your Amazon Web Services account, and your account's Amazon Web Services region",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-description",
          description: "A description of the evaluation job",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. To learn more about the required permissions, see Required permissions for model evaluations",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-encryption-key-id",
          description:
            "Specify your customer managed encryption key Amazon Resource Name (ARN) that will be used to encrypt your evaluation job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-tags",
          description: "Tags to attach to the model evaluation job",
          args: {
            name: "list",
          },
        },
        {
          name: "--application-type",
          description:
            "Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation)",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-config",
          description:
            "Contains the configuration details of either an automated or human-based evaluation job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--inference-config",
          description:
            "Contains the configuration details of the inference model for the evaluation job. For model evaluation jobs, automated jobs support a single model or inference profile, and jobs that use human workers support two models or inference profiles",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description:
            "Contains the configuration details of the Amazon S3 bucket for storing the results of the evaluation job",
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
      name: "create-guardrail",
      description:
        "Creates a guardrail to block topics and to implement safeguards for your generative AI applications. You can configure the following policies in a guardrail to avoid undesirable and harmful content, filter out denied topics and words, and remove sensitive information for privacy protection.    Content filters - Adjust filter strengths to block input prompts or model responses containing harmful content.    Denied topics - Define a set of topics that are undesirable in the context of your application. These topics will be blocked if detected in user queries or model responses.    Word filters - Configure filters to block undesirable words, phrases, and profanity. Such words can include offensive terms, competitor names etc.    Sensitive information filters - Block or mask sensitive information such as personally identifiable information (PII) or custom regex in user inputs and model responses.   In addition to the above policies, you can also configure the messages to be returned to the user if a user input or model response is in violation of the policies defined in the guardrail. For more information, see Amazon Bedrock Guardrails in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--name",
          description: "The name to give the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-policy-config",
          description: "The topic policies to configure for the guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--content-policy-config",
          description:
            "The content filter policies to configure for the guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--word-policy-config",
          description: "The word policy you configure for the guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sensitive-information-policy-config",
          description:
            "The sensitive information policy to configure for the guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--contextual-grounding-policy-config",
          description:
            "The contextual grounding policy configuration used to create a guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--blocked-input-messaging",
          description:
            "The message to return when the guardrail blocks a prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--blocked-outputs-messaging",
          description:
            "The message to return when the guardrail blocks a model response",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ARN of the KMS key that you use to encrypt the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags that you want to attach to the guardrail",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-guardrail-version",
      description:
        "Creates a version of the guardrail. Use this API to create a snapshot of the guardrail when you are satisfied with a configuration, or to compare the configuration with another version",
      options: [
        {
          name: "--guardrail-identifier",
          description:
            "The unique identifier of the guardrail. This can be an ID or the ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the guardrail version",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-inference-profile",
      description:
        "Creates an application inference profile to track metrics and costs when invoking a model. To create an application inference profile for a foundation model in one region, specify the ARN of the model in that region. To create an application inference profile for a foundation model across multiple regions, specify the ARN of the system-defined inference profile that contains the regions that you want to route requests to. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--inference-profile-name",
          description: "A name for the inference profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the inference profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-source",
          description:
            "The foundation model or system-defined inference profile that the inference profile will track metrics and costs for",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of objects, each of which contains a tag and its value. For more information, see Tagging resources in the Amazon Bedrock User Guide",
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
      name: "create-marketplace-model-endpoint",
      description:
        "Creates an endpoint for a model from Amazon Bedrock Marketplace. The endpoint is hosted by Amazon SageMaker",
      options: [
        {
          name: "--model-source-identifier",
          description:
            "The ARN of the model from Amazon Bedrock Marketplace that you want to deploy to the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-config",
          description:
            "The configuration for the endpoint, including the number and type of instances to use",
          args: {
            name: "structure",
          },
        },
        {
          name: "--accept-eula",
          description:
            "Indicates whether you accept the end-user license agreement (EULA) for the model. Set to true to accept the EULA",
        },
        {
          name: "--no-accept-eula",
          description:
            "Indicates whether you accept the end-user license agreement (EULA) for the model. Set to true to accept the EULA",
        },
        {
          name: "--endpoint-name",
          description:
            "The name of the endpoint. This name must be unique within your Amazon Web Services account and region",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token is listed as not required because Amazon Web Services SDKs automatically generate it for you and set this parameter. If you're not using the Amazon Web Services SDK or the CLI, you must provide this token or the action will fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs to apply to the underlying Amazon SageMaker endpoint. You can use these tags to organize and identify your Amazon Web Services resources",
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
      name: "create-model-copy-job",
      description:
        "Copies a model to another region so that it can be used there. For more information, see Copy models to be used in other regions in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--source-model-arn",
          description:
            "The Amazon Resource Name (ARN) of the model to be copied",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-model-name",
          description: "A name for the copied model",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-kms-key-id",
          description:
            "The ARN of the KMS key that you use to encrypt the model copy",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-model-tags",
          description:
            "Tags to associate with the target model. For more information, see Tag resources in the Amazon Bedrock User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-model-customization-job",
      description:
        "Creates a fine-tuning job to customize a base model. You specify the base foundation model and the location of the training data. After the model-customization job completes successfully, your custom model resource will be ready to use. Amazon Bedrock returns validation loss metrics and output generations after the job completes.  For information on the format of training and validation data, see Prepare the datasets.  Model-customization jobs are asynchronous and the completion time depends on the base model and the training/validation data size. To monitor a job, use the GetModelCustomizationJob operation to retrieve the job status. For more information, see Custom models in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--job-name",
          description: "A name for the fine-tuning job",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-model-name",
          description: "A name for the resulting custom model",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. For example, during model training, Amazon Bedrock needs your permission to read input data from an S3 bucket, write model artifacts to an S3 bucket. To pass this role to Amazon Bedrock, the caller of this API must have the iam:PassRole permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-model-identifier",
          description: "Name of the base model",
          args: {
            name: "string",
          },
        },
        {
          name: "--customization-type",
          description: "The customization type",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-model-kms-key-id",
          description: "The custom model is encrypted at rest using this key",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-tags",
          description: "Tags to attach to the job",
          args: {
            name: "list",
          },
        },
        {
          name: "--custom-model-tags",
          description: "Tags to attach to the resulting custom model",
          args: {
            name: "list",
          },
        },
        {
          name: "--training-data-config",
          description: "Information about the training dataset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-data-config",
          description: "Information about the validation dataset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "S3 location for the output data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--hyper-parameters",
          description:
            "Parameters related to tuning the model. For details on the format for different models, see Custom model hyperparameters",
          args: {
            name: "map",
          },
        },
        {
          name: "--vpc-config",
          description:
            "The configuration of the Virtual Private Cloud (VPC) that contains the resources that you're using for this job. For more information, see Protect your model customization jobs using a VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--customization-config",
          description:
            "The customization configuration for the model customization job",
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
      name: "create-model-import-job",
      description:
        "Creates a model import job to import model that you have customized in other environments, such as Amazon SageMaker. For more information, see Import a customized model",
      options: [
        {
          name: "--job-name",
          description: "The name of the import job",
          args: {
            name: "string",
          },
        },
        {
          name: "--imported-model-name",
          description: "The name of the imported model",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description: "The Amazon Resource Name (ARN) of the model import job",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-data-source",
          description: "The data source for the imported model",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-tags",
          description: "Tags to attach to this import job",
          args: {
            name: "list",
          },
        },
        {
          name: "--imported-model-tags",
          description: "Tags to attach to the imported model",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "VPC configuration parameters for the private Virtual Private Cloud (VPC) that contains the resources you are using for the import job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--imported-model-kms-key-id",
          description: "The imported model is encrypted at rest using this key",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-model-invocation-job",
      description:
        "Creates a batch inference job to invoke a model on multiple prompts. Format your data according to Format your inference data and upload it to an Amazon S3 bucket. For more information, see Process multiple prompts with batch inference. The response returns a jobArn that you can use to stop or get details about the job",
      options: [
        {
          name: "--job-name",
          description: "A name to give the batch inference job",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the service role with permissions to carry out and manage batch inference. You can use the console to create a default service role or follow the steps at Create a service role for batch inference",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-id",
          description:
            "The unique identifier of the foundation model to use for the batch inference job",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-config",
          description:
            "Details about the location of the input to the batch inference job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description:
            "Details about the location of the output of the batch inference job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-config",
          description:
            "The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see Protect batch inference jobs using a VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timeout-duration-in-hours",
          description:
            "The number of hours after which to force the batch inference job to time out",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description:
            "Any tags to associate with the batch inference job. For more information, see Tagging Amazon Bedrock resources",
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
      name: "create-provisioned-model-throughput",
      description:
        "Creates dedicated throughput for a base or custom model with the model units and for the duration that you specify. For pricing details, see Amazon Bedrock Pricing. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-units",
          description:
            "Number of model units to allocate. A model unit delivers a specific throughput level for the specified model. The throughput level of a model unit specifies the total number of input and output tokens that it can process and generate within a span of one minute. By default, your account has no model units for purchasing Provisioned Throughputs with commitment. You must first visit the Amazon Web Services support center to request MUs. For model unit quotas, see Provisioned Throughput quotas in the Amazon Bedrock User Guide. For more information about what an MU specifies, contact your Amazon Web Services account manager",
          args: {
            name: "integer",
          },
        },
        {
          name: "--provisioned-model-name",
          description: "The name for this Provisioned Throughput",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-id",
          description:
            "The Amazon Resource Name (ARN) or name of the model to associate with this Provisioned Throughput. For a list of models for which you can purchase Provisioned Throughput, see Amazon Bedrock model IDs for purchasing Provisioned Throughput in the Amazon Bedrock User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--commitment-duration",
          description:
            "The commitment duration requested for the Provisioned Throughput. Billing occurs hourly and is discounted for longer commitment terms. To request a no-commit Provisioned Throughput, omit this field. Custom models support all levels of commitment. To see which base models support no commitment, see Supported regions and models for Provisioned Throughput in the Amazon Bedrock User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags to associate with this Provisioned Throughput",
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
      name: "delete-custom-model",
      description:
        "Deletes a custom model that you created earlier. For more information, see Custom models in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--model-identifier",
          description: "Name of the model to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-guardrail",
      description:
        "Deletes a guardrail.   To delete a guardrail, only specify the ARN of the guardrail in the guardrailIdentifier field. If you delete a guardrail, all of its versions will be deleted.   To delete a version of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field and the version in the guardrailVersion field",
      options: [
        {
          name: "--guardrail-identifier",
          description:
            "The unique identifier of the guardrail. This can be an ID or the ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-version",
          description: "The version of the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-imported-model",
      description:
        "Deletes a custom model that you imported earlier. For more information, see Import a customized model in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--model-identifier",
          description: "Name of the imported model to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-inference-profile",
      description:
        "Deletes an application inference profile. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--inference-profile-identifier",
          description:
            "The Amazon Resource Name (ARN) or ID of the application inference profile to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-marketplace-model-endpoint",
      description:
        "Deletes an endpoint for a model from Amazon Bedrock Marketplace",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) of the endpoint you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-model-invocation-logging-configuration",
      description: "Delete the invocation logging",
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
      name: "delete-provisioned-model-throughput",
      description:
        "Deletes a Provisioned Throughput. You can't delete a Provisioned Throughput before the commitment term is over. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--provisioned-model-id",
          description:
            "The Amazon Resource Name (ARN) or name of the Provisioned Throughput",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "deregister-marketplace-model-endpoint",
      description:
        "Deregisters an endpoint for a model from Amazon Bedrock Marketplace. This operation removes the endpoint's association with Amazon Bedrock but does not delete the underlying Amazon SageMaker endpoint",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) of the endpoint you want to deregister",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-custom-model",
      description:
        "Get the properties associated with a Amazon Bedrock custom model that you have created.For more information, see Custom models in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--model-identifier",
          description: "Name or Amazon Resource Name (ARN) of the custom model",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-evaluation-job",
      description:
        "Gets information about an evaluation job, such as the status of the job",
      options: [
        {
          name: "--job-identifier",
          description:
            "The Amazon Resource Name (ARN) of the evaluation job you want get information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-foundation-model",
      description: "Get details about a Amazon Bedrock foundation model",
      options: [
        {
          name: "--model-identifier",
          description: "The model identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-guardrail",
      description:
        "Gets details about a guardrail. If you don't specify a version, the response returns details for the DRAFT version",
      options: [
        {
          name: "--guardrail-identifier",
          description:
            "The unique identifier of the guardrail for which to get details. This can be an ID or the ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-version",
          description:
            "The version of the guardrail for which to get details. If you don't specify a version, the response returns details for the DRAFT version",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-imported-model",
      description:
        "Gets properties associated with a customized model you imported",
      options: [
        {
          name: "--model-identifier",
          description:
            "Name or Amazon Resource Name (ARN) of the imported model",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-inference-profile",
      description:
        "Gets information about an inference profile. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--inference-profile-identifier",
          description:
            "The ID or Amazon Resource Name (ARN) of the inference profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-marketplace-model-endpoint",
      description:
        "Retrieves details about a specific endpoint for a model from Amazon Bedrock Marketplace",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) of the endpoint you want to get information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-model-copy-job",
      description:
        "Retrieves information about a model copy job. For more information, see Copy models to be used in other regions in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--job-arn",
          description: "The Amazon Resource Name (ARN) of the model copy job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-model-customization-job",
      description:
        "Retrieves the properties associated with a model-customization job, including the status of the job. For more information, see Custom models in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--job-identifier",
          description: "Identifier for the customization job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-model-import-job",
      description:
        "Retrieves the properties associated with import model job, including the status of the job. For more information, see Import a customized model in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--job-identifier",
          description: "The identifier of the import job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-model-invocation-job",
      description:
        "Gets details about a batch inference job. For more information, see Monitor batch inference jobs",
      options: [
        {
          name: "--job-identifier",
          description:
            "The Amazon Resource Name (ARN) of the batch inference job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-model-invocation-logging-configuration",
      description:
        "Get the current configuration values for model invocation logging",
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
      name: "get-prompt-router",
      description: "Retrieves details about a prompt router",
      options: [
        {
          name: "--prompt-router-arn",
          description: "The prompt router's ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-provisioned-model-throughput",
      description:
        "Returns details for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--provisioned-model-id",
          description:
            "The Amazon Resource Name (ARN) or name of the Provisioned Throughput",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-custom-models",
      description:
        "Returns a list of the custom models that you have created with the CreateModelCustomizationJob operation. For more information, see Custom models in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--creation-time-before",
          description: "Return custom models created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description: "Return custom models created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "Return custom models only if the job name contains these characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-model-arn-equals",
          description:
            "Return custom models only if the base model Amazon Resource Name (ARN) matches this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--foundation-model-arn-equals",
          description:
            "Return custom models only if the foundation model Amazon Resource Name (ARN) matches this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The field to sort by in the returned list of models",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--is-owned",
          description:
            "Return custom models depending on if the current account owns them (true) or if they were shared with the current account (false)",
        },
        {
          name: "--no-is-owned",
          description:
            "Return custom models depending on if the current account owns them (true) or if they were shared with the current account (false)",
        },
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
      name: "list-evaluation-jobs",
      description: "Lists all existing evaluation jobs",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter to only list evaluation jobs created after a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter to only list evaluation jobs created before a specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter to only list evaluation jobs that are of a certain status",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-type-equals",
          description:
            "A filter to only list evaluation jobs that are either model evaluations or knowledge base evaluations",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A filter to only list evaluation jobs that contain a specified string in the job name",
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
            "Continuation token from the previous response, for Amazon Bedrock to list the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies a creation time to sort the list of evaluation jobs by when they were created",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies whether to sort the list of evaluation jobs by either ascending or descending order",
          args: {
            name: "string",
          },
        },
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
      name: "list-foundation-models",
      description:
        "Lists Amazon Bedrock foundation models that you can use. You can filter the results with the request parameters. For more information, see Foundation models in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--by-provider",
          description:
            "Return models belonging to the model provider that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-customization-type",
          description:
            "Return models that support the customization type that you specify. For more information, see Custom models in the Amazon Bedrock User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-output-modality",
          description:
            "Return models that support the output modality that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-inference-type",
          description:
            "Return models that support the inference type that you specify. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-guardrails",
      description:
        "Lists details about all the guardrails in an account. To list the DRAFT version of all your guardrails, don't specify the guardrailIdentifier field. To list all versions of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field. You can set the maximum number of results to return in a response in the maxResults field. If there are more results than the number you set, the response returns a nextToken that you can send in another ListGuardrails request to see the next batch of results",
      options: [
        {
          name: "--guardrail-identifier",
          description:
            "The unique identifier of the guardrail. This can be an ID or the ARN",
          args: {
            name: "string",
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
          name: "--next-token",
          description:
            "If there are more results than were returned in the response, the response returns a nextToken that you can send in another ListGuardrails request to see the next batch of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-imported-models",
      description:
        "Returns a list of models you've imported. You can filter the results to return based on one or more criteria. For more information, see Import a customized model in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--creation-time-before",
          description:
            "Return imported models that created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-after",
          description:
            "Return imported models that were created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name-contains",
          description:
            "Return imported models only if the model name contains these characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort by in the returned list of imported models",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies whetehr to sort the results in ascending or descending order",
          args: {
            name: "string",
          },
        },
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
      name: "list-inference-profiles",
      description:
        "Returns a list of inference profiles that you can use. For more information, see Increase throughput and resilience with cross-region inference in Amazon Bedrock. in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-equals",
          description:
            "Filters for inference profiles that match the type you specify.    SYSTEM_DEFINED \u2013 The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles.    APPLICATION \u2013 The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions",
          args: {
            name: "string",
          },
        },
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
      name: "list-marketplace-model-endpoints",
      description:
        "Lists the endpoints for models from Amazon Bedrock Marketplace in your Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. If more results are available, the operation returns a NextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. You receive this token from a previous ListMarketplaceModelEndpoints call",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-source-equals",
          description:
            "If specified, only endpoints for the given model source identifier are returned",
          args: {
            name: "string",
          },
        },
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
      name: "list-model-copy-jobs",
      description:
        "Returns a list of model copy jobs that you have submitted. You can filter the jobs to return based on one or more criteria. For more information, see Copy models to be used in other regions in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--creation-time-after",
          description:
            "Filters for model copy jobs created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Filters for model copy jobs created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "Filters for model copy jobs whose status matches the value that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-account-equals",
          description:
            "Filters for model copy jobs in which the account that the source model belongs to is equal to the value that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-model-arn-equals",
          description:
            "Filters for model copy jobs in which the Amazon Resource Name (ARN) of the source model to is equal to the value that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-model-name-contains",
          description:
            "Filters for model copy jobs in which the name of the copied model contains the string that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort by in the returned list of model copy jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies whether to sort the results in ascending or descending order",
          args: {
            name: "string",
          },
        },
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
      name: "list-model-customization-jobs",
      description:
        "Returns a list of model customization jobs that you have submitted. You can filter the jobs to return based on one or more criteria. For more information, see Custom models in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--creation-time-after",
          description:
            "Return customization jobs created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Return customization jobs created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description: "Return customization jobs with the specified status",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "Return customization jobs only if the job name contains these characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The field to sort by in the returned list of jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order of the results",
          args: {
            name: "string",
          },
        },
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
      name: "list-model-import-jobs",
      description:
        "Returns a list of import jobs you've submitted. You can filter the results to return based on one or more criteria. For more information, see Import a customized model in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--creation-time-after",
          description:
            "Return import jobs that were created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "Return import jobs that were created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description: "Return imported jobs with the specified status",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "Return imported jobs only if the job name contains these characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort by in the returned list of imported jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies whether to sort the results in ascending or descending order",
          args: {
            name: "string",
          },
        },
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
      name: "list-model-invocation-jobs",
      description:
        "Lists all batch inference jobs in the account. For more information, see View details about a batch inference job",
      options: [
        {
          name: "--submit-time-after",
          description:
            "Specify a time to filter for batch inference jobs that were submitted after the time you specify",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--submit-time-before",
          description:
            "Specify a time to filter for batch inference jobs that were submitted before the time you specify",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "Specify a status to filter for batch inference jobs whose statuses match the string you specify. The following statuses are possible:   Submitted \u2013 This job has been submitted to a queue for validation.   Validating \u2013 This job is being validated for the requirements described in Format and upload your batch inference data. The criteria include the following:   Your IAM service role has access to the Amazon S3 buckets containing your files.   Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the modelInput value matches the request body for the model.   Your files fulfill the requirements for file size and number of records. For more information, see Quotas for Amazon Bedrock.     Scheduled \u2013 This job has been validated and is now in a queue. The job will automatically start when it reaches its turn.   Expired \u2013 This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request.   InProgress \u2013 This job has begun. You can start viewing the results in the output S3 location.   Completed \u2013 This job has successfully completed. View the output files in the output S3 location.   PartiallyCompleted \u2013 This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location.   Failed \u2013 This job has failed. Check the failure message for any further details. For further assistance, reach out to the Amazon Web Services Support Center.   Stopped \u2013 This job was stopped by a user.   Stopping \u2013 This job is being stopped by a user",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "Specify a string to filter for batch inference jobs whose names contain the string",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. If there are more results than the number that you specify, a nextToken value is returned. Use the nextToken in a request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If there were more results than the value you specified in the maxResults field in a previous ListModelInvocationJobs request, the response would have returned a nextToken value. To see the next batch of results, send the nextToken value in another request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "An attribute by which to sort the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies whether to sort the results by ascending or descending order",
          args: {
            name: "string",
          },
        },
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
      name: "list-prompt-routers",
      description: "Retrieves a list of prompt routers",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of prompt routers to return in one page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specify the pagination token from a previous request to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-provisioned-model-throughputs",
      description:
        "Lists the Provisioned Throughputs in the account. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that returns Provisioned Throughputs created after the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that returns Provisioned Throughputs created before the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that returns Provisioned Throughputs if their statuses matches the value that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-arn-equals",
          description:
            "A filter that returns Provisioned Throughputs whose model Amazon Resource Name (ARN) is equal to the value that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "A filter that returns Provisioned Throughputs if their name contains the expression that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "THe maximum number of results to return in the response. If there are more results than the number you specified, the response returns a nextToken value. To see the next batch of results, send the nextToken value in another list request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If there are more results than the number you specified in the maxResults field, the response returns a nextToken value. To see the next batch of results, specify the nextToken value in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field by which to sort the returned list of Provisioned Throughputs",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order of the results",
          args: {
            name: "string",
          },
        },
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
        "List the tags associated with the specified resource. For more information, see Tagging resources in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-model-invocation-logging-configuration",
      description: "Set the configuration values for model invocation logging",
      options: [
        {
          name: "--logging-config",
          description: "The logging configuration values to set",
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
      name: "register-marketplace-model-endpoint",
      description:
        "Registers an existing Amazon SageMaker endpoint with Amazon Bedrock Marketplace, allowing it to be used with Amazon Bedrock APIs",
      options: [
        {
          name: "--endpoint-identifier",
          description:
            "The ARN of the Amazon SageMaker endpoint you want to register with Amazon Bedrock Marketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-source-identifier",
          description:
            "The ARN of the model from Amazon Bedrock Marketplace that is deployed on the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-evaluation-job",
      description:
        "Stops an evaluation job that is current being created or running",
      options: [
        {
          name: "--job-identifier",
          description:
            "The Amazon Resource Name (ARN) of the evaluation job you want to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-model-customization-job",
      description:
        "Stops an active model customization job. For more information, see Custom models in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--job-identifier",
          description: "Job identifier of the job to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-model-invocation-job",
      description:
        "Stops a batch inference job. You're only charged for tokens that were already processed. For more information, see Stop a batch inference job",
      options: [
        {
          name: "--job-identifier",
          description:
            "The Amazon Resource Name (ARN) of the batch inference job to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Associate tags with a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags to associate with the resource",
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
        "Remove one or more tags from a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Tag keys of the tags to remove from the resource",
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
      name: "update-guardrail",
      description:
        "Updates a guardrail with the values you specify.   Specify a name and optional description.   Specify messages for when the guardrail successfully blocks a prompt or a model response in the blockedInputMessaging and blockedOutputsMessaging fields.   Specify topics for the guardrail to deny in the topicPolicyConfig object. Each GuardrailTopicConfig object in the topicsConfig list pertains to one topic.   Give a name and description so that the guardrail can properly identify the topic.   Specify DENY in the type field.   (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the examples list.     Specify filter strengths for the harmful categories defined in Amazon Bedrock in the contentPolicyConfig object. Each GuardrailContentFilterConfig object in the filtersConfig list pertains to a harmful category. For more information, see Content filters. For more information about the fields in a content filter, see GuardrailContentFilterConfig.   Specify the category in the type field.   Specify the strength of the filter for prompts in the inputStrength field and for model responses in the strength field of the GuardrailContentFilterConfig.     (Optional) For security, include the ARN of a KMS key in the kmsKeyId field",
      options: [
        {
          name: "--guardrail-identifier",
          description:
            "The unique identifier of the guardrail. This can be an ID or the ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-policy-config",
          description: "The topic policy to configure for the guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--content-policy-config",
          description: "The content policy to configure for the guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--word-policy-config",
          description: "The word policy to configure for the guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sensitive-information-policy-config",
          description:
            "The sensitive information policy to configure for the guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--contextual-grounding-policy-config",
          description:
            "The contextual grounding policy configuration used to update a guardrail",
          args: {
            name: "structure",
          },
        },
        {
          name: "--blocked-input-messaging",
          description:
            "The message to return when the guardrail blocks a prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--blocked-outputs-messaging",
          description:
            "The message to return when the guardrail blocks a model response",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ARN of the KMS key with which to encrypt the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-marketplace-model-endpoint",
      description:
        "Updates the configuration of an existing endpoint for a model from Amazon Bedrock Marketplace",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) of the endpoint you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-config",
          description:
            "The new configuration for the endpoint, including the number and type of instances to use",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token is listed as not required because Amazon Web Services SDKs automatically generate it for you and set this parameter. If you're not using the Amazon Web Services SDK or the CLI, you must provide this token or the action will fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-provisioned-model-throughput",
      description:
        "Updates the name or associated model for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--provisioned-model-id",
          description:
            "The Amazon Resource Name (ARN) or name of the Provisioned Throughput to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-provisioned-model-name",
          description: "The new name for this Provisioned Throughput",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-model-id",
          description:
            "The Amazon Resource Name (ARN) of the new model to associate with this Provisioned Throughput. You can't specify this field if this Provisioned Throughput is associated with a base model. If this Provisioned Throughput is associated with a custom model, you can specify one of the following options:   The base model from which the custom model was customized.   Another custom model that was customized from the same base model as the custom model",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
