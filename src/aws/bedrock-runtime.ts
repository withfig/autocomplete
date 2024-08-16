const completionSpec: Fig.Spec = {
  name: "bedrock-runtime",
  description:
    "Describes the API operations for running inference using Amazon Bedrock models",
  subcommands: [
    {
      name: "apply-guardrail",
      description: "The action to apply a guardrail",
      options: [
        {
          name: "--guardrail-identifier",
          description:
            "The guardrail identifier used in the request to apply the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-version",
          description:
            "The guardrail version used in the request to apply the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description:
            "The source of data used in the request to apply the guardrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "The content details used in the request to apply the guardrail",
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
      name: "converse",
      description:
        "Sends messages to the specified Amazon Bedrock model. Converse provides a consistent interface that works with all models that support messages. This allows you to write code once and use it with different models. If a model has unique inference parameters, you can also pass those unique parameters to the model. Amazon Bedrock doesn't store any text, images, or documents that you provide as content. The data is only used to generate the response. For information about the Converse API, see Use the Converse API in the Amazon Bedrock User Guide. To use a guardrail, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide. To use a tool with a model, see Tool use (Function calling) in the Amazon Bedrock User Guide  For example code, see Converse API examples in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModel action",
      options: [
        {
          name: "--model-id",
          description:
            "The identifier for the model that you want to call. The modelId to provide depends on the type of model that you use:   If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide.   If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide.   If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--messages",
          description: "The messages that you want to send to the model",
          args: {
            name: "list",
          },
        },
        {
          name: "--system",
          description: "A system prompt to pass to the model",
          args: {
            name: "list",
          },
        },
        {
          name: "--inference-config",
          description:
            "Inference parameters to pass to the model. Converse supports a base set of inference parameters. If you need to pass additional parameters that the model supports, use the additionalModelRequestFields request field",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tool-config",
          description:
            "Configuration information for the tools that the model can use when generating a response.   This field is only supported by Anthropic Claude 3, Cohere Command R, Cohere Command R+, and Mistral Large models",
          args: {
            name: "structure",
          },
        },
        {
          name: "--guardrail-config",
          description:
            "Configuration information for a guardrail that you want to use in the request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-model-request-fields",
          description:
            "Additional inference parameters that the model supports, beyond the base set of inference parameters that Converse supports in the inferenceConfig field. For more information, see Model parameters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-model-response-field-paths",
          description:
            'Additional model parameters field paths to return in the response. Converse returns the requested fields as a JSON Pointer object in the additionalModelResponseFields field. The following is example JSON for additionalModelResponseFieldPaths.  [ "/stop_sequence" ]  For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation.  Converse rejects an empty JSON Pointer or incorrectly structured JSON Pointer with a 400 error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by Converse',
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
      name: "invoke-model",
      description:
        "Invokes the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. You use model inference to generate text, images, and embeddings. For example code, see Invoke model code examples in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModel action",
      options: [
        {
          name: "--body",
          description:
            "The prompt and inference parameters in the format specified in the contentType in the header. You must provide the body in JSON format. To see the format and content of the request and response bodies for different models, refer to Inference parameters. For more information, see Run inference in the Bedrock User Guide",
          args: {
            name: "blob",
          },
        },
        {
          name: "--content-type",
          description:
            "The MIME type of the input data in the request. You must specify application/json",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept",
          description:
            "The desired MIME type of the inference body in the response. The default value is application/json",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-id",
          description:
            "The unique identifier of the model to invoke to run inference. The modelId to provide depends on the type of model that you use:   If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide.   If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide.   If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--trace",
          description:
            "Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-identifier",
          description:
            "The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied to the invocation. An error will be thrown in the following situations.   You don't provide a guardrail identifier but you specify the amazon-bedrock-guardrailConfig field in the request body.   You enable the guardrail but the contentType isn't application/json.   You provide a guardrail identifier, but guardrailVersion isn't specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-version",
          description:
            "The version number for the guardrail. The value can also be DRAFT",
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
  ],
};
export default completionSpec;
