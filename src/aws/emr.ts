const completionSpec: Fig.Spec = {
  name: "emr",
  description:
    "Amazon EMR is a web service that makes it easier to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several AWS services to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehouse management",
  subcommands: [
    {
      name: "add-instance-fleet",
      description:
        "Adds an instance fleet to a running cluster.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x",
      options: [
        {
          name: "--cluster-id",
          description: "The unique identifier of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-fleet",
          description: "Specifies the configuration of the instance fleet",
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
      name: "add-instance-groups",
      description: "Adds an instance group to a running cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "A unique string that identifies a cluster. The create-cluster command returns this identifier. You can use the list-clusters command to get cluster IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-groups",
          description:
            "Specifies the number and type of Amazon EC2 instances to create for each node type in a cluster, using uniform instance groups. You can specify either --instance-groups or --instance-fleets but not both. For more information, see the following topic in the EMR Management Guide:https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.htmlYou can specify arguments individually using multiple InstanceGroupType argument blocks, one for the MASTER instance group, one for a CORE instance group, and optional, multiple TASK instance groups.If you specify inline JSON structures, enclose the entire InstanceGroupType argument block in single quotation marks.Each InstanceGroupType block takes the following inline arguments. Optional arguments are shown in [square brackets].[Name] - An optional friendly name for the instance group.InstanceGroupType - MASTER, CORE, or TASK.InstanceType - The type of EC2 instance, for example m4.large, to use for all nodes in the instance group.InstanceCount - The number of EC2 instances to provision in the instance group.[BidPrice] - If specified, indicates that the instance group uses Spot Instances. This is the maximum price you are willing to pay for Spot Instances. Specify OnDemandPrice to set the amount equal to the On-Demand price, or specify an amount in USD.[EbsConfiguration] - Specifies additional Amazon EBS storage volumes attached to EC2 instances using an inline JSON structure.[AutoScalingPolicy] - Specifies an automatic scaling policy for the instance group using an inline JSON structure",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "add-tags",
      description:
        "Adds tags to an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see Tag Clusters",
      options: [
        {
          name: "--resource-id",
          description:
            "The Amazon EMR resource identifier to which tags will be added. This value must be a cluster identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with a cluster, which apply to each Amazon EC2 instance in the cluster. Tags are key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.You can specify tags in key=value format or you can add a tag without a value using only the key name, for example key. Use a space to separate multiple tags",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "cancel-steps",
      description:
        "Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. You can only cancel steps that are in a PENDING state",
      options: [
        {
          name: "--cluster-id",
          description:
            "The ClusterID for the specified steps that will be canceled. Use RunJobFlow and ListClusters to get ClusterIDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-ids",
          description:
            "The list of StepIDs to cancel. Use ListSteps to get steps and their states for the specified cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--step-cancellation-option",
          description:
            "The option to choose to cancel RUNNING steps. By default, the value is SEND_INTERRUPT",
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
      name: "create-security-configuration",
      description:
        "Creates a security configuration, which is stored in the service and can be specified when a cluster is created",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-configuration",
          description:
            "The security configuration details in JSON format. For JSON parameters and examples, see Use Security Configurations to Set Up Cluster Security in the Amazon EMR Management Guide",
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
      name: "create-studio",
      description: "Creates a new Amazon EMR Studio",
      options: [
        {
          name: "--name",
          description: "A descriptive name for the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A detailed description of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-mode",
          description:
            "Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets",
          args: {
            name: "list",
          },
        },
        {
          name: "--service-role",
          description:
            "The IAM role that will be assumed by the Amazon EMR Studio. The service role provides a way for Amazon EMR Studio to interoperate with other AWS services",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-role",
          description:
            "The IAM user role that will be assumed by users and groups logged in to an Amazon EMR Studio. The permissions attached to this IAM role can be scoped down for each user or group using session policies",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-security-group-id",
          description:
            "The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-security-group-id",
          description:
            "The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-s3-location",
          description:
            "The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the Amazon EMR Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters",
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
      name: "create-studio-session-mapping",
      description:
        "Maps a user or group to the Amazon EMR Studio specified by StudioId, and applies a session policy to refine Studio permissions for that user or group",
      options: [
        {
          name: "--studio-id",
          description:
            "The ID of the Amazon EMR Studio to which the user or group will be mapped",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-id",
          description:
            "The globally unique identifier (GUID) of the user or group from the AWS SSO Identity Store. For more information, see UserId and GroupId in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-name",
          description:
            "The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether the identity to map to the Amazon EMR Studio is a user or a group",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-policy-arn",
          description:
            "The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles",
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
      name: "delete-security-configuration",
      description: "Deletes a security configuration",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration",
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
      name: "delete-studio",
      description:
        "Removes an Amazon EMR Studio from the Studio metadata store",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
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
      name: "delete-studio-session-mapping",
      description: "Removes a user or group from an Amazon EMR Studio",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-id",
          description:
            "The globally unique identifier (GUID) of the user or group to remove from the Amazon EMR Studio. For more information, see UserId and GroupId in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-name",
          description:
            "The name of the user name or group to remove from the Amazon EMR Studio. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether the identity to delete from the Amazon EMR Studio is a user or a group",
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
      name: "describe-cluster",
      description:
        "Provides  cluster-level details including status, hardware and software configuration, VPC settings, bootstrap actions, instance groups and so on. For information about the cluster steps, see <code>list-steps</code>",
      options: [
        {
          name: "--cluster-id",
          description:
            "A unique string that identifies a cluster. The create-cluster command returns this identifier. You can use the list-clusters command to get cluster IDs",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "describe-notebook-execution",
      description: "Provides details of a notebook execution",
      options: [
        {
          name: "--notebook-execution-id",
          description: "The unique identifier of the notebook execution",
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
      name: "describe-security-configuration",
      description:
        "Provides the details of a security configuration by returning the configuration JSON",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration",
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
      name: "describe-step",
      description: "Provides more detail about the cluster step",
      options: [
        {
          name: "--cluster-id",
          description: "The identifier of the cluster with steps to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-id",
          description: "The identifier of the step to describe",
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
      name: "describe-studio",
      description:
        "Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on",
      options: [
        {
          name: "--studio-id",
          description: "The Amazon EMR Studio ID",
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
      name: "get-block-public-access-configuration",
      description:
        "Returns the Amazon EMR block public access configuration for your AWS account in the current Region. For more information see Configure Block Public Access for Amazon EMR in the Amazon EMR Management Guide",
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
      name: "get-managed-scaling-policy",
      description:
        "Fetches the attached managed scaling policy for an Amazon EMR cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of the cluster for which the managed scaling policy will be fetched",
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
      name: "get-studio-session-mapping",
      description:
        "Fetches mapping details for the specified Amazon EMR Studio and identity (user or group)",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-id",
          description:
            "The globally unique identifier (GUID) of the user or group. For more information, see UserId and GroupId in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-name",
          description:
            "The name of the user or group to fetch. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether the identity to fetch is a user or a group",
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
      name: "list-clusters",
      description:
        "Provides the status of all clusters visible to this AWS account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls",
      options: [
        {
          name: "--created-after",
          description:
            "List only those clusters created after the date and time specified in the format yyyy-mm-ddThh:mm:ss. For example, --created-after 2017-07-04T00:01:30",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "List only those clusters created before the date and time specified in the format yyyy-mm-ddThh:mm:ss. For example, --created-before 2017-07-04T00:01:30",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--cluster-states",
          description:
            "Specifies that only clusters in the states specified are listed. Alternatively, you can use the shorthand form for single states or a group of states.Takes the following state values:STARTINGBOOTSTRAPPINGRUNNINGWAITINGTERMINATINGTERMINATEDTERMINATED_WITH_ERRORS",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--marker",
          description:
            "The pagination token that indicates the next set of results to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--active",
          description:
            "Shortcut options for --cluster-states. The following shortcut options can be specified:--active - list only clusters that are STARTING,BOOTSTRAPPING, RUNNING, WAITING, or TERMINATING. --terminated - list only clusters that are TERMINATED. --failed - list only clusters that are TERMINATED_WITH_ERRORS",
        },
        {
          name: "--terminated",
        },
        {
          name: "--failed",
        },
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
      name: "list-instance-fleets",
      description:
        "Lists all available details about the instance fleets in a cluster.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions",
      options: [
        {
          name: "--cluster-id",
          description: "The unique identifier of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
      name: "list-instances",
      description:
        "Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING",
      options: [
        {
          name: "--cluster-id",
          description:
            "The identifier of the cluster for which to list the instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-group-id",
          description:
            "The identifier of the instance group for which to list the instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-group-types",
          description:
            "The type of instance group for which to list the instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-fleet-id",
          description: "The unique identifier of the instance fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-fleet-type",
          description:
            "The node type of the instance fleet. For example MASTER, CORE, or TASK",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-states",
          description:
            "A list of instance states that will filter the instances returned with this request",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
      name: "list-notebook-executions",
      description:
        "Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple ListNotebookExecution calls",
      options: [
        {
          name: "--editor-id",
          description:
            "The unique ID of the editor associated with the notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status filter for listing notebook executions.    START_PENDING indicates that the cluster has received the execution request but execution has not begun.    STARTING indicates that the execution is starting on the cluster.    RUNNING indicates that the execution is being processed by the cluster.    FINISHING indicates that execution processing is in the final stages.    FINISHED indicates that the execution has completed without error.    FAILING indicates that the execution is failing and will not finish successfully.    FAILED indicates that the execution failed.    STOP_PENDING indicates that the cluster has received a StopNotebookExecution request and the stop is pending.    STOPPING indicates that the cluster is in the process of stopping the execution as a result of a StopNotebookExecution request.    STOPPED indicates that the execution stopped because of a StopNotebookExecution request",
          args: {
            name: "string",
          },
        },
        {
          name: "--from",
          description:
            "The beginning of time range filter for listing notebook executions. The default is the timestamp of 30 days ago",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--to",
          description:
            "The end of time range filter for listing notebook executions. The default is the current timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--marker",
          description:
            "The pagination token, returned by a previous ListNotebookExecutions call, that indicates the start of the list for this ListNotebookExecutions call",
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
      name: "list-security-configurations",
      description:
        "Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls",
      options: [
        {
          name: "--marker",
          description:
            "The pagination token that indicates the set of results to retrieve",
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
      name: "list-steps",
      description:
        "Provides a list of steps for the cluster in reverse order unless you specify stepIds with the request of filter by StepStates. You can specify a maximum of 10 stepIDs",
      options: [
        {
          name: "--cluster-id",
          description:
            "The identifier of the cluster for which to list the steps",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-states",
          description:
            "The filter to limit the step list based on certain states",
          args: {
            name: "list",
          },
        },
        {
          name: "--step-ids",
          description:
            "The filter to limit the step list based on the identifier of the steps. You can specify a maximum of ten Step IDs. The character constraint applies to the overall length of the array",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
      name: "list-studio-session-mappings",
      description:
        "Returns a list of all user or group session mappings for the Amazon EMR Studio specified by StudioId",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether to return session mappings for users or groups. If not specified, the results include session mapping details for both users and groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "The pagination token that indicates the set of results to retrieve",
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
      name: "list-studios",
      description:
        "Returns a list of all Amazon EMR Studios associated with the AWS account. The list includes details such as ID, Studio Access URL, and creation time for each Studio",
      options: [
        {
          name: "--marker",
          description:
            "The pagination token that indicates the set of results to retrieve",
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
      name: "modify-cluster",
      description:
        "Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID",
      options: [
        {
          name: "--cluster-id",
          description: "The unique identifier of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-concurrency-level",
          description:
            "The number of steps that can be executed concurrently. You can specify a minimum of 1 step and a maximum of 256 steps",
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
      name: "modify-instance-fleet",
      description:
        "Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.  The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions",
      options: [
        {
          name: "--cluster-id",
          description: "The unique identifier of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-fleet",
          description: "The unique identifier of the instance fleet",
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
      name: "modify-instance-groups",
      description:
        "ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically",
      options: [
        {
          name: "--cluster-id",
          description:
            "The ID of the cluster to which the instance group belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-groups",
          description: "Instance groups to change",
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
      name: "put-auto-scaling-policy",
      description:
        "Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-group-id",
          description:
            "Specifies the ID of the instance group to which the automatic scaling policy is applied",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-policy",
          description:
            "Specifies the definition of the automatic scaling policy",
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
      name: "put-block-public-access-configuration",
      description:
        "Creates or updates an Amazon EMR block public access configuration for your AWS account in the current Region. For more information see Configure Block Public Access for Amazon EMR in the Amazon EMR Management Guide",
      options: [
        {
          name: "--block-public-access-configuration",
          description:
            "A configuration for Amazon EMR block public access. The configuration applies to all clusters created in your account for the current Region. The configuration specifies whether block public access is enabled. If block public access is enabled, security groups associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using PermittedPublicSecurityGroupRuleRanges in the BlockPublicAccessConfiguration. By default, Port 22 (SSH) is an exception, and public access is allowed on this port. You can change this by updating BlockPublicSecurityGroupRules to remove the exception.  For accounts that created clusters in a Region before November 25, 2019, block public access is disabled by default in that Region. To use this feature, you must manually enable and configure it. For accounts that did not create an EMR cluster in a Region before this date, block public access is enabled by default in that Region",
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
      name: "put-managed-scaling-policy",
      description:
        "Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of an EMR cluster where the managed scaling policy is attached",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-scaling-policy",
          description:
            "Specifies the constraints for the managed scaling policy",
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
      name: "remove-auto-scaling-policy",
      description:
        "Removes an automatic scaling policy from a specified instance group within an EMR cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-group-id",
          description:
            "Specifies the ID of the instance group to which the scaling policy is applied",
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
      name: "remove-managed-scaling-policy",
      description:
        "Removes a managed scaling policy from a specified EMR cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of the cluster from which the managed scaling policy will be removed",
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
      name: "remove-tags",
      description:
        "Removes tags from an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see Tag Clusters.  The following example removes the stack tag with value Prod from a cluster:",
      options: [
        {
          name: "--resource-id",
          description:
            "The Amazon EMR resource identifier from which tags will be removed. This value must be a cluster identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of tag keys to remove from a resource",
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
      name: "start-notebook-execution",
      description: "Starts a notebook execution",
      options: [
        {
          name: "--editor-id",
          description:
            "The unique identifier of the EMR Notebook to use for notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--relative-path",
          description:
            "The path and file name of the notebook file for this execution, relative to the path specified for the EMR Notebook. For example, if you specify a path of s3://MyBucket/MyNotebooks when you create an EMR Notebook for a notebook with an ID of e-ABCDEFGHIJK1234567890ABCD (the EditorID of this request), and you specify a RelativePath of my_notebook_executions/notebook_execution.ipynb, the location of the file for the notebook execution is s3://MyBucket/MyNotebooks/e-ABCDEFGHIJK1234567890ABCD/my_notebook_executions/notebook_execution.ipynb",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-execution-name",
          description: "An optional name for the notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-params",
          description:
            "Input parameters in JSON format passed to the EMR Notebook at runtime for execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-engine",
          description:
            "Specifies the execution engine (cluster) that runs the notebook execution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role",
          description:
            "The name or ARN of the IAM role that is used as the service role for Amazon EMR (the EMR role) for the notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-instance-security-group-id",
          description:
            "The unique identifier of the Amazon EC2 security group to associate with the EMR Notebook for this notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags associated with a notebook execution. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters and an optional value string with a maximum of 256 characters",
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
      name: "stop-notebook-execution",
      description: "Stops a notebook execution",
      options: [
        {
          name: "--notebook-execution-id",
          description: "The unique identifier of the notebook execution",
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
      name: "update-studio",
      description:
        "Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A descriptive name for the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A detailed description to assign to the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "A list of subnet IDs to associate with the Amazon EMR Studio. The list can include new subnet IDs, but must also include all of the subnet IDs previously associated with the Studio. The list order does not matter. A Studio can have a maximum of 5 subnets. The subnets must belong to the same VPC as the Studio",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-s3-location",
          description:
            "The Amazon S3 location to back up Workspaces and notebook files for the Amazon EMR Studio",
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
      name: "update-studio-session-mapping",
      description:
        "Updates the session policy attached to the user or group for the specified Amazon EMR Studio",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-id",
          description:
            "The globally unique identifier (GUID) of the user or group. For more information, see UserId and GroupId in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-name",
          description:
            "The name of the user or group to update. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether the identity to update is a user or a group",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the session policy to associate with the specified user or group",
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
      name: "terminate-clusters",
      description:
        "Shuts down one or more clusters, each specified by cluster ID. Use this command only on clusters that do not have termination protection enabled. Clusters with termination protection enabled are not terminated. When a cluster is shut down, any step not yet completed is canceled and the Amazon EC2 instances in the cluster are terminated. Any log files not already saved are uploaded to Amazon S3 if a --log-uri was specified when the cluster was created. The maximum number of clusters allowed in the list is 10. The command is asynchronous. Depending on the configuration of the cluster, it may take from 5 to 20 minutes for the cluster to terminate completely and release allocated resources such as Amazon EC2 instances",
      options: [
        {
          name: "--cluster-ids",
          description: "A list of clusters to terminate",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "modify-cluster-attributes",
      description:
        "Modifies the cluster attributes 'visible-to-all-users' and 'termination-protected'",
      options: [
        {
          name: "--cluster-id",
          description:
            "A unique string that identifies a cluster. The create-cluster command returns this identifier. You can use the list-clusters command to get cluster IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--visible-to-all-users",
          description: "Change cluster visibility for IAM users",
        },
        {
          name: "--no-visible-to-all-users",
          description: "Change cluster visibility for IAM users",
        },
        {
          name: "--termination-protected",
          description: "Set termination protection on or off",
        },
        {
          name: "--no-termination-protected",
          description: "Set termination protection on or off",
        },
      ],
    },
    {
      name: "install-applications",
      description:
        "Installs applications on a running cluster. Currently only Hive and Pig can be installed using this command, and this command is only supported by AMI versions (3.x and 2.x)",
      options: [
        {
          name: "--cluster-id",
          description:
            "A unique string that identifies a cluster. The create-cluster command returns this identifier. You can use the list-clusters command to get cluster IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--applications",
          description:
            "The applications to be installed. Takes the following parameters: Name and Args",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "create-cluster",
      description:
        'Creates an Amazon EMR cluster with the specified configurations.\n\nQuick start:\n\naws emr create-cluster --release-label <release-label> --instance-type <instance-type> --instance-count <instance-count>\n\nValues for the following can be set in the AWS CLI config file using the "aws configure set" command: --service-role, --log-uri, and InstanceProfile and KeyName arguments under --ec2-attributes',
      options: [
        {
          name: "--release-label",
          description:
            "Specifies the Amazon EMR release version, which determines the versions of application software that are installed on the cluster. For example, --release-label emr-5.15.0 installs the application versions and features available in that version. For details about application versions and features available in each release, see the Amazon EMR Release Guide:https://docs.aws.amazon.com/emr/latest/ReleaseGuideUse --release-label only for Amazon EMR release version 4.0 and later. Use --ami-version for earlier versions. You cannot specify both a release label and AMI version",
          args: {
            name: "string",
          },
        },
        {
          name: "--ami-version",
          description:
            "Applies only to Amazon EMR release versions earlier than 4.0. Use --release-label for 4.0 and later. Specifies the version of Amazon Linux Amazon Machine Image (AMI) to use when launching Amazon EC2 instances in the cluster. For example, --ami-version 3.1.0",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-groups",
          description:
            "Specifies the number and type of Amazon EC2 instances to create for each node type in a cluster, using uniform instance groups. You can specify either --instance-groups or --instance-fleets but not both. For more information, see the following topic in the EMR Management Guide:https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.htmlYou can specify arguments individually using multiple InstanceGroupType argument blocks, one for the MASTER instance group, one for a CORE instance group, and optional, multiple TASK instance groups.If you specify inline JSON structures, enclose the entire InstanceGroupType argument block in single quotation marks.Each InstanceGroupType block takes the following inline arguments. Optional arguments are shown in [square brackets].[Name] - An optional friendly name for the instance group.InstanceGroupType - MASTER, CORE, or TASK.InstanceType - The type of EC2 instance, for example m4.large, to use for all nodes in the instance group.InstanceCount - The number of EC2 instances to provision in the instance group.[BidPrice] - If specified, indicates that the instance group uses Spot Instances. This is the maximum price you are willing to pay for Spot Instances. Specify OnDemandPrice to set the amount equal to the On-Demand price, or specify an amount in USD.[EbsConfiguration] - Specifies additional Amazon EBS storage volumes attached to EC2 instances using an inline JSON structure.[AutoScalingPolicy] - Specifies an automatic scaling policy for the instance group using an inline JSON structure",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--instance-type",
          description:
            "Shortcut parameter as an alternative to --instance-groups. Specifies the type of Amazon EC2 instance to use in a cluster. If used without the --instance-count parameter, the cluster consists of a single master node running on the EC2 instance type specified. When used together with --instance-count, one instance is used for the master node, and the remainder are used for the core node type",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-count",
          description:
            "Shortcut parameter as an alternative to --instance-groups when used together with --instance-type. Specifies the number of Amazon EC2 instances to create for a cluster. One instance is used for the master node, and the remainder are used for the core node type",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-terminate",
          description:
            "Specifies whether the cluster should terminate after completing all the steps. Auto termination is off by default",
        },
        {
          name: "--no-auto-terminate",
        },
        {
          name: "--instance-fleets",
          description:
            "Applies only to Amazon EMR release version 5.0 and later. Specifies the number and type of Amazon EC2 instances to create for each node type in a cluster, using instance fleets. You can specify either --instance-fleets or --instance-groups but not both. For more information and examples, see the following topic in the Amazon EMR Management Guide:https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.htmlYou can specify arguments individually using multiple InstanceFleetType argument blocks, one for the MASTER instance fleet, one for a CORE instance fleet, and an optional TASK instance fleet.The following arguments can be specified for each instance fleet. Optional arguments are shown in [square brackets].[Name] - An optional friendly name for the instance fleet.InstanceFleetType - MASTER, CORE, or TASK.TargetOnDemandCapacity - The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand Instances to provision. The WeightedCapacity specified for an instance type within InstanceTypeConfigs counts toward this total when an instance type with the On-Demand purchasing option launches.TargetSpotCapacity - The target capacity of Spot units for the instance fleet, which determines how many Spot Instances to provision. The WeightedCapacity specified for an instance type within InstanceTypeConfigs counts toward this total when an instance type with the Spot purchasing option launches.[LaunchSpecifications] - When TargetSpotCapacity is specified, specifies the block duration and timeout action for Spot Instances.InstanceTypeConfigs - Specifies up to five EC2 instance types to use in the instance fleet, including details such as Spot price and Amazon EBS configuration",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--name",
          description:
            'The name of the cluster. If not provided, the default is "Development Cluster"',
          args: {
            name: "string",
          },
        },
        {
          name: "--log-uri",
          description:
            "Specifies the location in Amazon S3 to which log files are periodically written. If a value is not provided, logs files are not written to Amazon S3 from the master node and are lost if the master node terminates",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-encryption-kms-key-id",
          description:
            "Specifies the KMS Id utilized for log encryption. If a value is not provided, log files will be encrypted by default encryption method AES-256. This attribute is only available with EMR version 5.30.0 and later, excluding EMR 6.0.0",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-role",
          description:
            "Specifies an IAM service role, which Amazon EMR requires to call other AWS services on your behalf during cluster operation. This parameter is usually specified when a customized service role is used. To specify the default service role, as well as the default instance profile, use the --use-default-roles parameter. If the role and instance profile do not already exist, use the aws emr create-default-roles command to create them",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-role",
          description:
            "Specify --auto-scaling-role EMR_AutoScaling_DefaultRole if an automatic scaling policy is specified for an instance group using the --instance-groups parameter. This default IAM role allows the automatic scaling feature to launch and terminate Amazon EC2 instances during scaling operations",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-default-roles",
          description:
            "Specifies that the cluster should use the default service role (EMR_DefaultRole) and instance profile (EMR_EC2_DefaultRole) for permissions to access other AWS services.Make sure that the role and instance profile exist first. To create them, use the create-default-roles command",
        },
        {
          name: "--configurations",
          description:
            "Specifies a JSON file that contains configuration classifications, which you can use to customize applications that Amazon EMR installs when cluster instances launch. Applies only to Amazon EMR 4.0 and later. The file referenced can either be stored locally (for example, --configurations file://configurations.json) or stored in Amazon S3 (for example, --configurations https://s3.amazonaws.com/myBucket/configurations.json). Each classification usually corresponds to the xml configuration file for an application, such as yarn-site for YARN. For a list of available configuration classifications and example JSON, see the following topic in the Amazon EMR Release Guide:https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-attributes",
          description:
            "Configures cluster and Amazon EC2 instance configurations. Accepts the following arguments:KeyName - Specifies the name of the AWS EC2 key pair that will be used for SSH connections to the master node and other instances on the cluster.AvailabilityZone - Specifies the availability zone in which to launch the cluster. For example, us-west-1b.SubnetId - Specifies the VPC subnet in which to create the cluster.InstanceProfile - An IAM role that allows EC2 instances to access other AWS services, such as Amazon S3, that are required for operations.EmrManagedMasterSecurityGroup - The security group ID of the Amazon EC2 security group for the master node.EmrManagedSlaveSecurityGroup - The security group ID of the Amazon EC2 security group for the slave nodes.ServiceAccessSecurityGroup - The security group ID of the Amazon EC2 security group for Amazon EMR access to clusters in VPC private subnets.AdditionalMasterSecurityGroups - A list of additional Amazon EC2 security group IDs for the master node.AdditionalSlaveSecurityGroups - A list of additional Amazon EC2 security group IDs for the slave nodes",
          args: {
            name: "structure",
          },
        },
        {
          name: "--termination-protected",
          description:
            "Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or an error",
        },
        {
          name: "--no-termination-protected",
        },
        {
          name: "--scale-down-behavior",
          description:
            "Specifies the way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized.Accepted values:TERMINATE_AT_TASK_COMPLETION - Specifies that Amazon EMR blacklists and drains tasks from nodes before terminating the instance.TERMINATE_AT_INSTANCE_HOUR - Specifies that Amazon EMR terminate EC2 instances at the instance-hour boundary, regardless of when the request to terminate was submitted",
          args: {
            name: "string",
          },
        },
        {
          name: "--visible-to-all-users",
          description:
            "Specifies whether the cluster is visible to all IAM users of the AWS account associated with the cluster. If set to --visible-to-all-users, all IAM users of that AWS account can view it. If they have the proper policy permissions set, they can  also manage the cluster. If it is set to --no-visible-to-all-users, only the IAM user that created the cluster can view and manage it.  Clusters are visible by default",
        },
        {
          name: "--no-visible-to-all-users",
        },
        {
          name: "--enable-debugging",
          description:
            "Specifies that the debugging tool is enabled for the cluster, which allows you to browse log files using the Amazon EMR console. Turning debugging on requires that you specify --log-uri because log files must be stored in Amazon S3 so that Amazon EMR can index them for viewing in the console",
        },
        {
          name: "--no-enable-debugging",
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with a cluster, which apply to each Amazon EC2 instance in the cluster. Tags are key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.You can specify tags in key=value format or you can add a tag without a value using only the key name, for example key. Use a space to separate multiple tags",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--bootstrap-actions",
          description:
            "Specifies a list of bootstrap actions to run on each EC2 instance when a cluster is created. Bootstrap actions run on each instance immediately after Amazon EMR provisions the EC2 instance and before Amazon EMR installs specified applications.You can specify a bootstrap action as an inline JSON structure enclosed in single quotation marks, or you can use a shorthand syntax, specifying multiple bootstrap actions, each separated by a space. When using the shorthand syntax, each bootstrap action takes the following parameters, separated by commas with no trailing space. Optional parameters are shown in [square brackets].Path - The path and file name of the script to run, which must be accessible to each instance in the cluster. For example, Path=s3://mybucket/myscript.sh.[Name] - A friendly name to help you identify the bootstrap action. For example, Name=BootstrapAction1[Args] - A comma-separated list of arguments to pass to the bootstrap action script. Arguments can be either a list of values (Args=arg1,arg2,arg3) or a list of key-value pairs, as well as optional values, enclosed in square brackets (Args=[arg1,arg2=arg2value,arg3])",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--applications",
          description:
            "Specifies the applications to install on the cluster. Available applications and their respective versions vary by Amazon EMR release. For more information, see the Amazon EMR Release Guide:https://docs.aws.amazon.com/emr/latest/ReleaseGuide/When using versions of Amazon EMR earlier than 4.0, some applications take optional arguments for configuration. Arguments should either be a comma-separated list of values (Args=arg1,arg2,arg3) or a bracket-enclosed list of values and key-value pairs (Args=[arg1,arg2=arg3,arg4])",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--emrfs",
          description:
            "Specifies EMRFS configuration options, such as consistent view and Amazon S3 encryption parameters.When you use Amazon EMR release version 4.8.0 or later, we recommend that you use the --configurations option together with the emrfs-site configuration classification to configure EMRFS, and use security configurations to configure encryption for EMRFS data in Amazon S3 instead. For more information, see the following topic in the Amazon EMR Management Guide:https://docs.aws.amazon.com/emr/latest/ManagementGuide/emrfs-configure-consistent-view.html",
          args: {
            name: "structure",
          },
        },
        {
          name: "--steps",
          description:
            "Specifies a list of steps to be executed by the cluster. Steps run only on the master node after applications are installed and are used to submit work to a cluster. A step can be specified using the shorthand syntax, by referencing a JSON file or by specifying an inline JSON structure. Args supplied with steps should be a comma-separated list of values (Args=arg1,arg2,arg3) or a bracket-enclosed list of values and key-value pairs (Args=[arg1,arg2=value,arg4)",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--additional-info",
          description:
            "Specifies additional information during cluster creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-from-hbase-backup",
          description:
            "Applies only when using Amazon EMR release versions earlier than 4.0. Launches a new HBase cluster and populates it with data from a previous backup of an HBase cluster. HBase must be installed using the --applications option",
          args: {
            name: "structure",
          },
        },
        {
          name: "--security-configuration",
          description:
            "Specifies the name of a security configuration to use for the cluster. A security configuration defines data encryption settings and other security options. For more information, see the following topic in the Amazon EMR Management Guide:https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-encryption-enable-security-configuration.htmlUse list-security-configurations to get a list of available security configurations in the active account",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-ami-id",
          description:
            "Applies only to Amazon EMR release version 5.7.0 and later. Specifies the AMI ID of a custom AMI to use when Amazon EMR provisions EC2 instances. A custom AMI can be used to encrypt the Amazon EBS root volume. It can also be used instead of bootstrap actions to customize cluster node configurations. For more information, see the following topic in the Amazon EMR Management Guide:https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-custom-ami.html",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-root-volume-size",
          description:
            "This option is available only with Amazon EMR version 4.x and later. Specifies the size, in GiB, of the EBS root device volume of the Amazon Linux AMI that is used for each EC2 instance in the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--repo-upgrade-on-boot",
          description:
            "Applies only when a --custom-ami-id is specified. On first boot, by default, Amazon Linux AMIs connect to package repositories to install security updates before other services start. You can set this parameter using --rep-upgrade-on-boot NONE to disable these updates. CAUTION: This creates additional security risks",
          args: {
            name: "string",
          },
        },
        {
          name: "--kerberos-attributes",
          description:
            "Specifies required cluster attributes for Kerberos when Kerberos authentication is enabled in the specified --security-configuration. Takes the following arguments: Realm - Specifies the name of the Kerberos realm to which all nodes in a cluster belong. For example, Realm=EC2.INTERNAL. KdcAdminPassword - Specifies the password used within the cluster for the kadmin service, which maintains Kerberos principals, password policies, and keytabs for the cluster. CrossRealmTrustPrincipalPassword - Required when establishing a cross-realm trust with a KDC in a different realm. This is the cross-realm principal password, which must be identical across realms. ADDomainJoinUser - Required when establishing trust with an Active Directory domain. This is the User logon name of an AD account with sufficient privileges to join resources to the domain. ADDomainJoinPassword - The AD password for ADDomainJoinUser",
          args: {
            name: "structure",
          },
        },
        {
          name: "--step-concurrency-level",
          description:
            "This command specifies the step concurrency level of the cluster.Default is 1 which is non-concurrent",
          args: {
            name: "integer",
          },
        },
        {
          name: "--managed-scaling-policy",
          description:
            "Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. You can specify the ComputeLimits which include the MaximumCapacityUnits, MaximumCoreCapacityUnits, MinimumCapacityUnits, MaximumOnDemandCapacityUnits and UnitType. For an InstanceFleet cluster, the UnitType must be InstanceFleetUnits. For InstanceGroup clusters, the UnitType can be either VCPU or Instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--placement-group-configs",
          description:
            "Placement group configuration for an Amazon EMR cluster. The configuration specifies the EC2 placement group strategy associated with each EMR Instance Role. Currently, we support placement group only for MASTER role with SPREAD strategy by default. You can opt-in by passing --placement-group-configs InstanceRole=MASTER during cluster creation",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "add-steps",
      description: "Add a list of steps to a cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "A unique string that identifies a cluster. The create-cluster command returns this identifier. You can use the list-clusters command to get cluster IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--steps",
          description:
            "Specifies a list of steps to be executed by the cluster. Steps run only on the master node after applications are installed and are used to submit work to a cluster. A step can be specified using the shorthand syntax, by referencing a JSON file or by specifying an inline JSON structure. Args supplied with steps should be a comma-separated list of values (Args=arg1,arg2,arg3) or a bracket-enclosed list of values and key-value pairs (Args=[arg1,arg2=value,arg4)",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "restore-from-hbase-backup",
      description:
        "Restores HBase from S3. This command is only available when using Amazon EMR versionsearlier than 4.0",
      options: [
        {
          name: "--cluster-id",
          description:
            "A unique string that identifies a cluster. The create-cluster command returns this identifier. You can use the list-clusters command to get cluster IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--dir",
          description:
            "The Amazon S3 location of the Hbase backup. Example: s3://mybucket/mybackup, where mybucket is the specified Amazon S3 bucket and mybackup is the specified backup location. The path argument must begin with s3://, which refers to an Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-version",
          description:
            "The backup version to restore from. If not specified, the latest backup in the specified location is used",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "create-hbase-backup",
      description:
        "Creates a HBase backup in S3. This command is only available when using Amazon EMR versionsearlier than 4.0",
      options: [
        {
          name: "--cluster-id",
          description:
            "A unique string that identifies a cluster. The create-cluster command returns this identifier. You can use the list-clusters command to get cluster IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--dir",
          description:
            "The Amazon S3 location of the Hbase backup. Example: s3://mybucket/mybackup, where mybucket is the specified Amazon S3 bucket and mybackup is the specified backup location. The path argument must begin with s3://, which refers to an Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--consistent",
          description:
            "Performs a consistent backup. Pauses all write operations to the HBase cluster during the backup process",
        },
      ],
    },
    {
      name: "schedule-hbase-backup",
      description:
        "Adds a step to schedule automated HBase backup. This command is only available when using Amazon EMR versionsearlier than 4.0",
      options: [
        {
          name: "--cluster-id",
          description:
            "A unique string that identifies a cluster. The create-cluster command returns this identifier. You can use the list-clusters command to get cluster IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "Backup type. You can specify 'incremental' or 'full'",
          args: {
            name: "string",
          },
        },
        {
          name: "--dir",
          description:
            "The Amazon S3 location of the Hbase backup. Example: s3://mybucket/mybackup, where mybucket is the specified Amazon S3 bucket and mybackup is the specified backup location. The path argument must begin with s3://, which refers to an Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--interval",
          description: "The time between backups",
          args: {
            name: "string",
          },
        },
        {
          name: "--unit",
          description:
            "The time unit for backup's time-interval. You can specify one of the following values: 'minutes', 'hours', or 'days'",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The time of the first backup in ISO format. e.g. 2014-04-21T05:26:10Z. Default is now",
          args: {
            name: "string",
          },
        },
        {
          name: "--consistent",
          description:
            "Performs a consistent backup. Pauses all write operations to the HBase cluster during the backup process",
        },
      ],
    },
    {
      name: "disable-hbase-backups",
      description:
        "Add a step to disable automated HBase backups. This command is only available when using Amazon EMR versionsearlier than 4.0",
      options: [
        {
          name: "--cluster-id",
          description:
            "A unique string that identifies a cluster. The create-cluster command returns this identifier. You can use the list-clusters command to get cluster IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--full",
          description: "Disables full backup",
        },
        {
          name: "--incremental",
          description: "Disables incremental backup",
        },
      ],
    },
    {
      name: "create-default-roles",
      description:
        'Creates the default IAM role EMR_EC2_DefaultRole and EMR_DefaultRole which can be used when creating the cluster using the create-cluster command. The default roles for EMR use managed policies, which are updated automatically to support future EMR functionality.\n\nIf you do not have a Service Role and Instance Profile variable set for your create-cluster command in the AWS CLI config file, create-default-roles will automatically set the values for these variables with these default roles. If you have already set a value for Service Role or Instance Profile, create-default-roles will not automatically set the defaults for these variables in the AWS CLI config file. You can view settings for variables in the config file using the "aws configure get" command.\n',
      options: [
        {
          name: "--iam-endpoint",
          description:
            "The IAM endpoint to call for creating the roles. This is optional and should only be specified when a custom endpoint should be called for IAM operations",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "ssh",
      description:
        'SSH into master node of the cluster.\n\nA value for the variable Key Pair File can be set in the AWS CLI config file using the "aws configure set emr.key_pair_file <value>" command.\n',
      options: [
        {
          name: "--cluster-id",
          description: "Cluster Id of cluster you want to ssh into",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-file",
          description: "Private key file to use for login",
          args: {
            name: "string",
          },
        },
        {
          name: "--command",
          description: "Command to execute on Master Node",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "socks",
      description:
        'Create a socks tunnel on port 8157 from your machine to the master.\n\nA value for the variable Key Pair File can be set in the AWS CLI config file using the "aws configure set emr.key_pair_file <value>" command.\n',
      options: [
        {
          name: "--cluster-id",
          description: "Cluster Id of cluster you want to ssh into",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-file",
          description: "Private key file to use for login",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get",
      description:
        'Get file from master node.\n\nA value for the variable Key Pair File can be set in the AWS CLI config file using the "aws configure set emr.key_pair_file <value>" command.\n',
      options: [
        {
          name: "--cluster-id",
          description: "Cluster Id of cluster you want to get file from",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-file",
          description: "Private key file to use for login",
          args: {
            name: "string",
          },
        },
        {
          name: "--src",
          description: "Source file path on remote host",
          args: {
            name: "string",
          },
        },
        {
          name: "--dest",
          description: "Destination file path on your machine",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "put",
      description:
        'Put file onto the master node.\n\nA value for the variable Key Pair File can be set in the AWS CLI config file using the "aws configure set emr.key_pair_file <value>" command.\n',
      options: [
        {
          name: "--cluster-id",
          description: "Cluster Id of cluster you want to put file onto",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-file",
          description: "Private key file to use for login",
          args: {
            name: "string",
          },
        },
        {
          name: "--src",
          description: "Source file path on local machine",
          args: {
            name: "string",
          },
        },
        {
          name: "--dest",
          description: "Destination file path on remote host",
          args: {
            name: "string",
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
          name: "cluster-running",
          description:
            "Wait until JMESPath query Cluster.Status.State returns RUNNING when polling with ``describe-cluster``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-id",
              description: "The identifier of the cluster to describe",
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
          name: "cluster-terminated",
          description:
            "Wait until JMESPath query Cluster.Status.State returns TERMINATED when polling with ``describe-cluster``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-id",
              description: "The identifier of the cluster to describe",
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
          name: "step-complete",
          description:
            "Wait until JMESPath query Step.Status.State returns COMPLETED when polling with ``describe-step``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-id",
              description:
                "The identifier of the cluster with steps to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--step-id",
              description: "The identifier of the step to describe",
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
