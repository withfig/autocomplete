const completionSpec: Fig.Spec = {
  name: "bedrock",
  description:
    "Describes the API operations for creating, managing, fine-turning, and evaluating Amazon Bedrock models",
  subcommands: [
    {
      name: "create-evaluation-job",
      description:
        "API operation for creating and managing Amazon Bedrock automatic model evaluation jobs and model evaluation jobs that use human workers. To learn more about the requirements for creating a model evaluation job see, Model evaluations",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the model evaluation job. Model evaluation job names must unique with your AWS account, and your account's AWS region",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-description",
          description: "A description of the model evaluation job",
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
            "The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. The service role must have Amazon Bedrock as the service principal, and provide access to any Amazon S3 buckets specified in the EvaluationConfig object. To pass this role to Amazon Bedrock, the caller of this API must have the iam:PassRole permission. To learn more about the required permissions, see Required permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-encryption-key-id",
          description:
            "Specify your customer managed key ARN that will be used to encrypt your model evaluation job",
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
          name: "--evaluation-config",
          description:
            "Specifies whether the model evaluation job is automatic or uses human worker",
          args: {
            name: "structure",
          },
        },
        {
          name: "--inference-config",
          description:
            "Specify the models you want to use in your model evaluation job. Automatic model evaluation jobs support a single model, and model evaluation job that use human workers support two models",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description:
            "An object that defines where the results of model evaluation job will be saved in Amazon S3",
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
        "Creates a guardrail to block topics and to filter out harmful content.   Specify a name and optional description.   Specify messages for when the guardrail successfully blocks a prompt or a model response in the blockedInputMessaging and blockedOutputsMessaging fields.   Specify topics for the guardrail to deny in the topicPolicyConfig object. Each GuardrailTopicConfig object in the topicsConfig list pertains to one topic.   Give a name and description so that the guardrail can properly identify the topic.   Specify DENY in the type field.   (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the examples list.     Specify filter strengths for the harmful categories defined in Amazon Bedrock in the contentPolicyConfig object. Each GuardrailContentFilterConfig object in the filtersConfig list pertains to a harmful category. For more information, see Content filters. For more information about the fields in a content filter, see GuardrailContentFilterConfig.   Specify the category in the type field.   Specify the strength of the filter for prompts in the inputStrength field and for model responses in the strength field of the GuardrailContentFilterConfig.     (Optional) For security, include the ARN of a KMS key in the kmsKeyId field.   (Optional) Attach any tags to the guardrail in the tags object. For more information, see Tag resources",
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
          description: "The unique identifier of the guardrail",
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
            "VPC configuration (optional). Configuration parameters for the private Virtual Private Cloud (VPC) that contains the resources you are using for this job",
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
          description: "The unique identifier of the guardrail",
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
        "Retrieves the properties associated with a model evaluation job, including the status of the job. For more information, see Model evaluations",
      options: [
        {
          name: "--job-identifier",
          description:
            "The Amazon Resource Name (ARN) of the model evaluation job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
            "The unique identifier of the guardrail for which to get details",
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
          description: "Maximum number of results to return in the response",
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
      description: "Lists model evaluation jobs",
      options: [
        {
          name: "--creation-time-after",
          description:
            "A filter that includes model evaluation jobs created after the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--creation-time-before",
          description:
            "A filter that includes model evaluation jobs created prior to the time specified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description: "Only return jobs where the status condition is met",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description: "Query parameter string for model evaluation job names",
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
            "Allows you to sort model evaluation jobs by when they were created",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "How you want the order of jobs sorted",
          args: {
            name: "string",
          },
        },
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
          description: "The unique identifier of the guardrail",
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
          description: "Maximum number of results to return in the response",
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
      name: "stop-evaluation-job",
      description: "Stops an in progress model evaluation job",
      options: [
        {
          name: "--job-identifier",
          description: "The ARN of the model evaluation job you want to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Updates a guardrail with the values you specify.   Specify a name and optional description.   Specify messages for when the guardrail successfully blocks a prompt or a model response in the blockedInputMessaging and blockedOutputsMessaging fields.   Specify topics for the guardrail to deny in the topicPolicyConfig object. Each GuardrailTopicConfig object in the topicsConfig list pertains to one topic.   Give a name and description so that the guardrail can properly identify the topic.   Specify DENY in the type field.   (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the examples list.     Specify filter strengths for the harmful categories defined in Amazon Bedrock in the contentPolicyConfig object. Each GuardrailContentFilterConfig object in the filtersConfig list pertains to a harmful category. For more information, see Content filters. For more information about the fields in a content filter, see GuardrailContentFilterConfig.   Specify the category in the type field.   Specify the strength of the filter for prompts in the inputStrength field and for model responses in the strength field of the GuardrailContentFilterConfig.     (Optional) For security, include the ARN of a KMS key in the kmsKeyId field.   (Optional) Attach any tags to the guardrail in the tags object. For more information, see Tag resources",
      options: [
        {
          name: "--guardrail-identifier",
          description: "The unique identifier of the guardrail",
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
