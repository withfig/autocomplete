const completionSpec: Fig.Spec = {
  name: "sagemaker-featurestore-runtime",
  description:
    "Contains all data plane API operations and data types for the Amazon SageMaker Feature Store. Use this API to put, delete, and retrieve (get) features from a feature store. Use the following operations to configure your OnlineStore and OfflineStore features, and to create and manage feature groups:    CreateFeatureGroup     DeleteFeatureGroup     DescribeFeatureGroup     ListFeatureGroups",
  subcommands: [
    {
      name: "batch-get-record",
      description: "Retrieves a batch of Records from a FeatureGroup",
      options: [
        {
          name: "--identifiers",
          description:
            "A list containing the name or Amazon Resource Name (ARN) of the FeatureGroup, the list of names of Features to be retrieved, and the corresponding RecordIdentifier values as strings",
          args: {
            name: "list",
          },
        },
        {
          name: "--expiration-time-response",
          description:
            "Parameter to request ExpiresAt in response. If Enabled, BatchGetRecord will return the value of ExpiresAt, if it is not null. If Disabled and null, BatchGetRecord will return null",
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
      name: "delete-record",
      description:
        "Deletes a Record from a FeatureGroup in the OnlineStore. Feature Store supports both SoftDelete and HardDelete. For SoftDelete (default), feature columns are set to null and the record is no longer retrievable by GetRecord or BatchGetRecord. For HardDelete, the complete Record is removed from the OnlineStore. In both cases, Feature Store appends the deleted record marker to the OfflineStore. The deleted record marker is a record with the same RecordIdentifer as the original, but with is_deleted value set to True, EventTime set to the delete input EventTime, and other feature values set to null. Note that the EventTime specified in DeleteRecord should be set later than the EventTime of the existing record in the OnlineStore for that RecordIdentifer. If it is not, the deletion does not occur:   For SoftDelete, the existing (not deleted) record remains in the OnlineStore, though the delete record marker is still written to the OfflineStore.    HardDelete returns EventTime: 400 ValidationException to indicate that the delete operation failed. No delete record marker is written to the OfflineStore.   When a record is deleted from the OnlineStore, the deleted record marker is appended to the OfflineStore. If you have the Iceberg table format enabled for your OfflineStore, you can remove all history of a record from the OfflineStore using Amazon Athena or Apache Spark. For information on how to hard delete a record from the OfflineStore with the Iceberg table format enabled, see Delete records from the offline store",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group to delete the record from",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-identifier-value-as-string",
          description:
            "The value for the RecordIdentifier that uniquely identifies the record, in string format",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-time",
          description:
            "Timestamp indicating when the deletion event occurred. EventTime can be used to query data at a certain point in time",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-stores",
          description:
            "A list of stores from which you're deleting the record. By default, Feature Store deletes the record from all of the stores that you're using for the FeatureGroup",
          args: {
            name: "list",
          },
        },
        {
          name: "--deletion-mode",
          description:
            "The name of the deletion mode for deleting the record. By default, the deletion mode is set to SoftDelete",
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
      name: "get-record",
      description:
        "Use for OnlineStore serving from a FeatureStore. Only the latest records stored in the OnlineStore can be retrieved. If no Record with RecordIdentifierValue is found, then an empty result is returned",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group from which you want to retrieve a record",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-identifier-value-as-string",
          description:
            "The value that corresponds to RecordIdentifier type and uniquely identifies the record in the FeatureGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-names",
          description:
            "List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned",
          args: {
            name: "list",
          },
        },
        {
          name: "--expiration-time-response",
          description:
            "Parameter to request ExpiresAt in response. If Enabled, GetRecord will return the value of ExpiresAt, if it is not null. If Disabled and null, GetRecord will return null",
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
      name: "put-record",
      description:
        "The PutRecord API is used to ingest a list of Records into your feature group.  If a new record\u2019s EventTime is greater, the new record is written to both the OnlineStore and OfflineStore. Otherwise, the record is a historic record and it is written only to the OfflineStore.  You can specify the ingestion to be applied to the OnlineStore, OfflineStore, or both by using the TargetStores request parameter.  You can set the ingested record to expire at a given time to live (TTL) duration after the record\u2019s event time, ExpiresAt = EventTime + TtlDuration, by specifying the TtlDuration parameter. A record level TtlDuration is set when specifying the TtlDuration parameter using the PutRecord API call. If the input TtlDuration is null or unspecified, TtlDuration is set to the default feature group level TtlDuration. A record level TtlDuration supersedes the group level TtlDuration",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group that you want to insert the record into",
          args: {
            name: "string",
          },
        },
        {
          name: "--record",
          description:
            "List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:   Use GetRecord to retrieve the latest record.   Update the record returned from GetRecord.    Use PutRecord to update feature values",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-stores",
          description:
            "A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the FeatureGroup",
          args: {
            name: "list",
          },
        },
        {
          name: "--ttl-duration",
          description:
            "Time to live duration, where the record is hard deleted after the expiration time is reached; ExpiresAt = EventTime + TtlDuration. For information on HardDelete, see the DeleteRecord API in the Amazon SageMaker API Reference guide",
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
  ],
};
export default completionSpec;
