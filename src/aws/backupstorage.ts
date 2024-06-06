const completionSpec: Fig.Spec = {
  name: "backupstorage",
  description: "The frontend service for Cryo Storage",
  subcommands: [
    {
      name: "delete-object",
      description: "Delete Object from the incremental base Backup",
      options: [
        {
          name: "--backup-job-id",
          description: "Backup job Id for the in-progress backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-name",
          description: "The name of the Object",
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
      name: "get-chunk",
      description: "Gets the specified object's chunk",
      options: [
        {
          name: "--storage-job-id",
          description: "Storage job id",
          args: {
            name: "string",
          },
        },
        {
          name: "--chunk-token",
          description: "Chunk token",
          args: {
            name: "string",
          },
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
      name: "get-object-metadata",
      description: "Get metadata associated with an Object",
      options: [
        {
          name: "--storage-job-id",
          description: "Backup job id for the in-progress backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-token",
          description: "Object token",
          args: {
            name: "string",
          },
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
      name: "list-chunks",
      description: "List chunks in a given Object",
      options: [
        {
          name: "--storage-job-id",
          description: "Storage job id",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-token",
          description: "Object token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of chunks",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Pagination token",
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
      name: "list-objects",
      description: "List all Objects in a given Backup",
      options: [
        {
          name: "--storage-job-id",
          description: "Storage job id",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-object-name",
          description:
            "Optional, specifies the starting Object name to list from. Ignored if NextToken is not NULL",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-object-prefix",
          description:
            "Optional, specifies the starting Object prefix to list from. Ignored if NextToken is not NULL",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum objects count",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-before",
          description: "(Optional) Created before filter",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-after",
          description: "(Optional) Created after filter",
          args: {
            name: "timestamp",
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
      name: "notify-object-complete",
      description: "Complete upload",
      options: [
        {
          name: "--backup-job-id",
          description: "Backup job Id for the in-progress backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-id",
          description: "Upload Id for the in-progress upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-checksum",
          description: "Object checksum",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-checksum-algorithm",
          description: "Checksum algorithm",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-string",
          description:
            "Optional metadata associated with an Object. Maximum string length is 256 bytes",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-blob",
          description:
            "Optional metadata associated with an Object. Maximum length is 4MB",
          args: {
            name: "blob",
          },
        },
        {
          name: "--metadata-blob-length",
          description: "The size of MetadataBlob",
          args: {
            name: "long",
          },
        },
        {
          name: "--metadata-blob-checksum",
          description: "Checksum of MetadataBlob",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-blob-checksum-algorithm",
          description: "Checksum algorithm",
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
      name: "put-chunk",
      description: "Upload chunk",
      options: [
        {
          name: "--backup-job-id",
          description: "Backup job Id for the in-progress backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-id",
          description: "Upload Id for the in-progress upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--chunk-index",
          description:
            "Describes this chunk's position relative to the other chunks",
          args: {
            name: "long",
          },
        },
        {
          name: "--data",
          description: "Data to be uploaded",
          args: {
            name: "blob",
          },
        },
        {
          name: "--length",
          description: "Data length",
          args: {
            name: "long",
          },
        },
        {
          name: "--checksum",
          description: "Data checksum",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description: "Checksum algorithm",
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
      name: "put-object",
      description:
        "Upload object that can store object metadata String and data blob in single API call using inline chunk field",
      options: [
        {
          name: "--backup-job-id",
          description: "Backup job Id for the in-progress backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-name",
          description: "The name of the Object to be uploaded",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-string",
          description:
            "Store user defined metadata like backup checksum, disk ids, restore metadata etc",
          args: {
            name: "string",
          },
        },
        {
          name: "--inline-chunk",
          description: "Inline chunk data to be uploaded",
          args: {
            name: "blob",
          },
        },
        {
          name: "--inline-chunk-length",
          description: "Length of the inline chunk data",
          args: {
            name: "long",
          },
        },
        {
          name: "--inline-chunk-checksum",
          description: "Inline chunk checksum",
          args: {
            name: "string",
          },
        },
        {
          name: "--inline-chunk-checksum-algorithm",
          description: "Inline chunk checksum algorithm",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-checksum",
          description: "Object checksum",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-checksum-algorithm",
          description: "Object checksum algorithm",
          args: {
            name: "string",
          },
        },
        {
          name: "--throw-on-duplicate",
          description: "Throw an exception if Object name is already exist",
        },
        {
          name: "--no-throw-on-duplicate",
          description: "Throw an exception if Object name is already exist",
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
      name: "start-object",
      description: "Start upload containing one or many chunks",
      options: [
        {
          name: "--backup-job-id",
          description: "Backup job Id for the in-progress backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-name",
          description: "Name for the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--throw-on-duplicate",
          description: "Throw an exception if Object name is already exist",
        },
        {
          name: "--no-throw-on-duplicate",
          description: "Throw an exception if Object name is already exist",
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
