const completionSpec: Fig.Spec = {
  name: "healthlake",
  description:
    "Amazon HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud",
  subcommands: [
    {
      name: "create-fhir-datastore",
      description:
        "Creates a Data Store that can ingest and export FHIR formatted data",
      options: [
        {
          name: "--datastore-name",
          description: "The user generated name for the Data Store",
          args: {
            name: "string",
          },
        },
        {
          name: "--datastore-type-version",
          description:
            "The FHIR version of the Data Store. The only supported version is R4",
          args: {
            name: "string",
          },
        },
        {
          name: "--preload-data-config",
          description:
            "Optional parameter to preload data upon creation of the Data Store. Currently, the only supported preloaded data is synthetic data generated from Synthea",
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
      description: "Deletes a Data Store",
      options: [
        {
          name: "--datastore-id",
          description: "The AWS-generated ID for the Data Store to be deleted",
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
        "Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint",
      options: [
        {
          name: "--datastore-id",
          description:
            "The AWS-generated Data Store id. This is part of the \u2018CreateFHIRDatastore\u2019 output",
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
            "The AWS generated ID for the Data Store from which files are being exported from for an export job",
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
          description: "The AWS-generated ID of the Data Store",
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
        "Lists all FHIR Data Stores that are in the user\u2019s account, regardless of Data Store status",
      options: [
        {
          name: "--filter",
          description:
            "Lists all filters associated with a FHIR Data Store request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "Fetches the next page of Data Stores when results are paginated",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Data Stores returned in a single page of a ListFHIRDatastoresRequest call",
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
            "The AWS generated ID for the Data Store from which files are being exported for an export job",
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
          name: "--datastore-id",
          description: "The AWS-generated Data Store ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) that gives Amazon HealthLake access permission",
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
  ],
};

export default completionSpec;
