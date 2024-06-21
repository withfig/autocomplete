const completionSpec: Fig.Spec = {
  name: "marketplace-deployment",
  description:
    "The AWS Marketplace Deployment Service supports the Quick Launch experience, which is a deployment option for software as a service (SaaS) products. Quick Launch simplifies and reduces the time, resources, and steps required to configure, deploy, and launch a products. The AWS Marketplace Deployment Service provides sellers with a secure method for passing deployment parameters (for example, API keys and external IDs) to buyers during the Quick Launch experience",
  subcommands: [
    {
      name: "list-tags-for-resource",
      description:
        "Lists all tags that have been added to a deployment parameter resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the deployment parameter resource you want to list tags on",
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
      name: "put-deployment-parameter",
      description:
        "Creates or updates a deployment parameter and is targeted by catalog and agreementId",
      options: [
        {
          name: "--agreement-id",
          description: "The unique identifier of the agreement",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog",
          description:
            "The catalog related to the request. Fixed value: AWS Marketplace",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "The idempotency token for deployment parameters. A unique identifier for the new version",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-parameter",
          description:
            "The deployment parameter targeted to the acceptor of an agreement for which to create the AWS Secret Manager resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expiration-date",
          description:
            "The date when deployment parameters expire and are scheduled for deletion",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--product-id",
          description:
            "The product for which AWS Marketplace will save secrets for the buyer\u2019s account",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of key-value pairs, where each pair represents a tag saved to the resource. Tags will only be applied for create operations, and they'll be ignored if the resource already exists",
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
      name: "tag-resource",
      description: "Tags a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the resource you want to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of key-value pairs, where each pair represents a tag present on the resource",
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
      description: "Removes a tag or list of tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of key names of tags to be removed",
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
