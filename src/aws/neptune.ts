const completionSpec: Fig.Spec = {
  name: "neptune",
  description:
    "Amazon Neptune Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Amazon Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that efficiently navigate highly connected datasets. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security. This interface reference for Amazon Neptune contains documentation for a programming or command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide",
  subcommands: [
    {
      name: "add-role-to-db-cluster",
      description:
        "Associates an Identity and Access Management (IAM) role with an Neptune DB cluster",
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
            "The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example arn:aws:iam::123456789012:role/NeptuneAccessRole",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-name",
          description:
            "The name of the feature for the Neptune DB cluster that the IAM role is to be associated with. For the list of supported feature names, see DBEngineVersion",
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
        "Adds a source identifier to an existing event notification subscription",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the event notification subscription you want to add a source identifier to",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-identifier",
          description:
            "The identifier of the event source to be added. Constraints:   If the source type is a DB instance, then a DBInstanceIdentifier must be supplied.   If the source type is a DB security group, a DBSecurityGroupName must be supplied.   If the source type is a DB parameter group, a DBParameterGroupName must be supplied.   If the source type is a DB snapshot, a DBSnapshotIdentifier must be supplied",
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
        "Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune",
      options: [
        {
          name: "--resource-name",
          description:
            "The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see  Constructing an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be assigned to the Amazon Neptune resource",
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
            "The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see  Constructing an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-action",
          description:
            "The pending maintenance action to apply to this resource. Valid values: system-update, db-upgrade",
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
      name: "copy-db-cluster-parameter-group",
      description: "Copies the specified DB cluster parameter group",
      options: [
        {
          name: "--source-db-cluster-parameter-group-identifier",
          description:
            "The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see  Constructing an Amazon Resource Name (ARN). Constraints:   Must specify a valid DB cluster parameter group.   If the source DB cluster parameter group is in the same Amazon Region as the copy, specify a valid DB parameter group identifier, for example my-db-cluster-param-group, or a valid ARN.   If the source DB parameter group is in a different Amazon Region than the copy, specify a valid DB cluster parameter group ARN, for example arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-cluster-parameter-group-identifier",
          description:
            "The identifier for the copied DB cluster parameter group. Constraints:   Cannot be null, empty, or blank   Must contain from 1 to 255 letters, numbers, or hyphens   First character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens   Example: my-cluster-param-group1",
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
            "The tags to be assigned to the copied DB cluster parameter group",
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
        "Copies a snapshot of a DB cluster. To copy a DB cluster snapshot from a shared manual DB cluster snapshot, SourceDBClusterSnapshotIdentifier must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot",
      options: [
        {
          name: "--source-db-cluster-snapshot-identifier",
          description:
            'The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive. Constraints:   Must specify a valid system snapshot in the "available" state.   Specify a valid DB snapshot identifier.   Example: my-cluster-snapshot1',
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-cluster-snapshot-identifier",
          description:
            "The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-cluster-snapshot2",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Amazon KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. If you copy an encrypted DB cluster snapshot from your Amazon account, you can specify a value for KmsKeyId to encrypt the copy with a new KMS encryption key. If you don't specify a value for KmsKeyId, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot. If you copy an encrypted DB cluster snapshot that is shared from another Amazon account, then you must specify a value for KmsKeyId.  KMS encryption keys are specific to the Amazon Region that they are created in, and you can't use encryption keys from one Amazon Region in another Amazon Region. You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description: "Not currently supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags",
          description:
            "True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false",
        },
        {
          name: "--no-copy-tags",
          description:
            "True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false",
        },
        {
          name: "--tags",
          description: "The tags to assign to the new DB cluster snapshot copy",
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
            "The identifier or ARN for the source DB parameter group. For information about creating an ARN, see  Constructing an Amazon Resource Name (ARN). Constraints:   Must specify a valid DB parameter group.   Must specify a valid DB parameter group identifier, for example my-db-param-group, or a valid ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-parameter-group-identifier",
          description:
            "The identifier for the copied DB parameter group. Constraints:   Cannot be null, empty, or blank.   Must contain from 1 to 255 letters, numbers, or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-db-parameter-group",
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
            "The tags to be assigned to the copied DB parameter group",
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
      name: "create-db-cluster",
      description:
        "Creates a new Amazon Neptune DB cluster. You can use the ReplicationSourceIdentifier parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance. Note that when you create a new cluster using CreateDBCluster directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its DeletionProtection field is set to false",
      options: [
        {
          name: "--availability-zones",
          description:
            "A list of EC2 Availability Zones that instances in the DB cluster can be created in",
          args: {
            name: "list",
          },
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
          name: "--character-set-name",
          description: "(Not supported by Neptune)",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "If set to true, tags are copied to any snapshot of the DB cluster that is created",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "If set to true, tags are copied to any snapshot of the DB cluster that is created",
        },
        {
          name: "--database-name",
          description:
            "The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Neptune will not create a database in the DB cluster you are creating",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-cluster1",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used. Constraints:   If supplied, must match the name of an existing DBClusterParameterGroup",
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
            "The name of the database engine to be used for this DB cluster. Valid Values: neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to use for the new DB cluster. Example: 1.0.2.1",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the instances in the DB cluster accept connections.  Default: 8182",
          args: {
            name: "integer",
          },
        },
        {
          name: "--master-username",
          description: "Not supported by Neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-user-password",
          description: "Not supported by Neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description: "(Not supported by Neptune)",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. To see the time blocks available, see Neptune Maintenance Window in the Amazon Neptune User Guide.  Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. To see the time blocks available, see Neptune Maintenance Window in the Amazon Neptune User Guide.  Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-source-identifier",
          description:
            "The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to assign to the new DB cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-encrypted",
          description: "Specifies whether the DB cluster is encrypted",
        },
        {
          name: "--no-storage-encrypted",
          description: "Specifies whether the DB cluster is encrypted",
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon KMS key identifier for an encrypted DB cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key. If an encryption key is not specified in KmsKeyId:   If ReplicationSourceIdentifier identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key.   If the StorageEncrypted parameter is true and ReplicationSourceIdentifier is not specified, then Amazon Neptune will use your default encryption key.   Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region. If you create a Read Replica of an encrypted DB cluster in another Amazon Region, you must set KmsKeyId to a KMS key ID that is valid in the destination Amazon Region. This key is used to encrypt the Read Replica in that Amazon Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-signed-url",
          description: "This parameter is not currently supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "If set to true, enables Amazon Identity and Access Management (IAM) authentication for the entire DB cluster (this cannot be set at an instance level). Default: false",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "If set to true, enables Amazon Identity and Access Management (IAM) authentication for the entire DB cluster (this cannot be set at an instance level). Default: false",
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "A list of the log types that this DB cluster should export to CloudWatch Logs. Valid log types are: audit (to publish audit logs) and slowquery (to publish slow-query logs). See Publishing Neptune logs to Amazon CloudWatch logs",
          args: {
            name: "list",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled",
        },
        {
          name: "--serverless-v2-scaling-configuration",
          description:
            "Contains the scaling configuration of a Neptune Serverless DB cluster. For more information, see Using Amazon Neptune Serverless in the Amazon Neptune User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--global-cluster-identifier",
          description:
            "The ID of the Neptune global database to which this new DB cluster should be added",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description:
            "The storage type to associate with the DB cluster. Valid Values:    standard | iopt1    Default:    standard     When you create a Neptune cluster with the storage type set to iopt1, the storage type is returned in the response. The storage type isn't returned when you set it to standard",
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
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster",
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
          description: "The tags to be assigned to the Amazon Neptune resource",
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
        "Creates a new DB cluster parameter group. Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.  A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBClusterParameterGroup. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using ModifyDBCluster. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.  After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon Neptune console or the DescribeDBClusterParameters command to verify that your DB cluster parameter group has been created or modified",
      options: [
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group. Constraints:   Must match the name of an existing DBClusterParameterGroup.    This value is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-family",
          description:
            "The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family",
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
          description:
            "The tags to be assigned to the new DB cluster parameter group",
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
      description: "Creates a snapshot of a DB cluster",
      options: [
        {
          name: "--db-cluster-snapshot-identifier",
          description:
            "The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: my-cluster1-snapshot1",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The identifier of the DB cluster to create a snapshot for. This parameter is not case-sensitive. Constraints:   Must match the identifier of an existing DBCluster.   Example: my-cluster1",
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
          description: "Not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-instance-identifier",
          description:
            "The DB instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: mydbinstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--allocated-storage",
          description: "Not supported by Neptune",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all Amazon Regions",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used for this instance. Valid Values: neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-username",
          description: "Not supported by Neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-user-password",
          description: "Not supported by Neptune",
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
            "A list of EC2 VPC security groups to associate with this DB instance. Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see CreateDBCluster. Default: The default EC2 VPC security group for the DB subnet group's VPC",
          args: {
            name: "list",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The EC2 Availability Zone that the DB instance is created in Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region.  Example: us-east-1d   Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to true. The specified Availability Zone must be in the same Amazon Region as the current endpoint",
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
            "The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used. Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automated backups are retained. Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see CreateDBCluster. Default: 1 Constraints:   Must be a value from 0 to 35   Cannot be set to 0 if the DB instance is a source to Read Replicas",
          args: {
            name: "integer",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created. Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see CreateDBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the database accepts connections. Not applicable. The port is managed by the DB cluster. For more information, see CreateDBCluster.  Default: 8182  Type: Integer",
          args: {
            name: "integer",
          },
        },
        {
          name: "--multi-az",
          description:
            "Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true",
        },
        {
          name: "--no-multi-az",
          description:
            "Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true",
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to use. Currently, setting this parameter has no effect",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window. Default: true",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window. Default: true",
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
            "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description: "(Not supported by Neptune)",
          args: {
            name: "string",
          },
        },
        {
          name: "--character-set-name",
          description: "(Not supported by Neptune)",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description: "This flag should no longer be used",
        },
        {
          name: "--no-publicly-accessible",
          description: "This flag should no longer be used",
        },
        {
          name: "--tags",
          description: "The tags to assign to the new instance",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The identifier of the DB cluster that the instance will belong to. For information on creating a DB cluster, see CreateDBCluster. Type: String",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB instance. Not applicable. Storage is managed by the DB Cluster",
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
            "Specifies whether the DB instance is encrypted. Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see CreateDBCluster. Default: false",
        },
        {
          name: "--no-storage-encrypted",
          description:
            "Specifies whether the DB instance is encrypted. Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see CreateDBCluster. Default: false",
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon KMS key identifier for an encrypted DB instance. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same Amazon account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key. Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster. If the StorageEncrypted parameter is true, and you do not specify a value for the KmsKeyId parameter, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "Specify the Active Directory Domain to create the instance in",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false",
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
            "The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value",
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
            "A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance.  Default: 1 Valid Values: 0 - 15",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timezone",
          description: "The time zone of the DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description: "Not supported by Neptune (ignored)",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description: "Not supported by Neptune (ignored)",
        },
        {
          name: "--enable-performance-insights",
          description: "(Not supported by Neptune)",
        },
        {
          name: "--no-enable-performance-insights",
          description: "(Not supported by Neptune)",
        },
        {
          name: "--performance-insights-kms-key-id",
          description: "(Not supported by Neptune)",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of log types that need to be enabled for exporting to CloudWatch Logs",
          args: {
            name: "list",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See Deleting a DB Instance. DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See Deleting a DB Instance. DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Creates a new DB parameter group. A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBParameterGroup. Once you've created a DB parameter group, you need to associate it with your DB instance using ModifyDBInstance. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.  After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon Neptune console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified",
      options: [
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group. Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens    This value is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-family",
          description:
            "The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family",
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
          description: "The tags to be assigned to the new DB parameter group",
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
        "Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region",
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
          description: "The tags to be assigned to the new DB subnet group",
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
        "Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console. You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup. If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account",
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
            "The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the DescribeEventCategories action",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-ids",
          description:
            "The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens. Constraints:   If SourceIds are supplied, SourceType must also be provided.   If the source type is a DB instance, then a DBInstanceIdentifier must be supplied.   If the source type is a DB security group, a DBSecurityGroupName must be supplied.   If the source type is a DB parameter group, a DBParameterGroupName must be supplied.   If the source type is a DB snapshot, a DBSnapshotIdentifier must be supplied",
          args: {
            name: "list",
          },
        },
        {
          name: "--enabled",
          description:
            "A Boolean value; set to true to activate the subscription, set to false to create the subscription but not active it",
        },
        {
          name: "--no-enabled",
          description:
            "A Boolean value; set to true to activate the subscription, set to false to create the subscription but not active it",
        },
        {
          name: "--tags",
          description: "The tags to be applied to the new event subscription",
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
        "Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem. You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database",
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
            "(Optional) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            "The name of the database engine to be used in the global database. Valid values: neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The Neptune engine version to be used by the global database. Valid values: 1.2.0.0 or above",
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
      name: "delete-db-cluster",
      description:
        "The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted. Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its DeletionProtection field to False",
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
            "Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If true is specified, no DB cluster snapshot is created. If false is specified, a DB cluster snapshot is created before the DB cluster is deleted.  You must specify a FinalDBSnapshotIdentifier parameter if SkipFinalSnapshot is false.  Default: false",
        },
        {
          name: "--no-skip-final-snapshot",
          description:
            "Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If true is specified, no DB cluster snapshot is created. If false is specified, a DB cluster snapshot is created before the DB cluster is deleted.  You must specify a FinalDBSnapshotIdentifier parameter if SkipFinalSnapshot is false.  Default: false",
        },
        {
          name: "--final-db-snapshot-identifier",
          description:
            "The DB cluster snapshot identifier of the new DB cluster snapshot created when SkipFinalSnapshot is set to false.   Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error.  Constraints:   Must be 1 to 255 letters, numbers, or hyphens.   First character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens",
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
        "Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster",
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
        "Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters",
      options: [
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group. Constraints:   Must be the name of an existing DB cluster parameter group.   You can't delete a default DB cluster parameter group.   Cannot be associated with any DB clusters",
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
        "Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.  The DB cluster snapshot must be in the available state to be deleted",
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
        "The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by DeleteDBInstance are not deleted.  If you request a final DB snapshot the status of the Amazon Neptune DB instance is deleting until the DB snapshot is created. The API action DescribeDBInstance is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. Note that when a DB instance is in a failure state and has a status of failed, incompatible-restore, or incompatible-network, you can only delete it when the SkipFinalSnapshot parameter is set to true. You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled",
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
            "Determines whether a final DB snapshot is created before the DB instance is deleted. If true is specified, no DBSnapshot is created. If false is specified, a DB snapshot is created before the DB instance is deleted. Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to \"true\". Specify true when deleting a Read Replica.  The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is false.  Default: false",
        },
        {
          name: "--no-skip-final-snapshot",
          description:
            "Determines whether a final DB snapshot is created before the DB instance is deleted. If true is specified, no DBSnapshot is created. If false is specified, a DB snapshot is created before the DB instance is deleted. Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to \"true\". Specify true when deleting a Read Replica.  The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is false.  Default: false",
        },
        {
          name: "--final-db-snapshot-identifier",
          description:
            "The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to false.  Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error.  Constraints:   Must be 1 to 255 letters or numbers.   First character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens   Cannot be specified when deleting a Read Replica",
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
        "Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances",
      options: [
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group. Constraints:   Must be the name of an existing DB parameter group   You can't delete a default DB parameter group   Cannot be associated with any DB instances",
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
      description: "Deletes an event notification subscription",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the event notification subscription you want to delete",
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
        "Deletes a global database. The primary and all secondary clusters must already be detached or deleted first",
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
      name: "describe-db-cluster-endpoints",
      description:
        "Returns information about endpoints for an Amazon Neptune DB cluster.  This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters",
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
        "Returns a list of DBClusterParameterGroup descriptions. If a DBClusterParameterGroupName parameter is specified, the list will contain only the description of the specified DB cluster parameter group",
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
          description: "This parameter is not currently supported",
          args: {
            name: "list",
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
        "Returns the detailed parameter list for a particular DB cluster parameter group",
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
          description: "This parameter is not currently supported",
          args: {
            name: "list",
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
        "Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot. When sharing snapshots with other Amazon accounts, DescribeDBClusterSnapshotAttributes returns the restore attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If all is included in the list of values for the restore attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts. To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the ModifyDBClusterSnapshotAttribute API action",
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
        "Returns information about DB cluster snapshots. This API action supports pagination",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the DBClusterSnapshotIdentifier parameter. This parameter is not case-sensitive. Constraints:   If supplied, must match the identifier of an existing DBCluster",
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
            "The type of DB cluster snapshots to be returned. You can specify one of the following values:    automated - Return all DB cluster snapshots that have been automatically taken by Amazon Neptune for my Amazon account.    manual - Return all DB cluster snapshots that have been taken by my Amazon account.    shared - Return all manual DB cluster snapshots that have been shared to my Amazon account.    public - Return all DB cluster snapshots that have been marked as public.   If you don't specify a SnapshotType value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the IncludeShared parameter to true. You can include public DB cluster snapshots with these results by setting the IncludePublic parameter to true. The IncludeShared and IncludePublic parameters don't apply for SnapshotType values of manual or automated. The IncludePublic parameter doesn't apply when SnapshotType is set to shared. The IncludeShared parameter doesn't apply when SnapshotType is set to public",
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
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100",
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
            "True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon account has been given permission to copy or restore, and otherwise false. The default is false. You can give an Amazon account permission to restore a manual DB cluster snapshot from another Amazon account by the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--no-include-shared",
          description:
            "True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon account has been given permission to copy or restore, and otherwise false. The default is false. You can give an Amazon account permission to restore a manual DB cluster snapshot from another Amazon account by the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--include-public",
          description:
            "True to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon account, and otherwise false. The default is false. The default is false. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
        },
        {
          name: "--no-include-public",
          description:
            "True to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon account, and otherwise false. The default is false. The default is false. You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action",
        },
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
        "Returns information about provisioned DB clusters, and supports pagination.  This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters",
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
            "A filter that specifies one or more DB clusters to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.    engine - Accepts an engine name (such as neptune), and restricts the results list to DB clusters created by that engine.   For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB clusters are returned, you could use the following command:",
          args: {
            name: "list",
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
          name: "--marker",
          description:
            "An optional pagination token provided by a previous DescribeDBClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-db-engine-versions",
      description: "Returns a list of the available DB engines",
      options: [
        {
          name: "--engine",
          description: "The database engine to return",
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
          description: "Not currently supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so that the following results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100",
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
            "Indicates that only the default version of the specified engine or engine and major version combination is returned",
        },
        {
          name: "--no-default-only",
          description:
            "Indicates that only the default version of the specified engine or engine and major version combination is returned",
        },
        {
          name: "--list-supported-character-sets",
          description:
            "If this parameter is specified and the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version",
        },
        {
          name: "--no-list-supported-character-sets",
          description:
            "If this parameter is specified and the requested engine supports the CharacterSetName parameter for CreateDBInstance, the response includes a list of supported character sets for each engine version",
        },
        {
          name: "--list-supported-timezones",
          description:
            "If this parameter is specified and the requested engine supports the TimeZone parameter for CreateDBInstance, the response includes a list of supported time zones for each engine version",
        },
        {
          name: "--no-list-supported-timezones",
          description:
            "If this parameter is specified and the requested engine supports the TimeZone parameter for CreateDBInstance, the response includes a list of supported time zones for each engine version",
        },
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
        "Returns information about provisioned instances, and supports pagination.  This operation can also return information for Amazon RDS instances and Amazon DocDB instances",
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
            "A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.    engine - Accepts an engine name (such as neptune), and restricts the results list to DB instances created by that engine.   For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB instances are returned, you could use the following command:",
          args: {
            name: "list",
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
          description: "This parameter is not currently supported",
          args: {
            name: "list",
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
          description: "This parameter is not currently supported",
          args: {
            name: "list",
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
          description: "This parameter is not currently supported",
          args: {
            name: "list",
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
        "Returns the default engine and system parameter information for the cluster database engine",
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
          description: "This parameter is not currently supported",
          args: {
            name: "list",
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
          name: "--generate-cli-skeleton",
          description:
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
          description: "Not currently supported",
          args: {
            name: "list",
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
        "Displays a list of categories for all event source types, or, if specified, for a specified source type",
      options: [
        {
          name: "--source-type",
          description:
            "The type of source that is generating the events. Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot",
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
            "The name of the event notification subscription you want to describe",
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
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100",
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
        "Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned",
      options: [
        {
          name: "--source-identifier",
          description:
            "The identifier of the event source for which events are returned. If not specified, then all sources are included in the response. Constraints:   If SourceIdentifier is supplied, SourceType must also be provided.   If the source type is DBInstance, then a DBInstanceIdentifier must be supplied.   If the source type is DBSecurityGroup, a DBSecurityGroupName must be supplied.   If the source type is DBParameterGroup, a DBParameterGroupName must be supplied.   If the source type is DBSnapshot, a DBSnapshotIdentifier must be supplied.   Cannot end with a hyphen or contain two consecutive hyphens",
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
          description: "This parameter is not currently supported",
          args: {
            name: "list",
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
      name: "describe-global-clusters",
      description:
        "Returns information about Neptune global database clusters. This API supports pagination",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The user-supplied DB cluster identifier. If this parameter is specified, only information about the specified DB cluster is returned. This parameter is not case-sensitive. Constraints: If supplied, must match an existing DB cluster identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination marker token is included in the response that you can use to retrieve the remaining results. Default: 100  Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "(Optional) A pagination token returned by a previous call to DescribeGlobalClusters. If this parameter is specified, the response will only include records beyond the marker, up to the number specified by MaxRecords",
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
            "The name of the engine to retrieve DB instance options for",
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
          name: "--vpc",
          description:
            "The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings",
        },
        {
          name: "--no-vpc",
          description:
            "The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings",
        },
        {
          name: "--filters",
          description: "This parameter is not currently supported",
          args: {
            name: "list",
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
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "failover-db-cluster",
      description:
        "Forces a failover for a DB cluster. A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer). Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "A DB cluster identifier to force a failover for. This parameter is not case-sensitive. Constraints:   Must match the identifier of an existing DBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-instance-identifier",
          description:
            "The name of the instance to promote to the primary instance. You must specify the instance identifier for an Read Replica in the DB cluster. For example, mydbcluster-replica1",
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
        "Initiates the failover process for a Neptune global database. A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.  This action applies only to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "Identifier of the Neptune global database that should be failed over. The identifier is the unique key assigned by the user when the Neptune global database was created. In other words, it's the name of the global database that you want to fail over. Constraints: Must match the identifier of an existing Neptune global database",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-db-cluster-identifier",
          description:
            "The Amazon Resource Name (ARN) of the secondary Neptune DB cluster that you want to promote to primary for the global database",
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
      description: "Lists all tags on an Amazon Neptune resource",
      options: [
        {
          name: "--resource-name",
          description:
            "The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see  Constructing an Amazon Resource Name (ARN)",
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive. Constraints:   Must match the identifier of an existing DBCluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-db-cluster-identifier",
          description:
            "The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   The first character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens   Example: my-cluster2",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB cluster. If this parameter is set to false, changes to the DB cluster are applied during the next maintenance window. The ApplyImmediately parameter only affects NewDBClusterIdentifier values. If you set the ApplyImmediately parameter value to false, then changes to NewDBClusterIdentifier values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the ApplyImmediately parameter. Default: false",
        },
        {
          name: "--no-apply-immediately",
          description:
            "A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB cluster. If this parameter is set to false, changes to the DB cluster are applied during the next maintenance window. The ApplyImmediately parameter only affects NewDBClusterIdentifier values. If you set the ApplyImmediately parameter value to false, then changes to NewDBClusterIdentifier values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the ApplyImmediately parameter. Default: false",
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
          description: "Not supported by Neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description: "Not supported by Neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. Constraints:   Must be in the format hh24:mi-hh24:mi.   Must be in Universal Coordinated Time (UTC).   Must not conflict with the preferred maintenance window.   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi  The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. Default: false",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. Default: false",
        },
        {
          name: "--cloudwatch-logs-export-configuration",
          description:
            "The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster. See Using the CLI to publish Neptune audit logs to CloudWatch Logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless the ApplyImmediately parameter is set to true. For a list of valid engine versions, see Engine Releases for Amazon Neptune, or call DescribeDBEngineVersions",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "A value that indicates whether upgrades between different major versions are allowed. Constraints: You must set the allow-major-version-upgrade flag when providing an EngineVersion parameter that uses a different major version than the DB cluster's current version",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "A value that indicates whether upgrades between different major versions are allowed. Constraints: You must set the allow-major-version-upgrade flag when providing an EngineVersion parameter that uses a different major version than the DB cluster's current version",
        },
        {
          name: "--db-instance-parameter-group-name",
          description:
            "The name of the DB parameter group to apply to all instances of the DB cluster.   When you apply a parameter group using DBInstanceParameterGroupName, parameter changes aren't applied during the next maintenance window but instead are applied immediately.  Default: The existing name setting Constraints:   The DB parameter group must be in the same DB parameter group family as the target DB cluster version.   The DBInstanceParameterGroupName parameter is only valid in combination with the AllowMajorVersionUpgrade parameter",
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
            "If set to true, tags are copied to any snapshot of the DB cluster that is created",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "If set to true, tags are copied to any snapshot of the DB cluster that is created",
        },
        {
          name: "--serverless-v2-scaling-configuration",
          description:
            "Contains the scaling configuration of a Neptune Serverless DB cluster. For more information, see Using Amazon Neptune Serverless in the Amazon Neptune User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-type",
          description:
            "The storage type to associate with the DB cluster. Valid Values:    standard | iopt1    Default:    standard",
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
      name: "modify-db-cluster-endpoint",
      description:
        "Modifies the properties of an endpoint in an Amazon Neptune DB cluster",
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
        "Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request.  Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.   After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon Neptune console or the DescribeDBClusterParameters command to verify that your DB cluster parameter group has been created or modified",
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
        "Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot. To share a manual DB cluster snapshot with other Amazon accounts, specify restore as the AttributeName and use the ValuesToAdd parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value all to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the ValuesToAdd parameter. You can't use all as a value for that parameter in this case. To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the DescribeDBClusterSnapshotAttributes API action",
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
            "The name of the DB cluster snapshot attribute to modify. To manage authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this value to restore",
          args: {
            name: "string",
          },
        },
        {
          name: "--values-to-add",
          description:
            "A list of DB cluster snapshot attributes to add to the attribute specified by AttributeName. To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account IDs, or all to make the manual DB cluster snapshot restorable by any Amazon account. Do not add the all value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts",
          args: {
            name: "list",
          },
        },
        {
          name: "--values-to-remove",
          description:
            "A list of DB cluster snapshot attributes to remove from the attribute specified by AttributeName. To remove authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account identifiers, or all to remove authorization for any Amazon account to copy or restore the DB cluster snapshot. If you specify all, an Amazon account whose account ID is explicitly added to the restore attribute can still copy or restore a manual DB cluster snapshot",
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
          description: "Not supported by Neptune",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-instance-class",
          description:
            "The new compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all Amazon Regions. If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless ApplyImmediately is specified as true for this request. Default: Uses existing setting",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC. Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify true for the ApplyImmediately parameter. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mySubnetGroup",
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
            "A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible. Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see ModifyDBCluster. Constraints:   If supplied, must match existing VpcSecurityGroupIds",
          args: {
            name: "list",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB instance.  If this parameter is set to false, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot. Default: false",
        },
        {
          name: "--no-apply-immediately",
          description:
            "Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB instance.  If this parameter is set to false, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot. Default: false",
        },
        {
          name: "--master-user-password",
          description: "Not supported by Neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-parameter-group-name",
          description:
            "The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window. Default: Uses existing setting Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Default: Uses existing setting",
          args: {
            name: "integer",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled. Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see ModifyDBCluster. Constraints:   Must be in the format hh24:mi-hh24:mi   Must be in Universal Time Coordinated (UTC)   Must not conflict with the preferred maintenance window   Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied. Default: Uses existing setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is set to true for this request",
        },
        {
          name: "--no-multi-az",
          description:
            "Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is set to true for this request",
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to upgrade to. Currently, setting this parameter has no effect. To upgrade your database engine to the most recent release, use the ApplyPendingMaintenanceAction API",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to true during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to true during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version",
        },
        {
          name: "--license-model",
          description: "Not supported by Neptune",
          args: {
            name: "string",
          },
        },
        {
          name: "--iops",
          description:
            "The new Provisioned IOPS (I/O operations per second) value for the instance. Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the ApplyImmediately parameter is set to true for this request. Default: Uses existing setting",
          args: {
            name: "integer",
          },
        },
        {
          name: "--option-group-name",
          description: "(Not supported by Neptune)",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-db-instance-identifier",
          description:
            "The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot will occur immediately if you set Apply Immediately to true, or will occur during the next maintenance window if Apply Immediately to false. This value is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: mydbinstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description: "Not supported",
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
          description: "Not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags-to-snapshot",
          description:
            "True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false",
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
            "The port number on which the database accepts connections. The value of the DBPortNumber parameter must not match any of the port values specified for options in the option group for the DB instance. Your database will restart when you change the DBPortNumber value regardless of the value of the ApplyImmediately parameter.  Default: 8182",
          args: {
            name: "integer",
          },
        },
        {
          name: "--publicly-accessible",
          description: "This flag should no longer be used",
        },
        {
          name: "--no-publicly-accessible",
          description: "This flag should no longer be used",
        },
        {
          name: "--monitoring-role-arn",
          description:
            "The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-iam-role-name",
          description: "Not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--promotion-tier",
          description:
            "A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid Values: 0 - 15",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. You can enable IAM database authentication for the following database engines Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB cluster. For more information, see ModifyDBCluster. Default: false",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. You can enable IAM database authentication for the following database engines Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB cluster. For more information, see ModifyDBCluster. Default: false",
        },
        {
          name: "--enable-performance-insights",
          description: "(Not supported by Neptune)",
        },
        {
          name: "--no-enable-performance-insights",
          description: "(Not supported by Neptune)",
        },
        {
          name: "--performance-insights-kms-key-id",
          description: "(Not supported by Neptune)",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloudwatch-logs-export-configuration",
          description:
            "The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See Deleting a DB Instance",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See Deleting a DB Instance",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request.  Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.   After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon Neptune console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified",
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
            "An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request. Valid Values (for the application method): immediate | pending-reboot   You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover",
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
        "Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region",
      options: [
        {
          name: "--db-subnet-group-name",
          description:
            "The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup",
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
        "Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the AddSourceIdentifierToSubscription and RemoveSourceIdentifierFromSubscription calls. You can see a list of the event categories for a given SourceType by using the DescribeEventCategories action",
      options: [
        {
          name: "--subscription-name",
          description: "The name of the event notification subscription",
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
            "The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned. Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the DescribeEventCategories action",
          args: {
            name: "list",
          },
        },
        {
          name: "--enabled",
          description:
            "A Boolean value; set to true to activate the subscription",
        },
        {
          name: "--no-enabled",
          description:
            "A Boolean value; set to true to activate the subscription",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The DB cluster identifier for the global cluster being modified. This parameter is not case-sensitive. Constraints: Must match the identifier of an existing global database cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-global-cluster-identifier",
          description:
            "A new cluster identifier to assign to the global database. This value is stored as a lowercase string. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens   Example: my-cluster2",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "Indicates whether the global database has deletion protection enabled. The global database cannot be deleted when deletion protection is enabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "Indicates whether the global database has deletion protection enabled. The global database cannot be deleted when deletion protection is enabled",
        },
        {
          name: "--engine-version",
          description:
            "The version number of the database engine to which you want to upgrade. Changing this parameter will result in an outage. The change is applied during the next maintenance window unless ApplyImmediately is enabled. To list all of the available Neptune engine versions, use the following command:",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades if you specify a value for the EngineVersion parameter that is a different major version than the DB cluster's current version. If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version, so you will need to apply any custom parameter groups after completing the upgrade",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "A value that indicates whether major version upgrades are allowed. Constraints: You must allow major version upgrades if you specify a value for the EngineVersion parameter that is a different major version than the DB cluster's current version. If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version, so you will need to apply any custom parameter groups after completing the upgrade",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Not supported",
      options: [
        {
          name: "--db-cluster-identifier",
          description: "Not supported",
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
      name: "reboot-db-instance",
      description:
        "You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting",
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
            "When true, the reboot is conducted through a MultiAZ failover. Constraint: You can't specify true if the instance is not configured for MultiAZ",
        },
        {
          name: "--no-force-failover",
          description:
            "When true, the reboot is conducted through a MultiAZ failover. Constraint: You can't specify true if the instance is not configured for MultiAZ",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster",
      options: [
        {
          name: "--global-cluster-identifier",
          description:
            "The identifier of the Neptune global database from which to detach the specified Neptune DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The Amazon Resource Name (ARN) identifying the cluster to be detached from the Neptune global database cluster",
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
        "Disassociates an Identity and Access Management (IAM) role from a DB cluster",
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
            "The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for example arn:aws:iam::123456789012:role/NeptuneAccessRole",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-name",
          description:
            "The name of the feature for the DB cluster that the IAM role is to be disassociated from. For the list of supported feature names, see DescribeDBEngineVersions",
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
        "Removes a source identifier from an existing event notification subscription",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the event notification subscription you want to remove a source identifier from",
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
      description: "Removes metadata tags from an Amazon Neptune resource",
      options: [
        {
          name: "--resource-name",
          description:
            "The Amazon Neptune resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see  Constructing an Amazon Resource Name (ARN)",
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
        "Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: ParameterName and ApplyMethod. To reset the entire DB cluster parameter group, specify the DBClusterParameterGroupName and ResetAllParameters parameters.  When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request. You must call RebootDBInstance for every DB instance in your DB cluster that you want the updated static parameter to apply to",
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
            "A value that is set to true to reset all parameters in the DB cluster parameter group to their default values, and false otherwise. You can't use this parameter if there is a list of parameter names specified for the Parameters parameter",
        },
        {
          name: "--no-reset-all-parameters",
          description:
            "A value that is set to true to reset all parameters in the DB cluster parameter group to their default values, and false otherwise. You can't use this parameter if there is a list of parameter names specified for the Parameters parameter",
        },
        {
          name: "--parameters",
          description:
            "A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the ResetAllParameters parameter is set to true",
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
            "Specifies whether (true) or not (false) to reset all parameters in the DB parameter group to default values. Default: true",
        },
        {
          name: "--no-reset-all-parameters",
          description:
            "Specifies whether (true) or not (false) to reset all parameters in the DB parameter group to default values. Default: true",
        },
        {
          name: "--parameters",
          description:
            "To reset the entire DB parameter group, specify the DBParameterGroup name and ResetAllParameters parameters. To reset specific parameters, provide a list of the following: ParameterName and ApplyMethod. A maximum of 20 parameters can be modified in a single request. Valid Values (for Apply method): pending-reboot",
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
      name: "restore-db-cluster-from-snapshot",
      description:
        "Creates a new DB cluster from a DB snapshot or DB cluster snapshot. If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group. If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group",
      options: [
        {
          name: "--availability-zones",
          description:
            "Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-identifier",
          description:
            "The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   First character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens   Example: my-snapshot-id",
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
            "The version of the database engine to use for the new DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port number on which the new DB cluster accepts connections. Constraints: Value must be 1150-65535  Default: The same port as the original DB cluster",
          args: {
            name: "integer",
          },
        },
        {
          name: "--db-subnet-group-name",
          description:
            "The name of the DB subnet group to use for the new DB cluster. Constraints: If supplied, must match the name of an existing DBSubnetGroup. Example: mySubnetgroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "Not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--option-group-name",
          description: "(Not supported by Neptune)",
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
            "The Amazon KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key. If you do not specify a value for the KmsKeyId parameter, then the following will occur:   If the DB snapshot or DB cluster snapshot in SnapshotIdentifier is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.   If the DB snapshot or DB cluster snapshot in SnapshotIdentifier is not encrypted, then the restored DB cluster is not encrypted",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. Default: false",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. Default: false",
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with the new DB cluster. Constraints:   If supplied, must match the name of an existing DBClusterParameterGroup",
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
            "If set to true, tags are copied to any snapshot of the restored DB cluster that is created",
        },
        {
          name: "--no-copy-tags-to-snapshot",
          description:
            "If set to true, tags are copied to any snapshot of the restored DB cluster that is created",
        },
        {
          name: "--serverless-v2-scaling-configuration",
          description:
            "Contains the scaling configuration of a Neptune Serverless DB cluster. For more information, see Using Amazon Neptune Serverless in the Amazon Neptune User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB cluster. Valid values: standard, iopt1  Default: standard",
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
        "Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before LatestRestorableTime for up to BackupRetentionPeriod days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.  This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the CreateDBInstance action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in DBClusterIdentifier. You can create DB instances only after the RestoreDBClusterToPointInTime action has completed and the DB cluster is available",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The name of the new DB cluster to be created. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens   First character must be a letter   Cannot end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-type",
          description:
            "The type of restore to be performed. You can specify one of the following values:    full-copy - The new DB cluster is restored as a full copy of the source DB cluster.    copy-on-write - The new DB cluster is restored as a clone of the source DB cluster.   If you don't specify a RestoreType value, then the new DB cluster is restored as a full copy of the source DB cluster",
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
            "The date and time to restore the DB cluster to. Valid Values: Value must be a time in Universal Coordinated Time (UTC) format Constraints:   Must be before the latest restorable time for the DB instance   Must be specified if UseLatestRestorableTime parameter is not provided   Cannot be specified if UseLatestRestorableTime parameter is true   Cannot be specified if RestoreType parameter is copy-on-write    Example: 2015-03-07T23:45:00Z",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--use-latest-restorable-time",
          description:
            "A value that is set to true to restore the DB cluster to the latest restorable backup time, and false otherwise. Default: false  Constraints: Cannot be specified if RestoreToTime parameter is provided",
        },
        {
          name: "--no-use-latest-restorable-time",
          description:
            "A value that is set to true to restore the DB cluster to the latest restorable backup time, and false otherwise. Default: false  Constraints: Cannot be specified if RestoreToTime parameter is provided",
        },
        {
          name: "--port",
          description:
            "The port number on which the new DB cluster accepts connections. Constraints: Value must be 1150-65535  Default: The same port as the original DB cluster",
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
          description: "(Not supported by Neptune)",
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
          description: "The tags to be applied to the restored DB cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key. You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the KmsKeyId parameter. If you do not specify a value for the KmsKeyId parameter, then the following will occur:   If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.   If the DB cluster is not encrypted, then the restored DB cluster is not encrypted.   If DBClusterIdentifier refers to a DB cluster that is not encrypted, then the restore request is rejected",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-iam-database-authentication",
          description:
            "True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. Default: false",
        },
        {
          name: "--no-enable-iam-database-authentication",
          description:
            "True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false. Default: false",
        },
        {
          name: "--enable-cloudwatch-logs-exports",
          description:
            "The list of logs that the restored DB cluster is to export to CloudWatch Logs",
          args: {
            name: "list",
          },
        },
        {
          name: "--db-cluster-parameter-group-name",
          description:
            "The name of the DB cluster parameter group to associate with the new DB cluster. Constraints:   If supplied, must match the name of an existing DBClusterParameterGroup",
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
          name: "--serverless-v2-scaling-configuration",
          description:
            "Contains the scaling configuration of a Neptune Serverless DB cluster. For more information, see Using Amazon Neptune Serverless in the Amazon Neptune User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-type",
          description:
            "Specifies the storage type to be associated with the DB cluster. Valid values: standard, iopt1  Default: standard",
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
      name: "start-db-cluster",
      description:
        "Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier of the Neptune DB cluster to be started. This parameter is stored as a lowercase string",
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
      name: "stop-db-cluster",
      description:
        "Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups. Neptune also retains the transaction logs so you can do a point-in-time restore if necessary",
      options: [
        {
          name: "--db-cluster-identifier",
          description:
            "The DB cluster identifier of the Neptune DB cluster to be stopped. This parameter is stored as a lowercase string",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
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
                "A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.    engine - Accepts an engine name (such as neptune), and restricts the results list to DB instances created by that engine.   For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB instances are returned, you could use the following command:",
              args: {
                name: "list",
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
            "Wait until JMESPath query DBInstances[].DBInstanceStatus returns deleted for all elements when polling with ``describe-db-instances``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
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
                "A filter that specifies one or more DB instances to describe. Supported filters:    db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.    engine - Accepts an engine name (such as neptune), and restricts the results list to DB instances created by that engine.   For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB instances are returned, you could use the following command:",
              args: {
                name: "list",
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
      ],
    },
  ],
};
export default completionSpec;
