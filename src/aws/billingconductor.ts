const completionSpec: Fig.Spec = {
  name: "billingconductor",
  description:
    "Amazon Web Services Billing Conductor is a fully managed service that you can use to customize a proforma version of your billing data each month, to accurately show or chargeback your end customers. Amazon Web Services Billing Conductor doesn't change the way you're billed by Amazon Web Services each month by design. Instead, it provides you with a mechanism to configure, generate, and display rates to certain customers over a given billing period. You can also analyze the difference between the rates you apply to your accounting groupings relative to your actual rates from Amazon Web Services. As a result of your Amazon Web Services Billing Conductor configuration, the payer account can also see the custom rate applied on the billing details page of the Amazon Web Services Billing console, or configure a cost and usage report per billing group. This documentation shows how you can configure Amazon Web Services Billing Conductor using its API. For more information about using the Amazon Web Services Billing Conductor user interface, see the  Amazon Web Services Billing Conductor User Guide",
  subcommands: [
    {
      name: "associate-accounts",
      description:
        "Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the billing group that associates the array of account IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description: "The associating array of account IDs",
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
      name: "associate-pricing-rules",
      description:
        "Connects an array of PricingRuleArns to a defined PricingPlan. The maximum number PricingRuleArn that can be associated in one call is 30",
      options: [
        {
          name: "--arn",
          description:
            "The PricingPlanArn that the PricingRuleArns are associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-rule-arns",
          description:
            "The PricingRuleArns that are associated with the Pricing Plan",
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
      name: "batch-associate-resources-to-custom-line-item",
      description:
        "Associates a batch of resources to a percentage custom line item",
      options: [
        {
          name: "--target-arn",
          description:
            "A percentage custom line item ARN to associate the resources to",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arns",
          description:
            "A list containing the ARNs of the resources to be associated",
          args: {
            name: "list",
          },
        },
        {
          name: "--billing-period-range",
          description:
            "The billing period range in which the custom line item request will be applied",
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
      name: "batch-disassociate-resources-from-custom-line-item",
      description:
        "Disassociates a batch of resources from a percentage custom line item",
      options: [
        {
          name: "--target-arn",
          description:
            "A percentage custom line item ARN to disassociate the resources from",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arns",
          description:
            "A list containing the ARNs of resources to be disassociated",
          args: {
            name: "list",
          },
        },
        {
          name: "--billing-period-range",
          description:
            "The billing period range in which the custom line item request will be applied",
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
      name: "create-billing-group",
      description:
        "Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation",
      options: [
        {
          name: "--client-token",
          description:
            "The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The billing group name. The names must be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-grouping",
          description:
            "The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family",
          args: {
            name: "structure",
          },
        },
        {
          name: "--computation-preference",
          description:
            "The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--primary-account-id",
          description:
            "The account ID that serves as the main account in a billing group",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the billing group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to a billing group. This feature isn't available during the beta",
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
      name: "create-custom-line-item",
      description:
        "Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount",
      options: [
        {
          name: "--client-token",
          description:
            "The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the custom line item",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the custom line item. This is shown on the Bills page in association with the charge value",
          args: {
            name: "string",
          },
        },
        {
          name: "--billing-group-arn",
          description:
            "The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to",
          args: {
            name: "string",
          },
        },
        {
          name: "--billing-period-range",
          description:
            "A time range for which the custom line item is effective",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to a custom line item",
          args: {
            name: "map",
          },
        },
        {
          name: "--charge-details",
          description:
            "A CustomLineItemChargeDetails that describes the charge details for a custom line item",
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account in which this custom line item will be applied to",
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
      name: "create-pricing-plan",
      description:
        "Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups",
      options: [
        {
          name: "--client-token",
          description:
            "The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the pricing plan. The names must be unique to each pricing plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the pricing plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-rule-arns",
          description:
            "A list of Amazon Resource Names (ARNs) that define the pricing plan parameters",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to a pricing plan",
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
      name: "create-pricing-rule",
      description:
        "Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans",
      options: [
        {
          name: "--client-token",
          description:
            "The token that's needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The pricing rule name. The names must be unique to each pricing rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The pricing rule description",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "The scope of pricing rule that indicates if it's globally applicable, or it's service-specific",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of pricing rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--modifier-percentage",
          description:
            "A percentage modifier that's applied on the public pricing rates",
          args: {
            name: "double",
          },
        },
        {
          name: "--service",
          description:
            "If the Scope attribute is set to SERVICE or SKU, the attribute indicates which service the PricingRule is applicable for",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to a pricing rule",
          args: {
            name: "map",
          },
        },
        {
          name: "--billing-entity",
          description:
            "The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--tiering",
          description: "The set of tiering configurations for the pricing rule",
          args: {
            name: "structure",
          },
        },
        {
          name: "--usage-type",
          description:
            "Usage type is the unit that each service uses to measure the usage of a specific type of resource. If the Scope attribute is set to SKU, this attribute indicates which usage type the PricingRule is modifying. For example, USW2-BoxUsage:m2.2xlarge describes an M2 High Memory Double Extra Large instance in the US West (Oregon) Region. </p>",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation",
          description:
            "Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.  If the Scope attribute is set to SKU, this attribute indicates which operation the PricingRule is modifying. For example, a value of RunInstances:0202 indicates the operation of running an Amazon EC2 instance",
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
      name: "delete-billing-group",
      description: "Deletes a billing group",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the billing group that you're deleting",
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
      name: "delete-custom-line-item",
      description:
        "Deletes the custom line item identified by the given ARN in the current, or previous billing period",
      options: [
        {
          name: "--arn",
          description: "The ARN of the custom line item to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--billing-period-range",
          description:
            "The billing period range in which the custom line item request will be applied",
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
      name: "delete-pricing-plan",
      description:
        "Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the pricing plan that you're deleting",
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
      name: "delete-pricing-rule",
      description:
        "Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN)",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the pricing rule that you are deleting",
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
      name: "disassociate-accounts",
      description:
        "Removes the specified list of account IDs from the given billing group",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the billing group that the array of account IDs will disassociate from",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description: "The array of account IDs to disassociate",
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
      name: "disassociate-pricing-rules",
      description: "Disassociates a list of pricing rules from a pricing plan",
      options: [
        {
          name: "--arn",
          description:
            "The pricing plan Amazon Resource Name (ARN) to disassociate pricing rules from",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-rule-arns",
          description:
            "A list containing the Amazon Resource Name (ARN) of the pricing rules that will be disassociated",
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
      name: "get-billing-group-cost-report",
      description:
        "Retrieves the margin summary report, which includes the Amazon Web Services cost and charged amount (pro forma cost) by Amazon Web Service for a specific billing group",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Number (ARN) that uniquely identifies the billing group",
          args: {
            name: "string",
          },
        },
        {
          name: "--billing-period-range",
          description:
            "A time range for which the margin summary is effective. You can specify up to 12 months",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "A list of strings that specify the attributes that are used to break down costs in the margin summary reports for the billing group. For example, you can view your costs by the Amazon Web Service name or the billing period",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of margin summary reports to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token used on subsequent calls to get reports",
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
      name: "list-account-associations",
      description:
        "This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account",
      options: [
        {
          name: "--billing-period",
          description:
            "The preferred billing period to get account associations",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The filter on the account ID of the linked account, or any of the following:  MONITORED: linked accounts that are associated to billing groups.  UNMONITORED: linked accounts that aren't associated to billing groups.  Billing Group Arn: linked accounts that are associated to the provided billing group Arn",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used on subsequent calls to retrieve accounts",
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
      name: "list-billing-group-cost-reports",
      description:
        "A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group",
      options: [
        {
          name: "--billing-period",
          description: "The preferred billing period for your report",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of reports to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used on subsequent calls to get reports",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A ListBillingGroupCostReportsFilter to specify billing groups to retrieve reports from",
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
      name: "list-billing-groups",
      description:
        "A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used",
      options: [
        {
          name: "--billing-period",
          description: "The preferred billing period to get billing groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of billing groups to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used on subsequent calls to get billing groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A ListBillingGroupsFilter that specifies the billing group and pricing plan to retrieve billing group information",
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
      name: "list-custom-line-item-versions",
      description:
        "A paginated call to get a list of all custom line item versions",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) for the custom line item",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of custom line item versions to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used on subsequent calls to retrieve custom line item versions",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A ListCustomLineItemVersionsFilter that specifies the billing period range in which the custom line item versions are applied",
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
      name: "list-custom-line-items",
      description:
        "A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used",
      options: [
        {
          name: "--billing-period",
          description:
            "The preferred billing period to get custom line items (FFLIs)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of billing groups to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used on subsequent calls to get custom line items (FFLIs)",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A ListCustomLineItemsFilter that specifies the custom line item names and/or billing group Amazon Resource Names (ARNs) to retrieve FFLI information",
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
      name: "list-pricing-plans",
      description:
        "A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used",
      options: [
        {
          name: "--billing-period",
          description: "The preferred billing period to get pricing plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A ListPricingPlansFilter that specifies the Amazon Resource Name (ARNs) of pricing plans to retrieve pricing plans information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of pricing plans to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used on subsequent call to get pricing plans",
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
      name: "list-pricing-plans-associated-with-pricing-rule",
      description:
        "A list of the pricing plans that are associated with a pricing rule",
      options: [
        {
          name: "--billing-period",
          description:
            "The pricing plan billing period for which associations will be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-rule-arn",
          description:
            "The pricing rule Amazon Resource Name (ARN) for which associations will be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The optional maximum number of pricing rule associations to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The optional pagination token returned by a previous call",
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
      name: "list-pricing-rules",
      description:
        "Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans",
      options: [
        {
          name: "--billing-period",
          description: "The preferred billing period to get the pricing plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A DescribePricingRuleFilter that specifies the Amazon Resource Name (ARNs) of pricing rules to retrieve pricing rules information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of pricing rules to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used on subsequent call to get pricing rules",
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
      name: "list-pricing-rules-associated-to-pricing-plan",
      description:
        "Lists the pricing rules that are associated with a pricing plan",
      options: [
        {
          name: "--billing-period",
          description:
            "The billing period for which the pricing rule associations are to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan-arn",
          description:
            "The Amazon Resource Name (ARN) of the pricing plan for which associations are to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The optional maximum number of pricing rule associations to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The optional pagination token returned by a previous call",
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
      name: "list-resources-associated-to-custom-line-item",
      description:
        "List the resources that are associated to a custom line item",
      options: [
        {
          name: "--billing-period",
          description:
            "The billing period for which the resource associations will be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--arn",
          description:
            "The ARN of the custom line item for which the resource associations will be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "(Optional) The maximum number of resource associations to be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) The pagination token that's returned by a previous request",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "(Optional) A ListResourcesAssociatedToCustomLineItemFilter that can specify the types of resources that should be retrieved",
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
      name: "list-tags-for-resource",
      description: "A list the tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource to list the tags",
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
        "Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to which to add tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to add to the resource as a list of key-value pairs",
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
      description: "Deletes specified tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to which to delete tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The tags to delete from the resource as a list of key-value pairs",
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
      name: "update-billing-group",
      description: "This updates an existing billing group",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the billing group being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the billing group. The names must be unique to each billing group",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status of the billing group. Only one of the valid values can be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--computation-preference",
          description:
            "The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description of the billing group",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-grouping",
          description:
            "Specifies if the billing group has automatic account association (AutoAssociate) enabled",
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
      name: "update-custom-line-item",
      description:
        "Update an existing custom line item in the current or previous billing period",
      options: [
        {
          name: "--arn",
          description: "The ARN of the custom line item to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The new name for the custom line item",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new line item description of the custom line item",
          args: {
            name: "string",
          },
        },
        {
          name: "--charge-details",
          description:
            "A ListCustomLineItemChargeDetails containing the new charge details for the custom line item",
          args: {
            name: "structure",
          },
        },
        {
          name: "--billing-period-range",
          description:
            "The billing period range in which the custom line item request will be applied",
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
      description: "This updates an existing pricing plan",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the pricing plan that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the pricing plan. The name must be unique to each pricing plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the pricing plan",
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
      name: "update-pricing-rule",
      description: "Updates an existing pricing rule",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the pricing rule to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The new name of the pricing rule. The name must be unique to each pricing rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description for the pricing rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The new pricing rule type",
          args: {
            name: "string",
          },
        },
        {
          name: "--modifier-percentage",
          description:
            "The new modifier to show pricing plan rates as a percentage",
          args: {
            name: "double",
          },
        },
        {
          name: "--tiering",
          description: "The set of tiering configurations for the pricing rule",
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
  ],
};
export default completionSpec;
