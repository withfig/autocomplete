const completionSpec: Fig.Spec = {
  name: "osis",
  description:
    "Use the Amazon OpenSearch Ingestion API to create and manage ingestion pipelines. OpenSearch Ingestion is a fully managed data collector that delivers real-time log and trace data to OpenSearch Service domains. For more information, see Getting data into your cluster using OpenSearch Ingestion",
  subcommands: [
    {
      name: "create-pipeline",
      description:
        "Creates an OpenSearch Ingestion pipeline. For more information, see Creating Amazon OpenSearch Ingestion pipelines",
      options: [
        {
          name: "--pipeline-name",
          description:
            "The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the pipelines owned by an account within an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-units",
          description:
            "The minimum pipeline capacity, in Ingestion Compute Units (ICUs)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-units",
          description:
            "The maximum pipeline capacity, in Ingestion Compute Units (ICUs)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pipeline-configuration-body",
          description:
            "The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with \\n",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-publishing-options",
          description: "Key-value pairs to configure log publishing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-options",
          description:
            "Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion creates the pipeline with a public endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--buffer-options",
          description:
            "Key-value pairs to configure persistent buffering for the pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-at-rest-options",
          description:
            "Key-value pairs to configure encryption for data that is written to a persistent buffer",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "List of tags to add to the pipeline upon creation",
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
      name: "delete-pipeline",
      description:
        "Deletes an OpenSearch Ingestion pipeline. For more information, see Deleting Amazon OpenSearch Ingestion pipelines",
      options: [
        {
          name: "--pipeline-name",
          description: "The name of the pipeline to delete",
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
      name: "get-pipeline",
      description:
        "Retrieves information about an OpenSearch Ingestion pipeline",
      options: [
        {
          name: "--pipeline-name",
          description: "The name of the pipeline",
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
      name: "get-pipeline-blueprint",
      description:
        "Retrieves information about a specific blueprint for OpenSearch Ingestion. Blueprints are templates for the configuration needed for a CreatePipeline request. For more information, see Using blueprints to create a pipeline",
      options: [
        {
          name: "--blueprint-name",
          description: "The name of the blueprint to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description: "The format format of the blueprint to retrieve",
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
      name: "get-pipeline-change-progress",
      description:
        "Returns progress information for the current change happening on an OpenSearch Ingestion pipeline. Currently, this operation only returns information when a pipeline is being created. For more information, see Tracking the status of pipeline creation",
      options: [
        {
          name: "--pipeline-name",
          description: "The name of the pipeline",
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
      name: "list-pipeline-blueprints",
      description:
        "Retrieves a list of all available blueprints for Data Prepper. For more information, see Using blueprints to create a pipeline",
      options: [
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
      name: "list-pipelines",
      description:
        "Lists all OpenSearch Ingestion pipelines in the current Amazon Web Services account and Region. For more information, see Viewing Amazon OpenSearch Ingestion pipelines",
      options: [
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListPipelines operation returns a nextToken, you can include the returned nextToken in subsequent ListPipelines operations, which returns results in the next page",
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
        "Lists all resource tags associated with an OpenSearch Ingestion pipeline. For more information, see Tagging Amazon OpenSearch Ingestion pipelines",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the pipeline to retrieve tags for",
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
      name: "start-pipeline",
      description:
        "Starts an OpenSearch Ingestion pipeline. For more information, see Starting an OpenSearch Ingestion pipeline",
      options: [
        {
          name: "--pipeline-name",
          description: "The name of the pipeline to start",
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
      name: "stop-pipeline",
      description:
        "Stops an OpenSearch Ingestion pipeline. For more information, see Stopping an OpenSearch Ingestion pipeline",
      options: [
        {
          name: "--pipeline-name",
          description: "The name of the pipeline to stop",
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
      description:
        "Tags an OpenSearch Ingestion pipeline. For more information, see Tagging Amazon OpenSearch Ingestion pipelines",
      options: [
        {
          name: "--arn",
          description: "The Amazon Resource Name (ARN) of the pipeline to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The list of key-value tags to add to the pipeline",
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
      description:
        "Removes one or more tags from an OpenSearch Ingestion pipeline. For more information, see Tagging Amazon OpenSearch Ingestion pipelines",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the pipeline to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys to remove",
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
      name: "update-pipeline",
      description:
        "Updates an OpenSearch Ingestion pipeline. For more information, see Updating Amazon OpenSearch Ingestion pipelines",
      options: [
        {
          name: "--pipeline-name",
          description: "The name of the pipeline to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-units",
          description:
            "The minimum pipeline capacity, in Ingestion Compute Units (ICUs)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-units",
          description:
            "The maximum pipeline capacity, in Ingestion Compute Units (ICUs)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pipeline-configuration-body",
          description:
            "The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with \\n",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-publishing-options",
          description: "Key-value pairs to configure log publishing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--buffer-options",
          description:
            "Key-value pairs to configure persistent buffering for the pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-at-rest-options",
          description:
            "Key-value pairs to configure encryption for data that is written to a persistent buffer",
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
      name: "validate-pipeline",
      description:
        "Checks whether an OpenSearch Ingestion pipeline configuration is valid prior to creation. For more information, see Creating Amazon OpenSearch Ingestion pipelines",
      options: [
        {
          name: "--pipeline-configuration-body",
          description:
            "The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with \\n",
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
