var completionSpec = {
    name: "identitystore",
    description: "",
    subcommands: [
        {
            name: "describe-group",
            description: "Retrieves the group metadata and attributes from GroupId in an identity store.",
            options: [
                {
                    name: "--identity-store-id",
                    description: "The globally unique identifier for the identity store, such as d-1234567890. In this example, d- is a fixed prefix, and 1234567890 is a randomly generated string which contains number and lower case letters. This value is generated at the time that a new identity store is created.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--group-id",
                    description: "The identifier for a group in the identity store.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-user",
            description: "Retrieves the user metadata and attributes from UserId in an identity store.",
            options: [
                {
                    name: "--identity-store-id",
                    description: "The globally unique identifier for the identity store, such as d-1234567890. In this example, d- is a fixed prefix, and 1234567890 is a randomly generated string which contains number and lower case letters. This value is generated at the time that a new identity store is created.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--user-id",
                    description: "The identifier for a user in the identity store.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-groups",
            description: "Lists the attribute name and value of the group that you specified in the search. We only support DisplayName as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including GroupId and group DisplayName in the response.",
            options: [
                {
                    name: "--identity-store-id",
                    description: "The globally unique identifier for the identity store, such as d-1234567890. In this example, d- is a fixed prefix, and 1234567890 is a randomly generated string which contains number and lower case letters. This value is generated at the time that a new identity store is created.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per request, which is used in the ListUsers and ListGroups request to specify how many results to return in one page. The length limit is 50 characters.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The pagination token used for the ListUsers and ListGroups APIs. This value is generated by the identity store service and is returned in the API response if the total results are more than the size of one page, and when this token is used in the API request to search for the next page.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "A list of Filter objects, which is used in the ListUsers and ListGroups request.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-users",
            description: "Lists the attribute name and value of the user that you specified in the search. We only support UserName as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including UserId and UserName in the response.",
            options: [
                {
                    name: "--identity-store-id",
                    description: "The globally unique identifier for the identity store, such as d-1234567890. In this example, d- is a fixed prefix, and 1234567890 is a randomly generated string which contains number and lower case letters. This value is generated at the time that a new identity store is created.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per request, which is used in the ListUsers and ListGroups request to specify how many results to return in one page. The length limit is 50 characters.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The pagination token used for the ListUsers and ListGroups APIs. This value is generated by the identity store service and is returned in the API response if the total results are more than the size of one page, and when this token is used in the API request to search for the next page.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "A list of Filter objects, which is used in the ListUsers and ListGroups request.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
    ],
};

