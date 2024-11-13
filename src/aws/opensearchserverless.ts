const completionSpec: Fig.Spec = {
  name: "opensearchserverless",
  description:
    "Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and security policies. OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning, configuring, and tuning your OpenSearch clusters. It enables you to easily search and analyze petabytes of data without having to worry about the underlying infrastructure and data management.  To learn more about OpenSearch Serverless, see What is Amazon OpenSearch Serverless?",
  subcommands: [
    {
      name: "batch-get-collection",
      description:
        "Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see Creating and managing Amazon OpenSearch Serverless collections",
      options: [
        {
          name: "--ids",
          description:
            "A list of collection IDs. You can't provide names and IDs in the same request. The ID is part of the collection endpoint. You can also retrieve it using the ListCollections API",
          args: {
            name: "list",
          },
        },
        {
          name: "--names",
          description:
            "A list of collection names. You can't provide names and IDs in the same request",
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
      name: "batch-get-effective-lifecycle-policy",
      description:
        "Returns a list of successful and failed retrievals for the OpenSearch Serverless indexes. For more information, see Viewing data lifecycle policies",
      options: [
        {
          name: "--resource-identifiers",
          description:
            "The unique identifiers of policy types and resource names",
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
      name: "batch-get-lifecycle-policy",
      description:
        "Returns one or more configured OpenSearch Serverless lifecycle policies. For more information, see Viewing data lifecycle policies",
      options: [
        {
          name: "--identifiers",
          description:
            "The unique identifiers of policy types and policy names",
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
      name: "batch-get-vpc-endpoint",
      description:
        "Returns attributes for one or more VPC endpoints associated with the current account. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint",
      options: [
        {
          name: "--ids",
          description: "A list of VPC endpoint identifiers",
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
        "Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see Data access control for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the policy. Typically used to store information about the permissions defined in the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The JSON policy document to use as the content for the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of policy",
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
      name: "create-collection",
      description:
        "Creates a new OpenSearch Serverless collection. For more information, see Creating and managing Amazon OpenSearch Serverless collections",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Description of the collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Name of the collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--standby-replicas",
          description:
            "Indicates whether standby replicas should be used for a collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An arbitrary set of tags (key\u2013value pairs) to associate with the OpenSearch Serverless collection",
          args: {
            name: "list",
          },
        },
        {
          name: "--type",
          description: "The type of collection",
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
      name: "create-lifecycle-policy",
      description:
        "Creates a lifecyle policy to be applied to OpenSearch Serverless indexes. Lifecycle policies define the number of days or hours to retain the data on an OpenSearch Serverless index. For more information, see Creating data lifecycle policies",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The JSON policy document to use as the content for the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of lifecycle policy",
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
      name: "create-security-config",
      description:
        "Specifies a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the security configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-identity-center-options",
          description:
            "Describes IAM Identity Center options in the form of a key-value map. This field is required if you specify iamidentitycenter for the type parameter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "The name of the security configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--saml-options",
          description:
            "Describes SAML options in in the form of a key-value map. This field is required if you specify saml for the type parameter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type",
          description: "The type of security configuration",
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
      name: "create-security-policy",
      description:
        "Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the policy. Typically used to store information about the permissions defined in the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The JSON policy document to use as the content for the new policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of security policy",
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
      name: "create-vpc-endpoint",
      description:
        "Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the interface endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "The ID of one or more subnets from which you'll access OpenSearch Serverless",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The ID of the VPC from which you'll access OpenSearch Serverless",
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
      name: "delete-access-policy",
      description:
        "Deletes an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the policy to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of policy",
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
      name: "delete-collection",
      description:
        "Deletes an OpenSearch Serverless collection. For more information, see Creating and managing Amazon OpenSearch Serverless collections",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The unique identifier of the collection. For example, 1iu5usc406kd. The ID is part of the collection endpoint. You can also retrieve it using the ListCollections API",
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
      name: "delete-lifecycle-policy",
      description:
        "Deletes an OpenSearch Serverless lifecycle policy. For more information, see Deleting data lifecycle policies",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the policy to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of lifecycle policy",
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
      name: "delete-security-config",
      description:
        "Deletes a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The security configuration identifier. For SAML the ID will be saml/<accountId>/<idpProviderName>. For example, saml/123456789123/OKTADev",
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
      name: "delete-security-policy",
      description: "Deletes an OpenSearch Serverless security policy",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the policy to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of policy",
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
      name: "delete-vpc-endpoint",
      description:
        "Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The VPC endpoint identifier",
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
      name: "get-access-policy",
      description:
        "Returns an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--name",
          description: "The name of the access policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Tye type of policy. Currently, the only supported value is data",
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
      name: "get-account-settings",
      description:
        "Returns account-level settings related to OpenSearch Serverless",
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
      name: "get-policies-stats",
      description:
        "Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies",
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
      name: "get-security-config",
      description:
        "Returns information about an OpenSearch Serverless security configuration. For more information, see SAML authentication for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--id",
          description: "The unique identifier of the security configuration",
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
      name: "get-security-policy",
      description:
        "Returns information about a configured OpenSearch Serverless security policy. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--name",
          description: "The name of the security policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of security policy",
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
      name: "list-access-policies",
      description:
        "Returns information about a list of OpenSearch Serverless access policies",
      options: [
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results. The default is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListAccessPolicies operation returns a nextToken, you can include the returned nextToken in subsequent ListAccessPolicies operations, which returns results in the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource",
          description:
            "Resource filters (can be collections or indexes) that policies can apply to",
          args: {
            name: "list",
          },
        },
        {
          name: "--type",
          description: "The type of access policy",
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
      name: "list-collections",
      description:
        "Lists all OpenSearch Serverless collections. For more information, see Creating and managing Amazon OpenSearch Serverless collections.  Make sure to include an empty request body {} if you don't include any collection filters in the request",
      options: [
        {
          name: "--collection-filters",
          description:
            "A list of filter names and values that you can use for requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Default is 20. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListCollections operation returns a nextToken, you can include the returned nextToken in subsequent ListCollections operations, which returns results in the next page",
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
      name: "list-lifecycle-policies",
      description:
        "Returns a list of OpenSearch Serverless lifecycle policies. For more information, see Viewing data lifecycle policies",
      options: [
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use use nextToken to get the next page of results. The default is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListLifecyclePolicies operation returns a nextToken, you can include the returned nextToken in subsequent ListLifecyclePolicies operations, which returns results in the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--resources",
          description:
            "Resource filters that policies can apply to. Currently, the only supported resource type is index",
          args: {
            name: "list",
          },
        },
        {
          name: "--type",
          description: "The type of lifecycle policy",
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
      name: "list-security-configs",
      description:
        "Returns information about configured OpenSearch Serverless security configurations. For more information, see SAML authentication for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results. The default is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListSecurityConfigs operation returns a nextToken, you can include the returned nextToken in subsequent ListSecurityConfigs operations, which returns results in the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of security configuration",
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
      name: "list-security-policies",
      description:
        "Returns information about configured OpenSearch Serverless security policies",
      options: [
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results. The default is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListSecurityPolicies operation returns a nextToken, you can include the returned nextToken in subsequent ListSecurityPolicies operations, which returns results in the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource",
          description:
            "Resource filters (can be collection or indexes) that policies can apply to",
          args: {
            name: "list",
          },
        },
        {
          name: "--type",
          description: "The type of policy",
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
        "Returns the tags for an OpenSearch Serverless resource. For more information, see Tagging Amazon OpenSearch Serverless collections",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. The resource must be active (not in the DELETING state), and must be owned by the account ID included in the request",
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
      name: "list-vpc-endpoints",
      description:
        "Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint",
      options: [
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results. The default is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListVpcEndpoints operation returns a nextToken, you can include the returned nextToken in subsequent ListVpcEndpoints operations, which returns results in the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-filters",
          description:
            "Filter the results according to the current status of the VPC endpoint. Possible statuses are CREATING, DELETING, UPDATING, ACTIVE, and FAILED",
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
        "Associates tags with an OpenSearch Serverless resource. For more information, see Tagging Amazon OpenSearch Serverless collections",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. The resource must be active (not in the DELETING state), and must be owned by the account ID included in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags (key-value pairs) to add to the resource. All tag keys in the request must be unique",
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
        "Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see Tagging Amazon OpenSearch Serverless collections",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to remove tags from. The resource must be active (not in the DELETING state), and must be owned by the account ID included in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The tag or set of tags to remove from the resource. All tag keys in the request must be unique",
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
        "Updates an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the policy. Typically used to store information about the permissions defined in the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The JSON policy document to use as the content for the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-version",
          description: "The version of the policy being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of policy",
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
      name: "update-account-settings",
      description:
        "Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see Managing capacity limits for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--capacity-limits",
          description:
            "The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see Managing capacity limits for Amazon OpenSearch Serverless",
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
      name: "update-collection",
      description: "Updates an OpenSearch Serverless collection",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The unique identifier of the collection",
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
      name: "update-lifecycle-policy",
      description:
        "Updates an OpenSearch Serverless access policy. For more information, see Updating data lifecycle policies",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The JSON policy document to use as the content for the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-version",
          description: "The version of the policy being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of lifecycle policy",
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
      name: "update-security-config",
      description:
        "Updates a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--config-version",
          description:
            "The version of the security configuration to be updated. You can find the most recent version of a security configuration using the GetSecurityPolicy command",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the security configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-identity-center-options-updates",
          description:
            "Describes IAM Identity Center options in the form of a key-value map",
          args: {
            name: "structure",
          },
        },
        {
          name: "--id",
          description:
            "The security configuration identifier. For SAML the ID will be saml/<accountId>/<idpProviderName>. For example, saml/123456789123/OKTADev",
          args: {
            name: "string",
          },
        },
        {
          name: "--saml-options",
          description: "SAML options in in the form of a key-value map",
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
      name: "update-security-policy",
      description:
        "Updates an OpenSearch Serverless security policy. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the policy. Typically used to store information about the permissions defined in the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The JSON policy document to use as the content for the new policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-version",
          description: "The version of the policy being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of access policy",
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
      name: "update-vpc-endpoint",
      description:
        "Updates an OpenSearch Serverless-managed interface endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint",
      options: [
        {
          name: "--add-security-group-ids",
          description:
            "The unique identifiers of the security groups to add to the endpoint. Security groups define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--add-subnet-ids",
          description: "The ID of one or more subnets to add to the endpoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The unique identifier of the interface endpoint to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--remove-security-group-ids",
          description:
            "The unique identifiers of the security groups to remove from the endpoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--remove-subnet-ids",
          description:
            "The unique identifiers of the subnets to remove from the endpoint",
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
