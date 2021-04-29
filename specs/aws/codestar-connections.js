var completionSpec = {
    name: "codestar-connections",
    description: "AWS CodeStar Connections This AWS CodeStar Connections API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Connections API. You can use the connections API to work with connections and installations.  Connections are configurations that you use to connect AWS resources to external code repositories. Each connection is a resource that can be given to services such as CodePipeline to connect to a third-party repository such as Bitbucket. For example, you can add the connection in CodePipeline so that it triggers your pipeline when a code change is made to your third-party code repository. Each connection is named and associated with a unique ARN that is used to reference the connection. When you create a connection, the console initiates a third-party connection handshake. Installations are the apps that are used to conduct this handshake. For example, the installation for the Bitbucket provider type is the Bitbucket app. When you create a connection, you can choose an existing installation or create one. When you want to create a connection to an installed provider type such as GitHub Enterprise Server, you create a host for your connections. You can work with connections by calling:    CreateConnection, which creates a uniquely named connection that can be referenced by services such as CodePipeline.    DeleteConnection, which deletes the specified connection.    GetConnection, which returns information about the connection, including the connection status.    ListConnections, which lists the connections associated with your account.   You can work with hosts by calling:    CreateHost, which creates a host that represents the infrastructure where your provider is installed.    DeleteHost, which deletes the specified host.    GetHost, which returns information about the host, including the setup status.    ListHosts, which lists the hosts associated with your account.   You can work with tags in AWS CodeStar Connections by calling the following:    ListTagsForResource, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeStar Connections.    TagResource, which adds or updates tags for a resource in AWS CodeStar Connections.    UntagResource, which removes tags for a resource in AWS CodeStar Connections.   For information about how to use AWS CodeStar Connections, see the Developer Tools User Guide.",
    subcommands: [
        {
            name: "create-connection",
            description: "Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.",
            options: [
                {
                    name: "--provider-type",
                    description: "The name of the external provider where your third-party code repository is configured.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--connection-name",
                    description: "The name of the connection to be created. The name must be unique in the calling AWS account.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tags",
                    description: "The key-value pair to use when tagging the resource.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--host-arn",
                    description: "The Amazon Resource Name (ARN) of the host associated with the connection to be created.",
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
            name: "create-host",
            description: "Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.  A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.",
            options: [
                {
                    name: "--name",
                    description: "The name of the host to be created. The name must be unique in the calling AWS account.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--provider-type",
                    description: "The name of the installed provider to be associated with your connection. The host resource represents the infrastructure where your provider type is installed. The valid provider type is GitHub Enterprise Server.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--provider-endpoint",
                    description: "The endpoint of the infrastructure to be represented by the host after it is created.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--vpc-configuration",
                    description: "The VPC configuration to be provisioned for the host. A VPC must be configured and the infrastructure to be represented by the host must already be connected to the VPC.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--tags",
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
            name: "delete-connection",
            description: "The connection to be deleted.",
            options: [
                {
                    name: "--connection-arn",
                    description: "The Amazon Resource Name (ARN) of the connection to be deleted.  The ARN is never reused if the connection is deleted.",
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
            name: "delete-host",
            description: "The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.  A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.",
            options: [
                {
                    name: "--host-arn",
                    description: "The Amazon Resource Name (ARN) of the host to be deleted.",
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
            name: "get-connection",
            description: "Returns the connection ARN and details such as status, owner, and provider type.",
            options: [
                {
                    name: "--connection-arn",
                    description: "The Amazon Resource Name (ARN) of a connection.",
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
            name: "get-host",
            description: "Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.",
            options: [
                {
                    name: "--host-arn",
                    description: "The Amazon Resource Name (ARN) of the requested host.",
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
            name: "list-connections",
            description: "Lists the connections associated with your account.",
            options: [
                {
                    name: "--provider-type-filter",
                    description: "Filters the list of connections to those associated with a specified provider, such as Bitbucket.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--host-arn-filter",
                    description: "Filters the list of connections to those associated with a specified host.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token that was returned from the previous ListConnections call, which can be used to return the next set of connections in the list.",
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
            name: "list-hosts",
            description: "Lists the hosts associated with your account.",
            options: [
                {
                    name: "--max-results",
                    description: "The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token that was returned from the previous ListHosts call, which can be used to return the next set of hosts in the list.",
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
            name: "list-tags-for-resource",
            description: "Gets the set of key-value pairs (metadata) that are used to manage the resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.",
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
            name: "tag-resource",
            description: "Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tags",
                    description: "The tags you want to modify or add to the resource.",
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
            name: "untag-resource",
            description: "Removes tags from an AWS resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource to remove tags from.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tag-keys",
                    description: "The list of keys for the tags to be removed from the resource.",
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
            name: "update-host",
            description: "Updates a specified host with the provided configurations.",
            options: [
                {
                    name: "--host-arn",
                    description: "The Amazon Resource Name (ARN) of the host to be updated.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--provider-endpoint",
                    description: "The URL or endpoint of the host to be updated.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--vpc-configuration",
                    description: "The VPC configuration of the host to be updated. A VPC must be configured and the infrastructure to be represented by the host must already be connected to the VPC.",
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
    ],
};

