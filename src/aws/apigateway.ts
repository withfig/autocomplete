const completionSpec: Fig.Spec = {
  name: "apigateway",
  description:
    "Amazon API Gateway Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS",
  subcommands: [
    {
      name: "create-api-key",
      description: "Create an ApiKey resource",
      options: [
        {
          name: "--name",
          description: "The name of the ApiKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the ApiKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--enabled",
          description: "Specifies whether the ApiKey can be used by callers",
        },
        {
          name: "--no-enabled",
          description: "Specifies whether the ApiKey can be used by callers",
        },
        {
          name: "--generate-distinct-id",
          description:
            "Specifies whether (true) or not (false) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used",
        },
        {
          name: "--no-generate-distinct-id",
          description:
            "Specifies whether (true) or not (false) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used",
        },
        {
          name: "--value",
          description: "Specifies a value of the API key",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-keys",
          description:
            "DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key",
          args: {
            name: "list",
          },
        },
        {
          name: "--customer-id",
          description:
            "An Amazon Web Services Marketplace customer identifier, when integrating with the Amazon Web Services SaaS Marketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
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
      name: "create-authorizer",
      description:
        "Adds a new Authorizer resource to an existing RestApi resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the authorizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The authorizer type. Valid values are TOKEN for a Lambda function using a single authorization token submitted in a custom header, REQUEST for a Lambda function using incoming request parameters, and COGNITO_USER_POOLS for using an Amazon Cognito user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-arns",
          description:
            "A list of the Amazon Cognito user pool ARNs for the COGNITO_USER_POOLS authorizer. Each element is of this format: arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}. For a TOKEN or REQUEST authorizer, this is not defined",
          args: {
            name: "list",
          },
        },
        {
          name: "--auth-type",
          description:
            "Optional customer-defined field, used in OpenAPI imports and exports without functional impact",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorizer-uri",
          description:
            "Specifies the authorizer's Uniform Resource Identifier (URI). For TOKEN or REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations. In general, the URI has this form arn:aws:apigateway:{region}:lambda:path/{service_api}, where {region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorizer-credentials",
          description:
            "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-source",
          description:
            "The identity source for which authorization is requested. For a TOKEN or COGNITO_USER_POOLS authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is Auth, the header mapping expression is method.request.header.Auth. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is method.request.header.Auth, method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-validation-expression",
          description:
            "A validation expression for the incoming identity token. For TOKEN authorizers, this value is a regular expression. For COGNITO_USER_POOLS authorizers, API Gateway will match the aud field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the REQUEST authorizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorizer-result-ttl-in-seconds",
          description:
            "The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour",
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
      name: "create-base-path-mapping",
      description: "Creates a new BasePathMapping resource",
      options: [
        {
          name: "--domain-name",
          description:
            "The domain name of the BasePathMapping resource to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name-id",
          description:
            "The identifier for the domain name resource. Supported only for private custom domain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-path",
          description:
            "The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name",
          args: {
            name: "string",
          },
        },
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage",
          description:
            "The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-deployment",
      description:
        "Creates a Deployment resource, which makes a specified RestApi callable over the internet",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description:
            "The name of the Stage resource for the Deployment resource to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-description",
          description:
            "The description of the Stage resource for the Deployment resource to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the Deployment resource to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-cluster-enabled",
          description:
            "Enables a cache cluster for the Stage resource specified in the input",
        },
        {
          name: "--no-cache-cluster-enabled",
          description:
            "Enables a cache cluster for the Stage resource specified in the input",
        },
        {
          name: "--cache-cluster-size",
          description:
            "The stage's cache capacity in GB. For more information about choosing a cache size, see Enabling API caching to enhance responsiveness",
          args: {
            name: "string",
          },
        },
        {
          name: "--variables",
          description:
            "A map that defines the stage variables for the Stage resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+",
          args: {
            name: "map",
          },
        },
        {
          name: "--canary-settings",
          description:
            "The input configuration for the canary deployment when the deployment is a canary release deployment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tracing-enabled",
          description:
            "Specifies whether active tracing with X-ray is enabled for the Stage",
        },
        {
          name: "--no-tracing-enabled",
          description:
            "Specifies whether active tracing with X-ray is enabled for the Stage",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-documentation-part",
      description: "Creates a documentation part",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The location of the targeted API entity of the to-be-created documentation part",
          args: {
            name: "structure",
          },
        },
        {
          name: "--properties",
          description:
            "The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-documentation-version",
      description: "Creates a documentation version",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--documentation-version",
          description: "The version identifier of the new snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description:
            "The stage name to be associated with the new documentation snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description about the new documentation snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-domain-name",
      description: "Creates a new domain name",
      options: [
        {
          name: "--domain-name",
          description: "The name of the DomainName resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-name",
          description:
            "The user-friendly name of the certificate that will be used by edge-optimized endpoint or private endpoint for this domain name",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-body",
          description:
            "[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint or private endpoint for this domain name provided by your certificate authority",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-private-key",
          description:
            "[Deprecated] Your edge-optimized endpoint's domain name certificate's private key",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-chain",
          description:
            "[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-arn",
          description:
            "The reference to an Amazon Web Services-managed certificate that will be used by edge-optimized endpoint or private endpoint for this domain name. Certificate Manager is the only supported source",
          args: {
            name: "string",
          },
        },
        {
          name: "--regional-certificate-name",
          description:
            "The user-friendly name of the certificate that will be used by regional endpoint for this domain name",
          args: {
            name: "string",
          },
        },
        {
          name: "--regional-certificate-arn",
          description:
            "The reference to an Amazon Web Services-managed certificate that will be used by regional endpoint for this domain name. Certificate Manager is the only supported source",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-configuration",
          description:
            "The endpoint configuration of this DomainName showing the endpoint types of the domain name",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--security-policy",
          description:
            "The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are TLS_1_0 and TLS_1_2",
          args: {
            name: "string",
          },
        },
        {
          name: "--mutual-tls-authentication",
          description:
            "The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ownership-verification-certificate-arn",
          description:
            "The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "A stringified JSON policy document that applies to the execute-api service for this DomainName regardless of the caller and Method configuration. Supported only for private custom domain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-domain-name-access-association",
      description:
        "Creates a domain name access association resource between an access association source and a private custom domain name",
      options: [
        {
          name: "--domain-name-arn",
          description: "The ARN of the domain name",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-association-source-type",
          description: "The type of the domain name access association source",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-association-source",
          description:
            "The identifier of the domain name access association source. For a VPCE, the value is the VPC endpoint ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
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
      name: "create-model",
      description: "Adds a new Model resource to an existing RestApi resource",
      options: [
        {
          name: "--rest-api-id",
          description:
            "The RestApi identifier under which the Model will be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the model. Must be alphanumeric",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema",
          description:
            "The schema for the model. For application/json models, this should be JSON schema draft 4 model. The maximum size of the model is 400 KB",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description: "The content-type for the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-request-validator",
      description: "Creates a RequestValidator of a given RestApi",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the to-be-created RequestValidator",
          args: {
            name: "string",
          },
        },
        {
          name: "--validate-request-body",
          description:
            "A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (true) or not (false)",
        },
        {
          name: "--no-validate-request-body",
          description:
            "A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (true) or not (false)",
        },
        {
          name: "--validate-request-parameters",
          description:
            "A Boolean flag to indicate whether to validate request parameters, true, or not false",
        },
        {
          name: "--no-validate-request-parameters",
          description:
            "A Boolean flag to indicate whether to validate request parameters, true, or not false",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-resource",
      description: "Creates a Resource resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-id",
          description: "The parent resource's identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--path-part",
          description: "The last path segment for this resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-rest-api",
      description: "Creates a new RestApi resource",
      options: [
        {
          name: "--name",
          description: "The name of the RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--clone-from",
          description: "The ID of the RestApi that you want to clone from",
          args: {
            name: "string",
          },
        },
        {
          name: "--binary-media-types",
          description:
            "The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads",
          args: {
            name: "list",
          },
        },
        {
          name: "--minimum-compression-size",
          description:
            "A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--api-key-source",
          description:
            "The source of the API key for metering requests according to a usage plan. Valid values are: HEADER to read the API key from the X-API-Key header of a request. AUTHORIZER to read the API key from the UsageIdentifierKey from a custom authorizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-configuration",
          description:
            "The endpoint configuration of this RestApi showing the endpoint types of the API",
          args: {
            name: "structure",
          },
        },
        {
          name: "--policy",
          description:
            "A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--disable-execute-api-endpoint",
          description:
            "Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint",
        },
        {
          name: "--no-disable-execute-api-endpoint",
          description:
            "Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint",
        },
        {
          name: "--api-version",
          description: "A version identifier for the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-stage",
      description:
        "Creates a new Stage resource that references a pre-existing Deployment for the API",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description:
            "The name for the Stage resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-id",
          description:
            "The identifier of the Deployment resource for the Stage resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Stage resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-cluster-enabled",
          description: "Whether cache clustering is enabled for the stage",
        },
        {
          name: "--no-cache-cluster-enabled",
          description: "Whether cache clustering is enabled for the stage",
        },
        {
          name: "--cache-cluster-size",
          description:
            "The stage's cache capacity in GB. For more information about choosing a cache size, see Enabling API caching to enhance responsiveness",
          args: {
            name: "string",
          },
        },
        {
          name: "--variables",
          description:
            "A map that defines the stage variables for the new Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+",
          args: {
            name: "map",
          },
        },
        {
          name: "--documentation-version",
          description: "The version of the associated API documentation",
          args: {
            name: "string",
          },
        },
        {
          name: "--canary-settings",
          description: "The canary deployment settings of this stage",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tracing-enabled",
          description:
            "Specifies whether active tracing with X-ray is enabled for the Stage",
        },
        {
          name: "--no-tracing-enabled",
          description:
            "Specifies whether active tracing with X-ray is enabled for the Stage",
        },
        {
          name: "--tags",
          description:
            "The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
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
      name: "create-usage-plan",
      description:
        "Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload",
      options: [
        {
          name: "--name",
          description: "The name of the usage plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the usage plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-stages",
          description: "The associated API stages of the usage plan",
          args: {
            name: "list",
          },
        },
        {
          name: "--throttle",
          description: "The throttling limits of the usage plan",
          args: {
            name: "structure",
          },
        },
        {
          name: "--quota",
          description: "The quota of the usage plan",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
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
      name: "create-usage-plan-key",
      description:
        "Creates a usage plan key for adding an existing API key to a usage plan",
      options: [
        {
          name: "--usage-plan-id",
          description:
            "The Id of the UsagePlan resource representing the usage plan containing the to-be-created UsagePlanKey resource representing a plan customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-id",
          description:
            "The identifier of a UsagePlanKey resource for a plan customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-type",
          description:
            "The type of a UsagePlanKey resource for a plan customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-vpc-link",
      description:
        "Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services",
      options: [
        {
          name: "--name",
          description: "The name used to label and identify the VPC link",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the VPC link",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-arns",
          description:
            "The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same Amazon Web Services account of the API owner",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
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
      name: "delete-api-key",
      description: "Deletes the ApiKey resource",
      options: [
        {
          name: "--api-key",
          description: "The identifier of the ApiKey resource to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-authorizer",
      description: "Deletes an existing Authorizer resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorizer-id",
          description: "The identifier of the Authorizer resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-base-path-mapping",
      description: "Deletes the BasePathMapping resource",
      options: [
        {
          name: "--domain-name",
          description:
            "The domain name of the BasePathMapping resource to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name-id",
          description:
            "The identifier for the domain name resource. Supported only for private custom domain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-path",
          description:
            "The base path name of the BasePathMapping resource to delete. To specify an empty base path, set this parameter to '(none)'",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-client-certificate",
      description: "Deletes the ClientCertificate resource",
      options: [
        {
          name: "--client-certificate-id",
          description:
            "The identifier of the ClientCertificate resource to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-deployment",
      description:
        "Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-id",
          description: "The identifier of the Deployment resource to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-documentation-part",
      description: "Deletes a documentation part",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--documentation-part-id",
          description: "The identifier of the to-be-deleted documentation part",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-documentation-version",
      description: "Deletes a documentation version",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--documentation-version",
          description:
            "The version identifier of a to-be-deleted documentation snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-domain-name",
      description: "Deletes the DomainName resource",
      options: [
        {
          name: "--domain-name",
          description: "The name of the DomainName resource to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name-id",
          description:
            "The identifier for the domain name resource. Supported only for private custom domain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-domain-name-access-association",
      description:
        "Deletes the DomainNameAccessAssociation resource. Only the AWS account that created the DomainNameAccessAssociation resource can delete it. To stop an access association source in another AWS account from accessing your private custom domain name, use the RejectDomainNameAccessAssociation operation",
      options: [
        {
          name: "--domain-name-access-association-arn",
          description: "The ARN of the domain name access association resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-gateway-response",
      description:
        "Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-type",
          description: "The response type of the associated GatewayResponse",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-integration",
      description: "Represents a delete integration",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "Specifies a delete integration request's resource identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "Specifies a delete integration request's HTTP method",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-integration-response",
      description: "Represents a delete integration response",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "Specifies a delete integration response request's resource identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description:
            "Specifies a delete integration response request's HTTP method",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description:
            "Specifies a delete integration response request's status code",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-method",
      description: "Deletes an existing Method resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The Resource identifier for the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "The HTTP verb of the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-method-response",
      description: "Deletes an existing MethodResponse resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The Resource identifier for the MethodResponse resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "The HTTP verb of the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description:
            "The status code identifier for the MethodResponse resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Deletes a model",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
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
      name: "delete-request-validator",
      description: "Deletes a RequestValidator of a given RestApi",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-validator-id",
          description: "The identifier of the RequestValidator to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-resource",
      description: "Deletes a Resource resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The identifier of the Resource resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-rest-api",
      description: "Deletes the specified API",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-stage",
      description: "Deletes a Stage resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description: "The name of the Stage resource to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-usage-plan",
      description: "Deletes a usage plan of a given plan Id",
      options: [
        {
          name: "--usage-plan-id",
          description: "The Id of the to-be-deleted usage plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-usage-plan-key",
      description:
        "Deletes a usage plan key and remove the underlying API key from the associated usage plan",
      options: [
        {
          name: "--usage-plan-id",
          description:
            "The Id of the UsagePlan resource representing the usage plan containing the to-be-deleted UsagePlanKey resource representing a plan customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-id",
          description: "The Id of the UsagePlanKey resource to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-vpc-link",
      description: "Deletes an existing VpcLink of a specified identifier",
      options: [
        {
          name: "--vpc-link-id",
          description:
            "The identifier of the VpcLink. It is used in an Integration to reference this VpcLink",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "flush-stage-authorizers-cache",
      description: "Flushes all authorizer cache entries on a stage",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description: "The name of the stage to flush",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "flush-stage-cache",
      description: "Flushes a stage's cache",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description: "The name of the stage to flush its cache",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "generate-client-certificate",
      description: "Generates a ClientCertificate resource",
      options: [
        {
          name: "--description",
          description: "The description of the ClientCertificate",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
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
      name: "get-account",
      description: "Gets information about the current Account resource",
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
      name: "get-api-key",
      description: "Gets information about the current ApiKey resource",
      options: [
        {
          name: "--api-key",
          description: "The identifier of the ApiKey resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-value",
          description:
            "A boolean flag to specify whether (true) or not (false) the result contains the key value",
        },
        {
          name: "--no-include-value",
          description:
            "A boolean flag to specify whether (true) or not (false) the result contains the key value",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-api-keys",
      description: "Gets information about the current ApiKeys resource",
      options: [
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-query",
          description: "The name of queried API keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-id",
          description:
            "The identifier of a customer in Amazon Web Services Marketplace or an external system, such as a developer portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-values",
          description:
            "A boolean flag to specify whether (true) or not (false) the result contains key values",
        },
        {
          name: "--no-include-values",
          description:
            "A boolean flag to specify whether (true) or not (false) the result contains key values",
        },
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
      name: "get-authorizer",
      description: "Describe an existing Authorizer resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorizer-id",
          description: "The identifier of the Authorizer resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-authorizers",
      description: "Describe an existing Authorizers resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-base-path-mapping",
      description: "Describe a BasePathMapping resource",
      options: [
        {
          name: "--domain-name",
          description:
            "The domain name of the BasePathMapping resource to be described",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name-id",
          description:
            "The identifier for the domain name resource. Supported only for private custom domain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-path",
          description:
            "The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify any base path name after the domain name",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-base-path-mappings",
      description: "Represents a collection of BasePathMapping resources",
      options: [
        {
          name: "--domain-name",
          description: "The domain name of a BasePathMapping resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name-id",
          description:
            "The identifier for the domain name resource. Supported only for private custom domain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-client-certificate",
      description:
        "Gets information about the current ClientCertificate resource",
      options: [
        {
          name: "--client-certificate-id",
          description:
            "The identifier of the ClientCertificate resource to be described",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-client-certificates",
      description: "Gets a collection of ClientCertificate resources",
      options: [
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-deployment",
      description: "Gets information about a Deployment resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-id",
          description:
            "The identifier of the Deployment resource to get information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--embed",
          description:
            'A query parameter to retrieve the specified embedded resources of the returned Deployment resource in the response. In a REST API call, this embed parameter value is a list of comma-separated strings, as in GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=var1,var2. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the "apisummary" string. For example, GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=apisummary',
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
      name: "get-deployments",
      description: "Gets information about a Deployments collection",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-documentation-part",
      description: "Gets a documentation part",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--documentation-part-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-documentation-parts",
      description: "Gets documentation parts",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of API entities of the to-be-retrieved documentation parts",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-query",
          description:
            "The name of API entities of the to-be-retrieved documentation parts",
          args: {
            name: "string",
          },
        },
        {
          name: "--path",
          description:
            "The path of API entities of the to-be-retrieved documentation parts",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--location-status",
          description:
            "The status of the API documentation parts to retrieve. Valid values are DOCUMENTED for retrieving DocumentationPart resources with content and UNDOCUMENTED for DocumentationPart resources without content",
          args: {
            name: "string",
          },
        },
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
      name: "get-documentation-version",
      description: "Gets a documentation version",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--documentation-version",
          description:
            "The version identifier of the to-be-retrieved documentation snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-documentation-versions",
      description: "Gets documentation versions",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-domain-name",
      description:
        "Represents a domain name that is contained in a simpler, more intuitive URL that can be called",
      options: [
        {
          name: "--domain-name",
          description: "The name of the DomainName resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name-id",
          description:
            "The identifier for the domain name resource. Supported only for private custom domain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-domain-name-access-associations",
      description:
        "Represents a collection on DomainNameAccessAssociations resources",
      options: [
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-owner",
          description:
            "The owner of the domain name access association. Use SELF to only list the domain name access associations owned by your own account. Use OTHER_ACCOUNTS to list the domain name access associations with your private custom domain names that are owned by other AWS accounts",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-domain-names",
      description: "Represents a collection of DomainName resources",
      options: [
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-owner",
          description: "The owner of the domain name access association",
          args: {
            name: "string",
          },
        },
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
      name: "get-export",
      description:
        "Exports a deployed version of a RestApi in a specified format",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description: "The name of the Stage that will be exported",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-type",
          description:
            "The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "A key-value map of query string parameters that specify properties of the export, depending on the requested exportType. For exportType oas30 and swagger, any combination of the following parameters are supported: extensions='integrations' or extensions='apigateway' will export the API with x-amazon-apigateway-integration extensions. extensions='authorizers' will export the API with x-amazon-apigateway-authorizer extensions. postman will export the API with Postman extensions, allowing for import to the Postman tool",
          args: {
            name: "map",
          },
        },
        {
          name: "--accepts",
          description:
            "The content-type of the export, for example application/json. Currently application/json and application/yaml are supported for exportType ofoas30 and swagger. This should be specified in the Accept header for direct API requests",
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
      name: "get-gateway-response",
      description:
        "Gets a GatewayResponse of a specified response type on the given RestApi",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-type",
          description: "The response type of the associated GatewayResponse",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-gateway-responses",
      description:
        "Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set. The GatewayResponse collection does not support pagination and the position does not apply here",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The GatewayResponses collection does not support pagination and the limit does not apply here",
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
      name: "get-integration",
      description: "Get the integration settings",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "Specifies a get integration request's resource identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "Specifies a get integration request's HTTP method",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-integration-response",
      description: "Represents a get integration response",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "Specifies a get integration response request's resource identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description:
            "Specifies a get integration response request's HTTP method",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description:
            "Specifies a get integration response request's status code",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-method",
      description: "Describe an existing Method resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The Resource identifier for the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "Specifies the method request's HTTP method type",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-method-response",
      description: "Describes a MethodResponse resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The Resource identifier for the MethodResponse resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "The HTTP verb of the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description: "The status code for the MethodResponse resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-model",
      description: "Describes an existing model defined for a RestApi resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The RestApi identifier under which the Model exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description: "The name of the model as an identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--flatten",
          description:
            "A query parameter of a Boolean value to resolve (true) all external model references and returns a flattened model schema or not (false) The default is false",
        },
        {
          name: "--no-flatten",
          description:
            "A query parameter of a Boolean value to resolve (true) all external model references and returns a flattened model schema or not (false) The default is false",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-model-template",
      description:
        "Generates a sample mapping template that can be used to transform a payload into the structure of a model",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description: "The name of the model for which to generate a template",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-models",
      description: "Describes existing Models defined for a RestApi resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-request-validator",
      description: "Gets a RequestValidator of a given RestApi",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-validator-id",
          description: "The identifier of the RequestValidator to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-request-validators",
      description: "Gets the RequestValidators collection of a given RestApi",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-resource",
      description: "Lists information about a resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The identifier for the Resource resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--embed",
          description:
            'A query parameter to retrieve the specified resources embedded in the returned Resource representation in the response. This embed parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the "methods" string. For example, GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods',
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
      name: "get-resources",
      description: "Lists information about a collection of Resource resources",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--embed",
          description:
            'A query parameter used to retrieve the specified resources embedded in the returned Resources resource in the response. This embed parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the "methods" string. For example, GET /restapis/{restapi_id}/resources?embed=methods',
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
      name: "get-rest-api",
      description: "Lists the RestApi resource in the collection",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-rest-apis",
      description: "Lists the RestApis resources for your collection",
      options: [
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-sdk",
      description: "Generates a client SDK for a RestApi and Stage",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description: "The name of the Stage that the SDK will use",
          args: {
            name: "string",
          },
        },
        {
          name: "--sdk-type",
          description:
            "The language for the generated SDK. Currently java, javascript, android, objectivec (for iOS), swift (for iOS), and ruby are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "A string-to-string key-value map of query parameters sdkType-dependent properties of the SDK. For sdkType of objectivec or swift, a parameter named classPrefix is required. For sdkType of android, parameters named groupId, artifactId, artifactVersion, and invokerPackage are required. For sdkType of java, parameters named serviceName and javaPackageName are required",
          args: {
            name: "map",
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
      name: "get-sdk-type",
      description: "Gets an SDK type",
      options: [
        {
          name: "--id",
          description: "The identifier of the queried SdkType instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-sdk-types",
      description: "Gets SDK types",
      options: [
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-stage",
      description: "Gets information about a Stage resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description:
            "The name of the Stage resource to get information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-stages",
      description: "Gets information about one or more Stage resources",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-id",
          description: "The stages' deployment identifiers",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-tags",
      description: "Gets the Tags collection for a given resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of a resource that can be tagged",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "(Not currently supported) The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "(Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-usage",
      description:
        "Gets the usage data of a usage plan in a specified time interval",
      options: [
        {
          name: "--usage-plan-id",
          description:
            "The Id of the usage plan associated with the usage data",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-id",
          description:
            "The Id of the API key associated with the resultant usage data",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date",
          description: "The starting date (e.g., 2016-01-01) of the usage data",
          args: {
            name: "string",
          },
        },
        {
          name: "--end-date",
          description: "The ending date (e.g., 2016-12-31) of the usage data",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-usage-plan",
      description: "Gets a usage plan of a given plan identifier",
      options: [
        {
          name: "--usage-plan-id",
          description:
            "The identifier of the UsagePlan resource to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-usage-plan-key",
      description: "Gets a usage plan key of a given key identifier",
      options: [
        {
          name: "--usage-plan-id",
          description:
            "The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-id",
          description:
            "The key Id of the to-be-retrieved UsagePlanKey resource representing a plan customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-usage-plan-keys",
      description:
        "Gets all the usage plan keys representing the API keys added to a specified usage plan",
      options: [
        {
          name: "--usage-plan-id",
          description:
            "The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-query",
          description:
            "A query parameter specifying the name of the to-be-returned usage plan keys",
          args: {
            name: "string",
          },
        },
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
      name: "get-usage-plans",
      description: "Gets all the usage plans of the caller's account",
      options: [
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-id",
          description:
            "The identifier of the API key associated with the usage plans",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "get-vpc-link",
      description:
        "Gets a specified VPC link under the caller's account in a region",
      options: [
        {
          name: "--vpc-link-id",
          description:
            "The identifier of the VpcLink. It is used in an Integration to reference this VpcLink",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-vpc-links",
      description:
        "Gets the VpcLinks collection under the caller's account in a selected region",
      options: [
        {
          name: "--position",
          description:
            "The current pagination position in the paged result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of returned results per page. The default value is 25 and the maximum value is 500",
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
      name: "import-api-keys",
      description:
        "Import API keys from an external source, such as a CSV-formatted file",
      options: [
        {
          name: "--body",
          description:
            "The payload of the POST request to import API keys. For the payload format, see API Key File Format",
          args: {
            name: "blob",
          },
        },
        {
          name: "--format",
          description:
            "A query parameter to specify the input format to imported API keys. Currently, only the csv format is supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--fail-on-warnings",
          description:
            "A query parameter to indicate whether to rollback ApiKey importation (true) or not (false) when error is encountered",
        },
        {
          name: "--no-fail-on-warnings",
          description:
            "A query parameter to indicate whether to rollback ApiKey importation (true) or not (false) when error is encountered",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "import-documentation-parts",
      description: "Imports documentation parts",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "A query parameter to indicate whether to overwrite (overwrite) any existing DocumentationParts definition or to merge (merge) the new definition into the existing one. The default value is merge",
          args: {
            name: "string",
          },
        },
        {
          name: "--fail-on-warnings",
          description:
            "A query parameter to specify whether to rollback the documentation importation (true) or not (false) when a warning is encountered. The default value is false",
        },
        {
          name: "--no-fail-on-warnings",
          description:
            "A query parameter to specify whether to rollback the documentation importation (true) or not (false) when a warning is encountered. The default value is false",
        },
        {
          name: "--body",
          description:
            "Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object",
          args: {
            name: "blob",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "import-rest-api",
      description:
        "A feature of the API Gateway control service for creating a new API from an external API definition file",
      options: [
        {
          name: "--fail-on-warnings",
          description:
            "A query parameter to indicate whether to rollback the API creation (true) or not (false) when a warning is encountered. The default value is false",
        },
        {
          name: "--no-fail-on-warnings",
          description:
            "A query parameter to indicate whether to rollback the API creation (true) or not (false) when a warning is encountered. The default value is false",
        },
        {
          name: "--parameters",
          description:
            "A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.  To exclude DocumentationParts from the import, set parameters as ignore=documentation.  To configure the endpoint type, set parameters as endpointConfigurationTypes=EDGE, endpointConfigurationTypes=REGIONAL, or endpointConfigurationTypes=PRIVATE. The default endpoint type is EDGE.  To handle imported basepath, set parameters as basepath=ignore, basepath=prepend or basepath=split",
          args: {
            name: "map",
          },
        },
        {
          name: "--body",
          description:
            "The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB",
          args: {
            name: "blob",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-gateway-response",
      description:
        "Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-type",
          description: "The response type of the associated GatewayResponse",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description: "The HTTP status code of the GatewayResponse",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-parameters",
          description:
            "Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--response-templates",
          description:
            "Response templates of the GatewayResponse as a string-to-string map of key-value pairs",
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
      name: "put-integration",
      description: "Sets up a method's integration",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "Specifies a put integration request's resource ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "Specifies the HTTP method for the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "Specifies a put integration input's type",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-http-method",
          description: "The HTTP method for the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "Specifies Uniform Resource Identifier (URI) of the integration endpoint. For HTTP or HTTP_PROXY integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification, for either standard integration, where connectionType is not VPC_LINK, or private integration, where connectionType is VPC_LINK. For a private HTTP integration, the URI is not used for routing. For AWS or AWS_PROXY integrations, the URI is of the form arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}. Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated Amazon Web Services service (e.g., s3); and {subdomain} is a designated subdomain supported by certain Amazon Web Services service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API, using an Action={name}&{p1}={v1}&p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an Amazon Web Services service path-based API. The ensuing service_api refers to the path to an Amazon Web Services service resource, including the region of the integrated Amazon Web Services service, if applicable. For example, for integration with the S3 API of GetObject, the uri can be either arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket={bucket}&Key={key} or arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-type",
          description:
            "The type of the network connection to the integration endpoint. The valid value is INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and a network load balancer in a VPC. The default value is INTERNET",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-id",
          description:
            "The ID of the VpcLink used for the integration. Specify this value only if you specify VPC_LINK as the connection type",
          args: {
            name: "string",
          },
        },
        {
          name: "--credentials",
          description:
            "Specifies whether credentials are required for a put integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-parameters",
          description:
            "A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of method.request.{location}.{name}, where location is querystring, path, or header and name must be a valid and unique method request parameter name",
          args: {
            name: "map",
          },
        },
        {
          name: "--request-templates",
          description:
            "Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value",
          args: {
            name: "map",
          },
        },
        {
          name: "--passthrough-behavior",
          description:
            "Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-namespace",
          description:
            "Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the cacheNamespace. You can specify the same cacheNamespace across resources to return the same cached data for requests to different resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-key-parameters",
          description:
            "A list of request parameters whose values API Gateway caches. To be valid values for cacheKeyParameters, these parameters must also be specified for Method requestParameters",
          args: {
            name: "list",
          },
        },
        {
          name: "--content-handling",
          description:
            "Specifies how to handle request payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors: If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the passthroughBehavior is configured to support payload pass-through",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout-in-millis",
          description:
            "Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tls-config",
          description: "Specifies the TLS configuration for an integration",
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
      name: "put-integration-response",
      description: "Represents a put integration",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "Specifies a put integration response request's resource identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description:
            "Specifies a put integration response request's HTTP method",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description:
            "Specifies the status code that is used to map the integration response to an existing MethodResponse",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-pattern",
          description:
            "Specifies the selection pattern of a put integration response",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-parameters",
          description:
            "A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name must be a valid and unique response header name and JSON-expression a valid JSON expression without the $ prefix",
          args: {
            name: "map",
          },
        },
        {
          name: "--response-templates",
          description: "Specifies a put integration response's templates",
          args: {
            name: "map",
          },
        },
        {
          name: "--content-handling",
          description:
            "Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors: If this property is not defined, the response payload will be passed through from the integration response to the method response without modification",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-method",
      description: "Add a method to an existing Resource resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The Resource identifier for the new Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "Specifies the method request's HTTP method type",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorization-type",
          description:
            "The method's authorization type. Valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, CUSTOM for using a custom authorizer, or COGNITO_USER_POOLS for using a Cognito user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorizer-id",
          description:
            "Specifies the identifier of an Authorizer to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-key-required",
          description: "Specifies whether the method required a valid ApiKey",
        },
        {
          name: "--no-api-key-required",
          description: "Specifies whether the method required a valid ApiKey",
        },
        {
          name: "--operation-name",
          description:
            "A human-friendly operation identifier for the method. For example, you can assign the operationName of ListPets for the GET /pets method in the PetStore example",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-parameters",
          description:
            "A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of method.request.{location}.{name}, where location is querystring, path, or header and name is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (true) or optional (false). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or body-mapping templates",
          args: {
            name: "map",
          },
        },
        {
          name: "--request-models",
          description:
            "Specifies the Model resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a Model name as the value",
          args: {
            name: "map",
          },
        },
        {
          name: "--request-validator-id",
          description:
            "The identifier of a RequestValidator for validating the method request",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorization-scopes",
          description:
            "A list of authorization scopes configured on the method. The scopes are used with a COGNITO_USER_POOLS authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes",
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
      name: "put-method-response",
      description: "Adds a MethodResponse to an existing Method resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The Resource identifier for the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "The HTTP verb of the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description: "The method response's status code",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-parameters",
          description:
            "A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in integration.response.header.{name}, a static value enclosed within a pair of single quotes (e.g., 'application/json'), or a JSON expression from the back-end response payload in the form of integration.response.body.{JSON-expression}, where JSON-expression is a valid JSON expression without the $ prefix.)",
          args: {
            name: "map",
          },
        },
        {
          name: "--response-models",
          description:
            "Specifies the Model resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a Model name as the value",
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
      name: "put-rest-api",
      description:
        "A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            'The mode query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default, the update mode is "merge"',
          args: {
            name: "string",
          },
        },
        {
          name: "--fail-on-warnings",
          description:
            "A query parameter to indicate whether to rollback the API update (true) or not (false) when a warning is encountered. The default value is false",
        },
        {
          name: "--no-fail-on-warnings",
          description:
            "A query parameter to indicate whether to rollback the API update (true) or not (false) when a warning is encountered. The default value is false",
        },
        {
          name: "--parameters",
          description:
            "Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set ignore=documentation as a parameters value, as in the AWS CLI command of aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'",
          args: {
            name: "map",
          },
        },
        {
          name: "--body",
          description:
            "The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB",
          args: {
            name: "blob",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "reject-domain-name-access-association",
      description:
        "Rejects a domain name access association with a private custom domain name. To reject a domain name access association with an access association source in another AWS account, use this operation. To remove a domain name access association with an access association source in your own account, use the DeleteDomainNameAccessAssociation operation",
      options: [
        {
          name: "--domain-name-access-association-arn",
          description: "The ARN of the domain name access association resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name-arn",
          description: "The ARN of the domain name",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Adds or updates a tag on a given resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of a resource that can be tagged",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
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
      name: "test-invoke-authorizer",
      description:
        "Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorizer-id",
          description:
            "Specifies a test invoke authorizer request's Authorizer ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--headers",
          description:
            "A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified",
          args: {
            name: "map",
          },
        },
        {
          name: "--multi-value-headers",
          description:
            "The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified",
          args: {
            name: "map",
          },
        },
        {
          name: "--path-with-query-string",
          description:
            "The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description:
            "The simulated request body of an incoming invocation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-variables",
          description:
            "A key-value map of stage variables to simulate an invocation on a deployed Stage",
          args: {
            name: "map",
          },
        },
        {
          name: "--additional-context",
          description: "A key-value map of additional context variables",
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
      name: "test-invoke-method",
      description:
        "Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "Specifies a test invoke method request's resource ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "Specifies a test invoke method request's HTTP method",
          args: {
            name: "string",
          },
        },
        {
          name: "--path-with-query-string",
          description:
            "The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description:
            "The simulated request body of an incoming invocation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--headers",
          description:
            "A key-value map of headers to simulate an incoming invocation request",
          args: {
            name: "map",
          },
        },
        {
          name: "--multi-value-headers",
          description:
            "The headers as a map from string to list of values to simulate an incoming invocation request",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-certificate-id",
          description:
            "A ClientCertificate identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-variables",
          description:
            "A key-value map of stage variables to simulate an invocation on a deployed Stage",
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
      description: "Removes a tag from a given resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of a resource that can be tagged",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The Tag keys to delete",
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
      name: "update-account",
      description: "Changes information about the current Account resource",
      options: [
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-api-key",
      description: "Changes information about an ApiKey resource",
      options: [
        {
          name: "--api-key",
          description: "The identifier of the ApiKey resource to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-authorizer",
      description: "Updates an existing Authorizer resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorizer-id",
          description: "The identifier of the Authorizer resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-base-path-mapping",
      description: "Changes information about the BasePathMapping resource",
      options: [
        {
          name: "--domain-name",
          description:
            "The domain name of the BasePathMapping resource to change",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name-id",
          description:
            "The identifier for the domain name resource. Supported only for private custom domain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-path",
          description:
            "The base path of the BasePathMapping resource to change. To specify an empty base path, set this parameter to '(none)'",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-client-certificate",
      description: "Changes information about an ClientCertificate resource",
      options: [
        {
          name: "--client-certificate-id",
          description:
            "The identifier of the ClientCertificate resource to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-deployment",
      description: "Changes information about a Deployment resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-id",
          description:
            "The replacement identifier for the Deployment resource to change information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-documentation-part",
      description: "Updates a documentation part",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--documentation-part-id",
          description: "The identifier of the to-be-updated documentation part",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-documentation-version",
      description: "Updates a documentation version",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--documentation-version",
          description:
            "The version identifier of the to-be-updated documentation version",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-domain-name",
      description: "Changes information about the DomainName resource",
      options: [
        {
          name: "--domain-name",
          description: "The name of the DomainName resource to be changed",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name-id",
          description:
            "The identifier for the domain name resource. Supported only for private custom domain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-gateway-response",
      description:
        "Updates a GatewayResponse of a specified response type on the given RestApi",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-type",
          description: "The response type of the associated GatewayResponse",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-integration",
      description: "Represents an update integration",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "Represents an update integration request's resource identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "Represents an update integration request's HTTP method",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-integration-response",
      description: "Represents an update integration response",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "Specifies an update integration response request's resource identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description:
            "Specifies an update integration response request's HTTP method",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description:
            "Specifies an update integration response request's status code",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-method",
      description: "Updates an existing Method resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The Resource identifier for the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "The HTTP verb of the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-method-response",
      description: "Updates an existing MethodResponse resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The Resource identifier for the MethodResponse resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "The HTTP verb of the Method resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description: "The status code for the MethodResponse resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-model",
      description:
        "Changes information about a model. The maximum size of the model is 400 KB",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description: "The name of the model to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-request-validator",
      description: "Updates a RequestValidator of a given RestApi",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-validator-id",
          description: "The identifier of RequestValidator to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-resource",
      description: "Changes information about a Resource resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The identifier of the Resource resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-rest-api",
      description: "Changes information about the specified API",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-stage",
      description: "Changes information about a Stage resource",
      options: [
        {
          name: "--rest-api-id",
          description: "The string identifier of the associated RestApi",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-name",
          description:
            "The name of the Stage resource to change information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-usage",
      description:
        "Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key",
      options: [
        {
          name: "--usage-plan-id",
          description:
            "The Id of the usage plan associated with the usage data",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-id",
          description:
            "The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-usage-plan",
      description: "Updates a usage plan of a given plan Id",
      options: [
        {
          name: "--usage-plan-id",
          description: "The Id of the to-be-updated usage plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
      name: "update-vpc-link",
      description: "Updates an existing VpcLink of a specified identifier",
      options: [
        {
          name: "--vpc-link-id",
          description:
            "The identifier of the VpcLink. It is used in an Integration to reference this VpcLink",
          args: {
            name: "string",
          },
        },
        {
          name: "--patch-operations",
          description:
            "For more information about supported patch operations, see Patch Operations",
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
