const completionSpec: Fig.Spec = {
  name: "dlm",
  description:
    "Amazon Data Lifecycle Manager With Amazon Data Lifecycle Manager, you can manage the lifecycle of your Amazon Web Services resources. You create lifecycle policies, which are used to automate operations on the specified resources. Amazon Data Lifecycle Manager supports Amazon EBS volumes and snapshots. For information about using Amazon Data Lifecycle Manager with Amazon EBS, see  Amazon Data Lifecycle Manager in the Amazon EC2 User Guide",
  subcommands: [
    {
      name: "create-lifecycle-policy",
      description:
        "Creates an Amazon Data Lifecycle Manager lifecycle policy. Amazon Data Lifecycle Manager supports the following policy types:   Custom EBS snapshot policy   Custom EBS-backed AMI policy   Cross-account copy event policy   Default policy for EBS snapshots   Default policy for EBS-backed AMIs   For more information, see  Default policies vs custom policies.  If you create a default policy, you can specify the request parameters either in the request body, or in the PolicyDetails request structure, but not both",
      options: [
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "The activation state of the lifecycle policy after creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-details",
          description:
            "The configuration details of the lifecycle policy.  If you create a default policy, you can specify the request parameters either in the request body, or in the PolicyDetails request structure, but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to apply to the lifecycle policy during creation",
          args: {
            name: "map",
          },
        },
        {
          name: "--default-policy",
          description:
            "[Default policies only] Specify the type of default policy to create.   To create a default policy for EBS snapshots, that creates snapshots of all volumes in the Region that do not have recent backups, specify VOLUME.   To create a default policy for EBS-backed AMIs, that creates EBS-backed AMIs from all instances in the Region that do not have recent backups, specify INSTANCE",
          args: {
            name: "string",
          },
        },
        {
          name: "--create-interval",
          description:
            "[Default policies only] Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days. If you do not specify a value, the default is 1. Default: 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--retain-interval",
          description:
            "[Default policies only] Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time. If you do not specify a value, the default is 7. Default: 7",
          args: {
            name: "integer",
          },
        },
        {
          name: "--copy-tags",
          description:
            "[Default policies only] Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is false. Default: false",
        },
        {
          name: "--no-copy-tags",
          description:
            "[Default policies only] Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is false. Default: false",
        },
        {
          name: "--extend-deletion",
          description:
            "[Default policies only] Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state. By default (ExtendDeletion=false):   If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously created snapshots or AMIs, up to but not including the last one, based on the specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs, including the last one, specify true.   If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs, including the last one, if the policy enters one of these states, specify true.   If you enable extended deletion (ExtendDeletion=true), you override both default behaviors simultaneously. If you do not specify a value, the default is false. Default: false",
        },
        {
          name: "--no-extend-deletion",
          description:
            "[Default policies only] Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state. By default (ExtendDeletion=false):   If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously created snapshots or AMIs, up to but not including the last one, based on the specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs, including the last one, specify true.   If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs, including the last one, if the policy enters one of these states, specify true.   If you enable extended deletion (ExtendDeletion=true), you override both default behaviors simultaneously. If you do not specify a value, the default is false. Default: false",
        },
        {
          name: "--cross-region-copy-targets",
          description:
            "[Default policies only] Specifies destination Regions for snapshot or AMI copies. You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--exclusions",
          description:
            "[Default policies only] Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters",
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
      name: "delete-lifecycle-policy",
      description:
        "Deletes the specified lifecycle policy and halts the automated operations that the policy specified. For more information about deleting a policy, see Delete lifecycle policies",
      options: [
        {
          name: "--policy-id",
          description: "The identifier of the lifecycle policy",
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
      name: "get-lifecycle-policies",
      description:
        "Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy",
      options: [
        {
          name: "--policy-ids",
          description: "The identifiers of the data lifecycle policies",
          args: {
            name: "list",
          },
        },
        {
          name: "--state",
          description: "The activation state",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-types",
          description: "The resource type",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-tags",
          description:
            "The target tag for a policy. Tags are strings in the format key=value",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags-to-add",
          description:
            "The tags to add to objects created by the policy. Tags are strings in the format key=value. These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-policy-type",
          description:
            "[Default policies only] Specifies the type of default policy to get. Specify one of the following:    VOLUME - To get only the default policy for EBS snapshots    INSTANCE - To get only the default policy for EBS-backed AMIs    ALL - To get all default policies",
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
      name: "get-lifecycle-policy",
      description:
        "Gets detailed information about the specified lifecycle policy",
      options: [
        {
          name: "--policy-id",
          description: "The identifier of the lifecycle policy",
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
      description: "Lists the tags for the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
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
      description: "Adds the specified tags to the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "One or more tags",
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
      description: "Removes the specified tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys",
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
      name: "update-lifecycle-policy",
      description:
        "Updates the specified lifecycle policy. For more information about updating a policy, see Modify lifecycle policies",
      options: [
        {
          name: "--policy-id",
          description: "The identifier of the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "The desired activation state of the lifecycle policy after creation",
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
          name: "--policy-details",
          description:
            "The configuration of the lifecycle policy. You cannot update the policy type or the resource type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--create-interval",
          description:
            "[Default policies only] Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days",
          args: {
            name: "integer",
          },
        },
        {
          name: "--retain-interval",
          description:
            "[Default policies only] Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time",
          args: {
            name: "integer",
          },
        },
        {
          name: "--copy-tags",
          description:
            "[Default policies only] Indicates whether the policy should copy tags from the source resource to the snapshot or AMI",
        },
        {
          name: "--no-copy-tags",
          description:
            "[Default policies only] Indicates whether the policy should copy tags from the source resource to the snapshot or AMI",
        },
        {
          name: "--extend-deletion",
          description:
            "[Default policies only] Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state. By default (ExtendDeletion=false):   If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously created snapshots or AMIs, up to but not including the last one, based on the specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs, including the last one, specify true.   If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs, including the last one, if the policy enters one of these states, specify true.   If you enable extended deletion (ExtendDeletion=true), you override both default behaviors simultaneously. Default: false",
        },
        {
          name: "--no-extend-deletion",
          description:
            "[Default policies only] Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state. By default (ExtendDeletion=false):   If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously created snapshots or AMIs, up to but not including the last one, based on the specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs, including the last one, specify true.   If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs, including the last one, if the policy enters one of these states, specify true.   If you enable extended deletion (ExtendDeletion=true), you override both default behaviors simultaneously. Default: false",
        },
        {
          name: "--cross-region-copy-targets",
          description:
            "[Default policies only] Specifies destination Regions for snapshot or AMI copies. You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--exclusions",
          description:
            "[Default policies only] Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters",
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
      name: "create-default-role",
      description:
        "Creates the default IAM role  which will be used by Lifecycle service.\nIf the role does not exist, create-default-role will automatically create it and set its policy. If the role has been already created, create-default-role will not update its policy",
      options: [
        {
          name: "--iam-endpoint",
          description:
            "The IAM endpoint to call for creating the roles. This is optional and should only be specified when a custom endpoint should be called for IAM operations",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The resource type for which the role needs to be created. The available options are 'snapshot' and 'image'. This parameter defaults to 'snapshot'",
          args: {
            name: "string",
            suggestions: ["snapshot", "image"],
          },
        },
      ],
    },
  ],
};
export default completionSpec;
