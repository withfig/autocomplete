const completionSpec: Fig.Spec = {
  name: "bedrock-runtime",
  description:
    "Describes the API operations for running inference using Amazon Bedrock models",
  subcommands: [
    {
      name: "apply-guardrail",
      description:
        "The action to apply a guardrail. For troubleshooting some of the common errors you might encounter when using the ApplyGuardrail API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide",
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
        "Sends messages to the specified Amazon Bedrock model. Converse provides a consistent interface that works with all models that support messages. This allows you to write code once and use it with different models. If a model has unique inference parameters, you can also pass those unique parameters to the model. Amazon Bedrock doesn't store any text, images, or documents that you provide as content. The data is only used to generate the response. You can submit a prompt by including it in the messages field, specifying the modelId of a foundation model or inference profile to run inference on it, and including any other fields that are relevant to your use case. You can also submit a prompt from Prompt management by specifying the ARN of the prompt version and including a map of variables to values in the promptVariables field. You can append more messages to the prompt by using the messages field. If you use a prompt from Prompt management, you can't include the following fields in the request: additionalModelRequestFields, inferenceConfig, system, or toolConfig. Instead, these fields must be defined through Prompt management. For more information, see Use a prompt from Prompt management. For information about the Converse API, see Use the Converse API in the Amazon Bedrock User Guide. To use a guardrail, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide. To use a tool with a model, see Tool use (Function calling) in the Amazon Bedrock User Guide  For example code, see Converse API examples in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModel action.   To deny all inference access to resources that you specify in the modelId field, you need to deny access to the bedrock:InvokeModel and bedrock:InvokeModelWithResponseStream actions. Doing this also denies access to the resource through the base inference actions (InvokeModel and InvokeModelWithResponseStream). For more information see Deny access for inference on specific models.   For troubleshooting some of the common errors you might encounter when using the Converse API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--model-id",
          description:
            "Specifies the model or throughput with which to run inference, or the prompt resource to use in inference. The value depends on the resource that you use:   If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide.   If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see Supported Regions and models for cross-region inference in the Amazon Bedrock User Guide.   If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide.   If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide.   To include a prompt that was defined in Prompt management, specify the ARN of the prompt version to use.   The Converse API doesn't support imported models",
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
          description:
            "A prompt that provides instructions or context to the model about the task it should perform, or the persona it should adopt during the conversation",
          args: {
            name: "list",
          },
        },
        {
          name: "--inference-config",
          description:
            "Inference parameters to pass to the model. Converse and ConverseStream support a base set of inference parameters. If you need to pass additional parameters that the model supports, use the additionalModelRequestFields request field",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tool-config",
          description:
            "Configuration information for the tools that the model can use when generating a response.  For information about models that support tool use, see Supported models and model features",
          args: {
            name: "structure",
          },
        },
        {
          name: "--guardrail-config",
          description:
            "Configuration information for a guardrail that you want to use in the request. If you include guardContent blocks in the content field in the messages field, the guardrail operates only on those messages. If you include no guardContent blocks, the guardrail operates on all messages in the request body and in any included prompt resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-model-request-fields",
          description:
            "Additional inference parameters that the model supports, beyond the base set of inference parameters that Converse and ConverseStream support in the inferenceConfig field. For more information, see Model parameters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--prompt-variables",
          description:
            "Contains a map of variables in a prompt from Prompt management to objects containing the values to fill in for them when running model invocation. This field is ignored if you don't specify a prompt resource in the modelId field",
          args: {
            name: "map",
          },
        },
        {
          name: "--additional-model-response-field-paths",
          description:
            'Additional model parameters field paths to return in the response. Converse and ConverseStream return the requested fields as a JSON Pointer object in the additionalModelResponseFields field. The following is example JSON for additionalModelResponseFieldPaths.  [ "/stop_sequence" ]  For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation.  Converse and ConverseStream reject an empty JSON Pointer or incorrectly structured JSON Pointer with a 400 error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by Converse',
          args: {
            name: "list",
          },
        },
        {
          name: "--request-metadata",
          description:
            "Key-value pairs that you can use to filter invocation logs",
          args: {
            name: "map",
          },
        },
        {
          name: "--performance-config",
          description: "Model performance settings for the request",
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
      name: "get-async-invoke",
      description: "Retrieve information about an asynchronous invocation",
      options: [
        {
          name: "--invocation-arn",
          description: "The invocation's ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Invokes the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. You use model inference to generate text, images, and embeddings. For example code, see Invoke model code examples in the Amazon Bedrock User Guide.  This operation requires permission for the bedrock:InvokeModel action.  To deny all inference access to resources that you specify in the modelId field, you need to deny access to the bedrock:InvokeModel and bedrock:InvokeModelWithResponseStream actions. Doing this also denies access to the resource through the Converse API actions (Converse and ConverseStream). For more information see Deny access for inference on specific models.   For troubleshooting some of the common errors you might encounter when using the InvokeModel API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide",
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
            "The unique identifier of the model to invoke to run inference. The modelId to provide depends on the type of model or throughput that you use:   If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide.   If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see Supported Regions and models for cross-region inference in the Amazon Bedrock User Guide.   If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide.   If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide.   If you use an imported model, specify the ARN of the imported model. You can get the model ARN from a successful call to CreateModelImportJob or from the Imported models page in the Amazon Bedrock console",
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
          name: "--performance-config-latency",
          description: "Model performance settings for the request",
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
      name: "list-async-invokes",
      description: "Lists asynchronous invocations",
      options: [
        {
          name: "--submit-time-after",
          description: "Include invocations submitted after this time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--submit-time-before",
          description: "Include invocations submitted before this time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status-equals",
          description: "Filter invocations by status",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of invocations to return in one page of results",
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
          name: "--sort-by",
          description: "How to sort the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sorting order for the response",
          args: {
            name: "string",
          },
        },
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
      name: "start-async-invoke",
      description:
        "Starts an asynchronous invocation. This operation requires permission for the bedrock:InvokeModel action.  To deny all inference access to resources that you specify in the modelId field, you need to deny access to the bedrock:InvokeModel and bedrock:InvokeModelWithResponseStream actions. Doing this also denies access to the resource through the Converse API actions (Converse and ConverseStream). For more information see Deny access for inference on specific models",
      options: [
        {
          name: "--client-request-token",
          description:
            "Specify idempotency token to ensure that requests are not duplicated",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-id",
          description: "The model to invoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-input",
          description: "Input to send to the model",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "Where to store the output",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags to apply to the invocation",
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
  ],
};
export default completionSpec;
