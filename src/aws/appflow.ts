const completionSpec: Fig.Spec = {
  name: "appflow",
  description:
    "Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors.  Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift.  Use the following links to get started on the Amazon AppFlow API:    Actions: An alphabetical list of all Amazon AppFlow API operations.    Data types: An alphabetical list of all Amazon AppFlow data types.    Common parameters: Parameters that all Query operations can use.    Common errors: Client and server errors that all operations can return.   If you're new to Amazon AppFlow, we recommend that you review the Amazon AppFlow User Guide. Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as auth-code and redirecturi) with the connector-specific ConnectorProfileProperties when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the  Authorize Apps with OAuth  documentation",
  subcommands: [
    {
      name: "cancel-flow-executions",
      description:
        "Cancels active runs for a flow. You can cancel all of the active runs for a flow, or you can cancel specific runs by providing their IDs. You can cancel a flow run only when the run is in progress. You can't cancel a run that has already completed or failed. You also can't cancel a run that's scheduled to occur but hasn't started yet. To prevent a scheduled run, you can deactivate the flow with the StopFlow action. You cannot resume a run after you cancel it. When you send your request, the status for each run becomes CancelStarted. When the cancellation completes, the status becomes Canceled.  When you cancel a run, you still incur charges for any data that the run already processed before the cancellation. If the run had already written some data to the flow destination, then that data remains in the destination. If you configured the flow to use a batch API (such as the Salesforce Bulk API 2.0), then the run will finish reading or writing its entire batch of data after the cancellation. For these operations, the data processing charges for Amazon AppFlow apply. For the pricing information, see Amazon AppFlow pricing",
      options: [
        {
          name: "--flow-name",
          description:
            "The name of a flow with active runs that you want to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-ids",
          description:
            "The ID of each active run to cancel. These runs must belong to the flow you specify in your request. If you omit this parameter, your request ends all active runs that belong to the flow",
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
      name: "create-connector-profile",
      description:
        "Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector",
      options: [
        {
          name: "--connector-profile-name",
          description:
            "The name of the connector profile. The name is unique for each ConnectorProfile in your Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-arn",
          description:
            "The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-type",
          description:
            "The type of connector, such as Salesforce, Amplitude, and so on",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-label",
          description:
            "The label of the connector. The label is unique for each ConnectorRegistration in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-mode",
          description:
            "Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-profile-config",
          description:
            "Defines the connector-specific configuration and credentials",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "The clientToken parameter is an idempotency token. It ensures that your CreateConnectorProfile request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same clientToken parameter value. If you omit a clientToken value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases. If you specify input parameters that differ from your first request, an error occurs. If you use a different value for clientToken, Amazon AppFlow considers it a new call to CreateConnectorProfile. The token is active for 8 hours",
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
      name: "create-flow",
      description:
        "Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once",
      options: [
        {
          name: "--flow-name",
          description:
            "The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the flow you want to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-arn",
          description:
            "The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--trigger-config",
          description:
            "The trigger settings that determine how and when the flow runs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-flow-config",
          description:
            "The configuration that controls how Amazon AppFlow retrieves data from the source connector",
          args: {
            name: "structure",
          },
        },
        {
          name: "--destination-flow-config-list",
          description:
            "The configuration that controls how Amazon AppFlow places data in the destination connector",
          args: {
            name: "list",
          },
        },
        {
          name: "--tasks",
          description:
            "A list of tasks that Amazon AppFlow performs while transferring the data in the flow run",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for your flow",
          args: {
            name: "map",
          },
        },
        {
          name: "--metadata-catalog-config",
          description:
            "Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "The clientToken parameter is an idempotency token. It ensures that your CreateFlow request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same clientToken parameter value. If you omit a clientToken value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases. If you specify input parameters that differ from your first request, an error occurs. If you use a different value for clientToken, Amazon AppFlow considers it a new call to CreateFlow. The token is active for 8 hours",
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
      name: "delete-connector-profile",
      description: "Enables you to delete an existing connector profile",
      options: [
        {
          name: "--connector-profile-name",
          description:
            "The name of the connector profile. The name is unique for each ConnectorProfile in your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-delete",
          description:
            "Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows",
        },
        {
          name: "--no-force-delete",
          description:
            "Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows",
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
      name: "delete-flow",
      description:
        "Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time",
      options: [
        {
          name: "--flow-name",
          description:
            "The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-delete",
          description:
            "Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use",
        },
        {
          name: "--no-force-delete",
          description:
            "Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use",
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
      name: "describe-connector",
      description:
        "Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors",
      options: [
        {
          name: "--connector-type",
          description:
            "The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose CUSTOMCONNECTOR for Lambda based custom connectors",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-label",
          description:
            "The label of the connector. The label is unique for each ConnectorRegistration in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/",
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
      name: "describe-connector-entity",
      description:
        "Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity",
      options: [
        {
          name: "--connector-entity-name",
          description: "The entity name for that connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-type",
          description:
            "The type of connector application, such as Salesforce, Amplitude, and so on",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-profile-name",
          description:
            "The name of the connector profile. The name is unique for each ConnectorProfile in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-version",
          description: "The version of the API that's used by the connector",
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
      name: "describe-connector-profiles",
      description:
        "Returns a list of connector-profile details matching the provided connector-profile names and connector-types. Both input lists are optional, and you can use them to filter the result.  If no names or connector-types are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list",
      options: [
        {
          name: "--connector-profile-names",
          description:
            "The name of the connector profile. The name is unique for each ConnectorProfile in the Amazon Web Services account",
          args: {
            name: "list",
          },
        },
        {
          name: "--connector-type",
          description:
            "The type of connector, such as Salesforce, Amplitude, and so on",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-label",
          description:
            "The name of the connector. The name is unique for each ConnectorRegistration in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of items that should be returned in the result set. The default for maxResults is 20 (for all paginated API operations)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token for the next page of data",
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
      name: "describe-connectors",
      description:
        "Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a nextToken object, which can be be passed in to the next call to the DescribeConnectors API operation to retrieve the next page",
      options: [
        {
          name: "--connector-types",
          description:
            "The type of connector, such as Salesforce, Amplitude, and so on",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items that should be returned in the result set. The default is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token for the next page of data",
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
      name: "describe-flow",
      description: "Provides a description of the specified flow",
      options: [
        {
          name: "--flow-name",
          description:
            "The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only",
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
      name: "describe-flow-execution-records",
      description: "Fetches the execution history of the flow",
      options: [
        {
          name: "--flow-name",
          description:
            "The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of items that should be returned in the result set. The default for maxResults is 20 (for all paginated API operations)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token for the next page of data",
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
      name: "list-connector-entities",
      description:
        "Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for Account and Opportunity entities, or query ServiceNow for the Incident entity",
      options: [
        {
          name: "--connector-profile-name",
          description:
            "The name of the connector profile. The name is unique for each ConnectorProfile in the Amazon Web Services account, and is used to query the downstream connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-type",
          description:
            "The type of connector, such as Salesforce, Amplitude, and so on",
          args: {
            name: "string",
          },
        },
        {
          name: "--entities-path",
          description:
            "This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the entitiesPath parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-version",
          description: "The version of the API that's used by the connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items that the operation returns in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that was provided by your prior ListConnectorEntities operation if the response was too big for the page size. You specify this token to get the next page of results in paginated response",
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
      name: "list-connectors",
      description:
        "Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors",
      options: [
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of items that should be returned in the result set. The default for maxResults is 20 (for all paginated API operations)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token for the next page of data",
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
      name: "list-flows",
      description: "Lists all of the flows associated with your account",
      options: [
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of items that should be returned in the result set",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token for next page of data",
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
      name: "list-tags-for-resource",
      description:
        "Retrieves the tags that are associated with a specified flow",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the specified flow",
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
      name: "register-connector",
      description:
        "Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account",
      options: [
        {
          name: "--connector-label",
          description:
            "The name of the connector. The name is unique for each ConnectorRegistration in your Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description about the connector that's being registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-provisioning-type",
          description:
            "The provisioning type of the connector. Currently the only supported value is LAMBDA",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-provisioning-config",
          description:
            "The provisioning type of the connector. Currently the only supported value is LAMBDA",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "The clientToken parameter is an idempotency token. It ensures that your RegisterConnector request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same clientToken parameter value. If you omit a clientToken value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases. If you specify input parameters that differ from your first request, an error occurs. If you use a different value for clientToken, Amazon AppFlow considers it a new call to RegisterConnector. The token is active for 8 hours",
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
      name: "reset-connector-metadata-cache",
      description:
        "Resets metadata about your connector entities that Amazon AppFlow stored in its cache. Use this action when you want Amazon AppFlow to return the latest information about the data that you have in a source application. Amazon AppFlow returns metadata about your entities when you use the ListConnectorEntities or DescribeConnectorEntities actions. Following these actions, Amazon AppFlow caches the metadata to reduce the number of API requests that it must send to the source application. Amazon AppFlow automatically resets the cache once every hour, but you can use this action when you want to get the latest metadata right away",
      options: [
        {
          name: "--connector-profile-name",
          description:
            "The name of the connector profile that you want to reset cached metadata for. You can omit this parameter if you're resetting the cache for any of the following connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you must include this parameter in your request",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-type",
          description:
            "The type of connector to reset cached metadata for. You must include this parameter in your request if you're resetting the cache for any of the following connectors: Amazon Connect, Amazon EventBridge, Amazon Lookout for Metrics, Amazon S3, or Upsolver. If you're resetting the cache for any other connector, you can omit this parameter from your request",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-entity-name",
          description:
            "Use this parameter if you want to reset cached metadata about the details for an individual entity. If you don't include this parameter in your request, Amazon AppFlow only resets cached metadata about entity names, not entity details",
          args: {
            name: "string",
          },
        },
        {
          name: "--entities-path",
          description:
            "Use this parameter only if you\u2019re resetting the cached metadata about a nested entity. Only some connectors support nested entities. A nested entity is one that has another entity as a parent. To use this parameter, specify the name of the parent entity. To look up the parent-child relationship of entities, you can send a ListConnectorEntities request that omits the entitiesPath parameter. Amazon AppFlow will return a list of top-level entities. For each one, it indicates whether the entity has nested entities. Then, in a subsequent ListConnectorEntities request, you can specify a parent entity name for the entitiesPath parameter. Amazon AppFlow will return a list of the child entities for that parent",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-version",
          description:
            "The API version that you specified in the connector profile that you\u2019re resetting cached metadata for. You must use this parameter only if the connector supports multiple API versions or if the connector type is CustomConnector. To look up how many versions a connector supports, use the DescribeConnectors action. In the response, find the value that Amazon AppFlow returns for the connectorVersion parameter. To look up the connector type, use the DescribeConnectorProfiles action. In the response, find the value that Amazon AppFlow returns for the connectorType parameter. To look up the API version that you specified in a connector profile, use the DescribeConnectorProfiles action",
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
      name: "start-flow",
      description:
        "Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow",
      options: [
        {
          name: "--flow-name",
          description:
            "The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "The clientToken parameter is an idempotency token. It ensures that your StartFlow request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same clientToken parameter value. If you omit a clientToken value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases. If you specify input parameters that differ from your first request, an error occurs for flows that run on a schedule or based on an event. However, the error doesn't occur for flows that run on demand. You set the conditions that initiate your flow for the triggerConfig parameter. If you use a different value for clientToken, Amazon AppFlow considers it a new call to StartFlow. The token is active for 8 hours",
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
      name: "stop-flow",
      description:
        "Deactivates the existing flow. For on-demand flows, this operation returns an unsupportedOperationException error message. For schedule and event-triggered flows, this operation deactivates the flow",
      options: [
        {
          name: "--flow-name",
          description:
            "The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only",
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
      description: "Applies a tag to the specified flow",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the flow that you want to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for your flow",
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
      name: "unregister-connector",
      description:
        "Unregisters the custom connector registered in your account that matches the connector label provided in the request",
      options: [
        {
          name: "--connector-label",
          description:
            "The label of the connector. The label is unique for each ConnectorRegistration in your Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-delete",
          description:
            "Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false",
        },
        {
          name: "--no-force-delete",
          description:
            "Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false",
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
      description: "Removes a tag from the specified flow",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the flow that you want to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The tag keys associated with the tag that you want to remove from your flow",
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
      name: "update-connector-profile",
      description:
        "Updates a given connector profile associated with your account",
      options: [
        {
          name: "--connector-profile-name",
          description:
            "The name of the connector profile and is unique for each ConnectorProfile in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-mode",
          description:
            "Indicates the connection mode and if it is public or private",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-profile-config",
          description:
            "Defines the connector-specific profile configuration and credentials",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "The clientToken parameter is an idempotency token. It ensures that your UpdateConnectorProfile request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same clientToken parameter value. If you omit a clientToken value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases. If you specify input parameters that differ from your first request, an error occurs. If you use a different value for clientToken, Amazon AppFlow considers it a new call to UpdateConnectorProfile. The token is active for 8 hours",
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
      name: "update-connector-registration",
      description:
        "Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:   The latest version of the AWS Lambda function that's assigned to the connector   A new AWS Lambda function that you specify",
      options: [
        {
          name: "--connector-label",
          description:
            "The name of the connector. The name is unique for each connector registration in your AWS account",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description about the update that you're applying to the connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-provisioning-config",
          description:
            "Contains information about the configuration of the connector being registered",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "The clientToken parameter is an idempotency token. It ensures that your UpdateConnectorRegistration request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same clientToken parameter value. If you omit a clientToken value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases. If you specify input parameters that differ from your first request, an error occurs. If you use a different value for clientToken, Amazon AppFlow considers it a new call to UpdateConnectorRegistration. The token is active for 8 hours",
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
      name: "update-flow",
      description: "Updates an existing flow",
      options: [
        {
          name: "--flow-name",
          description:
            "The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--trigger-config",
          description:
            "The trigger settings that determine how and when the flow runs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-flow-config",
          description:
            "Contains information about the configuration of the source connector used in the flow",
          args: {
            name: "structure",
          },
        },
        {
          name: "--destination-flow-config-list",
          description:
            "The configuration that controls how Amazon AppFlow transfers data to the destination connector",
          args: {
            name: "list",
          },
        },
        {
          name: "--tasks",
          description:
            "A list of tasks that Amazon AppFlow performs while transferring the data in the flow run",
          args: {
            name: "list",
          },
        },
        {
          name: "--metadata-catalog-config",
          description:
            "Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "The clientToken parameter is an idempotency token. It ensures that your UpdateFlow request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same clientToken parameter value. If you omit a clientToken value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases. If you specify input parameters that differ from your first request, an error occurs. If you use a different value for clientToken, Amazon AppFlow considers it a new call to UpdateFlow. The token is active for 8 hours",
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
