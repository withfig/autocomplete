const completionSpec: Fig.Spec = {
  name: "bedrock-runtime",
  description:
    "Describes the API operations for running inference using Amazon Bedrock models",
  subcommands: [
    {
      name: "invoke-model",
      description:
        "Invokes the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. You use model inference to generate text, images, and embeddings. For example code, see Invoke model code examples in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModel action",
      options: [
        {
          name: "--body",
          description:
            "The prompt and inference parameters in the format specified in the contentType in the header. To see the format and content of the request and response bodies for different models, refer to Inference parameters. For more information, see Run inference in the Bedrock User Guide",
          args: {
            name: "blob",
          },
        },
        {
          name: "--content-type",
          description:
            "The MIME type of the input data in the request. The default value is application/json",
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
