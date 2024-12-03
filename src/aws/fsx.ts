const completionSpec: Fig.Spec = {
  name: "fsx",
  description:
    "Amazon FSx is a fully managed service that makes it easy for storage and application administrators to launch and use shared file storage",
  subcommands: [
    {
      name: "associate-file-system-aliases",
      description:
        "Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see Working with DNS Aliases and Walkthrough 5: Using DNS aliases to access your file system, including additional steps you must take to be able to access your file system using a DNS alias. The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "Specifies the file system with which you want to associate one or more DNS aliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--aliases",
          description:
            "An array of one or more DNS alias names to associate with the file system. The alias name has to comply with the following formatting requirements:   Formatted as a fully-qualified domain name (FQDN),  hostname.domain , for example, accounting.corp.example.com.   Can contain alphanumeric characters and the hyphen (-).   Cannot start or end with a hyphen.   Can start with a numeric.   For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes",
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
      name: "cancel-data-repository-task",
      description:
        "Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the PENDING or EXECUTING state. When you cancel am export task, Amazon FSx does the following.   Any files that FSx has already exported are not reverted.   FSx continues to export any files that are in-flight when the cancel operation is received.   FSx does not export any files that have not yet been exported.   For a release task, Amazon FSx will stop releasing files upon cancellation. Any files that have already been released will remain in the released state",
      options: [
        {
          name: "--task-id",
          description: "Specifies the data repository task to cancel",
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
      name: "copy-backup",
      description:
        "Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account. You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: aws (Standard Regions), aws-cn (China Regions), and aws-us-gov (Amazon Web Services GovCloud [US] Regions). You can also use backup copies to clone your file dataset to another Region or within the same Region. You can use the SourceRegion parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the us-west-1 Region and want to copy a backup from the us-east-2 Region, you specify us-east-2 in the SourceRegion parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy). For more information about creating backup copies, see  Copying backups in the Amazon FSx for Windows User Guide, Copying backups in the Amazon FSx for Lustre User Guide, and Copying backups in the Amazon FSx for OpenZFS User Guide",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-backup-id",
          description:
            "The ID of the source backup. Specifies the ID of the backup that's being copied",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-region",
          description:
            "The source Amazon Web Services Region of the backup. Specifies the Amazon Web Services Region from which the backup is being copied. The source and destination Regions must be in the same Amazon Web Services partition. If you don't specify a Region, SourceRegion defaults to the Region where the request is sent from (in-Region copy)",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:   Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only.  SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account.   Amazon FSx for NetApp ONTAP   Amazon FSx for OpenZFS   Amazon FSx for Windows File Server   If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags",
          description:
            "A Boolean flag indicating whether tags from the source backup should be copied to the backup copy. This value defaults to false. If you set CopyTags to true and the source backup has existing tags, you can use the Tags parameter to create new tags, provided that the sum of the source backup tags and the new tags doesn't exceed 50. Both sets of tags are merged. If there are tag conflicts (for example, two tags with the same key but different values), the tags created with the Tags parameter take precedence",
        },
        {
          name: "--no-copy-tags",
          description:
            "A Boolean flag indicating whether tags from the source backup should be copied to the backup copy. This value defaults to false. If you set CopyTags to true and the source backup has existing tags, you can use the Tags parameter to create new tags, provided that the sum of the source backup tags and the new tags doesn't exceed 50. Both sets of tags are merged. If there are tag conflicts (for example, two tags with the same key but different values), the tags created with the Tags parameter take precedence",
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements",
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
      name: "copy-snapshot-and-update-volume",
      description:
        "Updates an existing volume by using a snapshot from another Amazon FSx for OpenZFS file system. For more information, see on-demand data replication in the Amazon FSx for OpenZFS User Guide",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-id",
          description:
            "Specifies the ID of the volume that you are copying the snapshot to",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-snapshot-arn",
          description:
            "The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-strategy",
          description:
            "Specifies the strategy to use when copying data from a snapshot to the volume.     FULL_COPY - Copies all data from the snapshot to the volume.     INCREMENTAL_COPY - Copies only the snapshot data that's changed since the previous replication.     CLONE isn't a valid copy strategy option for the CopySnapshotAndUpdateVolume operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--options",
          description:
            "Confirms that you want to delete data on the destination volume that wasn\u2019t there during the previous snapshot replication. Your replication will fail if you don\u2019t include an option for a specific type of data and that data is on your destination. For example, if you don\u2019t include DELETE_INTERMEDIATE_SNAPSHOTS and there are intermediate snapshots on the destination, you can\u2019t copy the snapshot.    DELETE_INTERMEDIATE_SNAPSHOTS - Deletes snapshots on the destination volume that aren\u2019t on the source volume.    DELETE_CLONED_VOLUMES - Deletes snapshot clones on the destination volume that aren't on the source volume.    DELETE_INTERMEDIATE_DATA - Overwrites snapshots on the destination volume that don\u2019t match the source snapshot that you\u2019re copying",
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
      name: "create-backup",
      description:
        "Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume. For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:   A Persistent deployment type   Are not linked to a data repository   For more information about backups, see the following:   For Amazon FSx for Lustre, see Working with FSx for Lustre backups.   For Amazon FSx for Windows, see Working with FSx for Windows backups.   For Amazon FSx for NetApp ONTAP, see Working with FSx for NetApp ONTAP backups.   For Amazon FSx for OpenZFS, see Working with FSx for OpenZFS backups.   If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following:    Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the backup.   By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateBackup operation returns while the backup's lifecycle state is still CREATING. You can check the backup creation status by calling the DescribeBackups operation, which returns the backup state along with other information",
      options: [
        {
          name: "--file-system-id",
          description: "The ID of the file system to back up",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) The tags to apply to the backup at backup creation. The key value of the Name tag appears in the console as the backup name. If you have set CopyTagsToBackups to true, and you specify one or more tags using the CreateBackup operation, no existing file system tags are copied from the file system to the backup",
          args: {
            name: "list",
          },
        },
        {
          name: "--volume-id",
          description:
            "(Optional) The ID of the FSx for ONTAP volume to back up",
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
      name: "create-data-repository-association",
      description:
        "Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding scratch_1 deployment type. Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket.   CreateDataRepositoryAssociation isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the CreateFileCache operation",
      options: [
        {
          name: "--file-system-id",
          description:
            "The globally unique ID of the file system, assigned by Amazon FSx",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-path",
          description:
            'A path on the file system that points to a high-level directory (such as /ns1/) or subdirectory (such as /ns1/subdir/) that will be mapped 1-1 with DataRepositoryPath. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path /ns1/, then you cannot link another data repository with file system path /ns1/ns2. This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.  If you specify only a forward slash (/) as the file system path, you can link only one data repository to the file system. You can only specify "/" as the file system path for the first data repository associated with a file system',
          args: {
            name: "string",
          },
        },
        {
          name: "--data-repository-path",
          description:
            "The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format s3://bucket-name/prefix/ (where prefix is optional). This path specifies where in the S3 data repository files will be imported from or exported to",
          args: {
            name: "string",
          },
        },
        {
          name: "--batch-import-meta-data-on-create",
          description:
            "Set to true to run an import data repository task to import metadata from the data repository to the file system after the data repository association is created. Default is false",
        },
        {
          name: "--no-batch-import-meta-data-on-create",
          description:
            "Set to true to run an import data repository task to import metadata from the data repository to the file system after the data repository association is created. Default is false",
        },
        {
          name: "--imported-file-chunk-size",
          description:
            "For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB",
          args: {
            name: "integer",
          },
        },
        {
          name: "--s3",
          description:
            "The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements",
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
      name: "create-data-repository-task",
      description:
        "Creates an Amazon FSx for Lustre data repository task. A CreateDataRepositoryTask operation will fail if a data repository is not linked to the FSx file system. You use import and export data repository tasks to perform bulk operations between your FSx for Lustre file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. You use release data repository tasks to release data from your file system for files that are exported to S3. The metadata of released files remains on the file system so users or applications can still access released files by reading the files again, which will restore data from Amazon S3 to the FSx for Lustre file system. To learn more about data repository tasks, see Data Repository Tasks. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket",
      options: [
        {
          name: "--type",
          description:
            "Specifies the type of data repository task to create.    EXPORT_TO_REPOSITORY tasks export from your Amazon FSx for Lustre file system to a linked data repository.    IMPORT_METADATA_FROM_REPOSITORY tasks import metadata changes from a linked S3 bucket to your Amazon FSx for Lustre file system.    RELEASE_DATA_FROM_FILESYSTEM tasks release files in your Amazon FSx for Lustre file system that have been exported to a linked S3 bucket and that meet your specified release criteria.    AUTO_RELEASE_DATA tasks automatically release files from an Amazon File Cache resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--paths",
          description:
            "A list of paths for the data repository task to use when the task is processed. If a path that you provide isn't valid, the task fails. If you don't provide paths, the default behavior is to export all files to S3 (for export tasks), import all files from S3 (for import tasks), or release all exported files that meet the last accessed time criteria (for release tasks).   For export tasks, the list contains paths on the FSx for Lustre file system from which the files are exported to the Amazon S3 bucket. The default path is the file system root directory. The paths you provide need to be relative to the mount point of the file system. If the mount point is /mnt/fsx and /mnt/fsx/path1 is a directory or file on the file system you want to export, then the path to provide is path1.   For import tasks, the list contains paths in the Amazon S3 bucket from which POSIX metadata changes are imported to the FSx for Lustre file system. The path can be an S3 bucket or prefix in the format s3://bucket-name/prefix (where prefix is optional).   For release tasks, the list contains directory or file paths on the FSx for Lustre file system from which to release exported files. If a directory is specified, files within the directory are released. If a file path is specified, only that file is released. To release all exported files in the file system, specify a forward slash (/) as the path.  A file must also meet the last accessed time criteria specified in for the file to be released",
          args: {
            name: "list",
          },
        },
        {
          name: "--file-system-id",
          description:
            "The globally unique ID of the file system, assigned by Amazon FSx",
          args: {
            name: "string",
          },
        },
        {
          name: "--report",
          description:
            "Defines whether or not Amazon FSx provides a CompletionReport once the task has completed. A CompletionReport provides a detailed report on the files that Amazon FSx processed that meet the criteria specified by the Scope parameter. For more information, see Working with Task Completion Reports",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements",
          args: {
            name: "list",
          },
        },
        {
          name: "--capacity-to-release",
          description:
            "Specifies the amount of data to release, in GiB, by an Amazon File Cache AUTO_RELEASE_DATA task that automatically releases files from the cache",
          args: {
            name: "long",
          },
        },
        {
          name: "--release-configuration",
          description:
            "The configuration that specifies the last accessed time criteria for files that will be released from an Amazon FSx for Lustre file system",
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
      name: "create-file-cache",
      description:
        "Creates a new Amazon File Cache resource. You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, CreateFileCache returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file cache with the specified client request token doesn't exist, CreateFileCache does the following:    Creates a new, empty Amazon File Cache resourcewith an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the cache in JSON format.    The CreateFileCache call returns while the cache's lifecycle state is still CREATING. You can check the cache creation status by calling the DescribeFileCaches operation, which returns the cache state along with other information",
      options: [
        {
          name: "--client-request-token",
          description:
            "An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK. By using the idempotent operation, you can retry a CreateFileCache operation without the risk of creating an extra cache. This approach can be useful when an initial call fails in a way that makes it unclear whether a cache was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a cache, the client receives success as long as the parameters are the same",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-cache-type",
          description:
            "The type of cache that you're creating, which must be LUSTRE",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-cache-type-version",
          description:
            "Sets the Lustre version for the cache that you're creating, which must be 2.12",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-capacity",
          description:
            "The storage capacity of the cache in gibibytes (GiB). Valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB",
          args: {
            name: "integer",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the CreateFileCache operation",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "A list of IDs specifying the security groups to apply to all network interfaces created for Amazon File Cache access. This list isn't returned in later requests to describe the cache",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements",
          args: {
            name: "list",
          },
        },
        {
          name: "--copy-tags-to-data-repository-associations",
          description:
            "A boolean flag indicating whether tags for the cache should be copied to data repository associations. This value defaults to false",
        },
        {
          name: "--no-copy-tags-to-data-repository-associations",
          description:
            "A boolean flag indicating whether tags for the cache should be copied to data repository associations. This value defaults to false",
        },
        {
          name: "--kms-key-id",
          description:
            "Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on an Amazon File Cache. If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The configuration for the Amazon File Cache resource being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-repository-associations",
          description:
            "A list of up to 8 configurations for data repository associations (DRAs) to be created during the cache creation. The DRAs link the cache to either an Amazon S3 data repository or a Network File System (NFS) data repository that supports the NFSv3 protocol. The DRA configurations must meet the following requirements:   All configurations on the list must be of the same data repository type, either all S3 or all NFS. A cache can't link to different data repository types at the same time.   An NFS DRA must link to an NFS file system that supports the NFSv3 protocol.   DRA automatic import and automatic export is not supported",
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
      name: "create-file-system",
      description:
        "Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the CreateFileSystem API operation:   Amazon FSx for Lustre   Amazon FSx for NetApp ONTAP   Amazon FSx for OpenZFS   Amazon FSx for Windows File Server   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following:   Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system in JSON format.    The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information",
      options: [
        {
          name: "--client-request-token",
          description:
            "A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-type",
          description:
            "The type of Amazon FSx file system to create. Valid values are WINDOWS, LUSTRE, ONTAP, and OPENZFS",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-capacity",
          description:
            "Sets the storage capacity of the file system that you're creating, in gibibytes (GiB).  FSx for Lustre file systems - The amount of storage capacity that you can configure depends on the value that you set for StorageType and the Lustre DeploymentType, as follows:   For SCRATCH_2, PERSISTENT_2, and PERSISTENT_1 deployment types using SSD storage type, the valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.   For PERSISTENT_1 HDD file systems, valid values are increments of 6000 GiB for 12 MB/s/TiB file systems and increments of 1800 GiB for 40 MB/s/TiB file systems.   For SCRATCH_1 deployment type, valid values are 1200 GiB, 2400 GiB, and increments of 3600 GiB.    FSx for ONTAP file systems - The amount of storage capacity that you can configure depends on the value of the HAPairs property. The minimum value is calculated as 1,024 * HAPairs and the maximum is calculated as 524,288 * HAPairs.   FSx for OpenZFS file systems - The amount of storage capacity that you can configure is from 64 GiB up to 524,288 GiB (512 TiB).  FSx for Windows File Server file systems - The amount of storage capacity that you can configure depends on the value that you set for StorageType as follows:   For SSD storage, valid values are 32 GiB-65,536 GiB (64 TiB).   For HDD storage, valid values are 2000 GiB-65,536 GiB (64 TiB)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--storage-type",
          description:
            "Sets the storage class for the file system that you're creating. Valid values are SSD, HDD, and INTELLIGENT_TIERING.   Set to SSD to use solid state drive storage. SSD is supported on all Windows, Lustre, ONTAP, and OpenZFS deployment types.   Set to HDD to use hard disk drive storage. HDD is supported on SINGLE_AZ_2 and MULTI_AZ_1 Windows file system deployment types, and on PERSISTENT_1 Lustre file system deployment types.   Set to INTELLIGENT_TIERING to use fully elastic, intelligently-tiered storage. Intelligent-Tiering is only available for OpenZFS file systems with the Multi-AZ deployment type.   Default value is SSD. For more information, see  Storage type options in the FSx for Windows File Server User Guide, Multiple storage options in the FSx for Lustre User Guide, and Working with Intelligent-Tiering in the Amazon FSx for OpenZFS User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "Specifies the IDs of the subnets that the file system will be accessible from. For Windows and ONTAP MULTI_AZ_1 deployment types,provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the WindowsConfiguration > PreferredSubnetID or OntapConfiguration > PreferredSubnetID properties. For more information about Multi-AZ file system configuration, see  Availability and durability: Single-AZ and Multi-AZ file systems in the Amazon FSx for Windows User Guide and  Availability and durability in the Amazon FSx for ONTAP User Guide. For Windows SINGLE_AZ_1 and SINGLE_AZ_2 and all Lustre deployment types, provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.  You must specify a security group if you are creating a Multi-AZ FSx for ONTAP file system in a VPC subnet that has been shared with you",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to apply to the file system that's being created. The key value of the Name tag appears in the console as the file system name",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:   Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only.  SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account.   Amazon FSx for NetApp ONTAP   Amazon FSx for OpenZFS   Amazon FSx for Windows File Server   If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--windows-configuration",
          description:
            "The Microsoft Windows configuration for the file system that's being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The Lustre configuration for the file system being created.  The following parameters are not supported for file systems with a data repository association created with .    AutoImportPolicy     ExportPath     ImportedFileChunkSize     ImportPath",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ontap-configuration",
          description:
            "The ONTAP configuration properties of the FSx for ONTAP file system that you are creating",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-system-type-version",
          description:
            "For FSx for Lustre file systems, sets the Lustre version for the file system that you're creating. Valid values are 2.10, 2.12, and 2.15:    2.10 is supported by the Scratch and Persistent_1 Lustre deployment types.    2.12 is supported by all Lustre deployment types, except for PERSISTENT_2 with a metadata configuration mode.    2.15 is supported by all Lustre deployment types and is recommended for all new file systems.   Default value is 2.10, except for the following deployments:   Default value is 2.12 when DeploymentType is set to PERSISTENT_2 without a metadata configuration mode.   Default value is 2.15 when DeploymentType is set to PERSISTENT_2 with a metadata configuration mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--open-zfs-configuration",
          description:
            "The OpenZFS configuration for the file system that's being created",
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
      name: "create-file-system-from-backup",
      description:
        "Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following:   Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.  The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the  DescribeFileSystems operation, which returns the file system state along with other information",
      options: [
        {
          name: "--backup-id",
          description:
            "The ID of the source backup. Specifies the backup that you are copying",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "Specifies the IDs of the subnets that the file system will be accessible from. For Windows MULTI_AZ_1 file system deployment types, provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the WindowsConfiguration > PreferredSubnetID property. Windows SINGLE_AZ_1 and SINGLE_AZ_2 file system deployment types, Lustre file systems, and OpenZFS file systems provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups apply to all network interfaces. This value isn't returned in later DescribeFileSystem requests",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be applied to the file system at file system creation. The key value of the Name tag appears in the console as the file system name",
          args: {
            name: "list",
          },
        },
        {
          name: "--windows-configuration",
          description:
            "The configuration for this Microsoft Windows file system",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The Lustre configuration for the file system being created.  The following parameters are not supported for file systems with a data repository association created with .    AutoImportPolicy     ExportPath     ImportedFileChunkSize     ImportPath",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-type",
          description:
            "Sets the storage type for the Windows or OpenZFS file system that you're creating from a backup. Valid values are SSD and HDD.   Set to SSD to use solid state drive storage. SSD is supported on all Windows and OpenZFS deployment types.   Set to HDD to use hard disk drive storage. HDD is supported on SINGLE_AZ_2 and MULTI_AZ_1 FSx for Windows File Server file system deployment types.    The default value is SSD.   HDD and SSD storage types have different minimum storage capacity requirements. A restored file system's storage capacity is tied to the file system that was backed up. You can create a file system that uses HDD storage from a backup of a file system that used SSD storage if the original SSD file system had a storage capacity of at least 2000 GiB",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:   Amazon FSx for Lustre PERSISTENT_1 and PERSISTENT_2 deployment types only.  SCRATCH_1 and SCRATCH_2 types are encrypted using the Amazon FSx service KMS key for your account.   Amazon FSx for NetApp ONTAP   Amazon FSx for OpenZFS   Amazon FSx for Windows File Server   If a KmsKeyId isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see Encrypt in the Key Management Service API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-type-version",
          description:
            "Sets the version for the Amazon FSx for Lustre file system that you're creating from a backup. Valid values are 2.10, 2.12, and 2.15. You don't need to specify FileSystemTypeVersion because it will be applied using the backup's FileSystemTypeVersion setting. If you choose to specify FileSystemTypeVersion when creating from backup, the value must match the backup's FileSystemTypeVersion setting",
          args: {
            name: "string",
          },
        },
        {
          name: "--open-zfs-configuration",
          description:
            "The OpenZFS configuration for the file system that's being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-capacity",
          description:
            "Sets the storage capacity of the OpenZFS file system that you're creating from a backup, in gibibytes (GiB). Valid values are from 64 GiB up to 524,288 GiB (512 TiB). However, the value that you specify must be equal to or greater than the backup's storage capacity value. If you don't use the StorageCapacity parameter, the default is the backup's StorageCapacity value. If used to create a file system other than OpenZFS, you must provide a value that matches the backup's StorageCapacity value. If you provide any other value, Amazon FSx responds with with an HTTP status code 400 Bad Request",
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
      name: "create-snapshot",
      description:
        "Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version. If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a snapshot with the specified client request token doesn't exist, CreateSnapshot does the following:   Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the snapshot.   By using the idempotent operation, you can retry a CreateSnapshot operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same. The CreateSnapshot operation returns while the snapshot's lifecycle state is still CREATING. You can check the snapshot creation status by calling the DescribeSnapshots operation, which returns the snapshot state along with other information",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-id",
          description: "The ID of the volume that you are taking a snapshot of",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements",
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
      name: "create-storage-virtual-machine",
      description:
        "Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system",
      options: [
        {
          name: "--active-directory-configuration",
          description:
            "Describes the self-managed Microsoft Active Directory to which you want to join the SVM. Joining an Active Directory provides user authentication and access control for SMB clients, including Microsoft Windows and macOS clients accessing the file system",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "The globally unique ID of the file system, assigned by Amazon FSx",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the SVM",
          args: {
            name: "string",
          },
        },
        {
          name: "--svm-admin-password",
          description:
            "The password to use when managing the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's fsxadmin user to manage the SVM",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements",
          args: {
            name: "list",
          },
        },
        {
          name: "--root-volume-security-style",
          description:
            "The security style of the root volume of the SVM. Specify one of the following values:    UNIX if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account.    NTFS if the file system is managed by a Microsoft Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Microsoft Windows user as the service account.    MIXED This is an advanced setting. For more information, see Volume security style in the Amazon FSx for NetApp ONTAP User Guide",
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
      name: "create-volume",
      description:
        "Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-type",
          description:
            "Specifies the type of volume to create; ONTAP and OPENZFS are the only valid volume types",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Specifies the name of the volume that you're creating",
          args: {
            name: "string",
          },
        },
        {
          name: "--ontap-configuration",
          description:
            "Specifies the configuration to use when creating the ONTAP volume",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements",
          args: {
            name: "list",
          },
        },
        {
          name: "--open-zfs-configuration",
          description:
            "Specifies the configuration to use when creating the OpenZFS volume",
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
      name: "create-volume-from-backup",
      description:
        "Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup",
      options: [
        {
          name: "--backup-id",
          description:
            "The ID of the source backup. Specifies the backup that you are copying",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the new volume you're creating",
          args: {
            name: "string",
          },
        },
        {
          name: "--ontap-configuration",
          description:
            "Specifies the configuration of the ONTAP volume that you are creating",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements",
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
      name: "delete-backup",
      description:
        "Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup won't show up in later DescribeBackups calls.  The data in a deleted backup is also deleted and can't be recovered by any means",
      options: [
        {
          name: "--backup-id",
          description: "The ID of the backup that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This parameter is automatically filled on your behalf when using the CLI or SDK",
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
      name: "delete-data-repository-association",
      description:
        "Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding scratch_1 deployment type",
      options: [
        {
          name: "--association-id",
          description:
            "The ID of the data repository association that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-data-in-file-system",
          description:
            "Set to true to delete the data in the file system that corresponds to the data repository association",
        },
        {
          name: "--no-delete-data-in-file-system",
          description:
            "Set to true to delete the data in the file system that corresponds to the data repository association",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-file-cache",
      description:
        "Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone. The DeleteFileCache operation returns while the cache has the DELETING status. You can check the cache deletion status by calling the DescribeFileCaches operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the DescribeFileCaches operation returns a FileCacheNotFound error.  The data in a deleted cache is also deleted and can't be recovered by any means",
      options: [
        {
          name: "--file-cache-id",
          description: "The ID of the cache that's being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
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
      name: "delete-file-system",
      description:
        "Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted. To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a FileSystemId value to the DeleteFileSystem operation. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted. To delete an Amazon FSx for Lustre file system, first unmount it from every connected Amazon EC2 instance, then provide a FileSystemId value to the DeleteFileSystem operation. By default, Amazon FSx will not take a final backup when the DeleteFileSystem operation is invoked. On file systems not linked to an Amazon S3 bucket, set SkipFinalBackup to false to take a final backup of the file system you are deleting. Backups cannot be enabled on S3-linked file systems. To ensure all of your data is written back to S3 before deleting your file system, you can either monitor for the AgeOfOldestQueuedMessage metric to be zero (if using automatic export) or you can run an export data repository task. If you have automatic export enabled and want to use an export data repository task, you have to disable automatic export before executing the export data repository task. The DeleteFileSystem operation returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems operation returns a FileSystemNotFound error.  If a data repository task is in a PENDING or EXECUTING state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).   The data in a deleted file system is also deleted and can't be recovered by any means",
      options: [
        {
          name: "--file-system-id",
          description: "The ID of the file system that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This token is automatically filled on your behalf when using the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--windows-configuration",
          description:
            "The configuration object for the Microsoft Windows file system used in the DeleteFileSystem operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The configuration object for the Amazon FSx for Lustre file system being deleted in the DeleteFileSystem operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--open-zfs-configuration",
          description:
            "The configuration object for the OpenZFS file system used in the DeleteFileSystem operation",
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
      name: "delete-snapshot",
      description:
        "Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup.  The DeleteSnapshot operation returns instantly. The snapshot appears with the lifecycle status of DELETING until the deletion is complete",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-id",
          description: "The ID of the snapshot that you want to delete",
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
      name: "delete-storage-virtual-machine",
      description:
        "Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-virtual-machine-id",
          description: "The ID of the SVM that you want to delete",
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
      name: "delete-volume",
      description:
        "Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-id",
          description: "The ID of the volume that you are deleting",
          args: {
            name: "string",
          },
        },
        {
          name: "--ontap-configuration",
          description:
            "For Amazon FSx for ONTAP volumes, specify whether to take a final backup of the volume and apply tags to the backup. To apply tags to the backup, you must have the fsx:TagResource permission",
          args: {
            name: "structure",
          },
        },
        {
          name: "--open-zfs-configuration",
          description:
            "For Amazon FSx for OpenZFS volumes, specify whether to delete all child volumes and snapshots",
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
      name: "describe-backups",
      description:
        "Returns the description of a specific Amazon FSx backup, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of the NextToken value from the last response. This operation is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind:   The operation might return fewer than the MaxResults value of backup descriptions while still including a NextToken value.   The order of the backups returned in the response of one DescribeBackups call and the order of the backups returned across the responses of a multi-call iteration is unspecified",
      options: [
        {
          name: "--backup-ids",
          description:
            "The IDs of the backups that you want to retrieve. This parameter value overrides any filters. If any IDs aren't found, a BackupNotFound error occurs",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "The filters structure. The supported names are file-system-id, backup-type, file-system-type, and volume-id",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of backups to return in the response. This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An opaque pagination token returned from a previous DescribeBackups operation. If a token is present, the operation continues the list from where the returning call left off",
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
      name: "describe-data-repository-associations",
      description:
        "Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more AssociationIds values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all FSx for Lustre 2.12 and 2,15 file systems, excluding scratch_1 deployment type. You can use filters to narrow the response to include just data repository associations for specific file systems (use the file-system-id filter with the ID of the file system) or caches (use the file-cache-id filter with the ID of the cache), or data repository associations for a specific repository type (use the data-repository-type filter with a value of S3 or NFS). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all data repository associations, you can paginate the response by using the optional MaxResults parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a NextToken value is returned in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response",
      options: [
        {
          name: "--association-ids",
          description:
            "IDs of the data repository associations whose descriptions you want to retrieve (String)",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description: "A list of Filter elements",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resources to return in the response. This value must be an integer greater than zero",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous NextToken value left off",
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
      name: "describe-data-repository-tasks",
      description:
        "Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more TaskIds values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all tasks, you can paginate the response by using the optional MaxResults parameter to limit the number of tasks returned in a response. If more tasks remain, a NextToken value is returned in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response",
      options: [
        {
          name: "--task-ids",
          description:
            "(Optional) IDs of the tasks whose descriptions you want to retrieve (String)",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "(Optional) You can use filters to narrow the DescribeDataRepositoryTasks response to include just tasks for specific file systems, or tasks in a specific lifecycle state",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resources to return in the response. This value must be an integer greater than zero",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous NextToken value left off",
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
      name: "describe-file-caches",
      description:
        "Returns the description of a specific Amazon File Cache resource, if a FileCacheIds value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all cache descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This operation is used in an iterative process to retrieve a list of your cache descriptions. DescribeFileCaches is called first without a NextTokenvalue. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this operation, keep the following in mind:   The implementation might return fewer than MaxResults cache descriptions while still including a NextToken value.   The order of caches returned in the response of one DescribeFileCaches call and the order of caches returned across the responses of a multicall iteration is unspecified",
      options: [
        {
          name: "--file-cache-ids",
          description:
            "IDs of the caches whose descriptions you want to retrieve (String)",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resources to return in the response. This value must be an integer greater than zero",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous NextToken value left off",
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
      name: "describe-file-system-aliases",
      description:
        "Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of AdministrativeAction provided in the DescribeFileSystems operation response",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "The ID of the file system to return the associated DNS aliases for (String)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of DNS aliases to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned from a previous DescribeFileSystemAliases operation (String). If a token is included in the request, the action continues the list from where the previous returning call left off",
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
      name: "describe-file-systems",
      description:
        "Returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This operation is used in an iterative process to retrieve a list of your file system descriptions. DescribeFileSystems is called first without a NextTokenvalue. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this operation, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multicall iteration is unspecified",
      options: [
        {
          name: "--file-system-ids",
          description:
            "IDs of the file systems whose descriptions you want to retrieve (String)",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of file systems to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned from a previous DescribeFileSystems operation (String). If a token present, the operation continues the list from where the returning call left off",
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
      name: "describe-shared-vpc-configuration",
      description:
        "Indicates whether participant accounts in your organization can create Amazon FSx for NetApp ONTAP Multi-AZ file systems in subnets that are shared by a virtual private cloud (VPC) owner. For more information, see Creating FSx for ONTAP file systems in shared subnets",
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
      name: "describe-snapshots",
      description:
        "Returns the description of specific Amazon FSx for OpenZFS snapshots, if a SnapshotIds value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all snapshots, you can optionally specify the MaxResults parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.  Use this operation in an iterative process to retrieve a list of your snapshots. DescribeSnapshots is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind:   The operation might return fewer than the MaxResults value of snapshot descriptions while still including a NextToken value.   The order of snapshots returned in the response of one DescribeSnapshots call and the order of backups returned across the responses of a multi-call iteration is unspecified",
      options: [
        {
          name: "--snapshot-ids",
          description:
            "The IDs of the snapshots that you want to retrieve. This parameter value overrides any filters. If any IDs aren't found, a SnapshotNotFound error occurs",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "The filters structure. The supported names are file-system-id or volume-id",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resources to return in the response. This value must be an integer greater than zero",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous NextToken value left off",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-shared",
          description:
            "Set to false (default) if you want to only see the snapshots owned by your Amazon Web Services account. Set to true if you want to see the snapshots in your account and the ones shared with you from another account",
        },
        {
          name: "--no-include-shared",
          description:
            "Set to false (default) if you want to only see the snapshots owned by your Amazon Web Services account. Set to true if you want to see the snapshots in your account and the ones shared with you from another account",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-storage-virtual-machines",
      description:
        "Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs)",
      options: [
        {
          name: "--storage-virtual-machine-ids",
          description: "Enter the ID of one or more SVMs that you want to view",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "Enter a filter name:value pair to view a select set of SVMs",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resources to return in the response. This value must be an integer greater than zero",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous NextToken value left off",
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
      name: "describe-volumes",
      description:
        "Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes",
      options: [
        {
          name: "--volume-ids",
          description:
            "The IDs of the volumes whose descriptions you want to retrieve",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "Enter a filter Name and Values pair to view a select set of volumes",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resources to return in the response. This value must be an integer greater than zero",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous NextToken value left off",
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
      name: "disassociate-file-system-aliases",
      description:
        "Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with an HTTP status code 400 (Bad Request). For more information, see Working with DNS Aliases. The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "Specifies the file system from which to disassociate the DNS aliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--aliases",
          description:
            "An array of one or more DNS alias names to disassociate, or remove, from the file system",
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
      name: "list-tags-for-resource",
      description:
        "Lists tags for Amazon FSx resources. When retrieving all tags, you can optionally specify the MaxResults parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your tags. ListTagsForResource is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of tags returned in the response of one ListTagsForResource call and the order of tags returned across the responses of a multi-call iteration is unspecified",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the Amazon FSx resource that will have its tags listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of tags to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned from a previous ListTagsForResource operation (String). If a token present, the action continues the list from where the returning call left off",
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
      name: "release-file-system-nfs-v3-locks",
      description:
        "Releases the file system lock from an Amazon FSx for OpenZFS file system",
      options: [
        {
          name: "--file-system-id",
          description:
            "The globally unique ID of the file system, assigned by Amazon FSx",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
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
      name: "restore-volume-from-snapshot",
      description:
        "Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-id",
          description: "The ID of the volume that you are restoring",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-id",
          description:
            "The ID of the source snapshot. Specifies the snapshot that you are restoring from",
          args: {
            name: "string",
          },
        },
        {
          name: "--options",
          description:
            "The settings used when restoring the specified volume from snapshot.    DELETE_INTERMEDIATE_SNAPSHOTS - Deletes snapshots between the current state and the specified snapshot. If there are intermediate snapshots and this option isn't used, RestoreVolumeFromSnapshot fails.    DELETE_CLONED_VOLUMES - Deletes any dependent clone volumes created from intermediate snapshots. If there are any dependent clone volumes and this option isn't used, RestoreVolumeFromSnapshot fails",
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
      name: "start-misconfigured-state-recovery",
      description:
        "After performing steps to repair the Active Directory configuration of an FSx for Windows File Server file system, use this action to initiate the process of Amazon FSx attempting to reconnect to the file system",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "The globally unique ID of the file system, assigned by Amazon FSx",
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
      description: "Tags an Amazon FSx resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon FSx resource that you want to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags for the resource. If a tag with a given key already exists, the value is replaced by the one specified in this parameter",
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
      description: "This action removes a tag from an Amazon FSx resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the Amazon FSx resource to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of keys of tags on the resource to untag. In case the tag key doesn't exist, the call will still succeed to be idempotent",
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
      name: "update-data-repository-association",
      description:
        "Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding scratch_1 deployment type",
      options: [
        {
          name: "--association-id",
          description:
            "The ID of the data repository association that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--imported-file-chunk-size",
          description:
            "For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB",
          args: {
            name: "integer",
          },
        },
        {
          name: "--s3",
          description:
            "The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository",
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
      name: "update-file-cache",
      description:
        "Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request",
      options: [
        {
          name: "--file-cache-id",
          description: "The ID of the cache that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The configuration updates for an Amazon File Cache resource",
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
      name: "update-file-system",
      description:
        "Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request. For FSx for Windows File Server file systems, you can update the following properties:    AuditLogConfiguration     AutomaticBackupRetentionDays     DailyAutomaticBackupStartTime     SelfManagedActiveDirectoryConfiguration     StorageCapacity     StorageType     ThroughputCapacity     DiskIopsConfiguration     WeeklyMaintenanceStartTime    For FSx for Lustre file systems, you can update the following properties:    AutoImportPolicy     AutomaticBackupRetentionDays     DailyAutomaticBackupStartTime     DataCompressionType     LogConfiguration     LustreRootSquashConfiguration     MetadataConfiguration     PerUnitStorageThroughput     StorageCapacity     WeeklyMaintenanceStartTime    For FSx for ONTAP file systems, you can update the following properties:    AddRouteTableIds     AutomaticBackupRetentionDays     DailyAutomaticBackupStartTime     DiskIopsConfiguration     FsxAdminPassword     HAPairs     RemoveRouteTableIds     StorageCapacity     ThroughputCapacity     ThroughputCapacityPerHAPair     WeeklyMaintenanceStartTime    For FSx for OpenZFS file systems, you can update the following properties:    AddRouteTableIds     AutomaticBackupRetentionDays     CopyTagsToBackups     CopyTagsToVolumes     DailyAutomaticBackupStartTime     DiskIopsConfiguration     ReadCacheConfiguration     RemoveRouteTableIds     StorageCapacity     ThroughputCapacity     WeeklyMaintenanceStartTime",
      options: [
        {
          name: "--file-system-id",
          description: "The ID of the file system that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent updates. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-capacity",
          description:
            "Use this parameter to increase the storage capacity of an FSx for Windows File Server, FSx for Lustre, FSx for OpenZFS, or FSx for ONTAP file system. Specifies the storage capacity target value, in GiB, to increase the storage capacity for the file system that you're updating.   You can't make a storage capacity increase request if there is an existing storage capacity increase request in progress.  For Lustre file systems, the storage capacity target value can be the following:   For SCRATCH_2, PERSISTENT_1, and PERSISTENT_2 SSD deployment types, valid values are in multiples of 2400 GiB. The value must be greater than the current storage capacity.   For PERSISTENT HDD file systems, valid values are multiples of 6000 GiB for 12-MBps throughput per TiB file systems and multiples of 1800 GiB for 40-MBps throughput per TiB file systems. The values must be greater than the current storage capacity.   For SCRATCH_1 file systems, you can't increase the storage capacity.   For more information, see Managing storage and throughput capacity in the FSx for Lustre User Guide. For FSx for OpenZFS file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. For more information, see Managing storage capacity in the FSx for OpenZFS User Guide. For Windows file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. To increase storage capacity, the file system must have at least 16 MBps of throughput capacity. For more information, see Managing storage capacity in the Amazon FSxfor Windows File Server User Guide. For ONTAP file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. For more information, see Managing storage capacity and provisioned IOPS in the Amazon FSx for NetApp ONTAP User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--windows-configuration",
          description:
            "The configuration updates for an Amazon FSx for Windows File Server file system",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The configuration object for Amazon FSx for Lustre file systems used in the UpdateFileSystem operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ontap-configuration",
          description:
            "The configuration updates for an Amazon FSx for NetApp ONTAP file system",
          args: {
            name: "structure",
          },
        },
        {
          name: "--open-zfs-configuration",
          description:
            "The configuration updates for an FSx for OpenZFS file system",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-type",
          description: "Specifies the file system's storage type",
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
      name: "update-shared-vpc-configuration",
      description:
        "Configures whether participant accounts in your organization can create Amazon FSx for NetApp ONTAP Multi-AZ file systems in subnets that are shared by a virtual private cloud (VPC) owner. For more information, see the Amazon FSx for NetApp ONTAP User Guide.  We strongly recommend that participant-created Multi-AZ file systems in the shared VPC are deleted before you disable this feature. Once the feature is disabled, these file systems will enter a MISCONFIGURED state and behave like Single-AZ file systems. For more information, see Important considerations before disabling shared VPC support for Multi-AZ file systems",
      options: [
        {
          name: "--enable-fsx-route-table-updates-from-participant-accounts",
          description:
            "Specifies whether participant accounts can create FSx for ONTAP Multi-AZ file systems in shared subnets. Set to true to enable or false to disable",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
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
      name: "update-snapshot",
      description: "Updates the name of an Amazon FSx for OpenZFS snapshot",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the snapshot to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-id",
          description:
            "The ID of the snapshot that you want to update, in the format fsvolsnap-0123456789abcdef0",
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
      name: "update-storage-virtual-machine",
      description: "Updates an FSx for ONTAP storage virtual machine (SVM)",
      options: [
        {
          name: "--active-directory-configuration",
          description:
            "Specifies updates to an SVM's Microsoft Active Directory (AD) configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-virtual-machine-id",
          description:
            "The ID of the SVM that you want to update, in the format svm-0123456789abcdef0",
          args: {
            name: "string",
          },
        },
        {
          name: "--svm-admin-password",
          description: "Specifies a new SvmAdminPassword",
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
      name: "update-volume",
      description:
        "Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-id",
          description:
            "The ID of the volume that you want to update, in the format fsvol-0123456789abcdef0",
          args: {
            name: "string",
          },
        },
        {
          name: "--ontap-configuration",
          description:
            "The configuration of the ONTAP volume that you are updating",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description:
            "The name of the OpenZFS volume. OpenZFS root volumes are automatically named FSX. Child volume names must be unique among their parent volume's children. The name of the volume is part of the mount string for the OpenZFS volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--open-zfs-configuration",
          description:
            "The configuration of the OpenZFS volume that you are updating",
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
  ],
};
export default completionSpec;
