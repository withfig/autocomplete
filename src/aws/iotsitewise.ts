const completionSpec: Fig.Spec = {
  name: "iotsitewise",
  description:
    "Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects Industrial Internet of Things (IIoT) devices to the power of the Amazon Web Services Cloud. For more information, see the IoT SiteWise User Guide. For information about IoT SiteWise quotas, see Quotas in the IoT SiteWise User Guide",
  subcommands: [
    {
      name: "associate-assets",
      description:
        "Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see Associating assets in the IoT SiteWise User Guide",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the parent asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--hierarchy-id",
          description:
            "The ID of a hierarchy in the parent asset's model. (This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.) Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see Asset hierarchies in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--child-asset-id",
          description:
            "The ID of the child asset to be associated. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "associate-time-series-to-asset-property",
      description:
        "Associates a time series (data stream) with an asset property",
      options: [
        {
          name: "--alias",
          description: "The alias that identifies the time series",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-id",
          description:
            "The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description:
            "The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "batch-associate-project-assets",
      description:
        "Associates a group (batch) of assets with an IoT SiteWise Monitor project",
      options: [
        {
          name: "--project-id",
          description: "The ID of the project to which to associate the assets",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-ids",
          description: "The IDs of the assets to be associated to the project",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "batch-disassociate-project-assets",
      description:
        "Disassociates a group (batch) of assets from an IoT SiteWise Monitor project",
      options: [
        {
          name: "--project-id",
          description:
            "The ID of the project from which to disassociate the assets",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-ids",
          description:
            "The IDs of the assets to be disassociated from the project",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "batch-get-asset-property-aggregates",
      description:
        "Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see Querying aggregates in the IoT SiteWise User Guide",
      options: [
        {
          name: "--entries",
          description:
            "The list of asset property aggregate entries for the batch get request. You can specify up to 16 entries per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.   The size of the result set is equal to 1 MB.   The number of data points in the result set is equal to the value of maxResults. The maximum value of maxResults is 4000",
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
      name: "batch-get-asset-property-value",
      description:
        "Gets the current value for one or more asset properties. For more information, see Querying current values in the IoT SiteWise User Guide",
      options: [
        {
          name: "--entries",
          description:
            "The list of asset property value entries for the batch get request. You can specify up to 128 entries per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
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
      name: "batch-get-asset-property-value-history",
      description:
        "Gets the historical values for one or more asset properties. For more information, see Querying historical values in the IoT SiteWise User Guide",
      options: [
        {
          name: "--entries",
          description:
            "The list of asset property historical value entries for the batch get request. You can specify up to 16 entries per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.   The size of the result set is equal to 4 MB.   The number of data points in the result set is equal to the value of maxResults. The maximum value of maxResults is 20000",
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
      name: "batch-put-asset-property-value",
      description:
        "Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see Ingesting data using the API in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.    With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a TimestampOutOfRangeException error. For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV {T1, GOOD, V1}, then storing {T1, GOOD, V2} replaces the existing TQV.  IoT SiteWise authorizes access to each BatchPutAssetPropertyValue entry individually. For more information, see BatchPutAssetPropertyValue authorization in the IoT SiteWise User Guide",
      options: [
        {
          name: "--entries",
          description:
            "The list of asset property value entries for the batch put request. You can specify up to 10 entries per request",
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
      name: "create-access-policy",
      description:
        "Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource",
      options: [
        {
          name: "--access-policy-identity",
          description:
            "The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-policy-resource",
          description:
            "The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-policy-permission",
          description:
            "The permission level for this access policy. Note that a project ADMINISTRATOR is also known as a project owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that contain metadata for the access policy. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide",
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
      name: "create-asset",
      description:
        "Creates an asset from an existing asset model. For more information, see Creating assets in the IoT SiteWise User Guide",
      options: [
        {
          name: "--asset-name",
          description: "A friendly name for the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model from which to create the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that contain metadata for the asset. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--asset-description",
          description: "A description for the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-id",
          description:
            "The ID to assign to the asset, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-external-id",
          description:
            "An external ID to assign to the asset. The external ID must be unique within your Amazon Web Services account. For more information, see Using external IDs in the IoT SiteWise User Guide",
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
      name: "create-asset-model",
      description:
        "Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see Defining asset models in the IoT SiteWise User Guide. You can create two types of asset models, ASSET_MODEL or COMPONENT_MODEL.    ASSET_MODEL \u2013 (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL \u2013 A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model",
      options: [
        {
          name: "--asset-model-name",
          description: "A unique name for the asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-type",
          description:
            "The type of asset model.    ASSET_MODEL \u2013 (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL \u2013 A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-id",
          description:
            "The ID to assign to the asset model, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-external-id",
          description:
            "An external ID to assign to the asset model. The external ID must be unique within your Amazon Web Services account. For more information, see Using external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-description",
          description: "A description for the asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-properties",
          description:
            "The property definitions of the asset model. For more information, see Asset properties in the IoT SiteWise User Guide. You can specify up to 200 properties per asset model. For more information, see Quotas in the IoT SiteWise User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--asset-model-hierarchies",
          description:
            "The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see Asset hierarchies in the IoT SiteWise User Guide. You can specify up to 10 hierarchies per asset model. For more information, see Quotas in the IoT SiteWise User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--asset-model-composite-models",
          description:
            "The composite models that are part of this asset model. It groups properties (such as attributes, measurements, transforms, and metrics) and child composite models that model parts of your industrial equipment. Each composite model has a type that defines the properties that the composite model supports. Use composite models to define alarms on this asset model.  When creating custom composite models, you need to use CreateAssetModelCompositeModel. For more information, see Creating custom composite models (Components) in the IoT SiteWise User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that contain metadata for the asset model. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide",
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
      name: "create-asset-model-composite-model",
      description:
        "Creates a custom composite model from specified property and hierarchy definitions. There are two types of custom composite models, inline and component-model-based.  Use component-model-based custom composite models to define standard, reusable components. A component-model-based custom composite model consists of a name, a description, and the ID of the component model it references. A component-model-based custom composite model has no properties of its own; its referenced component model provides its associated properties to any created assets. For more information, see Custom composite models (Components) in the IoT SiteWise User Guide. Use inline custom composite models to organize the properties of an asset model. The properties of inline custom composite models are local to the asset model where they are included and can't be used to create multiple assets. To create a component-model-based model, specify the composedAssetModelId of an existing asset model with assetModelType of COMPONENT_MODEL. To create an inline model, specify the assetModelCompositeModelProperties and don't include an composedAssetModelId",
      options: [
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model this composite model is a part of",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-external-id",
          description:
            "An external ID to assign to the composite model. If the composite model is a derived composite model, or one nested inside a component model, you can only set the external ID using UpdateAssetModelCompositeModel and specifying the derived ID of the model or property from the created model it's a part of",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-asset-model-composite-model-id",
          description:
            "The ID of the parent composite model in this asset model relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-id",
          description:
            "The ID of the composite model. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-description",
          description: "A description for the composite model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-name",
          description: "A unique name for the composite model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-type",
          description:
            "The composite model type. Valid values are AWS/ALARM, CUSTOM, or  AWS/L4E_ANOMALY",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--composed-asset-model-id",
          description:
            "The ID of a component model which is reused to create this composite model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-properties",
          description:
            "The property definitions of the composite model. For more information, see  Inline custom composite models in the IoT SiteWise User Guide. You can specify up to 200 properties per composite model. For more information, see Quotas in the IoT SiteWise User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--if-match",
          description:
            "The expected current entity tag (ETag) for the asset model\u2019s latest or active version (specified using matchForVersionType). The create request is rejected if the tag does not match the latest or active version's current entity tag. See Optimistic locking for asset model writes in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Accepts * to reject the create request if an active version (specified using matchForVersionType as ACTIVE) already exists for the asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--match-for-version-type",
          description:
            "Specifies the asset model version type (LATEST or ACTIVE) used in conjunction with If-Match or If-None-Match headers to determine the target ETag for the create operation",
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
      name: "create-bulk-import-job",
      description:
        "Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see Create a bulk import job (CLI) in the Amazon Simple Storage Service User Guide.  Before you create a bulk import job, you must enable IoT SiteWise warm tier or IoT SiteWise cold tier. For more information about how to configure storage settings, see PutStorageConfiguration. Bulk import is designed to store historical data to IoT SiteWise. It does not trigger computations or notifications on IoT SiteWise warm or cold tier storage",
      options: [
        {
          name: "--job-name",
          description: "The unique name that helps identify the job request",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-role-arn",
          description:
            "The ARN of the IAM role that allows IoT SiteWise to read Amazon S3 data",
          args: {
            name: "string",
          },
        },
        {
          name: "--files",
          description:
            "The files in the specified Amazon S3 bucket that contain your data",
          args: {
            name: "list",
          },
        },
        {
          name: "--error-report-location",
          description:
            "The Amazon S3 destination where errors associated with the job creation request are saved",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-configuration",
          description:
            "Contains the configuration information of a job, such as the file format used to save data in Amazon S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--adaptive-ingestion",
          description:
            "If set to true, ingest new data into IoT SiteWise storage. Measurements with notifications, metrics and transforms are computed. If set to false, historical data is ingested into IoT SiteWise as is",
        },
        {
          name: "--no-adaptive-ingestion",
          description:
            "If set to true, ingest new data into IoT SiteWise storage. Measurements with notifications, metrics and transforms are computed. If set to false, historical data is ingested into IoT SiteWise as is",
        },
        {
          name: "--delete-files-after-import",
          description:
            "If set to true, your data files is deleted from S3, after ingestion into IoT SiteWise storage",
        },
        {
          name: "--no-delete-files-after-import",
          description:
            "If set to true, your data files is deleted from S3, after ingestion into IoT SiteWise storage",
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
      name: "create-dashboard",
      description: "Creates a dashboard in an IoT SiteWise Monitor project",
      options: [
        {
          name: "--project-id",
          description: "The ID of the project in which to create the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-name",
          description: "A friendly name for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-description",
          description: "A description for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-definition",
          description:
            "The dashboard definition specified in a JSON literal.   IoT SiteWise Monitor (Classic) see Create dashboards (CLI)    IoT SiteWise Monitor (AI-aware) see Create dashboards (CLI)    in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that contain metadata for the dashboard. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide",
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
      name: "create-dataset",
      description: "Creates a dataset to connect an external datasource",
      options: [
        {
          name: "--dataset-id",
          description: "The ID of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name",
          description: "The name of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-description",
          description: "A description about the dataset, and its functionality",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-source",
          description: "The data source for the dataset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that contain metadata for the access policy. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide",
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
      name: "create-gateway",
      description:
        "Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see Ingesting data using a gateway in the IoT SiteWise User Guide",
      options: [
        {
          name: "--gateway-name",
          description: "A unique name for the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--gateway-platform",
          description:
            "The gateway's platform. You can only specify one platform in a gateway",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that contain metadata for the gateway. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide",
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
      name: "create-portal",
      description:
        "Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.  Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see Adding or removing portal administrators in the IoT SiteWise User Guide",
      options: [
        {
          name: "--portal-name",
          description: "A friendly name for the portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--portal-description",
          description: "A description for the portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--portal-contact-email",
          description:
            "The Amazon Web Services administrator's contact email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--portal-logo-image-file",
          description:
            "A logo image to display in the portal. Upload a square, high-resolution image. The image is displayed on a dark background",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see Using service roles for IoT SiteWise Monitor in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that contain metadata for the portal. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--portal-auth-mode",
          description:
            "The service to use to authenticate users to the portal. Choose from the following options:    SSO \u2013 The portal uses IAM Identity Center to authenticate users and manage user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center. For more information, see Enabling IAM Identity Center in the IoT SiteWise User Guide. This option is only available in Amazon Web Services Regions other than the China Regions.    IAM \u2013 The portal uses Identity and Access Management to authenticate users and manage user permissions.   You can't change this value after you create a portal. Default: SSO",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-sender-email",
          description:
            "The email address that sends alarm notifications.  If you use the IoT Events managed Lambda function to manage your emails, you must verify the sender email address in Amazon SES",
          args: {
            name: "string",
          },
        },
        {
          name: "--alarms",
          description:
            "Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see Monitoring with alarms in the IoT SiteWise Application Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--portal-type",
          description:
            "Define the type of portal. The value for IoT SiteWise Monitor (Classic) is SITEWISE_PORTAL_V1. The value for IoT SiteWise Monitor (AI-aware) is SITEWISE_PORTAL_V2",
          args: {
            name: "string",
          },
        },
        {
          name: "--portal-type-configuration",
          description:
            "The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is SITEWISE_PORTAL_V1. The value for IoT SiteWise Monitor (AI-aware) is SITEWISE_PORTAL_V2",
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
      name: "create-project",
      description:
        "Creates a project in the specified portal.  Make sure that the project name and description don't contain confidential information",
      options: [
        {
          name: "--portal-id",
          description: "The ID of the portal in which to create the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "A friendly name for the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-description",
          description: "A description for the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that contain metadata for the project. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide",
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
      name: "delete-access-policy",
      description:
        "Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource",
      options: [
        {
          name: "--access-policy-id",
          description: "The ID of the access policy to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "delete-asset",
      description:
        "Deletes an asset. This action can't be undone. For more information, see Deleting assets and models in the IoT SiteWise User Guide.  You can't delete an asset that's associated to another asset. For more information, see DisassociateAssets",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the asset to delete. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "delete-asset-model",
      description:
        "Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide",
      options: [
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model to delete. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match",
          description:
            "The expected current entity tag (ETag) for the asset model\u2019s latest or active version (specified using matchForVersionType). The delete request is rejected if the tag does not match the latest or active version's current entity tag. See Optimistic locking for asset model writes in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Accepts * to reject the delete request if an active version (specified using matchForVersionType as ACTIVE) already exists for the asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--match-for-version-type",
          description:
            "Specifies the asset model version type (LATEST or ACTIVE) used in conjunction with If-Match or If-None-Match headers to determine the target ETag for the delete operation",
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
      name: "delete-asset-model-composite-model",
      description:
        "Deletes a composite model. This action can't be undone. You must delete all assets created from a composite model before you can delete the model. Also, you can't delete a composite model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide",
      options: [
        {
          name: "--asset-model-id",
          description: "The ID of the asset model, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-id",
          description: "The ID of a composite model on this asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match",
          description:
            "The expected current entity tag (ETag) for the asset model\u2019s latest or active version (specified using matchForVersionType). The delete request is rejected if the tag does not match the latest or active version's current entity tag. See Optimistic locking for asset model writes in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Accepts * to reject the delete request if an active version (specified using matchForVersionType as ACTIVE) already exists for the asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--match-for-version-type",
          description:
            "Specifies the asset model version type (LATEST or ACTIVE) used in conjunction with If-Match or If-None-Match headers to determine the target ETag for the delete operation",
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
      name: "delete-dashboard",
      description: "Deletes a dashboard from IoT SiteWise Monitor",
      options: [
        {
          name: "--dashboard-id",
          description: "The ID of the dashboard to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "delete-dataset",
      description: "Deletes a dataset. This cannot be undone",
      options: [
        {
          name: "--dataset-id",
          description: "The ID of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "delete-gateway",
      description:
        "Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system",
      options: [
        {
          name: "--gateway-id",
          description: "The ID of the gateway to delete",
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
      name: "delete-portal",
      description: "Deletes a portal from IoT SiteWise Monitor",
      options: [
        {
          name: "--portal-id",
          description: "The ID of the portal to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "delete-project",
      description: "Deletes a project from IoT SiteWise Monitor",
      options: [
        {
          name: "--project-id",
          description: "The ID of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "delete-time-series",
      description:
        "Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property. To identify a time series, do one of the following:   If the time series isn't associated with an asset property, specify the alias of the time series.   If the time series is associated with an asset property, specify one of the following:    The alias of the time series.   The assetId and propertyId that identifies the asset property",
      options: [
        {
          name: "--alias",
          description: "The alias that identifies the time series",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-id",
          description:
            "The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description:
            "The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "describe-access-policy",
      description:
        "Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project",
      options: [
        {
          name: "--access-policy-id",
          description: "The ID of the access policy",
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
      name: "describe-action",
      description: "Retrieves information about an action",
      options: [
        {
          name: "--action-id",
          description: "The ID of the action",
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
      name: "describe-asset",
      description: "Retrieves information about an asset",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclude-properties",
          description:
            "Whether or not to exclude asset properties from the response",
        },
        {
          name: "--no-exclude-properties",
          description:
            "Whether or not to exclude asset properties from the response",
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
      name: "describe-asset-composite-model",
      description:
        "Retrieves information about an asset composite model (also known as an asset component). An AssetCompositeModel is an instance of an AssetModelCompositeModel. If you want to see information about the model this is based on, call DescribeAssetModelCompositeModel",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-composite-model-id",
          description:
            "The ID of a composite model on this asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
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
      name: "describe-asset-model",
      description: "Retrieves information about an asset model",
      options: [
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclude-properties",
          description:
            "Whether or not to exclude asset model properties from the response",
        },
        {
          name: "--no-exclude-properties",
          description:
            "Whether or not to exclude asset model properties from the response",
        },
        {
          name: "--asset-model-version",
          description:
            "The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is LATEST. See  Asset model versions in the IoT SiteWise User Guide",
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
      name: "describe-asset-model-composite-model",
      description:
        "Retrieves information about an asset model composite model (also known as an asset model component). For more information, see Custom composite models (Components) in the IoT SiteWise User Guide",
      options: [
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-id",
          description:
            "The ID of a composite model on this asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-version",
          description:
            "The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is LATEST. See  Asset model versions in the IoT SiteWise User Guide",
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
      name: "describe-asset-property",
      description:
        "Retrieves information about an asset property.  When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.  This operation doesn't return the value of the asset property. To get the value of an asset property, use GetAssetPropertyValue",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description:
            "The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
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
      name: "describe-bulk-import-job",
      description:
        "Retrieves information about a bulk import job request. For more information, see Describe a bulk import job (CLI) in the Amazon Simple Storage Service User Guide",
      options: [
        {
          name: "--job-id",
          description: "The ID of the job",
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
      name: "describe-dashboard",
      description: "Retrieves information about a dashboard",
      options: [
        {
          name: "--dashboard-id",
          description: "The ID of the dashboard",
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
      name: "describe-dataset",
      description: "Retrieves information about a dataset",
      options: [
        {
          name: "--dataset-id",
          description: "The ID of the dataset",
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
      name: "describe-default-encryption-configuration",
      description:
        "Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see Key management in the IoT SiteWise User Guide",
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
      name: "describe-gateway",
      description: "Retrieves information about a gateway",
      options: [
        {
          name: "--gateway-id",
          description: "The ID of the gateway device",
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
      name: "describe-gateway-capability-configuration",
      description:
        "Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway",
      options: [
        {
          name: "--gateway-id",
          description:
            "The ID of the gateway that defines the capability configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--capability-namespace",
          description:
            "The namespace of the capability configuration. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1",
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
      name: "describe-logging-options",
      description: "Retrieves the current IoT SiteWise logging options",
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
      name: "describe-portal",
      description: "Retrieves information about a portal",
      options: [
        {
          name: "--portal-id",
          description: "The ID of the portal",
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
      name: "describe-project",
      description: "Retrieves information about a project",
      options: [
        {
          name: "--project-id",
          description: "The ID of the project",
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
      name: "describe-storage-configuration",
      description:
        "Retrieves information about the storage configuration for IoT SiteWise",
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
      name: "describe-time-series",
      description:
        "Retrieves information about a time series (data stream). To identify a time series, do one of the following:   If the time series isn't associated with an asset property, specify the alias of the time series.   If the time series is associated with an asset property, specify one of the following:    The alias of the time series.   The assetId and propertyId that identifies the asset property",
      options: [
        {
          name: "--alias",
          description: "The alias that identifies the time series",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-id",
          description:
            "The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description:
            "The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
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
      name: "disassociate-assets",
      description:
        "Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the parent asset from which to disassociate the child asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--hierarchy-id",
          description:
            "The ID of a hierarchy in the parent asset's model. (This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.) Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see Asset hierarchies in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--child-asset-id",
          description:
            "The ID of the child asset to disassociate. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "disassociate-time-series-from-asset-property",
      description:
        "Disassociates a time series (data stream) from an asset property",
      options: [
        {
          name: "--alias",
          description: "The alias that identifies the time series",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-id",
          description:
            "The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description:
            "The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "execute-action",
      description: "Executes an action on a target resource",
      options: [
        {
          name: "--target-resource",
          description: "The resource the action will be taken on",
          args: {
            name: "structure",
          },
        },
        {
          name: "--action-definition-id",
          description: "The ID of the action definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-payload",
          description: "The JSON payload of the action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
        "Run SQL queries to retrieve metadata and time-series data from asset models, assets, measurements, metrics, transforms, and aggregates",
      options: [
        {
          name: "--query-statement",
          description: "The IoT SiteWise query statement",
          args: {
            name: "string",
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
            "The maximum number of results to return at one time. The default is 25",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "get-asset-property-aggregates",
      description:
        "Gets aggregated values for an asset property. For more information, see Querying aggregates in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty",
      options: [
        {
          name: "--asset-id",
          description: "The ID of the asset, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description: "The ID of the asset property, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-alias",
          description:
            "The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--aggregate-types",
          description: "The data aggregating function",
          args: {
            name: "list",
          },
        },
        {
          name: "--resolution",
          description: "The time interval over which to aggregate data",
          args: {
            name: "string",
          },
        },
        {
          name: "--qualities",
          description: "The quality by which to filter asset data",
          args: {
            name: "list",
          },
        },
        {
          name: "--start-date",
          description:
            "The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date",
          description:
            "The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--time-ordering",
          description:
            "The chronological sorting order of the requested information. Default: ASCENDING",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.   The size of the result set is equal to 1 MB.   The number of data points in the result set is equal to the value of maxResults. The maximum value of maxResults is 2500",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "get-asset-property-value",
      description:
        "Gets an asset property's current value. For more information, see Querying current values in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty",
      options: [
        {
          name: "--asset-id",
          description: "The ID of the asset, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description: "The ID of the asset property, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-alias",
          description:
            "The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide",
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
      name: "get-asset-property-value-history",
      description:
        "Gets the history of an asset property's values. For more information, see Querying historical values in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty",
      options: [
        {
          name: "--asset-id",
          description: "The ID of the asset, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description: "The ID of the asset property, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-alias",
          description:
            "The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date",
          description:
            "The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date",
          description:
            "The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--qualities",
          description: "The quality by which to filter asset data",
          args: {
            name: "list",
          },
        },
        {
          name: "--time-ordering",
          description:
            "The chronological sorting order of the requested information. Default: ASCENDING",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.   The size of the result set is equal to 4 MB.   The number of data points in the result set is equal to the value of maxResults. The maximum value of maxResults is 20000",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "get-interpolated-asset-property-values",
      description:
        "Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data. For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty",
      options: [
        {
          name: "--asset-id",
          description: "The ID of the asset, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description: "The ID of the asset property, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-alias",
          description:
            "The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time-in-seconds",
          description:
            "The exclusive start of the range from which to interpolate data, expressed in seconds in Unix epoch time",
          args: {
            name: "long",
          },
        },
        {
          name: "--start-time-offset-in-nanos",
          description:
            "The nanosecond offset converted from startTimeInSeconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--end-time-in-seconds",
          description:
            "The inclusive end of the range from which to interpolate data, expressed in seconds in Unix epoch time",
          args: {
            name: "long",
          },
        },
        {
          name: "--end-time-offset-in-nanos",
          description: "The nanosecond offset converted from endTimeInSeconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--quality",
          description:
            "The quality of the asset property value. You can use this parameter as a filter to choose only the asset property values that have a specific quality",
          args: {
            name: "string",
          },
        },
        {
          name: "--interval-in-seconds",
          description:
            "The time interval in seconds over which to interpolate data. Each interval starts when the previous one ends",
          args: {
            name: "long",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. If not specified, the default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--type",
          description:
            "The interpolation type. Valid values: LINEAR_INTERPOLATION | LOCF_INTERPOLATION     LINEAR_INTERPOLATION \u2013 Estimates missing data using linear interpolation. For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the first interpolated value on July 2, 2021, at 9 AM, the second interpolated value on July 3, 2021, at 9 AM, and so on.    LOCF_INTERPOLATION \u2013 Estimates missing data using last observation carried forward interpolation If no data point is found for an interval, IoT SiteWise returns the last observed data point for the previous interval and carries forward this interpolated value until a new data point is found. For example, you can get the state of an on-off valve every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the last observed data point between July 1, 2021, at 9 AM and July 2, 2021, at 9 AM as the first interpolated value. If a data point isn't found after 9 AM on July 2, 2021, IoT SiteWise uses the same interpolated value for the rest of the days",
          args: {
            name: "string",
          },
        },
        {
          name: "--interval-window-in-seconds",
          description:
            "The query interval for the window, in seconds. IoT SiteWise computes each interpolated value by using data points from the timestamp of each interval, minus the window to the timestamp of each interval plus the window. If not specified, the window ranges between the start time minus the interval and the end time plus the interval.    If you specify a value for the intervalWindowInSeconds parameter, the value for the type parameter must be LINEAR_INTERPOLATION.   If a data point isn't found during the specified query window, IoT SiteWise won't return an interpolated value for the interval. This indicates that there's a gap in the ingested data points.    For example, you can get the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts on July 1, 2021, at 9 AM with a window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 2, 2021 to compute the first interpolated value. Next, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 3, 2021 to compute the second interpolated value, and so on",
          args: {
            name: "long",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-access-policies",
      description:
        "Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project)",
      options: [
        {
          name: "--identity-type",
          description:
            "The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required if you specify identityId",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-id",
          description:
            "The ID of the identity. This parameter is required if you specify USER or GROUP for identityType",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of resource (portal or project). This parameter is required if you specify resourceId",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The ID of the resource. This parameter is required if you specify resourceType",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-arn",
          description:
            "The ARN of the IAM user. For more information, see IAM ARNs in the IAM User Guide. This parameter is required if you specify IAM for identityType",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-actions",
      description:
        "Retrieves a paginated list of actions for a specific target resource",
      options: [
        {
          name: "--target-resource-type",
          description: "The type of resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-resource-id",
          description: "The ID of the target resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-asset-model-composite-models",
      description:
        "Retrieves a paginated list of composite models associated with the asset model",
      options: [
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--asset-model-version",
          description:
            "The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is LATEST. See  Asset model versions in the IoT SiteWise User Guide",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-asset-model-properties",
      description:
        "Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again",
      options: [
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. If not specified, the default value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "Filters the requested list of asset model properties. You can choose one of the following options:    ALL \u2013 The list includes all asset model properties for a given asset model ID.     BASE \u2013 The list includes only base asset model properties for a given asset model ID.    Default: BASE",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-version",
          description:
            "The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is LATEST. See  Asset model versions in the IoT SiteWise User Guide",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-asset-models",
      description:
        "Retrieves a paginated list of summaries of all asset models",
      options: [
        {
          name: "--asset-model-types",
          description:
            "The type of asset model. If you don't provide an assetModelTypes, all types of asset models are returned.    ASSET_MODEL \u2013 An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL \u2013 A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--asset-model-version",
          description:
            "The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is LATEST. See  Asset model versions in the IoT SiteWise User Guide",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-asset-properties",
      description:
        "Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. If not specified, the default value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "Filters the requested list of asset properties. You can choose one of the following options:    ALL \u2013 The list includes all asset properties for a given asset model ID.     BASE \u2013 The list includes only base asset properties for a given asset model ID.    Default: BASE",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-asset-relationships",
      description:
        "Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--traversal-type",
          description:
            "The type of traversal to use to identify asset relationships. Choose the following option:    PATH_TO_ROOT \u2013 Identify the asset's parent assets up to the root asset. The asset that you specify in assetId is the first result in the list of assetRelationshipSummaries, and the root asset is the last result",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-assets",
      description:
        "Retrieves a paginated list of asset summaries. You can use this operation to do the following:   List assets based on a specific asset model.   List top-level assets.   You can't use this operation to list all assets. To retrieve summaries for all of your assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model",
      options: [
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model by which to filter the list of assets. This parameter is required if you choose ALL for filter. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "The filter for the requested list of assets. Choose one of the following options:    ALL \u2013 The list includes all assets for a given asset model ID. The assetModelId parameter is required if you filter by ALL.    TOP_LEVEL \u2013 The list includes only top-level assets in the asset hierarchy tree.   Default: ALL",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-associated-assets",
      description:
        "Retrieves a paginated list of associated assets. You can use this operation to do the following:    CHILD - List all child assets associated to the asset.    PARENT - List the asset's parent asset",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the asset to query. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--hierarchy-id",
          description:
            "(Optional) If you don't provide a hierarchyId, all the immediate assets in the traversalDirection will be returned.   The ID of the hierarchy by which child assets are associated to the asset. (This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.) For more information, see Asset hierarchies in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--traversal-direction",
          description:
            "The direction to list associated assets. Choose one of the following options:    CHILD \u2013 The list includes all child assets associated to the asset.    PARENT \u2013 The list includes the asset's parent asset.   Default: CHILD",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-bulk-import-jobs",
      description:
        "Retrieves a paginated list of bulk import job requests. For more information, see List bulk import jobs (CLI) in the IoT SiteWise User Guide",
      options: [
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "You can use a filter to select the bulk import jobs that you want to retrieve",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-composition-relationships",
      description:
        "Retrieves a paginated list of composition relationships for an asset model of type COMPONENT_MODEL",
      options: [
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-dashboards",
      description:
        "Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project",
      options: [
        {
          name: "--project-id",
          description: "The ID of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-datasets",
      description:
        "Retrieves a paginated list of datasets for a specific target resource",
      options: [
        {
          name: "--source-type",
          description: "The type of data source for the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no additional results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-gateways",
      description: "Retrieves a paginated list of gateways",
      options: [
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-portals",
      description: "Retrieves a paginated list of IoT SiteWise Monitor portals",
      options: [
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-project-assets",
      description:
        "Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project",
      options: [
        {
          name: "--project-id",
          description: "The ID of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-projects",
      description:
        "Retrieves a paginated list of projects for an IoT SiteWise Monitor portal",
      options: [
        {
          name: "--portal-id",
          description: "The ID of the portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request. Default: 50",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      description: "Retrieves the list of tags for an IoT SiteWise resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource",
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
      name: "list-time-series",
      description: "Retrieves a paginated list of time series (data streams)",
      options: [
        {
          name: "--next-token",
          description:
            "The token to be used for the next set of paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for each paginated request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--asset-id",
          description:
            "The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-prefix",
          description: "The alias prefix of the time series",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-series-type",
          description:
            "The type of the time series. The time series type can be one of the following values:    ASSOCIATED \u2013 The time series is associated with an asset property.    DISASSOCIATED \u2013 The time series isn't associated with any asset property",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "put-default-encryption-configuration",
      description:
        "Sets the default encryption configuration for the Amazon Web Services account. For more information, see Key management in the IoT SiteWise User Guide",
      options: [
        {
          name: "--encryption-type",
          description:
            "The type of encryption used for the encryption configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Key ID of the customer managed key used for KMS encryption. This is required if you use KMS_BASED_ENCRYPTION",
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
      name: "put-logging-options",
      description: "Sets logging options for IoT SiteWise",
      options: [
        {
          name: "--logging-options",
          description: "The logging options to set",
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
      name: "put-storage-configuration",
      description: "Configures storage settings for IoT SiteWise",
      options: [
        {
          name: "--storage-type",
          description:
            "The storage tier that you specified for your data. The storageType parameter can be one of the following values:    SITEWISE_DEFAULT_STORAGE \u2013 IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.    MULTI_LAYER_STORAGE \u2013 IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-layer-storage",
          description:
            "Identifies a storage destination. If you specified MULTI_LAYER_STORAGE for the storage type, you must specify a MultiLayerStorage object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--disassociated-data-storage",
          description:
            "Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The disassociatedDataStorage can be one of the following values:    ENABLED \u2013 IoT SiteWise accepts time series that aren't associated with asset properties.  After the disassociatedDataStorage is enabled, you can't disable it.     DISABLED \u2013 IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.   For more information, see Data streams in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--retention-period",
          description:
            "The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier",
          args: {
            name: "structure",
          },
        },
        {
          name: "--warm-tier",
          description:
            "A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API",
          args: {
            name: "string",
          },
        },
        {
          name: "--warm-tier-retention-period",
          description:
            "Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled",
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
      name: "tag-resource",
      description:
        "Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that contain metadata for the resource. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide",
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
      description: "Removes a tag from an IoT SiteWise resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of keys for tags to remove from the resource",
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
      name: "update-access-policy",
      description:
        "Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource",
      options: [
        {
          name: "--access-policy-id",
          description: "The ID of the access policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-policy-identity",
          description:
            "The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-policy-resource",
          description:
            "The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-policy-permission",
          description:
            "The permission level for this access policy. Note that a project ADMINISTRATOR is also known as a project owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "update-asset",
      description:
        "Updates an asset's name. For more information, see Updating assets and models in the IoT SiteWise User Guide",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the asset to update. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-name",
          description: "A friendly name for the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-description",
          description: "A description for the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-external-id",
          description:
            "An external ID to assign to the asset. The asset must not already have an external ID. The external ID must be unique within your Amazon Web Services account. For more information, see Using external IDs in the IoT SiteWise User Guide",
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
      name: "update-asset-model",
      description:
        "Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide.  If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. You can\u2019t change the type or data type of an existing property. To replace an existing asset model property with a new one with the same name, do the following:   Submit an UpdateAssetModel request with the entire existing property removed.   Submit a second UpdateAssetModel request that includes the new property. The new asset property will have the same name as the previous one and IoT SiteWise will generate a new unique id",
      options: [
        {
          name: "--asset-model-id",
          description:
            "The ID of the asset model to update. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-external-id",
          description:
            "An external ID to assign to the asset model. The asset model must not already have an external ID. The external ID must be unique within your Amazon Web Services account. For more information, see Using external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-name",
          description: "A unique name for the asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-description",
          description: "A description for the asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-properties",
          description:
            "The updated property definitions of the asset model. For more information, see Asset properties in the IoT SiteWise User Guide. You can specify up to 200 properties per asset model. For more information, see Quotas in the IoT SiteWise User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--asset-model-hierarchies",
          description:
            "The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see Asset hierarchies in the IoT SiteWise User Guide. You can specify up to 10 hierarchies per asset model. For more information, see Quotas in the IoT SiteWise User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--asset-model-composite-models",
          description:
            "The composite models that are part of this asset model. It groups properties (such as attributes, measurements, transforms, and metrics) and child composite models that model parts of your industrial equipment. Each composite model has a type that defines the properties that the composite model supports. Use composite models to define alarms on this asset model.  When creating custom composite models, you need to use CreateAssetModelCompositeModel. For more information, see Creating custom composite models (Components) in the IoT SiteWise User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match",
          description:
            "The expected current entity tag (ETag) for the asset model\u2019s latest or active version (specified using matchForVersionType). The update request is rejected if the tag does not match the latest or active version's current entity tag. See Optimistic locking for asset model writes in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Accepts * to reject the update request if an active version (specified using matchForVersionType as ACTIVE) already exists for the asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--match-for-version-type",
          description:
            "Specifies the asset model version type (LATEST or ACTIVE) used in conjunction with If-Match or If-None-Match headers to determine the target ETag for the update operation",
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
      name: "update-asset-model-composite-model",
      description:
        "Updates a composite model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide.  If you remove a property from a composite asset model, IoT SiteWise deletes all previous data for that property. You can\u2019t change the type or data type of an existing property. To replace an existing composite asset model property with a new one with the same name, do the following:   Submit an UpdateAssetModelCompositeModel request with the entire existing property removed.   Submit a second UpdateAssetModelCompositeModel request that includes the new property. The new asset property will have the same name as the previous one and IoT SiteWise will generate a new unique id",
      options: [
        {
          name: "--asset-model-id",
          description: "The ID of the asset model, in UUID format",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-id",
          description: "The ID of a composite model on this asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-external-id",
          description:
            "An external ID to assign to the asset model. You can only set the external ID of the asset model if it wasn't set when it was created, or you're setting it to the exact same thing as when it was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-description",
          description: "A description for the composite model",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-name",
          description: "A unique name for the composite model",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-model-composite-model-properties",
          description:
            "The property definitions of the composite model. For more information, see  Inline custom composite models in the IoT SiteWise User Guide. You can specify up to 200 properties per composite model. For more information, see Quotas in the IoT SiteWise User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--if-match",
          description:
            "The expected current entity tag (ETag) for the asset model\u2019s latest or active version (specified using matchForVersionType). The update request is rejected if the tag does not match the latest or active version's current entity tag. See Optimistic locking for asset model writes in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Accepts * to reject the update request if an active version (specified using matchForVersionType as ACTIVE) already exists for the asset model",
          args: {
            name: "string",
          },
        },
        {
          name: "--match-for-version-type",
          description:
            "Specifies the asset model version type (LATEST or ACTIVE) used in conjunction with If-Match or If-None-Match headers to determine the target ETag for the update operation",
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
      name: "update-asset-property",
      description:
        "Updates an asset property's alias and notification state.  This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see DescribeAssetProperty",
      options: [
        {
          name: "--asset-id",
          description:
            "The ID of the asset to be updated. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-id",
          description:
            "The ID of the asset property to be updated. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-alias",
          description:
            "The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide. If you omit this parameter, the alias is removed from the property",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-notification-state",
          description:
            "The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see Interacting with other services in the IoT SiteWise User Guide. If you omit this parameter, the notification state is set to DISABLED",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-unit",
          description:
            "The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model",
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
      name: "update-dashboard",
      description: "Updates an IoT SiteWise Monitor dashboard",
      options: [
        {
          name: "--dashboard-id",
          description: "The ID of the dashboard to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-name",
          description: "A new friendly name for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-description",
          description: "A new description for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-definition",
          description:
            "The new dashboard definition, as specified in a JSON literal.   IoT SiteWise Monitor (Classic) see Create dashboards (CLI)    IoT SiteWise Monitor (AI-aware) see Create dashboards (CLI)    in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "update-dataset",
      description: "Updates a dataset",
      options: [
        {
          name: "--dataset-id",
          description: "The ID of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name",
          description: "The name of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-description",
          description: "A description about the dataset, and its functionality",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-source",
          description: "The data source for the dataset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "update-gateway",
      description: "Updates a gateway's name",
      options: [
        {
          name: "--gateway-id",
          description: "The ID of the gateway to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--gateway-name",
          description: "A unique name for the gateway",
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
      name: "update-gateway-capability-configuration",
      description:
        "Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway",
      options: [
        {
          name: "--gateway-id",
          description: "The ID of the gateway to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--capability-namespace",
          description:
            "The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1",
          args: {
            name: "string",
          },
        },
        {
          name: "--capability-configuration",
          description:
            "The JSON document that defines the configuration for the gateway capability. For more information, see Configuring data sources (CLI) in the IoT SiteWise User Guide",
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
      name: "update-portal",
      description: "Updates an IoT SiteWise Monitor portal",
      options: [
        {
          name: "--portal-id",
          description: "The ID of the portal to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--portal-name",
          description: "A new friendly name for the portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--portal-description",
          description: "A new description for the portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--portal-contact-email",
          description:
            "The Amazon Web Services administrator's contact email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--portal-logo-image",
          description:
            "Contains an image that is one of the following:   An image file. Choose this option to upload a new image.   The ID of an existing image. Choose this option to keep an existing image",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see Using service roles for IoT SiteWise Monitor in the IoT SiteWise User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-sender-email",
          description: "The email address that sends alarm notifications",
          args: {
            name: "string",
          },
        },
        {
          name: "--alarms",
          description:
            "Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see Monitoring with alarms in the IoT SiteWise Application Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--portal-type",
          description:
            "Define the type of portal. The value for IoT SiteWise Monitor (Classic) is SITEWISE_PORTAL_V1. The value for IoT SiteWise Monitor (AI-aware) is SITEWISE_PORTAL_V2",
          args: {
            name: "string",
          },
        },
        {
          name: "--portal-type-configuration",
          description:
            "The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is SITEWISE_PORTAL_V1. The value for IoT SiteWise Monitor (AI-aware) is SITEWISE_PORTAL_V2",
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
      name: "update-project",
      description: "Updates an IoT SiteWise Monitor project",
      options: [
        {
          name: "--project-id",
          description: "The ID of the project to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "A new friendly name for the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-description",
          description: "A new description for the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "asset-active",
          description:
            "Wait until JMESPath query assetStatus.state returns ACTIVE when polling with ``describe-asset``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--asset-id",
              description:
                "The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
              args: {
                name: "string",
              },
            },
            {
              name: "--exclude-properties",
              description:
                "Whether or not to exclude asset properties from the response",
            },
            {
              name: "--no-exclude-properties",
              description:
                "Whether or not to exclude asset properties from the response",
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
          name: "asset-model-active",
          description:
            "Wait until JMESPath query assetModelStatus.state returns ACTIVE when polling with ``describe-asset-model``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--asset-model-id",
              description:
                "The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
              args: {
                name: "string",
              },
            },
            {
              name: "--exclude-properties",
              description:
                "Whether or not to exclude asset model properties from the response",
            },
            {
              name: "--no-exclude-properties",
              description:
                "Whether or not to exclude asset model properties from the response",
            },
            {
              name: "--asset-model-version",
              description:
                "The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is LATEST. See  Asset model versions in the IoT SiteWise User Guide",
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
          name: "asset-model-not-exists",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-asset-model``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--asset-model-id",
              description:
                "The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
              args: {
                name: "string",
              },
            },
            {
              name: "--exclude-properties",
              description:
                "Whether or not to exclude asset model properties from the response",
            },
            {
              name: "--no-exclude-properties",
              description:
                "Whether or not to exclude asset model properties from the response",
            },
            {
              name: "--asset-model-version",
              description:
                "The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is LATEST. See  Asset model versions in the IoT SiteWise User Guide",
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
          name: "asset-not-exists",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-asset``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--asset-id",
              description:
                "The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide",
              args: {
                name: "string",
              },
            },
            {
              name: "--exclude-properties",
              description:
                "Whether or not to exclude asset properties from the response",
            },
            {
              name: "--no-exclude-properties",
              description:
                "Whether or not to exclude asset properties from the response",
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
          name: "portal-active",
          description:
            "Wait until JMESPath query portalStatus.state returns ACTIVE when polling with ``describe-portal``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--portal-id",
              description: "The ID of the portal",
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
          name: "portal-not-exists",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-portal``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--portal-id",
              description: "The ID of the portal",
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
    },
  ],
};
export default completionSpec;
