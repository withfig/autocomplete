const completionSpec: Fig.Spec = {
  name: "ebs",
  description:
    "You can use the Amazon Elastic Block Store (Amazon EBS) direct APIs to create Amazon EBS snapshots, write data directly to your snapshots, read data on your snapshots, and identify the differences or changes between two snapshots. If you\u2019re an independent software vendor (ISV) who offers backup services for Amazon EBS, the EBS direct APIs make it more efficient and cost-effective to track incremental changes on your Amazon EBS volumes through snapshots. This can be done without having to create new volumes from snapshots, and then use Amazon Elastic Compute Cloud (Amazon EC2) instances to compare the differences. You can create incremental snapshots directly from data on-premises into volumes and the cloud to use for quick disaster recovery. With the ability to write and read snapshots, you can write your on-premises data to an snapshot during a disaster. Then after recovery, you can restore it back to Amazon Web Services or on-premises from the snapshot. You no longer need to build and maintain complex mechanisms to copy data to and from Amazon EBS. This API reference provides detailed information about the actions, data types, parameters, and errors of the EBS direct APIs. For more information about the elements that make up the EBS direct APIs, and examples of how to use them effectively, see Accessing the Contents of an Amazon EBS Snapshot in the Amazon Elastic Compute Cloud User Guide. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas for the EBS direct APIs, see Amazon Elastic Block Store Endpoints and Quotas in the Amazon Web Services General Reference",
  subcommands: [
    {
      name: "complete-snapshot",
      description:
        "Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been completed.  You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide",
      options: [
        {
          name: "--snapshot-id",
          description: "The ID of the snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--changed-blocks-count",
          description: "The number of blocks that were written to the snapshot",
          args: {
            name: "integer",
          },
        },
        {
          name: "--checksum",
          description:
            "An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To generate the aggregated checksum using the linear aggregation method, arrange the checksums for each written block in ascending order of their block index, concatenate them to form a single string, and then generate the checksum on the entire string using the SHA256 algorithm",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-aggregation-method",
          description:
            "The aggregation method used to generate the checksum. Currently, the only supported aggregation method is LINEAR",
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
      name: "get-snapshot-block",
      description:
        "Returns the data in a block in an Amazon Elastic Block Store snapshot.  You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide",
      options: [
        {
          name: "--snapshot-id",
          description:
            "The ID of the snapshot containing the block from which to get data.  If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see  Using encryption in the Amazon Elastic Compute Cloud User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--block-index",
          description:
            "The block index of the block in which to read the data. A block index is a logical index in units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/524288). The logical offset of the data must be 512 KiB aligned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--block-token",
          description:
            "The block token of the block from which to get data. You can obtain the BlockToken by running the ListChangedBlocks or ListSnapshotBlocks operations",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "list-changed-blocks",
      description:
        "Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.  You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide",
      options: [
        {
          name: "--first-snapshot-id",
          description:
            "The ID of the first snapshot to use for the comparison.  The FirstSnapshotID parameter must be specified with a SecondSnapshotId parameter; otherwise, an error occurs",
          args: {
            name: "string",
          },
        },
        {
          name: "--second-snapshot-id",
          description:
            "The ID of the second snapshot to use for the comparison.  The SecondSnapshotId parameter must be specified with a FirstSnapshotID parameter; otherwise, an error occurs",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to request the next page of results. If you specify NextToken, then StartingBlockIndex is ignored",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of blocks to be returned by the request. Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned NextToken value. The value of NextToken is null when there are no more blocks to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--starting-block-index",
          description:
            "The block index from which the comparison should start. The list in the response will start from this block index or the next valid block index in the snapshots. If you specify NextToken, then StartingBlockIndex is ignored",
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
      name: "list-snapshot-blocks",
      description:
        "Returns information about the blocks in an Amazon Elastic Block Store snapshot.  You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide",
      options: [
        {
          name: "--snapshot-id",
          description:
            "The ID of the snapshot from which to get block indexes and block tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to request the next page of results. If you specify NextToken, then StartingBlockIndex is ignored",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of blocks to be returned by the request. Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned NextToken value. The value of NextToken is null when there are no more blocks to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--starting-block-index",
          description:
            "The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot. If you specify NextToken, then StartingBlockIndex is ignored",
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
      name: "put-snapshot-block",
      description:
        "Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB sectors.  You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide",
      options: [
        {
          name: "--snapshot-id",
          description:
            "The ID of the snapshot.  If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see  Using encryption in the Amazon Elastic Compute Cloud User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--block-index",
          description:
            "The block index of the block in which to write the data. A block index is a logical index in units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/524288). The logical offset of the data must be 512 KiB aligned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--block-data",
          description:
            "The data to write to the block. The block data is not signed as part of the Signature Version 4 signing process. As a result, you must generate and provide a Base64-encoded SHA256 checksum for the block data using the x-amz-Checksum header. Also, you must specify the checksum algorithm using the x-amz-Checksum-Algorithm header. The checksum that you provide is part of the Signature Version 4 signing process. It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity of the data. If the checksums do not correspond, the request fails. For more information, see  Using checksums with the EBS direct APIs in the Amazon Elastic Compute Cloud User Guide",
          args: {
            name: "blob",
          },
        },
        {
          name: "--data-length",
          description:
            "The size of the data to write to the block, in bytes. Currently, the only supported size is 524288 bytes. Valid values: 524288",
          args: {
            name: "integer",
          },
        },
        {
          name: "--progress",
          description: "The progress of the write process, as a percentage",
          args: {
            name: "integer",
          },
        },
        {
          name: "--checksum",
          description:
            "A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256",
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
      name: "start-snapshot",
      description:
        "Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes.  After creating the snapshot, use  PutSnapshotBlock to write blocks of data to the snapshot.  You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide",
      options: [
        {
          name: "--volume-size",
          description:
            "The size of the volume, in GiB. The maximum size is 65536 GiB (64 TiB)",
          args: {
            name: "long",
          },
        },
        {
          name: "--parent-snapshot-id",
          description:
            "The ID of the parent snapshot. If there is no parent snapshot, or if you are creating the first snapshot for an on-premises volume, omit this parameter. You can't specify ParentSnapshotId and Encrypted in the same request. If you specify both parameters, the request fails with ValidationException. The encryption status of the snapshot depends on the values that you specify for Encrypted, KmsKeyArn, and ParentSnapshotId, and whether your Amazon Web Services account is enabled for  encryption by default. For more information, see  Using encryption in the Amazon Elastic Compute Cloud User Guide.  If you specify an encrypted parent snapshot, you must have permission to use the KMS key that was used to encrypt the parent snapshot. For more information, see  Permissions to use Key Management Service keys in the Amazon Elastic Compute Cloud User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to apply to the snapshot",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "A description for the snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK. For more information, see  Idempotency for StartSnapshot API in the Amazon Elastic Compute Cloud User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--encrypted",
          description:
            "Indicates whether to encrypt the snapshot. You can't specify Encrypted and  ParentSnapshotId in the same request. If you specify both parameters, the request fails with ValidationException. The encryption status of the snapshot depends on the values that you specify for Encrypted, KmsKeyArn, and ParentSnapshotId, and whether your Amazon Web Services account is enabled for  encryption by default. For more information, see  Using encryption in the Amazon Elastic Compute Cloud User Guide.  To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see  Permissions to use Key Management Service keys in the Amazon Elastic Compute Cloud User Guide",
        },
        {
          name: "--no-encrypted",
          description:
            "Indicates whether to encrypt the snapshot. You can't specify Encrypted and  ParentSnapshotId in the same request. If you specify both parameters, the request fails with ValidationException. The encryption status of the snapshot depends on the values that you specify for Encrypted, KmsKeyArn, and ParentSnapshotId, and whether your Amazon Web Services account is enabled for  encryption by default. For more information, see  Using encryption in the Amazon Elastic Compute Cloud User Guide.  To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see  Permissions to use Key Management Service keys in the Amazon Elastic Compute Cloud User Guide",
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to be used to encrypt the snapshot. The encryption status of the snapshot depends on the values that you specify for Encrypted, KmsKeyArn, and ParentSnapshotId, and whether your Amazon Web Services account is enabled for  encryption by default. For more information, see  Using encryption in the Amazon Elastic Compute Cloud User Guide.  To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see  Permissions to use Key Management Service keys in the Amazon Elastic Compute Cloud User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout",
          description:
            "The amount of time (in minutes) after which the snapshot is automatically cancelled if:   No blocks are written to the snapshot.   The snapshot is not completed after writing the last block of data.   If no value is specified, the timeout defaults to 60 minutes",
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
  ],
};
export default completionSpec;
