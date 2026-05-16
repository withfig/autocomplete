const completionSpec: Fig.Spec = {
  name: "geo-places",
  description:
    "The Places API enables powerful location search and geocoding capabilities for your applications, offering global coverage with rich, detailed information. Key features include:    Forward and reverse geocoding for addresses and coordinates   Comprehensive place searches with detailed information, including:   Business names and addresses   Contact information   Hours of operation   POI (Points of Interest) categories   Food types for restaurants   Chain affiliation for relevant businesses     Global data coverage with a wide range of POI categories   Regular data updates to ensure accuracy and relevance",
  subcommands: [
    {
      name: "autocomplete",
      description:
        "The autocomplete operation speeds up and increases the accuracy of entering addresses by providing a list of address candidates matching a partially entered address. Results are sorted from most to least matching. Filtering and biasing can be used to increase the relevance of the results if additional search context is known",
      options: [
        {
          name: "--query-text",
          description:
            "The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bias-position",
          description:
            "The position in longitude and latitude that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in [lng, lat] and in the WSG84 format.  The fields BiasPosition, FilterBoundingBox, and FilterCircle are mutually exclusive",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must posses in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--postal-code-mode",
          description:
            "The PostalCodeMode affects how postal code results are returned. If a postal code spans multiple localities and this value is empty, partial district or locality information may be returned under a single postal code result entry. If it's populated with the value cityLookup, all cities in that postal code are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the results will be stored. Defaults to SingleUse, if left empty",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
      name: "geocode",
      description:
        "The Geocode action allows you to obtain coordinates, addresses, and other information about places",
      options: [
        {
          name: "--query-text",
          description:
            "The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-components",
          description:
            "A structured free text query allows you to search for places by the name or text representation of specific properties of the place",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bias-position",
          description:
            "The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in [lng, lat] and in the WSG84 format.  The fields BiasPosition, FilterBoundingBox, and FilterCircle are mutually exclusive",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must posses in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone, that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the results will be stored. Defaults to SingleUse, if left empty",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
      name: "get-place",
      description:
        "Finds a place by its unique ID. A PlaceId is returned by other place operations",
      options: [
        {
          name: "--place-id",
          description:
            "The PlaceId of the place you wish to receive the information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters such as time zone that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the results will be stored. Defaults to SingleUse, if left empty",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
      name: "reverse-geocode",
      description:
        "The ReverseGeocode operation allows you to retrieve addresses and place information from coordinates",
      options: [
        {
          name: "--query-position",
          description:
            "The position, in [lng, lat] for which you are querying nearby resultsfor. Results closer to the position will be ranked higher then results further away from the position",
          args: {
            name: "list",
          },
        },
        {
          name: "--query-radius",
          description:
            "The maximum distance in meters from the QueryPosition from which a result will be returned",
          args: {
            name: "long",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must posses in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the results will be stored. Defaults to SingleUse, if left empty",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
      name: "search-nearby",
      description: "Search nearby a specified location",
      options: [
        {
          name: "--query-position",
          description:
            "The position, in [lng, lat] for which you are querying nearby resultsfor. Results closer to the position will be ranked higher then results further away from the position",
          args: {
            name: "list",
          },
        },
        {
          name: "--query-radius",
          description:
            "The maximum distance in meters from the QueryPosition from which a result will be returned",
          args: {
            name: "long",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must posses in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone, that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the results will be stored. Defaults to SingleUse, if left empty",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
      name: "search-text",
      description:
        "Use the SearchText operation to search for geocode and place information. You can then complete a follow-up query suggested from the Suggest API via a query id",
      options: [
        {
          name: "--query-text",
          description:
            "The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description: "The query Id",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bias-position",
          description:
            "The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in [lng, lat] and in the WSG84 format.  The fields BiasPosition, FilterBoundingBox, and FilterCircle are mutually exclusive",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must posses in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone, that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the results will be stored. Defaults to SingleUse, if left empty",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
      name: "suggest",
      description:
        "The Suggest operation finds addresses or place candidates based on incomplete or misspelled queries. You then select the best query to submit based on the returned results",
      options: [
        {
          name: "--query-text",
          description:
            "The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-query-refinements",
          description:
            "Maximum number of query terms to be returned for use with a search text query",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bias-position",
          description:
            "The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in [lng, lat] and in the WSG84 format.  The fields BiasPosition, FilterBoundingBox, and FilterCircle are mutually exclusive",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must posses in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone, that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the results will be stored. Defaults to SingleUse, if left empty",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
  ],
};
export default completionSpec;
