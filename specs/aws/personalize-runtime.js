var completionSpec = {
    name: "personalize-runtime",
    description: "",
    subcommands: [
        {
            name: "get-personalized-ranking",
            description: "Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.  The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.",
            options: [
                {
                    name: "--campaign-arn",
                    description: "The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--input-list",
                    description: "A list of items (by itemId) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. The maximum is 500.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--user-id",
                    description: "The user for which you want the campaign to provide a personalized ranking.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--context",
                    description: "The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--filter-arn",
                    description: "The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see Filtering Recommendations.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filter-values",
                    description: "The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.  For filter expressions that use an INCLUDE element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an EXCLUDE element to exclude items, you can omit the filter-values.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations. For more information, see Filtering Recommendations.",
                    args: {
                        name: "map",
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
            name: "get-recommendations",
            description: "Returns a list of recommended items. The required input depends on the recipe type used to create the solution backing the campaign, as follows:   RELATED_ITEMS - itemId required, userId not used   USER_PERSONALIZATION - itemId optional, userId required    Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.",
            options: [
                {
                    name: "--campaign-arn",
                    description: "The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--item-id",
                    description: "The item ID to provide recommendations for. Required for RELATED_ITEMS recipe type.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--user-id",
                    description: "The user ID to provide recommendations for. Required for USER_PERSONALIZATION recipe type.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--num-results",
                    description: "The number of results to return. The default is 25. The maximum is 500.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--context",
                    description: "The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--filter-arn",
                    description: "The ARN of the filter to apply to the returned recommendations. For more information, see Filtering Recommendations. When using this parameter, be sure the filter resource is ACTIVE.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filter-values",
                    description: "The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.  For filter expressions that use an INCLUDE element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an EXCLUDE element to exclude items, you can omit the filter-values.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations. For more information, see Filtering Recommendations.",
                    args: {
                        name: "map",
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

