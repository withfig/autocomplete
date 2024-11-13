const completionSpec: Fig.Spec = {
  name: "docdb-elastic",
  description:
    "Amazon DocumentDB elastic clusters Amazon DocumentDB elastic-clusters support workloads with millions of reads/writes per second and petabytes of storage capacity. Amazon DocumentDB elastic clusters also simplify how developers interact with Amazon DocumentDB elastic-clusters by eliminating the need to choose, manage or upgrade instances. Amazon DocumentDB elastic-clusters were created to:   provide a solution for customers looking for a database that provides virtually limitless scale with rich query capabilities and MongoDB API compatibility.   give customers higher connection limits, and to reduce downtime from patching.   continue investing in a cloud-native, elastic, and class leading architecture for JSON workloads",
  subcommands: [
    {
      name: "apply-pending-maintenance-action",
      description:
        "The type of pending maintenance action to be applied to the resource",
      options: [
        {
          name: "--apply-action",
          description:
            "The pending maintenance action to apply to the resource. Valid actions are:    ENGINE_UPDATE      ENGINE_UPGRADE     SECURITY_UPDATE     OS_UPDATE     MASTER_USER_PASSWORD_UPDATE",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-on",
          description:
            "A specific date to apply the pending maintenance action. Required if opt-in-type is APPLY_ON. Format: yyyy/MM/dd HH:mm-yyyy/MM/dd HH:mm",
          args: {
            name: "string",
          },
        },
        {
          name: "--opt-in-type",
          description:
            "A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type IMMEDIATE can't be undone",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon DocumentDB Amazon Resource Name (ARN) of the resource to which the pending maintenance action applies",
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
      name: "copy-cluster-snapshot",
      description: "Copies a snapshot of an elastic cluster",
      options: [
        {
          name: "--copy-tags",
          description:
            "Set to true to copy all tags from the source cluster snapshot to the target elastic cluster snapshot. The default is false",
        },
        {
          name: "--no-copy-tags",
          description:
            "Set to true to copy all tags from the source cluster snapshot to the target elastic cluster snapshot. The default is false",
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Web Services KMS key ID for an encrypted elastic cluster snapshot. The Amazon Web Services KMS key ID is the Amazon Resource Name (ARN), Amazon Web Services KMS key identifier, or the Amazon Web Services KMS key alias for the Amazon Web Services KMS encryption key. If you copy an encrypted elastic cluster snapshot from your Amazon Web Services account, you can specify a value for KmsKeyId to encrypt the copy with a new Amazon Web ServicesS KMS encryption key. If you don't specify a value for KmsKeyId, then the copy of the elastic cluster snapshot is encrypted with the same AWS KMS key as the source elastic cluster snapshot. To copy an encrypted elastic cluster snapshot to another Amazon Web Services region, set KmsKeyId to the Amazon Web Services KMS key ID that you want to use to encrypt the copy of the elastic cluster snapshot in the destination region. Amazon Web Services KMS encryption keys are specific to the Amazon Web Services region that they are created in, and you can't use encryption keys from one Amazon Web Services region in another Amazon Web Services region. If you copy an unencrypted elastic cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-arn",
          description:
            "The Amazon Resource Name (ARN) identifier of the elastic cluster snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be assigned to the elastic cluster snapshot",
          args: {
            name: "map",
          },
        },
        {
          name: "--target-snapshot-name",
          description:
            "The identifier of the new elastic cluster snapshot to create from the source cluster snapshot. This parameter is not case sensitive. Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: elastic-cluster-snapshot-5",
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
      name: "create-cluster",
      description:
        "Creates a new Amazon DocumentDB elastic cluster and returns its cluster structure",
      options: [
        {
          name: "--admin-user-name",
          description:
            "The name of the Amazon DocumentDB elastic clusters administrator.  Constraints:   Must be from 1 to 63 letters or numbers.   The first character must be a letter.   Cannot be a reserved word",
          args: {
            name: "string",
          },
        },
        {
          name: "--admin-user-password",
          description:
            'The password for the Amazon DocumentDB elastic clusters administrator. The password can contain any printable ASCII characters.  Constraints:   Must contain from 8 to 100 characters.   Cannot contain a forward slash (/), double quote ("), or the "at" symbol (@)',
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-type",
          description:
            "The authentication type used to determine where to fetch the password used for accessing the elastic cluster. Valid types are PLAIN_TEXT or SECRET_ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automatic snapshots are retained",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description: "The client token for the elastic cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description:
            "The name of the new elastic cluster. This parameter is stored as a lowercase string.  Constraints:   Must contain from 1 to 63 letters, numbers, or hyphens.   The first character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.    Example: my-cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The KMS key identifier to use to encrypt the new elastic cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key. If an encryption key is not specified, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, as determined by the backupRetentionPeriod",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi   Default: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.  Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun  Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--shard-capacity",
          description:
            "The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64",
          args: {
            name: "integer",
          },
        },
        {
          name: "--shard-count",
          description:
            "The number of shards assigned to the elastic cluster. Maximum is 32",
          args: {
            name: "integer",
          },
        },
        {
          name: "--shard-instance-count",
          description:
            "The number of replica instances applying to all shards in the elastic cluster. A shardInstanceCount value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability",
          args: {
            name: "integer",
          },
        },
        {
          name: "--subnet-ids",
          description: "The Amazon EC2 subnet IDs for the new elastic cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags to be assigned to the new elastic cluster",
          args: {
            name: "map",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with the new elastic cluster",
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
      name: "create-cluster-snapshot",
      description: "Creates a snapshot of an elastic cluster",
      options: [
        {
          name: "--cluster-arn",
          description:
            "The ARN identifier of the elastic cluster of which you want to create a snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-name",
          description: "The name of the new elastic cluster snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be assigned to the new elastic cluster snapshot",
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
      name: "delete-cluster",
      description: "Delete an elastic cluster",
      options: [
        {
          name: "--cluster-arn",
          description:
            "The ARN identifier of the elastic cluster that is to be deleted",
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
      name: "delete-cluster-snapshot",
      description: "Delete an elastic cluster snapshot",
      options: [
        {
          name: "--snapshot-arn",
          description:
            "The ARN identifier of the elastic cluster snapshot that is to be deleted",
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
      name: "get-cluster",
      description: "Returns information about a specific elastic cluster",
      options: [
        {
          name: "--cluster-arn",
          description: "The ARN identifier of the elastic cluster",
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
      name: "get-cluster-snapshot",
      description:
        "Returns information about a specific elastic cluster snapshot",
      options: [
        {
          name: "--snapshot-arn",
          description: "The ARN identifier of the elastic cluster snapshot",
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
      name: "get-pending-maintenance-action",
      description: "Retrieves all maintenance actions that are pending",
      options: [
        {
          name: "--resource-arn",
          description:
            "Retrieves pending maintenance actions for a specific Amazon Resource Name (ARN)",
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
      name: "list-cluster-snapshots",
      description:
        "Returns information about snapshots for a specified elastic cluster",
      options: [
        {
          name: "--cluster-arn",
          description: "The ARN identifier of the elastic cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of elastic cluster snapshot results to receive in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by max-results. If there is no more data in the responce, the nextToken will not be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-type",
          description:
            "The type of cluster snapshots to be returned. You can specify one of the following values:    automated - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.    manual - Return all cluster snapshots that you have manually created for your Amazon Web Services account",
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
      name: "list-clusters",
      description:
        "Returns information about provisioned Amazon DocumentDB elastic clusters",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of elastic cluster snapshot results to receive in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by max-results. If there is no more data in the responce, the nextToken will not be returned",
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
      name: "list-pending-maintenance-actions",
      description:
        "Retrieves a list of all maintenance actions that are pending",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If more records exist than the specified maxResults value, a pagination token (marker) is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by maxResults",
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
      name: "list-tags-for-resource",
      description: "Lists all tags on a elastic cluster resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN identifier of the elastic cluster resource",
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
      name: "restore-cluster-from-snapshot",
      description: "Restores an elastic cluster from a snapshot",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the elastic cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The KMS key identifier to use to encrypt the new Amazon DocumentDB elastic clusters cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key. If an encryption key is not specified here, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--shard-capacity",
          description:
            "The capacity of each shard in the new restored elastic cluster",
          args: {
            name: "integer",
          },
        },
        {
          name: "--shard-instance-count",
          description:
            "The number of replica instances applying to all shards in the elastic cluster. A shardInstanceCount value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability",
          args: {
            name: "integer",
          },
        },
        {
          name: "--snapshot-arn",
          description: "The ARN identifier of the elastic cluster snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description: "The Amazon EC2 subnet IDs for the elastic cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A list of the tag names to be assigned to the restored elastic cluster, in the form of an array of key-value pairs in which the key is the tag name and the value is the key value",
          args: {
            name: "map",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with the elastic cluster",
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
      name: "start-cluster",
      description:
        "Restarts the stopped elastic cluster that is specified by clusterARN",
      options: [
        {
          name: "--cluster-arn",
          description: "The ARN identifier of the elastic cluster",
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
      name: "stop-cluster",
      description:
        "Stops the running elastic cluster that is specified by clusterArn. The elastic cluster must be in the available state",
      options: [
        {
          name: "--cluster-arn",
          description: "The ARN identifier of the elastic cluster",
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
      description: "Adds metadata tags to an elastic cluster resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN identifier of the elastic cluster resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that are assigned to the elastic cluster resource",
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
      description: "Removes metadata tags from an elastic cluster resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN identifier of the elastic cluster resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The tag keys to be removed from the elastic cluster resource",
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
      name: "update-cluster",
      description:
        "Modifies an elastic cluster. This includes updating admin-username/password, upgrading the API version, and setting up a backup window and maintenance window",
      options: [
        {
          name: "--admin-user-password",
          description:
            'The password associated with the elastic cluster administrator. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).  Constraints: Must contain from 8 to 100 characters',
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-type",
          description:
            "The authentication type used to determine where to fetch the password used for accessing the elastic cluster. Valid types are PLAIN_TEXT or SECRET_ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-retention-period",
          description:
            "The number of days for which automatic snapshots are retained",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description: "The client token for the elastic cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-arn",
          description: "The ARN identifier of the elastic cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-backup-window",
          description:
            "The daily time range during which automated backups are created if automated backups are enabled, as determined by the backupRetentionPeriod",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi   Default: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.  Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun  Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--shard-capacity",
          description:
            "The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64",
          args: {
            name: "integer",
          },
        },
        {
          name: "--shard-count",
          description:
            "The number of shards assigned to the elastic cluster. Maximum is 32",
          args: {
            name: "integer",
          },
        },
        {
          name: "--shard-instance-count",
          description:
            "The number of replica instances applying to all shards in the elastic cluster. A shardInstanceCount value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability",
          args: {
            name: "integer",
          },
        },
        {
          name: "--subnet-ids",
          description: "The Amazon EC2 subnet IDs for the elastic cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "A list of EC2 VPC security groups to associate with the elastic cluster",
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
