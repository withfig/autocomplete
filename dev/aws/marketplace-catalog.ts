const completionSpec: Fig.Spec = {
  name: "marketplace-catalog",
  description:
    "Catalog API actions allow you to manage your entities through list, describe, and update capabilities. An entity can be a product or an offer on AWS Marketplace.  You can automate your entity update process by integrating the AWS Marketplace Catalog API with your AWS Marketplace product build or deployment pipelines. You can also create your own applications on top of the Catalog API to manage your products on AWS Marketplace",
  subcommands: [
    {
      name: "cancel-change-set",
      description:
        "Used to cancel an open change request. Must be sent before the status of the request changes to APPLYING, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls",
      options: [
        {
          name: "--catalog",
          description:
            "Required. The catalog related to the request. Fixed value: AWSMarketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-set-id",
          description:
            "Required. The unique identifier of the StartChangeSet request that you want to cancel",
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
      name: "describe-change-set",
      description: "Provides information about a given change set",
      options: [
        {
          name: "--catalog",
          description:
            "Required. The catalog related to the request. Fixed value: AWSMarketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-set-id",
          description:
            "Required. The unique identifier for the StartChangeSet request that you want to describe the details for",
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
      name: "describe-entity",
      description: "Returns the metadata and content of the entity",
      options: [
        {
          name: "--catalog",
          description:
            "Required. The catalog related to the request. Fixed value: AWSMarketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description: "Required. The unique ID of the entity to describe",
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
      name: "list-change-sets",
      description:
        "Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of entityId, ChangeSetName, and status. If you provide more than one filter, the API operation applies a logical AND between the filters. You can describe a change during the 60-day request history retention period for API calls",
      options: [
        {
          name: "--catalog",
          description:
            "The catalog related to the request. Fixed value: AWSMarketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-list",
          description: "An array of filter objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort",
          description:
            "An object that contains two attributes, SortBy and SortOrder",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token value retrieved from a previous call to access the next page of results",
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
      name: "list-entities",
      description: "Provides the list of entities of a given type",
      options: [
        {
          name: "--catalog",
          description:
            "The catalog related to the request. Fixed value: AWSMarketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description: "The type of entities to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-list",
          description:
            "An array of filter objects. Each filter object contains two attributes, filterName and filterValues",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort",
          description:
            "An object that contains two attributes, SortBy and SortOrder",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "The value of the next token, if it exists. Null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20",
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
      name: "start-change-set",
      description:
        "This operation allows you to request changes for your entities. Within a single ChangeSet, you cannot start the same change type against the same entity multiple times. Additionally, when a ChangeSet is running, all the entities targeted by the different changes are locked until the ChangeSet has completed (either succeeded, cancelled, or failed). If you try to start a ChangeSet containing a change against an entity that is already locked, you will receive a ResourceInUseException. For example, you cannot start the ChangeSet described in the example below because it contains two changes to execute the same change type (AddRevisions) against the same entity (entity-id@1)",
      options: [
        {
          name: "--catalog",
          description:
            "The catalog related to the request. Fixed value: AWSMarketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-set",
          description: "Array of change object",
          args: {
            name: "list",
          },
        },
        {
          name: "--change-set-name",
          description:
            "Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique token to identify the request to ensure idempotency",
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
