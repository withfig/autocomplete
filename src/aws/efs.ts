const completionSpec: Fig.Spec = {
  name: "efs",
  description:
    "Amazon Elastic File System Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. For more information, see the User Guide",
  subcommands: [
    {
      name: "create-access-point",
      description:
        "Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see Mounting a file system using EFS access points. This operation requires permissions for the elasticfilesystem:CreateAccessPoint action",
      options: [
        {
          name: "--client-token",
          description:
            "A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Creates tags associated with the access point. Each tag is a key-value pair",
          args: {
            name: "list",
          },
        },
        {
          name: "--file-system-id",
          description:
            "The ID of the EFS file system that the access point provides access to",
          args: {
            name: "string",
          },
        },
        {
          name: "--posix-user",
          description:
            "The operating system user and group applied to all file system requests made using the access point",
          args: {
            name: "structure",
          },
        },
        {
          name: "--root-directory",
          description:
            "Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the RootDirectory &gt; Path specified does not exist, EFS creates it and applies the CreationInfo settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationInfo. Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail",
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
      name: "create-file-system",
      description:
        "Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's AWS account with the specified creation token, this operation does the following:   Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state creating.   Returns with the description of the created file system.   Otherwise, this operation returns a FileSystemAlreadyExists error with the ID of the existing file system.  For basic use cases, you can use a randomly generated UUID for the creation token.   The idempotent operation allows you to retry a CreateFileSystem call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the FileSystemAlreadyExists error. For more information, see Creating a file system in the Amazon EFS User Guide.  The CreateFileSystem call returns while the file system's lifecycle state is still creating. You can check the file system creation status by calling the DescribeFileSystems operation, which among other things returns the file system state.  This operation accepts an optional PerformanceMode parameter that you choose for your file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see Amazon EFS performance modes. You can set the throughput mode for the file system using the ThroughputMode parameter. After the file system is fully created, Amazon EFS sets its lifecycle state to available, at which point you can create one or more mount targets for the file system in your VPC. For more information, see CreateMountTarget. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see Amazon EFS: How it Works.   This operation requires permissions for the elasticfilesystem:CreateFileSystem action",
      options: [
        {
          name: "--creation-token",
          description:
            "A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--performance-mode",
          description:
            "The performance mode of the file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created.  The maxIO mode is not supported on file systems using One Zone storage classes",
          args: {
            name: "string",
          },
        },
        {
          name: "--encrypted",
          description:
            "A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying CreateFileSystemRequest$KmsKeyId for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, /aws/elasticfilesystem, is used to protect the encrypted file system",
        },
        {
          name: "--no-encrypted",
          description:
            "A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying CreateFileSystemRequest$KmsKeyId for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, /aws/elasticfilesystem, is used to protect the encrypted file system",
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the AWS KMS CMK to be used to protect the encrypted file system. This parameter is only required if you want to use a non-default CMK. If this parameter is not specified, the default CMK for Amazon EFS is used. This ID can be in one of the following formats:   Key ID - A unique identifier of the key, for example 1234abcd-12ab-34cd-56ef-1234567890ab.   ARN - An Amazon Resource Name (ARN) for the key, for example arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Key alias - A previously created display name for a key, for example alias/projectKey1.   Key alias ARN - An ARN for a key alias, for example arn:aws:kms:us-west-2:444455556666:alias/projectKey1.   If KmsKeyId is specified, the CreateFileSystemRequest$Encrypted parameter must be set to true.  EFS accepts only symmetric CMKs. You cannot use asymmetric CMKs with EFS file systems",
          args: {
            name: "string",
          },
        },
        {
          name: "--throughput-mode",
          description:
            "Specifies the throughput mode for the file system, either bursting or provisioned. If you set ThroughputMode to provisioned, you must also set a value for ProvisionedThroughputInMibps. After you create the file system, you can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes, as long as it\u2019s been more than 24 hours since the last decrease or throughput mode change. For more information, see Specifying throughput with provisioned mode in the Amazon EFS User Guide.  Default is bursting",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-throughput-in-mibps",
          description:
            "The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if ThroughputMode is set to provisioned. The upper limit for throughput is 1024 MiB/s. To increase this limit, contact AWS Support. For more information, see Amazon EFS quotas that you can increase in the Amazon EFS User Guide",
          args: {
            name: "double",
          },
        },
        {
          name: "--availability-zone-name",
          description:
            "Used to create a file system that uses One Zone storage classes. It specifies the AWS Availability Zone in which to create the file system. Use the format us-east-1a to specify the Availability Zone. For more information about One Zone storage classes, see Using EFS storage classes in the Amazon EFS User Guide.  One Zone storage classes are not available in all Availability Zones in AWS Regions where Amazon EFS is available",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup",
          description:
            "Specifies whether automatic backups are enabled on the file system that you are creating. Set the value to true to enable automatic backups. If you are creating a file system that uses One Zone storage classes, automatic backups are enabled by default. For more information, see Automatic backups in the Amazon EFS User Guide. Default is false. However, if you specify an AvailabilityZoneName, the default is true.  AWS Backup is not available in all AWS Regions where Amazon EFS is available",
        },
        {
          name: "--no-backup",
          description:
            "Specifies whether automatic backups are enabled on the file system that you are creating. Set the value to true to enable automatic backups. If you are creating a file system that uses One Zone storage classes, automatic backups are enabled by default. For more information, see Automatic backups in the Amazon EFS User Guide. Default is false. However, if you specify an AvailabilityZoneName, the default is true.  AWS Backup is not available in all AWS Regions where Amazon EFS is available",
        },
        {
          name: "--tags",
          description:
            'A value that specifies to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a "Key":"Name","Value":"{value}" key-value pair',
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
      name: "create-mount-target",
      description:
        "Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target. You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. You can create only one mount target for an EFS file system using One Zone storage classes. You must create that mount target in the same Availability Zone in which the file system is located. Use the AvailabilityZoneName and AvailabiltyZoneId properties in the DescribeFileSystems response object to get this information. Use the subnetId associated with the file system's Availability Zone when creating the mount target. For more information, see Amazon EFS: How it Works.  To create a mount target for a file system, the file system's lifecycle state must be available. For more information, see DescribeFileSystems. In the request, provide the following:   The file system ID for which you are creating the mount target.   A subnet ID, which determines the following:   The VPC in which Amazon EFS creates the mount target   The Availability Zone in which Amazon EFS creates the mount target   The IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)     After creating the mount target, Amazon EFS returns a response that includes, a MountTargetId and an IpAddress. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see How it Works: Implementation Overview.  Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:   Must belong to the same VPC as the subnets of the existing mount targets   Must not be in the same Availability Zone as any of the subnets of the existing mount targets   If the request satisfies the requirements, Amazon EFS does the following:   Creates a new mount target in the specified subnet.   Also creates a new network interface in the subnet as follows:   If the request provides an IpAddress, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 CreateNetworkInterface call does when a request does not specify a primary private IP address).   If the request provides SecurityGroups, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.   Assigns the description Mount target fsmt-id for file system fs-id  where  fsmt-id  is the mount target ID, and  fs-id  is the FileSystemId.   Sets the requesterManaged property of the network interface to true, and the requesterId value to EFS.   Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the NetworkInterfaceId field in the mount target's description to the network interface ID, and the IpAddress field to its address. If network interface creation fails, the entire CreateMountTarget operation fails.    The CreateMountTarget call returns only after creating the network interface, but while the mount target state is still creating, you can check the mount target creation status by calling the DescribeMountTargets operation, which among other things returns the mount target state.  We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see Amazon EFS. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target.  This operation requires permissions for the following action on the file system:    elasticfilesystem:CreateMountTarget    This operation also requires permissions for the following Amazon EC2 actions:    ec2:DescribeSubnets     ec2:DescribeNetworkInterfaces     ec2:CreateNetworkInterface",
      options: [
        {
          name: "--file-system-id",
          description:
            "The ID of the file system for which to create the mount target",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-id",
          description:
            "The ID of the subnet to add the mount target in. For file systems that use One Zone storage classes, use the subnet that is associated with the file system's Availability Zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-address",
          description:
            "Valid IPv4 address within the address range of the specified subnet",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-groups",
          description:
            "Up to five VPC security group IDs, of the form sg-xxxxxxxx. These must be for the same VPC as subnet specified",
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
      name: "create-tags",
      description:
        "Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the Name tag to your file system, Amazon EFS returns it in the response to the DescribeFileSystems operation.  This operation requires permission for the elasticfilesystem:CreateTags action",
      options: [
        {
          name: "--file-system-id",
          description:
            "The ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of Tag objects to add. Each Tag object is a key-value pair",
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
      name: "delete-access-point",
      description:
        "Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection. This operation requires permissions for the elasticfilesystem:DeleteAccessPoint action",
      options: [
        {
          name: "--access-point-id",
          description: "The ID of the access point that you want to delete",
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
        "Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.  You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see DescribeMountTargets and DeleteMountTarget.   The DeleteFileSystem call returns while the file system state is still deleting. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the DescribeFileSystems returns a 404 FileSystemNotFound error.  This operation requires permissions for the elasticfilesystem:DeleteFileSystem action",
      options: [
        {
          name: "--file-system-id",
          description: "The ID of the file system you want to delete",
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
      name: "delete-file-system-policy",
      description:
        "Deletes the FileSystemPolicy for the specified file system. The default FileSystemPolicy goes into effect once the existing policy is deleted. For more information about the default file system policy, see Using Resource-based Policies with EFS. This operation requires permissions for the elasticfilesystem:DeleteFileSystemPolicy action",
      options: [
        {
          name: "--file-system-id",
          description:
            "Specifies the EFS file system for which to delete the FileSystemPolicy",
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
      name: "delete-mount-target",
      description:
        "Deletes the specified mount target. This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target. This operation requires permissions for the following action on the file system:    elasticfilesystem:DeleteMountTarget     The DeleteMountTarget call returns while the mount target state is still deleting. You can check the mount target deletion by calling the DescribeMountTargets operation, which returns a list of mount target descriptions for the given file system.   The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:    ec2:DeleteNetworkInterface",
      options: [
        {
          name: "--mount-target-id",
          description: "The ID of the mount target to delete (String)",
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
      name: "delete-tags",
      description:
        "Deletes the specified tags from a file system. If the DeleteTags request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see Tag Restrictions in the AWS Billing and Cost Management User Guide. This operation requires permissions for the elasticfilesystem:DeleteTags action",
      options: [
        {
          name: "--file-system-id",
          description:
            "The ID of the file system whose tags you want to delete (String)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of tag keys to delete",
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
      name: "describe-access-points",
      description:
        "Returns the description of a specific Amazon EFS access point if the AccessPointId is provided. If you provide an EFS FileSystemId, it returns descriptions of all access points for that file system. You can provide either an AccessPointId or a FileSystemId in the request, but not both.  This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action",
      options: [
        {
          name: "--max-results",
          description:
            "(Optional) When retrieving all access points for a file system, you can optionally specify the MaxItems parameter to limit the number of objects returned in a response. The default value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "NextToken is present if the response is paginated. You can use NextMarker in the subsequent request to fetch the next page of access point descriptions",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-point-id",
          description:
            "(Optional) Specifies an EFS access point to describe in the response; mutually exclusive with FileSystemId",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "(Optional) If you provide a FileSystemId, EFS returns all access points for that file system; mutually exclusive with AccessPointId",
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
      name: "describe-backup-policy",
      description:
        "Returns the backup policy for the specified EFS file system",
      options: [
        {
          name: "--file-system-id",
          description:
            "Specifies which EFS file system to retrieve the BackupPolicy for",
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
      name: "describe-file-system-policy",
      description:
        "Returns the FileSystemPolicy for the specified EFS file system. This operation requires permissions for the elasticfilesystem:DescribeFileSystemPolicy action",
      options: [
        {
          name: "--file-system-id",
          description:
            "Specifies which EFS file system to retrieve the FileSystemPolicy for",
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
        "Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided. Otherwise, it returns descriptions of all file systems owned by the caller's AWS account in the AWS Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxItems parameter to limit the number of descriptions in a response. Currently, this number is automatically set to 10. If more file system descriptions remain, Amazon EFS returns a NextMarker, an opaque token, in the response. In this case, you should send a subsequent request with the Marker request parameter set to the value of NextMarker.  To retrieve a list of your file system descriptions, this operation is used in an iterative process, where DescribeFileSystems is called first without the Marker and then the operation continues to call it with the Marker parameter set to the value of the NextMarker from the previous response until the response has no NextMarker.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multi-call iteration is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeFileSystems action",
      options: [
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "(Optional) Opaque pagination token returned from a previous DescribeFileSystems operation (String). If present, specifies to continue the list from where the returning call had left off",
          args: {
            name: "string",
          },
        },
        {
          name: "--creation-token",
          description:
            "(Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "(Optional) ID of the file system whose description you want to retrieve (String)",
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
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-lifecycle-configuration",
      description:
        "Returns the current LifecycleConfiguration object for the specified Amazon EFS file system. EFS lifecycle management uses the LifecycleConfiguration object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a LifecycleConfiguration object, the call returns an empty array in the response. This operation requires permissions for the elasticfilesystem:DescribeLifecycleConfiguration operation",
      options: [
        {
          name: "--file-system-id",
          description:
            "The ID of the file system whose LifecycleConfiguration object you want to retrieve (String)",
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
      name: "describe-mount-target-security-groups",
      description:
        "Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted. This operation requires permissions for the following actions:    elasticfilesystem:DescribeMountTargetSecurityGroups action on the mount target's file system.     ec2:DescribeNetworkInterfaceAttribute action on the mount target's network interface",
      options: [
        {
          name: "--mount-target-id",
          description:
            "The ID of the mount target whose security groups you want to retrieve",
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
      name: "describe-mount-targets",
      description:
        "Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified. This operation requires permissions for the elasticfilesystem:DescribeMountTargets action, on either the file system ID that you specify in FileSystemId, or on the file system of the mount target that you specify in MountTargetId",
      options: [
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "(Optional) Opaque pagination token returned from a previous DescribeMountTargets operation (String). If present, it specifies to continue the list from where the previous returning call left off",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "(Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if an AccessPointId or MountTargetId is not included. Accepts either a file system ID or ARN as input",
          args: {
            name: "string",
          },
        },
        {
          name: "--mount-target-id",
          description:
            "(Optional) ID of the mount target that you want to have described (String). It must be included in your request if FileSystemId is not included. Accepts either a mount target ID or ARN as input",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-point-id",
          description:
            "(Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a FileSystemId or MountTargetId is not included in your request. Accepts either an access point ID or ARN as input",
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
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-tags",
      description:
        "Returns the tags associated with a file system. The order of tags returned in the response of one DescribeTags call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeTags action",
      options: [
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "(Optional) An opaque pagination token returned from a previous DescribeTags operation (String). If present, it specifies to continue the list from where the previous call left off",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-id",
          description:
            "The ID of the file system whose tag set you want to retrieve",
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
          name: "--generate-cli-skeleton",
          description:
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
        "Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for. This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action",
      options: [
        {
          name: "--resource-id",
          description:
            "Specifies the EFS resource you want to retrieve tags for. You can retrieve tags for EFS file systems and access points using this API endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "(Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use NextToken in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated",
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
      name: "modify-mount-target-security-groups",
      description:
        "Modifies the set of security groups in effect for a mount target. When you create a mount target, Amazon EFS also creates a new network interface. For more information, see CreateMountTarget. This operation replaces the security groups in effect for the network interface associated with a mount target, with the SecurityGroups provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted.  The operation requires permissions for the following actions:    elasticfilesystem:ModifyMountTargetSecurityGroups action on the mount target's file system.     ec2:ModifyNetworkInterfaceAttribute action on the mount target's network interface",
      options: [
        {
          name: "--mount-target-id",
          description:
            "The ID of the mount target whose security groups you want to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-groups",
          description: "An array of up to five VPC security group IDs",
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
      name: "put-backup-policy",
      description:
        "Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system",
      options: [
        {
          name: "--file-system-id",
          description:
            "Specifies which EFS file system to update the backup policy for",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-policy",
          description:
            "The backup policy included in the PutBackupPolicy request",
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
      name: "put-file-system-policy",
      description:
        "Applies an Amazon EFS FileSystemPolicy to an Amazon EFS file system. A file system policy is an IAM resource-based policy and can contain multiple policy statements. A file system always has exactly one file system policy, which can be the default policy or an explicit policy set or updated using this API operation. EFS file system policies have a 20,000 character limit. When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see Default EFS File System Policy.  EFS file system policies have a 20,000 character limit. This operation requires permissions for the elasticfilesystem:PutFileSystemPolicy action",
      options: [
        {
          name: "--file-system-id",
          description:
            "The ID of the EFS file system that you want to create or update the FileSystemPolicy for",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The FileSystemPolicy that you're creating. Accepts a JSON formatted policy definition. EFS file system policies have a 20,000 character limit. To find out more about the elements that make up a file system policy, see EFS Resource-based Policies",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-policy-lockout-safety-check",
          description:
            "(Optional) A flag to indicate whether to bypass the FileSystemPolicy lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request will be locked out from making future PutFileSystemPolicy requests on the file system. Set BypassPolicyLockoutSafetyCheck to True only when you intend to prevent the principal that is making the request from making a subsequent PutFileSystemPolicy request on the file system. The default value is False",
        },
        {
          name: "--no-bypass-policy-lockout-safety-check",
          description:
            "(Optional) A flag to indicate whether to bypass the FileSystemPolicy lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request will be locked out from making future PutFileSystemPolicy requests on the file system. Set BypassPolicyLockoutSafetyCheck to True only when you intend to prevent the principal that is making the request from making a subsequent PutFileSystemPolicy request on the file system. The default value is False",
        },
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
      name: "put-lifecycle-configuration",
      description:
        "Enables lifecycle management by creating a new LifecycleConfiguration object. A LifecycleConfiguration object defines when files in an Amazon EFS file system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class. A LifecycleConfiguration applies to all files in a file system. Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a LifecycleConfiguration object already exists for the specified file system, a PutLifecycleConfiguration call modifies the existing configuration. A PutLifecycleConfiguration call with an empty LifecyclePolicies array in the request body deletes any existing LifecycleConfiguration and disables lifecycle management. In the request, specify the following:    The ID for the file system for which you are enabling, disabling, or modifying lifecycle management.   A LifecyclePolicies array of LifecyclePolicy objects that define when files are moved to the IA storage class. The array can contain only one LifecyclePolicy item.   This operation requires permissions for the elasticfilesystem:PutLifecycleConfiguration operation. To apply a LifecycleConfiguration object to an encrypted file system, you need the same AWS Key Management Service (AWS KMS) permissions as when you created the encrypted file system",
      options: [
        {
          name: "--file-system-id",
          description:
            "The ID of the file system for which you are creating the LifecycleConfiguration object (String)",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-policies",
          description:
            "An array of LifecyclePolicy objects that define the file system's LifecycleConfiguration object. A LifecycleConfiguration object tells lifecycle management when to transition files from the Standard storage class to the Infrequent Access storage class",
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
      name: "tag-resource",
      description:
        "Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:TagResource action",
      options: [
        {
          name: "--resource-id",
          description:
            "The ID specifying the EFS resource that you want to create a tag for",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
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
      description:
        "Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:UntagResource action",
      options: [
        {
          name: "--resource-id",
          description:
            "Specifies the EFS resource that you want to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The keys of the key-value tag pairs that you want to remove from the specified EFS resource",
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
      name: "update-file-system",
      description:
        "Updates the throughput mode or the amount of provisioned throughput of an existing file system",
      options: [
        {
          name: "--file-system-id",
          description: "The ID of the file system that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--throughput-mode",
          description:
            "(Optional) Updates the file system's throughput mode. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the ThroughputMode to provisioned, you must also set a value for ProvisionedThroughputInMibps",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-throughput-in-mibps",
          description:
            "(Optional) Sets the amount of provisioned throughput, in MiB/s, for the file system. Valid values are 1-1024. If you are changing the throughput mode to provisioned, you must also provide the amount of provisioned throughput. Required if ThroughputMode is changed to provisioned on update",
          args: {
            name: "double",
          },
        },
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
