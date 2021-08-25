const completionSpec: Fig.Spec = {
  name: "rds",
  description:
    "Amazon Relational Database Service   Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique. Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use. This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.  Amazon RDS API Reference    For the alphabetical list of API actions, see API Actions.   For the alphabetical list of data types, see Data Types.   For a list of common query parameters, see Common Parameters.   For descriptions of the error codes, see Common Errors.    Amazon RDS User Guide    For a summary of the Amazon RDS interfaces, see Available RDS Interfaces.   For more information about how to use the Query API, see Using the Query API",
  subcommands: [
    {
      name: "add-role-to-db-cluster",
      description:
        "Associates an Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see Authorizing Amazon Aurora MySQL to Access Other AWS Services on Your Behalf in the Amazon Aurora User Guide.  This action only applies to Aurora DB clusters",
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
            "The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB cluster, for example, arn:aws:iam::123456789012:role/AuroraAccessRole",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-name",
          description:
            "The name of the feature for the DB cluster that the IAM role is to be associated with. For the list of supported feature names, see DBEngineVersion",
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
      name: "add-role-to-db-instance",
      description:
        "Associates an AWS Identity and Access Management (IAM) role with a DB instance.  To add a role to a DB instance, the status of the DB instance must be available",
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
            "The name of the feature for the DB instance that the IAM role is to be associated with. For the list of supported feature names, see DBEngineVersion",
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
            "The identifier of the event source to be added. Constraints:   If the source type is a DB instance, a DBInstanceIdentifier value must be supplied.   If the source type is a DB cluster, a DBClusterIdentifier value must be supplied.   If the source type is a DB parameter group, a DBParameterGroupName value must be supplied.   If the source type is a DB security group, a DBSecurityGroupName value must be supplied.   If the source type is a DB snapshot, a DBSnapshotIdentifier value must be supplied.   If the source type is a DB cluster snapshot, a DBClusterSnapshotIdentifier value must be supplied",
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
      name: "authorize-db-security-group-ingress",
      description:
        "Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).  You can't authorize ingress from an EC2 security group in one AWS Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.  For an overview of CIDR ranges, go to the Wikipedia Tutorial",
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
            "AWS account number of the owner of the EC2 security group specified in the EC2SecurityGroupName parameter. The AWS access key ID isn't an acceptable value. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided",
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
      name: "backtrack-db-cluster",
      description:
        "Backtracks a DB cluster to a specific time, without creating a new DB cluster. For more information on backtracking, see  Backtracking an Aurora DB Cluster in the Amazon Aurora User Guide.   This action only applies to Aurora MySQL DB clusters",
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
      name: "copy-db-cluster-parameter-group",
      description:
        "Copies the specified DB cluster parameter group.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--source-db-cluster-parameter-group-identifier",
          description:
            "The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see  Constructing an ARN for Amazon RDS in the Amazon Aurora User Guide.  Constraints:   Must specify a valid DB cluster parameter group",
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
      name: "copy-db-cluster-snapshot",
      description:
        'Copies a snapshot of a DB cluster. To copy a DB cluster snapshot from a shared manual DB cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot. You can copy an encrypted DB cluster snapshot from another AWS Region. In that case, the AWS Region where you call the CopyDBClusterSnapshot action is the destination AWS Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another AWS Region, you must provide the following values:    KmsKeyId - The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region.    PreSignedUrl - A URL that contains a Signature Version 4 signed request for the CopyDBClusterSnapshot action to be called in the source AWS Region where the DB cluster snapshot is copied from. The pre-signed URL must be a valid request for the CopyDBClusterSnapshot API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied. The pre-signed URL request must contain the following parameter values:    KmsKeyId - The AWS KMS key identifier for the customer master key (CMK) to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the CopyDBClusterSnapshot action that is called in the destination AWS Region, and the action contained in the pre-signed URL.    DestinationRegion - The name of the AWS Region that the DB cluster snapshot is to be created in.    SourceDBClusterSnapshotIdentifier - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your SourceDBClusterSnapshotIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115.   To learn how to generate a Signature Version 4 signed request, see  Authenticating Requests: Using Query Parameters (AWS Signature Version 4) and  Signature Version 4 Signing Process.  If you are using an AWS SDK tool or the AWS CLI, you can specify SourceRegion (or --source-region for the AWS CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source AWS Region.     TargetDBClusterSnapshotIdentifier - The identifier for the new copy of the DB cluster snapshot in the destination AWS Region.    SourceDBClusterSnapshotIdentifier - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source AWS Region and is the same value as the SourceDBClusterSnapshotIdentifier in the pre-signed URL.    To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by TargetDBClusterSnapshotIdentifier while that DB cluster snapshot is in "copying" status. For more information on copying encrypted DB cluster snapshots from one AWS Region to another, see  Copying a Snapshot in the Amazon Aurora User Guide.  For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters',
      options: [
        {
          name: "--source-db-cluster-snapshot-identifier",
          description:
            "The identifier of the DB cluster snapshot to copy. This parameter isn't case-sensitive. You can't copy an encrypted, shared DB cluster snapshot from one AWS Region to another. Constraints:   Must specify a valid system snapshot in the \"available\" state.   If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier.   If the source snapshot is in a different AWS Region than the copy, specify a valid DB cluster snapshot ARN. For more information, go to  Copying Snapshots Across AWS Regions in the Amazon Aurora User Guide.    Example: my-cluster-snapshot1",
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
            "The AWS KMS key identifier for an encrypted DB cluster snapshot. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a value for KmsKeyId to encrypt the copy with a new AWS KMS CMK. If you don't specify a value for KmsKeyId, then the copy of the DB cluster snapshot is encrypted with the same AWS KMS key as the source DB cluster snapshot.  If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then you must specify a value for KmsKeyId.  To copy an encrypted DB cluster snapshot to another AWS Region, you must set KmsKeyId to the AWS KMS key identifier you want to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. AWS KMS CMKs are specific to the AWS Region that they are created in, and you can't use CMKs from one AWS Region in another AWS Region. If you copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description:
            "The URL that contains a Signature Version 4 signed request for the CopyDBClusterSnapshot API action in the AWS Region that contains the source DB cluster snapshot to copy. The PreSignedUrl parameter must be used when copying an encrypted DB cluster snapshot from another AWS Region. Don't specify PreSignedUrl when you are copying an encrypted DB cluster snapshot in the same AWS Region. The pre-signed URL must be a valid request for the CopyDBClusterSnapshot API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied. The pre-signed URL request must contain the following parameter values:    KmsKeyId - The AWS KMS key identifier for the customer master key (CMK) to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the CopyDBClusterSnapshot action that is called in the destination AWS Region, and the action contained in the pre-signed URL.    DestinationRegion - The name of the AWS Region that the DB cluster snapshot is to be created in.    SourceDBClusterSnapshotIdentifier - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your SourceDBClusterSnapshotIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115.   To learn how to generate a Signature Version 4 signed request, see  Authenticating Requests: Using Query Parameters (AWS Signature Version 4) and  Signature Version 4 Signing Process.  If you are using an AWS SDK tool or the AWS CLI, you can specify SourceRegion (or --source-region for the AWS CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source AWS Region",
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
      name: "copy-db-parameter-group",
      description: "Copies the specified DB parameter group",
      options: [
        {
          name: "--source-db-parameter-group-identifier",
          description:
            "The identifier or ARN for the source DB parameter group. For information about creating an ARN, see  Constructing an ARN for Amazon RDS in the Amazon RDS User Guide.  Constraints:   Must specify a valid DB parameter group",
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
      name: "copy-db-snapshot",
      description:
        "Copies the specified DB snapshot. The source DB snapshot must be in the available state. You can copy a snapshot from one AWS Region to another. In that case, the AWS Region where you call the CopyDBSnapshot action is the destination AWS Region for the DB snapshot copy.  For more information about copying snapshots, see Copying a DB Snapshot in the Amazon RDS User Guide",
      options: [
        {
          name: "--source-db-snapshot-identifier",
          description:
            'The identifier for the source DB snapshot. If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier. For example, you might specify rds:mysql-instance1-snapshot-20130805.  If the source snapshot is in a different AWS Region than the copy, specify a valid DB snapshot ARN. For example, you might specify arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805.  If you are copying from a shared manual DB snapshot, this parameter must be the Amazon Resource Name (ARN) of the shared DB snapshot.  If you are copying an encrypted snapshot this parameter must be in the ARN format for the source AWS Region, and must match the SourceDBSnapshotIdentifier in the PreSignedUrl parameter.  Constraints:   Must specify a valid system snapshot in the "available" state.   Example: rds:mydb-2012-04-02-00-01  Example: arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805',
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-snapshot-identifier",
          description:
            "The identifier for the copy of the snapshot.  Constraints:   Can't be null, empty, or blank   Must contain from 1 to 255 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-db-snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The AWS KMS key identifier for an encrypted DB snapshot. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK).  If you copy an encrypted DB snapshot from your AWS account, you can specify a value for this parameter to encrypt the copy with a new AWS KMS CMK. If you don't specify a value for this parameter, then the copy of the DB snapshot is encrypted with the same AWS KMS key as the source DB snapshot.  If you copy an encrypted DB snapshot that is shared from another AWS account, then you must specify a value for this parameter.  If you specify this parameter when you copy an unencrypted snapshot, the copy is encrypted.  If you copy an encrypted snapshot to a different AWS Region, then you must specify a AWS KMS key identifier for the destination AWS Region. AWS KMS CMKs are specific to the AWS Region that they are created in, and you can't use CMKs from one AWS Region in another AWS Region",
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
            "The URL that contains a Signature Version 4 signed request for the CopyDBSnapshot API action in the source AWS Region that contains the source DB snapshot to copy.  You must specify this parameter when you copy an encrypted DB snapshot from another AWS Region by using the Amazon RDS API. Don't specify PreSignedUrl when you are copying an encrypted DB snapshot in the same AWS Region. The presigned URL must be a valid request for the CopyDBSnapshot API action that can be executed in the source AWS Region that contains the encrypted DB snapshot to be copied. The presigned URL request must contain the following parameter values:     DestinationRegion - The AWS Region that the encrypted DB snapshot is copied to. This AWS Region is the same one where the CopyDBSnapshot action is called that contains this presigned URL.  For example, if you copy an encrypted DB snapshot from the us-west-2 AWS Region to the us-east-1 AWS Region, then you call the CopyDBSnapshot action in the us-east-1 AWS Region and provide a presigned URL that contains a call to the CopyDBSnapshot action in the us-west-2 AWS Region. For this example, the DestinationRegion in the presigned URL must be set to the us-east-1 AWS Region.     KmsKeyId - The AWS KMS key identifier for the customer master key (CMK) to use to encrypt the copy of the DB snapshot in the destination AWS Region. This is the same identifier for both the CopyDBSnapshot action that is called in the destination AWS Region, and the action contained in the presigned URL.     SourceDBSnapshotIdentifier - The DB snapshot identifier for the encrypted snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB snapshot from the us-west-2 AWS Region, then your SourceDBSnapshotIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20161115.    To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (AWS Signature Version 4) and Signature Version 4 Signing Process.   If you are using an AWS SDK tool or the AWS CLI, you can specify SourceRegion (or --source-region for the AWS CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The name of an option group to associate with the copy of the snapshot. Specify this option if you are copying a snapshot from one AWS Region to another, and your DB instance uses a nondefault option group. If your source DB instance uses Transparent Data Encryption for Oracle or Microsoft SQL Server, you must specify this option when copying across AWS Regions. For more information, see Option group considerations in the Amazon RDS User Guide",
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
      name: "copy-option-group",
      description: "Copies the specified option group",
      options: [
        {
          name: "--source-option-group-identifier",
          description:
            "The identifier for the source option group.  Constraints:   Must specify a valid option group",
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
      name: "create-custom-availability-zone",
      description:
        "Creates a custom Availability Zone (AZ). A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster. For more information about RDS on VMware, see the  RDS on VMware User Guide",
      options: [
        {
          name: "--custom-availability-zone-name",
          description: "The name of the custom Availability Zone (AZ)",
          args: {
            name: "string",
          },
        },
        {
          name: "--existing-vpn-id",
          description:
            "The ID of an existing virtual private network (VPN) between the Amazon RDS website and the VMware vSphere cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-vpn-tunnel-name",
          description:
            "The name of a new VPN tunnel between the Amazon RDS website and the VMware vSphere cluster. Specify this parameter only if ExistingVpnId isn't specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpn-tunnel-originator-ip",
          description:
            "The IP address of network traffic from your on-premises data center. A custom AZ receives the network traffic. Specify this parameter only if ExistingVpnId isn't specified",
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
      name: "create-db-cluster",
      description:
        "Creates a new Amazon Aurora DB cluster. You can use the ReplicationSourceIdentifier parameter to create the DB cluster as a read replica of another DB cluster or Amazon RDS MySQL DB instance. For cross-region replication where the DB cluster identified by ReplicationSourceIdentifier is encrypted, you must also specify the PreSignedUrl parameter. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--availability-zones",
          description:
            "A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see Choosing the Regions and Availability Zones in the Amazon Aurora User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups are retained. Default: 1 Constraints:   Must be a value from 1 to 35",
          args: {
            name: "integer",
          },
        },
        {
          name: "--character-set-name",
          description:
            "A value that indicates that the DB cluster should be associated with the specified CharacterSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name for your database of up to 64 alphanumeric characters. If you do not provide a name, Amazon RDS doesn't create a database in the DB cluster you are creating",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: my-cluster1",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with this DB cluster. If you do not specify a value, then the default DB cluster parameter group for the specified DB engine and version is used.  Constraints:   If supplied, must match the name of an existing DB cluster parameter group",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with this DB cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "A DB subnet group to associate with this DB cluster. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora), and aurora-postgresql",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            'The version number of the database engine to use. To list all of the available engine versions for aurora (for MySQL 5.6-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for aurora-mysql (for MySQL 5.7-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for aurora-postgresql, use the following command:  aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"   Aurora MySQL  Example: 5.6.10a, 5.6.mysql_aurora.1.19.2, 5.7.12, 5.7.mysql_aurora.2.04.5   Aurora PostgreSQL  Example: 9.6.3, 10.7',
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the instances in the DB cluster accept connections.  Default: 3306 if engine is set as aurora or 5432 if set to aurora-postgresql",
          args: {
            name: "integer",
          },
        },
        {
          name: "--master-username",
          description:
            "The name of the master user for the DB cluster. Constraints:   Must be 1 to 16 letters or numbers.   First character must be a letter.   Can't be a reserved word for the chosen database engine",
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
            "A value that indicates that the DB cluster should be associated with the specified option group. Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To view the time blocks available, see  Backup window in the Amazon Aurora User Guide.  Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see  Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.  Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-source-identifier",
          description:
            "The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags to assign to the DB cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-encrypted",
          description:
            "A value that indicates whether the DB cluster is encrypted",
        },
        {
          name: "--no-storage-encrypted",
          description:
            "A value that indicates whether the DB cluster is encrypted",
        },
        {
          name: "--kms-key-id",
          description:
            "The AWS KMS key identifier for an encrypted DB cluster. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). To use a CMK in a different AWS account, specify the key ARN or alias ARN. When a CMK isn't specified in KmsKeyId:   If ReplicationSourceIdentifier identifies an encrypted source, then Amazon RDS will use the CMK used to encrypt the source. Otherwise, Amazon RDS will use your default CMK.    If the StorageEncrypted parameter is enabled and ReplicationSourceIdentifier isn't specified, then Amazon RDS will use your default CMK.   There is a default CMK for your AWS account. Your AWS account has a different default CMK for each AWS Region. If you create a read replica of an encrypted DB cluster in another AWS Region, you must set KmsKeyId to a AWS KMS key identifier that is valid in the destination AWS Region. This CMK is used to encrypt the read replica in that AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description:
            "A URL that contains a Signature Version 4 signed request for the CreateDBCluster action to be called in the source AWS Region where the DB cluster is replicated from. You only need to specify PreSignedUrl when you are performing cross-region replication from an encrypted DB cluster. The pre-signed URL must be a valid request for the CreateDBCluster API action that can be executed in the source AWS Region that contains the encrypted DB cluster to be copied. The pre-signed URL request must contain the following parameter values:    KmsKeyId - The AWS KMS key identifier for the key to use to encrypt the copy of the DB cluster in the destination AWS Region. This should refer to the same AWS KMS CMK for both the CreateDBCluster action that is called in the destination AWS Region, and the action contained in the pre-signed URL.    DestinationRegion - The name of the AWS Region that Aurora read replica will be created in.    ReplicationSourceIdentifier - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster from the us-west-2 AWS Region, then your ReplicationSourceIdentifier would look like Example: arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1.   To learn how to generate a Signature Version 4 signed request, see  Authenticating Requests: Using Query Parameters (AWS Signature Version 4) and  Signature Version 4 Signing Process.  If you are using an AWS SDK tool or the AWS CLI, you can specify SourceRegion (or --source-region for the AWS CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
        },
        {
          name: "--backtrack-window",
          description:
            "The target backtrack window, in seconds. To disable backtracking, set this value to 0.   Currently, Backtrack is only supported for Aurora MySQL DB clusters.  Default: 0 Constraints:   If specified, this value must be set to a number from 0 to 259,200 (72 hours)",
          args: {
            name: "long",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide.  Aurora MySQL  Possible values are audit, error, general, and slowquery.   Aurora PostgreSQL  Possible value is postgresql",
          args: {
            name: "list",
          },
        },
        {
          name: "--engine-mode",
          description:
            "The DB engine mode of the DB cluster, either provisioned, serverless, parallelquery, global, or multimaster. The parallelquery engine mode isn't required for Aurora MySQL version 1.23 and higher 1.x versions, and version 2.09 and higher 2.x versions. The global engine mode isn't required for Aurora MySQL version 1.22 and higher 1.x versions, and global engine mode isn't required for any 2.x versions. The multimaster engine mode only applies for DB clusters created with Aurora MySQL version 5.6.10a. For Aurora PostgreSQL, the global engine mode isn't required, and both the parallelquery and the multimaster engine modes currently aren't supported. Limitations and requirements apply to some DB engine modes. For more information, see the following sections in the Amazon Aurora User Guide:     Limitations of Aurora Serverless      Limitations of Parallel Query      Limitations of Aurora Global Databases      Limitations of Multi-Master Clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-configuration",
          description:
            "For DB clusters in serverless DB engine mode, the scaling properties of the DB cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
        },
        {
          name: "--global-cluster-identifier",
          description:
            "The global cluster ID of an Aurora cluster that becomes the primary cluster in the new global database cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-http-endpoint",
          description:
            "A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled. When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless DB cluster. You can also query your database from inside the RDS console with the query editor. For more information, see Using the Data API for Aurora Serverless in the Amazon Aurora User Guide",
        },
        {
          name: "--no-enable-http-endpoint",
          description:
            "A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled. When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless DB cluster. You can also query your database from inside the RDS console with the query editor. For more information, see Using the Data API for Aurora Serverless in the Amazon Aurora User Guide",
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them",
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to create the DB cluster in.  For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos Authentication in the Amazon Aurora User Guide",
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
          name: "--enable-global-write-forwarding",
          description:
            "A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an Aurora global database (GlobalCluster). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by the FailoverGlobalCluster API operation, but it does nothing until then",
        },
        {
          name: "--no-enable-global-write-forwarding",
          description:
            "A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an Aurora global database (GlobalCluster). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by the FailoverGlobalCluster API operation, but it does nothing until then",
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
      name: "create-db-cluster-endpoint",
      description:
        "Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.  This action only applies to Aurora DB clusters",
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
          name: "--tags",
          description: "The tags to be assigned to the Amazon RDS resource",
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
      name: "create-db-cluster-parameter-group",
      description:
        "Creates a new DB cluster parameter group. Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.  A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBClusterParameterGroup. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using ModifyDBCluster. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.   After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBClusterParameters action to verify that your DB cluster parameter group has been created or modified.  For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group. Constraints:   Must match the name of an existing DB cluster parameter group.    This value is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-family",
          description:
            "The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.  Aurora MySQL  Example: aurora5.6, aurora-mysql5.7   Aurora PostgreSQL  Example: aurora-postgresql9.6",
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
      name: "create-db-cluster-snapshot",
      description:
        "Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
      name: "create-db-instance",
      description: "Creates a new DB instance",
      options: [
        {
          name: "--db-name",
          description:
            "The meaning of this parameter differs according to the database engine you use.  MySQL  The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints:   Must contain 1 to 64 letters or numbers.   Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).   Can't be a word reserved by the specified database engine    MariaDB  The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints:   Must contain 1 to 64 letters or numbers.   Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).   Can't be a word reserved by the specified database engine    PostgreSQL  The name of the database to create when the DB instance is created. If this parameter isn't specified, a database named postgres is created in the DB instance. Constraints:   Must contain 1 to 63 letters, numbers, or underscores.   Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).   Can't be a word reserved by the specified database engine    Oracle  The Oracle System ID (SID) of the created DB instance. If you specify null, the default value ORCL is used. You can't specify the string NULL, or any other reserved word, for DBName.  Default: ORCL  Constraints:   Can't be longer than 8 characters    SQL Server  Not applicable. Must be null.  Amazon Aurora MySQL  The name of the database to create when the primary DB instance of the Aurora MySQL DB cluster is created. If this parameter isn't specified for an Aurora MySQL DB cluster, no database is created in the DB cluster. Constraints:   It must contain 1 to 64 alphanumeric characters.   It can't be a word reserved by the database engine.    Amazon Aurora PostgreSQL  The name of the database to create when the primary DB instance of the Aurora PostgreSQL DB cluster is created. If this parameter isn't specified for an Aurora PostgreSQL DB cluster, a database named postgres is created in the DB cluster. Constraints:   It must contain 1 to 63 alphanumeric characters.   It must begin with a letter or an underscore. Subsequent characters can be letters, underscores, or digits (0 to 9).   It can't be a word reserved by the database engine",
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
            "The amount of storage (in gibibytes) to allocate for the DB instance. Type: Integer  Amazon Aurora  Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.  MySQL  Constraints to the amount of storage for each storage type are the following:    General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.   Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.   Magnetic storage (standard): Must be an integer from 5 to 3072.    MariaDB  Constraints to the amount of storage for each storage type are the following:    General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.   Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.   Magnetic storage (standard): Must be an integer from 5 to 3072.    PostgreSQL  Constraints to the amount of storage for each storage type are the following:    General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.   Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.   Magnetic storage (standard): Must be an integer from 5 to 3072.    Oracle  Constraints to the amount of storage for each storage type are the following:    General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.   Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.   Magnetic storage (standard): Must be an integer from 10 to 3072.    SQL Server  Constraints to the amount of storage for each storage type are the following:    General Purpose (SSD) storage (gp2):   Enterprise and Standard editions: Must be an integer from 200 to 16384.   Web and Express editions: Must be an integer from 20 to 16384.     Provisioned IOPS storage (io1):   Enterprise and Standard editions: Must be an integer from 200 to 16384.   Web and Express editions: Must be an integer from 100 to 16384.     Magnetic storage (standard):   Enterprise and Standard editions: Must be an integer from 200 to 1024.   Web and Express editions: Must be an integer from 20 to 1024",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this instance.  Not every database engine is available for every AWS Region.  Valid Values:     aurora (for MySQL 5.6-compatible Aurora)    aurora-mysql (for MySQL 5.7-compatible Aurora)    aurora-postgresql     mariadb     mysql     oracle-ee     oracle-se2     oracle-se1     oracle-se     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-username",
          description:
            "The name for the master user.  Amazon Aurora  Not applicable. The name for the master user is managed by the DB cluster.   MariaDB  Constraints:   Required for MariaDB.   Must be 1 to 16 letters or numbers.   Can't be a reserved word for the chosen database engine.    Microsoft SQL Server  Constraints:   Required for SQL Server.   Must be 1 to 128 letters or numbers.   The first character must be a letter.   Can't be a reserved word for the chosen database engine.    MySQL  Constraints:   Required for MySQL.   Must be 1 to 16 letters or numbers.   First character must be a letter.   Can't be a reserved word for the chosen database engine.    Oracle  Constraints:   Required for Oracle.   Must be 1 to 30 letters or numbers.   First character must be a letter.   Can't be a reserved word for the chosen database engine.    PostgreSQL  Constraints:   Required for PostgreSQL.   Must be 1 to 63 letters or numbers.   First character must be a letter.   Can't be a reserved word for the chosen database engine",
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
            "A list of DB security groups to associate with this DB instance. Default: The default DB security group for the database engine",
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
            "The Availability Zone (AZ) where the database will be created. For information on AWS Regions and Availability Zones, see Regions and Availability Zones.  Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.  Example: us-east-1d   Constraint: The AvailabilityZone parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same AWS Region as the current endpoint.   If you're creating a DB instance in an RDS on VMware environment, specify the identifier of the custom Availability Zone to create the DB instance in. For more information about RDS on VMware, see the  RDS on VMware User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "A DB subnet group to associate with this DB instance. If there is no DB subnet group, then it is a non-VPC DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see Amazon RDS Maintenance Window.   Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.  Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If you do not specify a value, then the default DB parameter group for the specified DB engine and version is used. Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.  Amazon Aurora  Not applicable. The retention period for automated backups is managed by the DB cluster. Default: 1 Constraints:   Must be a value from 0 to 35   Can't be set to 0 if the DB instance is a source to read replicas",
          args: {
            name: "integer",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. For more information, see Backup window in the Amazon RDS User Guide.   Amazon Aurora  Not applicable. The daily time range for creating automated backups is managed by the DB cluster. Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the database accepts connections.  MySQL   Default: 3306   Valid values: 1150-65535  Type: Integer  MariaDB   Default: 3306   Valid values: 1150-65535  Type: Integer  PostgreSQL   Default: 5432   Valid values: 1150-65535  Type: Integer  Oracle   Default: 1521   Valid values: 1150-65535   SQL Server   Default: 1433   Valid values: 1150-65535 except 1234, 1434, 3260, 3343, 3389, 47001, and 49152-49156.  Amazon Aurora   Default: 3306   Valid values: 1150-65535  Type: Integer",
          args: {
            name: "integer",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to use. For a list of valid engine versions, use the DescribeDBEngineVersions action. The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.  Amazon Aurora  Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.  MariaDB  See MariaDB on Amazon RDS Versions in the Amazon RDS User Guide.   Microsoft SQL Server  See Microsoft SQL Server Versions on Amazon RDS in the Amazon RDS User Guide.   MySQL  See MySQL on Amazon RDS Versions in the Amazon RDS User Guide.   Oracle  See Oracle Database Engine Release Notes in the Amazon RDS User Guide.   PostgreSQL  See Amazon RDS for PostgreSQL versions and extensions in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically",
        },
        {
          name: "--license-model",
          description:
            "License model information for this DB instance.  Valid values: license-included | bring-your-own-license | general-public-license",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance. For information about valid Iops values, see Amazon RDS Provisioned IOPS Storage to Improve Performance in the Amazon RDS User Guide.  Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL DB instances, must be a multiple between .5 and 50 of the storage amount for the DB instance. For SQL Server DB instances, must be a multiple between 1 and 50 of the storage amount for the DB instance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description:
            "A value that indicates that the DB instance should be associated with the specified option group. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--character-set-name",
          description:
            "For supported engines, indicates that the DB instance should be associated with the specified CharacterSet.  Amazon Aurora  Not applicable. The character set is managed by the DB cluster. For more information, see CreateDBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--nchar-character-set-name",
          description:
            "The name of the NCHAR character set for the Oracle DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target region doesn\u2019t have an Internet gateway attached to it, the DB instance is private.   If the default VPC in the target region has an Internet gateway attached to it, the DB instance is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an Internet gateway attached to it, the DB instance is private.   If the subnets are part of a VPC that has an Internet gateway attached to it, the DB instance is public",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies:   If the default VPC in the target region doesn\u2019t have an Internet gateway attached to it, the DB instance is private.   If the default VPC in the target region has an Internet gateway attached to it, the DB instance is public.   If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies:   If the subnets are part of a VPC that doesn\u2019t have an Internet gateway attached to it, the DB instance is private.   If the subnets are part of a VPC that has an Internet gateway attached to it, the DB instance is public",
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
            "The identifier of the DB cluster that the instance will belong to",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB instance.  Valid values: standard | gp2 | io1   If you specify io1, you must also include a value for the Iops parameter.   Default: io1 if the Iops parameter is specified, otherwise gp2",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-arn",
          description:
            "The ARN from the key store with which to associate the instance for TDE encryption",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-password",
          description:
            "The password for the given ARN from the key store in order to access the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-encrypted",
          description:
            "A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.  Amazon Aurora  Not applicable. The encryption for DB instances is managed by the DB cluster",
        },
        {
          name: "--no-storage-encrypted",
          description:
            "A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.  Amazon Aurora  Not applicable. The encryption for DB instances is managed by the DB cluster",
        },
        {
          name: "--kms-key-id",
          description:
            "The AWS KMS key identifier for an encrypted DB instance. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). To use a CMK in a different AWS account, specify the key ARN or alias ARN.  Amazon Aurora  Not applicable. The AWS KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster. If StorageEncrypted is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS uses your default CMK. There is a default CMK for your AWS account. Your AWS account has a different default CMK for each AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide",
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
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60",
          args: {
            name: "integer",
          },
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, go to Setting Up and Enabling Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value",
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
          name: "--promotion-tier",
          description:
            "A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see  Fault Tolerance for an Aurora DB Cluster in the Amazon Aurora User Guide.  Default: 1 Valid Values: 0 - 15",
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
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. This setting doesn't apply to Amazon Aurora. Mapping AWS IAM accounts to database accounts is managed by the DB cluster. For more information, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. This setting doesn't apply to Amazon Aurora. Mapping AWS IAM accounts to database accounts is managed by the DB cluster. For more information, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance.  For more information, see Using Amazon Performance Insights in the Amazon Relational Database Service User Guide",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance.  For more information, see Using Amazon Performance Insights in the Amazon Relational Database Service User Guide",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The AWS KMS key identifier for encryption of Performance Insights data. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default CMK. There is a default CMK for your AWS account. Your AWS account has a different default CMK for each AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs  in the Amazon Relational Database Service User Guide.  Amazon Aurora  Not applicable. CloudWatch Logs exports are managed by the DB cluster.   MariaDB  Possible values are audit, error, general, and slowquery.   Microsoft SQL Server  Possible values are agent and error.   MySQL  Possible values are audit, error, general, and slowquery.   Oracle  Possible values are alert, audit, listener, trace, and oemagent.   PostgreSQL  Possible values are postgresql and upgrade",
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
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance.   Amazon Aurora  Not applicable. You can enable or disable deletion protection for the DB cluster. For more information, see CreateDBCluster. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance.   Amazon Aurora  Not applicable. You can enable or disable deletion protection for the DB cluster. For more information, see CreateDBCluster. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster",
        },
        {
          name: "--max-allocated-storage",
          description:
            "The upper limit to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on AWS Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the AWS Outposts User Guide",
        },
        {
          name: "--no-enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on AWS Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the AWS Outposts User Guide",
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
      name: "create-db-instance-read-replica",
      description:
        "Creates a new DB instance that acts as a read replica for an existing source DB instance. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. For more information, see Working with Read Replicas in the Amazon RDS User Guide.  Amazon Aurora doesn't support this action. Call the CreateDBInstance action to create a DB instance for an Aurora DB cluster. All read replica DB instances are created with backups disabled. All other DB instance attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance, except as specified.  Your source DB instance must have backup retention enabled",
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
            "The identifier of the DB instance that will act as the source for the read replica. Each DB instance can have up to five read replicas. Constraints:   Must be the identifier of an existing MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server DB instance.   Can specify a DB instance that is a MySQL read replica only if the source is running MySQL 5.6 or later.   For the limitations of Oracle read replicas, see Read Replica Limitations with Oracle in the Amazon RDS User Guide.   For the limitations of SQL Server read replicas, see Read Replica Limitations with Microsoft SQL Server in the Amazon RDS User Guide.   Can specify a PostgreSQL DB instance only if the source is running PostgreSQL 9.3.5 or later (9.4.7 and higher for cross-region replication).   The specified DB instance must have automatic backups enabled, that is, its backup retention period must be greater than 0.   If the source DB instance is in the same AWS Region as the read replica, specify a valid DB instance identifier.   If the source DB instance is in a different AWS Region from the read replica, specify a valid DB instance ARN. For more information, see Constructing an ARN for Amazon RDS in the Amazon RDS User Guide. This doesn't apply to SQL Server, which doesn't support cross-region replicas",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the read replica, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide.  Default: Inherits from the source DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The Availability Zone (AZ) where the read replica will be created. Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.  Example: us-east-1d",
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
            "A value that indicates whether the read replica is in a Multi-AZ deployment.  You can create a read replica as a Multi-AZ DB instance. RDS creates a standby of your replica in another Availability Zone for failover support for the replica. Creating your read replica as a Multi-AZ DB instance is independent of whether the source database is a Multi-AZ DB instance",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the read replica is in a Multi-AZ deployment.  You can create a read replica as a Multi-AZ DB instance. RDS creates a standby of your replica in another Availability Zone for failover support for the replica. Creating your read replica as a Multi-AZ DB instance is independent of whether the source database is a Multi-AZ DB instance",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the read replica during the maintenance window. Default: Inherits from the source DB instance",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the read replica during the maintenance window. Default: Inherits from the source DB instance",
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
            "The option group the DB instance is associated with. If omitted, the option group associated with the source instance is used.  For SQL Server, you must use the option group associated with the source instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If you do not specify a value for DBParameterGroupName, then Amazon RDS uses the DBParameterGroup of source DB instance for a same region read replica, or the default DBParameterGroup for the specified DB engine for a cross region read replica.  Currently, specifying a parameter group for this operation is only supported for Oracle DB instances.  Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
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
            "Specifies a DB subnet group for the DB instance. The new DB instance is created in the VPC associated with the DB subnet group. If no DB subnet group is specified, then the new DB instance isn't created in a VPC. Constraints:   Can only be specified if the source DB instance identifier specifies a DB instance in another AWS Region.   If supplied, must match the name of an existing DBSubnetGroup.   The specified DB subnet group must be in the same AWS Region in which the operation is running.   All read replicas in one AWS Region that are created from the same source DB instance must either:&gt;   Specify DB subnet groups from the same VPC. All these read replicas are created in the same VPC.   Not specify a DB subnet group. All these read replicas are created outside of any VPC.     Example: mySubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with the read replica.   Default: The default EC2 VPC security group for the DB subnet group's VPC",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the read replica.  Valid values: standard | gp2 | io1   If you specify io1, you must also include a value for the Iops parameter.   Default: io1 if the Iops parameter is specified, otherwise gp2",
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
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the read replica. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60",
          args: {
            name: "integer",
          },
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, go to To create an IAM role for Amazon RDS Enhanced Monitoring in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The AWS KMS key identifier for an encrypted read replica. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS CMK. If you create an encrypted read replica in the same AWS Region as the source DB instance, then do not specify a value for this parameter. A read replica in the same Region is always encrypted with the same AWS KMS CMK as the source DB instance. If you create an encrypted read replica in a different AWS Region, then you must specify a AWS KMS key identifier for the destination AWS Region. AWS KMS CMKs are specific to the AWS Region that they are created in, and you can't use CMKs from one AWS Region in another AWS Region. You can't create an encrypted read replica from an unencrypted DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description:
            "The URL that contains a Signature Version 4 signed request for the CreateDBInstanceReadReplica API action in the source AWS Region that contains the source DB instance.  You must specify this parameter when you create an encrypted read replica from another AWS Region by using the Amazon RDS API. Don't specify PreSignedUrl when you are creating an encrypted read replica in the same AWS Region. The presigned URL must be a valid request for the CreateDBInstanceReadReplica API action that can be executed in the source AWS Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values:     DestinationRegion - The AWS Region that the encrypted read replica is created in. This AWS Region is the same one where the CreateDBInstanceReadReplica action is called that contains this presigned URL. For example, if you create an encrypted DB instance in the us-west-1 AWS Region, from a source DB instance in the us-east-2 AWS Region, then you call the CreateDBInstanceReadReplica action in the us-east-1 AWS Region and provide a presigned URL that contains a call to the CreateDBInstanceReadReplica action in the us-west-2 AWS Region. For this example, the DestinationRegion in the presigned URL must be set to the us-east-1 AWS Region.     KmsKeyId - The AWS KMS key identifier for the key to use to encrypt the read replica in the destination AWS Region. This is the same identifier for both the CreateDBInstanceReadReplica action that is called in the destination AWS Region, and the action contained in the presigned URL.     SourceDBInstanceIdentifier - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are creating an encrypted read replica from a DB instance in the us-west-2 AWS Region, then your SourceDBInstanceIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115.    To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (AWS Signature Version 4) and Signature Version 4 Signing Process.   If you are using an AWS SDK tool or the AWS CLI, you can specify SourceRegion (or --source-region for the AWS CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can be executed in the source AWS Region.  SourceRegion isn't supported for SQL Server, because SQL Server on Amazon RDS doesn't support cross-region read replicas",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the read replica.  For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the read replica.  For more information, see Using Amazon Performance Insights in the Amazon RDS User Guide",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The AWS KMS key identifier for encryption of Performance Insights data. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default CMK. There is a default CMK for your AWS account. Your AWS account has a different default CMK for each AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the new DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs  in the Amazon RDS User Guide",
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
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide",
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
          name: "--replica-mode",
          description:
            "The open mode of the replica database: mounted or read-only.  This parameter is only supported for Oracle DB instances.  Mounted DB replicas are included in Oracle Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload. You can create a combination of mounted and read-only DB replicas for the same primary DB instance. For more information, see Working with Oracle Read Replicas for Amazon RDS in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-allocated-storage",
          description:
            "The upper limit to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide",
          args: {
            name: "integer",
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
      name: "create-db-parameter-group",
      description:
        "Creates a new DB parameter group.  A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBParameterGroup. Once you've created a DB parameter group, you need to associate it with your DB instance using ModifyDBInstance. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.   After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified",
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
            'The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family. To list all of the available parameter group families, use the following command:  aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily"   The output contains duplicates',
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
      name: "create-db-proxy",
      description: "Creates a new DB proxy",
      options: [
        {
          name: "--db-proxy-name",
          description:
            "The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-family",
          description:
            "The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. The engine family applies to MySQL and PostgreSQL for both RDS and Aurora",
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
            "The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager",
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
      name: "create-db-security-group",
      description:
        "Creates a new DB security group. DB security groups control access to a DB instance.  A DB security group controls access to EC2-Classic DB instances that are not in a VPC",
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
      name: "create-db-subnet-group",
      description:
        "Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region",
      options: [
        {
          name: "--db-subnet-group-name",
          description:
            "The name for the DB subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default. Example: mySubnetgroup",
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
      name: "create-event-subscription",
      description:
        "Creates an RDS event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console. You can specify the type of source (SourceType) that you want to be notified of and provide a list of RDS sources (SourceIds) that triggers the events. You can also provide a list of event categories (EventCategories) for events that you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup. If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the SourceIdentifier, you are notified of events generated from all RDS sources belonging to your customer account.  RDS event notification is only available for unencrypted SNS topics. If you specify an encrypted SNS topic, event notifications aren't sent for the topic",
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
            "The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you set this parameter to db-instance. If this value isn't specified, all events are returned. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for a particular source type (SourceType) that you want to subscribe to. You can see a list of the categories for a given source type in Events in the Amazon RDS User Guide or by using the DescribeEventCategories operation",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-ids",
          description:
            "The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It can't end with a hyphen or contain two consecutive hyphens. Constraints:   If SourceIds are supplied, SourceType must also be provided.   If the source type is a DB instance, a DBInstanceIdentifier value must be supplied.   If the source type is a DB cluster, a DBClusterIdentifier value must be supplied.   If the source type is a DB parameter group, a DBParameterGroupName value must be supplied.   If the source type is a DB security group, a DBSecurityGroupName value must be supplied.   If the source type is a DB snapshot, a DBSnapshotIdentifier value must be supplied.   If the source type is a DB cluster snapshot, a DBClusterSnapshotIdentifier value must be supplied",
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
      name: "create-global-cluster",
      description:
        "Creates an Aurora global database spread across multiple AWS Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.   You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.   This action only applies to Aurora DB clusters",
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
            "The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Aurora will not create a database in the global database cluster you are creating",
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
      name: "create-option-group",
      description:
        "Creates a new option group. You can create up to 20 option groups",
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
            "Specifies the name of the engine that this option group should be associated with. Valid Values:     mariadb     mysql     oracle-ee     oracle-se2     oracle-se1     oracle-se     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
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
      name: "delete-custom-availability-zone",
      description:
        "Deletes a custom Availability Zone (AZ). A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster. For more information about RDS on VMware, see the  RDS on VMware User Guide",
      options: [
        {
          name: "--custom-availability-zone-id",
          description: "The custom AZ identifier",
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
      name: "delete-db-cluster",
      description:
        "The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.  For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
            "The DB cluster snapshot identifier of the new DB cluster snapshot created when SkipFinalSnapshot is disabled.    Specifying this parameter and also skipping the creation of a final DB cluster snapshot with the SkipFinalShapshot parameter results in an error.  Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens",
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
      name: "delete-db-cluster-parameter-group",
      description:
        "Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
      name: "delete-db-cluster-snapshot",
      description:
        "Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.  The DB cluster snapshot must be in the available state to be deleted.  For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
      name: "delete-db-instance",
      description:
        "The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by DeleteDBInstance are not deleted.  If you request a final DB snapshot the status of the Amazon RDS DB instance is deleting until the DB snapshot is created. The API action DescribeDBInstance is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.  When a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, you can only delete it when you skip creation of the final snapshot with the SkipFinalSnapshot parameter. If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:   The DB cluster is a read replica of another Amazon Aurora DB cluster.   The DB instance is the only instance in the DB cluster.   To delete a DB instance in this case, first call the PromoteReadReplicaDBCluster API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the DeleteDBInstance API action to delete the final instance in the DB cluster",
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
            "A value that indicates whether to skip the creation of a final DB snapshot before the DB instance is deleted. If skip is specified, no DB snapshot is created. If skip isn't specified, a DB snapshot is created before the DB instance is deleted. By default, skip isn't specified, and the DB snapshot is created. When a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when skip is specified. Specify skip when deleting a read replica.  The FinalDBSnapshotIdentifier parameter must be specified if skip isn't specified",
        },
        {
          name: "--no-skip-final-snapshot",
          description:
            "A value that indicates whether to skip the creation of a final DB snapshot before the DB instance is deleted. If skip is specified, no DB snapshot is created. If skip isn't specified, a DB snapshot is created before the DB instance is deleted. By default, skip isn't specified, and the DB snapshot is created. When a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when skip is specified. Specify skip when deleting a read replica.  The FinalDBSnapshotIdentifier parameter must be specified if skip isn't specified",
        },
        {
          name: "--final-db-snapshot-identifier",
          description:
            "The DBSnapshotIdentifier of the new DBSnapshot created when the SkipFinalSnapshot parameter is disabled.   Specifying this parameter and also specifying to skip final DB snapshot creation in SkipFinalShapshot results in an error.  Constraints:   Must be 1 to 255 letters or numbers.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Can't be specified when deleting a read replica",
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
      name: "delete-db-instance-automated-backup",
      description:
        "Deletes automated backups using the DbiResourceId value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups",
      options: [
        {
          name: "--dbi-resource-id",
          description:
            "The identifier for the source DB instance, which can't be changed and which is unique to an AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-automated-backups-arn",
          description:
            "The Amazon Resource Name (ARN) of the automated backups to delete, for example, arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE",
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
      name: "delete-db-security-group",
      description:
        "Deletes a DB security group.  The specified DB security group must not be associated with any DB instances",
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
      name: "delete-db-subnet-group",
      description:
        "Deletes a DB subnet group.  The specified database subnet group must not be associated with any DB instances",
      options: [
        {
          name: "--db-subnet-group-name",
          description:
            "The name of the database subnet group to delete.  You can't delete the default subnet group.  Constraints: Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup",
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
      name: "delete-global-cluster",
      description:
        "Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.   This action only applies to Aurora DB clusters",
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
      name: "delete-installation-media",
      description:
        "Deletes the installation medium for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server",
      options: [
        {
          name: "--installation-media-id",
          description: "The installation medium ID",
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
      name: "describe-account-attributes",
      description:
        "Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value. This command doesn't take any parameters",
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
      name: "describe-certificates",
      description:
        "Lists the set of CA certificates provided by Amazon RDS for this AWS account",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-custom-availability-zones",
      description:
        "Returns information about custom Availability Zones (AZs). A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster. For more information about RDS on VMware, see the  RDS on VMware User Guide",
      options: [
        {
          name: "--custom-availability-zone-id",
          description:
            "The custom AZ identifier. If this parameter is specified, information from only the specific custom AZ is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more custom AZs to describe",
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
            "An optional pagination token provided by a previous DescribeCustomAvailabilityZones request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-db-cluster-backtracks",
      description:
        "Returns information about backtracks for a DB cluster. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora MySQL DB clusters",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-db-cluster-parameter-groups",
      description:
        "Returns a list of DBClusterParameterGroup descriptions. If a DBClusterParameterGroupName parameter is specified, the list will contain only the description of the specified DB cluster parameter group.  For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-db-cluster-parameters",
      description:
        "Returns the detailed parameter list for a particular DB cluster parameter group. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-db-cluster-snapshot-attributes",
      description:
        "Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot. When sharing snapshots with other AWS accounts, DescribeDBClusterSnapshotAttributes returns the restore attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If all is included in the list of values for the restore attribute, then the manual DB cluster snapshot is public and can be copied or restored by all AWS accounts. To add or remove access for an AWS account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the ModifyDBClusterSnapshotAttribute API action.  This action only applies to Aurora DB clusters",
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
      name: "describe-db-cluster-snapshots",
      description:
        "Returns information about DB cluster snapshots. This API action supports pagination. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the DBClusterSnapshotIdentifier parameter. This parameter isn't case-sensitive.  Constraints:   If supplied, must match the identifier of an existing DBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-snapshot-identifier",
          description:
            "A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the DBClusterIdentifier parameter. This value is stored as a lowercase string.  Constraints:   If supplied, must match the identifier of an existing DBClusterSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-type",
          description:
            "The type of DB cluster snapshots to be returned. You can specify one of the following values:    automated - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my AWS account.    manual - Return all DB cluster snapshots that have been taken by my AWS account.    shared - Return all manual DB cluster snapshots that have been shared to my AWS account.    public - Return all DB cluster snapshots that have been marked as public.   If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by enabling the IncludeShared parameter. You can include public DB cluster snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB cluster snapshot from another AWS account by the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--no-include-shared",
          description:
            "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB cluster snapshot from another AWS account by the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--include-public",
          description:
            "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--no-include-public",
          description:
            "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
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
      name: "describe-db-clusters",
      description:
        "Returns information about provisioned Aurora DB clusters. This API supports pagination. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances",
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
            "A filter that specifies one or more DB clusters to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "Optional Boolean parameter that specifies whether the output includes information about clusters shared from other AWS accounts",
        },
        {
          name: "--no-include-shared",
          description:
            "Optional Boolean parameter that specifies whether the output includes information about clusters shared from other AWS accounts",
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
      name: "describe-db-engine-versions",
      description: "Returns a list of the available DB engines",
      options: [
        {
          name: "--engine",
          description:
            "The database engine to return. Valid Values:     aurora (for MySQL 5.6-compatible Aurora)    aurora-mysql (for MySQL 5.7-compatible Aurora)    aurora-postgresql     mariadb     mysql     oracle-ee     oracle-se2     oracle-se1     oracle-se     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
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
          description: "This parameter isn't currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "A value that indicates whether to list the supported character sets for each engine version. If this parameter is enabled and the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version",
        },
        {
          name: "--no-list-supported-character-sets",
          description:
            "A value that indicates whether to list the supported character sets for each engine version. If this parameter is enabled and the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version",
        },
        {
          name: "--list-supported-timezones",
          description:
            "A value that indicates whether to list the supported time zones for each engine version. If this parameter is enabled and the requested engine supports the TimeZone parameter for CreateDBInstance, the response includes a list of supported time zones for each engine version",
        },
        {
          name: "--no-list-supported-timezones",
          description:
            "A value that indicates whether to list the supported time zones for each engine version. If this parameter is enabled and the requested engine supports the TimeZone parameter for CreateDBInstance, the response includes a list of supported time zones for each engine version",
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
            "The Amazon Resource Name (ARN) of the replicated automated backups, for example, arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE",
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
            "A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list will only include information about the DB instances identified by these ARNs.    dbi-resource-id - Accepts DB instance resource identifiers. The results list will only include information about the DB instances identified by these DB instance resource identifiers.    domain - Accepts Active Directory directory IDs. The results list will only include information about the DB instances associated with these domains.    engine - Accepts engine names. The results list will only include information about the DB instances for these engines",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-db-log-files",
      description: "Returns a list of DB log files for the DB instance",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-db-proxies",
      description: "Returns information about DB proxies",
      options: [
        {
          name: "--db-proxy-name",
          description:
            "The name of the DB proxy. If you omit this parameter, the output includes information about all DB proxies owned by your AWS account ID",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-db-security-groups",
      description:
        "Returns a list of DBSecurityGroup descriptions. If a DBSecurityGroupName is specified, the list will contain only the descriptions of the specified DB security group",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-db-snapshot-attributes",
      description:
        "Returns a list of DB snapshot attribute names and values for a manual DB snapshot. When sharing snapshots with other AWS accounts, DescribeDBSnapshotAttributes returns the restore attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB snapshot. If all is included in the list of values for the restore attribute, then the manual DB snapshot is public and can be copied or restored by all AWS accounts. To add or remove access for an AWS account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the ModifyDBSnapshotAttribute API action",
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
      name: "describe-db-snapshots",
      description:
        "Returns information about DB snapshots. This API action supports pagination",
      options: [
        {
          name: "--db-instance-identifier",
          description:
            "The ID of the DB instance to retrieve the list of DB snapshots for. This parameter can't be used in conjunction with DBSnapshotIdentifier. This parameter isn't case-sensitive.  Constraints:   If supplied, must match the identifier of an existing DBInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-snapshot-identifier",
          description:
            "A specific DB snapshot identifier to describe. This parameter can't be used in conjunction with DBInstanceIdentifier. This value is stored as a lowercase string.  Constraints:   If supplied, must match the identifier of an existing DBSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-type",
          description:
            "The type of snapshots to be returned. You can specify one of the following values:    automated - Return all DB snapshots that have been automatically taken by Amazon RDS for my AWS account.    manual - Return all DB snapshots that have been taken by my AWS account.    shared - Return all manual DB snapshots that have been shared to my AWS account.    public - Return all DB snapshots that have been marked as public.    awsbackup - Return the DB snapshots managed by the AWS Backup service. For information about AWS Backup, see the  AWS Backup Developer Guide.   The awsbackup type does not apply to Aurora.   If you don't specify a SnapshotType value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the IncludeShared parameter. You can include public snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the ModifyDBSnapshotAttribute API action",
        },
        {
          name: "--no-include-shared",
          description:
            "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the ModifyDBSnapshotAttribute API action",
        },
        {
          name: "--include-public",
          description:
            "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API",
        },
        {
          name: "--no-include-public",
          description:
            "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-engine-default-cluster-parameters",
      description:
        "Returns the default engine and system parameter information for the cluster database engine. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-engine-default-parameters",
      description:
        "Returns the default engine and system parameter information for the specified database engine",
      options: [
        {
          name: "--db-parameter-group-family",
          description: "The name of the DB parameter group family",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-event-categories",
      description:
        "Displays a list of categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in  Events in the Amazon RDS User Guide",
      options: [
        {
          name: "--source-type",
          description:
            "The type of source that is generating the events. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords ",
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
      name: "describe-events",
      description:
        "Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, and DB cluster snapshots for the past 14 days. Events specific to a particular DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, and DB cluster snapshots group can be obtained by providing the name as a parameter.  By default, the past hour of events are returned",
      options: [
        {
          name: "--source-identifier",
          description:
            "The identifier of the event source for which events are returned. If not specified, then all sources are included in the response. Constraints:   If SourceIdentifier is supplied, SourceType must also be provided.   If the source type is a DB instance, a DBInstanceIdentifier value must be supplied.   If the source type is a DB cluster, a DBClusterIdentifier value must be supplied.   If the source type is a DB parameter group, a DBParameterGroupName value must be supplied.   If the source type is a DB security group, a DBSecurityGroupName value must be supplied.   If the source type is a DB snapshot, a DBSnapshotIdentifier value must be supplied.   If the source type is a DB cluster snapshot, a DBClusterSnapshotIdentifier value must be supplied.   Can't end with a hyphen or contain two consecutive hyphens",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "Filters specify one or more snapshot exports to describe. The filters are specified as name-value pairs that define what to include in the output. Filter names and values are case-sensitive. Supported filters include the following:     export-task-identifier - An identifier for the snapshot export task.    s3-bucket - The Amazon S3 bucket the snapshot is exported to.    source-arn - The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3    status - The status of the export task. Must be lowercase, for example, complete",
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
            "The maximum number of records to include in the response. If more records exist than the specified value, a pagination token called a marker is included in the response. You can use the marker in a later DescribeExportTasks request to retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-global-clusters",
      description:
        "Returns information about Aurora global database clusters. This API supports pagination.   For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.  Constraints:   If supplied, must match an existing DBClusterIdentifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more global DB clusters to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-installation-media",
      description:
        "Describes the available installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server",
      options: [
        {
          name: "--installation-media-id",
          description: "The installation medium ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A filter that specifies one or more installation media to describe. Supported filters include the following:    custom-availability-zone-id - Accepts custom Availability Zone (AZ) identifiers. The results list includes information about only the custom AZs identified by these identifiers.    engine - Accepts database engines. The results list includes information about only the database engines identified by these identifiers. For more information about the valid engines for installation media, see ImportInstallationMedia",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "An optional pagination token provided by a previous DescribeInstallationMedia request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-option-group-options",
      description: "Describes all available options",
      options: [
        {
          name: "--engine-name",
          description:
            "A required parameter. Options available for the given engine name are described. Valid Values:     mariadb     mysql     oracle-ee     oracle-se2     oracle-se1     oracle-se     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--engine-name",
          description:
            "Filters the list of option groups to only include groups associated with a specific database engine. Valid Values:     mariadb     mysql     oracle-ee     oracle-se2     oracle-se1     oracle-se     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
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
      name: "describe-orderable-db-instance-options",
      description:
        "Returns a list of orderable DB instance options for the specified engine",
      options: [
        {
          name: "--engine",
          description:
            "The name of the engine to retrieve DB instance options for. Valid Values:     aurora (for MySQL 5.6-compatible Aurora)    aurora-mysql (for MySQL 5.7-compatible Aurora)    aurora-postgresql     mariadb     mysql     oracle-ee     oracle-se2     oracle-se1     oracle-se     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
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
            "The license model filter value. Specify this parameter to show only the available offerings matching the specified license model",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-group",
          description:
            "The Availability Zone group associated with a Local Zone. Specify this parameter to retrieve available offerings for the Local Zones in the group. Omit this parameter to show the available offerings in the specified AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc",
          description:
            "A value that indicates whether to show only VPC or non-VPC offerings",
        },
        {
          name: "--no-vpc",
          description:
            "A value that indicates whether to show only VPC or non-VPC offerings",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords ",
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
            "A filter that specifies one or more resources to return pending maintenance actions for. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance actions for the DB clusters identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance ARNs. The results list will only include pending maintenance actions for the DB instances identified by these ARNs",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "The lease identifier filter value. Specify this parameter to show only the reservation that matches the specified lease ID.  AWS Support might request the lease ID for an issue related to a reserved DB instance",
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
            "The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
            "The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-source-regions",
      description:
        "Returns a list of the source AWS Regions where the current AWS Region can create a read replica, copy a DB snapshot from, or replicate automated backups from. This API action supports pagination",
      options: [
        {
          name: "--region-name",
          description:
            "The source AWS Region name. For example, us-east-1. Constraints:   Must specify a valid AWS Region name",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-valid-db-instance-modifications",
      description:
        "You can call DescribeValidDBInstanceModifications to learn what modifications you can make to your DB instance. You can use this information when you call ModifyDBInstance",
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
      name: "download-db-log-file-portion",
      description:
        "Downloads all or a portion of the specified log file, up to 1 MB in size",
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
      name: "failover-db-cluster",
      description:
        "Forces a failover for a DB cluster. A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer). Amazon Aurora will automatically fail over to an Aurora Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
            "The name of the instance to promote to the primary instance. You must specify the instance identifier for an Aurora Replica in the DB cluster. For example, mydbcluster-replica1",
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
      name: "failover-global-cluster",
      description:
        "Initiates the failover process for an Aurora global database (GlobalCluster). A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database. For more information about failing over an Amazon Aurora global database, see Managed planned failover for Amazon Aurora global databases in the Amazon Aurora User Guide.   This action applies to GlobalCluster (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "Identifier of the Aurora global database (GlobalCluster) that should be failed over. The identifier is the unique key assigned by the user when the Aurora global database was created. In other words, it's the name of the Aurora global database that you want to fail over.  Constraints:   Must match the identifier of an existing GlobalCluster (Aurora global database)",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-cluster-identifier",
          description:
            "Identifier of the secondary Aurora DB cluster that you want to promote to primary for the Aurora global database (GlobalCluster.) Use the Amazon Resource Name (ARN) for the identifier so that Aurora can locate the cluster in its AWS Region",
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
      name: "import-installation-media",
      description:
        "Imports the installation media for a DB engine that requires an on-premises customer provided license, such as SQL Server",
      options: [
        {
          name: "--custom-availability-zone-id",
          description:
            "The identifier of the custom Availability Zone (AZ) to import the installation media to",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this instance.  The list only includes supported DB engines that require an on-premises customer provided license.  Valid Values:     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to use. For a list of valid engine versions, call DescribeDBEngineVersions. The following are the database engines and links to information about the major and minor versions. The list only includes DB engines that require an on-premises customer provided license.  Microsoft SQL Server  See  Microsoft SQL Server Versions on Amazon RDS in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-installation-media-path",
          description:
            "The path to the installation medium for the specified DB engine. Example: SQLServerISO/en_sql_server_2016_enterprise_x64_dvd_8701793.iso",
          args: {
            name: "string",
          },
        },
        {
          name: "--os-installation-media-path",
          description:
            "The path to the installation medium for the operating system associated with the specified DB engine. Example: WindowsISO/en_windows_server_2016_x64_dvd_9327751.iso",
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
      name: "modify-certificates",
      description:
        "Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances temporarily, or remove the override. By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS. You might need to override the default certificate in the following situations:   You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified AWS Region.   RDS has already moved to a new default CA certificate for the specified AWS Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.   For more information about rotating your SSL/TLS certificate for RDS DB engines, see  Rotating Your SSL/TLS Certificate in the Amazon RDS User Guide. For more information about rotating your SSL/TLS certificate for Aurora DB engines, see  Rotating Your SSL/TLS Certificate in the Amazon Aurora User Guide",
      options: [
        {
          name: "--certificate-identifier",
          description:
            "The new default certificate identifier to override the current one with. To determine the valid values, use the describe-certificates AWS CLI command or the DescribeCertificates API operation",
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
      name: "modify-current-db-cluster-capacity",
      description:
        "Set the capacity of an Aurora Serverless DB cluster to a specific value. Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call ModifyCurrentDBClusterCapacity to set the capacity explicitly. After this call sets the DB cluster capacity, Aurora Serverless can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down. For more information about Aurora Serverless, see Using Amazon Aurora Serverless in the Amazon Aurora User Guide.  If you call ModifyCurrentDBClusterCapacity with the default TimeoutAction, connections that prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points, see  Autoscaling for Aurora Serverless in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
            "The DB cluster capacity. When you change the capacity of a paused Aurora Serverless DB cluster, it automatically resumes. Constraints:   For Aurora MySQL, valid capacity values are 1, 2, 4, 8, 16, 32, 64, 128, and 256.   For Aurora PostgreSQL, valid capacity values are 2, 4, 8, 16, 32, 64, 192, and 384",
          args: {
            name: "integer",
          },
        },
        {
          name: "--seconds-before-timeout",
          description:
            "The amount of time, in seconds, that Aurora Serverless tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300.   Value must be from 10 through 600",
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
      name: "modify-db-cluster",
      description:
        "Modify a setting for an Amazon Aurora DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive. Constraints: This identifier must match the identifier of an existing DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-db-cluster-identifier",
          description:
            "The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   The first character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-cluster2",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB cluster. If this parameter is disabled, changes to the DB cluster are applied during the next maintenance window. The ApplyImmediately parameter only affects the EnableIAMDatabaseAuthentication, MasterUserPassword, and NewDBClusterIdentifier values. If the ApplyImmediately parameter is disabled, then changes to the EnableIAMDatabaseAuthentication, MasterUserPassword, and NewDBClusterIdentifier values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the ApplyImmediately parameter. By default, this parameter is disabled",
        },
        {
          name: "--no-apply-immediately",
          description:
            "A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB cluster. If this parameter is disabled, changes to the DB cluster are applied during the next maintenance window. The ApplyImmediately parameter only affects the EnableIAMDatabaseAuthentication, MasterUserPassword, and NewDBClusterIdentifier values. If the ApplyImmediately parameter is disabled, then changes to the EnableIAMDatabaseAuthentication, MasterUserPassword, and NewDBClusterIdentifier values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the ApplyImmediately parameter. By default, this parameter is disabled",
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints:   Must be a value from 1 to 35",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to use for the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of VPC security groups that the DB cluster will belong to",
          args: {
            name: "list",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the DB cluster accepts connections. Constraints: Value must be 1150-65535  Default: The same port as the original DB cluster",
          args: {
            name: "integer",
          },
        },
        {
          name: "--master-user-password",
          description:
            'The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@". Constraints: Must contain from 8 to 41 characters',
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "A value that indicates that the DB cluster should be associated with the specified option group. Changing this parameter doesn't result in an outage except in the following case, and the change is applied during the next maintenance window unless the ApplyImmediately is enabled for this request. If the parameter change results in an option group that enables OEM, this change can cause a brief (sub-second) period during which new connections are rejected but existing connections are not interrupted.  Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter.  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To view the time blocks available, see  Backup window in the Amazon Aurora User Guide.  Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see  Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.  Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
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
          name: "--cloudwatch-logs-export-configuration",
          description:
            "The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--engine-version",
          description:
            'The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless ApplyImmediately is enabled. To list all of the available engine versions for aurora (for MySQL 5.6-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for aurora-mysql (for MySQL 5.7-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for aurora-postgresql, use the following command:  aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"',
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades when specifying a value for the EngineVersion parameter that is a different major version than the DB cluster's current version",
        },
        {
          name: "--db-instance-parameter-group-name",
          description:
            "The name of the DB parameter group to apply to all instances of the DB cluster.   When you apply a parameter group using the DBInstanceParameterGroupName parameter, the DB cluster isn't rebooted automatically. Also, parameter changes aren't applied during the next maintenance window but instead are applied immediately.  Default: The existing name setting Constraints:   The DB parameter group must be in the same DB parameter group family as this DB cluster.   The DBInstanceParameterGroupName parameter is only valid in combination with the AllowMajorVersionUpgrade parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to move the DB cluster to. Specify none to remove the cluster from its current domain. The domain must be created prior to this operation.  For more information, see Kerberos Authentication in the Amazon Aurora User Guide",
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
          name: "--scaling-configuration",
          description:
            "The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in serverless DB engine mode",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
        },
        {
          name: "--enable-http-endpoint",
          description:
            "A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled. When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless DB cluster. You can also query your database from inside the RDS console with the query editor. For more information, see Using the Data API for Aurora Serverless in the Amazon Aurora User Guide",
        },
        {
          name: "--no-enable-http-endpoint",
          description:
            "A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled. When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless DB cluster. You can also query your database from inside the RDS console with the query editor. For more information, see Using the Data API for Aurora Serverless in the Amazon Aurora User Guide",
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them",
        },
        {
          name: "--enable-global-write-forwarding",
          description:
            "A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an Aurora global database (GlobalCluster). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by the FailoverGlobalCluster API operation, but it does nothing until then",
        },
        {
          name: "--no-enable-global-write-forwarding",
          description:
            "A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an Aurora global database (GlobalCluster). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by the FailoverGlobalCluster API operation, but it does nothing until then",
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
      name: "modify-db-cluster-parameter-group",
      description:
        "Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request.  For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.   After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBClusterParameters action to verify that your DB cluster parameter group has been created or modified. If the modified DB cluster parameter group is used by an Aurora Serverless cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.   This action only applies to Aurora DB clusters",
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
            "A list of parameters in the DB cluster parameter group to modify",
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
      name: "modify-db-cluster-snapshot-attribute",
      description:
        "Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot. To share a manual DB cluster snapshot with other AWS accounts, specify restore as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB cluster snapshot. Use the value all to make the manual DB cluster snapshot public, which means that it can be copied or restored by all AWS accounts.  Don't add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts.  If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case. To view which AWS accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the DescribeDBClusterSnapshotAttributes API action. The accounts are returned as values for the restore attribute.  This action only applies to Aurora DB clusters",
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
            "The name of the DB cluster snapshot attribute to modify. To manage authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this value to restore.  To view the list of attributes available to modify, use the DescribeDBClusterSnapshotAttributes API action",
          args: {
            name: "string",
          },
        },
        {
          name: "--values-to-add",
          description:
            "A list of DB cluster snapshot attributes to add to the attribute specified by AttributeName. To authorize other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account IDs, or all to make the manual DB cluster snapshot restorable by any AWS account. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts",
          args: {
            name: "list",
          },
        },
        {
          name: "--values-to-remove",
          description:
            "A list of DB cluster snapshot attributes to remove from the attribute specified by AttributeName. To remove authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account identifiers, or all to remove authorization for any AWS account to copy or restore the DB cluster snapshot. If you specify all, an AWS account whose account ID is explicitly added to the restore attribute can still copy or restore a manual DB cluster snapshot",
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
            "The new amount of storage (in gibibytes) to allocate for the DB instance.  For MariaDB, MySQL, Oracle, and PostgreSQL, the value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value.  For the valid values for allocated storage for each engine, see CreateDBInstance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The new compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide.  If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless ApplyImmediately is enabled for this request.  Default: Uses existing setting",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC. If your DB instance isn't in a VPC, you can also use this parameter to move your DB instance into a VPC. For more information, see Working with a DB instance in a VPC in the Amazon RDS User Guide.  Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you enable ApplyImmediately.  Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mySubnetGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-security-groups",
          description:
            "A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible. Constraints:   If supplied, must match existing DBSecurityGroups",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.  Amazon Aurora  Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see ModifyDBCluster. Constraints:   If supplied, must match existing VpcSecurityGroupIds",
          args: {
            name: "list",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB instance. By default, this parameter is disabled.   If this parameter is disabled, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot. Review the table of parameters in Modifying a DB Instance in the Amazon RDS User Guide. to see the impact of enabling or disabling ApplyImmediately for each modified parameter and to determine when the changes are applied",
        },
        {
          name: "--no-apply-immediately",
          description:
            "A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB instance. By default, this parameter is disabled.   If this parameter is disabled, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot. Review the table of parameters in Modifying a DB Instance in the Amazon RDS User Guide. to see the impact of enabling or disabling ApplyImmediately for each modified parameter and to determine when the changes are applied",
        },
        {
          name: "--master-user-password",
          description:
            'The new password for the master user. The password can include any printable ASCII character except "/", """, or "@".  Changing this parameter doesn\'t result in an outage and the change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the MasterUserPassword element exists in the PendingModifiedValues element of the operation response.   Amazon Aurora  Not applicable. The password for the master user is managed by the DB cluster. For more information, see ModifyDBCluster.  Default: Uses existing setting  MariaDB  Constraints: Must contain from 8 to 41 characters.  Microsoft SQL Server  Constraints: Must contain from 8 to 128 characters.  MySQL  Constraints: Must contain from 8 to 41 characters.  Oracle  Constraints: Must contain from 8 to 30 characters.  PostgreSQL  Constraints: Must contain from 8 to 128 characters.  Amazon RDS API actions never return the password, so this action provides a way to regain access to a primary instance user if the password is lost. This includes restoring privileges that might have been accidentally revoked',
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. In this case, the DB instance isn't rebooted automatically and the parameter changes isn't applied during the next maintenance window. Default: Uses existing setting Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.  Enabling and disabling backups can result in a brief I/O suspension that lasts from a few seconds to a few minutes, depending on the size and class of your DB instance.  These changes are applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request. If you change the parameter from one non-zero value to another non-zero value, the change is asynchronously applied as soon as possible.  Amazon Aurora  Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Default: Uses existing setting Constraints:   Must be a value from 0 to 35   Can be specified for a MySQL read replica only if the source is running MySQL 5.6 or later   Can be specified for a PostgreSQL read replica only if the source is running PostgreSQL 9.3.5   Can't be set to 0 if the DB instance is a source to read replicas",
          args: {
            name: "integer",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod parameter. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. For more information, see Backup window in the Amazon RDS User Guide.   Amazon Aurora  Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Constraints:   Must be in the format hh24:mi-hh24:mi   Must be in Universal Time Coordinated (UTC)   Must not conflict with the preferred maintenance window   Must be at least 30 minutes",
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
            "A value that indicates whether the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request",
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to upgrade to. Changing this parameter results in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request.  For major version upgrades, if a nondefault DB parameter group is currently in use, a new DB parameter group in the DB parameter group family for the new engine version must be specified. The new DB parameter group can be the default for that DB parameter group family. If you specify only a major version, Amazon RDS will update the DB instance to the default minor version if the current minor version is lower. For information about valid engine versions, see CreateDBInstance, or call DescribeDBEngineVersions",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. Constraints: Major version upgrades must be allowed when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. Constraints: Major version upgrades must be allowed when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage results if this parameter is enabled during the maintenance window, and a newer minor version is available, and RDS has enabled auto patching for that engine version",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage results if this parameter is enabled during the maintenance window, and a newer minor version is available, and RDS has enabled auto patching for that engine version",
        },
        {
          name: "--license-model",
          description:
            "The license model for the DB instance. Valid values: license-included | bring-your-own-license | general-public-license",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The new Provisioned IOPS (I/O operations per second) value for the RDS instance.  Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request. If you are migrating from Provisioned IOPS to standard storage, set this value to 0. The DB instance will require a reboot for the change in storage type to take effect.  If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a read replica for the instance, and creating a DB snapshot of the instance.  Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL, the value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value.  Default: Uses existing setting",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description:
            "A value that indicates the DB instance should be associated with the specified option group. Changing this parameter doesn't result in an outage except in the following case and the change is applied during the next maintenance window unless the ApplyImmediately parameter is enabled for this request. If the parameter change results in an option group that enables OEM, this change can cause a brief (sub-second) period during which new connections are rejected but existing connections are not interrupted.  Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-db-instance-identifier",
          description:
            "The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot occurs immediately if you enable ApplyImmediately, or will occur during the next maintenance window if you disable Apply Immediately. This value is stored as a lowercase string.  Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: mydbinstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB instance.  If you specify Provisioned IOPS (io1), you must also include a value for the Iops parameter.  If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a read replica for the instance, and creating a DB snapshot of the instance.   Valid values: standard | gp2 | io1  Default: io1 if the Iops parameter is specified, otherwise gp2",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-arn",
          description:
            "The ARN from the key store with which to associate the instance for TDE encryption",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-password",
          description:
            "The password for the given ARN from the key store in order to access the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--ca-certificate-identifier",
          description:
            "Indicates the certificate that needs to be associated with the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The Active Directory directory ID to move the DB instance to. Specify none to remove the instance from its current domain. The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide",
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
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-port-number",
          description:
            "The port number on which the database accepts connections. The value of the DBPortNumber parameter must not match any of the port values specified for options in the option group for the DB instance. Your database will restart when you change the DBPortNumber value regardless of the value of the ApplyImmediately parameter.  MySQL   Default: 3306   Valid values: 1150-65535   MariaDB   Default: 3306   Valid values: 1150-65535   PostgreSQL   Default: 5432   Valid values: 1150-65535  Type: Integer  Oracle   Default: 1521   Valid values: 1150-65535   SQL Server   Default: 1433   Valid values: 1150-65535 except 1234, 1434, 3260, 3343, 3389, 47001, and 49152-49156.  Amazon Aurora   Default: 3306   Valid values: 1150-65535",
          args: {
            name: "integer",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible.  When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.  PubliclyAccessible only applies to DB instances in a VPC. The DB instance must be part of a public subnet and PubliclyAccessible must be enabled for it to be publicly accessible.  Changes to the PubliclyAccessible parameter are applied immediately regardless of the value of the ApplyImmediately parameter",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible.  When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.  PubliclyAccessible only applies to DB instances in a VPC. The DB instance must be part of a public subnet and PubliclyAccessible must be enabled for it to be publicly accessible.  Changes to the PubliclyAccessible parameter are applied immediately regardless of the value of the ApplyImmediately parameter",
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, go to To create an IAM role for Amazon RDS Enhanced Monitoring in the Amazon RDS User Guide.  If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description:
            "The name of the IAM role to use when making API calls to the Directory Service",
          args: {
            name: "string",
          },
        },
        {
          name: "--promotion-tier",
          description:
            "A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see  Fault Tolerance for an Aurora DB Cluster in the Amazon Aurora User Guide.  Default: 1 Valid Values: 0 - 15",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. This setting doesn't apply to Amazon Aurora. Mapping AWS IAM accounts to database accounts is managed by the DB cluster. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. This setting doesn't apply to Amazon Aurora. Mapping AWS IAM accounts to database accounts is managed by the DB cluster. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon Relational Database Service User Guide",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights in the Amazon Relational Database Service User Guide",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The AWS KMS key identifier for encryption of Performance Insights data. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default CMK. There is a default CMK for your AWS account. Your AWS account has a different default CMK for each AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cloudwatch-logs-export-configuration",
          description:
            "The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance. A change to the CloudwatchLogsExportConfiguration parameter is always applied to the DB instance immediately. Therefore, the ApplyImmediately parameter has no effect",
          args: {
            name: "structure",
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
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--max-allocated-storage",
          description:
            "The upper limit to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--certificate-rotation-restart",
          description:
            "A value that indicates whether the DB instance is restarted when you rotate your SSL/TLS certificate. By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.  Set this parameter only if you are not using SSL/TLS to connect to the DB instance.  If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:   For more information about rotating your SSL/TLS certificate for RDS DB engines, see  Rotating Your SSL/TLS Certificate. in the Amazon RDS User Guide.    For more information about rotating your SSL/TLS certificate for Aurora DB engines, see  Rotating Your SSL/TLS Certificate in the Amazon Aurora User Guide",
        },
        {
          name: "--no-certificate-rotation-restart",
          description:
            "A value that indicates whether the DB instance is restarted when you rotate your SSL/TLS certificate. By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.  Set this parameter only if you are not using SSL/TLS to connect to the DB instance.  If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:   For more information about rotating your SSL/TLS certificate for RDS DB engines, see  Rotating Your SSL/TLS Certificate. in the Amazon RDS User Guide.    For more information about rotating your SSL/TLS certificate for Aurora DB engines, see  Rotating Your SSL/TLS Certificate in the Amazon Aurora User Guide",
        },
        {
          name: "--replica-mode",
          description:
            "A value that sets the open mode of a replica database to either mounted or read-only.  Currently, this parameter is only supported for Oracle DB instances.  Mounted DB replicas are included in Oracle Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload. For more information, see Working with Oracle Read Replicas for Amazon RDS in the Amazon RDS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on AWS Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the AWS Outposts User Guide",
        },
        {
          name: "--no-enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on AWS Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the AWS Outposts User Guide",
        },
        {
          name: "--aws-backup-recovery-point-arn",
          description:
            "The Amazon Resource Name (ARN) of the recovery point in AWS Backup",
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
      name: "modify-db-parameter-group",
      description:
        "Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request.   Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.   After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified",
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
            "An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; later arguments are optional. A maximum of 20 parameters can be modified in a single request. Valid Values (for the application method): immediate | pending-reboot   You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover",
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
            "The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager",
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
      name: "modify-db-proxy-target-group",
      description: "Modifies the properties of a DBProxyTargetGroup",
      options: [
        {
          name: "--target-group-name",
          description:
            "The name of the new target group to assign to the proxy",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-proxy-name",
          description:
            "The name of the new proxy to which to assign the target group",
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
      name: "modify-db-snapshot",
      description:
        "Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public.  Amazon RDS supports upgrading DB snapshots for MySQL, Oracle, and PostgreSQL",
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
            "The engine version to upgrade the DB snapshot to.  The following are the database engines and engine versions that are available when you upgrade a DB snapshot.   MySQL     5.5.46 (supported for 5.1 DB snapshots)    Oracle     12.1.0.2.v8 (supported for 12.1.0.1 DB snapshots)    11.2.0.4.v12 (supported for 11.2.0.2 DB snapshots)    11.2.0.4.v11 (supported for 11.2.0.3 DB snapshots)    PostgreSQL  For the list of engine versions that are available for upgrading a DB snapshot, see  Upgrading the PostgreSQL DB Engine for Amazon RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The option group to identify with the upgraded DB snapshot.  You can specify this parameter when you upgrade an Oracle DB snapshot. The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance. For more information, see Option group considerations in the Amazon RDS User Guide",
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
      name: "modify-db-snapshot-attribute",
      description:
        "Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot. To share a manual DB snapshot with other AWS accounts, specify restore as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB snapshot. Uses the value all to make the manual DB snapshot public, which means it can be copied or restored by all AWS accounts.  Don't add the all value for any manual DB snapshots that contain private information that you don't want available to all AWS accounts.  If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case. To view which AWS accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the DescribeDBSnapshotAttributes API action. The accounts are returned as values for the restore attribute",
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
            "The name of the DB snapshot attribute to modify. To manage authorization for other AWS accounts to copy or restore a manual DB snapshot, set this value to restore.  To view the list of attributes available to modify, use the DescribeDBSnapshotAttributes API action",
          args: {
            name: "string",
          },
        },
        {
          name: "--values-to-add",
          description:
            "A list of DB snapshot attributes to add to the attribute specified by AttributeName. To authorize other AWS accounts to copy or restore a manual snapshot, set this list to include one or more AWS account IDs, or all to make the manual DB snapshot restorable by any AWS account. Do not add the all value for any manual DB snapshots that contain private information that you don't want available to all AWS accounts",
          args: {
            name: "list",
          },
        },
        {
          name: "--values-to-remove",
          description:
            "A list of DB snapshot attributes to remove from the attribute specified by AttributeName. To remove authorization for other AWS accounts to copy or restore a manual snapshot, set this list to include one or more AWS account identifiers, or all to remove authorization for any AWS account to copy or restore the DB snapshot. If you specify all, an AWS account whose account ID is explicitly added to the restore attribute can still copy or restore the manual DB snapshot",
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
      name: "modify-db-subnet-group",
      description:
        "Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region",
      options: [
        {
          name: "--db-subnet-group-name",
          description:
            "The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.  Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup",
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
            "The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. If this value isn't specified, all events are returned. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot",
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
      name: "modify-global-cluster",
      description:
        "Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The DB cluster identifier for the global cluster being modified. This parameter isn't case-sensitive.  Constraints:   Must match the identifier of an existing global database cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-global-cluster-identifier",
          description:
            "The new cluster identifier for the global database cluster when modifying a global database cluster. This value is stored as a lowercase string.  Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   The first character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-cluster2",
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
            "The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless ApplyImmediately is enabled. To list all of the available engine versions for aurora (for MySQL 5.6-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'  To list all of the available engine versions for aurora-mysql (for MySQL 5.7-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'  To list all of the available engine versions for aurora-postgresql, use the following command:  aws rds describe-db-engine-versions --engine aurora-postgresql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'",
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
      name: "promote-read-replica",
      description:
        "Promotes a read replica DB instance to a standalone DB instance.    Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the backing-up status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.   This command doesn't apply to Aurora MySQL and Aurora PostgreSQL",
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
            "The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter.   The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see  Adjusting the Preferred Maintenance Window in the Amazon RDS User Guide.  Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
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
      name: "promote-read-replica-db-cluster",
      description:
        "Promotes a read replica DB cluster to a standalone DB cluster.  This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The identifier of the DB cluster read replica to promote. This parameter isn't case-sensitive.  Constraints:   Must match the identifier of an existing DB cluster read replica.   Example: my-cluster-replica1",
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
      name: "reboot-db-instance",
      description:
        "You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.  Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.  For more information about rebooting, see Rebooting a DB Instance in the Amazon RDS User Guide",
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
            "A value that indicates whether the reboot is conducted through a Multi-AZ failover.  Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ",
        },
        {
          name: "--no-force-failover",
          description:
            "A value that indicates whether the reboot is conducted through a Multi-AZ failover.  Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ",
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
      name: "remove-from-global-cluster",
      description:
        "Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different region.   This action only applies to Aurora DB clusters",
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
      name: "remove-role-from-db-cluster",
      description:
        "Disassociates an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see Authorizing Amazon Aurora MySQL to Access Other AWS Services on Your Behalf  in the Amazon Aurora User Guide.  This action only applies to Aurora DB clusters",
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
            "The name of the feature for the DB cluster that the IAM role is to be disassociated from. For the list of supported feature names, see DBEngineVersion",
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
      name: "remove-role-from-db-instance",
      description:
        "Disassociates an AWS Identity and Access Management (IAM) role from a DB instance",
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
            "The name of the feature for the DB instance that the IAM role is to be disassociated from. For the list of supported feature names, see DBEngineVersion",
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
      name: "reset-db-cluster-parameter-group",
      description:
        "Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: ParameterName and ApplyMethod. To reset the entire DB cluster parameter group, specify the DBClusterParameterGroupName and ResetAllParameters parameters.   When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request. You must call RebootDBInstance for every DB instance in your DB cluster that you want the updated static parameter to apply to. For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
      name: "restore-db-cluster-from-s3",
      description:
        "Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in  Migrating Data from MySQL by Using an Amazon S3 Bucket in the Amazon Aurora User Guide.  This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterFromS3 action has completed and the DB cluster is available.  For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters. The source DB engine must be MySQL",
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
            "The name of the DB cluster parameter group to associate with the restored DB cluster. If this argument is omitted, default.aurora5.6 is used.  Constraints:   If supplied, must match the name of an existing DBClusterParameterGroup",
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
            "A DB subnet group to associate with the restored DB cluster. Constraints: If supplied, must match the name of an existing DBSubnetGroup.  Example: mySubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora), and aurora-postgresql",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            'The version number of the database engine to use. To list all of the available engine versions for aurora (for MySQL 5.6-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for aurora-mysql (for MySQL 5.7-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for aurora-postgresql, use the following command:  aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"   Aurora MySQL  Example: 5.6.10a, 5.6.mysql_aurora.1.19.2, 5.7.12, 5.7.mysql_aurora.2.04.5   Aurora PostgreSQL  Example: 9.6.3, 10.7',
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the instances in the restored DB cluster accept connections.  Default: 3306",
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
            "The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To view the time blocks available, see  Backup window in the Amazon Aurora User Guide.  Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see  Adjusting the Preferred Maintenance Window in the Amazon Aurora User Guide.  Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window",
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
            "The AWS KMS key identifier for an encrypted DB cluster. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). To use a CMK in a different AWS account, specify the key ARN or alias ARN. If the StorageEncrypted parameter is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS will use your default CMK. There is a default CMK for your AWS account. Your AWS account has a different default CMK for each AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
        },
        {
          name: "--source-engine",
          description:
            "The identifier for the database engine that was backed up to create the files stored in the Amazon S3 bucket.  Valid values: mysql",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-engine-version",
          description:
            "The version of the database that the backup files were created from. MySQL versions 5.5, 5.6, and 5.7 are supported.  Example: 5.6.40, 5.7.28",
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
            "The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon RDS to access the Amazon S3 bucket on your behalf",
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
            "The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
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
            "Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation.   For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos Authentication in the Amazon Aurora User Guide",
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
      name: "restore-db-cluster-from-snapshot",
      description:
        "Creates a new DB cluster from a DB snapshot or DB cluster snapshot. This action only applies to Aurora DB clusters. The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.  This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterFromSnapshot action has completed and the DB cluster is available.  For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--availability-zones",
          description:
            "Provides the list of Availability Zones (AZs) where instances in the restored DB cluster can be created",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens   Example: my-snapshot-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-identifier",
          description:
            "The identifier for the DB snapshot or DB cluster snapshot to restore from. You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot. Constraints:   Must match the identifier of an existing Snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The database engine to use for the new DB cluster. Default: The same as source Constraint: Must be compatible with the engine of the source",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            'The version of the database engine to use for the new DB cluster. To list all of the available engine versions for aurora (for MySQL 5.6-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for aurora-mysql (for MySQL 5.7-compatible Aurora), use the following command:  aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"  To list all of the available engine versions for aurora-postgresql, use the following command:  aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"   If you aren\'t using the default engine version, then you must specify the engine version.   Aurora MySQL  Example: 5.6.10a, 5.6.mysql_aurora.1.19.2, 5.7.12, 5.7.mysql_aurora.2.04.5   Aurora PostgreSQL  Example: 9.6.3, 10.7',
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the new DB cluster accepts connections. Constraints: This value must be 1150-65535  Default: The same port as the original DB cluster",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The name of the DB subnet group to use for the new DB cluster. Constraints: If supplied, must match the name of an existing DB subnet group. Example: mySubnetgroup",
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
          name: "--option-group-name",
          description:
            "The name of the option group to use for the restored DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of VPC security groups that the new DB cluster will belong to",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags to be assigned to the restored DB cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). To use a CMK in a different AWS account, specify the key ARN or alias ARN. When you don't specify a value for the KmsKeyId parameter, then the following occurs:   If the DB snapshot or DB cluster snapshot in SnapshotIdentifier is encrypted, then the restored DB cluster is encrypted using the AWS KMS CMK that was used to encrypt the DB snapshot or DB cluster snapshot.   If the DB snapshot or DB cluster snapshot in SnapshotIdentifier isn't encrypted, then the restored DB cluster isn't encrypted",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
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
            "The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs  in the Amazon Aurora User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--engine-mode",
          description:
            "The DB engine mode of the DB cluster, either provisioned, serverless, parallelquery, global, or multimaster. For more information, see  CreateDBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-configuration",
          description:
            "For DB clusters in serverless DB engine mode, the scaling properties of the DB cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default DB cluster parameter group for the specified engine is used. Constraints:   If supplied, must match the name of an existing default DB cluster parameter group.   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
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
            "Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide",
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
      name: "restore-db-cluster-to-point-in-time",
      description:
        "Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.   This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterToPointInTime action has completed and the DB cluster is available.  For more information on Amazon Aurora, see  What Is Amazon Aurora? in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The name of the new DB cluster to be created. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   First character must be a letter   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-type",
          description:
            "The type of restore to be performed. You can specify one of the following values:    full-copy - The new DB cluster is restored as a full copy of the source DB cluster.    copy-on-write - The new DB cluster is restored as a clone of the source DB cluster.   Constraints: You can't specify copy-on-write if the engine version of the source DB cluster is earlier than 1.11. If you don't specify a RestoreType value, then the new DB cluster is restored as a full copy of the source DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-db-cluster-identifier",
          description:
            "The identifier of the source DB cluster from which to restore. Constraints:   Must match the identifier of an existing DBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-to-time",
          description:
            "The date and time to restore the DB cluster to. Valid Values: Value must be a time in Universal Coordinated Time (UTC) format Constraints:   Must be before the latest restorable time for the DB instance   Must be specified if UseLatestRestorableTime parameter isn't provided   Can't be specified if the UseLatestRestorableTime parameter is enabled   Can't be specified if the RestoreType parameter is copy-on-write    Example: 2015-03-07T23:45:00Z",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--use-latest-restorable-time",
          description:
            "A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster isn't restored to the latest restorable backup time.  Constraints: Can't be specified if RestoreToTime parameter is provided",
        },
        {
          name: "--no-use-latest-restorable-time",
          description:
            "A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster isn't restored to the latest restorable backup time.  Constraints: Can't be specified if RestoreToTime parameter is provided",
        },
        {
          name: "--port",
          description:
            "The port number on which the new DB cluster accepts connections. Constraints: A value from 1150-65535.  Default: The default port for the engine",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The DB subnet group name to use for the new DB cluster. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mySubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description: "The name of the option group for the new DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of VPC security groups that the new DB cluster belongs to",
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
            "The AWS KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). To use a CMK in a different AWS account, specify the key ARN or alias ARN. You can restore to a new DB cluster and encrypt the new DB cluster with a AWS KMS CMK that is different than the AWS KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the AWS KMS CMK identified by the KmsKeyId parameter. If you don't specify a value for the KmsKeyId parameter, then the following occurs:   If the DB cluster is encrypted, then the restored DB cluster is encrypted using the AWS KMS CMK that was used to encrypt the source DB cluster.   If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted.   If DBClusterIdentifier refers to a DB cluster that isn't encrypted, then the restore request is rejected",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information, see  IAM Database Authentication in the Amazon Aurora User Guide",
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
            "The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default DB cluster parameter group for the specified engine is used. Constraints:   If supplied, must match the name of an existing DB cluster parameter group.   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled",
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
            "Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation.   For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos Authentication in the Amazon Aurora User Guide",
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
            "The compute and memory capacity of the Amazon RDS DB instance, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide.  Default: The same DBInstanceClass as the original DB instance",
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
            "The DB subnet group name to use for the new instance. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mySubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window",
        },
        {
          name: "--license-model",
          description:
            "License model information for the restored DB instance. Default: Same as source.  Valid values: license-included | bring-your-own-license | general-public-license",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-name",
          description:
            "The database name for the restored DB instance.  This parameter doesn't apply to the MySQL, PostgreSQL, or MariaDB engines",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The database engine to use for the new instance. Default: The same as source Constraint: Must be compatible with the engine of the source. For example, you can restore a MariaDB 10.1 DB instance from a MySQL 5.6 snapshot. Valid Values:    mariadb     mysql     oracle-ee     oracle-se2     oracle-se1     oracle-se     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O operations per second. If this parameter isn't specified, the IOPS value is taken from the backup. If this parameter is set to 0, the new instance is converted to a non-PIOPS instance. The conversion takes additional time, though your DB instance is available for connections before the conversion starts.  The provisioned IOPS value must follow the requirements for your database engine. For more information, see Amazon RDS Provisioned IOPS Storage to Improve Performance in the Amazon RDS User Guide.  Constraints: Must be an integer greater than 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description:
            "The name of the option group to be used for the restored DB instance. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance",
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
            "Specifies the storage type to be associated with the DB instance.  Valid values: standard | gp2 | io1   If you specify io1, you must also include a value for the Iops parameter.   Default: io1 if the Iops parameter is specified, otherwise gp2",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-arn",
          description:
            "The ARN from the key store with which to associate the instance for TDE encryption",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-password",
          description:
            "The password for the given ARN from the key store in order to access the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with this DB instance.   Default: The default EC2 VPC security group for the DB subnet group's VPC",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain",
          description:
            "Specify the Active Directory directory ID to restore the DB instance in. The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide",
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
          name: "--domain-iam-role-name",
          description:
            "Specify the name of the IAM role to be used when making API calls to the Directory Service",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
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
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If you do not specify a value for DBParameterGroupName, then the default DBParameterGroup for the specified DB engine is used. Constraints:   If supplied, must match the name of an existing DBParameterGroup.   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on AWS Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the AWS Outposts User Guide",
        },
        {
          name: "--no-enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on AWS Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the AWS Outposts User Guide",
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
      name: "restore-db-instance-from-s3",
      description:
        "Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see Importing Data into an Amazon RDS MySQL DB Instance in the Amazon RDS User Guide",
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
            "The DB instance identifier. This parameter is stored as a lowercase string.  Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: mydbinstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--allocated-storage",
          description:
            "The amount of storage (in gigabytes) to allocate initially for the DB instance. Follow the allocation rules specified in CreateDBInstance.   Be sure to allocate enough memory for your new DB instance so that the restore operation can succeed. You can also allocate additional memory for future growth",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide.  Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this instance.  Valid Values: mysql",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-username",
          description:
            "The name for the master user.  Constraints:    Must be 1 to 16 letters or numbers.   First character must be a letter.   Can't be a reserved word for the chosen database engine",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-user-password",
          description:
            'The password for the master user. The password can include any printable ASCII character except "/", """, or "@".  Constraints: Must contain from 8 to 41 characters',
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
            "The Availability Zone that the DB instance is created in. For information about AWS Regions and Availability Zones, see Regions and Availability Zones in the Amazon RDS User Guide.  Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.   Example: us-east-1d  Constraint: The AvailabilityZone parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same AWS Region as the current endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-name",
          description: "A DB subnet group to associate with this DB instance",
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
            "The port number on which the database accepts connections.  Type: Integer  Valid Values: 1150-65535  Default: 3306",
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
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
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
            "Specifies the storage type to be associated with the DB instance.  Valid values: standard | gp2 | io1  If you specify io1, you must also include a value for the Iops parameter.  Default: io1 if the Iops parameter is specified; otherwise gp2",
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
            "The AWS KMS key identifier for an encrypted DB instance.  The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). To use a CMK in a different AWS account, specify the key ARN or alias ARN. If the StorageEncrypted parameter is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS will use your default CMK. There is a default CMK for your AWS account. Your AWS account has a different default CMK for each AWS Region",
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
            "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0.  If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0.  Valid Values: 0, 1, 5, 10, 15, 30, 60  Default: 0",
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
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--source-engine",
          description:
            "The name of the engine of your source database.  Valid Values: mysql",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-engine-version",
          description:
            "The version of the database that the backup files were created from. MySQL versions 5.6 and 5.7 are supported.  Example: 5.6.40",
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
            "An AWS Identity and Access Management (IAM) role to allow Amazon RDS to access your Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance.  For more information, see Using Amazon Performance Insights in the Amazon Relational Database Service User Guide",
        },
        {
          name: "--no-enable-performance-insights",
          description:
            "A value that indicates whether to enable Performance Insights for the DB instance.  For more information, see Using Amazon Performance Insights in the Amazon Relational Database Service User Guide",
        },
        {
          name: "--performance-insights-kms-key-id",
          description:
            "The AWS KMS key identifier for encryption of Performance Insights data. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default CMK. There is a default CMK for your AWS account. Your AWS account has a different default CMK for each AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-insights-retention-period",
          description:
            "The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years)",
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
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--max-allocated-storage",
          description:
            "The upper limit to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide",
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
            "A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time.  Constraints: Can't be specified if the RestoreTime parameter is provided",
        },
        {
          name: "--no-use-latest-restorable-time",
          description:
            "A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time.  Constraints: Can't be specified if the RestoreTime parameter is provided",
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the Amazon RDS DB instance, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB Instance Class in the Amazon RDS User Guide.  Default: The same DBInstanceClass as the original DB instance",
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
            "The DB subnet group name to use for the new instance. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mySubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--no-multi-az",
          description:
            "A value that indicates whether the DB instance is a Multi-AZ deployment. Constraint: You can't specify the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment",
        },
        {
          name: "--publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC, and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses, and that public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. For more information, see CreateDBInstance",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window",
        },
        {
          name: "--license-model",
          description:
            "License model information for the restored DB instance. Default: Same as source.  Valid values: license-included | bring-your-own-license | general-public-license",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-name",
          description:
            "The database name for the restored DB instance.  This parameter isn't used for the MySQL or MariaDB engines",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The database engine to use for the new instance. Default: The same as source Constraint: Must be compatible with the engine of the source Valid Values:    mariadb     mysql     oracle-ee     oracle-se2     oracle-se1     oracle-se     postgres     sqlserver-ee     sqlserver-se     sqlserver-ex     sqlserver-web",
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
            "The name of the option group to be used for the restored DB instance. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance",
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
            "Specifies the storage type to be associated with the DB instance.  Valid values: standard | gp2 | io1   If you specify io1, you must also include a value for the Iops parameter.   Default: io1 if the Iops parameter is specified, otherwise gp2",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-arn",
          description:
            "The ARN from the key store with which to associate the instance for TDE encryption",
          args: {
            name: "string",
          },
        },
        {
          name: "--tde-credential-password",
          description:
            "The password for the given ARN from the key store in order to access the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with this DB instance.   Default: The default EC2 VPC security group for the DB subnet group's VPC",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain",
          description:
            "Specify the Active Directory directory ID to restore the DB instance in. The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see  Kerberos Authentication in the Amazon RDS User Guide",
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
          name: "--enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled. For more information about IAM database authentication, see  IAM Database Authentication for MySQL and PostgreSQL in the Amazon RDS User Guide",
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
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If you do not specify a value for DBParameterGroupName, then the default DBParameterGroup for the specified DB engine is used. Constraints:   If supplied, must match the name of an existing DBParameterGroup.   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see  Deleting a DB Instance",
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
            "The upper limit to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see  Managing capacity automatically with Amazon RDS storage autoscaling in the Amazon RDS User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--source-db-instance-automated-backups-arn",
          description:
            "The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, arn:aws:rds:useast-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on AWS Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the AWS Outposts User Guide",
        },
        {
          name: "--no-enable-customer-owned-ip",
          description:
            "A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on AWS Outposts in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses in the AWS Outposts User Guide",
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
      name: "revoke-db-security-group-ingress",
      description:
        "Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId)",
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
            "The AWS account number of the owner of the EC2 security group specified in the EC2SecurityGroupName parameter. The AWS access key ID isn't an acceptable value. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided",
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
            "The AWS KMS key identifier for encrypting messages in the database activity stream. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK)",
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
      name: "start-db-cluster",
      description:
        "Starts an Amazon Aurora DB cluster that was stopped using the AWS console, the stop-db-cluster AWS CLI command, or the StopDBCluster action. For more information, see  Stopping and Starting an Aurora Cluster in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
      name: "start-db-instance",
      description:
        "Starts an Amazon RDS DB instance that was stopped using the AWS console, the stop-db-instance AWS CLI command, or the StopDBInstance action.  For more information, see  Starting an Amazon RDS DB instance That Was Previously Stopped in the Amazon RDS User Guide.    This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora DB clusters, use StartDBCluster instead",
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
      name: "start-db-instance-automated-backups-replication",
      description:
        "Enables replication of automated backups to a different AWS Region. For more information, see  Replicating Automated Backups to Another AWS Region in the Amazon RDS User Guide",
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
            "The AWS KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS Region, for example, arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description:
            "A URL that contains a Signature Version 4 signed request for the StartDBInstanceAutomatedBackupsReplication action to be called in the AWS Region of the source DB instance. The presigned URL must be a valid request for the StartDBInstanceAutomatedBackupsReplication API action that can be executed in the AWS Region that contains the source DB instance",
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
      name: "start-export-task",
      description:
        "Starts an export of a snapshot to Amazon S3. The provided IAM role must have access to the S3 bucket",
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
            "The ID of the AWS KMS customer master key (CMK) to use to encrypt the snapshot exported to Amazon S3. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the AWS KMS customer master key (CMK). The caller of this operation must be authorized to execute the following operations. These can be set in the AWS KMS key policy:    GrantOperation.Encrypt   GrantOperation.Decrypt   GrantOperation.GenerateDataKey   GrantOperation.GenerateDataKeyWithoutPlaintext   GrantOperation.ReEncryptFrom   GrantOperation.ReEncryptTo   GrantOperation.CreateGrant   GrantOperation.DescribeKey   GrantOperation.RetireGrant",
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
      name: "stop-activity-stream",
      description:
        "Stops a database activity stream that was started using the AWS console, the start-activity-stream AWS CLI command, or the StartActivityStream action. For more information, see Database Activity Streams in the Amazon Aurora User Guide",
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
      name: "stop-db-cluster",
      description:
        "Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.  For more information, see  Stopping and Starting an Aurora Cluster in the Amazon Aurora User Guide.   This action only applies to Aurora DB clusters",
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
      name: "stop-db-instance",
      description:
        "Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.  For more information, see  Stopping an Amazon RDS DB Instance Temporarily in the Amazon RDS User Guide.    This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora clusters, use StopDBCluster instead",
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
      name: "stop-db-instance-automated-backups-replication",
      description:
        "Stops automated backup replication for a DB instance. For more information, see  Replicating Automated Backups to Another AWS Region in the Amazon RDS User Guide",
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
          name: "db-cluster-snapshot-available",
          description:
            "Wait until JMESPath query DBClusterSnapshots[].Status returns available for all elements when polling with ``describe-db-cluster-snapshots``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-cluster-identifier",
              description:
                "The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the DBClusterSnapshotIdentifier parameter. This parameter isn't case-sensitive.  Constraints:   If supplied, must match the identifier of an existing DBCluster",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-cluster-snapshot-identifier",
              description:
                "A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the DBClusterIdentifier parameter. This value is stored as a lowercase string.  Constraints:   If supplied, must match the identifier of an existing DBClusterSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of DB cluster snapshots to be returned. You can specify one of the following values:    automated - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my AWS account.    manual - Return all DB cluster snapshots that have been taken by my AWS account.    shared - Return all manual DB cluster snapshots that have been shared to my AWS account.    public - Return all DB cluster snapshots that have been marked as public.   If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by enabling the IncludeShared parameter. You can include public DB cluster snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
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
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB cluster snapshot from another AWS account by the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB cluster snapshot from another AWS account by the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
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
          name: "db-cluster-snapshot-deleted",
          description:
            "Wait until JMESPath query length(DBClusterSnapshots) == `0` returns True when polling with ``describe-db-cluster-snapshots``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-cluster-identifier",
              description:
                "The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the DBClusterSnapshotIdentifier parameter. This parameter isn't case-sensitive.  Constraints:   If supplied, must match the identifier of an existing DBCluster",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-cluster-snapshot-identifier",
              description:
                "A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the DBClusterIdentifier parameter. This value is stored as a lowercase string.  Constraints:   If supplied, must match the identifier of an existing DBClusterSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of DB cluster snapshots to be returned. You can specify one of the following values:    automated - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my AWS account.    manual - Return all DB cluster snapshots that have been taken by my AWS account.    shared - Return all manual DB cluster snapshots that have been shared to my AWS account.    public - Return all DB cluster snapshots that have been marked as public.   If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by enabling the IncludeShared parameter. You can include public DB cluster snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
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
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB cluster snapshot from another AWS account by the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB cluster snapshot from another AWS account by the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
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
                "A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list will only include information about the DB instances identified by these ARNs.    dbi-resource-id - Accepts DB instance resource identifiers. The results list will only include information about the DB instances identified by these DB instance resource identifiers.    domain - Accepts Active Directory directory IDs. The results list will only include information about the DB instances associated with these domains.    engine - Accepts engine names. The results list will only include information about the DB instances for these engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
                "A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.    db-instance-id - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list will only include information about the DB instances identified by these ARNs.    dbi-resource-id - Accepts DB instance resource identifiers. The results list will only include information about the DB instances identified by these DB instance resource identifiers.    domain - Accepts Active Directory directory IDs. The results list will only include information about the DB instances associated with these domains.    engine - Accepts engine names. The results list will only include information about the DB instances for these engines",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
          name: "db-snapshot-available",
          description:
            "Wait until JMESPath query DBSnapshots[].Status returns available for all elements when polling with ``describe-db-snapshots``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-instance-identifier",
              description:
                "The ID of the DB instance to retrieve the list of DB snapshots for. This parameter can't be used in conjunction with DBSnapshotIdentifier. This parameter isn't case-sensitive.  Constraints:   If supplied, must match the identifier of an existing DBInstance",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-snapshot-identifier",
              description:
                "A specific DB snapshot identifier to describe. This parameter can't be used in conjunction with DBInstanceIdentifier. This value is stored as a lowercase string.  Constraints:   If supplied, must match the identifier of an existing DBSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of snapshots to be returned. You can specify one of the following values:    automated - Return all DB snapshots that have been automatically taken by Amazon RDS for my AWS account.    manual - Return all DB snapshots that have been taken by my AWS account.    shared - Return all manual DB snapshots that have been shared to my AWS account.    public - Return all DB snapshots that have been marked as public.    awsbackup - Return the DB snapshots managed by the AWS Backup service. For information about AWS Backup, see the  AWS Backup Developer Guide.   The awsbackup type does not apply to Aurora.   If you don't specify a SnapshotType value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the IncludeShared parameter. You can include public snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
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
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the ModifyDBSnapshotAttribute API action",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the ModifyDBSnapshotAttribute API action",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API",
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
          name: "db-snapshot-completed",
          description:
            "Wait until DBSnapshotNotFound is thrown when polling with ``describe-db-snapshots``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--db-instance-identifier",
              description:
                "The ID of the DB instance to retrieve the list of DB snapshots for. This parameter can't be used in conjunction with DBSnapshotIdentifier. This parameter isn't case-sensitive.  Constraints:   If supplied, must match the identifier of an existing DBInstance",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-snapshot-identifier",
              description:
                "A specific DB snapshot identifier to describe. This parameter can't be used in conjunction with DBInstanceIdentifier. This value is stored as a lowercase string.  Constraints:   If supplied, must match the identifier of an existing DBSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of snapshots to be returned. You can specify one of the following values:    automated - Return all DB snapshots that have been automatically taken by Amazon RDS for my AWS account.    manual - Return all DB snapshots that have been taken by my AWS account.    shared - Return all manual DB snapshots that have been shared to my AWS account.    public - Return all DB snapshots that have been marked as public.    awsbackup - Return the DB snapshots managed by the AWS Backup service. For information about AWS Backup, see the  AWS Backup Developer Guide.   The awsbackup type does not apply to Aurora.   If you don't specify a SnapshotType value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the IncludeShared parameter. You can include public snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
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
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the ModifyDBSnapshotAttribute API action",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the ModifyDBSnapshotAttribute API action",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API",
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
          name: "db-snapshot-deleted",
          description:
            "Wait until JMESPath query length(DBSnapshots) == `0` returns True when polling with ``describe-db-snapshots``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--db-instance-identifier",
              description:
                "The ID of the DB instance to retrieve the list of DB snapshots for. This parameter can't be used in conjunction with DBSnapshotIdentifier. This parameter isn't case-sensitive.  Constraints:   If supplied, must match the identifier of an existing DBInstance",
              args: {
                name: "string",
              },
            },
            {
              name: "--db-snapshot-identifier",
              description:
                "A specific DB snapshot identifier to describe. This parameter can't be used in conjunction with DBInstanceIdentifier. This value is stored as a lowercase string.  Constraints:   If supplied, must match the identifier of an existing DBSnapshot.   If this identifier is for an automated snapshot, the SnapshotType parameter must also be specified",
              args: {
                name: "string",
              },
            },
            {
              name: "--snapshot-type",
              description:
                "The type of snapshots to be returned. You can specify one of the following values:    automated - Return all DB snapshots that have been automatically taken by Amazon RDS for my AWS account.    manual - Return all DB snapshots that have been taken by my AWS account.    shared - Return all manual DB snapshots that have been shared to my AWS account.    public - Return all DB snapshots that have been marked as public.    awsbackup - Return the DB snapshots managed by the AWS Backup service. For information about AWS Backup, see the  AWS Backup Developer Guide.   The awsbackup type does not apply to Aurora.   If you don't specify a SnapshotType value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the IncludeShared parameter. You can include public snapshots with these results by enabling the IncludePublic parameter. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
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
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.  Default: 100 Constraints: Minimum 20, maximum 100",
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
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the ModifyDBSnapshotAttribute API action",
            },
            {
              name: "--no-include-shared",
              description:
                "A value that indicates whether to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore. By default, these snapshots are not included. You can give an AWS account permission to restore a manual DB snapshot from another AWS account by using the ModifyDBSnapshotAttribute API action",
            },
            {
              name: "--include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API",
            },
            {
              name: "--no-include-public",
              description:
                "A value that indicates whether to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account. By default, the public snapshots are not included. You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API",
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
      ],
    },
  ],
};

export default completionSpec;
