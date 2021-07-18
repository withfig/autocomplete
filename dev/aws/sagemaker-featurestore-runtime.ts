const completionSpec: Fig.Spec = {
  name: "sagemaker-featurestore-runtime",
  description:
    "Contains all data plane API operations and data types for the Amazon SageMaker Feature Store. Use this API to put, delete, and retrieve (get) features from a feature store. Use the following operations to configure your OnlineStore and OfflineStore features, and to create and manage feature groups:    CreateFeatureGroup     DeleteFeatureGroup     DescribeFeatureGroup     ListFeatureGroups",
  subcommands: [
    {
      name: "delete-record",
      description:
        "Deletes a Record from a FeatureGroup. A new record will show up in the OfflineStore when the DeleteRecord API is called. This record will have a value of True in the is_deleted column.",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name of the feature group to delete the record from.",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-identifier-value-as-string",
          description:
            "The value for the RecordIdentifier that uniquely identifies the record, in string format.",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-time",
          description:
            "Timestamp indicating when the deletion event occurred. EventTime can be used to query data at a certain point in time.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Use for OnlineStore serving from a FeatureStore. Only the latest records stored in the OnlineStore can be retrieved. If no Record with RecordIdentifierValue is found, then an empty result is returned.",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name of the feature group in which you want to put the records.",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-identifier-value-as-string",
          description:
            "The value that corresponds to RecordIdentifier type and uniquely identifies the record in the FeatureGroup.",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-names",
          description:
            "List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Used for data ingestion into the FeatureStore. The PutRecord API writes to both the OnlineStore and OfflineStore. If the record is the latest record for the recordIdentifier, the record is written to both the OnlineStore and OfflineStore. If the record is a historic record, it is written only to the OfflineStore.",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name of the feature group that you want to insert the record into.",
          args: {
            name: "string",
          },
        },
        {
          name: "--record",
          description:
            "List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:   Use GetRecord to retrieve the latest record.   Update the record returned from GetRecord.    Use PutRecord to update feature values.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
