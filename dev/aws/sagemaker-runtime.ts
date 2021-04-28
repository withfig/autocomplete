export const completionSpec: Fig.Spec = {
  name: "sagemaker-runtime",
  description: "The Amazon SageMaker runtime API.",
  subcommands: [
    {
      name: "invoke-endpoint",
      description:
        "After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint.  For an overview of Amazon SageMaker, see How It Works.  Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.  Calls to InvokeEndpoint are authenticated by using AWS Signature Version 4. For information, see Authenticating Requests (AWS Signature Version 4) in the Amazon S3 API Reference. A customer's model containers must respond to requests within 60 seconds. The model itself can have a maximum processing time of 60 seconds before responding to invocations. If your model is going to take 50-60 seconds of processing time, the SDK socket timeout should be set to be 70 seconds.  Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker determines the account ID from the authentication token that is supplied by the caller.",
      options: [
        {
          name: "--endpoint-name",
          description:
            "The name of the endpoint that you specified when you created the endpoint using the CreateEndpoint API.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--body",
          description:
            "Provides input data, in the format specified in the ContentType request header. Amazon SageMaker passes all of the data in the body to the model.  For information about the format of the request body, see Common Data Formats-Inference.",
          args: {
            name: "blob",
          },
          isOptional: false,
        },
        {
          name: "--content-type",
          description: "The MIME type of the input data in the request body.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--accept",
          description:
            "The desired MIME type of the inference in the response.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--custom-attributes",
          description:
            "Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in Section 3.3.6. Field Value Components of the Hypertext Transfer Protocol (HTTP/1.1).  The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with Trace ID: in your post-processing function. This feature is currently supported in the AWS SDKs but not in the Amazon SageMaker Python SDK.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--target-model",
          description:
            "The model to request for inference when invoking a multi-model endpoint.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--target-variant",
          description:
            "Specify the production variant to send the inference request to when invoking an endpoint that is running two or more variants. Note that this parameter overrides the default behavior for the endpoint, which is to distribute the invocation traffic based on the variant weights. For information about how to use variant targeting to perform a/b testing, see Test models in production",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--target-container-hostname",
          description:
            "If the endpoint hosts multiple containers and is configured to use direct invocation, this parameter specifies the host name of the container to invoke.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--inference-id",
          description:
            "If you provide a value, it is added to the captured data when you enable data capture on the endpoint. For information about data capture, see Capture Data.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
          isOptional: false,
        },
      ],
    },
  ],
};
