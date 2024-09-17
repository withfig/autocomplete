const completionSpec: Fig.Spec = {
  name: "runtime.sagemaker",
  description: "The Amazon SageMaker runtime API",
  subcommands: [
    {
      name: "invoke-endpoint",
      description:
        "After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint.  For an overview of Amazon SageMaker, see How It Works.  Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.  Calls to InvokeEndpoint are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 API Reference. A customer's model containers must respond to requests within 60 seconds. The model itself can have a maximum processing time of 60 seconds before responding to invocations. If your model is going to take 50-60 seconds of processing time, the SDK socket timeout should be set to be 70 seconds.  Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker determines the account ID from the authentication token that is supplied by the caller",
      options: [
        {
          name: "--endpoint-name",
          description:
            "The name of the endpoint that you specified when you created the endpoint using the CreateEndpoint API",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description:
            "Provides input data, in the format specified in the ContentType request header. Amazon SageMaker passes all of the data in the body to the model.  For information about the format of the request body, see Common Data Formats-Inference",
          args: {
            name: "blob",
          },
        },
        {
          name: "--content-type",
          description: "The MIME type of the input data in the request body",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept",
          description:
            "The desired MIME type of the inference response from the model container",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-attributes",
          description:
            "Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in Section 3.3.6. Field Value Components of the Hypertext Transfer Protocol (HTTP/1.1).  The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with Trace ID: in your post-processing function.  This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker Python SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-model",
          description:
            "The model to request for inference when invoking a multi-model endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-variant",
          description:
            "Specify the production variant to send the inference request to when invoking an endpoint that is running two or more variants. Note that this parameter overrides the default behavior for the endpoint, which is to distribute the invocation traffic based on the variant weights. For information about how to use variant targeting to perform a/b testing, see Test models in production",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-container-hostname",
          description:
            "If the endpoint hosts multiple containers and is configured to use direct invocation, this parameter specifies the host name of the container to invoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--inference-id",
          description:
            "If you provide a value, it is added to the captured data when you enable data capture on the endpoint. For information about data capture, see Capture Data",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-explanations",
          description:
            "An optional JMESPath expression used to override the EnableExplanations parameter of the ClarifyExplainerConfig API. See the EnableExplanations section in the developer guide for more information",
          args: {
            name: "string",
          },
        },
        {
          name: "--inference-component-name",
          description:
            "If the endpoint hosts one or more inference components, this parameter specifies the name of inference component to invoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "Creates a stateful session or identifies an existing one. You can do one of the following:   Create a stateful session by specifying the value NEW_SESSION.   Send your request to an existing stateful session by specifying the ID of that session.   With a stateful session, you can send multiple requests to a stateful model. When you create a session with a stateful model, the model must create the session ID and set the expiration time. The model must also provide that information in the response to your request. You can get the ID and timestamp from the NewSessionId response parameter. For any subsequent request where you specify that session ID, SageMaker routes the request to the same instance that supports the session",
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
      name: "invoke-endpoint-async",
      description:
        "After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint in an asynchronous manner. Inference requests sent to this API are enqueued for asynchronous processing. The processing of the inference request may or may not complete before you receive a response from this API. The response from this API will not contain the result of the inference request but contain information about where you can locate it. Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.  Calls to InvokeEndpointAsync are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 API Reference",
      options: [
        {
          name: "--endpoint-name",
          description:
            "The name of the endpoint that you specified when you created the endpoint using the CreateEndpoint API",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description: "The MIME type of the input data in the request body",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept",
          description:
            "The desired MIME type of the inference response from the model container",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-attributes",
          description:
            "Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in Section 3.3.6. Field Value Components of the Hypertext Transfer Protocol (HTTP/1.1).  The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with Trace ID: in your post-processing function.  This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker Python SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--inference-id",
          description:
            "The identifier for the inference request. Amazon SageMaker will generate an identifier for you if none is specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-location",
          description:
            "The Amazon S3 URI where the inference request payload is stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-ttl-seconds",
          description:
            "Maximum age in seconds a request can be in the queue before it is marked as expired. The default is 6 hours, or 21,600 seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--invocation-timeout-seconds",
          description:
            "Maximum amount of time in seconds a request can be processed before it is marked as expired. The default is 15 minutes, or 900 seconds",
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
  ],
};
export default completionSpec;
