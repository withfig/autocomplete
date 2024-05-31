const completionSpec: Fig.Spec = {
  name: "healthlake",
  description:
    "AWS HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud",
  subcommands: [
    {
      name: "create-fhir-datastore",
      description:
        "Creates a data store that can ingest and export FHIR formatted data",
      options: [
        {
          name: "--datastore-name",
          description: "The user generated name for the data store",
          args: {
            name: "string",
          },
        },
        {
          name: "--datastore-type-version",
          description:
            "The FHIR version of the data store. The only supported version is R4",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-configuration",
          description:
            "The server-side encryption key configuration for a customer provided encryption key specified for creating a data store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--preload-data-config",
          description:
            "Optional parameter to preload data upon creation of the data store. Currently, the only supported preloaded data is synthetic data generated from Synthea",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "Optional user provided token used for ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Resource tags that are applied to a data store when it is created",
          args: {
            name: "list",
          },
        },
        {
          name: "--identity-provider-configuration",
          description:
            "The configuration of the identity provider that you want to use for your data store",
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
    {
      name: "delete-fhir-datastore",
      description: "Deletes a data store",
      options: [
        {
          name: "--datastore-id",
          description: "The AWS-generated ID for the data store to be deleted",
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
      name: "describe-fhir-datastore",
      description:
        "Gets the properties associated with the FHIR data store, including the data store ID, data store ARN, data store name, data store status, when the data store was created, data store type version, and the data store's endpoint",
      options: [
        {
          name: "--datastore-id",
          description: "The AWS-generated data store ID",
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
      name: "describe-fhir-export-job",
      description:
        "Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job",
      options: [
        {
          name: "--datastore-id",
          description:
            "The AWS generated ID for the data store from which files are being exported from for an export job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The AWS generated ID for an export job",
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
      name: "describe-fhir-import-job",
      description:
        "Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job",
      options: [
        {
          name: "--datastore-id",
          description: "The AWS-generated ID of the data store",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The AWS-generated job ID",
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
      name: "list-fhir-datastores",
      description:
        "Lists all FHIR data stores that are in the user\u2019s account, regardless of data store status",
      options: [
        {
          name: "--filter",
          description:
            "Lists all filters associated with a FHIR data store request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "Fetches the next page of data stores when results are paginated",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of data stores returned in a single page of a ListFHIRDatastoresRequest call",
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
      name: "list-fhir-export-jobs",
      description:
        "Lists all FHIR export jobs associated with an account and their statuses",
      options: [
        {
          name: "--datastore-id",
          description:
            "This parameter limits the response to the export job with the specified data store ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token used to identify the next page of results to return for a ListFHIRExportJobs query",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "This parameter limits the number of results returned for a ListFHIRExportJobs to a maximum quantity specified by the user",
          args: {
            name: "integer",
          },
        },
        {
          name: "--job-name",
          description:
            "This parameter limits the response to the export job with the specified job name",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-status",
          description:
            "This parameter limits the response to the export jobs with the specified job status",
          args: {
            name: "string",
          },
        },
        {
          name: "--submitted-before",
          description:
            "This parameter limits the response to FHIR export jobs submitted before a user specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--submitted-after",
          description:
            "This parameter limits the response to FHIR export jobs submitted after a user specified date",
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
      name: "list-fhir-import-jobs",
      description:
        "Lists all FHIR import jobs associated with an account and their statuses",
      options: [
        {
          name: "--datastore-id",
          description:
            "This parameter limits the response to the import job with the specified data store ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token used to identify the next page of results to return for a ListFHIRImportJobs query",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "This parameter limits the number of results returned for a ListFHIRImportJobs to a maximum quantity specified by the user",
          args: {
            name: "integer",
          },
        },
        {
          name: "--job-name",
          description:
            "This parameter limits the response to the import job with the specified job name",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-status",
          description:
            "This parameter limits the response to the import job with the specified job status",
          args: {
            name: "string",
          },
        },
        {
          name: "--submitted-before",
          description:
            "This parameter limits the response to FHIR import jobs submitted before a user specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--submitted-after",
          description:
            "This parameter limits the response to FHIR import jobs submitted after a user specified date",
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
      name: "list-tags-for-resource",
      description:
        "Returns a list of all existing tags associated with a data store",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name(ARN) of the data store for which tags are being added",
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
      name: "start-fhir-export-job",
      description: "Begins a FHIR export job",
      options: [
        {
          name: "--job-name",
          description: "The user generated name for an export job",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-data-config",
          description:
            "The output data configuration that was supplied when the export job was created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--datastore-id",
          description:
            "The AWS generated ID for the data store from which files are being exported for an export job",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name used during the initiation of the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "An optional user provided token used for ensuring idempotency",
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
      name: "start-fhir-import-job",
      description: "Begins a FHIR Import job",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the FHIR Import job in the StartFHIRImport job request",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-config",
          description:
            "The input properties of the FHIR Import job in the StartFHIRImport job request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-output-data-config",
          description:
            "The output data configuration that was supplied when the export job was created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--datastore-id",
          description: "The AWS-generated data store ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) that gives AWS HealthLake access permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Optional user provided token used for ensuring idempotency",
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
      description: "Adds a user specified key and value tag to a data store",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name(ARN)that gives AWS HealthLake access to the data store which tags are being added to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The user specified key and value pair tags being added to a data store",
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
      name: "untag-resource",
      description: "Removes tags from a data store",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name(ARN) of the data store for which tags are being removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The keys for the tags to be removed from the HealthLake data store",
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
  ],
};
export default completionSpec;
