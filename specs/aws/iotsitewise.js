var completionSpec = {
    name: "iotsitewise",
    description: "Welcome to the AWS IoT SiteWise API Reference. AWS IoT SiteWise is an AWS service that connects Industrial Internet of Things (IIoT) devices to the power of the AWS Cloud. For more information, see the AWS IoT SiteWise User Guide. For information about AWS IoT SiteWise quotas, see Quotas in the AWS IoT SiteWise User Guide.",
    subcommands: [
        {
            name: "associate-assets",
            description: "Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see Associating assets in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the parent asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--hierarchy-id",
                    description: "The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see Asset hierarchies in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--child-asset-id",
                    description: "The ID of the child asset to be associated.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "batch-associate-project-assets",
            description: "Associates a group (batch) of assets with an AWS IoT SiteWise Monitor project.",
            options: [
                {
                    name: "--project-id",
                    description: "The ID of the project to which to associate the assets.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--asset-ids",
                    description: "The IDs of the assets to be associated to the project.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "batch-disassociate-project-assets",
            description: "Disassociates a group (batch) of assets from an AWS IoT SiteWise Monitor project.",
            options: [
                {
                    name: "--project-id",
                    description: "The ID of the project from which to disassociate the assets.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--asset-ids",
                    description: "The IDs of the assets to be disassociated from the project.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "batch-put-asset-property-value",
            description: "Sends a list of asset property values to AWS IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see Ingesting data using the API in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.    With respect to Unix epoch time, AWS IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 5 minutes in the future. AWS IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +5 minutes] and returns a TimestampOutOfRangeException error. For each asset property, AWS IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV {T1, GOOD, V1}, then storing {T1, GOOD, V2} replaces the existing TQV.  AWS IoT SiteWise authorizes access to each BatchPutAssetPropertyValue entry individually. For more information, see BatchPutAssetPropertyValue authorization in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--entries",
                    description: "The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-access-policy",
            description: "Creates an access policy that grants the specified identity (AWS SSO user, AWS SSO group, or IAM user) access to the specified AWS IoT SiteWise Monitor portal or project resource.",
            options: [
                {
                    name: "--access-policy-identity",
                    description: "The identity for this access policy. Choose an AWS SSO user, an AWS SSO group, or an IAM user.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--access-policy-resource",
                    description: "The AWS IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--access-policy-permission",
                    description: "The permission level for this access policy. Note that a project ADMINISTRATOR is also known as a project owner.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A list of key-value pairs that contain metadata for the access policy. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-asset",
            description: "Creates an asset from an existing asset model. For more information, see Creating assets in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--asset-name",
                    description: "A unique, friendly name for the asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--asset-model-id",
                    description: "The ID of the asset model from which to create the asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A list of key-value pairs that contain metadata for the asset. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-asset-model",
            description: "Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see Defining asset models in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--asset-model-name",
                    description: "A unique, friendly name for the asset model.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--asset-model-description",
                    description: "A description for the asset model.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--asset-model-properties",
                    description: "The property definitions of the asset model. For more information, see Asset properties in the AWS IoT SiteWise User Guide. You can specify up to 200 properties per asset model. For more information, see Quotas in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--asset-model-hierarchies",
                    description: "The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see Asset hierarchies in the AWS IoT SiteWise User Guide. You can specify up to 10 hierarchies per asset model. For more information, see Quotas in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--asset-model-composite-models",
                    description: "The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A list of key-value pairs that contain metadata for the asset model. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-dashboard",
            description: "Creates a dashboard in an AWS IoT SiteWise Monitor project.",
            options: [
                {
                    name: "--project-id",
                    description: "The ID of the project in which to create the dashboard.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--dashboard-name",
                    description: "A friendly name for the dashboard.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--dashboard-description",
                    description: "A description for the dashboard.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--dashboard-definition",
                    description: "The dashboard definition specified in a JSON literal. For detailed information, see Creating dashboards (CLI) in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A list of key-value pairs that contain metadata for the dashboard. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-gateway",
            description: "Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to AWS IoT SiteWise. For more information, see Ingesting data using a gateway in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--gateway-name",
                    description: "A unique, friendly name for the gateway.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--gateway-platform",
                    description: "The gateway's platform. You can only specify one platform in a gateway.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "A list of key-value pairs that contain metadata for the gateway. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-portal",
            description: "Creates a portal, which can contain projects and dashboards. AWS IoT SiteWise Monitor uses AWS SSO or IAM to authenticate portal users and manage user permissions.  Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see Adding or removing portal administrators in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--portal-name",
                    description: "A friendly name for the portal.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--portal-description",
                    description: "A description for the portal.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--portal-contact-email",
                    description: "The AWS administrator's contact email address.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--portal-logo-image-file",
                    description: "A logo image to display in the portal. Upload a square, high-resolution image. The image is displayed on a dark background.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--role-arn",
                    description: "The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see Using service roles for AWS IoT SiteWise Monitor in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "A list of key-value pairs that contain metadata for the portal. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--portal-auth-mode",
                    description: "The service to use to authenticate users to the portal. Choose from the following options:    SSO \u2013 The portal uses AWS Single Sign-On to authenticate users and manage user permissions. Before you can create a portal that uses AWS SSO, you must enable AWS SSO. For more information, see Enabling AWS SSO in the AWS IoT SiteWise User Guide. This option is only available in AWS Regions other than the China Regions.    IAM \u2013 The portal uses AWS Identity and Access Management (IAM) to authenticate users and manage user permissions. This option is only available in the China Regions.   You can't change this value after you create a portal. Default: SSO",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-project",
            description: "Creates a project in the specified portal.",
            options: [
                {
                    name: "--portal-id",
                    description: "The ID of the portal in which to create the project.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--project-name",
                    description: "A friendly name for the project.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--project-description",
                    description: "A description for the project.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A list of key-value pairs that contain metadata for the project. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-access-policy",
            description: "Deletes an access policy that grants the specified identity access to the specified AWS IoT SiteWise Monitor resource. You can use this operation to revoke access to an AWS IoT SiteWise Monitor resource.",
            options: [
                {
                    name: "--access-policy-id",
                    description: "The ID of the access policy to be deleted.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-asset",
            description: "Deletes an asset. This action can't be undone. For more information, see Deleting assets and models in the AWS IoT SiteWise User Guide.   You can't delete an asset that's associated to another asset. For more information, see DisassociateAssets.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-asset-model",
            description: "Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--asset-model-id",
                    description: "The ID of the asset model to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-dashboard",
            description: "Deletes a dashboard from AWS IoT SiteWise Monitor.",
            options: [
                {
                    name: "--dashboard-id",
                    description: "The ID of the dashboard to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-gateway",
            description: "Deletes a gateway from AWS IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.",
            options: [
                {
                    name: "--gateway-id",
                    description: "The ID of the gateway to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-portal",
            description: "Deletes a portal from AWS IoT SiteWise Monitor.",
            options: [
                {
                    name: "--portal-id",
                    description: "The ID of the portal to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-project",
            description: "Deletes a project from AWS IoT SiteWise Monitor.",
            options: [
                {
                    name: "--project-id",
                    description: "The ID of the project.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-access-policy",
            description: "Describes an access policy, which specifies an identity's access to an AWS IoT SiteWise Monitor portal or project.",
            options: [
                {
                    name: "--access-policy-id",
                    description: "The ID of the access policy.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-asset",
            description: "Retrieves information about an asset.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-asset-model",
            description: "Retrieves information about an asset model.",
            options: [
                {
                    name: "--asset-model-id",
                    description: "The ID of the asset model.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-asset-property",
            description: "Retrieves information about an asset property.  When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.  This operation doesn't return the value of the asset property. To get the value of an asset property, use GetAssetPropertyValue.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--property-id",
                    description: "The ID of the asset property.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-dashboard",
            description: "Retrieves information about a dashboard.",
            options: [
                {
                    name: "--dashboard-id",
                    description: "The ID of the dashboard.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-default-encryption-configuration",
            description: "Retrieves information about the default encryption configuration for the AWS account in the default or specified region. For more information, see Key management in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-gateway",
            description: "Retrieves information about a gateway.",
            options: [
                {
                    name: "--gateway-id",
                    description: "The ID of the gateway device.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-gateway-capability-configuration",
            description: "Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.",
            options: [
                {
                    name: "--gateway-id",
                    description: "The ID of the gateway that defines the capability configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--capability-namespace",
                    description: "The namespace of the capability configuration. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-logging-options",
            description: "Retrieves the current AWS IoT SiteWise logging options.",
            options: [
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-portal",
            description: "Retrieves information about a portal.",
            options: [
                {
                    name: "--portal-id",
                    description: "The ID of the portal.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-project",
            description: "Retrieves information about a project.",
            options: [
                {
                    name: "--project-id",
                    description: "The ID of the project.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "disassociate-assets",
            description: "Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the parent asset from which to disassociate the child asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--hierarchy-id",
                    description: "The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see Asset hierarchies in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--child-asset-id",
                    description: "The ID of the child asset to disassociate.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-asset-property-aggregates",
            description: "Gets aggregated values for an asset property. For more information, see Querying aggregates in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--property-id",
                    description: "The ID of the asset property.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--property-alias",
                    description: "The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--aggregate-types",
                    description: "The data aggregating function.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--resolution",
                    description: "The time interval over which to aggregate data.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--qualities",
                    description: "The quality by which to filter asset data.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--start-date",
                    description: "The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: false,
                },
                {
                    name: "--end-date",
                    description: "The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: false,
                },
                {
                    name: "--time-ordering",
                    description: "The chronological sorting order of the requested information. Default: ASCENDING",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 100",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-asset-property-value",
            description: "Gets an asset property's current value. For more information, see Querying current values in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--property-id",
                    description: "The ID of the asset property.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--property-alias",
                    description: "The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-asset-property-value-history",
            description: "Gets the history of an asset property's values. For more information, see Querying historical values in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--property-id",
                    description: "The ID of the asset property.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--property-alias",
                    description: "The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--start-date",
                    description: "The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: true,
                },
                {
                    name: "--end-date",
                    description: "The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: true,
                },
                {
                    name: "--qualities",
                    description: "The quality by which to filter asset data.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--time-ordering",
                    description: "The chronological sorting order of the requested information. Default: ASCENDING",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 100",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-access-policies",
            description: "Retrieves a paginated list of access policies for an identity (an AWS SSO user, an AWS SSO group, or an IAM user) or an AWS IoT SiteWise Monitor resource (a portal or project).",
            options: [
                {
                    name: "--identity-type",
                    description: "The type of identity (AWS SSO user, AWS SSO group, or IAM user). This parameter is required if you specify identityId.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--identity-id",
                    description: "The ID of the identity. This parameter is required if you specify USER or GROUP for identityType.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--resource-type",
                    description: "The type of resource (portal or project). This parameter is required if you specify resourceId.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--resource-id",
                    description: "The ID of the resource. This parameter is required if you specify resourceType.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--iam-arn",
                    description: "The ARN of the IAM user. For more information, see IAM ARNs in the IAM User Guide. This parameter is required if you specify IAM for identityType.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 50",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-asset-models",
            description: "Retrieves a paginated list of summaries of all asset models.",
            options: [
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 50",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-asset-relationships",
            description: "Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--traversal-type",
                    description: "The type of traversal to use to identify asset relationships. Choose the following option:    PATH_TO_ROOT \u2013 Identify the asset's parent assets up to the root asset. The asset that you specify in assetId is the first result in the list of assetRelationshipSummaries, and the root asset is the last result.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-assets",
            description: "Retrieves a paginated list of asset summaries. You can use this operation to do the following:   List assets based on a specific asset model.   List top-level assets.   You can't use this operation to list all assets. To retrieve summaries for all of your assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.",
            options: [
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 50",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--asset-model-id",
                    description: "The ID of the asset model by which to filter the list of assets. This parameter is required if you choose ALL for filter.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filter",
                    description: "The filter for the requested list of assets. Choose one of the following options:    ALL \u2013 The list includes all assets for a given asset model ID. The assetModelId parameter is required if you filter by ALL.    TOP_LEVEL \u2013 The list includes only top-level assets in the asset hierarchy tree.   Default: ALL",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-associated-assets",
            description: "Retrieves a paginated list of associated assets. You can use this operation to do the following:   List child assets associated to a parent asset by a hierarchy that you specify.   List an asset's parent asset.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset to query.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--hierarchy-id",
                    description: "The ID of the hierarchy by which child assets are associated to the asset. To find a hierarchy ID, use the DescribeAsset or DescribeAssetModel operations. This parameter is required if you choose CHILD for traversalDirection. For more information, see Asset hierarchies in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--traversal-direction",
                    description: "The direction to list associated assets. Choose one of the following options:    CHILD \u2013 The list includes all child assets associated to the asset. The hierarchyId parameter is required if you choose CHILD.    PARENT \u2013 The list includes the asset's parent asset.   Default: CHILD",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 50",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-dashboards",
            description: "Retrieves a paginated list of dashboards for an AWS IoT SiteWise Monitor project.",
            options: [
                {
                    name: "--project-id",
                    description: "The ID of the project.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 50",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-gateways",
            description: "Retrieves a paginated list of gateways.",
            options: [
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 50",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-portals",
            description: "Retrieves a paginated list of AWS IoT SiteWise Monitor portals.",
            options: [
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 50",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-project-assets",
            description: "Retrieves a paginated list of assets associated with an AWS IoT SiteWise Monitor project.",
            options: [
                {
                    name: "--project-id",
                    description: "The ID of the project.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 50",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-projects",
            description: "Retrieves a paginated list of projects for an AWS IoT SiteWise Monitor portal.",
            options: [
                {
                    name: "--portal-id",
                    description: "The ID of the portal.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "The token to be used for the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned per paginated request. Default: 50",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-tags-for-resource",
            description: "Retrieves the list of tags for an AWS IoT SiteWise resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the resource.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "put-default-encryption-configuration",
            description: "Sets the default encryption configuration for the AWS account. For more information, see Key management in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--encryption-type",
                    description: "The type of encryption used for the encryption configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--kms-key-id",
                    description: "The Key ID of the customer managed customer master key (CMK) used for AWS KMS encryption. This is required if you use KMS_BASED_ENCRYPTION.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "put-logging-options",
            description: "Sets logging options for AWS IoT SiteWise.",
            options: [
                {
                    name: "--logging-options",
                    description: "The logging options to set.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "tag-resource",
            description: "Adds tags to an AWS IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the resource to tag.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "A list of key-value pairs that contain metadata for the resource. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "map",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "untag-resource",
            description: "Removes a tag from an AWS IoT SiteWise resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the resource to untag.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tag-keys",
                    description: "A list of keys for tags to remove from the resource.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-access-policy",
            description: "Updates an existing access policy that specifies an identity's access to an AWS IoT SiteWise Monitor portal or project resource.",
            options: [
                {
                    name: "--access-policy-id",
                    description: "The ID of the access policy.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--access-policy-identity",
                    description: "The identity for this access policy. Choose an AWS SSO user, an AWS SSO group, or an IAM user.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--access-policy-resource",
                    description: "The AWS IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--access-policy-permission",
                    description: "The permission level for this access policy. Note that a project ADMINISTRATOR is also known as a project owner.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-asset",
            description: "Updates an asset's name. For more information, see Updating assets and models in the AWS IoT SiteWise User Guide.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--asset-name",
                    description: "A unique, friendly name for the asset.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-asset-model",
            description: "Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the AWS IoT SiteWise User Guide.  This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see DescribeAssetModel. If you remove a property from an asset model, AWS IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, AWS IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.",
            options: [
                {
                    name: "--asset-model-id",
                    description: "The ID of the asset model to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--asset-model-name",
                    description: "A unique, friendly name for the asset model.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--asset-model-description",
                    description: "A description for the asset model.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--asset-model-properties",
                    description: "The updated property definitions of the asset model. For more information, see Asset properties in the AWS IoT SiteWise User Guide. You can specify up to 200 properties per asset model. For more information, see Quotas in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--asset-model-hierarchies",
                    description: "The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see Asset hierarchies in the AWS IoT SiteWise User Guide. You can specify up to 10 hierarchies per asset model. For more information, see Quotas in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--asset-model-composite-models",
                    description: "The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-asset-property",
            description: "Updates an asset property's alias and notification state.  This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see DescribeAssetProperty.",
            options: [
                {
                    name: "--asset-id",
                    description: "The ID of the asset to be updated.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--property-id",
                    description: "The ID of the asset property to be updated.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--property-alias",
                    description: "The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the AWS IoT SiteWise User Guide. If you omit this parameter, the alias is removed from the property.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--property-notification-state",
                    description: "The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see Interacting with other services in the AWS IoT SiteWise User Guide. If you omit this parameter, the notification state is set to DISABLED.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-dashboard",
            description: "Updates an AWS IoT SiteWise Monitor dashboard.",
            options: [
                {
                    name: "--dashboard-id",
                    description: "The ID of the dashboard to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--dashboard-name",
                    description: "A new friendly name for the dashboard.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--dashboard-description",
                    description: "A new description for the dashboard.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--dashboard-definition",
                    description: "The new dashboard definition, as specified in a JSON literal. For detailed information, see Creating dashboards (CLI) in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-gateway",
            description: "Updates a gateway's name.",
            options: [
                {
                    name: "--gateway-id",
                    description: "The ID of the gateway to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--gateway-name",
                    description: "A unique, friendly name for the gateway.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-gateway-capability-configuration",
            description: "Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.",
            options: [
                {
                    name: "--gateway-id",
                    description: "The ID of the gateway to be updated.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--capability-namespace",
                    description: "The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--capability-configuration",
                    description: "The JSON document that defines the configuration for the gateway capability. For more information, see Configuring data sources (CLI) in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-portal",
            description: "Updates an AWS IoT SiteWise Monitor portal.",
            options: [
                {
                    name: "--portal-id",
                    description: "The ID of the portal to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--portal-name",
                    description: "A new friendly name for the portal.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--portal-description",
                    description: "A new description for the portal.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--portal-contact-email",
                    description: "The AWS administrator's contact email address.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--portal-logo-image",
                    description: "Contains an image that is one of the following:   An image file. Choose this option to upload a new image.   The ID of an existing image. Choose this option to keep an existing image.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--role-arn",
                    description: "The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see Using service roles for AWS IoT SiteWise Monitor in the AWS IoT SiteWise User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-project",
            description: "Updates an AWS IoT SiteWise Monitor project.",
            options: [
                {
                    name: "--project-id",
                    description: "The ID of the project to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--project-name",
                    description: "A new friendly name for the project.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--project-description",
                    description: "A new description for the project.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "wait",
            description: "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met.",
            subcommands: [
                {
                    name: "asset-active",
                    description: "Wait until JMESPath query assetStatus.state returns ACTIVE when polling with ``describe-asset``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
                    options: [
                        {
                            name: "--asset-id",
                            description: "The ID of the asset.",
                            args: {
                                name: "string",
                            },
                            isOptional: false,
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                            isOptional: true,
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                            isOptional: true,
                        },
                    ],
                },
                {
                    name: "asset-model-active",
                    description: "Wait until JMESPath query assetModelStatus.state returns ACTIVE when polling with ``describe-asset-model``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
                    options: [
                        {
                            name: "--asset-model-id",
                            description: "The ID of the asset model.",
                            args: {
                                name: "string",
                            },
                            isOptional: false,
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                            isOptional: true,
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                            isOptional: true,
                        },
                    ],
                },
                {
                    name: "asset-model-not-exists",
                    description: "Wait until ResourceNotFoundException is thrown when polling with ``describe-asset-model``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
                    options: [
                        {
                            name: "--asset-model-id",
                            description: "The ID of the asset model.",
                            args: {
                                name: "string",
                            },
                            isOptional: false,
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                            isOptional: true,
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                            isOptional: true,
                        },
                    ],
                },
                {
                    name: "asset-not-exists",
                    description: "Wait until ResourceNotFoundException is thrown when polling with ``describe-asset``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
                    options: [
                        {
                            name: "--asset-id",
                            description: "The ID of the asset.",
                            args: {
                                name: "string",
                            },
                            isOptional: false,
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                            isOptional: true,
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                            isOptional: true,
                        },
                    ],
                },
                {
                    name: "portal-active",
                    description: "Wait until JMESPath query portalStatus.state returns ACTIVE when polling with ``describe-portal``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
                    options: [
                        {
                            name: "--portal-id",
                            description: "The ID of the portal.",
                            args: {
                                name: "string",
                            },
                            isOptional: false,
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                            isOptional: true,
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                            isOptional: true,
                        },
                    ],
                },
                {
                    name: "portal-not-exists",
                    description: "Wait until ResourceNotFoundException is thrown when polling with ``describe-portal``. It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
                    options: [
                        {
                            name: "--portal-id",
                            description: "The ID of the portal.",
                            args: {
                                name: "string",
                            },
                            isOptional: false,
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                            isOptional: true,
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                            isOptional: true,
                        },
                    ],
                },
            ],
        },
    ],
};

