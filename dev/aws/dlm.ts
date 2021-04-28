export const completionSpec: Fig.Spec = {
  name: "dlm",
  description:
    "Amazon Data Lifecycle Manager With Amazon Data Lifecycle Manager, you can manage the lifecycle of your AWS resources. You create lifecycle policies, which are used to automate operations on the specified resources. Amazon DLM supports Amazon EBS volumes and snapshots. For information about using Amazon DLM with Amazon EBS, see Automating the Amazon EBS Snapshot Lifecycle in the Amazon EC2 User Guide.",
  subcommands: [
    {
      name: "create-lifecycle-policy",
      description:
        "Creates a policy to manage the lifecycle of the specified AWS resources. You can create up to 100 lifecycle policies.",
      options: [
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description:
            "A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--state",
          description:
            "The desired activation state of the lifecycle policy after creation.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--policy-details",
          description: "The configuration details of the lifecycle policy.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description:
            "The tags to apply to the lifecycle policy during creation.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-lifecycle-policy",
      description:
        "Deletes the specified lifecycle policy and halts the automated operations that the policy specified.",
      options: [
        {
          name: "--policy-id",
          description: "The identifier of the lifecycle policy.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "get-lifecycle-policies",
      description:
        "Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy.",
      options: [
        {
          name: "--policy-ids",
          description: "The identifiers of the data lifecycle policies.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--state",
          description: "The activation state.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--resource-types",
          description: "The resource type.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--target-tags",
          description:
            "The target tag for a policy. Tags are strings in the format key=value.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--tags-to-add",
          description:
            "The tags to add to objects created by the policy. Tags are strings in the format key=value. These user-defined tags are added in addition to the AWS-added lifecycle tags.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "get-lifecycle-policy",
      description:
        "Gets detailed information about the specified lifecycle policy.",
      options: [
        {
          name: "--policy-id",
          description: "The identifier of the lifecycle policy.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
      description: "Lists the tags for the specified resource.",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
      description: "Adds the specified tags to the specified resource.",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description: "One or more tags.",
          args: {
            name: "map",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
      description: "Removes the specified tags from the specified resource.",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tag-keys",
          description: "The tag keys.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-lifecycle-policy",
      description: "Updates the specified lifecycle policy.",
      options: [
        {
          name: "--policy-id",
          description: "The identifier of the lifecycle policy.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--state",
          description:
            "The desired activation state of the lifecycle policy after creation.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "A description of the lifecycle policy.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--policy-details",
          description:
            "The configuration of the lifecycle policy. You cannot update the policy type or the resource type.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-default-role",
      description:
        "Creates the default IAM role  which will be used by Lifecycle service.\nIf the role does not exist, create-default-role will automatically create it and set its policy. If the role has been already created, create-default-role will not update its policy.\n",
      options: [
        {
          name: "--iam-endpoint",
          description:
            "The IAM endpoint to call for creating the roles. This is optional and should only be specified when a custom endpoint should be called for IAM operations.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--resource-type",
          description:
            "The resource type for which the role needs to be created. The available options are 'snapshot' and 'image'. This parameter defaults to 'snapshot'.",
          args: {
            name: "string",
            suggestions: ["snapshot", "image"],
          },
          isOptional: true,
        },
      ],
    },
  ],
};
