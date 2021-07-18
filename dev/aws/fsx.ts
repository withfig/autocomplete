const completionSpec: Fig.Spec = {
  name: "fsx",
  description:
    "Amazon FSx is a fully managed service that makes it easy for storage and application administrators to launch and use shared file storage.",
  subcommands: [
    {
      name: "associate-file-system-aliases",
      description:
        "Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file systen can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see Working with DNS Aliases and Walkthrough 5: Using DNS aliases to access your file system, including additional steps you must take to be able to access your file system using a DNS alias. The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "Specifies the file system with which you want to associate one or more DNS aliases.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aliases",
          description:
            "An array of one or more DNS alias names to associate with the file system. The alias name has to comply with the following formatting requirements:   Formatted as a fully-qualified domain name (FQDN),  hostname.domain , for example, accounting.corp.example.com.   Can contain alphanumeric characters and the hyphen (-).   Cannot start or end with a hyphen.   Can start with a numeric.   For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        'Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the PENDING or EXECUTING state. When you cancel a task, Amazon FSx does the following.   Any files that FSx has already exported are not reverted.   FSx continues to export any files that are "in-flight" when the cancel operation is received.   FSx does not export any files that have not yet been exported.',
      options: [
        {
          name: "--task-id",
          description: "Specifies the data repository task to cancel.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Copies an existing backup within the same AWS account to another Region (cross-Region copy) or within the same Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account. You can use cross-Region backup copies for cross-region disaster recovery. You periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your AWS partition.  You can also use backup copies to clone your file data set to another Region or within the same Region. You can use the SourceRegion parameter to specify the AWS Region from which the backup will be copied. For example, if you make the call from the us-west-1 Region and want to copy a backup from the us-east-2 Region, you specify us-east-2 in the SourceRegion parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy). For more information on creating backup copies, see  Copying backups in the Amazon FSx for Windows User Guide and Copying backups in the Amazon FSx for Lustre User Guide.",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-backup-id",
          description:
            "The ID of the source backup. Specifies the ID of the backup that is being copied.",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-region",
          description:
            "The source AWS Region of the backup. Specifies the AWS Region from which the backup is being copied. The source and destination Regions must be in the same AWS partition. If you don't specify a Region, it defaults to the Region where the request is sent from (in-Region copy).",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre PERSISTENT_1 file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre SCRATCH_1 and SCRATCH_2 file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see Encrypt in the AWS Key Management Service API Reference.",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-tags",
          description:
            "A boolean flag indicating whether tags from the source backup should be copied to the backup copy. This value defaults to false. If you set CopyTags to true and the source backup has existing tags, you can use the Tags parameter to create new tags, provided that the sum of the source backup tags and the new tags doesn't exceed 50. Both sets of tags are merged. If there are tag conflicts (for example, two tags with the same key but different values), the tags created with the Tags parameter take precedence.",
        },
        {
          name: "--no-copy-tags",
          description:
            "A boolean flag indicating whether tags from the source backup should be copied to the backup copy. This value defaults to false. If you set CopyTags to true and the source backup has existing tags, you can use the Tags parameter to create new tags, provided that the sum of the source backup tags and the new tags doesn't exceed 50. Both sets of tags are merged. If there are tag conflicts (for example, two tags with the same key but different values), the tags created with the Tags parameter take precedence.",
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a backup of an existing Amazon FSx file system. Creating regular backups for your file system is a best practice, enabling you to restore a file system from a backup if an issue arises with the original file system. For Amazon FSx for Lustre file systems, you can create a backup only for file systems with the following configuration:   a Persistent deployment type   is not linked to a data respository.   For more information about backing up Amazon FSx for Lustre file systems, see Working with FSx for Lustre backups. For more information about backing up Amazon FSx for Windows file systems, see Working with FSx for Windows backups. If a backup with the specified client request token exists, and the parameters match, this operation returns the description of the existing backup. If a backup specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following:    Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the backup.   By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateBackup operation returns while the backup's lifecycle state is still CREATING. You can check the backup creation status by calling the DescribeBackups operation, which returns the backup state along with other information.",
      options: [
        {
          name: "--file-system-id",
          description: "The ID of the file system to back up.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) The tags to apply to the backup at backup creation. The key value of the Name tag appears in the console as the backup name. If you have set CopyTagsToBackups to true, and you specify one or more tags using the CreateBackup action, no existing file system tags are copied from the file system to the backup.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repository. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to its linked data repository. A CreateDataRepositoryTask operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see Data Repository Tasks. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket.",
      options: [
        {
          name: "--type",
          description: "Specifies the type of data repository task to create.",
          args: {
            name: "string",
          },
        },
        {
          name: "--paths",
          description:
            "(Optional) The path or paths on the Amazon FSx file system to use when the data repository task is processed. The default path is the file system root directory. The paths you provide need to be relative to the mount point of the file system. If the mount point is /mnt/fsx and /mnt/fsx/path1 is a directory or file on the file system you want to export, then the path to provide is path1. If a path that you provide isn't valid, the task fails.",
          args: {
            name: "list",
          },
        },
        {
          name: "--file-system-id",
          description:
            "The globally unique ID of the file system, assigned by Amazon FSx.",
          args: {
            name: "string",
          },
        },
        {
          name: "--report",
          description:
            "Defines whether or not Amazon FSx provides a CompletionReport once the task has completed. A CompletionReport provides a detailed report on the files that Amazon FSx processed that meet the criteria specified by the Scope parameter. For more information, see Working with Task Completion Reports.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of Tag values, with a maximum of 50 elements.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a new, empty Amazon FSx file system. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following:    Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information.",
      options: [
        {
          name: "--client-request-token",
          description:
            "A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-type",
          description:
            "The type of Amazon FSx file system to create, either WINDOWS or LUSTRE.",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-capacity",
          description:
            "Sets the storage capacity of the file system that you're creating. For Lustre file systems:   For SCRATCH_2 and PERSISTENT_1 SSD deployment types, valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.   For PERSISTENT HDD file systems, valid values are increments of 6000 GiB for 12 MB/s/TiB file systems and increments of 1800 GiB for 40 MB/s/TiB file systems.   For SCRATCH_1 deployment type, valid values are 1200 GiB, 2400 GiB, and increments of 3600 GiB.   For Windows file systems:   If StorageType=SSD, valid values are 32 GiB - 65,536 GiB (64 TiB).   If StorageType=HDD, valid values are 2000 GiB - 65,536 GiB (64 TiB).",
          args: {
            name: "integer",
          },
        },
        {
          name: "--storage-type",
          description:
            "Sets the storage type for the file system you're creating. Valid values are SSD and HDD.   Set to SSD to use solid state drive storage. SSD is supported on all Windows and Lustre deployment types.   Set to HDD to use hard disk drive storage. HDD is supported on SINGLE_AZ_2 and MULTI_AZ_1 Windows file system deployment types, and on PERSISTENT Lustre file system deployment types.     Default value is SSD. For more information, see  Storage Type Options in the Amazon FSx for Windows User Guide and Multiple Storage Options in the Amazon FSx for Lustre User Guide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "Specifies the IDs of the subnets that the file system will be accessible from. For Windows MULTI_AZ_1 file system deployment types, provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the WindowsConfiguration &gt; PreferredSubnetID property. For more information, see  Availability and durability: Single-AZ and Multi-AZ file systems. For Windows SINGLE_AZ_1 and SINGLE_AZ_2 file system deployment types and Lustre file systems, provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to apply to the file system being created. The key value of the Name tag appears in the console as the file system name.",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre PERSISTENT_1 file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre SCRATCH_1 and SCRATCH_2 file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see Encrypt in the AWS Key Management Service API Reference.",
          args: {
            name: "string",
          },
        },
        {
          name: "--windows-configuration",
          description:
            "The Microsoft Windows configuration for the file system being created.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The Lustre configuration for the file system being created.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a new Amazon FSx file system from an existing Amazon FSx backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a client request token specified by the file system exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following:   Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   Parameters like Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information.",
      options: [
        {
          name: "--backup-id",
          description:
            "The ID of the source backup. Specifies the backup you are copying.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "Specifies the IDs of the subnets that the file system will be accessible from. For Windows MULTI_AZ_1 file system deployment types, provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the WindowsConfiguration &gt; PreferredSubnetID property. For Windows SINGLE_AZ_1 and SINGLE_AZ_2 deployment types and Lustre file systems, provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups apply to all network interfaces. This value isn't returned in later DescribeFileSystem requests.",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be applied to the file system at file system creation. The key value of the Name tag appears in the console as the file system name.",
          args: {
            name: "list",
          },
        },
        {
          name: "--windows-configuration",
          description:
            "The configuration for this Microsoft Windows file system.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The Lustre configuration for the file system being created.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-type",
          description:
            "Sets the storage type for the Windows file system you're creating from a backup. Valid values are SSD and HDD.   Set to SSD to use solid state drive storage. Supported on all Windows deployment types.   Set to HDD to use hard disk drive storage. Supported on SINGLE_AZ_2 and MULTI_AZ_1 Windows file system deployment types.     Default value is SSD.   HDD and SSD storage types have different minimum storage capacity requirements. A restored file system's storage capacity is tied to the file system that was backed up. You can create a file system that uses HDD storage from a backup of a file system that used SSD storage only if the original SSD file system had a storage capacity of at least 2000 GiB.",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre PERSISTENT_1 file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre SCRATCH_1 and SCRATCH_2 file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see Encrypt in the AWS Key Management Service API Reference.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes an Amazon FSx backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup will not show up in later DescribeBackups calls.  The data in a deleted backup is also deleted and can't be recovered by any means.",
      options: [
        {
          name: "--backup-id",
          description: "The ID of the backup you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This is automatically filled on your behalf when using the AWS CLI or SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes a file system, deleting its contents. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups will also be deleted. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup is not subject to the file system's retention policy, and must be manually deleted. The DeleteFileSystem action returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems action, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems returns a FileSystemNotFound error.  Deleting an Amazon FSx for Lustre file system will fail with a 400 BadRequest if a data repository task is in a PENDING or EXECUTING state.   The data in a deleted file system is also deleted and can't be recovered by any means.",
      options: [
        {
          name: "--file-system-id",
          description: "The ID of the file system you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This is automatically filled on your behalf when using the AWS CLI or SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--windows-configuration",
          description:
            "The configuration object for the Microsoft Windows file system used in the DeleteFileSystem operation.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The configuration object for the Amazon FSx for Lustre file system being deleted in the DeleteFileSystem operation.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Returns the description of specific Amazon FSx backups, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of backups returned in the response of one DescribeBackups call and the order of backups returned across the responses of a multi-call iteration is unspecified.",
      options: [
        {
          name: "--backup-ids",
          description:
            "IDs of the backups you want to retrieve (String). This overrides any filters. If any IDs are not found, BackupNotFound will be thrown.",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "Filters structure. Supported names are file-system-id and backup-type.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of backups to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned from a previous DescribeBackups operation (String). If a token present, the action continues the list from where the returning call left off.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Returns the description of specific Amazon FSx for Lustre data repository tasks, if one or more TaskIds values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your AWS account in the AWS Region of the endpoint that you're calling. When retrieving all tasks, you can paginate the response by using the optional MaxResults parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.",
      options: [
        {
          name: "--task-ids",
          description:
            "(Optional) IDs of the tasks whose descriptions you want to retrieve (String).",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "(Optional) You can use filters to narrow the DescribeDataRepositoryTasks response to include just tasks for specific file systems, or tasks in a specific lifecycle state.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resources to return in the response. This value must be an integer greater than zero.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous NextToken value left off.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of AdministrativeAction provided in the DescribeFileSystems operation response.",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "The ID of the file system to return the associated DNS aliases for (String).",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of DNS aliases to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned from a previous DescribeFileSystemAliases operation (String). If a token is included in the request, the action continues the list from where the previous returning call left off.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your file system descriptions. DescribeFileSystems is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multicall iteration is unspecified.",
      options: [
        {
          name: "--file-system-ids",
          description:
            "IDs of the file systems whose descriptions you want to retrieve (String).",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of file systems to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned from a previous DescribeFileSystems operation (String). If a token present, the action continues the list from where the returning call left off.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see Working with DNS Aliases. The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.",
      options: [
        {
          name: "--client-request-token",
          description:
            "(Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "Specifies the file system from which to disassociate the DNS aliases.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aliases",
          description:
            "An array of one or more DNS alias names to disassociate, or remove, from the file system.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for Windows File Server. When retrieving all tags, you can optionally specify the MaxResults parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your tags. ListTagsForResource is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of tags returned in the response of one ListTagsForResource call and the order of tags returned across the responses of a multi-call iteration is unspecified.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the Amazon FSx resource that will have its tags listed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of tags to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Opaque pagination token returned from a previous ListTagsForResource operation (String). If a token present, the action continues the list from where the returning call left off.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description: "Tags an Amazon FSx resource.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon FSx resource that you want to tag.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags for the resource. If a tag with a given key already exists, the value is replaced by the one specified in this parameter.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "This action removes a tag from an Amazon FSx resource.",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the Amazon FSx resource to untag.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of keys of tags on the resource to untag. In case the tag key doesn't exist, the call will still succeed to be idempotent.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request. For Amazon FSx for Windows File Server file systems, you can update the following properties:   AutomaticBackupRetentionDays   DailyAutomaticBackupStartTime   SelfManagedActiveDirectoryConfiguration   StorageCapacity   ThroughputCapacity   WeeklyMaintenanceStartTime   For Amazon FSx for Lustre file systems, you can update the following properties:   AutoImportPolicy   AutomaticBackupRetentionDays   DailyAutomaticBackupStartTime   StorageCapacity   WeeklyMaintenanceStartTime",
      options: [
        {
          name: "--file-system-id",
          description: "Identifies the file system that you are updating.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent updates. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-capacity",
          description:
            "Use this parameter to increase the storage capacity of an Amazon FSx file system. Specifies the storage capacity target value, GiB, to increase the storage capacity for the file system that you're updating. You cannot make a storage capacity increase request if there is an existing storage capacity increase request in progress. For Windows file systems, the storage capacity target value must be at least 10 percent (%) greater than the current storage capacity value. In order to increase storage capacity, the file system must have at least 16 MB/s of throughput capacity. For Lustre file systems, the storage capacity target value can be the following:   For SCRATCH_2 and PERSISTENT_1 SSD deployment types, valid values are in multiples of 2400 GiB. The value must be greater than the current storage capacity.   For PERSISTENT HDD file systems, valid values are multiples of 6000 GiB for 12 MB/s/TiB file systems and multiples of 1800 GiB for 40 MB/s/TiB file systems. The values must be greater than the current storage capacity.   For SCRATCH_1 file systems, you cannot increase the storage capacity.   For more information, see Managing storage capacity in the Amazon FSx for Windows File Server User Guide and Managing storage and throughput capacity in the Amazon FSx for Lustre User Guide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--windows-configuration",
          description:
            "The configuration updates for an Amazon FSx for Windows File Server file system.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lustre-configuration",
          description:
            "The configuration object for Amazon FSx for Lustre file systems used in the UpdateFileSystem operation.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
