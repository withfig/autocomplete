var completionSpec = {
    name: "appsync",
    description: "AWS AppSync provides API actions for creating and interacting with data sources using GraphQL from your application.",
    subcommands: [
        {
            name: "create-api-cache",
            description: "Creates a cache for the GraphQL API.",
            options: [
                {
                    name: "--api-id",
                    description: "The GraphQL API Id.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--ttl",
                    description: "TTL in seconds for cache entries. Valid values are between 1 and 3600 seconds.",
                    args: {
                        name: "long",
                    },
                },
                {
                    name: "--transit-encryption-enabled",
                    description: "Transit encryption flag when connecting to cache. This setting cannot be updated after creation.",
                },
                {
                    name: "--no-transit-encryption-enabled",
                    description: "Transit encryption flag when connecting to cache. This setting cannot be updated after creation.",
                },
                {
                    name: "--at-rest-encryption-enabled",
                    description: "At rest encryption flag for cache. This setting cannot be updated after creation.",
                },
                {
                    name: "--no-at-rest-encryption-enabled",
                    description: "At rest encryption flag for cache. This setting cannot be updated after creation.",
                },
                {
                    name: "--api-caching-behavior",
                    description: "Caching behavior.    FULL_REQUEST_CACHING: All requests are fully cached.    PER_RESOLVER_CACHING: Individual resolvers that you specify are cached.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type",
                    description: "The cache instance type. Valid values are     SMALL     MEDIUM     LARGE     XLARGE     LARGE_2X     LARGE_4X     LARGE_8X (not available in all regions)    LARGE_12X    Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used. The following legacy instance types are available, but their use is discouraged:    T2_SMALL: A t2.small instance type.    T2_MEDIUM: A t2.medium instance type.    R4_LARGE: A r4.large instance type.    R4_XLARGE: A r4.xlarge instance type.    R4_2XLARGE: A r4.2xlarge instance type.    R4_4XLARGE: A r4.4xlarge instance type.    R4_8XLARGE: A r4.8xlarge instance type.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-api-key",
            description: "Creates a unique key that you can distribute to clients who are executing your API.",
            options: [
                {
                    name: "--api-id",
                    description: "The ID for your GraphQL API.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--description",
                    description: "A description of the purpose of the API key.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--expires",
                    description: "The time from creation time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .",
                    args: {
                        name: "long",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-data-source",
            description: "Creates a DataSource object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID for the GraphQL API for the DataSource.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--name",
                    description: "A user-supplied name for the DataSource.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--description",
                    description: "A description of the DataSource.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type",
                    description: "The type of the DataSource.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--service-role-arn",
                    description: "The AWS IAM service role ARN for the data source. The system assumes this role when accessing the data source.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--dynamodb-config",
                    description: "Amazon DynamoDB settings.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--lambda-config",
                    description: "AWS Lambda settings.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--elasticsearch-config",
                    description: "Amazon Elasticsearch Service settings.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--http-config",
                    description: "HTTP endpoint settings.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--relational-database-config",
                    description: "Relational database settings.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-function",
            description: "Creates a Function object. A function is a reusable entity. Multiple functions can be used to compose the resolver logic.",
            options: [
                {
                    name: "--api-id",
                    description: "The GraphQL API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--name",
                    description: "The Function name. The function name does not have to be unique.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--description",
                    description: "The Function description.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--data-source-name",
                    description: "The Function DataSource name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--request-mapping-template",
                    description: "The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--response-mapping-template",
                    description: "The Function response mapping template.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--function-version",
                    description: "The version of the request mapping template. Currently the supported value is 2018-05-29.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--sync-config",
                    description: "Describes a Sync configuration for a resolver. Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-graphql-api",
            description: "Creates a GraphqlApi object.",
            options: [
                {
                    name: "--name",
                    description: "A user-supplied name for the GraphqlApi.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--log-config",
                    description: "The Amazon CloudWatch Logs configuration.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--authentication-type",
                    description: "The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--user-pool-config",
                    description: "The Amazon Cognito user pool configuration.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--open-id-connect-config",
                    description: "The OpenID Connect configuration.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--tags",
                    description: "A TagMap object.",
                    args: {
                        name: "map",
                    },
                },
                {
                    name: "--additional-authentication-providers",
                    description: "A list of additional authentication providers for the GraphqlApi API.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--xray-enabled",
                    description: "A flag indicating whether to enable X-Ray tracing for the GraphqlApi.",
                },
                {
                    name: "--no-xray-enabled",
                    description: "A flag indicating whether to enable X-Ray tracing for the GraphqlApi.",
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-resolver",
            description: "Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.",
            options: [
                {
                    name: "--api-id",
                    description: "The ID for the GraphQL API for which the resolver is being created.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type-name",
                    description: "The name of the Type.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--field-name",
                    description: "The name of the field to attach the resolver to.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--data-source-name",
                    description: "The name of the data source for which the resolver is being created.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--request-mapping-template",
                    description: "The mapping template to be used for requests. A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL). VTL request mapping templates are optional when using a Lambda data source. For all other data sources, VTL request and response mapping templates are required.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--response-mapping-template",
                    description: "The mapping template to be used for responses from the data source.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--kind",
                    description: "The resolver type.    UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.    PIPELINE: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of Function in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--pipeline-config",
                    description: "The PipelineConfig.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--sync-config",
                    description: "The SyncConfig for a resolver attached to a versioned datasource.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--caching-config",
                    description: "The caching configuration for the resolver.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-type",
            description: "Creates a Type object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--definition",
                    description: "The type definition, in GraphQL Schema Definition Language (SDL) format. For more information, see the GraphQL SDL documentation.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--format",
                    description: "The type format: SDL or JSON.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-api-cache",
            description: "Deletes an ApiCache object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-api-key",
            description: "Deletes an API key.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--id",
                    description: "The ID for the API key.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-data-source",
            description: "Deletes a DataSource object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--name",
                    description: "The name of the data source.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-function",
            description: "Deletes a Function.",
            options: [
                {
                    name: "--api-id",
                    description: "The GraphQL API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--function-id",
                    description: "The Function ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-graphql-api",
            description: "Deletes a GraphqlApi object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-resolver",
            description: "Deletes a Resolver object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type-name",
                    description: "The name of the resolver type.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--field-name",
                    description: "The resolver field name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-type",
            description: "Deletes a Type object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type-name",
                    description: "The type name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "flush-api-cache",
            description: "Flushes an ApiCache object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-api-cache",
            description: "Retrieves an ApiCache object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-data-source",
            description: "Retrieves a DataSource object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--name",
                    description: "The name of the data source.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-function",
            description: "Get a Function.",
            options: [
                {
                    name: "--api-id",
                    description: "The GraphQL API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--function-id",
                    description: "The Function ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-graphql-api",
            description: "Retrieves a GraphqlApi object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID for the GraphQL API.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-introspection-schema",
            description: "Retrieves the introspection schema for a GraphQL API.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--format",
                    description: "The schema format: SDL or JSON.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--include-directives",
                    description: "A flag that specifies whether the schema introspection should contain directives.",
                },
                {
                    name: "--no-include-directives",
                    description: "A flag that specifies whether the schema introspection should contain directives.",
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
            name: "get-resolver",
            description: "Retrieves a Resolver object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type-name",
                    description: "The resolver type name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--field-name",
                    description: "The resolver field name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-schema-creation-status",
            description: "Retrieves the current status of a schema creation operation.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-type",
            description: "Retrieves a Type object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type-name",
                    description: "The type name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--format",
                    description: "The type format: SDL or JSON.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-api-keys",
            description: "Lists the API keys for a given API.  API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results you want the request to return.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-data-sources",
            description: "Lists the data sources for a given API.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results you want the request to return.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-functions",
            description: "List multiple functions.",
            options: [
                {
                    name: "--api-id",
                    description: "The GraphQL API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results you want the request to return.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-graphql-apis",
            description: "Lists your GraphQL APIs.",
            options: [
                {
                    name: "--next-token",
                    description: "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results you want the request to return.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-resolvers",
            description: "Lists the resolvers for a given API and type.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type-name",
                    description: "The type name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results you want the request to return.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-resolvers-by-function",
            description: "List the resolvers that are associated with a specific function.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--function-id",
                    description: "The Function ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results you want the request to return.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-tags-for-resource",
            description: "Lists the tags for a resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The GraphqlApi ARN.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-types",
            description: "Lists the types for a given API.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--format",
                    description: "The type format: SDL or JSON.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results you want the request to return.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "start-schema-creation",
            description: "Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--definition",
                    description: "The schema definition, in GraphQL schema language format.",
                    args: {
                        name: "blob",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "tag-resource",
            description: "Tags a resource with user-supplied tags.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The GraphqlApi ARN.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tags",
                    description: "A TagMap object.",
                    args: {
                        name: "map",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "untag-resource",
            description: "Untags a resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The GraphqlApi ARN.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tag-keys",
                    description: "A list of TagKey objects.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "update-api-cache",
            description: "Updates the cache for the GraphQL API.",
            options: [
                {
                    name: "--api-id",
                    description: "The GraphQL API Id.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--ttl",
                    description: "TTL in seconds for cache entries. Valid values are between 1 and 3600 seconds.",
                    args: {
                        name: "long",
                    },
                },
                {
                    name: "--api-caching-behavior",
                    description: "Caching behavior.    FULL_REQUEST_CACHING: All requests are fully cached.    PER_RESOLVER_CACHING: Individual resolvers that you specify are cached.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type",
                    description: "The cache instance type. Valid values are     SMALL     MEDIUM     LARGE     XLARGE     LARGE_2X     LARGE_4X     LARGE_8X (not available in all regions)    LARGE_12X    Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used. The following legacy instance types are available, but their use is discouraged:    T2_SMALL: A t2.small instance type.    T2_MEDIUM: A t2.medium instance type.    R4_LARGE: A r4.large instance type.    R4_XLARGE: A r4.xlarge instance type.    R4_2XLARGE: A r4.2xlarge instance type.    R4_4XLARGE: A r4.4xlarge instance type.    R4_8XLARGE: A r4.8xlarge instance type.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "update-api-key",
            description: "Updates an API key. The key can be updated while it is not deleted.",
            options: [
                {
                    name: "--api-id",
                    description: "The ID for the GraphQL API.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--id",
                    description: "The API key ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--description",
                    description: "A description of the purpose of the API key.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--expires",
                    description: "The time from update time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .",
                    args: {
                        name: "long",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "update-data-source",
            description: "Updates a DataSource object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--name",
                    description: "The new name for the data source.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--description",
                    description: "The new description for the data source.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type",
                    description: "The new data source type.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--service-role-arn",
                    description: "The new service role ARN for the data source.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--dynamodb-config",
                    description: "The new Amazon DynamoDB configuration.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--lambda-config",
                    description: "The new AWS Lambda configuration.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--elasticsearch-config",
                    description: "The new Elasticsearch Service configuration.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--http-config",
                    description: "The new HTTP endpoint configuration.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--relational-database-config",
                    description: "The new relational database configuration.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "update-function",
            description: "Updates a Function object.",
            options: [
                {
                    name: "--api-id",
                    description: "The GraphQL API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--name",
                    description: "The Function name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--description",
                    description: "The Function description.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--function-id",
                    description: "The function ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--data-source-name",
                    description: "The Function DataSource name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--request-mapping-template",
                    description: "The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--response-mapping-template",
                    description: "The Function request mapping template.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--function-version",
                    description: "The version of the request mapping template. Currently the supported value is 2018-05-29.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--sync-config",
                    description: "Describes a Sync configuration for a resolver. Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "update-graphql-api",
            description: "Updates a GraphqlApi object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--name",
                    description: "The new name for the GraphqlApi object.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--log-config",
                    description: "The Amazon CloudWatch Logs configuration for the GraphqlApi object.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--authentication-type",
                    description: "The new authentication type for the GraphqlApi object.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--user-pool-config",
                    description: "The new Amazon Cognito user pool configuration for the GraphqlApi object.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--open-id-connect-config",
                    description: "The OpenID Connect configuration for the GraphqlApi object.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--additional-authentication-providers",
                    description: "A list of additional authentication providers for the GraphqlApi API.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--xray-enabled",
                    description: "A flag indicating whether to enable X-Ray tracing for the GraphqlApi.",
                },
                {
                    name: "--no-xray-enabled",
                    description: "A flag indicating whether to enable X-Ray tracing for the GraphqlApi.",
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "update-resolver",
            description: "Updates a Resolver object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type-name",
                    description: "The new type name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--field-name",
                    description: "The new field name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--data-source-name",
                    description: "The new data source name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--request-mapping-template",
                    description: "The new request mapping template. A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL). VTL request mapping templates are optional when using a Lambda data source. For all other data sources, VTL request and response mapping templates are required.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--response-mapping-template",
                    description: "The new response mapping template.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--kind",
                    description: "The resolver type.    UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.    PIPELINE: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of Function in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--pipeline-config",
                    description: "The PipelineConfig.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--sync-config",
                    description: "The SyncConfig for a resolver attached to a versioned datasource.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--caching-config",
                    description: "The caching configuration for the resolver.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "update-type",
            description: "Updates a Type object.",
            options: [
                {
                    name: "--api-id",
                    description: "The API ID.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--type-name",
                    description: "The new type name.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--definition",
                    description: "The new definition.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--format",
                    description: "The new type format: SDL or JSON.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
    ],
};

