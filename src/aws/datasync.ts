const completionSpec: Fig.Spec = {
  name: "datasync",
  description:
    "DataSync DataSync is an online data movement and discovery service that simplifies data migration and helps you quickly, easily, and securely transfer your file or object data to, from, and between Amazon Web Services storage services. This API interface reference includes documentation for using DataSync programmatically. For complete information, see the  DataSync User Guide",
  subcommands: [
    {
      name: "add-storage-system",
      description:
        "Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect information about",
      options: [
        {
          name: "--server-configuration",
          description:
            "Specifies the server name and network port required to connect with the management interface of your on-premises storage system",
          args: {
            name: "structure",
          },
        },
        {
          name: "--system-type",
          description:
            "Specifies the type of on-premises storage system that you want DataSync Discovery to collect information about.  DataSync Discovery currently supports NetApp Fabric-Attached Storage (FAS) and All Flash FAS (AFF) systems running ONTAP 9.7 or later",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-arns",
          description:
            "Specifies the Amazon Resource Name (ARN) of the DataSync agent that connects to and reads from your on-premises storage system's management interface. You can only specify one ARN",
          args: {
            name: "list",
          },
        },
        {
          name: "--cloud-watch-log-group-arn",
          description:
            "Specifies the ARN of the Amazon CloudWatch log group for monitoring and logging discovery job events",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your on-premises storage system",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description:
            "Specifies a familiar name for your on-premises storage system",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a client token to make sure requests with this API operation are idempotent. If you don't specify a client token, DataSync generates one for you automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--credentials",
          description:
            "Specifies the user name and password for accessing your on-premises storage system's management interface",
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
      name: "cancel-task-execution",
      description:
        "Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution",
      options: [
        {
          name: "--task-execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the task execution to stop",
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
      name: "create-agent",
      description:
        "Activates an DataSync agent that you deploy in your storage environment. The activation process associates the agent with your Amazon Web Services account. If you haven't deployed an agent yet, see Do I need a DataSync agent?",
      options: [
        {
          name: "--activation-key",
          description:
            "Specifies your DataSync agent's activation key. If you don't have an activation key, see Activating your agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-name",
          description:
            "Specifies a name for your agent. We recommend specifying a name that you can remember",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least one tag for your agent",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-endpoint-id",
          description:
            "Specifies the ID of the VPC service endpoint that you're using. For example, a VPC endpoint ID looks like vpce-01234d5aff67890e1.  The VPC service endpoint you use must include the DataSync service name (for example, com.amazonaws.us-east-2.datasync)",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-arns",
          description:
            "Specifies the ARN of the subnet where your VPC service endpoint is located. You can only specify one ARN",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-arns",
          description:
            "Specifies the Amazon Resource Name (ARN) of the security group that allows traffic between your agent and VPC service endpoint. You can only specify one ARN",
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
      name: "create-location-azure-blob",
      description:
        "Creates a transfer location for a Microsoft Azure Blob Storage container. DataSync can use this location as a transfer source or destination. Before you begin, make sure you know how DataSync accesses Azure Blob Storage and works with access tiers and blob types. You also need a DataSync agent that can connect to your container",
      options: [
        {
          name: "--container-url",
          description:
            "Specifies the URL of the Azure Blob Storage container involved in your transfer",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-type",
          description:
            "Specifies the authentication method DataSync uses to access your Azure Blob Storage. DataSync can access blob storage using a shared access signature (SAS)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sas-configuration",
          description:
            "Specifies the SAS configuration that allows DataSync to access your Azure Blob Storage",
          args: {
            name: "structure",
          },
        },
        {
          name: "--blob-type",
          description:
            "Specifies the type of blob that you want your objects or files to be when transferring them into Azure Blob Storage. Currently, DataSync only supports moving data into Azure Blob Storage as block blobs. For more information on blob types, see the Azure Blob Storage documentation",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-tier",
          description:
            "Specifies the access tier that you want your objects or files transferred into. This only applies when using the location as a transfer destination. For more information, see Access tiers",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdirectory",
          description:
            "Specifies path segments if you want to limit your transfer to a virtual directory in your container (for example, /my/images)",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-arns",
          description:
            "Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container. You can specify more than one agent. For more information, see Using multiple agents for your transfer",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your transfer location",
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
      name: "create-location-efs",
      description:
        "Creates a transfer location for an Amazon EFS file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses Amazon EFS file systems",
      options: [
        {
          name: "--subdirectory",
          description:
            "Specifies a mount path for your Amazon EFS file system. This is where DataSync reads or writes data (depending on if this is a source or destination location) on your file system. By default, DataSync uses the root directory (or access point if you provide one by using AccessPointArn). You can also include subdirectories using forward slashes (for example, /path/to/folder)",
          args: {
            name: "string",
          },
        },
        {
          name: "--efs-filesystem-arn",
          description: "Specifies the ARN for your Amazon EFS file system",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-config",
          description:
            "Specifies the subnet and security groups DataSync uses to connect to one of your Amazon EFS file system's mount targets",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies the key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location",
          args: {
            name: "list",
          },
        },
        {
          name: "--access-point-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to mount your Amazon EFS file system. For more information, see Accessing restricted file systems",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-access-role-arn",
          description:
            "Specifies an Identity and Access Management (IAM) role that allows DataSync to access your Amazon EFS file system. For information on creating this role, see Creating a DataSync IAM role for file system access",
          args: {
            name: "string",
          },
        },
        {
          name: "--in-transit-encryption",
          description:
            "Specifies whether you want DataSync to use Transport Layer Security (TLS) 1.2 encryption when it transfers data to or from your Amazon EFS file system. If you specify an access point using AccessPointArn or an IAM role using FileSystemAccessRoleArn, you must set this parameter to TLS1_2",
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
      name: "create-location-fsx-lustre",
      description:
        "Creates a transfer location for an Amazon FSx for Lustre file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for Lustre file systems",
      options: [
        {
          name: "--fsx-filesystem-arn",
          description:
            "The Amazon Resource Name (ARN) for the FSx for Lustre file system",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-arns",
          description:
            "The Amazon Resource Names (ARNs) of the security groups that are used to configure the FSx for Lustre file system",
          args: {
            name: "list",
          },
        },
        {
          name: "--subdirectory",
          description:
            "A subdirectory in the location's path. This subdirectory in the FSx for Lustre file system is used to read data from the FSx for Lustre source location or write data to the FSx for Lustre destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location",
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
      name: "create-location-fsx-ontap",
      description:
        "Creates a transfer location for an Amazon FSx for NetApp ONTAP file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for ONTAP file systems",
      options: [
        {
          name: "--protocol",
          description:
            "Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system",
          args: {
            name: "structure",
          },
        },
        {
          name: "--security-group-arns",
          description:
            "Specifies the Amazon EC2 security groups that provide access to your file system's preferred subnet. The security groups must allow outbound traffic on the following ports (depending on the protocol you use):    Network File System (NFS): TCP ports 111, 635, and 2049    Server Message Block (SMB): TCP port 445   Your file system's security groups must also allow inbound traffic on the same ports",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-virtual-machine-arn",
          description:
            "Specifies the ARN of the storage virtual machine (SVM) in your file system where you want to copy data to or from",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdirectory",
          description:
            "Specifies a path to the file share in the SVM where you'll copy your data. You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares). For example, your mount path might be /vol1, /vol1/tree1, or /share1.  Don't specify a junction path in the SVM's root volume. For more information, see Managing FSx for ONTAP storage virtual machines in the Amazon FSx for NetApp ONTAP User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location",
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
      name: "create-location-fsx-open-zfs",
      description:
        "Creates a transfer location for an Amazon FSx for OpenZFS file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for OpenZFS file systems.  Request parameters related to SMB aren't supported with the CreateLocationFsxOpenZfs operation",
      options: [
        {
          name: "--fsx-filesystem-arn",
          description:
            "The Amazon Resource Name (ARN) of the FSx for OpenZFS file system",
          args: {
            name: "string",
          },
        },
        {
          name: "--protocol",
          description:
            "The type of protocol that DataSync uses to access your file system",
          args: {
            name: "structure",
          },
        },
        {
          name: "--security-group-arns",
          description:
            "The ARNs of the security groups that are used to configure the FSx for OpenZFS file system",
          args: {
            name: "list",
          },
        },
        {
          name: "--subdirectory",
          description:
            "A subdirectory in the location's path that must begin with /fsx. DataSync uses this subdirectory to read or write data (depending on whether the file system is a source or destination location)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location",
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
      name: "create-location-fsx-windows",
      description:
        "Creates a transfer location for an Amazon FSx for Windows File Server file system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses FSx for Windows File Server file systems",
      options: [
        {
          name: "--subdirectory",
          description:
            "Specifies a mount path for your file system using forward slashes. This is where DataSync reads or writes data (depending on if this is a source or destination location)",
          args: {
            name: "string",
          },
        },
        {
          name: "--fsx-filesystem-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) for the FSx for Windows File Server file system",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-arns",
          description:
            "Specifies the ARNs of the Amazon EC2 security groups that provide access to your file system's preferred subnet. The security groups that you specify must be able to communicate with your file system's security groups. For information about configuring security groups for file system access, see the  Amazon FSx for Windows File Server User Guide .  If you choose a security group that doesn't allow connections from within itself, do one of the following:   Configure the security group to allow it to communicate within itself.   Choose a different security group that can communicate with the mount target's security group",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location",
          args: {
            name: "list",
          },
        },
        {
          name: "--user",
          description:
            "Specifies the user with the permissions to mount and access the files, folders, and file metadata in your FSx for Windows File Server file system. For information about choosing a user with the right level of access for your transfer, see required permissions for FSx for Windows File Server locations",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "Specifies the name of the Microsoft Active Directory domain that the FSx for Windows File Server file system belongs to. If you have multiple Active Directory domains in your environment, configuring this parameter makes sure that DataSync connects to the right file system",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "Specifies the password of the user with the permissions to mount and access the files, folders, and file metadata in your FSx for Windows File Server file system",
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
      name: "create-location-hdfs",
      description:
        "Creates a transfer location for a Hadoop Distributed File System (HDFS). DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses HDFS clusters",
      options: [
        {
          name: "--subdirectory",
          description:
            "A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-nodes",
          description:
            "The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode",
          args: {
            name: "list",
          },
        },
        {
          name: "--block-size",
          description:
            "The size of data blocks to write into the HDFS cluster. The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--replication-factor",
          description:
            "The number of DataNodes to replicate the data to when writing to the HDFS cluster. By default, data is replicated to three DataNodes",
          args: {
            name: "integer",
          },
        },
        {
          name: "--kms-key-provider-uri",
          description:
            "The URI of the HDFS cluster's Key Management Server (KMS)",
          args: {
            name: "string",
          },
        },
        {
          name: "--qop-configuration",
          description:
            "The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. If QopConfiguration isn't specified, RpcProtection and DataTransferProtection default to PRIVACY. If you set RpcProtection or DataTransferProtection, the other parameter assumes the same value",
          args: {
            name: "structure",
          },
        },
        {
          name: "--authentication-type",
          description:
            "The type of authentication used to determine the identity of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--simple-user",
          description:
            "The user name used to identify the client on the host operating system.   If SIMPLE is specified for AuthenticationType, this parameter is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--kerberos-principal",
          description:
            "The Kerberos principal with access to the files and folders on the HDFS cluster.   If KERBEROS is specified for AuthenticationType, this parameter is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--kerberos-keytab",
          description:
            "The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. You can load the keytab from a file by providing the file's address. If you're using the CLI, it performs base64 encoding for you. Otherwise, provide the base64-encoded text.   If KERBEROS is specified for AuthenticationType, this parameter is required",
          args: {
            name: "blob",
          },
        },
        {
          name: "--kerberos-krb5-conf",
          description:
            "The krb5.conf file that contains the Kerberos configuration information. You can load the krb5.conf file by providing the file's address. If you're using the CLI, it performs the base64 encoding for you. Otherwise, provide the base64-encoded text.   If KERBEROS is specified for AuthenticationType, this parameter is required",
          args: {
            name: "blob",
          },
        },
        {
          name: "--agent-arns",
          description:
            "The Amazon Resource Names (ARNs) of the DataSync agents that can connect to your HDFS cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources",
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
      name: "create-location-nfs",
      description:
        "Creates a transfer location for a Network File System (NFS) file server. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses NFS file servers.  If you're copying data to or from an Snowcone device, you can also use CreateLocationNfs to create your transfer location. For more information, see Configuring transfers with Snowcone",
      options: [
        {
          name: "--subdirectory",
          description:
            "Specifies the export path in your NFS file server that you want DataSync to mount. This path (or a subdirectory of the path) is where DataSync transfers data to or from. For information on configuring an export for DataSync, see Accessing NFS file servers",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-hostname",
          description:
            "Specifies the Domain Name System (DNS) name or IP version 4 address of the NFS file server that your DataSync agent connects to",
          args: {
            name: "string",
          },
        },
        {
          name: "--on-prem-config",
          description:
            "Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect to your NFS file server. You can specify more than one agent. For more information, see Using multiple DataSync agents",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mount-options",
          description:
            "Specifies the options that DataSync can use to mount your NFS file server",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location",
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
      name: "create-location-object-storage",
      description:
        "Creates a transfer location for an object storage system. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand the prerequisites for DataSync to work with object storage systems",
      options: [
        {
          name: "--server-hostname",
          description:
            "Specifies the domain name or IP address of the object storage server. A DataSync agent uses this hostname to mount the object storage server in a network",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-port",
          description:
            "Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--server-protocol",
          description:
            "Specifies the protocol that your object storage server uses to communicate",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdirectory",
          description:
            "Specifies the object prefix for your object storage server. If this is a source location, DataSync only copies objects with this prefix. If this is a destination location, DataSync writes all objects with this prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-name",
          description:
            "Specifies the name of the object storage bucket involved in the transfer",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-key",
          description:
            "Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-key",
          description:
            "Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-arns",
          description:
            "Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies the key-value pair that represents a tag that you want to add to the resource. Tags can help you manage, filter, and search for your resources. We recommend creating a name tag for your location",
          args: {
            name: "list",
          },
        },
        {
          name: "--server-certificate",
          description:
            "Specifies a certificate chain for DataSync to authenticate with your object storage system if the system uses a private or self-signed certificate authority (CA). You must specify a single .pem file with a full certificate chain (for example, file:///home/user/.ssh/object_storage_certificates.pem). The certificate chain might include:   The object storage system's certificate   All intermediate certificates (if there are any)   The root certificate of the signing CA   You can concatenate your certificates into a .pem file (which can be up to 32768 bytes before base64 encoding). The following example cat command creates an object_storage_certificates.pem file that includes three certificates:  cat object_server_certificate.pem intermediate_certificate.pem ca_root_certificate.pem > object_storage_certificates.pem  To use this parameter, configure ServerProtocol to HTTPS",
          args: {
            name: "blob",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-location-s3",
      description:
        "Creates a transfer location for an Amazon S3 bucket. DataSync can use this location as a source or destination for transferring data.  Before you begin, make sure that you read the following topics:    Storage class considerations with Amazon S3 locations     Evaluating S3 request costs when using DataSync      For more information, see Configuring transfers with Amazon S3",
      options: [
        {
          name: "--subdirectory",
          description:
            "Specifies a prefix in the S3 bucket that DataSync reads from or writes to (depending on whether the bucket is a source or destination location).  DataSync can't transfer objects with a prefix that begins with a slash (/) or includes //, /./, or /../ patterns. For example:    /photos     photos//2006/January     photos/./2006/February     photos/../2006/March",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-arn",
          description:
            "Specifies the ARN of the S3 bucket that you want to use as a location. (When creating your DataSync task later, you specify whether this location is a transfer source or destination.)  If your S3 bucket is located on an Outposts resource, you must specify an Amazon S3 access point. For more information, see Managing data access with Amazon S3 access points in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-storage-class",
          description:
            "Specifies the storage class that you want your objects to use when Amazon S3 is a transfer destination. For buckets in Amazon Web Services Regions, the storage class defaults to STANDARD. For buckets on Outposts, the storage class defaults to OUTPOSTS. For more information, see Storage class considerations with Amazon S3 transfers",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-config",
          description:
            "Specifies the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that DataSync uses to access your S3 bucket. For more information, see Accessing S3 buckets",
          args: {
            name: "structure",
          },
        },
        {
          name: "--agent-arns",
          description:
            "(Amazon S3 on Outposts only) Specifies the Amazon Resource Name (ARN) of the DataSync agent on your Outpost. For more information, see Deploy your DataSync agent on Outposts",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your transfer location",
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
      name: "create-location-smb",
      description:
        "Creates a transfer location for a Server Message Block (SMB) file server. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you understand how DataSync accesses SMB file servers",
      options: [
        {
          name: "--subdirectory",
          description:
            "Specifies the name of the share exported by your SMB file server where DataSync will read or write data. You can include a subdirectory in the share path (for example, /path/to/subdirectory). Make sure that other SMB clients in your network can also mount this path. To copy all data in the subdirectory, DataSync must be able to mount the SMB share and access all of its data. For more information, see required permissions for SMB locations",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-hostname",
          description:
            "Specifies the Domain Name Service (DNS) name or IP address of the SMB file server that your DataSync agent will mount.  You can't specify an IP version 6 (IPv6) address",
          args: {
            name: "string",
          },
        },
        {
          name: "--user",
          description:
            "Specifies the user that can mount and access the files, folders, and file metadata in your SMB file server. For information about choosing a user with the right level of access for your transfer, see required permissions for SMB locations",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "Specifies the name of the Active Directory domain that your SMB file server belongs to.  If you have multiple Active Directory domains in your environment, configuring this parameter makes sure that DataSync connects to the right file server",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "Specifies the password of the user who can mount your SMB file server and has permission to access the files and folders involved in your transfer. For more information, see required permissions for SMB locations",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-arns",
          description:
            "Specifies the DataSync agent (or agents) that can connect to your SMB file server. You specify an agent by using its Amazon Resource Name (ARN)",
          args: {
            name: "list",
          },
        },
        {
          name: "--mount-options",
          description:
            "Specifies the version of the SMB protocol that DataSync uses to access your SMB file server",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location",
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
      name: "create-task",
      description:
        "Configures a task, which defines where and how DataSync transfers your data. A task includes a source location, destination location, and transfer options (such as bandwidth limits, scheduling, and more).  If you're planning to transfer data to or from an Amazon S3 location, review how DataSync can affect your S3 request charges and the DataSync pricing page before you begin",
      options: [
        {
          name: "--source-location-arn",
          description: "Specifies the ARN of your transfer's source location",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-location-arn",
          description:
            "Specifies the ARN of your transfer's destination location",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-log-group-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of an Amazon CloudWatch log group for monitoring your task. For Enhanced mode tasks, you don't need to specify anything. DataSync automatically sends logs to a CloudWatch log group named /aws/datasync",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Specifies the name of your task",
          args: {
            name: "string",
          },
        },
        {
          name: "--options",
          description:
            "Specifies your task's settings, such as preserving file metadata, verifying data integrity, among other options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--excludes",
          description:
            "Specifies exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer. For more information and examples, see Specifying what DataSync transfers by using filters",
          args: {
            name: "list",
          },
        },
        {
          name: "--schedule",
          description:
            "Specifies a schedule for when you want your task to run. For more information, see Scheduling your task",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies the tags that you want to apply to your task.  Tags are key-value pairs that help you manage, filter, and search for your DataSync resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--includes",
          description:
            "Specifies include filters that define the files, objects, and folders in your source location that you want DataSync to transfer. For more information and examples, see Specifying what DataSync transfers by using filters",
          args: {
            name: "list",
          },
        },
        {
          name: "--manifest-config",
          description:
            "Configures a manifest, which is a list of files or objects that you want DataSync to transfer. For more information and configuration examples, see Specifying what DataSync transfers by using a manifest. When using this parameter, your caller identity (the role that you're using DataSync with) must have the iam:PassRole permission. The AWSDataSyncFullAccess policy includes this permission",
          args: {
            name: "structure",
          },
        },
        {
          name: "--task-report-config",
          description:
            "Specifies how you want to configure a task report, which provides detailed information about your DataSync transfer. For more information, see Monitoring your DataSync transfers with task reports. When using this parameter, your caller identity (the role that you're using DataSync with) must have the iam:PassRole permission. The AWSDataSyncFullAccess policy includes this permission",
          args: {
            name: "structure",
          },
        },
        {
          name: "--task-mode",
          description:
            "Specifies one of the following task modes for your data transfer:    ENHANCED - Transfer virtually unlimited numbers of objects with higher performance than Basic mode. Enhanced mode tasks optimize the data transfer process by listing, preparing, transferring, and verifying data in parallel. Enhanced mode is currently available for transfers between Amazon S3 locations.  To create an Enhanced mode task, the IAM role that you use to call the CreateTask operation must have the iam:CreateServiceLinkedRole permission.     BASIC (default) - Transfer files or objects between Amazon Web Services storage and all other supported DataSync locations. Basic mode tasks are subject to quotas on the number of files, objects, and directories in a dataset. Basic mode sequentially prepares, transfers, and verifies data, making it slower than Enhanced mode for most workloads.   For more information, see Understanding task mode differences",
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
      name: "delete-agent",
      description:
        "Removes an DataSync agent resource from your Amazon Web Services account. Keep in mind that this operation (which can't be undone) doesn't remove the agent's virtual machine (VM) or Amazon EC2 instance from your storage environment. For next steps, you can delete the VM or instance from your storage environment or reuse it to activate a new agent",
      options: [
        {
          name: "--agent-arn",
          description:
            "The Amazon Resource Name (ARN) of the agent to delete. Use the ListAgents operation to return a list of agents for your account and Amazon Web Services Region",
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
      name: "delete-location",
      description: "Deletes a transfer location resource from DataSync",
      options: [
        {
          name: "--location-arn",
          description:
            "The Amazon Resource Name (ARN) of the location to delete",
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
      name: "delete-task",
      description: "Deletes a transfer task resource from DataSync",
      options: [
        {
          name: "--task-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the task that you want to delete",
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
      name: "describe-agent",
      description:
        "Returns information about an DataSync agent, such as its name, service endpoint type, and status",
      options: [
        {
          name: "--agent-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the DataSync agent that you want information about",
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
      name: "describe-discovery-job",
      description: "Returns information about a DataSync discovery job",
      options: [
        {
          name: "--discovery-job-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the discovery job that you want information about",
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
      name: "describe-location-azure-blob",
      description:
        "Provides details about how an DataSync transfer location for Microsoft Azure Blob Storage is configured",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of your Azure Blob Storage transfer location",
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
      name: "describe-location-efs",
      description:
        "Provides details about how an DataSync transfer location for an Amazon EFS file system is configured",
      options: [
        {
          name: "--location-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon EFS file system location that you want information about",
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
      name: "describe-location-fsx-lustre",
      description:
        "Provides details about how an DataSync transfer location for an Amazon FSx for Lustre file system is configured",
      options: [
        {
          name: "--location-arn",
          description:
            "The Amazon Resource Name (ARN) of the FSx for Lustre location to describe",
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
      name: "describe-location-fsx-ontap",
      description:
        "Provides details about how an DataSync transfer location for an Amazon FSx for NetApp ONTAP file system is configured.  If your location uses SMB, the DescribeLocationFsxOntap operation doesn't actually return a Password",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the FSx for ONTAP file system location that you want information about",
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
      name: "describe-location-fsx-open-zfs",
      description:
        "Provides details about how an DataSync transfer location for an Amazon FSx for OpenZFS file system is configured.  Response elements related to SMB aren't supported with the DescribeLocationFsxOpenZfs operation",
      options: [
        {
          name: "--location-arn",
          description:
            "The Amazon Resource Name (ARN) of the FSx for OpenZFS location to describe",
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
      name: "describe-location-fsx-windows",
      description:
        "Provides details about how an DataSync transfer location for an Amazon FSx for Windows File Server file system is configured",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the FSx for Windows File Server location",
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
      name: "describe-location-hdfs",
      description:
        "Provides details about how an DataSync transfer location for a Hadoop Distributed File System (HDFS) is configured",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the HDFS location",
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
      name: "describe-location-nfs",
      description:
        "Provides details about how an DataSync transfer location for a Network File System (NFS) file server is configured",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the NFS location that you want information about",
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
      name: "describe-location-object-storage",
      description:
        "Provides details about how an DataSync transfer location for an object storage system is configured",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the object storage system location",
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
      name: "describe-location-s3",
      description:
        "Provides details about how an DataSync transfer location for an S3 bucket is configured",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the Amazon S3 location",
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
      name: "describe-location-smb",
      description:
        "Provides details about how an DataSync transfer location for a Server Message Block (SMB) file server is configured",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the SMB location that you want information about",
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
      name: "describe-storage-system",
      description:
        "Returns information about an on-premises storage system that you're using with DataSync Discovery",
      options: [
        {
          name: "--storage-system-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of an on-premises storage system that you're using with DataSync Discovery",
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
      name: "describe-storage-system-resource-metrics",
      description:
        "Returns information, including performance data and capacity usage, which DataSync Discovery collects about a specific resource in your-premises storage system",
      options: [
        {
          name: "--discovery-job-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the discovery job that collects information about your on-premises storage system",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Specifies the kind of storage system resource that you want information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "Specifies the universally unique identifier (UUID) of the storage system resource that you want information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "Specifies a time within the total duration that the discovery job ran. To see information gathered during a certain time frame, use this parameter with EndTime",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "Specifies a time within the total duration that the discovery job ran. To see information gathered during a certain time frame, use this parameter with StartTime",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies how many results that you want in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies an opaque string that indicates the position to begin the next list of results in the response",
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
      name: "describe-storage-system-resources",
      description:
        "Returns information that DataSync Discovery collects about resources in your on-premises storage system",
      options: [
        {
          name: "--discovery-job-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the discovery job that's collecting data from your on-premises storage system",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Specifies what kind of storage system resources that you want information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-ids",
          description:
            "Specifies the universally unique identifiers (UUIDs) of the storage system resources that you want information about. You can't use this parameter in combination with the Filter parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter",
          description:
            "Filters the storage system resources that you want returned. For example, this might be volumes associated with a specific storage virtual machine (SVM)",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of storage system resources that you want to list in a response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies an opaque string that indicates the position to begin the next list of results in the response",
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
      name: "describe-task",
      description:
        "Provides information about a task, which defines where and how DataSync transfers your data",
      options: [
        {
          name: "--task-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the transfer task that you want information about",
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
      name: "describe-task-execution",
      description:
        "Provides information about an execution of your DataSync task. You can use this operation to help monitor the progress of an ongoing data transfer or check the results of the transfer.  Some DescribeTaskExecution response elements are only relevant to a specific task mode. For information, see Understanding task mode differences and Understanding data transfer performance counters",
      options: [
        {
          name: "--task-execution-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the task execution that you want information about",
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
      name: "generate-recommendations",
      description:
        "Creates recommendations about where to migrate your data to in Amazon Web Services. Recommendations are generated based on information that DataSync Discovery collects about your on-premises storage system's resources. For more information, see Recommendations provided by DataSync Discovery. Once generated, you can view your recommendations by using the DescribeStorageSystemResources operation",
      options: [
        {
          name: "--discovery-job-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the discovery job that collects information about your on-premises storage system",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-ids",
          description:
            "Specifies the universally unique identifiers (UUIDs) of the resources in your storage system that you want recommendations on",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-type",
          description:
            "Specifies the type of resource in your storage system that you want recommendations on",
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
      name: "list-agents",
      description:
        "Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request. With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.  ListAgents is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with CreateAgent and then immediately run ListAgents, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using DescribeAgent",
      options: [
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of DataSync agents to list in a response. By default, a response shows a maximum of 100 agents",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies an opaque string that indicates the position to begin the next list of results in the response",
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
      name: "list-discovery-jobs",
      description:
        "Provides a list of the existing discovery jobs in the Amazon Web Services Region and Amazon Web Services account where you're using DataSync Discovery",
      options: [
        {
          name: "--storage-system-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of an on-premises storage system. Use this parameter if you only want to list the discovery jobs that are associated with a specific storage system",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies how many results you want in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies an opaque string that indicates the position to begin the next list of results in the response",
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
      name: "list-locations",
      description:
        "Returns a list of source and destination locations. If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of locations to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An opaque string that indicates the position at which to begin the next list of locations",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "You can use API filters to narrow down the list of resources returned by ListLocations. For example, to retrieve all tasks on a specific source location, you can use ListLocations with filter name LocationType S3 and Operator Equals",
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
      name: "list-storage-systems",
      description:
        "Lists the on-premises storage systems that you're using with DataSync Discovery",
      options: [
        {
          name: "--max-results",
          description: "Specifies how many results you want in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies an opaque string that indicates the position to begin the next list of results in the response",
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
      description:
        "Returns all the tags associated with an Amazon Web Services resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource that you want tag information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies how many results that you want in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies an opaque string that indicates the position to begin the next list of results in the response",
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
      name: "list-task-executions",
      description: "Returns a list of executions for an DataSync transfer task",
      options: [
        {
          name: "--task-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the task that you want execution information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies how many results you want in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies an opaque string that indicates the position at which to begin the next list of results in the response",
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
      name: "list-tasks",
      description: "Returns a list of the DataSync tasks you created",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of tasks to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An opaque string that indicates the position at which to begin the next list of tasks",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "You can use API filters to narrow down the list of resources returned by ListTasks. For example, to retrieve all tasks on a specific source location, you can use ListTasks with filter name LocationId and Operator Equals with the ARN for the location",
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
      name: "remove-storage-system",
      description:
        "Permanently removes a storage system resource from DataSync Discovery, including the associated discovery jobs, collected data, and recommendations",
      options: [
        {
          name: "--storage-system-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the storage system that you want to permanently remove from DataSync Discovery",
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
      name: "start-discovery-job",
      description:
        "Runs a DataSync discovery job on your on-premises storage system. If you haven't added the storage system to DataSync Discovery yet, do this first by using the AddStorageSystem operation",
      options: [
        {
          name: "--storage-system-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the on-premises storage system that you want to run the discovery job on",
          args: {
            name: "string",
          },
        },
        {
          name: "--collection-duration-minutes",
          description:
            "Specifies in minutes how long you want the discovery job to run.  For more accurate recommendations, we recommend a duration of at least 14 days. Longer durations allow time to collect a sufficient number of data points and provide a realistic representation of storage performance and utilization",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a client token to make sure requests with this API operation are idempotent. If you don't specify a client token, DataSync generates one for you automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources",
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
      name: "start-task-execution",
      description:
        "Starts an DataSync transfer task. For each task, you can only run one task execution at a time. There are several steps to a task execution. For more information, see Task execution statuses.  If you're planning to transfer data to or from an Amazon S3 location, review how DataSync can affect your S3 request charges and the DataSync pricing page before you begin",
      options: [
        {
          name: "--task-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the task that you want to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--override-options",
          description:
            "Indicates how your transfer task is configured. These options include how DataSync handles files, objects, and their associated metadata during your transfer. You also can specify how to verify data integrity, set bandwidth limits for your task, among other options. Each option has a default value. Unless you need to, you don't have to configure any option before calling StartTaskExecution. You also can override your task options for each task execution. For example, you might want to adjust the LogLevel for an individual execution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--includes",
          description:
            'Specifies a list of filter rules that determines which files to include when running a task. The pattern should contain a single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe), for example, "/folder1|/folder2"',
          args: {
            name: "list",
          },
        },
        {
          name: "--excludes",
          description:
            'Specifies a list of filter rules that determines which files to exclude from a task. The list contains a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example, "/folder1|/folder2"',
          args: {
            name: "list",
          },
        },
        {
          name: "--manifest-config",
          description:
            "Configures a manifest, which is a list of files or objects that you want DataSync to transfer. For more information and configuration examples, see Specifying what DataSync transfers by using a manifest. When using this parameter, your caller identity (the role that you're using DataSync with) must have the iam:PassRole permission. The AWSDataSyncFullAccess policy includes this permission. To remove a manifest configuration, specify this parameter with an empty value",
          args: {
            name: "structure",
          },
        },
        {
          name: "--task-report-config",
          description:
            "Specifies how you want to configure a task report, which provides detailed information about your DataSync transfer. For more information, see Monitoring your DataSync transfers with task reports. When using this parameter, your caller identity (the role that you're using DataSync with) must have the iam:PassRole permission. The AWSDataSyncFullAccess policy includes this permission. To remove a task report configuration, specify this parameter as empty",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies the tags that you want to apply to the Amazon Resource Name (ARN) representing the task execution.  Tags are key-value pairs that help you manage, filter, and search for your DataSync resources",
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
      name: "stop-discovery-job",
      description:
        "Stops a running DataSync discovery job. You can stop a discovery job anytime. A job that's stopped before it's scheduled to end likely will provide you some information about your on-premises storage system resources. To get recommendations for a stopped job, you must use the GenerateRecommendations operation",
      options: [
        {
          name: "--discovery-job-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the discovery job that you want to stop",
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
      description:
        "Applies a tag to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources. These include DataSync resources, such as locations, tasks, and task executions",
      options: [
        {
          name: "--resource-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource to apply the tag to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies the tags that you want to apply to the resource",
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
      description: "Removes tags from an Amazon Web Services resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource to remove the tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--keys",
          description: "Specifies the keys in the tags that you want to remove",
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
      name: "update-agent",
      description: "Updates the name of an DataSync agent",
      options: [
        {
          name: "--agent-arn",
          description: "The Amazon Resource Name (ARN) of the agent to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name that you want to use to configure the agent",
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
      name: "update-discovery-job",
      description: "Edits a DataSync discovery job configuration",
      options: [
        {
          name: "--discovery-job-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the discovery job that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--collection-duration-minutes",
          description:
            "Specifies in minutes how long that you want the discovery job to run. (You can't set this parameter to less than the number of minutes that the job has already run for.)",
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
      name: "update-location-azure-blob",
      description:
        "Modifies some configurations of the Microsoft Azure Blob Storage transfer location that you're using with DataSync",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the ARN of the Azure Blob Storage transfer location that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdirectory",
          description:
            "Specifies path segments if you want to limit your transfer to a virtual directory in your container (for example, /my/images)",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-type",
          description:
            "Specifies the authentication method DataSync uses to access your Azure Blob Storage. DataSync can access blob storage using a shared access signature (SAS)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sas-configuration",
          description:
            "Specifies the SAS configuration that allows DataSync to access your Azure Blob Storage",
          args: {
            name: "structure",
          },
        },
        {
          name: "--blob-type",
          description:
            "Specifies the type of blob that you want your objects or files to be when transferring them into Azure Blob Storage. Currently, DataSync only supports moving data into Azure Blob Storage as block blobs. For more information on blob types, see the Azure Blob Storage documentation",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-tier",
          description:
            "Specifies the access tier that you want your objects or files transferred into. This only applies when using the location as a transfer destination. For more information, see Access tiers",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-arns",
          description:
            "Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container. You can specify more than one agent. For more information, see Using multiple agents for your transfer",
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
      name: "update-location-hdfs",
      description:
        "Updates some parameters of a previously created location for a Hadoop Distributed File System cluster",
      options: [
        {
          name: "--location-arn",
          description:
            "The Amazon Resource Name (ARN) of the source HDFS cluster location",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdirectory",
          description:
            "A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-nodes",
          description:
            "The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode",
          args: {
            name: "list",
          },
        },
        {
          name: "--block-size",
          description:
            "The size of the data blocks to write into the HDFS cluster",
          args: {
            name: "integer",
          },
        },
        {
          name: "--replication-factor",
          description:
            "The number of DataNodes to replicate the data to when writing to the HDFS cluster",
          args: {
            name: "integer",
          },
        },
        {
          name: "--kms-key-provider-uri",
          description:
            "The URI of the HDFS cluster's Key Management Server (KMS)",
          args: {
            name: "string",
          },
        },
        {
          name: "--qop-configuration",
          description:
            "The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--authentication-type",
          description:
            "The type of authentication used to determine the identity of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--simple-user",
          description:
            "The user name used to identify the client on the host operating system",
          args: {
            name: "string",
          },
        },
        {
          name: "--kerberos-principal",
          description:
            "The Kerberos principal with access to the files and folders on the HDFS cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--kerberos-keytab",
          description:
            "The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. You can load the keytab from a file by providing the file's address. If you use the CLI, it performs base64 encoding for you. Otherwise, provide the base64-encoded text",
          args: {
            name: "blob",
          },
        },
        {
          name: "--kerberos-krb5-conf",
          description:
            "The krb5.conf file that contains the Kerberos configuration information. You can load the krb5.conf file by providing the file's address. If you're using the CLI, it performs the base64 encoding for you. Otherwise, provide the base64-encoded text",
          args: {
            name: "blob",
          },
        },
        {
          name: "--agent-arns",
          description:
            "The Amazon Resource Names (ARNs) of the DataSync agents that can connect to your HDFS cluster",
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
      name: "update-location-nfs",
      description:
        "Modifies some configurations of the Network File System (NFS) transfer location that you're using with DataSync. For more information, see Configuring transfers to or from an NFS file server",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the NFS transfer location that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdirectory",
          description:
            "Specifies the export path in your NFS file server that you want DataSync to mount. This path (or a subdirectory of the path) is where DataSync transfers data to or from. For information on configuring an export for DataSync, see Accessing NFS file servers",
          args: {
            name: "string",
          },
        },
        {
          name: "--on-prem-config",
          description:
            "The DataSync agents that can connect to your Network File System (NFS) file server",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mount-options",
          description:
            "Specifies how DataSync can access a location using the NFS protocol",
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
      name: "update-location-object-storage",
      description:
        "Updates some parameters of an existing DataSync location for an object storage system",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the ARN of the object storage system location that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-port",
          description:
            "Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--server-protocol",
          description:
            "Specifies the protocol that your object storage server uses to communicate",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdirectory",
          description:
            "Specifies the object prefix for your object storage server. If this is a source location, DataSync only copies objects with this prefix. If this is a destination location, DataSync writes all objects with this prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-key",
          description:
            "Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-key",
          description:
            "Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-arns",
          description:
            "Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system",
          args: {
            name: "list",
          },
        },
        {
          name: "--server-certificate",
          description:
            "Specifies a certificate chain for DataSync to authenticate with your object storage system if the system uses a private or self-signed certificate authority (CA). You must specify a single .pem file with a full certificate chain (for example, file:///home/user/.ssh/object_storage_certificates.pem). The certificate chain might include:   The object storage system's certificate   All intermediate certificates (if there are any)   The root certificate of the signing CA   You can concatenate your certificates into a .pem file (which can be up to 32768 bytes before base64 encoding). The following example cat command creates an object_storage_certificates.pem file that includes three certificates:  cat object_server_certificate.pem intermediate_certificate.pem ca_root_certificate.pem > object_storage_certificates.pem  To use this parameter, configure ServerProtocol to HTTPS. Updating this parameter doesn't interfere with tasks that you have in progress",
          args: {
            name: "blob",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-location-smb",
      description:
        "Updates some of the parameters of a Server Message Block (SMB) file server location that you can use for DataSync transfers",
      options: [
        {
          name: "--location-arn",
          description:
            "Specifies the ARN of the SMB location that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdirectory",
          description:
            "Specifies the name of the share exported by your SMB file server where DataSync will read or write data. You can include a subdirectory in the share path (for example, /path/to/subdirectory). Make sure that other SMB clients in your network can also mount this path. To copy all data in the specified subdirectory, DataSync must be able to mount the SMB share and access all of its data. For more information, see required permissions for SMB locations",
          args: {
            name: "string",
          },
        },
        {
          name: "--user",
          description:
            "Specifies the user name that can mount your SMB file server and has permission to access the files and folders involved in your transfer. For information about choosing a user with the right level of access for your transfer, see required permissions for SMB locations",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "Specifies the Windows domain name that your SMB file server belongs to.  If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right file server. For more information, see required permissions for SMB locations",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "Specifies the password of the user who can mount your SMB file server and has permission to access the files and folders involved in your transfer. For more information, see required permissions for SMB locations",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-arns",
          description:
            "Specifies the DataSync agent (or agents) that can connect to your SMB file server. You specify an agent by using its Amazon Resource Name (ARN)",
          args: {
            name: "list",
          },
        },
        {
          name: "--mount-options",
          description:
            "Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server",
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
      name: "update-storage-system",
      description:
        "Modifies some configurations of an on-premises storage system resource that you're using with DataSync Discovery",
      options: [
        {
          name: "--storage-system-arn",
          description:
            "Specifies the ARN of the on-premises storage system that you want reconfigure",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-configuration",
          description:
            "Specifies the server name and network port required to connect with your on-premises storage system's management interface",
          args: {
            name: "structure",
          },
        },
        {
          name: "--agent-arns",
          description:
            "Specifies the Amazon Resource Name (ARN) of the DataSync agent that connects to and reads your on-premises storage system. You can only specify one ARN",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description:
            "Specifies a familiar name for your on-premises storage system",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-log-group-arn",
          description:
            "Specifies the ARN of the Amazon CloudWatch log group for monitoring and logging discovery job events",
          args: {
            name: "string",
          },
        },
        {
          name: "--credentials",
          description:
            "Specifies the user name and password for accessing your on-premises storage system's management interface",
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
      name: "update-task",
      description:
        "Updates the configuration of a task, which defines where and how DataSync transfers your data",
      options: [
        {
          name: "--task-arn",
          description: "Specifies the ARN of the task that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--options",
          description:
            "Indicates how your transfer task is configured. These options include how DataSync handles files, objects, and their associated metadata during your transfer. You also can specify how to verify data integrity, set bandwidth limits for your task, among other options. Each option has a default value. Unless you need to, you don't have to configure any option before calling StartTaskExecution. You also can override your task options for each task execution. For example, you might want to adjust the LogLevel for an individual execution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--excludes",
          description:
            "Specifies exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer. For more information and examples, see Specifying what DataSync transfers by using filters",
          args: {
            name: "list",
          },
        },
        {
          name: "--schedule",
          description:
            "Specifies a schedule for when you want your task to run. For more information, see Scheduling your task",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "Specifies the name of your task",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-log-group-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of an Amazon CloudWatch log group for monitoring your task. For Enhanced mode tasks, you must use /aws/datasync as your log group name. For example:  arn:aws:logs:us-east-1:111222333444:log-group:/aws/datasync:*  For more information, see Monitoring data transfers with CloudWatch Logs",
          args: {
            name: "string",
          },
        },
        {
          name: "--includes",
          description:
            "Specifies include filters define the files, objects, and folders in your source location that you want DataSync to transfer. For more information and examples, see Specifying what DataSync transfers by using filters",
          args: {
            name: "list",
          },
        },
        {
          name: "--manifest-config",
          description:
            "Configures a manifest, which is a list of files or objects that you want DataSync to transfer. For more information and configuration examples, see Specifying what DataSync transfers by using a manifest. When using this parameter, your caller identity (the IAM role that you're using DataSync with) must have the iam:PassRole permission. The AWSDataSyncFullAccess policy includes this permission. To remove a manifest configuration, specify this parameter as empty",
          args: {
            name: "structure",
          },
        },
        {
          name: "--task-report-config",
          description:
            "Specifies how you want to configure a task report, which provides detailed information about your DataSync transfer. For more information, see Monitoring your DataSync transfers with task reports. When using this parameter, your caller identity (the IAM role that you're using DataSync with) must have the iam:PassRole permission. The AWSDataSyncFullAccess policy includes this permission. To remove a task report configuration, specify this parameter as empty",
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
      name: "update-task-execution",
      description:
        "Updates the configuration of a running DataSync task execution.  Currently, the only Option that you can modify with UpdateTaskExecution is  BytesPerSecond , which throttles bandwidth for a running or queued task execution",
      options: [
        {
          name: "--task-execution-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the task execution that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--options",
          description:
            "Indicates how your transfer task is configured. These options include how DataSync handles files, objects, and their associated metadata during your transfer. You also can specify how to verify data integrity, set bandwidth limits for your task, among other options. Each option has a default value. Unless you need to, you don't have to configure any option before calling StartTaskExecution. You also can override your task options for each task execution. For example, you might want to adjust the LogLevel for an individual execution",
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
