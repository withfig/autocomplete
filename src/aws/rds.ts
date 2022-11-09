const completionSpec: Fig.Spec = {
  name: "rds",
  description:
    "Amazon Relational Database Service  Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique. Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use. This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.  Amazon RDS API Reference    For the alphabetical list of API actions, see API Actions.   For the alphabetical list of data types, see Data Types.   For a list of common query parameters, see Common Parameters.   For descriptions of the error codes, see Common Errors.    Amazon RDS User Guide    For a summary of the Amazon RDS interfaces, see Available RDS Interfaces.   For more information about how to use the Query API, see Using the Query API",
  subcommands: [
    {
      name: "add-role-to-db-cluster",
      description:
        "Associates an Identity and Access Management (IAM) role with a DB cluster",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The name of the DB cluster to associate the IAM role with",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB cluster, for example arn:aws:iam::123456789012:role/AuroraAccessRole",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-name",
          description:
            "The name of the feature for the DB cluster that the IAM role is to be associated with. For information about supported feature names, see DBEngineVersion",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "add-role-to-db-instance",
      description:
        "Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.  To add a role to a DB instance, the status of the DB instance must be available.  This command doesn't apply to RDS Custom",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The name of the DB instance to associate the IAM role with",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to associate with the DB instance, for example arn:aws:iam::123456789012:role/AccessRole",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-name",
          description:
            "The name of the feature for the DB instance that the IAM role is to be associated with. For information about supported feature names, see DBEngineVersion",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "add-source-identifier-to-subscription",
      description:
        "Adds a source identifier to an existing RDS event notification subscription",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the RDS event notification subscription you want to add a source identifier to",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-identifier",
          description:
            "The identifier of the event source to be added. Constraints:   If the source type is a DB instance, a DBInstanceIdentifier value must be supplied.   If the source type is a DB cluster, a DBClusterIdentifier value must be supplied.   If the source type is a DB parameter group, a DBParameterGroupName value must be supplied.   If the source type is a DB security group, a DBSecurityGroupName value must be supplied.   If the source type is a DB snapshot, a DBSnapshotIdentifier value must be supplied.   If the source type is a DB cluster snapshot, a DBClusterSnapshotIdentifier value must be supplied.   If the source type is an RDS Proxy, a DBProxyName value must be supplied",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "add-tags-to-resource",
      description:
        "Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS. For an overview on tagging Amazon RDS resources, see Tagging Amazon RDS Resources",
      options: [
        {
          name: "--resource-name",
          description:
            "The Amazon RDS resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see  Constructing an RDS Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be assigned to the Amazon RDS resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "apply-pending-maintenance-action",
      description:
        "Applies a pending maintenance action to a resource (for example, to a DB instance)",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The RDS Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see  Constructing an RDS Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-action",
          description:
            "The pending maintenance action to apply to this resource. Valid values: system-update, db-upgrade, hardware-maintenance, ca-certificate-rotation",
          args: {
            name: "string",
          },
        },
        {
          name: "--opt-in-type",
          description:
            "A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type immediate can't be undone. Valid values:    immediate - Apply the maintenance action immediately.    next-maintenance - Apply the maintenance action during the next maintenance window for the resource.    undo-opt-in - Cancel any existing next-maintenance opt-in requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "authorize-db-security-group-ingress",
      description:
        "Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC). You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another. For an overview of CIDR ranges, go to the Wikipedia Tutorial.  EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring \u2013 Here\u2019s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-security-group-name",
          description:
            "The name of the DB security group to add authorization to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cidrip",
          description: "The IP range to authorize",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-security-group-name",
          description:
            "Name of the EC2 security group to authorize. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-security-group-id",
          description:
            "Id of the EC2 security group to authorize. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-security-group-owner-id",
          description:
            "Amazon Web Services account number of the owner of the EC2 security group specified in the EC2SecurityGroupName parameter. The Amazon Web Services access key ID isn't an acceptable value. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "backtrack-db-cluster",
      description:
        "Backtracks a DB cluster to a specific time, without creating a new DB cluster. For more information on backtracking, see  Backtracking an Aurora DB Cluster in the Amazon Aurora User Guide.  This action applies only to Aurora MySQL DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier of the DB cluster to be backtracked. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 alphanumeric characters or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: my-cluster1",
          args: {
            name: "string",
          },
        },
        {
          name: "--backtrack-to",
          description:
            "The timestamp of the time to backtrack the DB cluster to, specified in ISO 8601 format. For more information about ISO 8601, see the ISO8601 Wikipedia page.   If the specified time isn't a consistent time for the DB cluster, Aurora automatically chooses the nearest possible consistent time for the DB cluster.  Constraints:   Must contain a valid ISO 8601 timestamp.   Can't contain a timestamp set in the future.   Example: 2017-07-08T18:00Z",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--force",
          description:
            "A value that indicates whether to force the DB cluster to backtrack when binary logging is enabled. Otherwise, an error occurs when binary logging is enabled",
        },
        {
          name: "--no-force",
          description:
            "A value that indicates whether to force the DB cluster to backtrack when binary logging is enabled. Otherwise, an error occurs when binary logging is enabled",
        },
        {
          name: "--use-earliest-time-on-point-in-time-unavailable",
          description:
            "A value that indicates whether to backtrack the DB cluster to the earliest possible backtrack time when BacktrackTo is set to a timestamp earlier than the earliest backtrack time. When this parameter is disabled and BacktrackTo is set to a timestamp earlier than the earliest backtrack time, an error occurs",
        },
        {
          name: "--no-use-earliest-time-on-point-in-time-unavailable",
          description:
            "A value that indicates whether to backtrack the DB cluster to the earliest possible backtrack time when BacktrackTo is set to a timestamp earlier than the earliest backtrack time. When this parameter is disabled and BacktrackTo is set to a timestamp earlier than the earliest backtrack time, an error occurs",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "cancel-export-task",
      description:
        "Cancels an export task in progress that is exporting a snapshot to Amazon S3. Any data that has already been written to the S3 bucket isn't removed",
      options: [
        {
          name: "--export-task-identifier",
          description: "The identifier of the snapshot export task to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "copy-db-cluster-parameter-group",
      description: "Copies the specified DB cluster parameter group",
      options: [
        {
          name: "--source-db-cluster-parameter-group-identifier",
          description:
            "The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see  Constructing an ARN for Amazon RDS in the Amazon Aurora User Guide. Constraints:   Must specify a valid DB cluster parameter group",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-cluster-parameter-group-identifier",
          description:
            "The identifier for the copied DB cluster parameter group. Constraints:   Can't be null, empty, or blank   Must contain from 1 to 255 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-cluster-param-group1",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-cluster-parameter-group-description",
          description:
            "A description for the copied DB cluster parameter group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "copy-db-cluster-snapshot",
      description:
        'Copies a snapshot of a DB cluster. To copy a DB cluster snapshot from a shared manual DB cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot. You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the CopyDBClusterSnapshot operation is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values:    KmsKeyId - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.    TargetDBClusterSnapshotIdentifier - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.    SourceDBClusterSnapshotIdentifier - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the SourceDBClusterSnapshotIdentifier in the presigned URL.   To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by TargetDBClusterSnapshotIdentifier while that DB cluster snapshot is in "copying" status. For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see  Copying a Snapshot in the Amazon Aurora User Guide. For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide',
      options: [
        {
          name: "--source-db-cluster-snapshot-identifier",
          description:
            "The identifier of the DB cluster snapshot to copy. This parameter isn't case-sensitive. You can't copy an encrypted, shared DB cluster snapshot from one Amazon Web Services Region to another. Constraints:   Must specify a valid system snapshot in the \"available\" state.   If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid DB snapshot identifier.   If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid DB cluster snapshot ARN. For more information, go to  Copying Snapshots Across Amazon Web Services Regions in the Amazon Aurora User Guide.   Example: my-cluster-snapshot1",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-cluster-snapshot-identifier",
          description:
            "The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter isn't case-sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: my-cluster-snapshot2",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for an encrypted DB cluster snapshot. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS key. If you copy an encrypted DB cluster snapshot from your Amazon Web Services account, you can specify a value for KmsKeyId to encrypt the copy with a new KMS key. If you don't specify a value for KmsKeyId, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot. If you copy an encrypted DB cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for KmsKeyId. To copy an encrypted DB cluster snapshot to another Amazon Web Services Region, you must set KmsKeyId to the Amazon Web Services KMS key identifier you want to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services Region that they are created in, and you can't use KMS keys from one Amazon Web Services Region in another Amazon Web Services Region. If you copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description:
            "When you are copying a DB cluster snapshot from one Amazon Web Services GovCloud (US) Region to another, the URL that contains a Signature Version 4 signed request for the CopyDBClusterSnapshot API operation in the Amazon Web Services Region that contains the source DB cluster snapshot to copy. Use the PreSignedUrl parameter when copying an encrypted DB cluster snapshot from another Amazon Web Services Region. Don't specify PreSignedUrl when copying an encrypted DB cluster snapshot in the same Amazon Web Services Region. This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other Amazon Web Services Regions. The presigned URL must be a valid request for the CopyDBClusterSnapshot API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster snapshot to copy. The presigned URL request must contain the following parameter values:    KmsKeyId - The KMS key identifier for the KMS key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. This is the same identifier for both the CopyDBClusterSnapshot operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL.    DestinationRegion - The name of the Amazon Web Services Region that the DB cluster snapshot is to be created in.    SourceDBClusterSnapshotIdentifier - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 Amazon Web Services Region, then your SourceDBClusterSnapshotIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115.   To learn how to generate a Signature Version 4 signed request, see  Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and  Signature Version 4 Signing Process.  If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags",
          description:
            "A value that indicates whether to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot. By default, tags are not copied",
        },
        {
          name: "--no-copy-tags",
          description:
            "A value that indicates whether to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot. By default, tags are not copied",
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-region",
          description:
            "The ID of the region that contains the snapshot to be copied",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "copy-db-parameter-group",
      description: "Copies the specified DB parameter group",
      options: [
        {
          name: "--source-db-parameter-group-identifier",
          description:
            "The identifier or ARN for the source DB parameter group. For information about creating an ARN, see  Constructing an ARN for Amazon RDS in the Amazon RDS User Guide. Constraints:   Must specify a valid DB parameter group",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-parameter-group-identifier",
          description:
            "The identifier for the copied DB parameter group. Constraints:   Can't be null, empty, or blank   Must contain from 1 to 255 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-db-parameter-group",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-parameter-group-description",
          description: "A description for the copied DB parameter group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "copy-db-snapshot",
      description:
        "Copies the specified DB snapshot. The source DB snapshot must be in the available state. You can copy a snapshot from one Amazon Web Services Region to another. In that case, the Amazon Web Services Region where you call the CopyDBSnapshot operation is the destination Amazon Web Services Region for the DB snapshot copy. This command doesn't apply to RDS Custom. For more information about copying snapshots, see Copying a DB Snapshot in the Amazon RDS User Guide",
      options: [
        {
          name: "--source-db-snapshot-identifier",
          description:
            'The identifier for the source DB snapshot. If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid DB snapshot identifier. For example, you might specify rds:mysql-instance1-snapshot-20130805. If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid DB snapshot ARN. For example, you might specify arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805. If you are copying from a shared manual DB snapshot, this parameter must be the Amazon Resource Name (ARN) of the shared DB snapshot. If you are copying an encrypted snapshot this parameter must be in the ARN format for the source Amazon Web Services Region. Constraints:   Must specify a valid system snapshot in the "available" state.   Example: rds:mydb-2012-04-02-00-01  Example: arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805',
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-snapshot-identifier",
          description:
            "The identifier for the copy of the snapshot. Constraints:   Can't be null, empty, or blank   Must contain from 1 to 255 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-db-snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for an encrypted DB snapshot. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you copy an encrypted DB snapshot from your Amazon Web Services account, you can specify a value for this parameter to encrypt the copy with a new KMS key. If you don't specify a value for this parameter, then the copy of the DB snapshot is encrypted with the same Amazon Web Services KMS key as the source DB snapshot. If you copy an encrypted DB snapshot that is shared from another Amazon Web Services account, then you must specify a value for this parameter. If you specify this parameter when you copy an unencrypted snapshot, the copy is encrypted. If you copy an encrypted snapshot to a different Amazon Web Services Region, then you must specify an Amazon Web Services KMS key identifier for the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services Region that they are created in, and you can't use KMS keys from one Amazon Web Services Region in another Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--copy-tags",
          description:
            "A value that indicates whether to copy all tags from the source DB snapshot to the target DB snapshot. By default, tags are not copied",
        },
        {
          name: "--no-copy-tags",
          description:
            "A value that indicates whether to copy all tags from the source DB snapshot to the target DB snapshot. By default, tags are not copied",
        },
        {
          name: "--pre-signed-url",
          description:
            "When you are copying a snapshot from one Amazon Web Services GovCloud (US) Region to another, the URL that contains a Signature Version 4 signed request for the CopyDBSnapshot API operation in the source Amazon Web Services Region that contains the source DB snapshot to copy. This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other Amazon Web Services Regions. You must specify this parameter when you copy an encrypted DB snapshot from another Amazon Web Services Region by using the Amazon RDS API. Don't specify PreSignedUrl when you are copying an encrypted DB snapshot in the same Amazon Web Services Region. The presigned URL must be a valid request for the CopyDBClusterSnapshot API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster snapshot to copy. The presigned URL request must contain the following parameter values:    DestinationRegion - The Amazon Web Services Region that the encrypted DB snapshot is copied to. This Amazon Web Services Region is the same one where the CopyDBSnapshot operation is called that contains this presigned URL. For example, if you copy an encrypted DB snapshot from the us-west-2 Amazon Web Services Region to the us-east-1 Amazon Web Services Region, then you call the CopyDBSnapshot operation in the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the CopyDBSnapshot operation in the us-west-2 Amazon Web Services Region. For this example, the DestinationRegion in the presigned URL must be set to the us-east-1 Amazon Web Services Region.    KmsKeyId - The KMS key identifier for the KMS key to use to encrypt the copy of the DB snapshot in the destination Amazon Web Services Region. This is the same identifier for both the CopyDBSnapshot operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL.    SourceDBSnapshotIdentifier - The DB snapshot identifier for the encrypted snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB snapshot from the us-west-2 Amazon Web Services Region, then your SourceDBSnapshotIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20161115.   To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and Signature Version 4 Signing Process.  If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The name of an option group to associate with the copy of the snapshot. Specify this option if you are copying a snapshot from one Amazon Web Services Region to another, and your DB instance uses a nondefault option group. If your source DB instance uses Transparent Data Encryption for Oracle or Microsoft SQL Server, you must specify this option when copying across Amazon Web Services Regions. For more information, see Option group considerations in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-custom-availability-zone",
          description:
            "The external custom Availability Zone (CAZ) identifier for the target CAZ. Example: rds-caz-aiqhTgQv",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-region",
          description:
            "The ID of the region that contains the snapshot to be copied",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "copy-option-group",
      description: "Copies the specified option group",
      options: [
        {
          name: "--source-option-group-identifier",
          description:
            "The identifier for the source option group. Constraints:   Must specify a valid option group",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-option-group-identifier",
          description:
            "The identifier for the copied option group. Constraints:   Can't be null, empty, or blank   Must contain from 1 to 255 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-option-group",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-option-group-description",
          description: "The description for the copied option group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-custom-db-engine-version",
      description:
        "Creates a custom DB engine version (CEV). A CEV is a binary volume snapshot of a database engine and specific AMI. The supported engines are the following:   Oracle Database 12.1 Enterprise Edition with the January 2021 or later RU/RUR   Oracle Database 19c Enterprise Edition with the January 2021 or later RU/RUR   Amazon RDS, which is a fully managed service, supplies the Amazon Machine Image (AMI) and database software. The Amazon RDS database software is preinstalled, so you need only select a DB engine and version, and create your database. With Amazon RDS Custom for Oracle, you upload your database installation files in Amazon S3. When you create a custom engine version, you specify the files in a JSON document called a CEV manifest. This document describes installation .zip files stored in Amazon S3. RDS Custom creates your CEV from the installation files that you provided. This service model is called Bring Your Own Media (BYOM). Creation takes approximately two hours. If creation fails, RDS Custom issues RDS-EVENT-0196 with the message Creation failed for custom engine version, and includes details about the failure. For example, the event prints missing files. After you create the CEV, it is available for use. You can create multiple CEVs, and create multiple RDS Custom instances from any CEV. You can also change the status of a CEV to make it available or inactive.  The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the CreateCustomDbEngineVersion event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the CreateCustomDbEngineVersion event.  For more information, see  Creating a CEV in the Amazon RDS User Guide",
      options: [
        {
          name: "--engine",
          description:
            "The database engine to use for your custom engine version (CEV). The only supported value is custom-oracle-ee",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The name of your CEV. The name format is 19.customized_string . For example, a valid name is 19.my_cev1. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of Engine and EngineVersion is unique per customer per Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-installation-files-s3-bucket-name",
          description:
            "The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is my-custom-installation-files",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-installation-files-s3-prefix",
          description:
            "The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is 123456789012/cev1. If this setting isn't specified, no prefix is assumed",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS. If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in  Creating a symmetric encryption KMS key in the Amazon Web Services Key Management Service Developer Guide. You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description of your CEV",
          args: {
            name: "string",
          },
        },
        {
          name: "--manifest",
          description:
            "The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed. The following JSON fields are valid:  MediaImportTemplateVersion  Version of the CEV manifest. The date is in the format YYYY-MM-DD.  databaseInstallationFileNames  Ordered list of installation files for the CEV.  opatchFileNames  Ordered list of OPatch installers used for the Oracle DB engine.  psuRuPatchFileNames  The PSU and RU patches for this CEV.  OtherPatchFileNames  The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see  Creating the CEV manifest in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-cluster",
      description:
        "Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster. You can use the ReplicationSourceIdentifier parameter to create an Amazon Aurora DB cluster as a read replica of another DB cluster or Amazon RDS MySQL or PostgreSQL DB instance. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--availability-zones",
          description:
            "A list of Availability Zones (AZs) where DB instances in the DB cluster can be created. For information on Amazon Web Services Regions and Availability Zones, see Choosing the Regions and Availability Zones in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
          args: {
            name: "list",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups are retained. Default: 1 Constraints:   Must be a value from 1 to 35   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "integer",
          },
        },
        {
          name: "--character-set-name",
          description:
            "A value that indicates that the DB cluster should be associated with the specified CharacterSet. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name for your database of up to 64 alphanumeric characters. If you do not provide a name, Amazon RDS doesn't create a database in the DB cluster you are creating. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: my-cluster1  Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with this DB cluster. If you do not specify a value, then the default DB cluster parameter group for the specified DB engine and version is used. Constraints:   If supplied, must match the name of an existing DB cluster parameter group.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with this DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "A DB subnet group to associate with this DB cluster. This setting is required to create a Multi-AZ DB cluster. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mydbsubnetgroup  Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this DB cluster. Valid Values:    aurora (for MySQL 5.6-compatible Aurora)    aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)    aurora-postgresql     mysql     postgres    Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            'The version number of the database engine to use. To list all of the available engine versions for MySQL 5.6-compatible Aurora, use the following command:  aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora, use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for Aurora PostgreSQL, use the following command:  aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for RDS for MySQL, use the following command:  aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for RDS for PostgreSQL, use the following command:  aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"   Aurora MySQL  For information, see MySQL on Amazon RDS Versions in the Amazon Aurora User Guide.  Aurora PostgreSQL  For information, see Amazon Aurora PostgreSQL releases and engine versions in the Amazon Aurora User Guide.  MySQL  For information, see MySQL on Amazon RDS Versions in the Amazon RDS User Guide.  PostgreSQL  For information, see Amazon RDS for PostgreSQL versions and extensions in the Amazon RDS User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters',
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the instances in the DB cluster accept connections.  RDS for MySQL and Aurora MySQL  Default: 3306  Valid values: 1150-65535   RDS for PostgreSQL and Aurora PostgreSQL  Default: 5432  Valid values: 1150-65535  Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "integer",
          },
        },
        {
          name: "--master-username",
          description:
            "The name of the master user for the DB cluster. Constraints:   Must be 1 to 16 letters or numbers.   First character must be a letter.   Can't be a reserved word for the chosen database engine.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-user-password",
          description:
            'The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@". Constraints: Must contain from 8 to 41 characters. Valid for: Aurora DB clusters and Multi-AZ DB clusters',
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "A value that indicates that the DB cluster should be associated with the specified option group. DB clusters are associated with a default option group that can't be modified",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see  Backup window in the Amazon Aurora User Guide. Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see  Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-source-identifier",
          description:
            "The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to assign to the DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-encrypted",
          description:
            "A value that indicates whether the DB cluster is encrypted. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-storage-encrypted",
          description:
            "A value that indicates whether the DB cluster is encrypted. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for an encrypted DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. When a KMS key isn't specified in KmsKeyId:   If ReplicationSourceIdentifier identifies an encrypted source, then Amazon RDS will use the KMS key used to encrypt the source. Otherwise, Amazon RDS will use your default KMS key.   If the StorageEncrypted parameter is enabled and ReplicationSourceIdentifier isn't specified, then Amazon RDS will use your default KMS key.   There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. If you create a read replica of an encrypted DB cluster in another Amazon Web Services Region, you must set KmsKeyId to a KMS key identifier that is valid in the destination Amazon Web Services Region. This KMS key is used to encrypt the read replica in that Amazon Web Services Region. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description:
            "When you are replicating a DB cluster from one Amazon Web Services GovCloud (US) Region to another, an URL that contains a Signature Version 4 signed request for the CreateDBCluster operation to be called in the source Amazon Web Services Region where the DB cluster is replicated from. Specify PreSignedUrl only when you are performing cross-Region replication from an encrypted DB cluster. The presigned URL must be a valid request for the CreateDBCluster API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster to copy. The presigned URL request must contain the following parameter values:    KmsKeyId - The KMS key identifier for the KMS key to use to encrypt the copy of the DB cluster in the destination Amazon Web Services Region. This should refer to the same KMS key for both the CreateDBCluster operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL.    DestinationRegion - The name of the Amazon Web Services Region that Aurora read replica will be created in.    ReplicationSourceIdentifier - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster from the us-west-2 Amazon Web Services Region, then your ReplicationSourceIdentifier would look like Example: arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1.   To learn how to generate a Signature Version 4 signed request, see  Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and  Signature Version 4 Signing Process.  If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.  Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--backtrack-window",
          description:
            "The target backtrack window, in seconds. To disable backtracking, set this value to 0. Default: 0 Constraints:   If specified, this value must be set to a number from 0 to 259,200 (72 hours).   Valid for: Aurora MySQL DB clusters only",
          args: {
            name: "long",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used.  RDS for MySQL  Possible values are error, general, and slowquery.  RDS for PostgreSQL  Possible values are postgresql and upgrade.  Aurora MySQL  Possible values are audit, error, general, and slowquery.  Aurora PostgreSQL  Possible value is postgresql. For more information about exporting CloudWatch Logs for Amazon RDS, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "list",
          },
        },
        {
          name: "--engine-mode",
          description:
            "The DB engine mode of the DB cluster, either provisioned, serverless, parallelquery, global, or multimaster. The parallelquery engine mode isn't required for Aurora MySQL version 1.23 and higher 1.x versions, and version 2.09 and higher 2.x versions. The global engine mode isn't required for Aurora MySQL version 1.22 and higher 1.x versions, and global engine mode isn't required for any 2.x versions. The multimaster engine mode only applies for DB clusters created with Aurora MySQL version 5.6.10a. The serverless engine mode only applies for Aurora Serverless v1 DB clusters. For Aurora PostgreSQL, the global engine mode isn't required, and both the parallelquery and the multimaster engine modes currently aren't supported. Limitations and requirements apply to some DB engine modes. For more information, see the following sections in the Amazon Aurora User Guide:    Limitations of Aurora Serverless v1     Requirements for Aurora Serverless v2     Limitations of Parallel Query     Limitations of Aurora Global Databases     Limitations of Multi-Master Clusters    Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-configuration",
          description:
            "For DB clusters in serverless DB engine mode, the scaling properties of the DB cluster. Valid for: Aurora DB clusters only",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--global-cluster-identifier",
          description:
            "The global cluster ID of an Aurora cluster that becomes the primary cluster in the new global database cluster. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-http-endpoint",
          description:
            "A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint is disabled. When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database from inside the RDS console with the query editor. For more information, see Using the Data API for Aurora Serverless v1 in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--no-enable-http-endpoint",
          description:
            "A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint is disabled. When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database from inside the RDS console with the query editor. For more information, see Using the Data API for Aurora Serverless v1 in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to create the DB cluster in. For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-global-write-forwarding",
          description:
            "A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an Aurora global database (GlobalCluster). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by the FailoverGlobalCluster API operation, but it does nothing until then. Valid for: Aurora DB clusters only",
        },
        {
          name: "--no-enable-global-write-forwarding",
          description:
            "A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an Aurora global database (GlobalCluster). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by the FailoverGlobalCluster API operation, but it does nothing until then. Valid for: Aurora DB clusters only",
        },
        {
          name: "--db-cluster-instance-class",
          description:
            "The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes and availability for your engine, see DB instance class in the Amazon RDS User Guide. This setting is required to create a Multi-AZ DB cluster. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--allocated-storage",
          description:
            "The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. This setting is required to create a Multi-AZ DB cluster. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB cluster. This setting is required to create a Multi-AZ DB cluster. Valid values: io1  When specified, a value for the Iops parameter is required. Default: io1  Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid Iops values, see Amazon RDS Provisioned IOPS storage to improve performance in the Amazon RDS User Guide. This setting is required to create a Multi-AZ DB cluster. Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB cluster. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB cluster is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target Region doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.   Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB cluster is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target Region doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.   Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically. Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically. Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--monitoring-interval",
          description:
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60  Valid for: Multi-AZ DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting up and enabling Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, supply a MonitoringRoleArn value. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to turn on Performance Insights for the DB cluster. For more information, see  Using Amazon Performance Insights in the Amazon RDS User Guide. Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to turn on Performance Insights for the DB cluster. For more information, see  Using Amazon Performance Insights in the Amazon RDS User Guide. Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you don't specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:   7    month * 31, where month is a number of months from 1-23   731   For example, the following values are valid:   93 (3 months * 31)   341 (11 months * 31)   589 (19 months * 31)   731   If you specify a retention period such as 94, which isn't a valid value, RDS issues an error. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--serverless-v2-scaling-configuration",
          description:
            "Contains the scaling configuration of an Aurora Serverless v2 DB cluster. For more information, see Using Amazon Aurora Serverless v2 in the Amazon Aurora User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB cluster. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon Aurora User Guide.  Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-region",
          description:
            "The ID of the region that contains the source for the db cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-cluster-endpoint",
      description:
        "Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.  This action applies only to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-endpoint-identifier",
          description:
            "The identifier to use for the new endpoint. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-type",
          description: "The type of the endpoint, one of: READER, WRITER, ANY",
          args: {
            name: "string",
          },
        },
        {
          name: "--static-members",
          description:
            "List of DB instance identifiers that are part of the custom endpoint group",
          args: {
            name: "list",
          },
        },
        {
          name: "--excluded-members",
          description:
            "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. This parameter is relevant only if the list of static members is empty",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags to be assigned to the Amazon RDS resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-cluster-parameter-group",
      description:
        "Creates a new DB cluster parameter group. Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster. A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBClusterParameterGroup. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using ModifyDBCluster. When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.  After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBClusterParameters operation to verify that your DB cluster parameter group has been created or modified.  For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group. Constraints:   Must not match the name of an existing DB cluster parameter group.    This value is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-family",
          description:
            'The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.  Aurora MySQL  Example: aurora5.6, aurora-mysql5.7, aurora-mysql8.0   Aurora PostgreSQL  Example: aurora-postgresql9.6   RDS for MySQL  Example: mysql8.0   RDS for PostgreSQL  Example: postgres12  To list all of the available parameter group families for a DB engine, use the following command:  aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine &lt;engine&gt;  For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:  aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine aurora-postgresql   The output contains duplicates.  The following are the valid DB engine values:    aurora (for MySQL 5.6-compatible Aurora)    aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)    aurora-postgresql     mysql     postgres',
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the DB cluster parameter group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags to assign to the DB cluster parameter group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-cluster-snapshot",
      description:
        "Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-snapshot-identifier",
          description:
            "The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: my-cluster1-snapshot1",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The identifier of the DB cluster to create a snapshot for. This parameter isn't case-sensitive. Constraints:   Must match the identifier of an existing DBCluster.   Example: my-cluster1",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be assigned to the DB cluster snapshot",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-instance",
      description:
        "Creates a new DB instance. The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster. For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance to the cluster. For more information about creating an RDS DB instance, see  Creating an Amazon RDS DB instance in the Amazon RDS User Guide. For more information about creating a DB instance in an Aurora DB cluster, see  Creating an Amazon Aurora DB cluster in the Amazon Aurora User Guide",
      options: [
        {
          name: "--db-name",
          description:
            "The meaning of this parameter differs according to the database engine you use.  MySQL  The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints:   Must contain 1 to 64 letters or numbers.   Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).   Can't be a word reserved by the specified database engine    MariaDB  The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints:   Must contain 1 to 64 letters or numbers.   Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).   Can't be a word reserved by the specified database engine    PostgreSQL  The name of the database to create when the DB instance is created. If this parameter isn't specified, a database named postgres is created in the DB instance. Constraints:   Must contain 1 to 63 letters, numbers, or underscores.   Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).   Can't be a word reserved by the specified database engine    Oracle  The Oracle System ID (SID) of the created DB instance. If you specify null, the default value ORCL is used. You can't specify the string NULL, or any other reserved word, for DBName. Default: ORCL  Constraints:   Can't be longer than 8 characters    Amazon RDS Custom for Oracle  The Oracle System ID (SID) of the created RDS Custom DB instance. If you don't specify a value, the default value is ORCL. Default: ORCL  Constraints:   It must contain 1 to 8 alphanumeric characters.   It must contain a letter.   It can't be a word reserved by the database engine.    Amazon RDS Custom for SQL Server  Not applicable. Must be null.  SQL Server  Not applicable. Must be null.  Amazon Aurora MySQL  The name of the database to create when the primary DB instance of the Aurora MySQL DB cluster is created. If this parameter isn't specified for an Aurora MySQL DB cluster, no database is created in the DB cluster. Constraints:   It must contain 1 to 64 alphanumeric characters.   It can't be a word reserved by the database engine.    Amazon Aurora PostgreSQL  The name of the database to create when the primary DB instance of the Aurora PostgreSQL DB cluster is created. If this parameter isn't specified for an Aurora PostgreSQL DB cluster, a database named postgres is created in the DB cluster. Constraints:   It must contain 1 to 63 alphanumeric characters.   It must begin with a letter or an underscore. Subsequent characters can be letters, underscores, or digits (0 to 9).   It can't be a word reserved by the database engine",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-identifier",
          description:
            "The DB instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: mydbinstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--allocated-storage",
          description:
            "The amount of storage in gibibytes (GiB) to allocate for the DB instance. Type: Integer  Amazon Aurora  Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.  Amazon RDS Custom  Constraints to the amount of storage for each storage type are the following:   General Purpose (SSD) storage (gp2): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server.   Provisioned IOPS storage (io1): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server.    MySQL  Constraints to the amount of storage for each storage type are the following:   General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.   Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.   Magnetic storage (standard): Must be an integer from 5 to 3072.    MariaDB  Constraints to the amount of storage for each storage type are the following:   General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.   Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.   Magnetic storage (standard): Must be an integer from 5 to 3072.    PostgreSQL  Constraints to the amount of storage for each storage type are the following:   General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.   Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.   Magnetic storage (standard): Must be an integer from 5 to 3072.    Oracle  Constraints to the amount of storage for each storage type are the following:   General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.   Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.   Magnetic storage (standard): Must be an integer from 10 to 3072.    SQL Server  Constraints to the amount of storage for each storage type are the following:   General Purpose (SSD) storage (gp2):   Enterprise and Standard editions: Must be an integer from 20 to 16384.   Web and Express editions: Must be an integer from 20 to 16384.     Provisioned IOPS storage (io1):   Enterprise and Standard editions: Must be an integer from 100 to 16384.   Web and Express editions: Must be an integer from 100 to 16384.     Magnetic storage (standard):   Enterprise and Standard editions: Must be an integer from 20 to 1024.   Web and Express editions: Must be an integer from 20 to 1024",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the DB instance, for example db.m5.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB instance classes in the Amazon RDS User Guide or Aurora DB instance classes in the Amazon Aurora User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this instance. Not every database engine is available for every Amazon Web Services Region. Valid Values:    aurora (for MySQL 5.6-compatible Aurora)    aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)    aurora-postgresql     custom-oracle-ee (for RDS Custom for Oracle instances)     custom-sqlserver-ee (for RDS Custom for SQL Server instances)     custom-sqlserver-se (for RDS Custom for SQL Server instances)     custom-sqlserver-web (for RDS Custom for SQL Server instances)     mariadb     mysql     oracle-ee     oracle-ee-cdb     oracle-se2     oracle-se2-cdb     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-username",
          description:
            "The name for the master user.  Amazon Aurora  Not applicable. The name for the master user is managed by the DB cluster.  Amazon RDS  Constraints:   Required.   Must be 1 to 16 letters, numbers, or underscores.   First character must be a letter.   Can't be a reserved word for the chosen database engine",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-user-password",
          description:
            'The password for the master user. The password can include any printable ASCII character except "/", """, or "@".  Amazon Aurora  Not applicable. The password for the master user is managed by the DB cluster.  MariaDB  Constraints: Must contain from 8 to 41 characters.  Microsoft SQL Server  Constraints: Must contain from 8 to 128 characters.  MySQL  Constraints: Must contain from 8 to 41 characters.  Oracle  Constraints: Must contain from 8 to 30 characters.  PostgreSQL  Constraints: Must contain from 8 to 128 characters',
          args: {
            name: "string",
          },
        },
        {
          name: "--db-security-groups",
          description:
            "A list of DB security groups to associate with this DB instance. This setting applies to the legacy EC2-Classic platform, which is no longer used to create new DB instances. Use the VpcSecurityGroupIds setting instead",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of Amazon EC2 VPC security groups to associate with this DB instance.  Amazon Aurora  Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. Default: The default EC2 VPC security group for the DB subnet group's VPC",
          args: {
            name: "list",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The Availability Zone (AZ) where the database will be created. For information on Amazon Web Services Regions and Availability Zones, see Regions and Availability Zones.  Amazon Aurora  Each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one. Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Example: us-east-1d  Constraint: The AvailabilityZone parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "A DB subnet group to associate with this DB instance. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see Amazon RDS Maintenance Window. Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If you do not specify a value, then the default DB parameter group for the specified DB engine and version is used. This setting doesn't apply to RDS Custom. Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.  Amazon Aurora  Not applicable. The retention period for automated backups is managed by the DB cluster. Default: 1 Constraints:   Must be a value from 0 to 35   Can't be set to 0 if the DB instance is a source to read replicas   Can't be set to 0 for an RDS Custom for Oracle DB instance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see Backup window in the Amazon RDS User Guide.  Amazon Aurora  Not applicable. The daily time range for creating automated backups is managed by the DB cluster. Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the database accepts connections.  MySQL  Default: 3306  Valid values: 1150-65535  Type: Integer  MariaDB  Default: 3306  Valid values: 1150-65535  Type: Integer  PostgreSQL  Default: 5432  Valid values: 1150-65535  Type: Integer  Oracle  Default: 1521  Valid values: 1150-65535   SQL Server  Default: 1433  Valid values: 1150-65535 except 1234, 1434, 3260, 3343, 3389, 47001, and 49152-49156.  Amazon Aurora  Default: 3306  Valid values: 1150-65535  Type: Integer",
          args: {
            name: "integer",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable. DB instance Availability Zones (AZs) are managed by the DB cluster",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable. DB instance Availability Zones (AZs) are managed by the DB cluster",
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to use. For a list of valid engine versions, use the DescribeDBEngineVersions operation. The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every Amazon Web Services Region.  Amazon Aurora  Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.  Amazon RDS Custom for Oracle  A custom engine version (CEV) that you have previously created. This setting is required for RDS Custom for Oracle. The CEV name has the following format: 19.customized_string . An example identifier is 19.my_cev1. For more information, see  Creating an RDS Custom for Oracle DB instance in the Amazon RDS User Guide.  Amazon RDS Custom for SQL Server  See RDS Custom for SQL Server general requirements in the Amazon RDS User Guide.  MariaDB  For information, see MariaDB on Amazon RDS Versions in the Amazon RDS User Guide.  Microsoft SQL Server  For information, see Microsoft SQL Server Versions on Amazon RDS in the Amazon RDS User Guide.  MySQL  For information, see MySQL on Amazon RDS Versions in the Amazon RDS User Guide.  Oracle  For information, see Oracle Database Engine Release Notes in the Amazon RDS User Guide.  PostgreSQL  For information, see Amazon RDS for PostgreSQL versions and extensions in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically. If you create an RDS Custom DB instance, you must set AutoMinorVersionUpgrade to false",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically. If you create an RDS Custom DB instance, you must set AutoMinorVersionUpgrade to false",
        },
        {
          name: "--license-model",
          description:
            "License model information for this DB instance. Valid values: license-included | bring-your-own-license | general-public-license  This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance. For information about valid Iops values, see Amazon RDS Provisioned IOPS storage to improve performance in the Amazon RDS User Guide. Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL DB instances, must be a multiple between .5 and 50 of the storage amount for the DB instance. For SQL Server DB instances, must be a multiple between 1 and 50 of the storage amount for the DB instance.  Amazon Aurora  Not applicable. Storage is managed by the DB cluster",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description:
            "A value that indicates that the DB instance should be associated with the specified option group. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance after it is associated with a DB instance. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable",
          args: {
            name: "string",
          },
        },
        {
          name: "--character-set-name",
          description:
            "For supported engines, this value indicates that the DB instance should be associated with the specified CharacterSet. This setting doesn't apply to RDS Custom. However, if you need to change the character set, you can change it on the database itself.  Amazon Aurora  Not applicable. The character set is managed by the DB cluster. For more information, see CreateDBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--nchar-character-set-name",
          description:
            "The name of the NCHAR character set for the Oracle DB instance. This parameter doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target Region doesn\u2019t have an internet gateway attached to it, the DB instance is private.   If the default VPC in the target Region has an internet gateway attached to it, the DB instance is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an internet gateway attached to it, the DB instance is private.   If the subnets are part of a VPC that has an internet gateway attached to it, the DB instance is public",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target Region doesn\u2019t have an internet gateway attached to it, the DB instance is private.   If the default VPC in the target Region has an internet gateway attached to it, the DB instance is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an internet gateway attached to it, the DB instance is private.   If the subnets are part of a VPC that has an internet gateway attached to it, the DB instance is public",
        },
        {
          name: "--tags",
          description: "Tags to assign to the DB instance",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The identifier of the DB cluster that the instance will belong to. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB instance. Valid values: standard | gp2 | io1  If you specify io1, you must also include a value for the Iops parameter. Default: io1 if the Iops parameter is specified, otherwise gp2   Amazon Aurora  Not applicable. Storage is managed by the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-arn",
          description:
            "The ARN from the key store with which to associate the instance for TDE encryption. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-password",
          description:
            "The password for the given ARN from the key store in order to access the device. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-encrypted",
          description:
            "A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted. For RDS Custom instances, either set this parameter to true or leave it unset. If you set this parameter to false, RDS reports an error.  Amazon Aurora  Not applicable. The encryption for DB instances is managed by the DB cluster",
        },
        {
          name: "--no-storage-encrypted",
          description:
            "A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted. For RDS Custom instances, either set this parameter to true or leave it unset. If you set this parameter to false, RDS reports an error.  Amazon Aurora  Not applicable. The encryption for DB instances is managed by the DB cluster",
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for an encrypted DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.  Amazon Aurora  Not applicable. The Amazon Web Services KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster. If StorageEncrypted is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.  Amazon RDS Custom  A KMS key is required for RDS Custom instances. For most RDS engines, if you leave this parameter empty while enabling StorageEncrypted, the engine uses the default KMS key. However, RDS Custom doesn't use the default key when this parameter is empty. You must explicitly specify a key",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable. The domain is managed by the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.  Amazon Aurora  Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.  Amazon Aurora  Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting",
        },
        {
          name: "--monitoring-interval",
          description:
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, then you must set MonitoringInterval to a value other than 0. This setting doesn't apply to RDS Custom. Valid Values: 0, 1, 5, 10, 15, 30, 60",
          args: {
            name: "integer",
          },
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting Up and Enabling Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable. The domain is managed by the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--promotion-tier",
          description:
            "A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see  Fault Tolerance for an Aurora DB Cluster in the Amazon Aurora User Guide. This setting doesn't apply to RDS Custom. Default: 1 Valid Values: 0 - 15",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timezone",
          description:
            "The time zone of the DB instance. The time zone parameter is currently supported only by Microsoft SQL Server",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable. Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable. Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster",
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:   7    month * 31, where month is a number of months from 1-23   731   For example, the following values are valid:   93 (3 months * 31)   341 (11 months * 31)   589 (19 months * 31)   731   If you specify a retention period such as 94, which isn't a valid value, RDS issues an error. This setting doesn't apply to RDS Custom",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine. For more information, see  Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide.  Amazon Aurora  Not applicable. CloudWatch Logs exports are managed by the DB cluster.  RDS Custom  Not applicable.  MariaDB  Possible values are audit, error, general, and slowquery.  Microsoft SQL Server  Possible values are agent and error.  MySQL  Possible values are audit, error, general, and slowquery.  Oracle  Possible values are alert, audit, listener, trace, and oemagent.  PostgreSQL  Possible values are postgresql and upgrade",
          args: {
            name: "list",
          },
        },
        {
          name: "--processor-features",
          description:
            "The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable",
          args: {
            name: "list",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance.  Amazon Aurora  Not applicable. You can enable or disable deletion protection for the DB cluster. For more information, see CreateDBCluster. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance.  Amazon Aurora  Not applicable. You can enable or disable deletion protection for the DB cluster. For more information, see CreateDBCluster. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster",
        },
        {
          name: "--max-allocated-storage",
          description:
            "The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable. Storage is managed by the DB cluster",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide",
        },
        {
          name: "--no-enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide",
        },
        {
          name: "--custom-iam-instance-profile",
          description:
            "The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:   The profile must exist in your account.   The profile must have an IAM role that Amazon EC2 has permissions to assume.   The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom.   For the list of permissions required for the IAM role, see  Configure IAM and your VPC in the Amazon RDS User Guide. This setting is required for RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-target",
          description:
            "Specifies where automated backups and manual snapshots are stored. Possible values are outposts (Amazon Web Services Outposts) and region (Amazon Web Services Region). The default is region. For more information, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB instance. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-instance-read-replica",
      description:
        "Creates a new DB instance that acts as a read replica for an existing source DB instance. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. For more information, see Working with Read Replicas in the Amazon RDS User Guide. Amazon Aurora doesn't support this operation. Call the CreateDBInstance operation to create a DB instance for an Aurora DB cluster. All read replica DB instances are created with backups disabled. All other DB instance attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance, except as specified.  Your source DB instance must have backup retention enabled",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The DB instance identifier of the read replica. This identifier is the unique key that identifies a DB instance. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-db-instance-identifier",
          description:
            "The identifier of the DB instance that will act as the source for the read replica. Each DB instance can have up to five read replicas. Constraints:   Must be the identifier of an existing MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server DB instance.   Can specify a DB instance that is a MySQL read replica only if the source is running MySQL 5.6 or later.   For the limitations of Oracle read replicas, see Read Replica Limitations with Oracle in the Amazon RDS User Guide.   For the limitations of SQL Server read replicas, see Read Replica Limitations with Microsoft SQL Server in the Amazon RDS User Guide.   Can specify a PostgreSQL DB instance only if the source is running PostgreSQL 9.3.5 or later (9.4.7 and higher for cross-Region replication).   The specified DB instance must have automatic backups enabled, that is, its backup retention period must be greater than 0.   If the source DB instance is in the same Amazon Web Services Region as the read replica, specify a valid DB instance identifier.   If the source DB instance is in a different Amazon Web Services Region from the read replica, specify a valid DB instance ARN. For more information, see Constructing an ARN for Amazon RDS in the Amazon RDS User Guide. This doesn't apply to SQL Server or RDS Custom, which don't support cross-Region replicas",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the read replica, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide. Default: Inherits from the source DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The Availability Zone (AZ) where the read replica will be created. Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Example: us-east-1d",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number that the DB instance uses for connections. Default: Inherits from the source DB instance Valid Values: 1150-65535",
          args: {
            name: "integer",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether the read replica is in a Multi-AZ deployment. You can create a read replica as a Multi-AZ DB instance. RDS creates a standby of your replica in another Availability Zone for failover support for the replica. Creating your read replica as a Multi-AZ DB instance is independent of whether the source database is a Multi-AZ DB instance. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the read replica is in a Multi-AZ deployment. You can create a read replica as a Multi-AZ DB instance. RDS creates a standby of your replica in another Availability Zone for failover support for the replica. Creating your read replica as a Multi-AZ DB instance is independent of whether the source database is a Multi-AZ DB instance. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the read replica during the maintenance window. This setting doesn't apply to RDS Custom. Default: Inherits from the source DB instance",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the read replica during the maintenance window. This setting doesn't apply to RDS Custom. Default: Inherits from the source DB instance",
        },
        {
          name: "--iops",
          description:
            "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The option group the DB instance is associated with. If omitted, the option group associated with the source instance is used.  For SQL Server, you must use the option group associated with the source instance.  This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If you do not specify a value for DBParameterGroupName, then Amazon RDS uses the DBParameterGroup of source DB instance for a same Region read replica, or the default DBParameterGroup for the specified DB engine for a cross-Region read replica. Specifying a parameter group for this operation is only supported for MySQL and Oracle DB instances. It isn't supported for RDS Custom. Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "Specifies a DB subnet group for the DB instance. The new DB instance is created in the VPC associated with the DB subnet group. If no DB subnet group is specified, then the new DB instance isn't created in a VPC. Constraints:   Can only be specified if the source DB instance identifier specifies a DB instance in another Amazon Web Services Region.   If supplied, must match the name of an existing DBSubnetGroup.   The specified DB subnet group must be in the same Amazon Web Services Region in which the operation is running.   All read replicas in one Amazon Web Services Region that are created from the same source DB instance must either:&gt;   Specify DB subnet groups from the same VPC. All these read replicas are created in the same VPC.   Not specify a DB subnet group. All these read replicas are created outside of any VPC.     Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of Amazon EC2 VPC security groups to associate with the read replica. This setting doesn't apply to RDS Custom. Default: The default EC2 VPC security group for the DB subnet group's VPC",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the read replica. Valid values: standard | gp2 | io1  If you specify io1, you must also include a value for the Iops parameter. Default: io1 if the Iops parameter is specified, otherwise gp2",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the read replica to snapshots of the read replica. By default, tags are not copied",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the read replica to snapshots of the read replica. By default, tags are not copied",
        },
        {
          name: "--monitoring-interval",
          description:
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the read replica. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0. This setting doesn't apply to RDS Custom. Valid Values: 0, 1, 5, 10, 15, 30, 60",
          args: {
            name: "integer",
          },
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, go to To create an IAM role for Amazon RDS Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for an encrypted read replica. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you create an encrypted read replica in the same Amazon Web Services Region as the source DB instance, then do not specify a value for this parameter. A read replica in the same Amazon Web Services Region is always encrypted with the same KMS key as the source DB instance. If you create an encrypted read replica in a different Amazon Web Services Region, then you must specify a KMS key identifier for the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services Region that they are created in, and you can't use KMS keys from one Amazon Web Services Region in another Amazon Web Services Region. You can't create an encrypted read replica from an unencrypted DB instance. This setting doesn't apply to RDS Custom, which uses the same KMS key as the primary replica",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description:
            "When you are creating a read replica from one Amazon Web Services GovCloud (US) Region to another or from one China Amazon Web Services Region to another, the URL that contains a Signature Version 4 signed request for the CreateDBInstanceReadReplica API operation in the source Amazon Web Services Region that contains the source DB instance. This setting applies only to Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. It's ignored in other Amazon Web Services Regions. You must specify this parameter when you create an encrypted read replica from another Amazon Web Services Region by using the Amazon RDS API. Don't specify PreSignedUrl when you are creating an encrypted read replica in the same Amazon Web Services Region. The presigned URL must be a valid request for the CreateDBInstanceReadReplica API operation that can run in the source Amazon Web Services Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values:    DestinationRegion - The Amazon Web Services Region that the encrypted read replica is created in. This Amazon Web Services Region is the same one where the CreateDBInstanceReadReplica operation is called that contains this presigned URL. For example, if you create an encrypted DB instance in the us-west-1 Amazon Web Services Region, from a source DB instance in the us-east-2 Amazon Web Services Region, then you call the CreateDBInstanceReadReplica operation in the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the CreateDBInstanceReadReplica operation in the us-west-2 Amazon Web Services Region. For this example, the DestinationRegion in the presigned URL must be set to the us-east-1 Amazon Web Services Region.    KmsKeyId - The KMS key identifier for the key to use to encrypt the read replica in the destination Amazon Web Services Region. This is the same identifier for both the CreateDBInstanceReadReplica operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL.    SourceDBInstanceIdentifier - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are creating an encrypted read replica from a DB instance in the us-west-2 Amazon Web Services Region, then your SourceDBInstanceIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115.   To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and Signature Version 4 Signing Process.  If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.  SourceRegion isn't supported for SQL Server, because Amazon RDS for SQL Server doesn't support cross-Region read replicas.  This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the read replica. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the read replica. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:   7    month * 31, where month is a number of months from 1-23   731   For example, the following values are valid:   93 (3 months * 31)   341 (11 months * 31)   589 (19 months * 31)   731   If you specify a retention period such as 94, which isn't a valid value, RDS issues an error. This setting doesn't apply to RDS Custom",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the new DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs  in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
          args: {
            name: "list",
          },
        },
        {
          name: "--processor-features",
          description:
            "The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. This setting doesn't apply to RDS Custom",
          args: {
            name: "list",
          },
        },
        {
          name: "--use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-mode",
          description:
            "The open mode of the replica database: mounted or read-only.  This parameter is only supported for Oracle DB instances.  Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload. You can create a combination of mounted and read-only DB replicas for the same primary DB instance. For more information, see Working with Oracle Read Replicas for Amazon RDS in the Amazon RDS User Guide. For RDS Custom, you must specify this parameter and set it to mounted. The value won't be set by default. After replica creation, you can manage the open mode manually",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-allocated-storage",
          description:
            "The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--custom-iam-instance-profile",
          description:
            "The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:   The profile must exist in your account.   The profile must have an IAM role that Amazon EC2 has permissions to assume.   The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom.   For the list of permissions required for the IAM role, see  Configure IAM and your VPC in the Amazon RDS User Guide. This setting is required for RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB instance. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for read replica. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-region",
          description:
            "The ID of the region that contains the source for the read replica",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-parameter-group",
      description:
        "Creates a new DB parameter group. A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBParameterGroup. Once you've created a DB parameter group, you need to associate it with your DB instance using ModifyDBInstance. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect. This command doesn't apply to RDS Custom.  After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified",
      options: [
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group. Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens    This value is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-family",
          description:
            'The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family. To list all of the available parameter group families for a DB engine, use the following command:  aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine &lt;engine&gt;  For example, to list all of the available parameter group families for the MySQL DB engine, use the following command:  aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine mysql   The output contains duplicates.  The following are the valid DB engine values:    aurora (for MySQL 5.6-compatible Aurora)    aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)    aurora-postgresql     mariadb     mysql     oracle-ee     oracle-ee-cdb     oracle-se2     oracle-se2-cdb     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web',
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the DB parameter group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags to assign to the DB parameter group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-proxy",
      description: "Creates a new DB proxy",
      options: [
        {
          name: "--db-proxy-name",
          description:
            "The identifier for the proxy. This name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-family",
          description:
            "The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. For Aurora MySQL, RDS for MariaDB, and RDS for MySQL databases, specify MYSQL. For Aurora PostgreSQL and RDS for PostgreSQL databases, specify POSTGRESQL",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth",
          description: "The authorization mechanism that the proxy uses",
          args: {
            name: "list",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-subnet-ids",
          description:
            "One or more VPC subnet IDs to associate with the new proxy",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "One or more VPC security group IDs to associate with the new proxy",
          args: {
            name: "list",
          },
        },
        {
          name: "--require-tls",
          description:
            "A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy",
        },
        {
          name: "--no-require-tls",
          description:
            "A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy",
        },
        {
          name: "--idle-client-timeout",
          description:
            "The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database",
          args: {
            name: "integer",
          },
        },
        {
          name: "--debug-logging",
          description:
            "Whether the proxy includes detailed information about SQL statements in its logs. This information helps you to debug issues involving SQL behavior or the performance and scalability of the proxy connections. The debug information includes the text of SQL statements that you submit through the proxy. Thus, only enable this setting when needed for debugging, and only when you have security measures in place to safeguard any sensitive information that appears in the logs",
        },
        {
          name: "--no-debug-logging",
          description:
            "Whether the proxy includes detailed information about SQL statements in its logs. This information helps you to debug issues involving SQL behavior or the performance and scalability of the proxy connections. The debug information includes the text of SQL statements that you submit through the proxy. Thus, only enable this setting when needed for debugging, and only when you have security measures in place to safeguard any sensitive information that appears in the logs",
        },
        {
          name: "--tags",
          description:
            "An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-proxy-endpoint",
      description:
        "Creates a DBProxyEndpoint. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC",
      options: [
        {
          name: "--db-proxy-name",
          description:
            "The name of the DB proxy associated with the DB proxy endpoint that you create",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-proxy-endpoint-name",
          description: "The name of the DB proxy endpoint to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-subnet-ids",
          description:
            "The VPC subnet IDs for the DB proxy endpoint that you create. You can specify a different set of subnet IDs than for the original DB proxy",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "The VPC security group IDs for the DB proxy endpoint that you create. You can specify a different set of security group IDs than for the original DB proxy. The default is the default security group for the VPC",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-role",
          description:
            "A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations. The default is READ_WRITE",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-security-group",
      description:
        "Creates a new DB security group. DB security groups control access to a DB instance. A DB security group controls access to EC2-Classic DB instances that are not in a VPC.  EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring \u2013 Here\u2019s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-security-group-name",
          description:
            'The name for the DB security group. This value is stored as a lowercase string. Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Can\'t end with a hyphen or contain two consecutive hyphens   Must not be "Default"   Example: mysecuritygroup',
          args: {
            name: "string",
          },
        },
        {
          name: "--db-security-group-description",
          description: "The description for the DB security group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags to assign to the DB security group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-snapshot",
      description:
        "Creates a snapshot of a DB instance. The source DB instance must be in the available or storage-optimization state",
      options: [
        {
          name: "--db-snapshot-identifier",
          description:
            "The identifier for the DB snapshot. Constraints:   Can't be null, empty, or blank   Must contain from 1 to 255 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-snapshot-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-identifier",
          description:
            "The identifier of the DB instance that you want to create the snapshot of. Constraints:   Must match the identifier of an existing DBInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-db-subnet-group",
      description:
        "Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region",
      options: [
        {
          name: "--db-subnet-group-name",
          description:
            "The name for the DB subnet group. This value is stored as a lowercase string. Constraints:   Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens.   Must not be default.   First character must be a letter.   Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-description",
          description: "The description for the DB subnet group",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description: "The EC2 Subnet IDs for the DB subnet group",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Tags to assign to the DB subnet group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-event-subscription",
      description:
        "Creates an RDS event notification subscription. This operation requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console. You can specify the type of source (SourceType) that you want to be notified of and provide a list of RDS sources (SourceIds) that triggers the events. You can also provide a list of event categories (EventCategories) for events that you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup. If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIds = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify SourceIds, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the SourceIds, you are notified of events generated from all RDS sources belonging to your customer account. For more information about subscribing to an event for RDS DB engines, see  Subscribing to Amazon RDS event notification in the Amazon RDS User Guide. For more information about subscribing to an event for Aurora DB engines, see  Subscribing to Amazon RDS event notification in the Amazon Aurora User Guide",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the subscription. Constraints: The name must be less than 255 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-type",
          description:
            "The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you set this parameter to db-instance. For RDS Proxy events, specify db-proxy. If this value isn't specified, all events are returned. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot | db-proxy",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-categories",
          description:
            'A list of event categories for a particular source type (SourceType) that you want to subscribe to. You can see a list of the categories for a given source type in the "Amazon RDS event categories and event messages" section of the  Amazon RDS User Guide  or the  Amazon Aurora User Guide . You can also see this list by using the DescribeEventCategories operation',
          args: {
            name: "list",
          },
        },
        {
          name: "--source-ids",
          description:
            "The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It can't end with a hyphen or contain two consecutive hyphens. Constraints:   If SourceIds are supplied, SourceType must also be provided.   If the source type is a DB instance, a DBInstanceIdentifier value must be supplied.   If the source type is a DB cluster, a DBClusterIdentifier value must be supplied.   If the source type is a DB parameter group, a DBParameterGroupName value must be supplied.   If the source type is a DB security group, a DBSecurityGroupName value must be supplied.   If the source type is a DB snapshot, a DBSnapshotIdentifier value must be supplied.   If the source type is a DB cluster snapshot, a DBClusterSnapshotIdentifier value must be supplied.   If the source type is an RDS Proxy, a DBProxyName value must be supplied",
          args: {
            name: "list",
          },
        },
        {
          name: "--enabled",
          description:
            "A value that indicates whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active",
        },
        {
          name: "--no-enabled",
          description:
            "A value that indicates whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active",
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-global-cluster",
      description:
        "Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem. You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.  This action applies only to Aurora DB clusters",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The cluster identifier of the new global database cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-db-cluster-identifier",
          description:
            "The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description: "The engine version of the Aurora global database",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled",
        },
        {
          name: "--database-name",
          description:
            "The name for your database of up to 64 alphanumeric characters. If you do not provide a name, Amazon Aurora will not create a database in the global database cluster you are creating",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-encrypted",
          description:
            "The storage encryption setting for the new global database cluster",
        },
        {
          name: "--no-storage-encrypted",
          description:
            "The storage encryption setting for the new global database cluster",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-option-group",
      description:
        "Creates a new option group. You can create up to 20 option groups. This command doesn't apply to RDS Custom",
      options: [
        {
          name: "--option-group-name",
          description:
            "Specifies the name of the option group to be created. Constraints:   Must be 1 to 255 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: myoptiongroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-name",
          description:
            "Specifies the name of the engine that this option group should be associated with. Valid Values:    mariadb     mysql     oracle-ee     oracle-ee-cdb     oracle-se2     oracle-se2-cdb     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--major-engine-version",
          description:
            "Specifies the major version of the engine that this option group should be associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-description",
          description: "The description of the option group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags to assign to the option group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-custom-db-engine-version",
      description:
        "Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:   The CEV must not be the default for RDS Custom. If it is, change the default before running this command.   The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.   Typically, deletion takes a few minutes.  The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the DeleteCustomDbEngineVersion event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the DeleteCustomDbEngineVersion event.  For more information, see  Deleting a CEV in the Amazon RDS User Guide",
      options: [
        {
          name: "--engine",
          description:
            "The database engine. The only supported engine is custom-oracle-ee",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The custom engine version (CEV) for your DB instance. This option is required for RDS Custom, but optional for Amazon RDS. The combination of Engine and EngineVersion is unique per customer per Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-cluster",
      description:
        "The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive. Constraints:   Must match an existing DBClusterIdentifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-final-snapshot",
          description:
            "A value that indicates whether to skip the creation of a final DB cluster snapshot before the DB cluster is deleted. If skip is specified, no DB cluster snapshot is created. If skip isn't specified, a DB cluster snapshot is created before the DB cluster is deleted. By default, skip isn't specified, and the DB cluster snapshot is created. By default, this parameter is disabled.  You must specify a FinalDBSnapshotIdentifier parameter if SkipFinalSnapshot is disabled",
        },
        {
          name: "--no-skip-final-snapshot",
          description:
            "A value that indicates whether to skip the creation of a final DB cluster snapshot before the DB cluster is deleted. If skip is specified, no DB cluster snapshot is created. If skip isn't specified, a DB cluster snapshot is created before the DB cluster is deleted. By default, skip isn't specified, and the DB cluster snapshot is created. By default, this parameter is disabled.  You must specify a FinalDBSnapshotIdentifier parameter if SkipFinalSnapshot is disabled",
        },
        {
          name: "--final-db-snapshot-identifier",
          description:
            "The DB cluster snapshot identifier of the new DB cluster snapshot created when SkipFinalSnapshot is disabled.  Specifying this parameter and also skipping the creation of a final DB cluster snapshot with the SkipFinalShapshot parameter results in an error.  Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-cluster-endpoint",
      description:
        "Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-endpoint-identifier",
          description:
            "The identifier associated with the custom endpoint. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-cluster-parameter-group",
      description:
        "Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group. Constraints:   Must be the name of an existing DB cluster parameter group.   You can't delete a default DB cluster parameter group.   Can't be associated with any DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-cluster-snapshot",
      description:
        "Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.  The DB cluster snapshot must be in the available state to be deleted.  For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-snapshot-identifier",
          description:
            "The identifier of the DB cluster snapshot to delete. Constraints: Must be the name of an existing DB cluster snapshot in the available state",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-instance",
      description:
        "The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by DeleteDBInstance are not deleted. If you request a final DB snapshot the status of the Amazon RDS DB instance is deleting until the DB snapshot is created. The API action DescribeDBInstance is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. When a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, you can only delete it when you skip creation of the final snapshot with the SkipFinalSnapshot parameter. If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:   The DB cluster is a read replica of another Amazon Aurora DB cluster.   The DB instance is the only instance in the DB cluster.   To delete a DB instance in this case, first call the PromoteReadReplicaDBCluster API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the DeleteDBInstance API action to delete the final instance in the DB cluster",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive. Constraints:   Must match the name of an existing DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-final-snapshot",
          description:
            "A value that indicates whether to skip the creation of a final DB snapshot before deleting the instance. If you enable this parameter, RDS doesn't create a DB snapshot. If you don't enable this parameter, RDS creates a DB snapshot before the DB instance is deleted. By default, skip isn't enabled, and the DB snapshot is created.  If you don't enable this parameter, you must specify the FinalDBSnapshotIdentifier parameter.  When a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, RDS can delete the instance only if you enable this parameter. If you delete a read replica or an RDS Custom instance, you must enable this setting. This setting is required for RDS Custom",
        },
        {
          name: "--no-skip-final-snapshot",
          description:
            "A value that indicates whether to skip the creation of a final DB snapshot before deleting the instance. If you enable this parameter, RDS doesn't create a DB snapshot. If you don't enable this parameter, RDS creates a DB snapshot before the DB instance is deleted. By default, skip isn't enabled, and the DB snapshot is created.  If you don't enable this parameter, you must specify the FinalDBSnapshotIdentifier parameter.  When a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, RDS can delete the instance only if you enable this parameter. If you delete a read replica or an RDS Custom instance, you must enable this setting. This setting is required for RDS Custom",
        },
        {
          name: "--final-db-snapshot-identifier",
          description:
            "The DBSnapshotIdentifier of the new DBSnapshot created when the SkipFinalSnapshot parameter is disabled.  If you enable this parameter and also enable SkipFinalShapshot, the command results in an error.  This setting doesn't apply to RDS Custom. Constraints:   Must be 1 to 255 letters or numbers.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Can't be specified when deleting a read replica",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-automated-backups",
          description:
            "A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted",
        },
        {
          name: "--no-delete-automated-backups",
          description:
            "A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-instance-automated-backup",
      description:
        "Deletes automated backups using the DbiResourceId value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups",
      options: [
        {
          name: "--dbi-resource-id",
          description:
            "The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-automated-backups-arn",
          description:
            "The Amazon Resource Name (ARN) of the automated backups to delete, for example, arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-parameter-group",
      description:
        "Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances",
      options: [
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group. Constraints:   Must be the name of an existing DB parameter group   You can't delete a default DB parameter group   Can't be associated with any DB instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-proxy",
      description: "Deletes an existing DB proxy",
      options: [
        {
          name: "--db-proxy-name",
          description: "The name of the DB proxy to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-proxy-endpoint",
      description:
        "Deletes a DBProxyEndpoint. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC",
      options: [
        {
          name: "--db-proxy-endpoint-name",
          description: "The name of the DB proxy endpoint to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-security-group",
      description:
        "Deletes a DB security group. The specified DB security group must not be associated with any DB instances.  EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring \u2013 Here\u2019s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-security-group-name",
          description:
            "The name of the DB security group to delete.  You can't delete the default DB security group.  Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Must not be \"Default\"",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-snapshot",
      description:
        "Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.  The DB snapshot must be in the available state to be deleted",
      options: [
        {
          name: "--db-snapshot-identifier",
          description:
            "The DB snapshot identifier. Constraints: Must be the name of an existing DB snapshot in the available state",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-db-subnet-group",
      description:
        "Deletes a DB subnet group.  The specified database subnet group must not be associated with any DB instances",
      options: [
        {
          name: "--db-subnet-group-name",
          description:
            "The name of the database subnet group to delete.  You can't delete the default subnet group.  Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-event-subscription",
      description: "Deletes an RDS event notification subscription",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the RDS event notification subscription you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-global-cluster",
      description:
        "Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The cluster identifier of the global database cluster being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-option-group",
      description: "Deletes an existing option group",
      options: [
        {
          name: "--option-group-name",
          description:
            "The name of the option group to be deleted.  You can't delete default option groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "deregister-db-proxy-targets",
      description:
        "Remove the association between one or more DBProxyTarget data structures and a DBProxyTargetGroup",
      options: [
        {
          name: "--db-proxy-name",
          description:
            "The identifier of the DBProxy that is associated with the DBProxyTargetGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-group-name",
          description: "The identifier of the DBProxyTargetGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-identifiers",
          description: "One or more DB instance identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-identifiers",
          description: "One or more DB cluster identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-account-attributes",
      description:
        "Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value. This command doesn't take any parameters",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-certificates",
      description:
        "Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account",
      options: [
        {
          name: "--certificate-identifier",
          description:
            "The user-supplied certificate identifier. If this parameter is specified, information for only the identified certificate is returned. This parameter isn't case-sensitive. Constraints:   Must match an existing CertificateIdentifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeCertificates request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-cluster-backtracks",
      description:
        "Returns information about backtracks for a DB cluster. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide.  This action only applies to Aurora MySQL DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier of the DB cluster to be described. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 alphanumeric characters or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: my-cluster1",
          args: {
            name: "string",
          },
        },
        {
          name: "--backtrack-identifier",
          description:
            "If specified, this value is the backtrack identifier of the backtrack to be described. Constraints:   Must contain a valid universally unique identifier (UUID). For more information about UUIDs, see A Universally Unique Identifier (UUID) URN Namespace.   Example: 123e4567-e89b-12d3-a456-426655440000",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more DB clusters to describe. Supported filters include the following:    db-cluster-backtrack-id - Accepts backtrack identifiers. The results list includes information about only the backtracks identified by these identifiers.    db-cluster-backtrack-status - Accepts any of the following backtrack status values:    applying     completed     failed     pending    The results list includes information about only the backtracks identified by these values",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBClusterBacktracks request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-cluster-endpoints",
      description:
        "Returns information about endpoints for an Amazon Aurora DB cluster.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-endpoint-identifier",
          description:
            "The identifier of the endpoint to describe. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A set of name-value pairs that define which endpoints to include in the output. The filters are specified as name-value pairs, in the format Name=endpoint_type,Values=endpoint_type1,endpoint_type2,.... Name can be one of: db-cluster-endpoint-type, db-cluster-endpoint-custom-type, db-cluster-endpoint-id, db-cluster-endpoint-status. Values for the  db-cluster-endpoint-type filter can be one or more of: reader, writer, custom. Values for the db-cluster-endpoint-custom-type filter can be one or more of: reader, any. Values for the db-cluster-endpoint-status filter can be one or more of: available, creating, deleting, inactive, modifying",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBClusterEndpoints request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-cluster-parameter-groups",
      description:
        "Returns a list of DBClusterParameterGroup descriptions. If a DBClusterParameterGroupName parameter is specified, the list will contain only the description of the specified DB cluster parameter group. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of a specific DB cluster parameter group to return details for. Constraints:   If supplied, must match the name of an existing DBClusterParameterGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBClusterParameterGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-cluster-parameters",
      description:
        "Returns the detailed parameter list for a particular DB cluster parameter group. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of a specific DB cluster parameter group to return parameter details for. Constraints:   If supplied, must match the name of an existing DBClusterParameterGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description:
            "A value that indicates to return only parameters for a specific source. Parameter sources can be engine, service, or customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBClusterParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-cluster-snapshot-attributes",
      description:
        "Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot. When sharing snapshots with other Amazon Web Services accounts, DescribeDBClusterSnapshotAttributes returns the restore attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If all is included in the list of values for the restore attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts. To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the ModifyDBClusterSnapshotAttribute API action",
      options: [
        {
          name: "--db-cluster-snapshot-identifier",
          description:
            "The identifier for the DB cluster snapshot to describe the attributes for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-cluster-snapshots",
      description:
        "Returns information about DB cluster snapshots. This API action supports pagination. For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the DBClusterSnapshotIdentifier parameter. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-snapshot-identifier",
          description:
            "A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the DBClusterIdentifier parameter. This value is stored as a lowercase string. Constraints:   If supplied, must match the identifier of an existing DBClusterSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-type",
          description:
            "The type of DB cluster snapshots to be returned. You can specify one of the following values:    automated - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.    manual - Return all DB cluster snapshots that have been taken by my Amazon Web Services account.    shared - Return all manual DB cluster snapshots that have been shared to my Amazon Web Services account.    public - Return all DB cluster snapshots that have been marked as public.   If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by enabling the IncludeShared parameter. You can include public DB cluster snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more DB cluster snapshots to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs).    db-cluster-snapshot-id - Accepts DB cluster snapshot identifiers.    snapshot-type - Accepts types of DB cluster snapshots.    engine - Accepts names of database engines",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBClusterSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-shared",
          description:
            "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB cluster snapshot from another Amazon Web Services account by the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--no-include-shared",
          description:
            "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB cluster snapshot from another Amazon Web Services account by the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--include-public",
          description:
            "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--no-include-public",
          description:
            "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-clusters",
      description:
        "Returns information about Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination. For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide. This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive. Constraints:   If supplied, must match an existing DBClusterIdentifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more DB clusters to describe. Supported filters:    clone-group-id - Accepts clone group identifiers. The results list only includes information about the DB clusters associated with these clone groups.    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB clusters identified by these ARNs.    domain - Accepts Active Directory directory IDs. The results list only includes information about the DB clusters associated with these domains.    engine - Accepts engine names. The results list only includes information about the DB clusters for these engines",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-shared",
          description:
            "Optional Boolean parameter that specifies whether the output includes information about clusters shared from other Amazon Web Services accounts",
        },
        {
          name: "--no-include-shared",
          description:
            "Optional Boolean parameter that specifies whether the output includes information about clusters shared from other Amazon Web Services accounts",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-engine-versions",
      description: "Returns a list of the available DB engines",
      options: [
        {
          name: "--engine",
          description:
            "The database engine to return. Valid Values:    aurora (for MySQL 5.6-compatible Aurora)    aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)    aurora-postgresql     mariadb     mysql     oracle-ee     oracle-ee-cdb     oracle-se2     oracle-se2-cdb     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description: "The database engine version to return. Example: 5.1.49",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-family",
          description:
            "The name of a specific DB parameter group family to return details for. Constraints:   If supplied, must match an existing DBParameterGroupFamily",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more DB engine versions to describe. Supported filters:    db-parameter-group-family - Accepts parameter groups family names. The results list only includes information about the DB engine versions for these parameter group families.    engine - Accepts engine names. The results list only includes information about the DB engine versions for these engines.    engine-mode - Accepts DB engine modes. The results list only includes information about the DB engine versions for these engine modes. Valid DB engine modes are the following:    global     multimaster     parallelquery     provisioned     serverless       engine-version - Accepts engine versions. The results list only includes information about the DB engine versions for these engine versions.    status - Accepts engine version statuses. The results list only includes information about the DB engine versions for these statuses. Valid statuses are the following:    available     deprecated",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-only",
          description:
            "A value that indicates whether only the default version of the specified engine or engine and major version combination is returned",
        },
        {
          name: "--no-default-only",
          description:
            "A value that indicates whether only the default version of the specified engine or engine and major version combination is returned",
        },
        {
          name: "--list-supported-character-sets",
          description:
            "A value that indicates whether to list the supported character sets for each engine version. If this parameter is enabled and the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version. For RDS Custom, the default is not to list supported character sets. If you set ListSupportedCharacterSets to true, RDS Custom returns no results",
        },
        {
          name: "--no-list-supported-character-sets",
          description:
            "A value that indicates whether to list the supported character sets for each engine version. If this parameter is enabled and the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version. For RDS Custom, the default is not to list supported character sets. If you set ListSupportedCharacterSets to true, RDS Custom returns no results",
        },
        {
          name: "--list-supported-timezones",
          description:
            "A value that indicates whether to list the supported time zones for each engine version. If this parameter is enabled and the requested engine supports the TimeZone parameter for CreateDBInstance, the response includes a list of supported time zones for each engine version. For RDS Custom, the default is not to list supported time zones. If you set ListSupportedTimezones to true, RDS Custom returns no results",
        },
        {
          name: "--no-list-supported-timezones",
          description:
            "A value that indicates whether to list the supported time zones for each engine version. If this parameter is enabled and the requested engine supports the TimeZone parameter for CreateDBInstance, the response includes a list of supported time zones for each engine version. For RDS Custom, the default is not to list supported time zones. If you set ListSupportedTimezones to true, RDS Custom returns no results",
        },
        {
          name: "--include-all",
          description:
            "A value that indicates whether to include engine versions that aren't available in the list. The default is to list only available engine versions",
        },
        {
          name: "--no-include-all",
          description:
            "A value that indicates whether to include engine versions that aren't available in the list. The default is to list only available engine versions",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-instance-automated-backups",
      description:
        "Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the DescribeDBInstanceAutomatedBackups and DescribeDBInstances operations. All parameters are optional",
      options: [
        {
          name: "--dbi-resource-id",
          description:
            "The resource ID of the DB instance that is the source of the automated backup. This parameter isn't case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-identifier",
          description:
            "(Optional) The user-supplied instance identifier. If this parameter is specified, it must match the identifier of an existing DB instance. It returns information from the specific DB instance' automated backup. This parameter isn't case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies which resources to return based on status. Supported filters are the following:    status     active - automated backups for current instances    retained - automated backups for deleted instances and after backup replication is stopped    creating - automated backups that are waiting for the first automated snapshot to be available      db-instance-id - Accepts DB instance identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB instance automated backups identified by these ARNs.    dbi-resource-id - Accepts DB resource identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB instance resources identified by these ARNs.   Returns all resources by default. The status for each resource is specified in the response",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-automated-backups-arn",
          description:
            "The Amazon Resource Name (ARN) of the replicated automated backups, for example, arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-instances",
      description:
        "Returns information about provisioned RDS instances. This API supports pagination.  This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB instances associated with the DB clusters identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list only includes information about the DB instances identified by these ARNs.    dbi-resource-id - Accepts DB instance resource identifiers. The results list will only include information about the DB instances identified by these DB instance resource identifiers.    domain - Accepts Active Directory directory IDs. The results list only includes information about the DB instances associated with these domains.    engine - Accepts engine names. The results list only includes information about the DB instances for these engines",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBInstances request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-log-files",
      description:
        "Returns a list of DB log files for the DB instance. This command doesn't apply to RDS Custom",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The customer-assigned name of the DB instance that contains the log files you want to list. Constraints:   Must match the identifier of an existing DBInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--filename-contains",
          description:
            "Filters the available log files for log file names that contain the specified string",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-last-written",
          description:
            "Filters the available log files for files written since the specified date, in POSIX timestamp format with milliseconds",
          args: {
            name: "long",
          },
        },
        {
          name: "--file-size",
          description:
            "Filters the available log files for files larger than the specified size",
          args: {
            name: "long",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-parameter-groups",
      description:
        "Returns a list of DBParameterGroup descriptions. If a DBParameterGroupName is specified, the list will contain only the description of the specified DB parameter group",
      options: [
        {
          name: "--db-parameter-group-name",
          description:
            "The name of a specific DB parameter group to return details for. Constraints:   If supplied, must match the name of an existing DBClusterParameterGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBParameterGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-parameters",
      description:
        "Returns the detailed parameter list for a particular DB parameter group",
      options: [
        {
          name: "--db-parameter-group-name",
          description:
            "The name of a specific DB parameter group to return details for. Constraints:   If supplied, must match the name of an existing DBParameterGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description:
            "The parameter types to return. Default: All parameter types returned Valid Values: user | system | engine-default",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-proxies",
      description: "Returns information about DB proxies",
      options: [
        {
          name: "--db-proxy-name",
          description:
            "The name of the DB proxy. If you omit this parameter, the output includes information about all DB proxies owned by your Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter is not currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-proxy-endpoints",
      description: "Returns information about DB proxy endpoints",
      options: [
        {
          name: "--db-proxy-name",
          description:
            "The name of the DB proxy whose endpoints you want to describe. If you omit this parameter, the output includes information about all DB proxy endpoints associated with all your DB proxies",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-proxy-endpoint-name",
          description:
            "The name of a DB proxy endpoint to describe. If you omit this parameter, the output includes information about all DB proxy endpoints associated with the specified proxy",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter is not currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-proxy-target-groups",
      description:
        "Returns information about DB proxy target groups, represented by DBProxyTargetGroup data structures",
      options: [
        {
          name: "--db-proxy-name",
          description:
            "The identifier of the DBProxy associated with the target group",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-group-name",
          description: "The identifier of the DBProxyTargetGroup to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter is not currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-proxy-targets",
      description:
        "Returns information about DBProxyTarget objects. This API supports pagination",
      options: [
        {
          name: "--db-proxy-name",
          description: "The identifier of the DBProxyTarget to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-group-name",
          description: "The identifier of the DBProxyTargetGroup to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter is not currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-security-groups",
      description:
        "Returns a list of DBSecurityGroup descriptions. If a DBSecurityGroupName is specified, the list will contain only the descriptions of the specified DB security group.  EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring \u2013 Here\u2019s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-security-group-name",
          description:
            "The name of the DB security group to return details for",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBSecurityGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-snapshot-attributes",
      description:
        "Returns a list of DB snapshot attribute names and values for a manual DB snapshot. When sharing snapshots with other Amazon Web Services accounts, DescribeDBSnapshotAttributes returns the restore attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If all is included in the list of values for the restore attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts. To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the ModifyDBSnapshotAttribute API action",
      options: [
        {
          name: "--db-snapshot-identifier",
          description:
            "The identifier for the DB snapshot to describe the attributes for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-snapshots",
      description:
        "Returns information about DB snapshots. This API action supports pagination",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The ID of the DB instance to retrieve the list of DB snapshots for. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-snapshot-identifier",
          description:
            "A specific DB snapshot identifier to describe. This value is stored as a lowercase string. Constraints:   If supplied, must match the identifier of an existing DBSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-type",
          description:
            "The type of snapshots to be returned. You can specify one of the following values:    automated - Return all DB snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.    manual - Return all DB snapshots that have been taken by my Amazon Web Services account.    shared - Return all manual DB snapshots that have been shared to my Amazon Web Services account.    public - Return all DB snapshots that have been marked as public.    awsbackup - Return the DB snapshots managed by the Amazon Web Services Backup service. For information about Amazon Web Services Backup, see the  Amazon Web Services Backup Developer Guide.   The awsbackup type does not apply to Aurora.   If you don't specify a SnapshotType value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the IncludeShared parameter. You can include public snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more DB snapshots to describe. Supported filters:    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs).    db-snapshot-id - Accepts DB snapshot identifiers.    dbi-resource-id - Accepts identifiers of source DB instances.    snapshot-type - Accepts types of DB snapshots.    engine - Accepts names of database engines",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-shared",
          description:
            "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the ModifyDBSnapshotAttribute API action. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-include-shared",
          description:
            "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the ModifyDBSnapshotAttribute API action. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--include-public",
          description:
            "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-include-public",
          description:
            "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--dbi-resource-id",
          description: "A specific DB resource ID to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-db-subnet-groups",
      description:
        "Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup. For an overview of CIDR ranges, go to the Wikipedia Tutorial",
      options: [
        {
          name: "--db-subnet-group-name",
          description: "The name of the DB subnet group to return details for",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-engine-default-cluster-parameters",
      description:
        "Returns the default engine and system parameter information for the cluster database engine. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide",
      options: [
        {
          name: "--db-parameter-group-family",
          description:
            "The name of the DB cluster parameter group family to return engine parameter information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeEngineDefaultClusterParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-engine-default-parameters",
      description:
        "Returns the default engine and system parameter information for the specified database engine",
      options: [
        {
          name: "--db-parameter-group-family",
          description:
            "The name of the DB parameter group family. Valid Values:    aurora5.6     aurora-mysql5.7     aurora-mysql8.0     aurora-postgresql10     aurora-postgresql11     aurora-postgresql12     aurora-postgresql13     mariadb10.2     mariadb10.3     mariadb10.4     mariadb10.5     mariadb10.6     mysql5.7     mysql8.0     postgres10     postgres11     postgres12     postgres13     postgres14     sqlserver-ee-11.0     sqlserver-ee-12.0     sqlserver-ee-13.0     sqlserver-ee-14.0     sqlserver-ee-15.0     sqlserver-ex-11.0     sqlserver-ex-12.0     sqlserver-ex-13.0     sqlserver-ex-14.0     sqlserver-ex-15.0     sqlserver-se-11.0     sqlserver-se-12.0     sqlserver-se-13.0     sqlserver-se-14.0     sqlserver-se-15.0     sqlserver-web-11.0     sqlserver-web-12.0     sqlserver-web-13.0     sqlserver-web-14.0     sqlserver-web-15.0",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeEngineDefaultParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-event-categories",
      description:
        'Displays a list of categories for all event source types, or, if specified, for a specified source type. You can also see this list in the "Amazon RDS event categories and event messages" section of the  Amazon RDS User Guide  or the  Amazon Aurora User Guide',
      options: [
        {
          name: "--source-type",
          description:
            "The type of source that is generating the events. For RDS Proxy events, specify db-proxy. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot | db-proxy",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-event-subscriptions",
      description:
        "Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status. If you specify a SubscriptionName, lists the description for that subscription",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the RDS event notification subscription you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-events",
      description:
        "Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days. Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be obtained by providing the name as a parameter. For more information on working with events, see Monitoring Amazon RDS events in the Amazon RDS User Guide and Monitoring Amazon Aurora events in the Amazon Aurora User Guide.  By default, RDS returns events that were generated in the past hour",
      options: [
        {
          name: "--source-identifier",
          description:
            "The identifier of the event source for which events are returned. If not specified, then all sources are included in the response. Constraints:   If SourceIdentifier is supplied, SourceType must also be provided.   If the source type is a DB instance, a DBInstanceIdentifier value must be supplied.   If the source type is a DB cluster, a DBClusterIdentifier value must be supplied.   If the source type is a DB parameter group, a DBParameterGroupName value must be supplied.   If the source type is a DB security group, a DBSecurityGroupName value must be supplied.   If the source type is a DB snapshot, a DBSnapshotIdentifier value must be supplied.   If the source type is a DB cluster snapshot, a DBClusterSnapshotIdentifier value must be supplied.   If the source type is an RDS Proxy, a DBProxyName value must be supplied.   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-type",
          description:
            "The event source to retrieve events for. If no value is specified, all events are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the ISO8601 Wikipedia page.  Example: 2009-07-08T18:00Z",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the ISO8601 Wikipedia page.  Example: 2009-07-08T18:00Z",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--duration",
          description:
            "The number of minutes to retrieve events for. Default: 60",
          args: {
            name: "integer",
          },
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories that trigger notifications for a event notification subscription",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-export-tasks",
      description:
        "Returns information about a snapshot export to Amazon S3. This API operation supports pagination",
      options: [
        {
          name: "--export-task-identifier",
          description:
            "The identifier of the snapshot export task to be described",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-arn",
          description:
            "The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters specify one or more snapshot exports to describe. The filters are specified as name-value pairs that define what to include in the output. Filter names and values are case-sensitive. Supported filters include the following:    export-task-identifier - An identifier for the snapshot export task.    s3-bucket - The Amazon S3 bucket the snapshot is exported to.    source-arn - The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3    status - The status of the export task. Must be lowercase. Valid statuses are the following:    canceled     canceling     complete     failed     in_progress     starting",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeExportTasks request. If you specify this parameter, the response includes only records beyond the marker, up to the value specified by the MaxRecords parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified value, a pagination token called a marker is included in the response. You can use the marker in a later DescribeExportTasks request to retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-global-clusters",
      description:
        "Returns information about Aurora global database clusters. This API supports pagination. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive. Constraints:   If supplied, must match an existing DBClusterIdentifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeGlobalClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-option-group-options",
      description: "Describes all available options",
      options: [
        {
          name: "--engine-name",
          description:
            "A required parameter. Options available for the given engine name are described. Valid Values:    mariadb     mysql     oracle-ee     oracle-ee-cdb     oracle-se2     oracle-se2-cdb     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--major-engine-version",
          description:
            "If specified, filters the results to include only options for the specified major engine version",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-option-groups",
      description: "Describes the available option groups",
      options: [
        {
          name: "--option-group-name",
          description:
            "The name of the option group to describe. Can't be supplied together with EngineName or MajorEngineVersion",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeOptionGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--engine-name",
          description:
            "Filters the list of option groups to only include groups associated with a specific database engine. Valid Values:    mariadb     mysql     oracle-ee     oracle-ee-cdb     oracle-se2     oracle-se2-cdb     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--major-engine-version",
          description:
            "Filters the list of option groups to only include groups associated with a specific database engine version. If specified, then EngineName must also be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-orderable-db-instance-options",
      description:
        "Returns a list of orderable DB instance options for the specified DB engine, DB engine version, and DB instance class",
      options: [
        {
          name: "--engine",
          description:
            "The name of the engine to retrieve DB instance options for. Valid Values:    aurora (for MySQL 5.6-compatible Aurora)    aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)    aurora-postgresql     mariadb     mysql     oracle-ee     oracle-ee-cdb     oracle-se2     oracle-se2-cdb     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class",
          args: {
            name: "string",
          },
        },
        {
          name: "--license-model",
          description:
            "The license model filter value. Specify this parameter to show only the available offerings matching the specified license model. RDS Custom supports only the BYOL licensing model",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-group",
          description:
            "The Availability Zone group associated with a Local Zone. Specify this parameter to retrieve available offerings for the Local Zones in the group. Omit this parameter to show the available offerings in the specified Amazon Web Services Region. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc",
          description:
            "A value that indicates whether to show only VPC or non-VPC offerings. RDS Custom supports only VPC offerings. RDS Custom supports only VPC offerings. If you describe non-VPC offerings for RDS Custom, the output shows VPC offerings",
        },
        {
          name: "--no-vpc",
          description:
            "A value that indicates whether to show only VPC or non-VPC offerings. RDS Custom supports only VPC offerings. RDS Custom supports only VPC offerings. If you describe non-VPC offerings for RDS Custom, the output shows VPC offerings",
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 10000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-pending-maintenance-actions",
      description:
        "Returns a list of resources (for example, DB instances) that have at least one pending maintenance action",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The ARN of a resource to return pending maintenance actions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more resources to return pending maintenance actions for. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes pending maintenance actions for the DB clusters identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance ARNs. The results list only includes pending maintenance actions for the DB instances identified by these ARNs",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribePendingMaintenanceActions request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-reserved-db-instances",
      description:
        "Returns information about reserved DB instances for this account, or about a specified reserved DB instance",
      options: [
        {
          name: "--reserved-db-instance-id",
          description:
            "The reserved DB instance identifier filter value. Specify this parameter to show only the reservation that matches the specified reservation ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--reserved-db-instances-offering-id",
          description:
            "The offering identifier filter value. Specify this parameter to show only purchased reservations matching the specified offering identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The DB instance class filter value. Specify this parameter to show only those reservations matching the specified DB instances class",
          args: {
            name: "string",
          },
        },
        {
          name: "--duration",
          description:
            "The duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration. Valid Values: 1 | 3 | 31536000 | 94608000",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-description",
          description:
            "The product description filter value. Specify this parameter to show only those reservations matching the specified product description",
          args: {
            name: "string",
          },
        },
        {
          name: "--offering-type",
          description:
            'The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type. Valid Values: "Partial Upfront" | "All Upfront" | "No Upfront"',
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether to show only those reservations that support Multi-AZ",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether to show only those reservations that support Multi-AZ",
        },
        {
          name: "--lease-id",
          description:
            "The lease identifier filter value. Specify this parameter to show only the reservation that matches the specified lease ID.  Amazon Web Services Support might request the lease ID for an issue related to a reserved DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-reserved-db-instances-offerings",
      description: "Lists available reserved DB instance offerings",
      options: [
        {
          name: "--reserved-db-instances-offering-id",
          description:
            "The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class",
          args: {
            name: "string",
          },
        },
        {
          name: "--duration",
          description:
            "Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration. Valid Values: 1 | 3 | 31536000 | 94608000",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-description",
          description:
            "Product description filter value. Specify this parameter to show only the available offerings that contain the specified product description.  The results show offerings that partially match the filter value",
          args: {
            name: "string",
          },
        },
        {
          name: "--offering-type",
          description:
            'The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type. Valid Values: "Partial Upfront" | "All Upfront" | "No Upfront"',
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether to show only those reservations that support Multi-AZ",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether to show only those reservations that support Multi-AZ",
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-source-regions",
      description:
        "Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from. This API action supports pagination",
      options: [
        {
          name: "--region-name",
          description:
            "The source Amazon Web Services Region name. For example, us-east-1. Constraints:   Must specify a valid Amazon Web Services Region name",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeSourceRegions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-valid-db-instance-modifications",
      description:
        "You can call DescribeValidDBInstanceModifications to learn what modifications you can make to your DB instance. You can use this information when you call ModifyDBInstance. This command doesn't apply to RDS Custom",
      options: [
        {
          name: "--db-instance-identifier",
          description: "The customer identifier or the ARN of your DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "download-db-log-file-portion",
      description:
        "Downloads all or a portion of the specified log file, up to 1 MB in size. This command doesn't apply to RDS Custom",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The customer-assigned name of the DB instance that contains the log files you want to list. Constraints:   Must match the identifier of an existing DBInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-file-name",
          description: "The name of the log file to be downloaded",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            'The pagination token provided in the previous request or "0". If the Marker parameter is specified the response includes only records beyond the marker until the end of the file or up to NumberOfLines',
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-lines",
          description:
            'The number of lines to download. If the number of lines specified results in a file over 1 MB in size, the file is truncated at 1 MB in size. If the NumberOfLines parameter is specified, then the block of lines returned can be from the beginning or the end of the log file, depending on the value of the Marker parameter.   If neither Marker or NumberOfLines are specified, the entire log file is returned up to a maximum of 10000 lines, starting with the most recent log entries first.   If NumberOfLines is specified and Marker isn\'t specified, then the most recent lines from the end of the log file are returned.   If Marker is specified as "0", then the specified number of lines from the beginning of the log file are returned.   You can download the log file in blocks of lines by specifying the size of the block using the NumberOfLines parameter, and by specifying a value of "0" for the Marker parameter in your first request. Include the Marker value returned in the response as the Marker value for the next request, continuing until the AdditionalDataPending response element returns false',
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "failover-db-cluster",
      description:
        "Forces a failover for a DB cluster. For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer). For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer). An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails. To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete. For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "A DB cluster identifier to force a failover for. This parameter isn't case-sensitive. Constraints:   Must match the identifier of an existing DBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-instance-identifier",
          description:
            "The name of the DB instance to promote to the primary DB instance. Specify the DB instance identifier for an Aurora Replica or a Multi-AZ readable standby in the DB cluster, for example mydbcluster-replica1. This setting isn't supported for RDS for MySQL Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "failover-global-cluster",
      description:
        "Initiates the failover process for an Aurora global database (GlobalCluster). A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database. For more information about failing over an Amazon Aurora global database, see Managed planned failover for Amazon Aurora global databases in the Amazon Aurora User Guide.  This action applies to GlobalCluster (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "Identifier of the Aurora global database (GlobalCluster) that should be failed over. The identifier is the unique key assigned by the user when the Aurora global database was created. In other words, it's the name of the Aurora global database that you want to fail over. Constraints:   Must match the identifier of an existing GlobalCluster (Aurora global database)",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-cluster-identifier",
          description:
            "Identifier of the secondary Aurora DB cluster that you want to promote to primary for the Aurora global database (GlobalCluster.) Use the Amazon Resource Name (ARN) for the identifier so that Aurora can locate the cluster in its Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description:
        "Lists all tags on an Amazon RDS resource. For an overview on tagging an Amazon RDS resource, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
      options: [
        {
          name: "--resource-name",
          description:
            "The Amazon RDS resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see  Constructing an ARN for Amazon RDS in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-activity-stream",
      description:
        "Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see  Modifying a database activity stream in the Amazon RDS User Guide.  This operation is supported for RDS for Oracle only",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the RDS for Oracle DB instance, for example, arn:aws:rds:us-east-1:12345667890:instance:my-orcl-db",
          args: {
            name: "string",
          },
        },
        {
          name: "--audit-policy-state",
          description:
            "The audit policy state. When a policy is unlocked, it is read/write. When it is locked, it is read-only. You can edit your audit policy only when the activity stream is unlocked or stopped",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-certificates",
      description:
        "Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override. By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS. You might need to override the default certificate in the following situations:   You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.   RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.   For more information about rotating your SSL/TLS certificate for RDS DB engines, see  Rotating Your SSL/TLS Certificate in the Amazon RDS User Guide. For more information about rotating your SSL/TLS certificate for Aurora DB engines, see  Rotating Your SSL/TLS Certificate in the Amazon Aurora User Guide",
      options: [
        {
          name: "--certificate-identifier",
          description:
            "The new default certificate identifier to override the current one with. To determine the valid values, use the describe-certificates CLI command or the DescribeCertificates API operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--remove-customer-override",
          description:
            "A value that indicates whether to remove the override for the default certificate. If the override is removed, the default certificate is the system default",
        },
        {
          name: "--no-remove-customer-override",
          description:
            "A value that indicates whether to remove the override for the default certificate. If the override is removed, the default certificate is the system default",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-current-db-cluster-capacity",
      description:
        "Set the capacity of an Aurora Serverless v1 DB cluster to a specific value. Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call ModifyCurrentDBClusterCapacity to set the capacity explicitly. After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down. For more information about Aurora Serverless v1, see Using Amazon Aurora Serverless v1 in the Amazon Aurora User Guide.  If you call ModifyCurrentDBClusterCapacity with the default TimeoutAction, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see  Autoscaling for Aurora Serverless v1 in the Amazon Aurora User Guide.   This action only applies to Aurora Serverless v1 DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive. Constraints:   Must match the identifier of an existing DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity",
          description:
            "The DB cluster capacity. When you change the capacity of a paused Aurora Serverless v1 DB cluster, it automatically resumes. Constraints:   For Aurora MySQL, valid capacity values are 1, 2, 4, 8, 16, 32, 64, 128, and 256.   For Aurora PostgreSQL, valid capacity values are 2, 4, 8, 16, 32, 64, 192, and 384",
          args: {
            name: "integer",
          },
        },
        {
          name: "--seconds-before-timeout",
          description:
            "The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300. Specify a value between 10 and 600 seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timeout-action",
          description:
            "The action to take when the timeout is reached, either ForceApplyCapacityChange or RollbackCapacityChange.  ForceApplyCapacityChange, the default, sets the capacity to the specified value as soon as possible.  RollbackCapacityChange ignores the capacity change if a scaling point isn't found in the timeout period",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-custom-db-engine-version",
      description:
        "Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling DescribeDBEngineVersions.  The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the ModifyCustomDbEngineVersion event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the ModifyCustomDbEngineVersion event.  For more information, see Modifying CEV status in the Amazon RDS User Guide",
      options: [
        {
          name: "--engine",
          description:
            "The DB engine. The only supported value is custom-oracle-ee",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The custom engine version (CEV) that you want to modify. This option is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of Engine and EngineVersion is unique per customer per Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description of your CEV",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The availability status to be assigned to the CEV. Valid values are as follows:  available  You can use this CEV to create a new RDS Custom DB instance.  inactive  You can create a new RDS Custom instance by restoring a DB snapshot with this CEV. You can't patch or create new instances with this CEV.   You can change any status to any status. A typical reason to change status is to prevent the accidental use of a CEV, or to make a deprecated CEV eligible for use again. For example, you might change the status of your CEV from available to inactive, and from inactive back to available. To change the availability status of the CEV, it must not currently be in use by an RDS Custom instance, snapshot, or automated backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-cluster",
      description:
        "Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request. For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive. Constraints: This identifier must match the identifier of an existing DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-db-cluster-identifier",
          description:
            "The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   The first character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-cluster2  Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB cluster. If this parameter is disabled, changes to the DB cluster are applied during the next maintenance window. The ApplyImmediately parameter only affects the EnableIAMDatabaseAuthentication, MasterUserPassword, and NewDBClusterIdentifier values. If the ApplyImmediately parameter is disabled, then changes to the EnableIAMDatabaseAuthentication, MasterUserPassword, and NewDBClusterIdentifier values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the ApplyImmediately parameter. By default, this parameter is disabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-apply-immediately",
          description:
            "A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB cluster. If this parameter is disabled, changes to the DB cluster are applied during the next maintenance window. The ApplyImmediately parameter only affects the EnableIAMDatabaseAuthentication, MasterUserPassword, and NewDBClusterIdentifier values. If the ApplyImmediately parameter is disabled, then changes to the EnableIAMDatabaseAuthentication, MasterUserPassword, and NewDBClusterIdentifier values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the ApplyImmediately parameter. By default, this parameter is disabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups are retained. Specify a minimum value of 1. Default: 1 Constraints:   Must be a value from 1 to 35   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to use for the DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of VPC security groups that the DB cluster will belong to. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "list",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the DB cluster accepts connections. Constraints: Value must be 1150-65535  Default: The same port as the original DB cluster. Valid for: Aurora DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--master-user-password",
          description:
            'The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@". Constraints: Must contain from 8 to 41 characters. Valid for: Aurora DB clusters and Multi-AZ DB clusters',
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "A value that indicates that the DB cluster should be associated with the specified option group. DB clusters are associated with a default option group that can't be modified",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see  Backup window in the Amazon Aurora User Guide. Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see  Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--backtrack-window",
          description:
            "The target backtrack window, in seconds. To disable backtracking, set this value to 0. Default: 0 Constraints:   If specified, this value must be set to a number from 0 to 259,200 (72 hours).   Valid for: Aurora MySQL DB clusters only",
          args: {
            name: "long",
          },
        },
        {
          name: "--cloudwatch-logs-export-configuration",
          description:
            "The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster. The values in the list depend on the DB engine being used.  RDS for MySQL  Possible values are error, general, and slowquery.  RDS for PostgreSQL  Possible values are postgresql and upgrade.  Aurora MySQL  Possible values are audit, error, general, and slowquery.  Aurora PostgreSQL  Possible value is postgresql. For more information about exporting CloudWatch Logs for Amazon RDS, see  Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--engine-version",
          description:
            'The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless ApplyImmediately is enabled. To list all of the available engine versions for MySQL 5.6-compatible Aurora, use the following command:  aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora, use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for Aurora PostgreSQL, use the following command:  aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for RDS for MySQL, use the following command:  aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for RDS for PostgreSQL, use the following command:  aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"  Valid for: Aurora DB clusters and Multi-AZ DB clusters',
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version. Valid for: Aurora DB clusters only",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version. Valid for: Aurora DB clusters only",
        },
        {
          name: "--db-instance-parameter-group-name",
          description:
            "The name of the DB parameter group to apply to all instances of the DB cluster.  When you apply a parameter group using the DBInstanceParameterGroupName parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.  Default: The existing name setting Constraints:   The DB parameter group must be in the same DB parameter group family as this DB cluster.   The DBInstanceParameterGroupName parameter is valid in combination with the AllowMajorVersionUpgrade parameter for a major version upgrade only.   Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to move the DB cluster to. Specify none to remove the cluster from its current domain. The domain must be created prior to this operation. For more information, see Kerberos Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-configuration",
          description:
            "The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in serverless DB engine mode. Valid for: Aurora DB clusters only",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--enable-http-endpoint",
          description:
            "A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint is disabled. When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database from inside the RDS console with the query editor. For more information, see Using the Data API for Aurora Serverless v1 in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--no-enable-http-endpoint",
          description:
            "A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint is disabled. When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database from inside the RDS console with the query editor. For more information, see Using the Data API for Aurora Serverless v1 in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--enable-global-write-forwarding",
          description:
            "A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an Aurora global database (GlobalCluster). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by the FailoverGlobalCluster API operation, but it does nothing until then. Valid for: Aurora DB clusters only",
        },
        {
          name: "--no-enable-global-write-forwarding",
          description:
            "A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an Aurora global database (GlobalCluster). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by the FailoverGlobalCluster API operation, but it does nothing until then. Valid for: Aurora DB clusters only",
        },
        {
          name: "--db-cluster-instance-class",
          description:
            "The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes and availability for your engine, see  DB Instance Class in the Amazon RDS User Guide. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--allocated-storage",
          description:
            "The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. Type: Integer Valid for: Multi-AZ DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB cluster. Valid values: io1  When specified, a value for the Iops parameter is required. Default: io1  Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid Iops values, see Amazon RDS Provisioned IOPS Storage to Improve Performance in the Amazon RDS User Guide. Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB cluster. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically. Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically. Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--monitoring-interval",
          description:
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60  Valid for: Multi-AZ DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see To create an IAM role for Amazon RDS Enhanced Monitoring in the Amazon RDS User Guide.  If MonitoringInterval is set to a value other than 0, supply a MonitoringRoleArn value. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to turn on Performance Insights for the DB cluster. For more information, see  Using Amazon Performance Insights in the Amazon RDS User Guide. Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to turn on Performance Insights for the DB cluster. For more information, see  Using Amazon Performance Insights in the Amazon RDS User Guide. Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you don't specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:   7    month * 31, where month is a number of months from 1-23   731   For example, the following values are valid:   93 (3 months * 31)   341 (11 months * 31)   589 (19 months * 31)   731   If you specify a retention period such as 94, which isn't a valid value, RDS issues an error. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--serverless-v2-scaling-configuration",
          description:
            "Contains the scaling configuration of an Aurora Serverless v2 DB cluster. For more information, see Using Amazon Aurora Serverless v2 in the Amazon Aurora User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB cluster. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon Aurora User Guide.  Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-cluster-endpoint",
      description:
        "Modifies the properties of an endpoint in an Amazon Aurora DB cluster.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-endpoint-identifier",
          description:
            "The identifier of the endpoint to modify. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-type",
          description: "The type of the endpoint. One of: READER, WRITER, ANY",
          args: {
            name: "string",
          },
        },
        {
          name: "--static-members",
          description:
            "List of DB instance identifiers that are part of the custom endpoint group",
          args: {
            name: "list",
          },
        },
        {
          name: "--excluded-members",
          description:
            "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-cluster-parameter-group",
      description:
        "Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request.  After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBClusterParameters operation to verify that your DB cluster parameter group has been created or modified. If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.  For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-parameter-group-name",
          description: "The name of the DB cluster parameter group to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "A list of parameters in the DB cluster parameter group to modify. Valid Values (for the application method): immediate | pending-reboot   You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters. When the application method is immediate, changes to dynamic parameters are applied immediately to the DB clusters associated with the parameter group. When the application method is pending-reboot, changes to dynamic and static parameters are applied after a reboot without failover to the DB clusters associated with the parameter group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-cluster-snapshot-attribute",
      description:
        "Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot. To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify restore as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value all to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.  Don't add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.  If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case. To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the DescribeDBClusterSnapshotAttributes API operation. The accounts are returned as values for the restore attribute",
      options: [
        {
          name: "--db-cluster-snapshot-identifier",
          description:
            "The identifier for the DB cluster snapshot to modify the attributes for",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-name",
          description:
            "The name of the DB cluster snapshot attribute to modify. To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this value to restore.  To view the list of attributes available to modify, use the DescribeDBClusterSnapshotAttributes API operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--values-to-add",
          description:
            "A list of DB cluster snapshot attributes to add to the attribute specified by AttributeName. To authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon Web Services account IDs, or all to make the manual DB cluster snapshot restorable by any Amazon Web Services account. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts",
          args: {
            name: "list",
          },
        },
        {
          name: "--values-to-remove",
          description:
            "A list of DB cluster snapshot attributes to remove from the attribute specified by AttributeName. To remove authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon Web Services account identifiers, or all to remove authorization for any Amazon Web Services account to copy or restore the DB cluster snapshot. If you specify all, an Amazon Web Services account whose account ID is explicitly added to the restore attribute can still copy or restore a manual DB cluster snapshot",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-instance",
      description:
        "Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call DescribeValidDBInstanceModifications before you call ModifyDBInstance",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The DB instance identifier. This value is stored as a lowercase string. Constraints:   Must match the identifier of an existing DBInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--allocated-storage",
          description:
            "The new amount of storage in gibibytes (GiB) to allocate for the DB instance. For MariaDB, MySQL, Oracle, and PostgreSQL, the value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value. For the valid values for allocated storage for each engine, see CreateDBInstance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The new compute and memory capacity of the DB instance, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB instance classes in the Amazon RDS User Guide or Aurora DB instance classes in the Amazon Aurora User Guide. If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless ApplyImmediately is enabled for this request. This setting doesn't apply to RDS Custom for Oracle. Default: Uses existing setting",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC. If your DB instance isn't in a VPC, you can also use this parameter to move your DB instance into a VPC. For more information, see Working with a DB instance in a VPC in the Amazon RDS User Guide. Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you enable ApplyImmediately. This parameter doesn't apply to RDS Custom. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-security-groups",
          description:
            "A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible. This setting doesn't apply to RDS Custom. Constraints:   If supplied, must match existing DBSecurityGroups",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of Amazon EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible. This setting doesn't apply to RDS Custom.  Amazon Aurora  Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see ModifyDBCluster. Constraints:   If supplied, must match existing VpcSecurityGroupIds",
          args: {
            name: "list",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB instance. By default, this parameter is disabled. If this parameter is disabled, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot. Review the table of parameters in Modifying a DB Instance in the Amazon RDS User Guide to see the impact of enabling or disabling ApplyImmediately for each modified parameter and to determine when the changes are applied",
        },
        {
          name: "--no-apply-immediately",
          description:
            "A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB instance. By default, this parameter is disabled. If this parameter is disabled, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot. Review the table of parameters in Modifying a DB Instance in the Amazon RDS User Guide to see the impact of enabling or disabling ApplyImmediately for each modified parameter and to determine when the changes are applied",
        },
        {
          name: "--master-user-password",
          description:
            'The new password for the master user. The password can include any printable ASCII character except "/", """, or "@". Changing this parameter doesn\'t result in an outage and the change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the MasterUserPassword element exists in the PendingModifiedValues element of the operation response. This setting doesn\'t apply to RDS Custom.  Amazon Aurora  Not applicable. The password for the master user is managed by the DB cluster. For more information, see ModifyDBCluster. Default: Uses existing setting  MariaDB  Constraints: Must contain from 8 to 41 characters.  Microsoft SQL Server  Constraints: Must contain from 8 to 128 characters.  MySQL  Constraints: Must contain from 8 to 41 characters.  Oracle  Constraints: Must contain from 8 to 30 characters.  PostgreSQL  Constraints: Must contain from 8 to 128 characters.  Amazon RDS API operations never return the password, so this action provides a way to regain access to a primary instance user if the password is lost. This includes restoring privileges that might have been accidentally revoked',
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. In this case, the DB instance isn't rebooted automatically, and the parameter changes aren't applied during the next maintenance window. However, if you modify dynamic parameters in the newly associated DB parameter group, these changes are applied immediately without a reboot. This setting doesn't apply to RDS Custom. Default: Uses existing setting Constraints: The DB parameter group must be in the same DB parameter group family as the DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.  Enabling and disabling backups can result in a brief I/O suspension that lasts from a few seconds to a few minutes, depending on the size and class of your DB instance.  These changes are applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request. If you change the parameter from one non-zero value to another non-zero value, the change is asynchronously applied as soon as possible.  Amazon Aurora  Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Default: Uses existing setting Constraints:   It must be a value from 0 to 35. It can't be set to 0 if the DB instance is a source to read replicas. It can't be set to 0 for an RDS Custom for Oracle DB instance.   It can be specified for a MySQL read replica only if the source is running MySQL 5.6 or later.   It can be specified for a PostgreSQL read replica only if the source is running PostgreSQL 9.3.5",
          args: {
            name: "integer",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod parameter. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see Backup window in the Amazon RDS User Guide.   Amazon Aurora  Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Constraints:   Must be in the format hh24:mi-hh24:mi   Must be in Universal Time Coordinated (UTC)   Must not conflict with the preferred maintenance window   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied. For more information, see Amazon RDS Maintenance Window in the Amazon RDS User Guide.  Default: Uses existing setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage. The change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage. The change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to upgrade to. Changing this parameter results in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request. For major version upgrades, if a nondefault DB parameter group is currently in use, a new DB parameter group in the DB parameter group family for the new engine version must be specified. The new DB parameter group can be the default for that DB parameter group family. If you specify only a major version, Amazon RDS will update the DB instance to the default minor version if the current minor version is lower. For information about valid engine versions, see CreateDBInstance, or call DescribeDBEngineVersions. In RDS Custom for Oracle, this parameter is supported for read replicas only if they are in the PATCH_DB_FAILURE lifecycle",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. This setting doesn't apply to RDS Custom. Constraints: Major version upgrades must be allowed when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. This setting doesn't apply to RDS Custom. Constraints: Major version upgrades must be allowed when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window. An outage occurs when all the following conditions are met:   The automatic upgrade is enabled for the maintenance window.   A newer minor version is available.   RDS has enabled automatic patching for the engine version.   If any of the preceding conditions isn't met, RDS applies the change as soon as possible and doesn't cause an outage. For an RDS Custom DB instance, set AutoMinorVersionUpgrade to false. Otherwise, the operation returns an error",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window. An outage occurs when all the following conditions are met:   The automatic upgrade is enabled for the maintenance window.   A newer minor version is available.   RDS has enabled automatic patching for the engine version.   If any of the preceding conditions isn't met, RDS applies the change as soon as possible and doesn't cause an outage. For an RDS Custom DB instance, set AutoMinorVersionUpgrade to false. Otherwise, the operation returns an error",
        },
        {
          name: "--license-model",
          description:
            "The license model for the DB instance. This setting doesn't apply to RDS Custom. Valid values: license-included | bring-your-own-license | general-public-license",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The new Provisioned IOPS (I/O operations per second) value for the RDS instance. Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request. If you are migrating from Provisioned IOPS to standard storage, set this value to 0. The DB instance will require a reboot for the change in storage type to take effect. If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a read replica for the instance, and creating a DB snapshot of the instance. Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL, the value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value. Default: Uses existing setting",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description:
            "A value that indicates the DB instance should be associated with the specified option group. Changing this parameter doesn't result in an outage, with one exception. If the parameter change results in an option group that enables OEM, it can cause a brief period, lasting less than a second, during which new connections are rejected but existing connections aren't interrupted. The change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance after it is associated with a DB instance. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-db-instance-identifier",
          description:
            "The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot occurs immediately if you enable ApplyImmediately, or will occur during the next maintenance window if you disable Apply Immediately. This value is stored as a lowercase string. This setting doesn't apply to RDS Custom. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: mydbinstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB instance. If you specify Provisioned IOPS (io1), you must also include a value for the Iops parameter. If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a read replica for the instance, and creating a DB snapshot of the instance. Valid values: standard | gp2 | io1  Default: io1 if the Iops parameter is specified, otherwise gp2",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-arn",
          description:
            "The ARN from the key store with which to associate the instance for TDE encryption. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-password",
          description:
            "The password for the given ARN from the key store in order to access the device. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--ca-certificate-identifier",
          description:
            "Specifies the certificate to associate with the DB instance. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to move the DB instance to. Specify none to remove the instance from its current domain. You must create the domain before this operation. Currently, you can create only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.  Amazon Aurora  Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting. For more information, see ModifyDBCluster",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.  Amazon Aurora  Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting. For more information, see ModifyDBCluster",
        },
        {
          name: "--monitoring-interval",
          description:
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0, which is the default. If MonitoringRoleArn is specified, set MonitoringInterval to a value other than 0. This setting doesn't apply to RDS Custom. Valid Values: 0, 1, 5, 10, 15, 30, 60",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-port-number",
          description:
            "The port number on which the database accepts connections. The value of the DBPortNumber parameter must not match any of the port values specified for options in the option group for the DB instance. If you change the DBPortNumber value, your database restarts regardless of the value of the ApplyImmediately parameter. This setting doesn't apply to RDS Custom.  MySQL  Default: 3306  Valid values: 1150-65535   MariaDB  Default: 3306  Valid values: 1150-65535   PostgreSQL  Default: 5432  Valid values: 1150-65535  Type: Integer  Oracle  Default: 1521  Valid values: 1150-65535   SQL Server  Default: 1433  Valid values: 1150-65535 except 1234, 1434, 3260, 3343, 3389, 47001, and 49152-49156.  Amazon Aurora  Default: 3306  Valid values: 1150-65535",
          args: {
            name: "integer",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.  PubliclyAccessible only applies to DB instances in a VPC. The DB instance must be part of a public subnet and PubliclyAccessible must be enabled for it to be publicly accessible. Changes to the PubliclyAccessible parameter are applied immediately regardless of the value of the ApplyImmediately parameter",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.  PubliclyAccessible only applies to DB instances in a VPC. The DB instance must be part of a public subnet and PubliclyAccessible must be enabled for it to be publicly accessible. Changes to the PubliclyAccessible parameter are applied immediately regardless of the value of the ApplyImmediately parameter",
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see To create an IAM role for Amazon RDS Enhanced Monitoring in the Amazon RDS User Guide.  If MonitoringInterval is set to a value other than 0, supply a MonitoringRoleArn value. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "The name of the IAM role to use when making API calls to the Directory Service. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--promotion-tier",
          description:
            "A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see  Fault Tolerance for an Aurora DB Cluster in the Amazon Aurora User Guide. This setting doesn't apply to RDS Custom. Default: 1 Valid Values: 0 - 15",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. This setting doesn't apply to Amazon Aurora. Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide.  This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. This setting doesn't apply to Amazon Aurora. Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide.  This setting doesn't apply to RDS Custom",
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:   7    month * 31, where month is a number of months from 1-23   731   For example, the following values are valid:   93 (3 months * 31)   341 (11 months * 31)   589 (19 months * 31)   731   If you specify a retention period such as 94, which isn't a valid value, RDS issues an error. This setting doesn't apply to RDS Custom",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cloudwatch-logs-export-configuration",
          description:
            "The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance. A change to the CloudwatchLogsExportConfiguration parameter is always applied to the DB instance immediately. Therefore, the ApplyImmediately parameter has no effect. This setting doesn't apply to RDS Custom",
          args: {
            name: "structure",
          },
        },
        {
          name: "--processor-features",
          description:
            "The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. This setting doesn't apply to RDS Custom",
          args: {
            name: "list",
          },
        },
        {
          name: "--use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--max-allocated-storage",
          description:
            "The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
          args: {
            name: "integer",
          },
        },
        {
          name: "--certificate-rotation-restart",
          description:
            "A value that indicates whether the DB instance is restarted when you rotate your SSL/TLS certificate. By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.  Set this parameter only if you are not using SSL/TLS to connect to the DB instance.  If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:   For more information about rotating your SSL/TLS certificate for RDS DB engines, see  Rotating Your SSL/TLS Certificate. in the Amazon RDS User Guide.    For more information about rotating your SSL/TLS certificate for Aurora DB engines, see  Rotating Your SSL/TLS Certificate in the Amazon Aurora User Guide.   This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-certificate-rotation-restart",
          description:
            "A value that indicates whether the DB instance is restarted when you rotate your SSL/TLS certificate. By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.  Set this parameter only if you are not using SSL/TLS to connect to the DB instance.  If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:   For more information about rotating your SSL/TLS certificate for RDS DB engines, see  Rotating Your SSL/TLS Certificate. in the Amazon RDS User Guide.    For more information about rotating your SSL/TLS certificate for Aurora DB engines, see  Rotating Your SSL/TLS Certificate in the Amazon Aurora User Guide.   This setting doesn't apply to RDS Custom",
        },
        {
          name: "--replica-mode",
          description:
            "A value that sets the open mode of a replica database to either mounted or read-only.  Currently, this parameter is only supported for Oracle DB instances.  Mounted DB replicas are included in Oracle Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload. For more information, see Working with Oracle Read Replicas for Amazon RDS in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide",
        },
        {
          name: "--no-enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide",
        },
        {
          name: "--aws-backup-recovery-point-arn",
          description:
            "The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--automation-mode",
          description:
            "The automation mode of the RDS Custom DB instance: full or all paused. If full, the DB instance automates monitoring and instance recovery. If all paused, the instance pauses automation for the duration set by ResumeFullAutomationModeMinutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--resume-full-automation-mode-minutes",
          description:
            "The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation. The minimum value is 60 (default). The maximum value is 1,440",
          args: {
            name: "integer",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB instance. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-parameter-group",
      description:
        "Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request.  After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified",
      options: [
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group. Constraints:   If supplied, must match the name of an existing DBParameterGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "An array of parameter names, values, and the application methods for the parameter update. At least one parameter name, value, and application method must be supplied; later arguments are optional. A maximum of 20 parameters can be modified in a single request. Valid Values (for the application method): immediate | pending-reboot  You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters. When the application method is immediate, changes to dynamic parameters are applied immediately to the DB instances associated with the parameter group. When the application method is pending-reboot, changes to dynamic and static parameters are applied after a reboot without failover to the DB instances associated with the parameter group.  You can't use pending-reboot with dynamic parameters on RDS for SQL Server DB instances. Use immediate.  For more information on modifying DB parameters, see Working with DB parameter groups in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-proxy",
      description: "Changes the settings for an existing DB proxy",
      options: [
        {
          name: "--db-proxy-name",
          description: "The identifier for the DBProxy to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-db-proxy-name",
          description:
            "The new identifier for the DBProxy. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth",
          description: "The new authentication settings for the DBProxy",
          args: {
            name: "list",
          },
        },
        {
          name: "--require-tls",
          description:
            "Whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't use TLS",
        },
        {
          name: "--no-require-tls",
          description:
            "Whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't use TLS",
        },
        {
          name: "--idle-client-timeout",
          description:
            "The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database",
          args: {
            name: "integer",
          },
        },
        {
          name: "--debug-logging",
          description:
            "Whether the proxy includes detailed information about SQL statements in its logs. This information helps you to debug issues involving SQL behavior or the performance and scalability of the proxy connections. The debug information includes the text of SQL statements that you submit through the proxy. Thus, only enable this setting when needed for debugging, and only when you have security measures in place to safeguard any sensitive information that appears in the logs",
        },
        {
          name: "--no-debug-logging",
          description:
            "Whether the proxy includes detailed information about SQL statements in its logs. This information helps you to debug issues involving SQL behavior or the performance and scalability of the proxy connections. The debug information includes the text of SQL statements that you submit through the proxy. Thus, only enable this setting when needed for debugging, and only when you have security measures in place to safeguard any sensitive information that appears in the logs",
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-groups",
          description: "The new list of security groups for the DBProxy",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-proxy-endpoint",
      description: "Changes the settings for an existing DB proxy endpoint",
      options: [
        {
          name: "--db-proxy-endpoint-name",
          description:
            "The name of the DB proxy sociated with the DB proxy endpoint that you want to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-db-proxy-endpoint-name",
          description:
            "The new identifier for the DBProxyEndpoint. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "The VPC security group IDs for the DB proxy endpoint. When the DB proxy endpoint uses a different VPC than the original proxy, you also specify a different set of security group IDs than for the original proxy",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-proxy-target-group",
      description: "Modifies the properties of a DBProxyTargetGroup",
      options: [
        {
          name: "--target-group-name",
          description: "The name of the target group to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-proxy-name",
          description: "The name of the proxy",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-pool-config",
          description:
            "The settings that determine the size and behavior of the connection pool for the target group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--new-name",
          description:
            "The new name for the modified DBProxyTarget. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-snapshot",
      description:
        "Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public.  Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom",
      options: [
        {
          name: "--db-snapshot-identifier",
          description: "The identifier of the DB snapshot to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The engine version to upgrade the DB snapshot to. The following are the database engines and engine versions that are available when you upgrade a DB snapshot.  MySQL     5.5.46 (supported for 5.1 DB snapshots)    Oracle     12.1.0.2.v8 (supported for 12.1.0.1 DB snapshots)    11.2.0.4.v12 (supported for 11.2.0.2 DB snapshots)    11.2.0.4.v11 (supported for 11.2.0.3 DB snapshots)    PostgreSQL  For the list of engine versions that are available for upgrading a DB snapshot, see  Upgrading the PostgreSQL DB Engine for Amazon RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The option group to identify with the upgraded DB snapshot. You can specify this parameter when you upgrade an Oracle DB snapshot. The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance. For more information, see Option group considerations in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-snapshot-attribute",
      description:
        "Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot. To share a manual DB snapshot with other Amazon Web Services accounts, specify restore as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value all to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.  Don't add the all value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.  If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case. To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the DescribeDBSnapshotAttributes API operation. The accounts are returned as values for the restore attribute",
      options: [
        {
          name: "--db-snapshot-identifier",
          description:
            "The identifier for the DB snapshot to modify the attributes for",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-name",
          description:
            "The name of the DB snapshot attribute to modify. To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB snapshot, set this value to restore.  To view the list of attributes available to modify, use the DescribeDBSnapshotAttributes API operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--values-to-add",
          description:
            "A list of DB snapshot attributes to add to the attribute specified by AttributeName. To authorize other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include one or more Amazon Web Services account IDs, or all to make the manual DB snapshot restorable by any Amazon Web Services account. Do not add the all value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts",
          args: {
            name: "list",
          },
        },
        {
          name: "--values-to-remove",
          description:
            "A list of DB snapshot attributes to remove from the attribute specified by AttributeName. To remove authorization for other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include one or more Amazon Web Services account identifiers, or all to remove authorization for any Amazon Web Services account to copy or restore the DB snapshot. If you specify all, an Amazon Web Services account whose account ID is explicitly added to the restore attribute can still copy or restore the manual DB snapshot",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-db-subnet-group",
      description:
        "Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region",
      options: [
        {
          name: "--db-subnet-group-name",
          description:
            "The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-description",
          description: "The description for the DB subnet group",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description: "The EC2 subnet IDs for the DB subnet group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-event-subscription",
      description:
        "Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the AddSourceIdentifierToSubscription and RemoveSourceIdentifierFromSubscription calls. You can see a list of the event categories for a given source type (SourceType) in Events in the Amazon RDS User Guide or by using the DescribeEventCategories operation",
      options: [
        {
          name: "--subscription-name",
          description: "The name of the RDS event notification subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-type",
          description:
            "The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. For RDS Proxy events, specify db-proxy. If this value isn't specified, all events are returned. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot | db-proxy",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for a source type (SourceType) that you want to subscribe to. You can see a list of the categories for a given source type in Events in the Amazon RDS User Guide or by using the DescribeEventCategories operation",
          args: {
            name: "list",
          },
        },
        {
          name: "--enabled",
          description:
            "A value that indicates whether to activate the subscription",
        },
        {
          name: "--no-enabled",
          description:
            "A value that indicates whether to activate the subscription",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "modify-global-cluster",
      description:
        "Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The DB cluster identifier for the global cluster being modified. This parameter isn't case-sensitive. Constraints:   Must match the identifier of an existing global database cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-global-cluster-identifier",
          description:
            "The new cluster identifier for the global database cluster when modifying a global database cluster. This value is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   The first character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-cluster2",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "Indicates if the global database cluster has deletion protection enabled. The global database cluster can't be deleted when deletion protection is enabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "Indicates if the global database cluster has deletion protection enabled. The global database cluster can't be deleted when deletion protection is enabled",
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless ApplyImmediately is enabled. To list all of the available engine versions for aurora (for MySQL 5.6-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'  To list all of the available engine versions for aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'  To list all of the available engine versions for aurora-postgresql, use the following command:  aws rds describe-db-engine-versions --engine aurora-postgresql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version. If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version. Apply any custom parameter groups after completing the upgrade",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version. If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version. Apply any custom parameter groups after completing the upgrade",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "promote-read-replica",
      description:
        "Promotes a read replica DB instance to a standalone DB instance.    Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the backing-up status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.   This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The DB instance identifier. This value is stored as a lowercase string. Constraints:   Must match the identifier of an existing read replica DB instance.   Example: mydbinstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups. Default: 1 Constraints:   Must be a value from 0 to 35.   Can't be set to 0 if the DB instance is a source to read replicas",
          args: {
            name: "integer",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To see the time blocks available, see  Adjusting the Preferred Maintenance Window in the Amazon RDS User Guide.  Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "promote-read-replica-db-cluster",
      description:
        "Promotes a read replica DB cluster to a standalone DB cluster",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The identifier of the DB cluster read replica to promote. This parameter isn't case-sensitive. Constraints:   Must match the identifier of an existing DB cluster read replica.   Example: my-cluster-replica1",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "purchase-reserved-db-instances-offering",
      description: "Purchases a reserved DB instance offering",
      options: [
        {
          name: "--reserved-db-instances-offering-id",
          description:
            "The ID of the Reserved DB instance offering to purchase. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706",
          args: {
            name: "string",
          },
        },
        {
          name: "--reserved-db-instance-id",
          description:
            "Customer-specified identifier to track this reservation. Example: myreservationID",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-count",
          description: "The number of instances to reserve. Default: 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "reboot-db-cluster",
      description:
        "You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect. Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting. Use this operation only for a non-Aurora Multi-AZ DB cluster. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier. This parameter is stored as a lowercase string. Constraints:   Must match the identifier of an existing DBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "reboot-db-instance",
      description:
        "You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. For more information about rebooting, see Rebooting a DB Instance in the Amazon RDS User Guide.  This command doesn't apply to RDS Custom. If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the RebootDBCluster operation",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The DB instance identifier. This parameter is stored as a lowercase string. Constraints:   Must match the identifier of an existing DBInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-failover",
          description:
            "A value that indicates whether the reboot is conducted through a Multi-AZ failover. Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ",
        },
        {
          name: "--no-force-failover",
          description:
            "A value that indicates whether the reboot is conducted through a Multi-AZ failover. Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "register-db-proxy-targets",
      description:
        "Associate one or more DBProxyTarget data structures with a DBProxyTargetGroup",
      options: [
        {
          name: "--db-proxy-name",
          description:
            "The identifier of the DBProxy that is associated with the DBProxyTargetGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-group-name",
          description: "The identifier of the DBProxyTargetGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-identifiers",
          description: "One or more DB instance identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-identifiers",
          description: "One or more DB cluster identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "remove-from-global-cluster",
      description:
        "Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The cluster identifier to detach from the Aurora global database cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The Amazon Resource Name (ARN) identifying the cluster that was detached from the Aurora global database cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "remove-role-from-db-cluster",
      description:
        "Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster. For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The name of the DB cluster to disassociate the IAM role from",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example arn:aws:iam::123456789012:role/AuroraAccessRole",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-name",
          description:
            "The name of the feature for the DB cluster that the IAM role is to be disassociated from. For information about supported feature names, see DBEngineVersion",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "remove-role-from-db-instance",
      description:
        "Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The name of the DB instance to disassociate the IAM role from",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance, for example, arn:aws:iam::123456789012:role/AccessRole",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-name",
          description:
            "The name of the feature for the DB instance that the IAM role is to be disassociated from. For information about supported feature names, see DBEngineVersion",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "remove-source-identifier-from-subscription",
      description:
        "Removes a source identifier from an existing RDS event notification subscription",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the RDS event notification subscription you want to remove a source identifier from",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-identifier",
          description:
            "The source identifier to be removed from the subscription, such as the DB instance identifier for a DB instance or the name of a security group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "remove-tags-from-resource",
      description:
        "Removes metadata tags from an Amazon RDS resource. For an overview on tagging an Amazon RDS resource, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
      options: [
        {
          name: "--resource-name",
          description:
            "The Amazon RDS resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see  Constructing an ARN for Amazon RDS in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag key (name) of the tag to be removed",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "reset-db-cluster-parameter-group",
      description:
        "Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: ParameterName and ApplyMethod. To reset the entire DB cluster parameter group, specify the DBClusterParameterGroupName and ResetAllParameters parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request. You must call RebootDBInstance for every DB instance in your DB cluster that you want the updated static parameter to apply to. For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-parameter-group-name",
          description: "The name of the DB cluster parameter group to reset",
          args: {
            name: "string",
          },
        },
        {
          name: "--reset-all-parameters",
          description:
            "A value that indicates whether to reset all parameters in the DB cluster parameter group to their default values. You can't use this parameter if there is a list of parameter names specified for the Parameters parameter",
        },
        {
          name: "--no-reset-all-parameters",
          description:
            "A value that indicates whether to reset all parameters in the DB cluster parameter group to their default values. You can't use this parameter if there is a list of parameter names specified for the Parameters parameter",
        },
        {
          name: "--parameters",
          description:
            "A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the ResetAllParameters parameter is enabled",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "reset-db-parameter-group",
      description:
        "Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: ParameterName and ApplyMethod. To reset the entire DB parameter group, specify the DBParameterGroup name and ResetAllParameters parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request",
      options: [
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group. Constraints:   Must match the name of an existing DBParameterGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--reset-all-parameters",
          description:
            "A value that indicates whether to reset all parameters in the DB parameter group to default values. By default, all parameters in the DB parameter group are reset to default values",
        },
        {
          name: "--no-reset-all-parameters",
          description:
            "A value that indicates whether to reset all parameters in the DB parameter group to default values. By default, all parameters in the DB parameter group are reset to default values",
        },
        {
          name: "--parameters",
          description:
            "To reset the entire DB parameter group, specify the DBParameterGroup name and ResetAllParameters parameters. To reset specific parameters, provide a list of the following: ParameterName and ApplyMethod. A maximum of 20 parameters can be modified in a single request.  MySQL  Valid Values (for Apply method): immediate | pending-reboot  You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when DB instance reboots.  MariaDB  Valid Values (for Apply method): immediate | pending-reboot  You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when DB instance reboots.  Oracle  Valid Values (for Apply method): pending-reboot",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "restore-db-cluster-from-s3",
      description:
        "Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in  Migrating Data from MySQL by Using an Amazon S3 Bucket in the Amazon Aurora User Guide.  This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterFromS3 action has completed and the DB cluster is available.  For more information on Amazon Aurora, see  What is Amazon Aurora? in the Amazon Aurora User Guide.  This action only applies to Aurora DB clusters. The source DB engine must be MySQL",
      options: [
        {
          name: "--availability-zones",
          description:
            "A list of Availability Zones (AZs) where instances in the restored DB cluster can be created",
          args: {
            name: "list",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups of the restored DB cluster are retained. You must specify a minimum value of 1. Default: 1 Constraints:   Must be a value from 1 to 35",
          args: {
            name: "integer",
          },
        },
        {
          name: "--character-set-name",
          description:
            "A value that indicates that the restored DB cluster should be associated with the specified CharacterSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The database name for the restored DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The name of the DB cluster to create from the source data in the Amazon S3 bucket. This parameter isn't case-sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: my-cluster1",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with the restored DB cluster. If this argument is omitted, default.aurora5.6 is used. Constraints:   If supplied, must match the name of an existing DBClusterParameterGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with the restored DB cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "A DB subnet group to associate with the restored DB cluster. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora) and aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            'The version number of the database engine to use. To list all of the available engine versions for aurora (for MySQL 5.6-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"   Aurora MySQL  Example: 5.6.10a, 5.6.mysql_aurora.1.19.2, 5.7.mysql_aurora.2.07.1, 8.0.mysql_aurora.3.02.0',
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the instances in the restored DB cluster accept connections. Default: 3306",
          args: {
            name: "integer",
          },
        },
        {
          name: "--master-username",
          description:
            "The name of the master user for the restored DB cluster. Constraints:   Must be 1 to 16 letters or numbers.   First character must be a letter.   Can't be a reserved word for the chosen database engine",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-user-password",
          description:
            'The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@". Constraints: Must contain from 8 to 41 characters',
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "A value that indicates that the restored DB cluster should be associated with the specified option group. Permanent options can't be removed from an option group. An option group can't be removed from a DB cluster once it is associated with a DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see  Backup window in the Amazon Aurora User Guide. Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see  Adjusting the Preferred Maintenance Window in the Amazon Aurora User Guide. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-encrypted",
          description:
            "A value that indicates whether the restored DB cluster is encrypted",
        },
        {
          name: "--no-storage-encrypted",
          description:
            "A value that indicates whether the restored DB cluster is encrypted",
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for an encrypted DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If the StorageEncrypted parameter is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS will use your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
        },
        {
          name: "--source-engine",
          description:
            "The identifier for the database engine that was backed up to create the files stored in the Amazon S3 bucket. Valid values: mysql",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-engine-version",
          description:
            "The version of the database that the backup files were created from. MySQL versions 5.5, 5.6, and 5.7 are supported. Example: 5.6.40, 5.7.28",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-name",
          description:
            "The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix",
          description:
            "The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster. If you do not specify a SourceS3Prefix value, then the Amazon Aurora DB cluster is created by using all of the files in the Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-ingestion-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that authorizes Amazon RDS to access the Amazon S3 bucket on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--backtrack-window",
          description:
            "The target backtrack window, in seconds. To disable backtracking, set this value to 0.  Currently, Backtrack is only supported for Aurora MySQL DB clusters.  Default: 0 Constraints:   If specified, this value must be set to a number from 0 to 259,200 (72 hours)",
          args: {
            name: "long",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used.  Aurora MySQL  Possible values are audit, error, general, and slowquery.  Aurora PostgreSQL  Possible value is postgresql. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled",
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them",
        },
        {
          name: "--domain",
          description:
            "Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation. For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos Authentication in the Amazon Aurora User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service",
          args: {
            name: "string",
          },
        },
        {
          name: "--serverless-v2-scaling-configuration",
          description:
            "Contains the scaling configuration of an Aurora Serverless v2 DB cluster. For more information, see Using Amazon Aurora Serverless v2 in the Amazon Aurora User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB cluster. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon Aurora User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "restore-db-cluster-from-snapshot",
      description:
        "Creates a new DB cluster from a DB snapshot or DB cluster snapshot. The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.  This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterFromSnapshot action has completed and the DB cluster is available.  For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--availability-zones",
          description:
            "Provides the list of Availability Zones (AZs) where instances in the restored DB cluster can be created. Valid for: Aurora DB clusters only",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-snapshot-id  Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-identifier",
          description:
            "The identifier for the DB snapshot or DB cluster snapshot to restore from. You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot. Constraints:   Must match the identifier of an existing Snapshot.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The database engine to use for the new DB cluster. Default: The same as source Constraint: Must be compatible with the engine of the source Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            'The version of the database engine to use for the new DB cluster. To list all of the available engine versions for MySQL 5.6-compatible Aurora, use the following command:  aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora, use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for Aurora PostgreSQL, use the following command:  aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for RDS for MySQL, use the following command:  aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for RDS for PostgreSQL, use the following command:  aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"   Aurora MySQL  See MySQL on Amazon RDS Versions in the Amazon Aurora User Guide.  Aurora PostgreSQL  See Amazon Aurora PostgreSQL releases and engine versions in the Amazon Aurora User Guide.  MySQL  See MySQL on Amazon RDS Versions in the Amazon RDS User Guide.   PostgreSQL  See Amazon RDS for PostgreSQL versions and extensions in the Amazon RDS User Guide.  Valid for: Aurora DB clusters and Multi-AZ DB clusters',
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the new DB cluster accepts connections. Constraints: This value must be 1150-65535  Default: The same port as the original DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The name of the DB subnet group to use for the new DB cluster. Constraints: If supplied, must match the name of an existing DB subnet group. Example: mydbsubnetgroup  Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The database name for the restored DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The name of the option group to use for the restored DB cluster. DB clusters are associated with a default option group that can't be modified",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of VPC security groups that the new DB cluster will belong to. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be assigned to the restored DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. When you don't specify a value for the KmsKeyId parameter, then the following occurs:   If the DB snapshot or DB cluster snapshot in SnapshotIdentifier is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.   If the DB snapshot or DB cluster snapshot in SnapshotIdentifier isn't encrypted, then the restored DB cluster isn't encrypted.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--backtrack-window",
          description:
            "The target backtrack window, in seconds. To disable backtracking, set this value to 0.  Currently, Backtrack is only supported for Aurora MySQL DB clusters.  Default: 0 Constraints:   If specified, this value must be set to a number from 0 to 259,200 (72 hours).   Valid for: Aurora DB clusters only",
          args: {
            name: "long",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs. The values in the list depend on the DB engine being used.  RDS for MySQL  Possible values are error, general, and slowquery.  RDS for PostgreSQL  Possible values are postgresql and upgrade.  Aurora MySQL  Possible values are audit, error, general, and slowquery.  Aurora PostgreSQL  Possible value is postgresql. For more information about exporting CloudWatch Logs for Amazon RDS, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "list",
          },
        },
        {
          name: "--engine-mode",
          description:
            "The DB engine mode of the DB cluster, either provisioned, serverless, parallelquery, global, or multimaster. For more information, see  CreateDBCluster. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-configuration",
          description:
            "For DB clusters in serverless DB engine mode, the scaling properties of the DB cluster. Valid for: Aurora DB clusters only",
          args: {
            name: "structure",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default DB cluster parameter group for the specified engine is used. Constraints:   If supplied, must match the name of an existing default DB cluster parameter group.   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--domain",
          description:
            "Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-instance-class",
          description:
            "The compute and memory capacity of the each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide.  Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the each DB instance in the Multi-AZ DB cluster. Valid values: io1  When specified, a value for the Iops parameter is required. Default: io1  Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid Iops values, see Amazon RDS Provisioned IOPS Storage to Improve Performance in the Amazon RDS User Guide. Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB instance. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "integer",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB cluster is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB cluster doesn't permit it. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target Region doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB cluster is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB cluster doesn't permit it. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target Region doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--serverless-v2-scaling-configuration",
          description:
            "Contains the scaling configuration of an Aurora Serverless v2 DB cluster. For more information, see Using Amazon Aurora Serverless v2 in the Amazon Aurora User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB cluster. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon Aurora User Guide.  Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "restore-db-cluster-to-point-in-time",
      description:
        "Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.  For Aurora, this action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterToPointInTime action has completed and the DB cluster is available.  For more information on Amazon Aurora DB clusters, see  What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see  Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The name of the new DB cluster to be created. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-type",
          description:
            "The type of restore to be performed. You can specify one of the following values:    full-copy - The new DB cluster is restored as a full copy of the source DB cluster.    copy-on-write - The new DB cluster is restored as a clone of the source DB cluster.   Constraints: You can't specify copy-on-write if the engine version of the source DB cluster is earlier than 1.11. If you don't specify a RestoreType value, then the new DB cluster is restored as a full copy of the source DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-db-cluster-identifier",
          description:
            "The identifier of the source DB cluster from which to restore. Constraints:   Must match the identifier of an existing DBCluster.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-to-time",
          description:
            "The date and time to restore the DB cluster to. Valid Values: Value must be a time in Universal Coordinated Time (UTC) format Constraints:   Must be before the latest restorable time for the DB instance   Must be specified if UseLatestRestorableTime parameter isn't provided   Can't be specified if the UseLatestRestorableTime parameter is enabled   Can't be specified if the RestoreType parameter is copy-on-write    Example: 2015-03-07T23:45:00Z  Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--use-latest-restorable-time",
          description:
            "A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster isn't restored to the latest restorable backup time. Constraints: Can't be specified if RestoreToTime parameter is provided. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-use-latest-restorable-time",
          description:
            "A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster isn't restored to the latest restorable backup time. Constraints: Can't be specified if RestoreToTime parameter is provided. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--port",
          description:
            "The port number on which the new DB cluster accepts connections. Constraints: A value from 1150-65535. Default: The default port for the engine. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The DB subnet group name to use for the new DB cluster. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mydbsubnetgroup  Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The name of the option group for the new DB cluster. DB clusters are associated with a default option group that can't be modified",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of VPC security groups that the new DB cluster belongs to. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different from the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the KmsKeyId parameter. If you don't specify a value for the KmsKeyId parameter, then the following occurs:   If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.   If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted.   If DBClusterIdentifier refers to a DB cluster that isn't encrypted, then the restore request is rejected. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
        },
        {
          name: "--backtrack-window",
          description:
            "The target backtrack window, in seconds. To disable backtracking, set this value to 0. Default: 0 Constraints:   If specified, this value must be set to a number from 0 to 259,200 (72 hours).   Valid for: Aurora MySQL DB clusters only",
          args: {
            name: "long",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used.  RDS for MySQL  Possible values are error, general, and slowquery.  RDS for PostgreSQL  Possible values are postgresql and upgrade.  Aurora MySQL  Possible values are audit, error, general, and slowquery.  Aurora PostgreSQL  Possible value is postgresql. For more information about exporting CloudWatch Logs for Amazon RDS, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default DB cluster parameter group for the specified engine is used. Constraints:   If supplied, must match the name of an existing DB cluster parameter group.   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Valid for: Aurora DB clusters and Multi-AZ DB clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters",
        },
        {
          name: "--domain",
          description:
            "Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation. For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos Authentication in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-configuration",
          description:
            "For DB clusters in serverless DB engine mode, the scaling properties of the DB cluster. Valid for: Aurora DB clusters only",
          args: {
            name: "structure",
          },
        },
        {
          name: "--engine-mode",
          description:
            "The engine mode of the new cluster. Specify provisioned or serverless, depending on the type of the cluster you are creating. You can create an Aurora Serverless v1 clone from a provisioned cluster, or a provisioned clone from an Aurora Serverless v1 cluster. To create a clone that is an Aurora Serverless v1 cluster, the original cluster must be an Aurora Serverless v1 cluster or an encrypted provisioned cluster. Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-instance-class",
          description:
            "The compute and memory capacity of the each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB instance class in the Amazon RDS User Guide.  Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the each DB instance in the Multi-AZ DB cluster. Valid values: io1  When specified, a value for the Iops parameter is required. Default: io1  Valid for: Multi-AZ DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB cluster is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB cluster doesn't permit it. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target Region doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.   Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB cluster is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB cluster doesn't permit it. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target Region doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an internet gateway attached to it, the DB cluster is private.   If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.   Valid for: Multi-AZ DB clusters only",
        },
        {
          name: "--iops",
          description:
            "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid Iops values, see Amazon RDS Provisioned IOPS storage to improve performance in the Amazon RDS User Guide. Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB instance. Valid for: Multi-AZ DB clusters only",
          args: {
            name: "integer",
          },
        },
        {
          name: "--serverless-v2-scaling-configuration",
          description:
            "Contains the scaling configuration of an Aurora Serverless v2 DB cluster. For more information, see Using Amazon Aurora Serverless v2 in the Amazon Aurora User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB cluster. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon Aurora User Guide.  Valid for: Aurora DB clusters only",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "restore-db-instance-from-db-snapshot",
      description:
        "Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment. If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original DB instance with the DB instance created from the snapshot. If you are restoring from a shared manual DB snapshot, the DBSnapshotIdentifier must be the ARN of the shared DB snapshot.  This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use RestoreDBClusterFromSnapshot",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "Name of the DB instance to create from the DB snapshot. This parameter isn't case-sensitive. Constraints:   Must contain from 1 to 63 numbers, letters, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-snapshot-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-snapshot-identifier",
          description:
            "The identifier for the DB snapshot to restore from. Constraints:   Must match the identifier of an existing DBSnapshot.   If you are restoring from a shared manual DB snapshot, the DBSnapshotIdentifier must be the ARN of the shared DB snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the Amazon RDS DB instance, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide.  Default: The same DBInstanceClass as the original DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the database accepts connections. Default: The same port as the original DB instance Constraints: Value must be 1150-65535",
          args: {
            name: "integer",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The Availability Zone (AZ) where the DB instance will be created. Default: A random, system-chosen Availability Zone. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment. Example: us-east-1a",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The DB subnet group name to use for the new instance. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window. If you restore an RDS Custom DB instance, you must disable this parameter",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window. If you restore an RDS Custom DB instance, you must disable this parameter",
        },
        {
          name: "--license-model",
          description:
            "License model information for the restored DB instance. This setting doesn't apply to RDS Custom. Default: Same as source. Valid values: license-included | bring-your-own-license | general-public-license",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-name",
          description:
            "The database name for the restored DB instance. This parameter doesn't apply to the MySQL, PostgreSQL, or MariaDB engines. It also doesn't apply to RDS Custom DB instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The database engine to use for the new instance. This setting doesn't apply to RDS Custom. Default: The same as source Constraint: Must be compatible with the engine of the source. For example, you can restore a MariaDB 10.1 DB instance from a MySQL 5.6 snapshot. Valid Values:    mariadb     mysql     oracle-ee     oracle-ee-cdb     oracle-se2     oracle-se2-cdb     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O operations per second. If this parameter isn't specified, the IOPS value is taken from the backup. If this parameter is set to 0, the new instance is converted to a non-PIOPS instance. The conversion takes additional time, though your DB instance is available for connections before the conversion starts. The provisioned IOPS value must follow the requirements for your database engine. For more information, see Amazon RDS Provisioned IOPS Storage to Improve Performance in the Amazon RDS User Guide.  Constraints: Must be an integer greater than 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The name of the option group to be used for the restored DB instance. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance after it is associated with a DB instance. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB instance. Valid values: standard | gp2 | io1  If you specify io1, you must also include a value for the Iops parameter. Default: io1 if the Iops parameter is specified, otherwise gp2",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-arn",
          description:
            "The ARN from the key store with which to associate the instance for TDE encryption. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-password",
          description:
            "The password for the given ARN from the key store in order to access the device. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with this DB instance. Default: The default EC2 VPC security group for the DB subnet group's VPC",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain",
          description:
            "Specify the Active Directory directory ID to restore the DB instance in. The domain/ must be created prior to this operation. Currently, you can create only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. In most cases, tags aren't copied by default. However, when you restore a DB instance from a DB snapshot, RDS checks whether you specify new tags. If yes, the new tags are added to the restored DB instance. If there are no new tags, RDS looks for the tags from the source DB instance for the DB snapshot, and then adds those tags to the restored DB instance. For more information, see  Copying tags to DB instance snapshots in the Amazon RDS User Guide",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. In most cases, tags aren't copied by default. However, when you restore a DB instance from a DB snapshot, RDS checks whether you specify new tags. If yes, the new tags are added to the restored DB instance. If there are no new tags, RDS looks for the tags from the source DB instance for the DB snapshot, and then adds those tags to the restored DB instance. For more information, see  Copying tags to DB instance snapshots in the Amazon RDS User Guide",
        },
        {
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide.  This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide.  This setting doesn't apply to RDS Custom",
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
          args: {
            name: "list",
          },
        },
        {
          name: "--processor-features",
          description:
            "The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. This setting doesn't apply to RDS Custom",
          args: {
            name: "list",
          },
        },
        {
          name: "--use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If you don't specify a value for DBParameterGroupName, then RDS uses the default DBParameterGroup for the specified DB engine. This setting doesn't apply to RDS Custom. Constraints:   If supplied, must match the name of an existing DBParameterGroup.   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. This setting doesn't apply to RDS Custom. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide",
        },
        {
          name: "--no-enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. This setting doesn't apply to RDS Custom. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide",
        },
        {
          name: "--custom-iam-instance-profile",
          description:
            "The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:   The profile must exist in your account.   The profile must have an IAM role that Amazon EC2 has permissions to assume.   The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom.   For the list of permissions required for the IAM role, see  Configure IAM and your VPC in the Amazon RDS User Guide. This setting is required for RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-target",
          description:
            "Specifies where automated backups and manual snapshots are stored for the restored DB instance. Possible values are outposts (Amazon Web Services Outposts) and region (Amazon Web Services Region). The default is region. For more information, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB instance. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "restore-db-instance-from-s3",
      description:
        "Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see Importing Data into an Amazon RDS MySQL DB Instance in the Amazon RDS User Guide.  This command doesn't apply to RDS Custom",
      options: [
        {
          name: "--db-name",
          description:
            "The name of the database to create when the DB instance is created. Follow the naming rules specified in CreateDBInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-identifier",
          description:
            "The DB instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: mydbinstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--allocated-storage",
          description:
            "The amount of storage (in gigabytes) to allocate initially for the DB instance. Follow the allocation rules specified in CreateDBInstance.  Be sure to allocate enough memory for your new DB instance so that the restore operation can succeed. You can also allocate additional memory for future growth",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the DB instance, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide.  Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this instance. Valid Values: mysql",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-username",
          description:
            "The name for the master user. Constraints:   Must be 1 to 16 letters or numbers.   First character must be a letter.   Can't be a reserved word for the chosen database engine",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-user-password",
          description:
            'The password for the master user. The password can include any printable ASCII character except "/", """, or "@". Constraints: Must contain from 8 to 41 characters',
          args: {
            name: "string",
          },
        },
        {
          name: "--db-security-groups",
          description:
            "A list of DB security groups to associate with this DB instance. Default: The default DB security group for the database engine",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of VPC security groups to associate with this DB instance",
          args: {
            name: "list",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The Availability Zone that the DB instance is created in. For information about Amazon Web Services Regions and Availability Zones, see Regions and Availability Zones in the Amazon RDS User Guide.  Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Example: us-east-1d  Constraint: The AvailabilityZone parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "A DB subnet group to associate with this DB instance. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see Amazon RDS Maintenance Window in the Amazon RDS User Guide.  Constraints:   Must be in the format ddd:hh24:mi-ddd:hh24:mi.   Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred backup window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If you do not specify a value for DBParameterGroupName, then the default DBParameterGroup for the specified DB engine is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. For more information, see CreateDBInstance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The time range each day during which automated backups are created if automated backups are enabled. For more information, see Backup window in the Amazon RDS User Guide.  Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the database accepts connections. Type: Integer Valid Values: 1150-65535  Default: 3306",
          args: {
            name: "integer",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. If the DB instance is a Multi-AZ deployment, you can't set the AvailabilityZone parameter",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. If the DB instance is a Multi-AZ deployment, you can't set the AvailabilityZone parameter",
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to use. Choose the latest minor version of your database engine. For information about engine versions, see CreateDBInstance, or call DescribeDBEngineVersions",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are not applied automatically",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are not applied automatically",
        },
        {
          name: "--license-model",
          description:
            "The license model for this DB instance. Use general-public-license",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The amount of Provisioned IOPS (input/output operations per second) to allocate initially for the DB instance. For information about valid Iops values, see Amazon RDS Provisioned IOPS Storage to Improve Performance in the Amazon RDS User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The name of the option group to associate with this DB instance. If this argument is omitted, the default option group for the specified engine is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with this DB instance. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB instance. Valid values: standard | gp2 | io1  If you specify io1, you must also include a value for the Iops parameter. Default: io1 if the Iops parameter is specified; otherwise gp2",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-encrypted",
          description:
            "A value that indicates whether the new DB instance is encrypted or not",
        },
        {
          name: "--no-storage-encrypted",
          description:
            "A value that indicates whether the new DB instance is encrypted or not",
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for an encrypted DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If the StorageEncrypted parameter is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS will use your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied",
        },
        {
          name: "--monitoring-interval",
          description:
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60 Default: 0",
          args: {
            name: "integer",
          },
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting Up and Enabling Enhanced Monitoring in the Amazon RDS User Guide.  If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--source-engine",
          description:
            "The name of the engine of your source database. Valid Values: mysql",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-engine-version",
          description:
            "The version of the database that the backup files were created from. MySQL versions 5.6 and 5.7 are supported. Example: 5.6.40",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-name",
          description:
            "The name of your Amazon S3 bucket that contains your database backup file",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix",
          description: "The prefix of your Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-ingestion-role-arn",
          description:
            "An Amazon Web Services Identity and Access Management (IAM) role to allow Amazon RDS to access your Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:   7    month * 31, where month is a number of months from 1-23   731   For example, the following values are valid:   93 (3 months * 31)   341 (11 months * 31)   589 (19 months * 31)   731   If you specify a retention period such as 94, which isn't a valid value, RDS issues an error",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--processor-features",
          description:
            "The number of CPU cores and the number of threads per core for the DB instance class of the DB instance",
          args: {
            name: "list",
          },
        },
        {
          name: "--use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features",
        },
        {
          name: "--no-use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features",
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--max-allocated-storage",
          description:
            "The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB instance. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "restore-db-instance-to-point-in-time",
      description:
        "Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property. The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.  This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use RestoreDBClusterToPointInTime",
      options: [
        {
          name: "--source-db-instance-identifier",
          description:
            "The identifier of the source DB instance from which to restore. Constraints:   Must match the identifier of an existing DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-instance-identifier",
          description:
            "The name of the new DB instance to be created. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-time",
          description:
            "The date and time to restore from. Valid Values: Value must be a time in Universal Coordinated Time (UTC) format Constraints:   Must be before the latest restorable time for the DB instance   Can't be specified if the UseLatestRestorableTime parameter is enabled   Example: 2009-09-07T23:45:00Z",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--use-latest-restorable-time",
          description:
            "A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time. Constraints: Can't be specified if the RestoreTime parameter is provided",
        },
        {
          name: "--no-use-latest-restorable-time",
          description:
            "A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time. Constraints: Can't be specified if the RestoreTime parameter is provided",
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the Amazon RDS DB instance, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide. Default: The same DBInstanceClass as the original DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the database accepts connections. Constraints: Value must be 1150-65535  Default: The same port as the original DB instance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The Availability Zone (AZ) where the DB instance will be created. Default: A random, system-chosen Availability Zone. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment. Example: us-east-1a",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The DB subnet group name to use for the new instance. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mydbsubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--license-model",
          description:
            "License model information for the restored DB instance. This setting doesn't apply to RDS Custom. Default: Same as source. Valid values: license-included | bring-your-own-license | general-public-license",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-name",
          description:
            "The database name for the restored DB instance.  This parameter isn't supported for the MySQL or MariaDB engines. It also doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The database engine to use for the new instance. This setting doesn't apply to RDS Custom. Default: The same as source Constraint: Must be compatible with the engine of the source Valid Values:    mariadb     mysql     oracle-ee     oracle-ee-cdb     oracle-se2     oracle-se2-cdb     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance. Constraints: Must be an integer greater than 1000.  SQL Server  Setting the IOPS value for the SQL Server database engine isn't supported",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The name of the option group to be used for the restored DB instance. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance after it is associated with a DB instance This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied",
        },
        {
          name: "--tags",
          description:
            "A list of tags. For more information, see Tagging Amazon RDS Resources in the Amazon RDS User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB instance. Valid values: standard | gp2 | io1  If you specify io1, you must also include a value for the Iops parameter. Default: io1 if the Iops parameter is specified, otherwise gp2",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-arn",
          description:
            "The ARN from the key store with which to associate the instance for TDE encryption. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-password",
          description:
            "The password for the given ARN from the key store in order to access the device. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with this DB instance. Default: The default EC2 VPC security group for the DB subnet group's VPC",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain",
          description:
            "Specify the Active Directory directory ID to restore the DB instance in. Create the domain before running this command. Currently, you can create only the MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain. This setting doesn't apply to RDS Custom. For more information, see  Kerberos Authentication in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. This setting doesn't apply to RDS Custom. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. This setting doesn't apply to RDS Custom. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
          args: {
            name: "list",
          },
        },
        {
          name: "--processor-features",
          description:
            "The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. This setting doesn't apply to RDS Custom",
          args: {
            name: "list",
          },
        },
        {
          name: "--use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--no-use-default-processor-features",
          description:
            "A value that indicates whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom",
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If you do not specify a value for DBParameterGroupName, then the default DBParameterGroup for the specified DB engine is used. This setting doesn't apply to RDS Custom. Constraints:   If supplied, must match the name of an existing DBParameterGroup.   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--source-dbi-resource-id",
          description:
            "The resource ID of the source DB instance from which to restore",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-allocated-storage",
          description:
            "The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom",
          args: {
            name: "integer",
          },
        },
        {
          name: "--source-db-instance-automated-backups-arn",
          description:
            "The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, arn:aws:rds:useast-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE. This setting doesn't apply to RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. This setting doesn't apply to RDS Custom. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide",
        },
        {
          name: "--no-enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. This setting doesn't apply to RDS Custom. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the Amazon Web Services Outposts User Guide",
        },
        {
          name: "--custom-iam-instance-profile",
          description:
            "The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:   The profile must exist in your account.   The profile must have an IAM role that Amazon EC2 has permissions to assume.   The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom.   For the list of permissions required for the IAM role, see  Configure IAM and your VPC in the Amazon RDS User Guide. This setting is required for RDS Custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-target",
          description:
            "Specifies where automated backups and manual snapshots are stored for the restored DB instance. Possible values are outposts (Amazon Web Services Outposts) and region (Amazon Web Services Region). The default is region. For more information, see Working with Amazon RDS on Amazon Web Services Outposts in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-type",
          description:
            "The network type of the DB instance. Valid values:    IPV4     DUAL    The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see  Working with a DB instance in a VPC in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "revoke-db-security-group-ingress",
      description:
        "Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).  EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring \u2013 Here\u2019s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide",
      options: [
        {
          name: "--db-security-group-name",
          description:
            "The name of the DB security group to revoke ingress from",
          args: {
            name: "string",
          },
        },
        {
          name: "--cidrip",
          description:
            "The IP range to revoke access from. Must be a valid CIDR range. If CIDRIP is specified, EC2SecurityGroupName, EC2SecurityGroupId and EC2SecurityGroupOwnerId can't be provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-security-group-name",
          description:
            "The name of the EC2 security group to revoke access from. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-security-group-id",
          description:
            "The id of the EC2 security group to revoke access from. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-security-group-owner-id",
          description:
            "The Amazon Web Services account number of the owner of the EC2 security group specified in the EC2SecurityGroupName parameter. The Amazon Web Services access key ID isn't an acceptable value. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-activity-stream",
      description:
        "Starts a database activity stream to monitor activity on the database. For more information, see Database Activity Streams in the Amazon Aurora User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the DB cluster, for example, arn:aws:rds:us-east-1:12345667890:cluster:das-cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for encrypting messages in the database activity stream. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "Specifies whether or not the database activity stream is to start as soon as possible, regardless of the maintenance window for the database",
        },
        {
          name: "--no-apply-immediately",
          description:
            "Specifies whether or not the database activity stream is to start as soon as possible, regardless of the maintenance window for the database",
        },
        {
          name: "--engine-native-audit-fields-included",
          description:
            "Specifies whether the database activity stream includes engine-native audit fields. This option only applies to an Oracle DB instance. By default, no engine-native audit fields are included",
        },
        {
          name: "--no-engine-native-audit-fields-included",
          description:
            "Specifies whether the database activity stream includes engine-native audit fields. This option only applies to an Oracle DB instance. By default, no engine-native audit fields are included",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-db-cluster",
      description:
        "Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action. For more information, see  Stopping and Starting an Aurora Cluster in the Amazon Aurora User Guide.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier of the Amazon Aurora DB cluster to be started. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-db-instance",
      description:
        "Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action. For more information, see  Starting an Amazon RDS DB instance That Was Previously Stopped in the Amazon RDS User Guide.   This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use StartDBCluster instead",
      options: [
        {
          name: "--db-instance-identifier",
          description: "The user-supplied instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-db-instance-automated-backups-replication",
      description:
        "Enables replication of automated backups to a different Amazon Web Services Region. This command doesn't apply to RDS Custom. For more information, see  Replicating Automated Backups to Another Amazon Web Services Region in the Amazon RDS User Guide",
      options: [
        {
          name: "--source-db-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example, arn:aws:rds:us-west-2:123456789012:db:mydatabase",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The retention period for the replicated automated backups",
          args: {
            name: "integer",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination Amazon Web Services Region, for example, arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description:
            "In an Amazon Web Services GovCloud (US) Region, an URL that contains a Signature Version 4 signed request for the StartDBInstanceAutomatedBackupsReplication operation to call in the Amazon Web Services Region of the source DB instance. The presigned URL must be a valid request for the StartDBInstanceAutomatedBackupsReplication API operation that can run in the Amazon Web Services Region that contains the source DB instance. This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other Amazon Web Services Regions. To learn how to generate a Signature Version 4 signed request, see  Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) and  Signature Version 4 Signing Process.  If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-region",
          description:
            "The ID of the region that contains the source for the db instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-export-task",
      description:
        "Starts an export of a snapshot to Amazon S3. The provided IAM role must have access to the S3 bucket. This command doesn't apply to RDS Custom",
      options: [
        {
          name: "--export-task-identifier",
          description:
            "A unique identifier for the snapshot export task. This ID isn't an identifier for the Amazon S3 bucket where the snapshot is to be exported to",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-arn",
          description:
            "The Amazon Resource Name (ARN) of the snapshot to export to Amazon S3",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-name",
          description:
            "The name of the Amazon S3 bucket to export the snapshot to",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The name of the IAM role to use for writing to the Amazon S3 bucket when exporting a snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the Amazon Web Services KMS key to use to encrypt the snapshot exported to Amazon S3. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. The caller of this operation must be authorized to execute the following operations. These can be set in the Amazon Web Services KMS key policy:   GrantOperation.Encrypt   GrantOperation.Decrypt   GrantOperation.GenerateDataKey   GrantOperation.GenerateDataKeyWithoutPlaintext   GrantOperation.ReEncryptFrom   GrantOperation.ReEncryptTo   GrantOperation.CreateGrant   GrantOperation.DescribeKey   GrantOperation.RetireGrant",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix",
          description:
            "The Amazon S3 bucket prefix to use as the file name and path of the exported snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-only",
          description:
            "The data to be exported from the snapshot. If this parameter is not provided, all the snapshot data is exported. Valid values are the following:    database - Export all the data from a specified database.    database.table table-name - Export a table of the snapshot. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.    database.schema schema-name - Export a database schema of the snapshot. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.    database.schema.table table-name - Export a table of the database schema. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "stop-activity-stream",
      description:
        "Stops a database activity stream that was started using the Amazon Web Services console, the start-activity-stream CLI command, or the StartActivityStream action. For more information, see Database Activity Streams in the Amazon Aurora User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the DB cluster for the database activity stream. For example, arn:aws:rds:us-east-1:12345667890:cluster:das-cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "Specifies whether or not the database activity stream is to stop as soon as possible, regardless of the maintenance window for the database",
        },
        {
          name: "--no-apply-immediately",
          description:
            "Specifies whether or not the database activity stream is to stop as soon as possible, regardless of the maintenance window for the database",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "stop-db-cluster",
      description:
        "Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. For more information, see  Stopping and Starting an Aurora Cluster in the Amazon Aurora User Guide.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "stop-db-instance",
      description:
        "Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. For more information, see  Stopping an Amazon RDS DB Instance Temporarily in the Amazon RDS User Guide.   This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use StopDBCluster instead",
      options: [
        {
          name: "--db-instance-identifier",
          description: "The user-supplied instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-snapshot-identifier",
          description:
            "The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "stop-db-instance-automated-backups-replication",
      description:
        "Stops automated backup replication for a DB instance. This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For more information, see  Replicating Automated Backups to Another Amazon Web Services Region in the Amazon RDS User Guide",
      options: [
        {
          name: "--source-db-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the source DB instance for which to stop replicating automated backups, for example, arn:aws:rds:us-west-2:123456789012:db:mydatabase",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "switchover-read-replica",
      description:
        "Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The DB instance identifier of the current standby database. This value is stored as a lowercase string. Constraints:   Must match the identi\ufb01er of an existing Oracle read replica DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "add-option-to-option-group",
      description: "Modifies an existing option group",
      options: [
        {
          name: "--option-group-name",
          description:
            "The name of the option group to be modified. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "A value that indicates whether to apply the change immediately or during the next maintenance window for each instance associated with the option group",
        },
        {
          name: "--no-apply-immediately",
          description:
            "A value that indicates whether to apply the change immediately or during the next maintenance window for each instance associated with the option group",
        },
        {
          name: "--options",
          description:
            "Options in this list are added to the option group or, if already present, the specified configuration is used to update the existing configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "remove-option-from-option-group",
      description: "Modifies an existing option group",
      options: [
        {
          name: "--option-group-name",
          description:
            "The name of the option group to be modified. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "A value that indicates whether to apply the change immediately or during the next maintenance window for each instance associated with the option group",
        },
        {
          name: "--no-apply-immediately",
          description:
            "A value that indicates whether to apply the change immediately or during the next maintenance window for each instance associated with the option group",
        },
        {
          name: "--options",
          description: "Options in this list are removed from the option group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "generate-db-auth-token",
      description:
        "Generates an auth token used to connect to a db with IAM credentials",
      options: [
        {
          name: "--hostname",
          description: "The hostname of the database to connect to",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description: "The port number the database is listening on",
          args: {
            name: "integer",
          },
        },
        {
          name: "--username",
          description: "The username to log in as",
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
          name: "db-cluster-available",
          description:
            "Wait until JMESPath query DBClusters[].Status returns available for all elements when polling with ``describe-db-clusters``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-cluster-identifier",
              description:
                "The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive. Constraints:   If supplied, must match an existing DBClusterIdentifier",
              args: {
                name: "string",
              },
            },
            {
              name: "--filters",
              description:
                "A filter that specifies one or more DB clusters to describe. Supported filters:    clone-group-id - Accepts clone group identifiers. The results list only includes information about the DB clusters associated with these clone groups.    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB clusters identified by these ARNs.    domain - Accepts Active Directory directory IDs. The results list only includes information about the DB clusters associated with these domains.    engine - Accepts engine names. The results list only includes information about the DB clusters for these engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous DescribeDBClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--include-shared",
              description:
                "Optional Boolean parameter that specifies whether the output includes information about clusters shared from other Amazon Web Services accounts",
            },
            {
              name: "--no-include-shared",
              description:
                "Optional Boolean parameter that specifies whether the output includes information about clusters shared from other Amazon Web Services accounts",
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
        {
          name: "db-cluster-deleted",
          description:
            "Wait until JMESPath query length(DBClusters) == `0` returns True when polling with ``describe-db-clusters``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-cluster-identifier",
              description:
                "The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive. Constraints:   If supplied, must match an existing DBClusterIdentifier",
              args: {
                name: "string",
              },
            },
            {
              name: "--filters",
              description:
                "A filter that specifies one or more DB clusters to describe. Supported filters:    clone-group-id - Accepts clone group identifiers. The results list only includes information about the DB clusters associated with these clone groups.    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB clusters identified by these ARNs.    domain - Accepts Active Directory directory IDs. The results list only includes information about the DB clusters associated with these domains.    engine - Accepts engine names. The results list only includes information about the DB clusters for these engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous DescribeDBClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--include-shared",
              description:
                "Optional Boolean parameter that specifies whether the output includes information about clusters shared from other Amazon Web Services accounts",
            },
            {
              name: "--no-include-shared",
              description:
                "Optional Boolean parameter that specifies whether the output includes information about clusters shared from other Amazon Web Services accounts",
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
        {
          name: "db-cluster-snapshot-available",
          description:
            "Wait until JMESPath query DBClusterSnapshots[].Status returns available for all elements when polling with ``describe-db-cluster-snapshots``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-cluster-identifier",
              description:
                "The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the DBClusterSnapshotIdentifier parameter. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBCluster",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-cluster-snapshot-identifier",
              description:
                "A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the DBClusterIdentifier parameter. This value is stored as a lowercase string. Constraints:   If supplied, must match the identifier of an existing DBClusterSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of DB cluster snapshots to be returned. You can specify one of the following values:    automated - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.    manual - Return all DB cluster snapshots that have been taken by my Amazon Web Services account.    shared - Return all manual DB cluster snapshots that have been shared to my Amazon Web Services account.    public - Return all DB cluster snapshots that have been marked as public.   If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by enabling the IncludeShared parameter. You can include public DB cluster snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
              args: {
                name: "string",
              },
            },
            {
              name: "--filters",
              description:
                "A filter that specifies one or more DB cluster snapshots to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs).    db-cluster-snapshot-id - Accepts DB cluster snapshot identifiers.    snapshot-type - Accepts types of DB cluster snapshots.    engine - Accepts names of database engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous DescribeDBClusterSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB cluster snapshot from another Amazon Web Services account by the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB cluster snapshot from another Amazon Web Services account by the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
        {
          name: "db-cluster-snapshot-deleted",
          description:
            "Wait until JMESPath query length(DBClusterSnapshots) == `0` returns True when polling with ``describe-db-cluster-snapshots``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-cluster-identifier",
              description:
                "The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the DBClusterSnapshotIdentifier parameter. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBCluster",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-cluster-snapshot-identifier",
              description:
                "A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the DBClusterIdentifier parameter. This value is stored as a lowercase string. Constraints:   If supplied, must match the identifier of an existing DBClusterSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of DB cluster snapshots to be returned. You can specify one of the following values:    automated - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.    manual - Return all DB cluster snapshots that have been taken by my Amazon Web Services account.    shared - Return all manual DB cluster snapshots that have been shared to my Amazon Web Services account.    public - Return all DB cluster snapshots that have been marked as public.   If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by enabling the IncludeShared parameter. You can include public DB cluster snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
              args: {
                name: "string",
              },
            },
            {
              name: "--filters",
              description:
                "A filter that specifies one or more DB cluster snapshots to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs).    db-cluster-snapshot-id - Accepts DB cluster snapshot identifiers.    snapshot-type - Accepts types of DB cluster snapshots.    engine - Accepts names of database engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous DescribeDBClusterSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB cluster snapshot from another Amazon Web Services account by the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB cluster snapshot from another Amazon Web Services account by the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
        {
          name: "db-instance-available",
          description:
            "Wait until JMESPath query DBInstances[].DBInstanceStatus returns available for all elements when polling with ``describe-db-instances``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-instance-identifier",
              description:
                "The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBInstance",
              args: {
                name: "string",
              },
            },
            {
              name: "--filters",
              description:
                "A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB instances associated with the DB clusters identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list only includes information about the DB instances identified by these ARNs.    dbi-resource-id - Accepts DB instance resource identifiers. The results list will only include information about the DB instances identified by these DB instance resource identifiers.    domain - Accepts Active Directory directory IDs. The results list only includes information about the DB instances associated with these domains.    engine - Accepts engine names. The results list only includes information about the DB instances for these engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous DescribeDBInstances request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
        {
          name: "db-instance-deleted",
          description:
            "Wait until JMESPath query length(DBInstances) == `0` returns True when polling with ``describe-db-instances``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-instance-identifier",
              description:
                "The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBInstance",
              args: {
                name: "string",
              },
            },
            {
              name: "--filters",
              description:
                "A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB instances associated with the DB clusters identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list only includes information about the DB instances identified by these ARNs.    dbi-resource-id - Accepts DB instance resource identifiers. The results list will only include information about the DB instances identified by these DB instance resource identifiers.    domain - Accepts Active Directory directory IDs. The results list only includes information about the DB instances associated with these domains.    engine - Accepts engine names. The results list only includes information about the DB instances for these engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous DescribeDBInstances request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
        {
          name: "db-snapshot-available",
          description:
            "Wait until JMESPath query DBSnapshots[].Status returns available for all elements when polling with ``describe-db-snapshots``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-instance-identifier",
              description:
                "The ID of the DB instance to retrieve the list of DB snapshots for. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBInstance",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-snapshot-identifier",
              description:
                "A specific DB snapshot identifier to describe. This value is stored as a lowercase string. Constraints:   If supplied, must match the identifier of an existing DBSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of snapshots to be returned. You can specify one of the following values:    automated - Return all DB snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.    manual - Return all DB snapshots that have been taken by my Amazon Web Services account.    shared - Return all manual DB snapshots that have been shared to my Amazon Web Services account.    public - Return all DB snapshots that have been marked as public.    awsbackup - Return the DB snapshots managed by the Amazon Web Services Backup service. For information about Amazon Web Services Backup, see the  Amazon Web Services Backup Developer Guide.   The awsbackup type does not apply to Aurora.   If you don't specify a SnapshotType value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the IncludeShared parameter. You can include public snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
              args: {
                name: "string",
              },
            },
            {
              name: "--filters",
              description:
                "A filter that specifies one or more DB snapshots to describe. Supported filters:    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs).    db-snapshot-id - Accepts DB snapshot identifiers.    dbi-resource-id - Accepts identifiers of source DB instances.    snapshot-type - Accepts types of DB snapshots.    engine - Accepts names of database engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous DescribeDBSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the ModifyDBSnapshotAttribute API action. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the ModifyDBSnapshotAttribute API action. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--dbi-resource-id",
              description: "A specific DB resource ID to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
        {
          name: "db-snapshot-completed",
          description:
            "Wait until DBSnapshotNotFound is thrown when polling with ``describe-db-snapshots``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--db-instance-identifier",
              description:
                "The ID of the DB instance to retrieve the list of DB snapshots for. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBInstance",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-snapshot-identifier",
              description:
                "A specific DB snapshot identifier to describe. This value is stored as a lowercase string. Constraints:   If supplied, must match the identifier of an existing DBSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of snapshots to be returned. You can specify one of the following values:    automated - Return all DB snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.    manual - Return all DB snapshots that have been taken by my Amazon Web Services account.    shared - Return all manual DB snapshots that have been shared to my Amazon Web Services account.    public - Return all DB snapshots that have been marked as public.    awsbackup - Return the DB snapshots managed by the Amazon Web Services Backup service. For information about Amazon Web Services Backup, see the  Amazon Web Services Backup Developer Guide.   The awsbackup type does not apply to Aurora.   If you don't specify a SnapshotType value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the IncludeShared parameter. You can include public snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
              args: {
                name: "string",
              },
            },
            {
              name: "--filters",
              description:
                "A filter that specifies one or more DB snapshots to describe. Supported filters:    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs).    db-snapshot-id - Accepts DB snapshot identifiers.    dbi-resource-id - Accepts identifiers of source DB instances.    snapshot-type - Accepts types of DB snapshots.    engine - Accepts names of database engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous DescribeDBSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the ModifyDBSnapshotAttribute API action. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the ModifyDBSnapshotAttribute API action. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--dbi-resource-id",
              description: "A specific DB resource ID to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
        {
          name: "db-snapshot-deleted",
          description:
            "Wait until JMESPath query length(DBSnapshots) == `0` returns True when polling with ``describe-db-snapshots``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-instance-identifier",
              description:
                "The ID of the DB instance to retrieve the list of DB snapshots for. This parameter isn't case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBInstance",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-snapshot-identifier",
              description:
                "A specific DB snapshot identifier to describe. This value is stored as a lowercase string. Constraints:   If supplied, must match the identifier of an existing DBSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of snapshots to be returned. You can specify one of the following values:    automated - Return all DB snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.    manual - Return all DB snapshots that have been taken by my Amazon Web Services account.    shared - Return all manual DB snapshots that have been shared to my Amazon Web Services account.    public - Return all DB snapshots that have been marked as public.    awsbackup - Return the DB snapshots managed by the Amazon Web Services Backup service. For information about Amazon Web Services Backup, see the  Amazon Web Services Backup Developer Guide.   The awsbackup type does not apply to Aurora.   If you don't specify a SnapshotType value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the IncludeShared parameter. You can include public snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
              args: {
                name: "string",
              },
            },
            {
              name: "--filters",
              description:
                "A filter that specifies one or more DB snapshots to describe. Supported filters:    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs).    db-snapshot-id - Accepts DB snapshot identifiers.    dbi-resource-id - Accepts identifiers of source DB instances.    snapshot-type - Accepts types of DB snapshots.    engine - Accepts names of database engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous DescribeDBSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the ModifyDBSnapshotAttribute API action. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included. You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the ModifyDBSnapshotAttribute API action. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API. This setting doesn't apply to RDS Custom",
            },
            {
              name: "--dbi-resource-id",
              description: "A specific DB resource ID to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
              args: {
                name: "string",
                suggestions: ["input", "output", "yaml-input"],
              },
            },
          ],
        },
      ],
    },
  ],
};
export default completionSpec;
