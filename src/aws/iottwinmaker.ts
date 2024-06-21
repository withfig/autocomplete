const completionSpec: Fig.Spec = {
  name: "iottwinmaker",
  description:
    "IoT TwinMaker is a service with which you can build operational digital twins of physical systems. IoT TwinMaker overlays measurements and analysis from real-world sensors, cameras, and enterprise applications so you can create data visualizations to monitor your physical factory, building, or industrial plant. You can use this real-world data to monitor operations and diagnose and repair errors",
  subcommands: [
    {
      name: "batch-put-property-values",
      description: "Sets values for multiple time series properties",
      options: [
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace that contains the properties to set",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "An object that maps strings to the property value entries to set. Each string in the mapping must be unique to this object",
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
      name: "cancel-metadata-transfer-job",
      description: "Cancels the metadata transfer job",
      options: [
        {
          name: "--metadata-transfer-job-id",
          description: "The metadata transfer job Id",
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
      name: "create-component-type",
      description: "Creates a component type",
      options: [
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace that contains the component type",
          args: {
            name: "string",
          },
        },
        {
          name: "--is-singleton",
          description:
            "A Boolean value that specifies whether an entity can have more than one component of this type",
        },
        {
          name: "--no-is-singleton",
          description:
            "A Boolean value that specifies whether an entity can have more than one component of this type",
        },
        {
          name: "--component-type-id",
          description: "The ID of the component type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the component type",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-definitions",
          description:
            "An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object",
          args: {
            name: "map",
          },
        },
        {
          name: "--extends-from",
          description: "Specifies the parent component type to extend",
          args: {
            name: "list",
          },
        },
        {
          name: "--functions",
          description:
            "An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description: "Metadata that you can use to manage the component type",
          args: {
            name: "map",
          },
        },
        {
          name: "--property-groups",
          args: {
            name: "map",
          },
        },
        {
          name: "--component-type-name",
          description: "A friendly name for the component type",
          args: {
            name: "string",
          },
        },
        {
          name: "--composite-component-types",
          description:
            "This is an object that maps strings to compositeComponentTypes of the componentType. CompositeComponentType is referenced by componentTypeId",
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
      name: "create-entity",
      description: "Creates an entity",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace that contains the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description: "The ID of the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-name",
          description: "The name of the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--components",
          description:
            "An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object",
          args: {
            name: "map",
          },
        },
        {
          name: "--composite-components",
          description:
            "This is an object that maps strings to compositeComponent updates in the request. Each key of the map represents the componentPath of the compositeComponent",
          args: {
            name: "map",
          },
        },
        {
          name: "--parent-entity-id",
          description: "The ID of the entity's parent entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Metadata that you can use to manage the entity",
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
      name: "create-metadata-transfer-job",
      description: "Creates a new metadata transfer job",
      options: [
        {
          name: "--metadata-transfer-job-id",
          description: "The metadata transfer job Id",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The metadata transfer job description",
          args: {
            name: "string",
          },
        },
        {
          name: "--sources",
          description: "The metadata transfer job sources",
          args: {
            name: "list",
          },
        },
        {
          name: "--destination",
          description: "The metadata transfer job destination",
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
      name: "create-scene",
      description: "Creates a scene",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace that contains the scene",
          args: {
            name: "string",
          },
        },
        {
          name: "--scene-id",
          description: "The ID of the scene",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-location",
          description:
            "The relative path that specifies the location of the content definition file",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for this scene",
          args: {
            name: "string",
          },
        },
        {
          name: "--capabilities",
          description:
            "A list of capabilities that the scene uses to render itself",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Metadata that you can use to manage the scene",
          args: {
            name: "map",
          },
        },
        {
          name: "--scene-metadata",
          description: "The request metadata",
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
      name: "create-sync-job",
      description: "This action creates a SyncJob",
      options: [
        {
          name: "--workspace-id",
          description: "The workspace ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--sync-source",
          description:
            "The sync source.  Currently the only supported syncSoource is SITEWISE",
          args: {
            name: "string",
          },
        },
        {
          name: "--sync-role",
          description:
            "The SyncJob IAM role. This IAM role is used by the SyncJob to read from the syncSource, and create, update, or delete the corresponding resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The SyncJob tags",
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
      name: "create-workspace",
      description: "Creates a workplace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-location",
          description:
            "The ARN of the S3 bucket where resources associated with the workspace are stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "The ARN of the execution role associated with the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Metadata that you can use to manage the workspace",
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
      name: "delete-component-type",
      description: "Deletes a component type",
      options: [
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace that contains the component type",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-type-id",
          description: "The ID of the component type to delete",
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
      name: "delete-entity",
      description: "Deletes an entity",
      options: [
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace that contains the entity to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description: "The ID of the entity to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--is-recursive",
          description:
            "A Boolean value that specifies whether the operation deletes child entities",
        },
        {
          name: "--no-is-recursive",
          description:
            "A Boolean value that specifies whether the operation deletes child entities",
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
      name: "delete-scene",
      description: "Deletes a scene",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--scene-id",
          description: "The ID of the scene to delete",
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
      name: "delete-sync-job",
      description: "Delete the SyncJob",
      options: [
        {
          name: "--workspace-id",
          description: "The workspace ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--sync-source",
          description:
            "The sync source.  Currently the only supported syncSource is SITEWISE",
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
      name: "delete-workspace",
      description: "Deletes a workspace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace to delete",
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
      name: "execute-query",
      description:
        "Run queries to access information from your knowledge graph of entities within individual workspaces.  The ExecuteQuery action only works with Amazon Web Services Java SDK2. ExecuteQuery will not work with any Amazon Web Services Java SDK version < 2.x",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-statement",
          description: "The query statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return at one time. The default is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
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
      name: "get-component-type",
      description: "Retrieves information about a component type",
      options: [
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace that contains the component type",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-type-id",
          description: "The ID of the component type",
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
      name: "get-entity",
      description: "Retrieves information about an entity",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description: "The ID of the entity",
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
      name: "get-metadata-transfer-job",
      description: "Gets a nmetadata transfer job",
      options: [
        {
          name: "--metadata-transfer-job-id",
          description: "The metadata transfer job Id",
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
      name: "get-pricing-plan",
      description: "Gets the pricing plan",
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
      name: "get-property-value",
      description:
        "Gets the property values for a component, component type, entity, or workspace. You must specify a value for either componentName, componentTypeId, entityId, or workspaceId",
      options: [
        {
          name: "--component-name",
          description:
            "The name of the component whose property values the operation returns",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-path",
          description:
            "This string specifies the path to the composite component, starting from the top-level component",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-type-id",
          description:
            "The ID of the component type whose property values the operation returns",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The ID of the entity whose property values the operation returns",
          args: {
            name: "string",
          },
        },
        {
          name: "--selected-properties",
          description: "The properties whose values the operation returns",
          args: {
            name: "list",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace whose values the operation returns",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return at one time. The default is 25. Valid Range: Minimum value of 1. Maximum value of 250",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-group-name",
          description: "The property group name",
          args: {
            name: "string",
          },
        },
        {
          name: "--tabular-conditions",
          description: "The tabular conditions",
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
      name: "get-property-value-history",
      description:
        "Retrieves information about the history of a time series property value for a component, component type, entity, or workspace. You must specify a value for workspaceId. For entity-specific queries, specify values for componentName and entityId. For cross-entity quries, specify a value for componentTypeId",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description: "The ID of the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-name",
          description: "The name of the component",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-path",
          description:
            "This string specifies the path to the composite component, starting from the top-level component",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-type-id",
          description: "The ID of the component type",
          args: {
            name: "string",
          },
        },
        {
          name: "--selected-properties",
          description:
            "A list of properties whose value histories the request retrieves",
          args: {
            name: "list",
          },
        },
        {
          name: "--property-filters",
          description:
            "A list of objects that filter the property value history request",
          args: {
            name: "list",
          },
        },
        {
          name: "--start-date-time",
          description:
            "The date and time of the earliest property value to return",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date-time",
          description:
            "The date and time of the latest property value to return",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--interpolation",
          description:
            "An object that specifies the interpolation type and the interval over which to interpolate data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return at one time. The default is 25. Valid Range: Minimum value of 1. Maximum value of 250",
          args: {
            name: "integer",
          },
        },
        {
          name: "--order-by-time",
          description: "The time direction to use in the result order",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The ISO8601 DateTime of the earliest property value to return. For more information about the ISO8601 DateTime format, see the data type PropertyValue",
          args: {
            name: "string",
          },
        },
        {
          name: "--end-time",
          description:
            "The ISO8601 DateTime of the latest property value to return. For more information about the ISO8601 DateTime format, see the data type PropertyValue",
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
      name: "get-scene",
      description: "Retrieves information about a scene",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace that contains the scene",
          args: {
            name: "string",
          },
        },
        {
          name: "--scene-id",
          description: "The ID of the scene",
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
      name: "get-sync-job",
      description: "Gets the SyncJob",
      options: [
        {
          name: "--sync-source",
          description:
            "The sync source.  Currently the only supported syncSource is SITEWISE",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The workspace ID",
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
      name: "get-workspace",
      description: "Retrieves information about a workspace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
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
      name: "list-component-types",
      description: "Lists all component types in a workspace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "A list of objects that filter the request",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return at one time. The default is 25. Valid Range: Minimum value of 1. Maximum value of 250",
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
      name: "list-components",
      description: "This API lists the components of an entity",
      options: [
        {
          name: "--workspace-id",
          description: "The workspace ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The ID for the entity whose metadata (component/properties) is returned by the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-path",
          description:
            "This string specifies the path to the composite component, starting from the top-level component",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned at one time. The default is 25",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
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
      description: "Lists all entities in a workspace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A list of objects that filter the request.  Only one object is accepted as a valid input",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return at one time. The default is 25. Valid Range: Minimum value of 1. Maximum value of 250",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
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
      name: "list-metadata-transfer-jobs",
      description: "Lists the metadata transfer jobs",
      options: [
        {
          name: "--source-type",
          description: "The metadata transfer job's source type",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-type",
          description: "The metadata transfer job's destination type",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "An object that filters metadata transfer jobs",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return at one time",
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
      name: "list-properties",
      description: "This API lists the properties of a component",
      options: [
        {
          name: "--workspace-id",
          description: "The workspace ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-name",
          description:
            "The name of the component whose properties are returned by the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-path",
          description:
            "This string specifies the path to the composite component, starting from the top-level component",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The ID for the entity whose metadata (component/properties) is returned by the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned at one time. The default is 25",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
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
      name: "list-scenes",
      description: "Lists all scenes in a workspace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace that contains the scenes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies the maximum number of results to display",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
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
      name: "list-sync-jobs",
      description: "List all SyncJobs",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace that contains the sync job",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return at one time. The default is 50. Valid Range: Minimum value of 0. Maximum value of 200",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
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
      name: "list-sync-resources",
      description: "Lists the sync resources",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace that contains the sync job",
          args: {
            name: "string",
          },
        },
        {
          name: "--sync-source",
          description:
            "The sync source.  Currently the only supported syncSource is SITEWISE",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A list of objects that filter the request. The following filter combinations are supported:   Filter with state   Filter with ResourceType and ResourceId   Filter with ResourceType and ExternalId",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return at one time. The default is 50. Valid Range: Minimum value of 0. Maximum value of 200",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
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
      description: "Lists all tags associated with a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return at one time. The default is 25. Valid Range: Minimum value of 1. Maximum value of 250",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
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
      name: "list-workspaces",
      description:
        "Retrieves information about workspaces in the current account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return at one time. The default is 25. Valid Range: Minimum value of 1. Maximum value of 250",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The string that specifies the next page of results",
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
      description: "Adds tags to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Metadata to add to this resource",
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
      name: "untag-resource",
      description: "Removes tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag key names to remove from the resource. You don't specify the value. Both the key and its associated value are removed",
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
      name: "update-component-type",
      description: "Updates information in a component type",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--is-singleton",
          description:
            "A Boolean value that specifies whether an entity can have more than one component of this type",
        },
        {
          name: "--no-is-singleton",
          description:
            "A Boolean value that specifies whether an entity can have more than one component of this type",
        },
        {
          name: "--component-type-id",
          description: "The ID of the component type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the component type",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-definitions",
          description:
            "An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object",
          args: {
            name: "map",
          },
        },
        {
          name: "--extends-from",
          description:
            "Specifies the component type that this component type extends",
          args: {
            name: "list",
          },
        },
        {
          name: "--functions",
          description:
            "An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object",
          args: {
            name: "map",
          },
        },
        {
          name: "--property-groups",
          description: "The property groups",
          args: {
            name: "map",
          },
        },
        {
          name: "--component-type-name",
          description: "The component type name",
          args: {
            name: "string",
          },
        },
        {
          name: "--composite-component-types",
          description:
            "This is an object that maps strings to compositeComponentTypes of the componentType. CompositeComponentType is referenced by componentTypeId",
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
      name: "update-entity",
      description: "Updates an entity",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace that contains the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description: "The ID of the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-name",
          description: "The name of the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--component-updates",
          description:
            "An object that maps strings to the component updates in the request. Each string in the mapping must be unique to this object",
          args: {
            name: "map",
          },
        },
        {
          name: "--composite-component-updates",
          description:
            "This is an object that maps strings to compositeComponent updates in the request. Each key of the map represents the componentPath of the compositeComponent",
          args: {
            name: "map",
          },
        },
        {
          name: "--parent-entity-update",
          description:
            "An object that describes the update request for a parent entity",
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
      name: "update-pricing-plan",
      description: "Update the pricing plan",
      options: [
        {
          name: "--pricing-mode",
          description: "The pricing mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--bundle-names",
          description: "The bundle names",
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
      name: "update-scene",
      description: "Updates a scene",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace that contains the scene",
          args: {
            name: "string",
          },
        },
        {
          name: "--scene-id",
          description: "The ID of the scene",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-location",
          description:
            "The relative path that specifies the location of the content definition file",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of this scene",
          args: {
            name: "string",
          },
        },
        {
          name: "--capabilities",
          description: "A list of capabilities that the scene uses to render",
          args: {
            name: "list",
          },
        },
        {
          name: "--scene-metadata",
          description: "The scene metadata",
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
      name: "update-workspace",
      description: "Updates a workspace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "The ARN of the execution role associated with the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-location",
          description:
            "The ARN of the S3 bucket where resources associated with the workspace are stored",
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
