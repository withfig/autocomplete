const completionSpec: Fig.Spec = {
  name: "servicecatalog",
  description:
    "AWS Service Catalog  AWS Service Catalog enables organizations to create and manage catalogs of IT services that are approved for AWS. To get the most out of this documentation, you should be familiar with the terminology discussed in AWS Service Catalog Concepts.",
  subcommands: [
    {
      name: "accept-portfolio-share",
      description: "Accepts an offer to share the specified portfolio.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-share-type",
          description:
            'The type of shared portfolios to accept. The default is to accept imported portfolios.    AWS_ORGANIZATIONS - Accept portfolios shared by the management account of your organization.    IMPORTED - Accept imported portfolios.    AWS_SERVICECATALOG - Not supported. (Throws ResourceNotFoundException.)   For example, aws servicecatalog accept-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS',
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
      name: "associate-budget-with-resource",
      description:
        "Associates the specified budget with the specified resource.",
      options: [
        {
          name: "--budget-name",
          description: "The name of the budget you want to associate.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The resource identifier. Either a portfolio-id or a product-id.",
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
      name: "associate-principal-with-portfolio",
      description:
        "Associates the specified principal ARN with the specified portfolio.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description: "The ARN of the principal (IAM user, role, or group).",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-type",
          description: "The principal type. The supported value is IAM.",
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
      name: "associate-product-with-portfolio",
      description:
        "Associates the specified product with the specified portfolio. A delegated admin is authorized to invoke this command.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-portfolio-id",
          description: "The identifier of the source portfolio.",
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
      name: "associate-service-action-with-provisioning-artifact",
      description:
        "Associates a self-service action with a provisioning artifact.",
      options: [
        {
          name: "--product-id",
          description:
            "The product identifier. For example, prod-abcdzk7xy33qa.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description:
            "The identifier of the provisioning artifact. For example, pa-4abcdjnxjj6ne.",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-action-id",
          description:
            "The self-service action identifier. For example, act-fs7abcd89wxyz.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
      name: "associate-tag-option-with-resource",
      description:
        "Associate the specified TagOption with the specified portfolio or product.",
      options: [
        {
          name: "--resource-id",
          description: "The resource identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-option-id",
          description: "The TagOption identifier.",
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
      name: "batch-associate-service-action-with-provisioning-artifact",
      description:
        "Associates multiple self-service actions with provisioning artifacts.",
      options: [
        {
          name: "--service-action-associations",
          description:
            "One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.",
          args: {
            name: "list",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
      name: "batch-disassociate-service-action-from-provisioning-artifact",
      description:
        "Disassociates a batch of self-service actions from the specified provisioning artifact.",
      options: [
        {
          name: "--service-action-associations",
          description:
            "One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.",
          args: {
            name: "list",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
      name: "copy-product",
      description:
        "Copies the specified source product to the specified target product or a new product. You can copy a product to the same account or another account. You can copy a product to the same region or another region. This operation is performed asynchronously. To track the progress of the operation, use DescribeCopyProductStatus.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-product-arn",
          description: "The Amazon Resource Name (ARN) of the source product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-product-id",
          description:
            "The identifier of the target product. By default, a new product is created.",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-product-name",
          description:
            "A name for the target product. The default is the name of the source product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-provisioning-artifact-identifiers",
          description:
            "The identifiers of the provisioning artifacts (also known as versions) of the product to copy. By default, all provisioning artifacts are copied.",
          args: {
            name: "list",
          },
        },
        {
          name: "--copy-options",
          description:
            "The copy options. If the value is CopyTags, the tags from the source product are copied to the target product.",
          args: {
            name: "list",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.",
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
      name: "create-constraint",
      description:
        "Creates a constraint. A delegated admin is authorized to invoke this command.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            'The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:  LAUNCH  You are required to specify either the RoleArn or the LocalRoleName but can\'t use both. Specify the RoleArn property as follows:  {"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}  Specify the LocalRoleName property as follows:  {"LocalRoleName": "SCBasicLaunchRole"}  If you specify the LocalRoleName property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be account-agnostic so the administrator can create fewer resources per shared account.  The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.  You cannot have both a LAUNCH and a STACKSET constraint. You also cannot have more than one LAUNCH constraint on a product and portfolio.  NOTIFICATION  Specify the NotificationArns property as follows:  {"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]}   RESOURCE_UPDATE  Specify the TagUpdatesOnProvisionedProduct property as follows:  {"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}}  The TagUpdatesOnProvisionedProduct property accepts a string value of ALLOWED or NOT_ALLOWED.  STACKSET  Specify the Parameters property as follows:  {"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}}  You cannot have both a LAUNCH and a STACKSET constraint. You also cannot have more than one STACKSET constraint on a product and portfolio. Products with a STACKSET constraint will launch an AWS CloudFormation stack set.  TEMPLATE  Specify the Rules property. For more information, see Template Constraint Rules.',
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of constraint.    LAUNCH     NOTIFICATION     RESOURCE_UPDATE     STACKSET     TEMPLATE",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the constraint.",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.",
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
      name: "create-portfolio",
      description:
        "Creates a portfolio. A delegated admin is authorized to invoke this command.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The name to use for display purposes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the portfolio.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The name of the portfolio provider.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "One or more tags.",
          args: {
            name: "list",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.",
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
      name: "create-portfolio-share",
      description:
        "Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account. Note that if a delegated admin is de-registered, they can no longer create portfolio shares.  AWSOrganizationsAccess must be enabled in order to create a portfolio share to an organization node. You can't share a shared resource, including portfolios that contain a shared product. If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the  UpdatePortfolioShare API instead.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description: "The AWS account ID. For example, 123456789012.",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-node",
          description:
            "The organization node to whom you are going to share. If OrganizationNode is passed in, PortfolioShare will be created for the node an ListOrganizationPortfolioAccessd its children (when applies), and a PortfolioShareToken will be returned in the output in order for the administrator to monitor the status of the PortfolioShare creation process.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--share-tag-options",
          description:
            "Enables or disables TagOptions  sharing when creating the portfolio share. If this flag is not provided, TagOptions sharing is disabled.",
        },
        {
          name: "--no-share-tag-options",
          description:
            "Enables or disables TagOptions  sharing when creating the portfolio share. If this flag is not provided, TagOptions sharing is disabled.",
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
      name: "create-product",
      description:
        "Creates a product. A delegated admin is authorized to invoke this command. The user or role that performs this operation must have the cloudformation:GetTemplate IAM policy permission. This policy permission is required when using the ImportFromPhysicalId template source in the information data section.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--owner",
          description: "The owner of the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--distributor",
          description: "The distributor of the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--support-description",
          description: "The support information about the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--support-email",
          description: "The contact email for product support.",
          args: {
            name: "string",
          },
        },
        {
          name: "--support-url",
          description:
            "The contact URL for product support.  ^https?:\\/\\// / is the pattern used to validate SupportUrl.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-type",
          description: "The type of product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "One or more tags.",
          args: {
            name: "list",
          },
        },
        {
          name: "--provisioning-artifact-parameters",
          description: "The configuration of the provisioning artifact.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.",
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
      name: "create-provisioned-product-plan",
      description:
        "Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed. You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED. To view the resource changes in the change set, use DescribeProvisionedProductPlan. To create or modify the provisioned product, use ExecuteProvisionedProductPlan.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--plan-name",
          description: "The name of the plan.",
          args: {
            name: "string",
          },
        },
        {
          name: "--plan-type",
          description: "The plan type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-arns",
          description:
            "Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.",
          args: {
            name: "list",
          },
        },
        {
          name: "--path-id",
          description:
            "The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-name",
          description:
            "A user-friendly name for the provisioned product. This value must be unique for the AWS account and cannot be updated after the product is provisioned.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description: "The identifier of the provisioning artifact.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-parameters",
          description:
            "Parameters specified by the administrator that are required for provisioning the product.",
          args: {
            name: "list",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "One or more tags. If the plan is for an existing provisioned product, the product must have a RESOURCE_UPDATE constraint with TagUpdatesOnProvisionedProduct set to ALLOWED to allow tag updates.",
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
      name: "create-provisioning-artifact",
      description:
        "Creates a provisioning artifact (also known as a version) for the specified product. You cannot create a provisioning artifact for a product that was shared with you. The user or role that performs this operation must have the cloudformation:GetTemplate IAM policy permission. This policy permission is required when using the ImportFromPhysicalId template source in the information data section.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description: "The configuration for the provisioning artifact.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.",
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
      name: "create-service-action",
      description: "Creates a self-service action.",
      options: [
        {
          name: "--name",
          description: "The self-service action name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition-type",
          description:
            "The service action definition type. For example, SSM_AUTOMATION.",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            'The self-service action definition. Can be one of the following:  Name  The name of the AWS Systems Manager document (SSM document). For example, AWS-RestartEC2Instance. If you are using a shared SSM document, you must provide the ARN instead of the name.  Version  The AWS Systems Manager automation document version. For example, "Version": "1"   AssumeRole  The Amazon Resource Name (ARN) of the role that performs the self-service actions on your behalf. For example, "AssumeRole": "arn:aws:iam::12345678910:role/ActionRole". To reuse the provisioned product launch role, set to "AssumeRole": "LAUNCH_ROLE".  Parameters  The list of parameters in JSON format. For example: [{\\"Name\\":\\"InstanceId\\",\\"Type\\":\\"TARGET\\"}] or [{\\"Name\\":\\"InstanceId\\",\\"Type\\":\\"TEXT_VALUE\\"}].',
          args: {
            name: "map",
          },
        },
        {
          name: "--description",
          description: "The self-service action description.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.",
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
      name: "create-tag-option",
      description: "Creates a TagOption.",
      options: [
        {
          name: "--key",
          description: "The TagOption key.",
          args: {
            name: "string",
          },
        },
        {
          name: "--value",
          description: "The TagOption value.",
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
      name: "delete-constraint",
      description:
        "Deletes the specified constraint. A delegated admin is authorized to invoke this command.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The identifier of the constraint.",
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
      name: "delete-portfolio",
      description:
        "Deletes the specified portfolio. You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts. A delegated admin is authorized to invoke this command.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The portfolio identifier.",
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
      name: "delete-portfolio-share",
      description:
        "Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator. Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-node",
          description:
            "The organization node to whom you are going to stop sharing.",
          args: {
            name: "structure",
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
      name: "delete-product",
      description:
        "Deletes the specified product. You cannot delete a product if it was shared with you or is associated with a portfolio. A delegated admin is authorized to invoke this command.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The product identifier.",
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
      name: "delete-provisioned-product-plan",
      description: "Deletes the specified plan.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--plan-id",
          description: "The plan identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ignore-errors",
          description:
            "If set to true, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.",
        },
        {
          name: "--no-ignore-errors",
          description:
            "If set to true, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.",
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
      name: "delete-provisioning-artifact",
      description:
        "Deletes the specified provisioning artifact (also known as a version) for the specified product. You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description: "The identifier of the provisioning artifact.",
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
      name: "delete-service-action",
      description: "Deletes a self-service action.",
      options: [
        {
          name: "--id",
          description:
            "The self-service action identifier. For example, act-fs7abcd89wxyz.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
      name: "delete-tag-option",
      description:
        "Deletes the specified TagOption. You cannot delete a TagOption if it is associated with a product or portfolio.",
      options: [
        {
          name: "--id",
          description: "The TagOption identifier.",
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
      name: "describe-constraint",
      description: "Gets information about the specified constraint.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The identifier of the constraint.",
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
      name: "describe-copy-product-status",
      description: "Gets the status of the specified copy product operation.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-product-token",
          description:
            "The token for the copy product operation. This token is returned by CopyProduct.",
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
      name: "describe-portfolio",
      description:
        "Gets information about the specified portfolio. A delegated admin is authorized to invoke this command.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The portfolio identifier.",
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
      name: "describe-portfolio-share-status",
      description:
        "Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.",
      options: [
        {
          name: "--portfolio-share-token",
          description:
            "The token for the portfolio share operation. This token is returned either by CreatePortfolioShare or by DeletePortfolioShare.",
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
      name: "describe-portfolio-shares",
      description:
        "Returns a summary of each of the portfolio shares that were created for the specified portfolio. You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share. The PortfolioId and Type parameters are both required.",
      options: [
        {
          name: "--portfolio-id",
          description:
            "The unique identifier of the portfolio for which shares will be retrieved.",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of portfolio share to summarize. This field acts as a filter on the type of portfolio share, which can be one of the following: 1. ACCOUNT - Represents an external account to account share. 2. ORGANIZATION - Represents a share to an organization. This share is available to every account in the organization. 3. ORGANIZATIONAL_UNIT - Represents a share to an organizational unit. 4. ORGANIZATION_MEMBER_ACCOUNT - Represents a share to an account in the organization.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description: "The maximum number of items to return with this call.",
          args: {
            name: "integer",
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
      name: "describe-product",
      description: "Gets information about the specified product.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The product name.",
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
      name: "describe-product-as-admin",
      description:
        "Gets information about the specified product. This operation is run with administrator access.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The product name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-portfolio-id",
          description:
            "The unique identifier of the shared portfolio that the specified product is associated with. You can provide this parameter to retrieve the shared TagOptions associated with the product. If this parameter is provided and if TagOptions sharing is enabled in the portfolio share, the API returns both local and shared TagOptions associated with the product. Otherwise only local TagOptions will be returned.",
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
      name: "describe-product-view",
      description: "Gets information about the specified product.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The product view identifier.",
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
      name: "describe-provisioned-product",
      description: "Gets information about the specified provisioned product.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The provisioned product identifier. You must provide the name or ID, but not both. If you do not provide a name or ID, or you provide both name and ID, an InvalidParametersException will occur.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the provisioned product. You must provide the name or ID, but not both. If you do not provide a name or ID, or you provide both name and ID, an InvalidParametersException will occur.",
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
      name: "describe-provisioned-product-plan",
      description:
        "Gets information about the resource changes for the specified plan.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--plan-id",
          description: "The plan identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description: "The maximum number of items to return with this call.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
      name: "describe-provisioning-artifact",
      description:
        "Gets information about the specified provisioning artifact (also known as a version) for the specified product.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description: "The identifier of the provisioning artifact.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-name",
          description: "The provisioning artifact name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-name",
          description: "The product name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--verbose",
          description:
            "Indicates whether a verbose level of detail is enabled.",
        },
        {
          name: "--no-verbose",
          description:
            "Indicates whether a verbose level of detail is enabled.",
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
      name: "describe-provisioning-parameters",
      description:
        'Gets information about the configuration required to provision the specified product using the specified provisioning artifact. If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to ProvisionProduct, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[N]:Value". Tag the provisioned product with the value sc-tagoption-conflict-portfolioId-productId.',
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description:
            "The product identifier. You must provide the product name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-name",
          description:
            "The name of the product. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description:
            "The identifier of the provisioning artifact. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-name",
          description:
            "The name of the provisioning artifact. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--path-id",
          description:
            "The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--path-name",
          description:
            "The name of the path. You must provide the name or ID, but not both.",
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
      name: "describe-record",
      description:
        "Gets information about the specified request operation. Use this operation after calling a request operation (for example, ProvisionProduct, TerminateProvisionedProduct, or UpdateProvisionedProduct).   If a provisioned product was transferred to a new owner using UpdateProvisionedProductProperties, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use ListRecordHistory to see the product's history from when he was the owner.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The record identifier of the provisioned product. This identifier is returned by the request operation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description: "The maximum number of items to return with this call.",
          args: {
            name: "integer",
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
      name: "describe-service-action",
      description: "Describes a self-service action.",
      options: [
        {
          name: "--id",
          description: "The self-service action identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
      name: "describe-service-action-execution-parameters",
      description:
        "Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.",
      options: [
        {
          name: "--provisioned-product-id",
          description: "The identifier of the provisioned product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-action-id",
          description: "The self-service action identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
      name: "describe-tag-option",
      description: "Gets information about the specified TagOption.",
      options: [
        {
          name: "--id",
          description: "The TagOption identifier.",
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
      name: "disable-aws-organizations-access",
      description:
        "Disable portfolio sharing through AWS Organizations feature. This feature will not delete your current shares but it will prevent you from creating new shares throughout your organization. Current shares will not be in sync with your organization structure if it changes after calling this API. This API can only be called by the management account in the organization. This API can't be invoked if there are active delegated administrators in the organization. Note that a delegated administrator is not authorized to invoke DisableAWSOrganizationsAccess.",
      options: [
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
      name: "disassociate-budget-from-resource",
      description:
        "Disassociates the specified budget from the specified resource.",
      options: [
        {
          name: "--budget-name",
          description: "The name of the budget you want to disassociate.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The resource identifier you want to disassociate from. Either a portfolio-id or a product-id.",
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
      name: "disassociate-principal-from-portfolio",
      description:
        "Disassociates a previously associated principal ARN from a specified portfolio.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description: "The ARN of the principal (IAM user, role, or group).",
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
      name: "disassociate-product-from-portfolio",
      description:
        "Disassociates the specified product from the specified portfolio.  A delegated admin is authorized to invoke this command.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
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
      name: "disassociate-service-action-from-provisioning-artifact",
      description:
        "Disassociates the specified self-service action association from the specified provisioning artifact.",
      options: [
        {
          name: "--product-id",
          description:
            "The product identifier. For example, prod-abcdzk7xy33qa.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description:
            "The identifier of the provisioning artifact. For example, pa-4abcdjnxjj6ne.",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-action-id",
          description:
            "The self-service action identifier. For example, act-fs7abcd89wxyz.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
      name: "disassociate-tag-option-from-resource",
      description:
        "Disassociates the specified TagOption from the specified resource.",
      options: [
        {
          name: "--resource-id",
          description: "The resource identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-option-id",
          description: "The TagOption identifier.",
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
      name: "enable-aws-organizations-access",
      description:
        "Enable portfolio sharing feature through AWS Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization. By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure. Note that a delegated administrator is not authorized to invoke EnableAWSOrganizationsAccess.",
      options: [
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
      name: "execute-provisioned-product-plan",
      description:
        "Provisions or modifies a product based on the resource changes for the specified plan.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--plan-id",
          description: "The plan identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.",
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
      name: "execute-provisioned-product-service-action",
      description:
        "Executes a self-service action against a provisioned product.",
      options: [
        {
          name: "--provisioned-product-id",
          description: "The identifier of the provisioned product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-action-id",
          description:
            "The self-service action identifier. For example, act-fs7abcd89wxyz.",
          args: {
            name: "string",
          },
        },
        {
          name: "--execute-token",
          description:
            "An idempotency token that uniquely identifies the execute request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "A map of all self-service action parameters and their values. If a provided parameter is of a special type, such as TARGET, the provided value will override the default value generated by AWS Service Catalog. If the parameters field is not provided, no additional parameters are passed and default values will be used for any special parameters such as TARGET.",
          args: {
            name: "map",
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
      name: "get-aws-organizations-access-status",
      description:
        "Get the Access Status for AWS Organization portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.",
      options: [
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
      name: "get-provisioned-product-outputs",
      description:
        "This API takes either a ProvisonedProductId or a ProvisionedProductName, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-id",
          description:
            "The identifier of the provisioned product that you want the outputs from.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-name",
          description:
            "The name of the provisioned product that you want the outputs from.",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-keys",
          description:
            "The list of keys that the API should return with their values. If none are provided, the API will return all outputs of the provisioned product.",
          args: {
            name: "list",
          },
        },
        {
          name: "--page-size",
          description: "The maximum number of items to return with this call.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
      name: "import-as-provisioned-product",
      description:
        "Requests the import of a resource as a Service Catalog provisioned product that is associated to a Service Catalog product and provisioning artifact. Once imported, all supported Service Catalog governance actions are supported on the provisioned product. Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and non-root nested stacks are not supported. The CloudFormation stack must have one of the following statuses to be imported: CREATE_COMPLETE, UPDATE_COMPLETE, UPDATE_ROLLBACK_COMPLETE, IMPORT_COMPLETE, IMPORT_ROLLBACK_COMPLETE. Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact.  The user or role that performs this operation must have the cloudformation:GetTemplate and cloudformation:DescribeStacks IAM policy permissions.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description: "The identifier of the provisioning artifact.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-name",
          description:
            "The user-friendly name of the provisioned product. The value must be unique for the AWS account. The name cannot be updated after the product is provisioned.",
          args: {
            name: "string",
          },
        },
        {
          name: "--physical-id",
          description:
            "The unique identifier of the resource to be imported. It only currently supports CloudFormation stack IDs.",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.",
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
      name: "list-accepted-portfolio-shares",
      description:
        "Lists all portfolios for which sharing was accepted by this account.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--portfolio-share-type",
          description:
            "The type of shared portfolios to list. The default is to list imported portfolios.    AWS_ORGANIZATIONS - List portfolios shared by the management account of your organization    AWS_SERVICECATALOG - List default portfolios    IMPORTED - List imported portfolios",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-budgets-for-resource",
      description:
        "Lists all the budgets associated to the specified resource.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The resource identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description: "The maximum number of items to return with this call.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
      name: "list-constraints-for-portfolio",
      description:
        "Lists the constraints for the specified portfolio and product.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-launch-paths",
      description:
        "Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-organization-portfolio-access",
      description:
        "Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin. If a delegated admin is de-registered, they can no longer perform this operation.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description:
            "The portfolio identifier. For example, port-2abcdext3y5fk.",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-node-type",
          description:
            "The organization node type that will be returned in the output.    ORGANIZATION - Organization that has access to the portfolio.     ORGANIZATIONAL_UNIT - Organizational unit that has access to the portfolio within your organization.    ACCOUNT - Account that has access to the portfolio within your organization.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-portfolio-access",
      description:
        "Lists the account IDs that have access to the specified portfolio. A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-parent-id",
          description:
            "The ID of an organization node the portfolio is shared with. All children of this node with an inherited portfolio share will be returned.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description: "The maximum number of items to return with this call.",
          args: {
            name: "integer",
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
      name: "list-portfolios",
      description: "Lists all portfolios in the catalog.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-portfolios-for-product",
      description:
        "Lists all portfolios that the specified product is associated with.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-principals-for-portfolio",
      description:
        "Lists all principal ARNs associated with the specified portfolio.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-provisioned-product-plans",
      description:
        "Lists the plans for the specified provisioned product or all plans to which the user has access.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--provision-product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-level-filter",
          description:
            "The access level to use to obtain results. The default is User.",
          args: {
            name: "structure",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-provisioning-artifacts",
      description:
        "Lists all provisioning artifacts (also known as versions) for the specified product.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
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
      name: "list-provisioning-artifacts-for-service-action",
      description:
        "Lists all provisioning artifacts (also known as versions) for the specified self-service action.",
      options: [
        {
          name: "--service-action-id",
          description:
            "The self-service action identifier. For example, act-fs7abcd89wxyz.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-record-history",
      description: "Lists the specified requests or all performed requests.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-level-filter",
          description:
            "The access level to use to obtain results. The default is User.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-filter",
          description: "The search filter to scope the results.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-resources-for-tag-option",
      description:
        "Lists the resources associated with the specified TagOption.",
      options: [
        {
          name: "--tag-option-id",
          description: "The TagOption identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "The resource type.    Portfolio     Product",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-service-actions",
      description: "Lists all self-service actions.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-service-actions-for-provisioning-artifact",
      description:
        "Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.",
      options: [
        {
          name: "--product-id",
          description:
            "The product identifier. For example, prod-abcdzk7xy33qa.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description:
            "The identifier of the provisioning artifact. For example, pa-4abcdjnxjj6ne.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-stack-instances-for-provisioned-product",
      description:
        "Returns summary information about stack instances that are associated with the specified CFN_STACKSET type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-id",
          description: "The identifier of the provisioned product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description: "The maximum number of items to return with this call.",
          args: {
            name: "integer",
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
      name: "list-tag-options",
      description: "Lists the specified TagOptions or all TagOptions.",
      options: [
        {
          name: "--filters",
          description:
            "The search filters. If no search filters are specified, the output includes all TagOptions.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "provision-product",
      description:
        'Provisions the specified product. A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using DescribeRecord. If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[N]:Value".',
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description:
            "The product identifier. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-name",
          description:
            "The name of the product. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description:
            "The identifier of the provisioning artifact. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-name",
          description:
            "The name of the provisioning artifact. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--path-id",
          description:
            "The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--path-name",
          description:
            "The name of the path. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-name",
          description:
            "A user-friendly name for the provisioned product. This value must be unique for the AWS account and cannot be updated after the product is provisioned.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-parameters",
          description:
            "Parameters specified by the administrator that are required for provisioning the product.",
          args: {
            name: "list",
          },
        },
        {
          name: "--provisioning-preferences",
          description:
            "An object that contains information about the provisioning preferences for a stack set.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "One or more tags.",
          args: {
            name: "list",
          },
        },
        {
          name: "--notification-arns",
          description:
            "Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.",
          args: {
            name: "list",
          },
        },
        {
          name: "--provision-token",
          description:
            "An idempotency token that uniquely identifies the provisioning request.",
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
      name: "reject-portfolio-share",
      description: "Rejects an offer to share the specified portfolio.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-share-type",
          description:
            'The type of shared portfolios to reject. The default is to reject imported portfolios.    AWS_ORGANIZATIONS - Reject portfolios shared by the management account of your organization.    IMPORTED - Reject imported portfolios.    AWS_SERVICECATALOG - Not supported. (Throws ResourceNotFoundException.)   For example, aws servicecatalog reject-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS',
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
      name: "scan-provisioned-products",
      description:
        "Lists the provisioned products that are available (not terminated). To use additional filtering, see SearchProvisionedProducts.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-level-filter",
          description:
            "The access level to use to obtain results. The default is User.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "search-products",
      description:
        "Gets information about the products to which the caller has access.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The search filters. If no search filters are specified, the output includes all products to which the caller has access.",
          args: {
            name: "map",
          },
        },
        {
          name: "--page-size",
          description: "The maximum number of items to return with this call.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description:
            "The sort field. If no value is specified, the results are not sorted.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order. If no value is specified, the results are not sorted.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
      name: "search-products-as-admin",
      description:
        "Gets information about the products for the specified portfolio or all products.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The search filters. If no search filters are specified, the output includes all products to which the administrator has access.",
          args: {
            name: "map",
          },
        },
        {
          name: "--sort-by",
          description:
            "The sort field. If no value is specified, the results are not sorted.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order. If no value is specified, the results are not sorted.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--product-source",
          description: "Access level of the source of the product.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "search-provisioned-products",
      description:
        "Gets information about the provisioned products that meet the specified criteria.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-level-filter",
          description:
            "The access level to use to obtain results. The default is User.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            'The search filters. When the key is SearchQuery, the searchable fields are arn, createdTime, id, lastRecordId, idempotencyToken, name, physicalId, productId, provisioningArtifact, type, status, tags, userArn, userArnSession, lastProvisioningRecordId, lastSuccessfulProvisioningRecordId, productName, and provisioningArtifactName. Example: "SearchQuery":["status:AVAILABLE"]',
          args: {
            name: "map",
          },
        },
        {
          name: "--sort-by",
          description:
            "The sort field. If no value is specified, the results are not sorted. The valid values are arn, id, name, and lastRecordId.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order. If no value is specified, the results are not sorted.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description: "The maximum number of items to return with this call.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-token",
          description:
            "The page token for the next set of results. To retrieve the first set of results, use null.",
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
      name: "terminate-provisioned-product",
      description:
        "Terminates the specified provisioned product. This operation does not delete any records associated with the provisioned product. You can check the status of this request using DescribeRecord.",
      options: [
        {
          name: "--provisioned-product-name",
          description:
            "The name of the provisioned product. You cannot specify both ProvisionedProductName and ProvisionedProductId.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-id",
          description:
            "The identifier of the provisioned product. You cannot specify both ProvisionedProductName and ProvisionedProductId.",
          args: {
            name: "string",
          },
        },
        {
          name: "--terminate-token",
          description:
            "An idempotency token that uniquely identifies the termination request. This token is only valid during the termination process. After the provisioned product is terminated, subsequent requests to terminate the same provisioned product always return ResourceNotFound.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ignore-errors",
          description:
            "If set to true, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.",
        },
        {
          name: "--no-ignore-errors",
          description:
            "If set to true, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.",
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--retain-physical-resources",
          description:
            "When this boolean parameter is set to true, the TerminateProvisionedProduct API deletes the Service Catalog provisioned product. However, it does not remove the CloudFormation stack, stack set, or the underlying resources of the deleted provisioned product. The default value is false.",
        },
        {
          name: "--no-retain-physical-resources",
          description:
            "When this boolean parameter is set to true, the TerminateProvisionedProduct API deletes the Service Catalog provisioned product. However, it does not remove the CloudFormation stack, stack set, or the underlying resources of the deleted provisioned product. The default value is false.",
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
      name: "update-constraint",
      description: "Updates the specified constraint.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The identifier of the constraint.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated description of the constraint.",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            'The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:  LAUNCH  You are required to specify either the RoleArn or the LocalRoleName but can\'t use both. Specify the RoleArn property as follows:  {"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}  Specify the LocalRoleName property as follows:  {"LocalRoleName": "SCBasicLaunchRole"}  If you specify the LocalRoleName property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be account-agnostic so the administrator can create fewer resources per shared account.  The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.  You cannot have both a LAUNCH and a STACKSET constraint. You also cannot have more than one LAUNCH constraint on a product and portfolio.  NOTIFICATION  Specify the NotificationArns property as follows:  {"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]}   RESOURCE_UPDATE  Specify the TagUpdatesOnProvisionedProduct property as follows:  {"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}}  The TagUpdatesOnProvisionedProduct property accepts a string value of ALLOWED or NOT_ALLOWED.  STACKSET  Specify the Parameters property as follows:  {"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}}  You cannot have both a LAUNCH and a STACKSET constraint. You also cannot have more than one STACKSET constraint on a product and portfolio. Products with a STACKSET constraint will launch an AWS CloudFormation stack set.  TEMPLATE  Specify the Rules property. For more information, see Template Constraint Rules.',
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
      name: "update-portfolio",
      description:
        "Updates the specified portfolio. You cannot update a product that was shared with you.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The portfolio identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The name to use for display purposes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated description of the portfolio.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The updated name of the portfolio provider.",
          args: {
            name: "string",
          },
        },
        {
          name: "--add-tags",
          description: "The tags to add.",
          args: {
            name: "list",
          },
        },
        {
          name: "--remove-tags",
          description: "The tags to remove.",
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
      name: "update-portfolio-share",
      description:
        "Updates the specified portfolio share. You can use this API to enable or disable TagOptions sharing for an existing portfolio share.  The portfolio share cannot be updated if the  CreatePortfolioShare operation is IN_PROGRESS, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED. You must provide the accountId or organization node in the input, but not both. If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke UpdatePortfolioShare separately for each share type.  This API cannot be used for removing the portfolio share. You must use DeletePortfolioShare API for that action.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--portfolio-id",
          description:
            "The unique identifier of the portfolio for which the share will be updated.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description:
            "The AWS Account Id of the recipient account. This field is required when updating an external account to account type share.",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-node",
          description: "Information about the organization node.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--share-tag-options",
          description:
            "A flag to enable or disable TagOptions sharing for the portfolio share. If this field is not provided, the current state of TagOptions sharing on the portfolio share will not be modified.",
        },
        {
          name: "--no-share-tag-options",
          description:
            "A flag to enable or disable TagOptions sharing for the portfolio share. If this field is not provided, the current state of TagOptions sharing on the portfolio share will not be modified.",
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
      name: "update-product",
      description: "Updates the specified product.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The updated product name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--owner",
          description: "The updated owner of the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated description of the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--distributor",
          description: "The updated distributor of the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--support-description",
          description: "The updated support description for the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--support-email",
          description: "The updated support email for the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--support-url",
          description: "The updated support URL for the product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--add-tags",
          description: "The tags to add to the product.",
          args: {
            name: "list",
          },
        },
        {
          name: "--remove-tags",
          description: "The tags to remove from the product.",
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
      name: "update-provisioned-product",
      description:
        "Requests updates to the configuration of the specified provisioned product. If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely. You can check the status of this request using DescribeRecord.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-name",
          description:
            "The name of the provisioned product. You cannot specify both ProvisionedProductName and ProvisionedProductId.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-id",
          description:
            "The identifier of the provisioned product. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description:
            "The identifier of the product. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-name",
          description:
            "The name of the product. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description: "The identifier of the provisioning artifact.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-name",
          description:
            "The name of the provisioning artifact. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--path-id",
          description:
            "The path identifier. This value is optional if the product has a default path, and required if the product has more than one path. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--path-name",
          description:
            "The name of the path. You must provide the name or ID, but not both.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-parameters",
          description: "The new parameters.",
          args: {
            name: "list",
          },
        },
        {
          name: "--provisioning-preferences",
          description:
            "An object that contains information about the provisioning preferences for a stack set.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "One or more tags. Requires the product to have RESOURCE_UPDATE constraint with TagUpdatesOnProvisionedProduct set to ALLOWED to allow tag updates.",
          args: {
            name: "list",
          },
        },
        {
          name: "--update-token",
          description:
            "The idempotency token that uniquely identifies the provisioning update request.",
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
      name: "update-provisioned-product-properties",
      description:
        "Requests updates to the properties of the specified provisioned product.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-id",
          description: "The identifier of the provisioned product.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-product-properties",
          description:
            "A map that contains the provisioned product properties to be updated. The LAUNCH_ROLE key accepts role ARNs. This key allows an administrator to call UpdateProvisionedProductProperties to update the launch role that is associated with a provisioned product. This role is used when an end user calls a provisioning operation such as UpdateProvisionedProduct, TerminateProvisionedProduct, or ExecuteProvisionedProductServiceAction. Only a role ARN is valid. A user ARN is invalid.  The OWNER key accepts user ARNs and role ARNs. The owner is the user that has permission to see, update, terminate, and execute service actions in the provisioned product. The administrator can change the owner of a provisioned product to another IAM user within the same account. Both end user owners and administrators can see ownership history of the provisioned product using the ListRecordHistory API. The new owner can describe all past records for the provisioned product using the DescribeRecord API. The previous owner can no longer use DescribeRecord, but can still see the product's history from when he was an owner using ListRecordHistory. If a provisioned product ownership is assigned to an end user, they can see and perform any action through the API or Service Catalog console such as update, terminate, and execute service actions. If an end user provisions a product and the owner is updated to someone else, they will no longer be able to see or perform any actions through API or the Service Catalog console on that provisioned product.",
          args: {
            name: "map",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "The idempotency token that uniquely identifies the provisioning product update request.",
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
      name: "update-provisioning-artifact",
      description:
        "Updates the specified provisioning artifact (also known as a version) for the specified product. You cannot update a provisioning artifact for a product that was shared with you.",
      options: [
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-artifact-id",
          description: "The identifier of the provisioning artifact.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The updated name of the provisioning artifact.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated description of the provisioning artifact.",
          args: {
            name: "string",
          },
        },
        {
          name: "--active",
          description:
            "Indicates whether the product version is active. Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact.",
        },
        {
          name: "--no-active",
          description:
            "Indicates whether the product version is active. Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact.",
        },
        {
          name: "--guidance",
          description:
            "Information set by the administrator to provide guidance to end users about which provisioning artifacts to use. The DEFAULT value indicates that the product version is active. The administrator can set the guidance to DEPRECATED to inform users that the product version is deprecated. Users are able to make updates to a provisioned product of a deprecated version but cannot launch new provisioned products using a deprecated version.",
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
      name: "update-service-action",
      description: "Updates a self-service action.",
      options: [
        {
          name: "--id",
          description: "The self-service action identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The self-service action name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description: "A map that defines the self-service action.",
          args: {
            name: "map",
          },
        },
        {
          name: "--description",
          description: "The self-service action description.",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The language code.    en - English (default)    jp - Japanese    zh - Chinese",
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
      name: "update-tag-option",
      description: "Updates the specified TagOption.",
      options: [
        {
          name: "--id",
          description: "The TagOption identifier.",
          args: {
            name: "string",
          },
        },
        {
          name: "--value",
          description: "The updated value.",
          args: {
            name: "string",
          },
        },
        {
          name: "--active",
          description: "The updated active state.",
        },
        {
          name: "--no-active",
          description: "The updated active state.",
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
      name: "generate",
      description:
        "Generate a Service Catalog product or provisioning artifact using a CloudFormation template specified as a local file path",
      subcommands: [
        {
          name: "product",
          description:
            "Create a new product using a CloudFormation template specified as a local file path",
          options: [
            {
              name: "--product-name",
              description: "The name of the product",
              args: {
                name: "string",
              },
            },
            {
              name: "--product-owner",
              description: "The owner of the product",
              args: {
                name: "string",
              },
            },
            {
              name: "--product-type",
              description: "The type of the product to create",
              args: {
                name: "string",
                suggestions: ["CLOUD_FORMATION_TEMPLATE", "MARKETPLACE"],
              },
            },
            {
              name: "--product-description",
              description: "The text description of the product",
              args: {
                name: "string",
              },
            },
            {
              name: "--product-distributor",
              description: "The distributor of the product",
              args: {
                name: "string",
              },
            },
            {
              name: "--tags",
              description: "Tags to associate with the new product.",
              args: {
                name: "list",
                variadic: true,
              },
            },
            {
              name: "--file-path",
              description:
                "A local file path that references the CloudFormation template",
              args: {
                name: "string",
              },
            },
            {
              name: "--bucket-name",
              description:
                "Name of the S3 bucket name where the CloudFormation template will be uploaded to",
              args: {
                name: "string",
              },
            },
            {
              name: "--support-description",
              description: "Support information about the product",
              args: {
                name: "string",
              },
            },
            {
              name: "--support-email",
              description: "Contact email for product support",
              args: {
                name: "string",
              },
            },
            {
              name: "--provisioning-artifact-name",
              description: "The name assigned to the provisioning artifact",
              args: {
                name: "string",
              },
            },
            {
              name: "--provisioning-artifact-description",
              description: "The text description of the provisioning artifact",
              args: {
                name: "string",
              },
            },
            {
              name: "--provisioning-artifact-type",
              description: "The type of the provisioning artifact",
              args: {
                name: "string",
                suggestions: [
                  "CLOUD_FORMATION_TEMPLATE",
                  "MARKETPLACE_AMI",
                  "MARKETPLACE_CAR",
                ],
              },
            },
          ],
        },
        {
          name: "provisioning-artifact",
          description:
            "Create a new provisioning artifact for the specified product using a CloudFormation template specified as a local file path",
          options: [
            {
              name: "--file-path",
              description:
                "A local file path that references the CloudFormation template",
              args: {
                name: "string",
              },
            },
            {
              name: "--bucket-name",
              description:
                "Name of the S3 bucket name where the CloudFormation template will be uploaded to",
              args: {
                name: "string",
              },
            },
            {
              name: "--provisioning-artifact-name",
              description: "The name assigned to the provisioning artifact",
              args: {
                name: "string",
              },
            },
            {
              name: "--provisioning-artifact-description",
              description: "The text description of the provisioning artifact",
              args: {
                name: "string",
              },
            },
            {
              name: "--provisioning-artifact-type",
              description: "The type of the provisioning artifact",
              args: {
                name: "string",
                suggestions: [
                  "CLOUD_FORMATION_TEMPLATE",
                  "MARKETPLACE_AMI",
                  "MARKETPLACE_CAR",
                ],
              },
            },
            {
              name: "--product-id",
              description: "The product identifier",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
