var completionSpec = {
    name: "datasync",
    description: "AWS DataSync AWS DataSync is a managed data transfer service that makes it simpler for you to automate moving data between on-premises storage and Amazon Simple Storage Service (Amazon S3) or Amazon Elastic File System (Amazon EFS).  This API interface reference for AWS DataSync contains documentation for a programming interface that you can use to manage AWS DataSync.",
    subcommands: [
        {
            name: "cancel-task-execution",
            description: "Cancels execution of a task.  When you cancel a task execution, the transfer of some files is abruptly interrupted. The contents of files that are transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution on the same task and you allow the task execution to complete, file content on the destination is complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, AWS DataSync successfully complete the transfer when you start the next task execution.",
            options: [
                {
                    name: "--task-execution-arn",
                    description: "The Amazon Resource Name (ARN) of the task execution to cancel.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-agent",
            description: "Activates an AWS DataSync agent that you have deployed on your host. The activation process associates your agent with your account. In the activation process, you specify information such as the AWS Region that you want to activate the agent in. You activate the agent in the AWS Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this AWS Region. You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet. You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run.  Agents are automatically updated by AWS on a regular basis, using a mechanism that ensures minimal interruption to your tasks.",
            options: [
                {
                    name: "--activation-key",
                    description: "Your agent activation key. You can get the activation key either by sending an HTTP GET request with redirects that enable you to get the agent IP address (port 80). Alternatively, you can get it from the AWS DataSync console. The redirect URL returned in the response provides you the activation key for your agent in the query string parameter activationKey. It might also include other activation-related parameters; however, these are merely defaults. The arguments you pass to this API call determine the actual configuration of your agent. For more information, see Activating an Agent in the AWS DataSync User Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--agent-name",
                    description: "The name you configured for your agent. This value is a text reference that is used to identify the agent in the console.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The key-value pair that represents the tag that you want to associate with the agent. The value can be an empty string. This value helps you manage, filter, and search for your agents.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--vpc-endpoint-id",
                    description: "The ID of the VPC (virtual private cloud) endpoint that the agent has access to. This is the client-side VPC endpoint, also called a PrivateLink. If you don't have a PrivateLink VPC endpoint, see Creating a VPC Endpoint Service Configuration in the Amazon VPC User Guide. VPC endpoint ID looks like this: vpce-01234d5aff67890e1.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--subnet-arns",
                    description: "The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic network interfaces for each data transfer task. The agent that runs a task must be private. When you start a task that is associated with an agent created in a VPC, or one that has access to an IP address in a VPC, then the task is also private. In this case, DataSync creates four network interfaces for each task in your subnet. For a data transfer to work, the agent must be able to route to all these four network interfaces.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--security-group-arns",
                    description: "The ARNs of the security groups used to protect your data transfer task subnets. See CreateAgentRequest$SubnetArns.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-location-efs",
            description: "Creates an endpoint for an Amazon EFS file system.",
            options: [
                {
                    name: "--subdirectory",
                    description: "A subdirectory in the location\u2019s path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination. By default, AWS DataSync uses the root directory.   Subdirectory must be specified with forward slashes. For example, /path/to/folder.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--efs-filesystem-arn",
                    description: "The Amazon Resource Name (ARN) for the Amazon EFS file system.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--ec2-config",
                    description: "The subnet and security group that the Amazon EFS file system uses. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified. The exact relationship between security group M (of the mount target) and security group S (which you provide for DataSync to use at this stage) is as follows:     Security group M (which you associate with the mount target) must allow inbound access for the Transmission Control Protocol (TCP) on the NFS port (2049) from security group S. You can enable inbound connections either by IP address (CIDR range) or security group.    Security group S (provided to DataSync to access EFS) should have a rule that enables outbound connections to the NFS port on one of the file system\u2019s mount targets. You can enable outbound connections either by IP address (CIDR range) or security group. For information about security groups and mount targets, see Security Groups for Amazon EC2 Instances and Mount Targets in the Amazon EFS User Guide.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-location-fsx-windows",
            description: "Creates an endpoint for an Amazon FSx for Windows File Server file system.",
            options: [
                {
                    name: "--subdirectory",
                    description: "A subdirectory in the location\u2019s path. This subdirectory in the Amazon FSx for Windows File Server file system is used to read data from the Amazon FSx for Windows File Server source location or write data to the FSx for Windows File Server destination.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--fsx-filesystem-arn",
                    description: "The Amazon Resource Name (ARN) for the FSx for Windows File Server file system.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--security-group-arns",
                    description: "The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Windows File Server file system.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--user",
                    description: "The user who has the permissions to access files and folders in the FSx for Windows File Server file system.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain",
                    description: "The name of the Windows domain that the FSx for Windows File Server belongs to.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--password",
                    description: "The password of the user who has the permissions to access files and folders in the FSx for Windows File Server file system.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-location-nfs",
            description: "Defines a file system on a Network File System (NFS) server that can be read from or written to.",
            options: [
                {
                    name: "--subdirectory",
                    description: 'The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. The NFS path should be a path that\'s exported by the NFS server, or a subdirectory of that path. The path should be such that it can be mounted by other NFS clients in your network.  To see all the paths exported by your NFS server, run "showmount -e nfs-server-name" from an NFS client that has access to your server. You can specify any directory that appears in the results, and any subdirectory of that directory. Ensure that the NFS export is accessible without Kerberos authentication.  To transfer all the data in the folder you specified, DataSync needs to have permissions to read all the data. To ensure this, either configure the NFS export with no_root_squash, or ensure that the permissions for all of the files that you want DataSync allow read access for all users. Doing either enables the agent to read the files. For the agent to access directories, you must additionally enable all execute access. If you are copying data to or from your AWS Snowcone device, see NFS Server on AWS Snowcone for more information. For information about NFS export configuration, see 18.7. The /etc/exports Configuration File in the Red Hat Enterprise Linux documentation.',
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--server-hostname",
                    description: "The name of the NFS server. This value is the IP address or Domain Name Service (DNS) name of the NFS server. An agent that is installed on-premises uses this host name to mount the NFS server in a network.  If you are copying data to or from your AWS Snowcone device, see NFS Server on AWS Snowcone for more information.  This name must either be DNS-compliant or must be an IP version 4 (IPv4) address.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--on-prem-config",
                    description: "Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect to an NFS server.  If you are copying data to or from your AWS Snowcone device, see NFS Server on AWS Snowcone for more information.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--mount-options",
                    description: "The NFS mount options that DataSync can use to mount your NFS share.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-location-object-storage",
            description: "Creates an endpoint for a self-managed object storage bucket. For more information about self-managed object storage locations, see create-object-location.",
            options: [
                {
                    name: "--server-hostname",
                    description: "The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server. An agent uses this host name to mount the object storage server in a network.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--server-port",
                    description: "The port that your self-managed object storage server accepts inbound network traffic on. The server port is set by default to TCP 80 (HTTP) or TCP 443 (HTTPS). You can specify a custom port if your self-managed object storage server requires one.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--server-protocol",
                    description: "The protocol that the object storage server uses to communicate. Valid values are HTTP or HTTPS.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--subdirectory",
                    description: "The subdirectory in the self-managed object storage server that is used to read data from.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--bucket-name",
                    description: "The bucket on the self-managed object storage server that is used to read data from.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--access-key",
                    description: "Optional. The access key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use AccessKey and SecretKey to provide the user name and password, respectively.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--secret-key",
                    description: "Optional. The secret key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use AccessKey and SecretKey to provide the user name and password, respectively.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--agent-arns",
                    description: "The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-location-s3",
            description: "Creates an endpoint for an Amazon S3 bucket. For more information, see https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli in the AWS DataSync User Guide.",
            options: [
                {
                    name: "--subdirectory",
                    description: "A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--s3-bucket-arn",
                    description: "The ARN of the Amazon S3 bucket. If the bucket is on an AWS Outpost, this must be an access point ARN.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--s3-storage-class",
                    description: "The Amazon S3 storage class that you want to store your files in when this location is used as a task destination. For buckets in AWS Regions, the storage class defaults to Standard. For buckets on AWS Outposts, the storage class defaults to AWS S3 Outposts. For more information about S3 storage classes, see Amazon S3 Storage Classes. Some storage classes have behaviors that can affect your S3 storage cost. For detailed information, see using-storage-classes.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--s3-config",
                    description: "The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket. For detailed information about using such a role, see Creating a Location for Amazon S3 in the AWS DataSync User Guide.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--agent-arns",
                    description: "If you are using DataSync on an AWS Outpost, specify the Amazon Resource Names (ARNs) of the DataSync agents deployed on your Outpost. For more information about launching a DataSync agent on an AWS Outpost, see outposts-agent.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-location-smb",
            description: "Defines a file system on a Server Message Block (SMB) server that can be read from or written to.",
            options: [
                {
                    name: "--subdirectory",
                    description: "The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. The SMB path should be a path that's exported by the SMB server, or a subdirectory of that path. The path should be such that it can be mounted by other SMB clients in your network.   Subdirectory must be specified with forward slashes. For example, /path/to/folder.  To transfer all the data in the folder you specified, DataSync needs to have permissions to mount the SMB share, as well as to access all the data in that share. To ensure this, either ensure that the user/password specified belongs to the user who can mount the share, and who has the appropriate permissions for all of the files and directories that you want DataSync to access, or use credentials of a member of the Backup Operators group to mount the share. Doing either enables the agent to access the data. For the agent to access directories, you must additionally enable all execute access.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--server-hostname",
                    description: "The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server. An agent that is installed on-premises uses this hostname to mount the SMB server in a network.  This name must either be DNS-compliant or must be an IP version 4 (IPv4) address.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--user",
                    description: "The user who can mount the share, has the permissions to access files and folders in the SMB share.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain",
                    description: "The name of the Windows domain that the SMB server belongs to.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--password",
                    description: "The password of the user who can mount the share, has the permissions to access files and folders in the SMB share.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--agent-arns",
                    description: "The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--mount-options",
                    description: "The mount options used by DataSync to access the SMB server.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-task",
            description: "Creates a task. A task includes a source location and a destination location, and a configuration that specifies how data is transferred. A task always transfers data from the source location to the destination location. The configuration specifies options such as task scheduling, bandwidth limits, etc. A task is the complete definition of a data transfer. When you create a task that transfers data between AWS services in different AWS Regions, one of the two locations that you specify must reside in the Region where DataSync is being used. The other location must be specified in a different Region. You can transfer data between commercial AWS Regions except for China, or between AWS GovCloud (US-East and US-West) Regions.  When you use DataSync to copy files or objects between AWS Regions, you pay for data transfer between Regions. This is billed as data transfer OUT from your source Region to your destination Region. For more information, see Data Transfer pricing.",
            options: [
                {
                    name: "--source-location-arn",
                    description: "The Amazon Resource Name (ARN) of the source location for the task.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--destination-location-arn",
                    description: "The Amazon Resource Name (ARN) of an AWS storage resource's location.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cloud-watch-log-group-arn",
                    description: "The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor and log events in the task.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--name",
                    description: "The name of a task. This value is a text reference that is used to identify the task in the console.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--options",
                    description: "The set of configuration options that control the behavior of a single execution of the task that occurs when you call StartTaskExecution. You can configure these options to preserve metadata such as user ID (UID) and group ID (GID), file permissions, data integrity verification, and so on. For each individual task execution, you can override these options by specifying the OverrideOptions before starting the task execution. For more information, see the operation.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--excludes",
                    description: 'A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example, "/folder1|/folder2".',
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--schedule",
                    description: "Specifies a schedule used to periodically transfer files from a source to a destination location. The schedule should be specified in UTC time. For more information, see task-scheduling.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The key-value pair that represents the tag that you want to add to the resource. The value can be an empty string.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-agent",
            description: "Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your AWS account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.",
            options: [
                {
                    name: "--agent-arn",
                    description: "The Amazon Resource Name (ARN) of the agent to delete. Use the ListAgents operation to return a list of agents for your account and AWS Region.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-location",
            description: "Deletes the configuration of a location used by AWS DataSync.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the location to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-task",
            description: "Deletes a task.",
            options: [
                {
                    name: "--task-arn",
                    description: "The Amazon Resource Name (ARN) of the task to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-agent",
            description: "Returns metadata such as the name, the network interfaces, and the status (that is, whether the agent is running or not) for an agent. To specify which agent to describe, use the Amazon Resource Name (ARN) of the agent in your request.",
            options: [
                {
                    name: "--agent-arn",
                    description: "The Amazon Resource Name (ARN) of the agent to describe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-location-efs",
            description: "Returns metadata, such as the path information about an Amazon EFS location.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the EFS location to describe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-location-fsx-windows",
            description: "Returns metadata, such as the path information about an Amazon FSx for Windows File Server location.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the FSx for Windows File Server location to describe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-location-nfs",
            description: "Returns metadata, such as the path information, about an NFS location.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the NFS location to describe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-location-object-storage",
            description: "Returns metadata about a self-managed object storage server location. For more information about self-managed object storage locations, see create-object-location.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the self-managed object storage server location that was described.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-location-s3",
            description: "Returns metadata, such as bucket name, about an Amazon S3 bucket location.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the Amazon S3 bucket location to describe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-location-smb",
            description: "Returns metadata, such as the path and user information about an SMB location.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the SMB location to describe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-task",
            description: "Returns metadata about a task.",
            options: [
                {
                    name: "--task-arn",
                    description: "The Amazon Resource Name (ARN) of the task to describe.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-task-execution",
            description: "Returns detailed metadata about a task that is being executed.",
            options: [
                {
                    name: "--task-execution-arn",
                    description: "The Amazon Resource Name (ARN) of the task that is being executed.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-agents",
            description: "Returns a list of agents owned by an AWS account in the AWS Region specified in the request. The returned list is ordered by agent Amazon Resource Name (ARN). By default, this operation returns a maximum of 100 agents. This operation supports pagination that enables you to optionally reduce the number of agents returned in a response. If you have more agents than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a marker that you can specify in your next request to fetch the next page of agents.",
            options: [
                {
                    name: "--max-results",
                    description: "The maximum number of agents to list.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "An opaque string that indicates the position at which to begin the next list of agents.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-locations",
            description: "Returns a list of source and destination locations. If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.",
            options: [
                {
                    name: "--max-results",
                    description: "The maximum number of locations to return.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "An opaque string that indicates the position at which to begin the next list of locations.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "You can use API filters to narrow down the list of resources returned by ListLocations. For example, to retrieve all tasks on a specific source location, you can use ListLocations with filter name LocationType S3 and Operator Equals.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-tags-for-resource",
            description: "Returns all the tags associated with a specified resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource whose tags to list.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of locations to return.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "An opaque string that indicates the position at which to begin the next list of locations.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-task-executions",
            description: "Returns a list of executed tasks.",
            options: [
                {
                    name: "--task-arn",
                    description: "The Amazon Resource Name (ARN) of the task whose tasks you want to list.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of executed tasks to list.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "An opaque string that indicates the position at which to begin the next list of the executed tasks.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-tasks",
            description: "Returns a list of all the tasks.",
            options: [
                {
                    name: "--max-results",
                    description: "The maximum number of tasks to return.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "An opaque string that indicates the position at which to begin the next list of tasks.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "You can use API filters to narrow down the list of resources returned by ListTasks. For example, to retrieve all tasks on a specific source location, you can use ListTasks with filter name LocationId and Operator Equals with the ARN for the location.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "start-task-execution",
            description: "Starts a specific invocation of a task. A TaskExecution value represents an individual run of a task. Each task can have at most one TaskExecution at a time.  TaskExecution has the following transition phases: INITIALIZING | PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE.  For detailed information, see the Task Execution section in the Components and Terminology topic in the AWS DataSync User Guide.",
            options: [
                {
                    name: "--task-arn",
                    description: "The Amazon Resource Name (ARN) of the task to start.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--override-options",
                    description: "Represents the options that are available to control the behavior of a StartTaskExecution operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on. A task has a set of default options associated with it. If you don't specify an option in StartTaskExecution, the default value is used. You can override the defaults options on each task execution by specifying an overriding Options value to StartTaskExecution.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--includes",
                    description: 'A list of filter rules that determines which files to include when running a task. The pattern should contain a single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe). For example: "/folder1|/folder2"',
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "tag-resource",
            description: "Applies a key-value pair to an AWS resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource to apply the tag to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The tags to apply.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "untag-resource",
            description: "Removes a tag from an AWS resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource to remove the tag from.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--keys",
                    description: "The keys in the key-value pair in the tag to remove.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-agent",
            description: "Updates the name of an agent.",
            options: [
                {
                    name: "--agent-arn",
                    description: "The Amazon Resource Name (ARN) of the agent to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name that you want to use to configure the agent.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-location-nfs",
            description: "Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see create-nfs-location.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the NFS location to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--subdirectory",
                    description: 'The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. The NFS path should be a path that\'s exported by the NFS server, or a subdirectory of that path. The path should be such that it can be mounted by other NFS clients in your network. To see all the paths exported by your NFS server, run "showmount -e nfs-server-name" from an NFS client that has access to your server. You can specify any directory that appears in the results, and any subdirectory of that directory. Ensure that the NFS export is accessible without Kerberos authentication.  To transfer all the data in the folder that you specified, DataSync must have permissions to read all the data. To ensure this, either configure the NFS export with no_root_squash, or ensure that the files you want DataSync to access have permissions that allow read access for all users. Doing either option enables the agent to read the files. For the agent to access directories, you must additionally enable all execute access. If you are copying data to or from your AWS Snowcone device, see NFS Server on AWS Snowcone for more information. For information about NFS export configuration, see 18.7. The /etc/exports Configuration File in the Red Hat Enterprise Linux documentation.',
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--on-prem-config",
                    description: "A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--mount-options",
                    description: "Represents the mount options that are available for DataSync to access an NFS location.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-location-object-storage",
            description: "Updates some of the parameters of a previously created location for self-managed object storage server access. For information about creating a self-managed object storage location, see create-object-location.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the self-managed object storage server location to be updated.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--server-port",
                    description: "The port that your self-managed object storage server accepts inbound network traffic on. The server port is set by default to TCP 80 (HTTP) or TCP 443 (HTTPS). You can specify a custom port if your self-managed object storage server requires one.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--server-protocol",
                    description: "The protocol that the object storage server uses to communicate. Valid values are HTTP or HTTPS.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--subdirectory",
                    description: "The subdirectory in the self-managed object storage server that is used to read data from.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--access-key",
                    description: "Optional. The access key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use AccessKey and SecretKey to provide the user name and password, respectively.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--secret-key",
                    description: "Optional. The secret key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use AccessKey and SecretKey to provide the user name and password, respectively.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--agent-arns",
                    description: "The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-location-smb",
            description: "Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see create-smb-location.",
            options: [
                {
                    name: "--location-arn",
                    description: "The Amazon Resource Name (ARN) of the SMB location to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--subdirectory",
                    description: "The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. The SMB path should be a path that's exported by the SMB server, or a subdirectory of that path. The path should be such that it can be mounted by other SMB clients in your network.   Subdirectory must be specified with forward slashes. For example, /path/to/folder.  To transfer all the data in the folder that you specified, DataSync must have permissions to mount the SMB share and to access all the data in that share. To ensure this, do either of the following:   Ensure that the user/password specified belongs to the user who can mount the share and who has the appropriate permissions for all of the files and directories that you want DataSync to access.   Use credentials of a member of the Backup Operators group to mount the share.    Doing either of these options enables the agent to access the data. For the agent to access directories, you must also enable all execute access.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--user",
                    description: "The user who can mount the share has the permissions to access files and folders in the SMB share.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--domain",
                    description: "The name of the Windows domain that the SMB server belongs to.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--password",
                    description: "The password of the user who can mount the share has the permissions to access files and folders in the SMB share.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--agent-arns",
                    description: "The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--mount-options",
                    description: "Represents the mount options that are available for DataSync to access an SMB location.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-task",
            description: "Updates the metadata associated with a task.",
            options: [
                {
                    name: "--task-arn",
                    description: "The Amazon Resource Name (ARN) of the resource name of the task to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--options",
                    description: "Represents the options that are available to control the behavior of a StartTaskExecution operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on. A task has a set of default options associated with it. If you don't specify an option in StartTaskExecution, the default value is used. You can override the defaults options on each task execution by specifying an overriding Options value to StartTaskExecution.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--excludes",
                    description: 'A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example: "/folder1|/folder2"',
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--schedule",
                    description: "Specifies a schedule used to periodically transfer files from a source to a destination location. You can configure your task to execute hourly, daily, weekly or on specific days of the week. You control when in the day or hour you want the task to execute. The time you specify is UTC time. For more information, see task-scheduling.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--name",
                    description: "The name of the task to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cloud-watch-log-group-arn",
                    description: "The Amazon Resource Name (ARN) of the resource name of the CloudWatch LogGroup.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-task-execution",
            description: "Updates execution of a task. You can modify bandwidth throttling for a task execution that is running or queued. For more information, see Adjusting Bandwidth Throttling for a Task Execution.  The only Option that can be modified by UpdateTaskExecution is  BytesPerSecond .",
            options: [
                {
                    name: "--task-execution-arn",
                    description: "The Amazon Resource Name (ARN) of the specific task execution that is being updated.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--options",
                    description: "Represents the options that are available to control the behavior of a StartTaskExecution operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on. A task has a set of default options associated with it. If you don't specify an option in StartTaskExecution, the default value is used. You can override the defaults options on each task execution by specifying an overriding Options value to StartTaskExecution.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
    ],
};

