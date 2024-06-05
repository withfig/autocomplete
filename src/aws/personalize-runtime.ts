const completionSpec: Fig.Spec = {
  name: "personalize-runtime",
  description: null,
  subcommands: [
    {
      name: "get-action-recommendations",
      description:
        "Returns a list of recommended actions in sorted in descending order by prediction score. Use the GetActionRecommendations API if you have a custom campaign that deploys a solution version trained with a PERSONALIZED_ACTIONS recipe.  For more information about PERSONALIZED_ACTIONS recipes, see PERSONALIZED_ACTIONS recipes. For more information about getting action recommendations, see Getting action recommendations",
      options: [
        {
          name: "--campaign-arn",
          description:
            "The Amazon Resource Name (ARN) of the campaign to use for getting action recommendations. This campaign must deploy a solution version trained with a PERSONALIZED_ACTIONS recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The user ID of the user to provide action recommendations for",
          args: {
            name: "string",
          },
        },
        {
          name: "--num-results",
          description:
            "The number of results to return. The default is 5. The maximum is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter-arn",
          description:
            "The ARN of the filter to apply to the returned recommendations. For more information, see Filtering Recommendations. When using this parameter, be sure the filter resource is ACTIVE",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-values",
          description:
            "The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.  For filter expressions that use an INCLUDE element to include actions, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an EXCLUDE element to exclude actions, you can omit the filter-values. In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations. For more information, see Filtering recommendations and user segments",
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
      name: "get-personalized-ranking",
      description:
        "Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.  The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING",
      options: [
        {
          name: "--campaign-arn",
          description:
            "The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-list",
          description:
            "A list of items (by itemId) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. If you are including metadata in recommendations, the maximum is 50. Otherwise, the maximum is 500",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-id",
          description:
            "The user for which you want the campaign to provide a personalized ranking",
          args: {
            name: "string",
          },
        },
        {
          name: "--context",
          description:
            "The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type",
          args: {
            name: "map",
          },
        },
        {
          name: "--filter-arn",
          description:
            "The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see Filtering Recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-values",
          description:
            "The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.  For filter expressions that use an INCLUDE element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an EXCLUDE element to exclude items, you can omit the filter-values.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations. For more information, see Filtering Recommendations",
          args: {
            name: "map",
          },
        },
        {
          name: "--metadata-columns",
          description:
            "If you enabled metadata in recommendations when you created or updated the campaign, specify metadata columns from your Items dataset to include in the personalized ranking. The map key is ITEMS and the value is a list of column names from your Items dataset. The maximum number of columns you can provide is 10.  For information about enabling metadata for a campaign, see Enabling metadata in recommendations for a campaign",
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
      name: "get-recommendations",
      description:
        "Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:   USER_PERSONALIZATION - userId required, itemId not used   RELATED_ITEMS - itemId required, userId not used    Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.   For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see Choosing recommender use cases",
      options: [
        {
          name: "--campaign-arn",
          description:
            "The Amazon Resource Name (ARN) of the campaign to use for getting recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--item-id",
          description:
            "The item ID to provide recommendations for. Required for RELATED_ITEMS recipe type",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The user ID to provide recommendations for. Required for USER_PERSONALIZATION recipe type",
          args: {
            name: "string",
          },
        },
        {
          name: "--num-results",
          description:
            "The number of results to return. The default is 25. If you are including metadata in recommendations, the maximum is 50. Otherwise, the maximum is 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--context",
          description:
            "The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type",
          args: {
            name: "map",
          },
        },
        {
          name: "--filter-arn",
          description:
            "The ARN of the filter to apply to the returned recommendations. For more information, see Filtering Recommendations. When using this parameter, be sure the filter resource is ACTIVE",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-values",
          description:
            "The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.  For filter expressions that use an INCLUDE element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an EXCLUDE element to exclude items, you can omit the filter-values.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations. For more information, see Filtering recommendations and user segments",
          args: {
            name: "map",
          },
        },
        {
          name: "--recommender-arn",
          description:
            "The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you created a Domain dataset group with a recommender for a domain use case",
          args: {
            name: "string",
          },
        },
        {
          name: "--promotions",
          description:
            "The promotions to apply to the recommendation request. A promotion defines additional business rules that apply to a configurable subset of recommended items",
          args: {
            name: "list",
          },
        },
        {
          name: "--metadata-columns",
          description:
            "If you enabled metadata in recommendations when you created or updated the campaign or recommender, specify the metadata columns from your Items dataset to include in item recommendations. The map key is ITEMS and the value is a list of column names from your Items dataset. The maximum number of columns you can provide is 10.  For information about enabling metadata for a campaign, see Enabling metadata in recommendations for a campaign. For information about enabling metadata for a recommender, see Enabling metadata in recommendations for a recommender",
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
  ],
};
export default completionSpec;
