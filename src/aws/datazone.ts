const completionSpec: Fig.Spec = {
  name: "datazone",
  description:
    "Amazon DataZone is a data management service that enables you to catalog, discover, govern, share, and analyze your data. With Amazon DataZone, you can share and access your data across accounts and supported regions. Amazon DataZone simplifies your experience across Amazon Web Services services, including, but not limited to, Amazon Redshift, Amazon Athena, Amazon Web Services Glue, and Amazon Web Services Lake Formation",
  subcommands: [
    {
      name: "accept-predictions",
      description:
        "Accepts automatically generated business-friendly metadata for your Amazon DataZone assets",
      options: [
        {
          name: "--accept-choices",
          description:
            "Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be accepted",
          args: {
            name: "list",
          },
        },
        {
          name: "--accept-rule",
          description:
            "Specifies the rule (or the conditions) under which a prediction can be accepted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision that is to be made to the asset",
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
      name: "accept-subscription-request",
      description: "Accepts a subscription request to a specific asset",
      options: [
        {
          name: "--decision-comment",
          description:
            "A description that specifies the reason for accepting the specified subscription request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The Amazon DataZone domain where the specified subscription request is being accepted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the subscription request that is to be accepted",
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
      name: "cancel-metadata-generation-run",
      description: "Cancels the metadata generation run",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the metadata generation run is to be cancelled",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the metadata generation run",
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
      name: "cancel-subscription",
      description: "Cancels the subscription to the specified asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The unique identifier of the Amazon DataZone domain where the subscription request is being cancelled",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the subscription that is being cancelled",
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
      name: "create-asset",
      description: "Creates an asset in Amazon DataZone catalog",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Asset description",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "Amazon DataZone domain where the asset is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-identifier",
          description: "The external identifier of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--forms-input",
          description: "Metadata forms attached to the asset",
          args: {
            name: "list",
          },
        },
        {
          name: "--glossary-terms",
          description: "Glossary terms attached to the asset",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "Asset name",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The unique identifier of the project that owns this asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--prediction-configuration",
          description:
            "The configuration of the automatically generated business-friendly metadata for the asset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type-identifier",
          description: "The unique identifier of this asset's type",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-revision",
          description: "The revision of this asset's type",
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
      name: "create-asset-revision",
      description: "Creates a revision of the asset",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The revised description of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The unique identifier of the domain where the asset is being revised",
          args: {
            name: "string",
          },
        },
        {
          name: "--forms-input",
          description:
            "The metadata forms to be attached to the asset as part of asset revision",
          args: {
            name: "list",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms to be attached to the asset as part of asset revision",
          args: {
            name: "list",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Te revised name of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--prediction-configuration",
          description:
            "The configuration of the automatically generated business-friendly metadata for the asset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type-revision",
          description: "The revision type of the asset",
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
      name: "create-asset-type",
      description: "Creates a custom asset type",
      options: [
        {
          name: "--description",
          description: "The descripton of the custom asset type",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The unique identifier of the Amazon DataZone domain where the custom asset type is being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--forms-input",
          description:
            "The metadata forms that are to be attached to the custom asset type",
          args: {
            name: "map",
          },
        },
        {
          name: "--name",
          description: "The name of the custom asset type",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The identifier of the Amazon DataZone project that is to own the custom asset type",
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
      name: "create-data-source",
      description: "Creates an Amazon DataZone data source",
      options: [
        {
          name: "--asset-forms-input",
          description:
            "The metadata forms that are to be attached to the assets that this data source works with",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Specifies the configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The description of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where the data source is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-setting",
          description: "Specifies whether the data source is enabled",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The unique identifier of the Amazon DataZone environment to which the data source publishes assets",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The identifier of the Amazon DataZone project in which you want to add this data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--publish-on-import",
          description:
            "Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog",
        },
        {
          name: "--no-publish-on-import",
          description:
            "Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog",
        },
        {
          name: "--recommendation",
          description:
            "Specifies whether the business name generation is to be enabled for this data source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schedule",
          description: "The schedule of the data source runs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type",
          description: "The type of the data source",
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
      name: "create-domain",
      description: "Creates an Amazon DataZone domain",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-execution-role",
          description:
            "The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the Amazon Web Services account that houses the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-identifier",
          description:
            "The identifier of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--single-sign-on",
          description:
            "The single-sign on configuration of the Amazon DataZone domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags specified for the Amazon DataZone domain",
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
      name: "create-environment",
      description: "Create an Amazon DataZone environment",
      options: [
        {
          name: "--description",
          description: "The description of the Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which the environment is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-profile-identifier",
          description:
            "The identifier of the environment profile that is used to create this Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms that can be used in this Amazon DataZone environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "The name of the Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The identifier of the Amazon DataZone project in which this environment is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-parameters",
          description:
            "The user parameters of this Amazon DataZone environment",
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
      name: "create-environment-profile",
      description: "Creates an Amazon DataZone environment profile",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account in which the Amazon DataZone environment is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-region",
          description:
            "The Amazon Web Services region in which this environment profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of this Amazon DataZone environment profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this environment profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description:
            "The ID of the blueprint with which this environment profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of this Amazon DataZone environment profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The identifier of the project in which to create the environment profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-parameters",
          description:
            "The user parameters of this Amazon DataZone environment profile",
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
      name: "create-form-type",
      description: "Creates a metadata form type",
      options: [
        {
          name: "--description",
          description:
            "The description of this Amazon DataZone metadata form type",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this metadata form type is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--model",
          description: "The model of this Amazon DataZone metadata form type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "The name of this Amazon DataZone metadata form type",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The ID of the Amazon DataZone project that owns this metadata form type",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of this Amazon DataZone metadata form type",
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
      name: "create-glossary",
      description: "Creates an Amazon DataZone business glossary",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of this business glossary",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this business glossary is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of this business glossary",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The ID of the project that currently owns business glossary",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of this business glossary",
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
      name: "create-glossary-term",
      description: "Creates a business glossary term",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this business glossary term is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-identifier",
          description:
            "The ID of the business glossary in which this term is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--long-description",
          description: "The long description of this business glossary term",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of this business glossary term",
          args: {
            name: "string",
          },
        },
        {
          name: "--short-description",
          description: "The short description of this business glossary term",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of this business glossary term",
          args: {
            name: "string",
          },
        },
        {
          name: "--term-relations",
          description: "The term relations of this business glossary term",
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
      name: "create-group-profile",
      description: "Creates a group profile in Amazon DataZone",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which the group profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-identifier",
          description:
            "The identifier of the group for which the group profile is created",
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
      name: "create-listing-change-set",
      description:
        "Publishes a listing (a record of an asset at a given time) or removes a listing from the catalog",
      options: [
        {
          name: "--action",
          description: "Specifies whether to publish or unpublish a listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "The ID of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description: "The ID of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-revision",
          description: "The revision of an asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description: "The type of an entity",
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
      name: "create-project",
      description: "Creates an Amazon DataZone project",
      options: [
        {
          name: "--description",
          description: "The description of the Amazon DataZone project",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this project is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms that can be used in this Amazon DataZone project",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "The name of the Amazon DataZone project",
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
      name: "create-project-membership",
      description: "Creates a project membership in Amazon DataZone",
      options: [
        {
          name: "--designation",
          description: "The designation of the project membership",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which project membership is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--member",
          description:
            "The project member whose project membership was created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The ID of the project for which this project membership was created",
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
      name: "create-subscription-grant",
      description: "Creates a subsscription grant in Amazon DataZone",
      options: [
        {
          name: "--asset-target-names",
          description:
            "The names of the assets for which the subscription grant is created",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription grant is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment in which the subscription grant is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--granted-entity",
          description: "The entity to which the subscription is to be granted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--subscription-target-identifier",
          description:
            "The ID of the subscription target for which the subscription grant is created",
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
      name: "create-subscription-request",
      description: "Creates a subscription request in Amazon DataZone",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription request is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-reason",
          description: "The reason for the subscription request",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscribed-listings",
          description:
            "The published asset for which the subscription grant is to be created",
          args: {
            name: "list",
          },
        },
        {
          name: "--subscribed-principals",
          description:
            "The Amazon DataZone principals for whom the subscription request is created",
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
      name: "create-subscription-target",
      description: "Creates a subscription target in Amazon DataZone",
      options: [
        {
          name: "--applicable-asset-types",
          description:
            "The asset types that can be included in the subscription target",
          args: {
            name: "list",
          },
        },
        {
          name: "--authorized-principals",
          description: "The authorized principals of the subscription target",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which subscription target is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment in which subscription target is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--manage-access-role",
          description:
            "The manage access role that is used to create the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider",
          description: "The provider of the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-target-config",
          description: "The configuration of the subscription target",
          args: {
            name: "list",
          },
        },
        {
          name: "--type",
          description: "The type of the subscription target",
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
      name: "create-user-profile",
      description: "Creates a user profile in Amazon DataZone",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a user profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-identifier",
          description:
            "The identifier of the user for which the user profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-type",
          description:
            "The user type of the user for which the user profile is created",
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
      description: "Delets an asset in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the asset is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset that is deleted",
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
      name: "delete-asset-type",
      description: "Deletes an asset type in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the asset type is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset type that is deleted",
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
      name: "delete-data-source",
      description: "Deletes a data source in Amazon DataZone",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the data source is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the data source that is deleted",
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
      name: "delete-domain",
      description: "Deletes a Amazon DataZone domain",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the Amazon Web Services domain that is to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-deletion-check",
          description:
            "Specifies the optional flag to delete all child entities within the domain",
        },
        {
          name: "--no-skip-deletion-check",
          description:
            "Specifies the optional flag to delete all child entities within the domain",
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
      name: "delete-environment",
      description: "Deletes an environment in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the environment is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the environment that is to be deleted",
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
      name: "delete-environment-blueprint-configuration",
      description: "Deletes the blueprint configuration in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the blueprint configuration is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description:
            "The ID of the blueprint the configuration of which is deleted",
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
      name: "delete-environment-profile",
      description: "Deletes an environment profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the environment profile is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the environment profile that is deleted",
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
      name: "delete-form-type",
      description: "Delets and metadata form type in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the metadata form type is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--form-type-identifier",
          description: "The ID of the metadata form type that is deleted",
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
      name: "delete-glossary",
      description: "Deletes a business glossary in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the business glossary is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the business glossary that is deleted",
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
      name: "delete-glossary-term",
      description: "Deletes a business glossary term in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the business glossary term is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the business glossary term that is deleted",
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
      name: "delete-listing",
      description: "Deletes a listing (a record of an asset at a given time)",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the listing to be deleted",
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
      description: "Deletes a project in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the project is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the project that is to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-deletion-check",
          description:
            "Specifies the optional flag to delete all child entities within the project",
        },
        {
          name: "--no-skip-deletion-check",
          description:
            "Specifies the optional flag to delete all child entities within the project",
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
      name: "delete-project-membership",
      description: "Deletes project membership in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where project membership is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--member",
          description: "The project member whose project membership is deleted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The ID of the Amazon DataZone project the membership to which is deleted",
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
      name: "delete-subscription-grant",
      description: "Deletes and subscription grant in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where the subscription grant is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription grant that is deleted",
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
      name: "delete-subscription-request",
      description: "Deletes a subscription request in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription request is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription request that is deleted",
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
      name: "delete-subscription-target",
      description: "Deletes a subscription target in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription target is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the Amazon DataZone environment in which the subscription target is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription target that is deleted",
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
      name: "delete-time-series-data-points",
      description:
        "Deletes the specified time series form for the specified asset",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain that houses the asset for which you want to delete a time series form",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the asset for which you want to delete a time series form",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset for which you want to delete a time series form",
          args: {
            name: "string",
          },
        },
        {
          name: "--form-name",
          description:
            "The name of the time series form that you want to delete",
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
      name: "get-asset",
      description: "Gets an Amazon DataZone asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain to which the asset belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the Amazon DataZone asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision of the Amazon DataZone asset",
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
      name: "get-asset-type",
      description: "Gets an Amazon DataZone asset type",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the asset type exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the asset type",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision of the asset type",
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
      name: "get-data-source",
      description: "Gets an Amazon DataZone data source",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the data source exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the Amazon DataZone data source",
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
      name: "get-data-source-run",
      description: "Gets an Amazon DataZone data source run",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain in which this data source run was performed",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the data source run",
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
      name: "get-domain",
      description: "Gets an Amazon DataZone domain",
      options: [
        {
          name: "--identifier",
          description: "The identifier of the specified Amazon DataZone domain",
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
      name: "get-environment",
      description: "Gets an Amazon DataZone environment",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where the environment exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the Amazon DataZone environment",
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
      name: "get-environment-blueprint",
      description: "Gets an Amazon DataZone blueprint",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the domain in which this blueprint exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of this Amazon DataZone blueprint",
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
      name: "get-environment-blueprint-configuration",
      description: "Gets the blueprint configuration in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where this blueprint exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description: "He ID of the blueprint",
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
      name: "get-environment-profile",
      description: "Gets an evinronment profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this environment profile exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the environment profile",
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
      name: "get-form-type",
      description: "Gets a metadata form type in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this metadata form type exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--form-type-identifier",
          description: "The ID of the metadata form type",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision of this metadata form type",
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
      name: "get-glossary",
      description: "Gets a business glossary in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this business glossary exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the business glossary",
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
      name: "get-glossary-term",
      description: "Gets a business glossary term in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this business glossary term exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the business glossary term",
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
      name: "get-group-profile",
      description: "Gets a group profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which the group profile exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-identifier",
          description: "The identifier of the group profile",
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
      name: "get-iam-portal-login-url",
      description:
        "Gets the data portal URL for the specified Amazon DataZone domain",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain the data portal of which you want to get",
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
      name: "get-listing",
      description: "Gets a listing (a record of an asset at a given time)",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--listing-revision",
          description: "The revision of the listing",
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
      name: "get-metadata-generation-run",
      description: "Gets a metadata generation run in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain the metadata generation run of which you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the metadata generation run",
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
      name: "get-project",
      description: "Gets a project in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the project exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
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
      name: "get-subscription",
      description: "Gets a subscription in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription",
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
      name: "get-subscription-grant",
      description: "Gets the subscription grant in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription grant exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription grant",
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
      name: "get-subscription-request-details",
      description: "Gets the details of the specified subscription request",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to get the subscription request details",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the subscription request the details of which to get",
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
      name: "get-subscription-target",
      description: "Gets the subscription target in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription target exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment associated with the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription target",
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
      name: "get-time-series-data-point",
      description: "Gets the existing data point for the asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain that houses the asset for which you want to get the data point",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the asset for which you want to get the data point",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset for which you want to get the data point",
          args: {
            name: "string",
          },
        },
        {
          name: "--form-name",
          description:
            "The name of the time series form that houses the data point that you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the data point that you want to get",
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
      name: "get-user-profile",
      description: "Gets a user profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain the data portal of which you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the user profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-identifier",
          description:
            "The identifier of the user for which you want to get the user profile",
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
      name: "list-asset-revisions",
      description: "Lists the revisions for the asset",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of revisions to return in a single call to ListAssetRevisions. When the number of revisions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAssetRevisions to list the next set of revisions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of revisions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of revisions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAssetRevisions to list the next set of revisions",
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
      name: "list-data-source-run-activities",
      description: "Lists data source run activities",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to list data source run activities",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the data source run",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of activities to return in a single call to ListDataSourceRunActivities. When the number of activities to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataSourceRunActivities to list the next set of activities",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of activities is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of activities, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataSourceRunActivities to list the next set of activities",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the data source run",
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
      name: "list-data-source-runs",
      description: "Lists data source runs in Amazon DataZone",
      options: [
        {
          name: "--data-source-identifier",
          description: "The identifier of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to invoke the ListDataSourceRuns action",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of runs to return in a single call to ListDataSourceRuns. When the number of runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataSourceRuns to list the next set of runs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataSourceRuns to list the next set of runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the data source",
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
      name: "list-data-sources",
      description: "Lists data sources in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to list the data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The identifier of the environment in which to list the data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of data sources to return in a single call to ListDataSources. When the number of data sources to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataSources to list the next set of data sources",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description: "The name of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of data sources is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data sources, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataSources to list the next set of data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The identifier of the project in which to list data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the data source",
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
      name: "list-domains",
      description: "Lists Amazon DataZone domains",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of domains to return in a single call to ListDomains. When the number of domains to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDomains to list the next set of domains",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of domains is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of domains, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDomains to list the next set of domains",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the data source",
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
      name: "list-environment-blueprint-configurations",
      description:
        "Lists blueprint configurations for a Amazon DataZone environment",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of blueprint configurations to return in a single call to ListEnvironmentBlueprintConfigurations. When the number of configurations to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentBlueprintConfigurations to list the next set of configurations",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of blueprint configurations is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of configurations, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentBlueprintConfigurations to list the next set of configurations",
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
      name: "list-environment-blueprints",
      description: "Lists blueprints in an Amazon DataZone environment",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed",
          description:
            "Specifies whether the environment blueprint is managed by Amazon DataZone",
        },
        {
          name: "--no-managed",
          description:
            "Specifies whether the environment blueprint is managed by Amazon DataZone",
        },
        {
          name: "--max-results",
          description:
            "The maximum number of blueprints to return in a single call to ListEnvironmentBlueprints. When the number of blueprints to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentBlueprints to list the next set of blueprints",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description: "The name of the Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of blueprints in the environment is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of blueprints in the environment, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentBlueprintsto list the next set of blueprints",
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
      name: "list-environment-profiles",
      description: "Lists Amazon DataZone environment profiles",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The identifier of the Amazon Web Services account where you want to list environment profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-region",
          description:
            "The Amazon Web Services region where you want to list environment profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description:
            "The identifier of the blueprint that was used to create the environment profiles that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of environment profiles to return in a single call to ListEnvironmentProfiles. When the number of environment profiles to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentProfiles to list the next set of environment profiles",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of environment profiles is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of environment profiles, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentProfiles to list the next set of environment profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description: "The identifier of the Amazon DataZone project",
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
      name: "list-environments",
      description: "Lists Amazon DataZone environments",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The identifier of the Amazon Web Services account where you want to list environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-region",
          description:
            "The Amazon Web Services region where you want to list environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description: "The identifier of the Amazon DataZone blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-profile-identifier",
          description: "The identifier of the environment profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of environments to return in a single call to ListEnvironments. When the number of environments to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironments to list the next set of environments",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description: "The name of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of environments is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of environments, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironments to list the next set of environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description: "The identifier of the Amazon DataZone project",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider",
          description: "The provider of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the environments that you want to list",
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
      name: "list-metadata-generation-runs",
      description: "Lists all metadata generation runs",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where you want to list metadata generation runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of metadata generation runs to return in a single call to ListMetadataGenerationRuns. When the number of metadata generation runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListMetadataGenerationRuns to list the next set of revisions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of metadata generation runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of metadata generation runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListMetadataGenerationRuns to list the next set of revisions",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the metadata generation runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the metadata generation runs",
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
      name: "list-notifications",
      description: "Lists all Amazon DataZone notifications",
      options: [
        {
          name: "--after-timestamp",
          description: "The time after which you want to list notifications",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--before-timestamp",
          description: "The time before which you want to list notifications",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of notifications to return in a single call to ListNotifications. When the number of notifications to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListNotifications to list the next set of notifications",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of notifications is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of notifications, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListNotifications to list the next set of notifications",
          args: {
            name: "string",
          },
        },
        {
          name: "--subjects",
          description: "The subjects of notifications",
          args: {
            name: "list",
          },
        },
        {
          name: "--task-status",
          description: "The task status of notifications",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of notifications",
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
      name: "list-project-memberships",
      description: "Lists all members of the specified project",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which you want to list project memberships",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of memberships to return in a single call to ListProjectMemberships. When the number of memberships to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListProjectMemberships to list the next set of memberships",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of memberships is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of memberships, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjectMemberships to list the next set of memberships",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The identifier of the project whose memberships you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The method by which you want to sort the project memberships",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order of the project memberships",
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
      name: "list-projects",
      description: "Lists Amazon DataZone projects",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-identifier",
          description: "The identifier of a group",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of projects to return in a single call to ListProjects. When the number of projects to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListProjects to list the next set of projects",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description: "The name of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of projects is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of projects, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjects to list the next set of projects",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-identifier",
          description: "The identifier of the Amazon DataZone user",
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
      name: "list-subscription-grants",
      description: "Lists subscription grants",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "The identifier of the Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of subscription grants to return in a single call to ListSubscriptionGrants. When the number of subscription grants to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptionGrants to list the next set of subscription grants",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of subscription grants is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscription grants, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptionGrants to list the next set of subscription grants",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies the way of sorting the results of this action",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description: "Specifies the sort order of this action",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscribed-listing-id",
          description: "The identifier of the subscribed listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-id",
          description: "The identifier of the subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-target-id",
          description: "The identifier of the subscription target",
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
      name: "list-subscription-requests",
      description: "Lists Amazon DataZone subscription requests",
      options: [
        {
          name: "--approver-project-id",
          description:
            "The identifier of the subscription request approver's project",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of subscription requests to return in a single call to ListSubscriptionRequests. When the number of subscription requests to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptionRequests to list the next set of subscription requests",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of subscription requests is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscription requests, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptionRequests to list the next set of subscription requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-id",
          description:
            "The identifier of the project for the subscription requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "Specifies the way to sort the results of this action",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies the sort order for the results of this action",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "Specifies the status of the subscription requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscribed-listing-id",
          description: "The identifier of the subscribed listing",
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
      name: "list-subscription-targets",
      description: "Lists subscription targets in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain where you want to list subscription targets",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The identifier of the environment where you want to list subscription targets",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of subscription targets to return in a single call to ListSubscriptionTargets. When the number of subscription targets to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptionTargets to list the next set of subscription targets",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of subscription targets is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscription targets, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptionTargets to list the next set of subscription targets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies the way in which the results of this action are to be sorted",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies the sort order for the results of this action",
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
      name: "list-subscriptions",
      description: "Lists subscriptions in Amazon DataZone",
      options: [
        {
          name: "--approver-project-id",
          description:
            "The identifier of the project for the subscription's approver",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of subscriptions to return in a single call to ListSubscriptions. When the number of subscriptions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptions to list the next set of Subscriptions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of subscriptions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscriptions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptions to list the next set of subscriptions",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-id",
          description: "The identifier of the owning project",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies the way in which the results of this action are to be sorted",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies the sort order for the results of this action",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the subscriptions that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscribed-listing-id",
          description:
            "The identifier of the subscribed listing for the subscriptions that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-request-identifier",
          description:
            "The identifier of the subscription request for the subscriptions that you want to list",
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
      name: "list-tags-for-resource",
      description: "Lists tags for the specified resource in Amazon DataZone",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource whose tags you want to list",
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
      name: "list-time-series-data-points",
      description: "Lists time series data points",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain that houses the assets for which you want to list time series data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--ended-at",
          description:
            "The timestamp at which the data points that you wanted to list ended",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the asset for which you want to list data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset for which you want to list data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--form-name",
          description: "The name of the time series data points form",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of data points to return in a single call to ListTimeSeriesDataPoints. When the number of data points to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListTimeSeriesDataPoints to list the next set of data points",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of data points is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data points, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListTimeSeriesDataPoints to list the next set of data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--started-at",
          description:
            "The timestamp at which the data points that you want to list started",
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
      name: "post-time-series-data-points",
      description:
        "Posts time series data points to Amazon DataZone for the specified asset",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which you want to post time series data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the asset for which you want to post time series data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset for which you want to post data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--forms",
          description:
            "The forms that contain the data points that you want to post",
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
      name: "put-environment-blueprint-configuration",
      description:
        "Writes the configuration for the specified environment blueprint in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--enabled-regions",
          description: "Specifies the enabled Amazon Web Services Regions",
          args: {
            name: "list",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description: "The identifier of the environment blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--manage-access-role-arn",
          description: "The ARN of the manage access role",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-role-arn",
          description: "The ARN of the provisioning role",
          args: {
            name: "string",
          },
        },
        {
          name: "--regional-parameters",
          description: "The regional parameters in the environment blueprint",
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
      name: "reject-predictions",
      description:
        "Rejects automatically generated business-friendly metadata for your Amazon DataZone assets",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the prediction",
          args: {
            name: "string",
          },
        },
        {
          name: "--reject-choices",
          description:
            "Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be rejected",
          args: {
            name: "list",
          },
        },
        {
          name: "--reject-rule",
          description:
            "Specifies the rule (or the conditions) under which a prediction can be rejected",
          args: {
            name: "structure",
          },
        },
        {
          name: "--revision",
          description: "The revision that is to be made to the asset",
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
      name: "reject-subscription-request",
      description: "Rejects the specified subscription request",
      options: [
        {
          name: "--decision-comment",
          description:
            "The decision comment of the rejected subscription request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which the subscription request was rejected",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the subscription request that was rejected",
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
      name: "revoke-subscription",
      description: "Revokes a specified subscription in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain where you want to revoke a subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the revoked subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--retain-permissions",
          description:
            "Specifies whether permissions are retained when the subscription is revoked",
        },
        {
          name: "--no-retain-permissions",
          description:
            "Specifies whether permissions are retained when the subscription is revoked",
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
      name: "search",
      description: "Searches for assets in Amazon DataZone",
      options: [
        {
          name: "--additional-attributes",
          description: "Specifies additional attributes for the Search action",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Specifies the search filters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to Search. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to Search to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to Search to list the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The identifier of the owning project specified for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-in",
          description: "The details of the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--search-scope",
          description: "The scope of the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description:
            "Specifies the way in which the search results are to be sorted",
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
      name: "search-group-profiles",
      description: "Searches group profiles in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which you want to search group profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-type",
          description: "The group type for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to SearchGroupProfiles. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to SearchGroupProfiles to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to SearchGroupProfiles to list the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
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
      name: "search-listings",
      description:
        "Searches listings (records of an asset at a given time) in Amazon DataZone",
      options: [
        {
          name: "--additional-attributes",
          description: "Specifies additional attributes for the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the domain in which to search listings",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Specifies the filters for the search of listings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to SearchListings. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to SearchListings to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to SearchListings to list the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-in",
          description: "The details of the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description: "Specifies the way for sorting the search results",
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
      name: "search-types",
      description: "Searches for types in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to invoke the SearchTypes action",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "The filters for the SearchTypes action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--managed",
          description: "Specifies whether the search is managed",
        },
        {
          name: "--no-managed",
          description: "Specifies whether the search is managed",
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to SearchTypes. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to SearchTypes to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to SearchTypes to list the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-in",
          description: "The details of the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--search-scope",
          description: "Specifies the scope of the search for types",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description: "The specifies the way to sort the SearchTypes results",
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
      name: "search-user-profiles",
      description: "Searches user profiles in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which you want to search user profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to SearchUserProfiles. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to SearchUserProfiles to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to SearchUserProfiles to list the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-type",
          description:
            "Specifies the user type for the SearchUserProfiles action",
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
      name: "start-data-source-run",
      description:
        "Start the run of the specified data source in Amazon DataZone",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-identifier",
          description: "The identifier of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to start a data source run",
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
      name: "start-metadata-generation-run",
      description: "Starts the metadata generation run",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where you want to start a metadata generation run",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The ID of the project that owns the asset for which you want to start a metadata generation run",
          args: {
            name: "string",
          },
        },
        {
          name: "--target",
          description:
            "The asset for which you want to start a metadata generation run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type",
          description: "The type of the metadata generation run",
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
      description: "Tags a resource in Amazon DataZone",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource to be tagged in Amazon DataZone",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Specifies the tags for the TagResource action",
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
      description: "Untags a resource in Amazon DataZone",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource to be untagged in Amazon DataZone",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Specifies the tag keys for the UntagResource action",
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
      name: "update-data-source",
      description: "Updates the specified data source in Amazon DataZone",
      options: [
        {
          name: "--asset-forms-input",
          description:
            "The asset forms to be updated as part of the UpdateDataSource action",
          args: {
            name: "list",
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration to be updated as part of the UpdateDataSource action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateDataSource action",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the domain in which to update a data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-setting",
          description:
            "The enable setting to be updated as part of the UpdateDataSource action",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the data source to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateDataSource action",
          args: {
            name: "string",
          },
        },
        {
          name: "--publish-on-import",
          description:
            "The publish on import setting to be updated as part of the UpdateDataSource action",
        },
        {
          name: "--no-publish-on-import",
          description:
            "The publish on import setting to be updated as part of the UpdateDataSource action",
        },
        {
          name: "--recommendation",
          description:
            "The recommendation to be updated as part of the UpdateDataSource action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schedule",
          description:
            "The schedule to be updated as part of the UpdateDataSource action",
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
      name: "update-domain",
      description: "Updates a Amazon DataZone domain",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateDomain action",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-execution-role",
          description:
            "The domain execution role to be updated as part of the UpdateDomain action",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The ID of the Amazon Web Services domain that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateDomain action",
          args: {
            name: "string",
          },
        },
        {
          name: "--single-sign-on",
          description:
            "The single sign-on option to be updated as part of the UpdateDomain action",
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
      name: "update-environment",
      description: "Updates the specified environment in Amazon DataZone",
      options: [
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateEnvironment action",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the domain in which the environment is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms to be updated as part of the UpdateEnvironment action",
          args: {
            name: "list",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the environment that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateEnvironment action",
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
      name: "update-environment-profile",
      description:
        "Updates the specified environment profile in Amazon DataZone",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account in which a specified environment profile is to be udpated",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-region",
          description:
            "The Amazon Web Services Region in which a specified environment profile is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateEnvironmentProfile action",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which an environment profile is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the environment profile that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateEnvironmentProfile action",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-parameters",
          description:
            "The user parameters to be updated as part of the UpdateEnvironmentProfile action",
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
      name: "update-glossary",
      description: "Updates the business glossary in Amazon DataZone",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateGlossary action",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a business glossary is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the business glossary to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateGlossary action",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status to be updated as part of the UpdateGlossary action",
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
      name: "update-glossary-term",
      description: "Updates a business glossary term in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a business glossary term is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-identifier",
          description:
            "The identifier of the business glossary in which a term is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the business glossary term that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--long-description",
          description:
            "The long description to be updated as part of the UpdateGlossaryTerm action",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateGlossaryTerm action",
          args: {
            name: "string",
          },
        },
        {
          name: "--short-description",
          description:
            "The short description to be updated as part of the UpdateGlossaryTerm action",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status to be updated as part of the UpdateGlossaryTerm action",
          args: {
            name: "string",
          },
        },
        {
          name: "--term-relations",
          description:
            "The term relations to be updated as part of the UpdateGlossaryTerm action",
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
      name: "update-group-profile",
      description: "Updates the specified group profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a group profile is updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-identifier",
          description: "The identifier of the group profile that is updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the group profile that is updated",
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
      name: "update-project",
      description: "Updates the specified project in Amazon DataZone",
      options: [
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateProject action",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a project is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms to be updated as part of the UpdateProject action",
          args: {
            name: "list",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the project that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateProject action",
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
      name: "update-subscription-grant-status",
      description:
        "Updates the status of the specified subscription grant status in Amazon DataZone",
      options: [
        {
          name: "--asset-identifier",
          description:
            "The identifier of the asset the subscription grant status of which is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a subscription grant status is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--failure-cause",
          description:
            "Specifies the error message that is returned if the operation cannot be successfully completed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the subscription grant the status of which is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status to be updated as part of the UpdateSubscriptionGrantStatus action",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-name",
          description:
            "The target name to be updated as part of the UpdateSubscriptionGrantStatus action",
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
      name: "update-subscription-request",
      description:
        "Updates a specified subscription request in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a subscription request is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the subscription request that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-reason",
          description: "The reason for the UpdateSubscriptionRequest action",
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
      name: "update-subscription-target",
      description:
        "Updates the specified subscription target in Amazon DataZone",
      options: [
        {
          name: "--applicable-asset-types",
          description:
            "The applicable asset types to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "list",
          },
        },
        {
          name: "--authorized-principals",
          description:
            "The authorized principals to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a subscription target is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The identifier of the environment in which a subscription target is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "Identifier of the subscription target that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--manage-access-role",
          description:
            "The manage access role to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider",
          description:
            "The provider to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-target-config",
          description:
            "The configuration to be updated as part of the UpdateSubscriptionTarget action",
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
      name: "update-user-profile",
      description: "Updates the specified user profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a user profile is updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the user profile that are to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the user profile that are to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-identifier",
          description:
            "The identifier of the user whose user profile is to be updated",
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
