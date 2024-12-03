const completionSpec: Fig.Spec = {
  name: "transfer",
  description:
    "Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS. Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3. Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with Amazon Web Services services for processing, analytics, machine learning, and archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and set up",
  subcommands: [
    {
      name: "create-access",
      description:
        "Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use CreateAccess to limit the access to the correct set of users who need this ability",
      options: [
        {
          name: "--home-directory",
          description:
            "The landing directory (folder) for a user when they log in to the server using the client. A HomeDirectory example is /bucket_name/home/mydirectory.  The HomeDirectory parameter is only used if HomeDirectoryType is set to PATH",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-directory-type",
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to PATH, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to LOGICAL, you need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 or Amazon EFS paths visible to your users.  If HomeDirectoryType is LOGICAL, you must provide mappings, using the HomeDirectoryMappings parameter. If, on the other hand, HomeDirectoryType is PATH, you provide an absolute path using the HomeDirectory parameter. You cannot have both HomeDirectory and HomeDirectoryMappings in your template",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-directory-mappings",
          description:
            'Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the Entry and Target pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in Target. This value can be set only when HomeDirectoryType is set to LOGICAL. The following is an Entry and Target pair example.  [ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]  In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("chroot"). To do this, you can set Entry to / and set Target to the HomeDirectory parameter value. The following is an Entry and Target pair example for chroot.  [ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]',
          args: {
            name: "list",
          },
        },
        {
          name: "--policy",
          description:
            "A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include ${Transfer:UserName}, ${Transfer:HomeDirectory}, and ${Transfer:HomeBucket}.  This policy applies only when the domain of ServerId is Amazon S3. Amazon EFS does not use session policies. For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a session policy, see Example session policy. For more information, see AssumeRole in the Security Token Service API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--posix-profile",
          description:
            "The full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role",
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server instance. This is the specific server that you added your user to",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-id",
          description:
            'A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.  Get-ADGroup -Filter {samAccountName -like "YourGroupName*"} -Properties * | Select SamAccountName,ObjectSid  In that command, replace YourGroupName with the name of your Active Directory group. The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-',
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
      name: "create-agreement",
      description:
        "Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes. The partner is identified with the PartnerProfileId, and the AS2 process is identified with the LocalProfileId",
      options: [
        {
          name: "--description",
          description: "A name or short description to identify the agreement",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server instance. This is the specific server that the agreement uses",
          args: {
            name: "string",
          },
        },
        {
          name: "--local-profile-id",
          description: "A unique identifier for the AS2 local profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--partner-profile-id",
          description:
            "A unique identifier for the partner profile used in the agreement",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-directory",
          description:
            "The landing directory (folder) for files transferred by using the AS2 protocol. A BaseDirectory example is /amzn-s3-demo-bucket/home/mydirectory",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-role",
          description:
            "Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.  For AS2 connectors  With AS2, you can send files by calling StartFileTransfer and specifying the file paths in the request parameter, SendFilePaths. We use the file\u2019s parent directory (for example, for --send-file-paths /bucket/dir/file.txt, parent directory is /bucket/dir/) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the AccessRole needs to provide read and write access to the parent directory of the file location used in the StartFileTransfer request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with StartFileTransfer. If you are using Basic authentication for your AS2 connector, the access role requires the secretsmanager:GetSecretValue permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the kms:Decrypt permission for that key.  For SFTP connectors  Make sure that the access role provides read and write access to the parent directory of the file location that's used in the StartFileTransfer request. Additionally, make sure that the role provides secretsmanager:GetSecretValue permission to Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status of the agreement. The agreement can be either ACTIVE or INACTIVE",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs that can be used to group and search for agreements",
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
      name: "create-connector",
      description:
        "Creates the connector, which captures the parameters for a connection for the AS2 or SFTP protocol. For AS2, the connector is required for sending files to an externally hosted AS2 server. For SFTP, the connector is required when sending files to an SFTP server or receiving files from an SFTP server. For more details about connectors, see Configure AS2 connectors and Create SFTP connectors.  You must specify exactly one configuration object: either for AS2 (As2Config) or SFTP (SftpConfig)",
      options: [
        {
          name: "--url",
          description: "The URL of the partner's AS2 or SFTP endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--as2-config",
          description:
            "A structure that contains the parameters for an AS2 connector object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-role",
          description:
            "Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.  For AS2 connectors  With AS2, you can send files by calling StartFileTransfer and specifying the file paths in the request parameter, SendFilePaths. We use the file\u2019s parent directory (for example, for --send-file-paths /bucket/dir/file.txt, parent directory is /bucket/dir/) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the AccessRole needs to provide read and write access to the parent directory of the file location used in the StartFileTransfer request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with StartFileTransfer. If you are using Basic authentication for your AS2 connector, the access role requires the secretsmanager:GetSecretValue permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the kms:Decrypt permission for that key.  For SFTP connectors  Make sure that the access role provides read and write access to the parent directory of the file location that's used in the StartFileTransfer request. Additionally, make sure that the role provides secretsmanager:GetSecretValue permission to Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-role",
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose",
          args: {
            name: "list",
          },
        },
        {
          name: "--sftp-config",
          description:
            "A structure that contains the parameters for an SFTP connector object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--security-policy-name",
          description:
            "Specifies the name of the security policy for the connector",
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
      name: "create-profile",
      description:
        "Creates the local or partner profile to use for AS2 transfers",
      options: [
        {
          name: "--as2-id",
          description:
            "The As2Id is the AS2-name, as defined in the RFC 4130. For inbound transfers, this is the AS2-From header for the AS2 messages sent from the partner. For outbound connectors, this is the AS2-To header for the AS2 messages sent to the partner using the StartFileTransfer API operation. This ID cannot include spaces",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-type",
          description:
            "Determines the type of profile to create:   Specify LOCAL to create a local profile. A local profile represents the AS2-enabled Transfer Family server organization or party.   Specify PARTNER to create a partner profile. A partner profile represents a remote organization, external to Transfer Family",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-ids",
          description:
            "An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs that can be used to group and search for AS2 profiles",
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
      name: "create-server",
      description:
        "Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated ServerId property that is assigned to the newly created server",
      options: [
        {
          name: "--certificate",
          description:
            "The Amazon Resource Name (ARN) of the Certificate Manager (ACM) certificate. Required when Protocols is set to FTPS. To request a new public certificate, see Request a public certificate in the Certificate Manager User Guide. To import an existing certificate into ACM, see Importing certificates into ACM in the Certificate Manager User Guide. To request a private certificate to use FTPS through private IP addresses, see Request a private certificate in the Certificate Manager User Guide. Certificates with the following cryptographic algorithms and key sizes are supported:   2048-bit RSA (RSA_2048)   4096-bit RSA (RSA_4096)   Elliptic Prime Curve 256 bit (EC_prime256v1)   Elliptic Prime Curve 384 bit (EC_secp384r1)   Elliptic Prime Curve 521 bit (EC_secp521r1)    The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The domain of the storage system that is used for file transfers. There are two domains available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The default value is S3.  After the server is created, the domain cannot be changed",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-details",
          description:
            "The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--endpoint-type",
          description:
            "The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC) or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.   After May 19, 2021, you won't be able to create a server using EndpointType=VPC_ENDPOINT in your Amazon Web Services account if your account hasn't already done so before May 19, 2021. If you have already created servers with EndpointType=VPC_ENDPOINT in your Amazon Web Services account on or before May 19, 2021, you will not be affected. After this date, use EndpointType=VPC. For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint. It is recommended that you use VPC as the EndpointType. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with EndpointType set to VPC_ENDPOINT",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-key",
          description:
            'The RSA, ECDSA, or ED25519 private key to use for your SFTP-enabled server. You can add multiple host keys, in case you want to rotate keys, or have a set of active keys that use different algorithms. Use the following command to generate an RSA 2048 bit key with no passphrase:  ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key. Use a minimum value of 2048 for the -b option. You can create a stronger key by using 3072 or 4096. Use the following command to generate an ECDSA 256 bit key with no passphrase:  ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key. Valid values for the -b option for ECDSA are 256, 384, and 521. Use the following command to generate an ED25519 key with no passphrase:  ssh-keygen -t ed25519 -N "" -f my-new-server-key. For all of these commands, you can replace my-new-server-key with a string of your choice.  If you aren\'t planning to migrate existing users from an existing SFTP-enabled server to a new server, don\'t update the host key. Accidentally changing a server\'s host key can be disruptive.  For more information, see Manage host keys for your SFTP-enabled server in the Transfer Family User Guide',
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-provider-details",
          description:
            "Required when IdentityProviderType is set to AWS_DIRECTORY_SERVICE, Amazon Web Services_LAMBDA or API_GATEWAY. Accepts an array containing all of the information required to use a directory in AWS_DIRECTORY_SERVICE or invoke a customer-supplied authentication API, including the API Gateway URL. Cannot be specified when IdentityProviderType is set to SERVICE_MANAGED",
          args: {
            name: "structure",
          },
        },
        {
          name: "--identity-provider-type",
          description:
            "The mode of authentication for a server. The default value is SERVICE_MANAGED, which allows you to store and access user credentials within the Transfer Family service. Use AWS_DIRECTORY_SERVICE to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the IdentityProviderDetails parameter. Use the API_GATEWAY value to integrate with an identity provider of your choosing. The API_GATEWAY setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the IdentityProviderDetails parameter. Use the AWS_LAMBDA value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the Function parameter for the IdentityProviderDetails data type",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-role",
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in your CloudWatch logs",
          args: {
            name: "string",
          },
        },
        {
          name: "--post-authentication-login-banner",
          description:
            "Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.  The SFTP protocol does not support post-authentication display banners",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-authentication-login-banner",
          description:
            "Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system:  This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel",
          args: {
            name: "string",
          },
        },
        {
          name: "--protocols",
          description:
            "Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:    SFTP (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH    FTPS (File Transfer Protocol Secure): File transfer with TLS encryption    FTP (File Transfer Protocol): Unencrypted file transfer    AS2 (Applicability Statement 2): used for transporting structured business-to-business data      If you select FTPS, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.   If Protocol includes either FTP or FTPS, then the EndpointType must be VPC and the IdentityProviderType must be either AWS_DIRECTORY_SERVICE, AWS_LAMBDA, or API_GATEWAY.   If Protocol includes FTP, then AddressAllocationIds cannot be associated.   If Protocol is set only to SFTP, the EndpointType can be set to PUBLIC and the IdentityProviderType can be set any of the supported identity types: SERVICE_MANAGED, AWS_DIRECTORY_SERVICE, AWS_LAMBDA, or API_GATEWAY.   If Protocol includes AS2, then the EndpointType must be VPC, and domain must be Amazon S3",
          args: {
            name: "list",
          },
        },
        {
          name: "--protocol-details",
          description:
            "The protocol settings that are configured for your server.    To indicate passive mode (for FTP and FTPS protocols), use the PassiveIp parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.    To ignore the error that is generated when the client attempts to use the SETSTAT command on a file that you are uploading to an Amazon S3 bucket, use the SetStatOption parameter. To have the Transfer Family server ignore the SETSTAT command and upload files without needing to make any changes to your SFTP client, set the value to ENABLE_NO_OP. If you set the SetStatOption parameter to ENABLE_NO_OP, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a SETSTAT call.   To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the TlsSessionResumptionMode parameter.    As2Transports indicates the transport method for the AS2 messages. Currently, only HTTP is supported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--security-policy-name",
          description:
            "Specifies the name of the security policy for the server",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs that can be used to group and search for servers",
          args: {
            name: "list",
          },
        },
        {
          name: "--workflow-details",
          description:
            "Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow. In addition to a workflow to execute when a file is uploaded completely, WorkflowDetails can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded",
          args: {
            name: "structure",
          },
        },
        {
          name: "--structured-log-destinations",
          description:
            "Specifies the log groups to which your server logs are sent. To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:  arn:aws:logs:region-name:amazon-account-id:log-group:log-group-name:*  For example, arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*  If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty value for this parameter in an update-server call. For example:  update-server --server-id s-1234567890abcdef0 --structured-log-destinations",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-storage-options",
          description:
            "Specifies whether or not performance for your Amazon S3 directories is optimized. This is disabled by default. By default, home directory mappings have a TYPE of DIRECTORY. If you enable this option, you would then need to explicitly set the HomeDirectoryMapEntry Type to FILE if you want a mapping to have a file target",
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
      name: "create-user",
      description:
        "Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the IdentityProviderType set to SERVICE_MANAGED. Using parameters for CreateUser, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users",
      options: [
        {
          name: "--home-directory",
          description:
            "The landing directory (folder) for a user when they log in to the server using the client. A HomeDirectory example is /bucket_name/home/mydirectory.  The HomeDirectory parameter is only used if HomeDirectoryType is set to PATH",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-directory-type",
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to PATH, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to LOGICAL, you need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 or Amazon EFS paths visible to your users.  If HomeDirectoryType is LOGICAL, you must provide mappings, using the HomeDirectoryMappings parameter. If, on the other hand, HomeDirectoryType is PATH, you provide an absolute path using the HomeDirectory parameter. You cannot have both HomeDirectory and HomeDirectoryMappings in your template",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-directory-mappings",
          description:
            'Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the Entry and Target pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in Target. This value can be set only when HomeDirectoryType is set to LOGICAL. The following is an Entry and Target pair example.  [ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]  In most cases, you can use this value instead of the session policy to lock your user down to the designated home directory ("chroot"). To do this, you can set Entry to / and set Target to the value the user should see for their home directory when they log in. The following is an Entry and Target pair example for chroot.  [ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]',
          args: {
            name: "list",
          },
        },
        {
          name: "--policy",
          description:
            "A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include ${Transfer:UserName}, ${Transfer:HomeDirectory}, and ${Transfer:HomeBucket}.  This policy applies only when the domain of ServerId is Amazon S3. Amazon EFS does not use session policies. For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a session policy, see Example session policy. For more information, see AssumeRole in the Amazon Web Services Security Token Service API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--posix-profile",
          description:
            "Specifies the full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in Amazon EFS determine the level of access your users get when transferring files into and out of your Amazon EFS file systems",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role",
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server instance. This is the specific server that you added your user to",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssh-public-key-body",
          description:
            "The public portion of the Secure Shell (SSH) key used to authenticate the user to the server. The three standard SSH public key format elements are <key type>, <body base64>, and an optional <comment>, with spaces between each element. Transfer Family accepts RSA, ECDSA, and ED25519 keys.   For RSA keys, the key type is ssh-rsa.   For ED25519 keys, the key type is ssh-ed25519.   For ECDSA keys, the key type is either ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, or ecdsa-sha2-nistp521, depending on the size of the key you generated",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs that can be used to group and search for users. Tags are metadata attached to users for any purpose",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-name",
          description:
            "A unique string that identifies a user and is associated with a ServerId. This user name must be a minimum of 3 and a maximum of 100 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen '-', period '.', and at sign '@'. The user name can't start with a hyphen, period, or at sign",
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
      name: "create-web-app",
      description:
        "Creates a web app based on specified parameters, and returns the ID for the new web app",
      options: [
        {
          name: "--identity-provider-details",
          description:
            "You can provide a structure that contains the details for the identity provider to use with your web app",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-endpoint",
          description:
            "The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-app-units",
          description:
            "A union that contains the value for number of concurrent connections or the user sessions on your web app",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs that can be used to group and search for web apps",
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
      name: "create-workflow",
      description:
        "Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the workflow-details field in CreateServer and UpdateServer operations",
      options: [
        {
          name: "--description",
          description: "A textual description for the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--steps",
          description:
            "Specifies the details for the steps that are in the specified workflow.  The TYPE specifies which of the following actions is being taken for this step.      COPY  - Copy the file to another location.     CUSTOM  - Perform a custom step with an Lambda function target.     DECRYPT  - Decrypt a file that was encrypted before it was uploaded.     DELETE  - Delete the file.     TAG  - Add a tag to the file.     Currently, copying and tagging are supported only on S3.    For file location, you specify either the Amazon S3 bucket and key, or the Amazon EFS file system ID and path",
          args: {
            name: "list",
          },
        },
        {
          name: "--on-exception-steps",
          description:
            "Specifies the steps (actions) to take if errors are encountered during execution of the workflow.  For custom steps, the Lambda function needs to send FAILURE to the call back API to kick off the exception steps. Additionally, if the Lambda does not send SUCCESS before it times out, the exception steps are executed",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose",
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
      name: "delete-access",
      description:
        "Allows you to delete the access specified in the ServerID and ExternalID parameters",
      options: [
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server that has this user assigned",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-id",
          description:
            'A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.  Get-ADGroup -Filter {samAccountName -like "YourGroupName*"} -Properties * | Select SamAccountName,ObjectSid  In that command, replace YourGroupName with the name of your Active Directory group. The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-',
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
      name: "delete-agreement",
      description:
        "Delete the agreement that's specified in the provided AgreementId",
      options: [
        {
          name: "--agreement-id",
          description:
            "A unique identifier for the agreement. This identifier is returned when you create an agreement",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "The server identifier associated with the agreement that you are deleting",
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
      name: "delete-certificate",
      description:
        "Deletes the certificate that's specified in the CertificateId parameter",
      options: [
        {
          name: "--certificate-id",
          description:
            "The identifier of the certificate object that you are deleting",
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
      name: "delete-connector",
      description:
        "Deletes the connector that's specified in the provided ConnectorId",
      options: [
        {
          name: "--connector-id",
          description: "The unique identifier for the connector",
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
      name: "delete-host-key",
      description:
        "Deletes the host key that's specified in the HostKeyId parameter",
      options: [
        {
          name: "--server-id",
          description:
            "The identifier of the server that contains the host key that you are deleting",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-key-id",
          description: "The identifier of the host key that you are deleting",
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
      name: "delete-profile",
      description:
        "Deletes the profile that's specified in the ProfileId parameter",
      options: [
        {
          name: "--profile-id",
          description: "The identifier of the profile that you are deleting",
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
      name: "delete-server",
      description:
        "Deletes the file transfer protocol-enabled server that you specify. No response returns from this operation",
      options: [
        {
          name: "--server-id",
          description:
            "A unique system-assigned identifier for a server instance",
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
      name: "delete-ssh-public-key",
      description: "Deletes a user's Secure Shell (SSH) public key",
      options: [
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a file transfer protocol-enabled server instance that has the user assigned to it",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssh-public-key-id",
          description:
            "A unique identifier used to reference your user's specific SSH key",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "A unique string that identifies a user whose public key is being deleted",
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
      name: "delete-user",
      description:
        "Deletes the user belonging to a file transfer protocol-enabled server you specify. No response returns from this operation.  When you delete a user from a server, the user's information is lost",
      options: [
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server instance that has the user assigned to it",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "A unique string that identifies a user that is being deleted from a server",
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
      name: "delete-web-app",
      description: "Deletes the specified web app",
      options: [
        {
          name: "--web-app-id",
          description:
            "Provide the unique identifier for the web app that you are deleting",
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
      name: "delete-web-app-customization",
      description:
        "Deletes the WebAppCustomization object that corresponds to the web app ID specified",
      options: [
        {
          name: "--web-app-id",
          description:
            "Provide the unique identifier for the web app that contains the customizations that you are deleting",
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
      name: "delete-workflow",
      description: "Deletes the specified workflow",
      options: [
        {
          name: "--workflow-id",
          description: "A unique identifier for the workflow",
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
      name: "describe-access",
      description:
        "Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its ServerId property and its ExternalId. The response from this call returns the properties of the access that is associated with the ServerId value that was specified",
      options: [
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server that has this access assigned",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-id",
          description:
            'A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.  Get-ADGroup -Filter {samAccountName -like "YourGroupName*"} -Properties * | Select SamAccountName,ObjectSid  In that command, replace YourGroupName with the name of your Active Directory group. The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-',
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
      name: "describe-agreement",
      description:
        "Describes the agreement that's identified by the AgreementId",
      options: [
        {
          name: "--agreement-id",
          description:
            "A unique identifier for the agreement. This identifier is returned when you create an agreement",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "The server identifier that's associated with the agreement",
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
      name: "describe-certificate",
      description:
        "Describes the certificate that's identified by the CertificateId",
      options: [
        {
          name: "--certificate-id",
          description:
            "An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles",
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
      name: "describe-connector",
      description:
        "Describes the connector that's identified by the ConnectorId",
      options: [
        {
          name: "--connector-id",
          description: "The unique identifier for the connector",
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
      name: "describe-execution",
      description:
        "You can use DescribeExecution to check the details of the execution of the specified workflow.  This API call only returns details for in-progress workflows.  If you provide an ID for an execution that is not in progress, or if the execution doesn't match the specified workflow ID, you receive a ResourceNotFound exception",
      options: [
        {
          name: "--execution-id",
          description: "A unique identifier for the execution of a workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "A unique identifier for the workflow",
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
      name: "describe-host-key",
      description:
        "Returns the details of the host key that's specified by the HostKeyId and ServerId",
      options: [
        {
          name: "--server-id",
          description:
            "The identifier of the server that contains the host key that you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-key-id",
          description: "The identifier of the host key that you want described",
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
      name: "describe-profile",
      description:
        "Returns the details of the profile that's specified by the ProfileId",
      options: [
        {
          name: "--profile-id",
          description: "The identifier of the profile that you want described",
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
      name: "describe-security-policy",
      description:
        "Describes the security policy that is attached to your server or SFTP connector. The response contains a description of the security policy's properties. For more information about security policies, see Working with security policies for servers or Working with security policies for SFTP connectors",
      options: [
        {
          name: "--security-policy-name",
          description:
            "Specify the text name of the security policy for which you want the details",
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
      name: "describe-server",
      description:
        "Describes a file transfer protocol-enabled server that you specify by passing the ServerId parameter. The response contains a description of a server's properties. When you set EndpointType to VPC, the response will contain the EndpointDetails",
      options: [
        {
          name: "--server-id",
          description: "A system-assigned unique identifier for a server",
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
      name: "describe-user",
      description:
        "Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its ServerId property. The response from this call returns the properties of the user associated with the ServerId value that was specified",
      options: [
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server that has this user assigned",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "The name of the user assigned to one or more servers. User names are part of the sign-in credentials to use the Transfer Family service and perform file transfer tasks",
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
      name: "describe-web-app",
      description: "Describes the web app that's identified by WebAppId",
      options: [
        {
          name: "--web-app-id",
          description: "Provide the unique identifier for the web app",
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
      name: "describe-web-app-customization",
      description:
        "Describes the web app customization object that's identified by WebAppId",
      options: [
        {
          name: "--web-app-id",
          description: "Provide the unique identifier for the web app",
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
      name: "describe-workflow",
      description: "Describes the specified workflow",
      options: [
        {
          name: "--workflow-id",
          description: "A unique identifier for the workflow",
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
      name: "import-certificate",
      description:
        "Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles",
      options: [
        {
          name: "--usage",
          description:
            "Specifies how this certificate is used. It can be used in the following ways:    SIGNING: For signing AS2 messages    ENCRYPTION: For encrypting AS2 messages    TLS: For securing AS2 communications sent over HTTPS",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate",
          description:
            'For the CLI, provide a file path for a certificate in URI format. For example, --certificate file://encryption-cert.pem. Alternatively, you can provide the raw content.   For the SDK, specify the raw content of a certificate file. For example, --certificate "`cat encryption-cert.pem`"',
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-chain",
          description:
            "An optional list of certificates that make up the chain for the certificate that's being imported",
          args: {
            name: "string",
          },
        },
        {
          name: "--private-key",
          description:
            'For the CLI, provide a file path for a private key in URI format.For example, --private-key file://encryption-key.pem. Alternatively, you can provide the raw content of the private key file.   For the SDK, specify the raw content of a private key file. For example, --private-key "`cat encryption-key.pem`"',
          args: {
            name: "string",
          },
        },
        {
          name: "--active-date",
          description:
            "An optional date that specifies when the certificate becomes active",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--inactive-date",
          description:
            "An optional date that specifies when the certificate becomes inactive",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--description",
          description:
            "A short description that helps identify the certificate",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs that can be used to group and search for certificates",
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
      name: "import-host-key",
      description:
        "Adds a host key to the server that's specified by the ServerId parameter",
      options: [
        {
          name: "--server-id",
          description:
            "The identifier of the server that contains the host key that you are importing",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-key-body",
          description:
            "The private key portion of an SSH key pair. Transfer Family accepts RSA, ECDSA, and ED25519 keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The text description that identifies this host key",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs that can be used to group and search for host keys",
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
      name: "import-ssh-public-key",
      description:
        "Adds a Secure Shell (SSH) public key to a Transfer Family user identified by a UserName value assigned to the specific file transfer protocol-enabled server, identified by ServerId. The response returns the UserName value, the ServerId value, and the name of the SshPublicKeyId",
      options: [
        {
          name: "--server-id",
          description: "A system-assigned unique identifier for a server",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssh-public-key-body",
          description:
            "The public key portion of an SSH key pair. Transfer Family accepts RSA, ECDSA, and ED25519 keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "The name of the Transfer Family user that is assigned to one or more servers",
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
      name: "list-accesses",
      description:
        "Lists the details for all the accesses you have on your server",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When you can get additional results from the ListAccesses call, a NextToken parameter is returned in the output. You can then pass in a subsequent command to the NextToken parameter to continue listing additional accesses",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server that has users assigned to it",
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
      name: "list-agreements",
      description:
        "Returns a list of the agreements for the server that's identified by the ServerId that you supply. If you want to limit the results to a certain number, supply a value for the MaxResults parameter. If you ran the command previously and received a value for NextToken, you can supply that value to continue listing agreements from where you left off",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When you can get additional results from the ListAgreements call, a NextToken parameter is returned in the output. You can then pass in a subsequent command to the NextToken parameter to continue listing additional agreements",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "The identifier of the server for which you want a list of agreements",
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
      name: "list-certificates",
      description:
        "Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the MaxResults parameter. If you ran the command previously and received a value for the NextToken parameter, you can supply that value to continue listing certificates from where you left off",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When you can get additional results from the ListCertificates call, a NextToken parameter is returned in the output. You can then pass in a subsequent command to the NextToken parameter to continue listing additional certificates",
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
      name: "list-connectors",
      description: "Lists the connectors for the specified Region",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When you can get additional results from the ListConnectors call, a NextToken parameter is returned in the output. You can then pass in a subsequent command to the NextToken parameter to continue listing additional connectors",
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
      name: "list-executions",
      description:
        "Lists all in-progress executions for the specified workflow.  If the specified workflow ID cannot be found, ListExecutions returns a ResourceNotFound exception",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "ListExecutions returns the NextToken parameter in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional executions.  This is useful for pagination, for instance. If you have 100 executions for a workflow, you might only want to list first 10. If so, call the API by specifying the max-results:   aws transfer list-executions --max-results 10   This returns details for the first 10 executions, as well as the pointer (NextToken) to the eleventh execution. You can now call the API again, supplying the NextToken value you received:   aws transfer list-executions --max-results 10 --next-token $somePointerReturnedFromPreviousListResult   This call returns the next 10 executions, the 11th through the 20th. You can then repeat the call until the details for all 100 executions have been returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "A unique identifier for the workflow",
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
      name: "list-file-transfer-results",
      description:
        "Returns real-time updates and detailed information on the status of each individual file being transferred in a specific file transfer operation. You specify the file transfer by providing its ConnectorId and its TransferId.  File transfer results are available up to 7 days after an operation has been requested",
      options: [
        {
          name: "--connector-id",
          description:
            "A unique identifier for a connector. This value should match the value supplied to the corresponding StartFileTransfer call",
          args: {
            name: "string",
          },
        },
        {
          name: "--transfer-id",
          description:
            "A unique identifier for a file transfer. This value should match the value supplied to the corresponding StartFileTransfer call",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If there are more file details than returned in this call, use this value for a subsequent call to ListFileTransferResults to retrieve them",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of files to return in a single page. Note that currently you can specify a maximum of 10 file paths in a single StartFileTransfer operation. Thus, the maximum number of file transfer results that can be returned in a single page is 10",
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
      name: "list-host-keys",
      description:
        "Returns a list of host keys for the server that's specified by the ServerId parameter",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When there are additional results that were not returned, a NextToken parameter is returned. You can use that value for a subsequent call to ListHostKeys to continue listing results",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "The identifier of the server that contains the host keys that you want to view",
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
      name: "list-profiles",
      description:
        "Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the MaxResults parameter. If you ran the command previously and received a value for NextToken, you can supply that value to continue listing profiles from where you left off",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When there are additional results that were not returned, a NextToken parameter is returned. You can use that value for a subsequent call to ListProfiles to continue listing results",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-type",
          description:
            "Indicates whether to list only LOCAL type profiles or only PARTNER type profiles. If not supplied in the request, the command lists all types of profiles",
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
      name: "list-security-policies",
      description:
        "Lists the security policies that are attached to your servers and SFTP connectors. For more information about security policies, see Working with security policies for servers or Working with security policies for SFTP connectors",
      options: [
        {
          name: "--max-results",
          description:
            "Specifies the number of security policies to return as a response to the ListSecurityPolicies query",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When additional results are obtained from the ListSecurityPolicies command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional security policies",
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
      name: "list-servers",
      description:
        "Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "Specifies the number of servers to return as a response to the ListServers query",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When additional results are obtained from the ListServers command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional servers",
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
        "Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role",
      options: [
        {
          name: "--arn",
          description:
            "Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an identifier for a specific Amazon Web Services resource, such as a server, user, or role",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the number of tags to return as a response to the ListTagsForResource request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When you request additional results from the ListTagsForResource operation, a NextToken parameter is returned in the input. You can then pass in a subsequent command to the NextToken parameter to continue listing additional tags",
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
      name: "list-users",
      description:
        "Lists the users for a file transfer protocol-enabled server that you specify by passing the ServerId parameter",
      options: [
        {
          name: "--max-results",
          description:
            "Specifies the number of users to return as a response to the ListUsers request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If there are additional results from the ListUsers call, a NextToken parameter is returned in the output. You can then pass the NextToken to a subsequent ListUsers command, to continue listing additional users",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server that has users assigned to it",
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
      name: "list-web-apps",
      description:
        "Lists all web apps associated with your Amazon Web Services account for your current region",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Returns the NextToken parameter in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional web apps",
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
      name: "list-workflows",
      description:
        "Lists all workflows associated with your Amazon Web Services account for your current region",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "ListWorkflows returns the NextToken parameter in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional workflows",
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
      name: "send-workflow-step-state",
      description:
        "Sends a callback for asynchronous custom steps.  The ExecutionId, WorkflowId, and Token are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status",
      options: [
        {
          name: "--workflow-id",
          description: "A unique identifier for the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-id",
          description: "A unique identifier for the execution of a workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--token",
          description:
            "Used to distinguish between multiple callbacks for multiple Lambda steps within the same execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Indicates whether the specified step succeeded or failed",
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
      name: "start-directory-listing",
      description:
        "Retrieves a list of the contents of a directory from a remote SFTP server. You specify the connector ID, the output path, and the remote directory path. You can also specify the optional MaxItems value to control the maximum number of items that are listed from the remote directory. This API returns a list of all files and directories in the remote directory (up to the maximum value), but does not return files or folders in sub-directories. That is, it only returns a list of files and directories one-level deep. After you receive the listing file, you can provide the files that you want to transfer to the RetrieveFilePaths parameter of the StartFileTransfer API call. The naming convention for the output file is  connector-ID-listing-ID.json. The output file contains the following information:    filePath: the complete path of a remote file, relative to the directory of the listing request for your SFTP connector on the remote server.    modifiedTimestamp: the last time the file was modified, in UTC time format. This field is optional. If the remote file attributes don't contain a timestamp, it is omitted from the file listing.    size: the size of the file, in bytes. This field is optional. If the remote file attributes don't contain a file size, it is omitted from the file listing.    path: the complete path of a remote directory, relative to the directory of the listing request for your SFTP connector on the remote server.    truncated: a flag indicating whether the list output contains all of the items contained in the remote directory or not. If your Truncated output value is true, you can increase the value provided in the optional max-items input attribute to be able to list more items (up to the maximum allowed list size of 10,000 items)",
      options: [
        {
          name: "--connector-id",
          description: "The unique identifier for the connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--remote-directory-path",
          description:
            "Specifies the directory on the remote SFTP server for which you want to list its contents",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "An optional parameter where you can specify the maximum number of file/directory names to retrieve. The default value is 1,000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--output-directory-path",
          description:
            "Specifies the path (bucket and prefix) in Amazon S3 storage to store the results of the directory listing",
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
      name: "start-file-transfer",
      description:
        "Begins a file transfer between local Amazon Web Services storage and a remote AS2 or SFTP server.   For an AS2 connector, you specify the ConnectorId and one or more SendFilePaths to identify the files you want to transfer.   For an SFTP connector, the file transfer can be either outbound or inbound. In both cases, you specify the ConnectorId. Depending on the direction of the transfer, you also specify the following items:   If you are transferring file from a partner's SFTP server to Amazon Web Services storage, you specify one or more RetrieveFilePaths to identify the files you want to transfer, and a LocalDirectoryPath to specify the destination folder.   If you are transferring file to a partner's SFTP server from Amazon Web Services storage, you specify one or more SendFilePaths to identify the files you want to transfer, and a RemoteDirectoryPath to specify the destination folder",
      options: [
        {
          name: "--connector-id",
          description: "The unique identifier for the connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--send-file-paths",
          description:
            "One or more source paths for the Amazon S3 storage. Each string represents a source file path for one outbound file transfer. For example,  amzn-s3-demo-bucket/myfile.txt .  Replace  amzn-s3-demo-bucket  with one of your actual buckets",
          args: {
            name: "list",
          },
        },
        {
          name: "--retrieve-file-paths",
          description:
            "One or more source paths for the partner's SFTP server. Each string represents a source file path for one inbound file transfer",
          args: {
            name: "list",
          },
        },
        {
          name: "--local-directory-path",
          description:
            "For an inbound transfer, the LocaDirectoryPath specifies the destination for one or more files that are transferred from the partner's SFTP server",
          args: {
            name: "string",
          },
        },
        {
          name: "--remote-directory-path",
          description:
            "For an outbound transfer, the RemoteDirectoryPath specifies the destination for one or more files that are transferred to the partner's SFTP server. If you don't specify a RemoteDirectoryPath, the destination for transferred files is the SFTP user's home directory",
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
      name: "start-server",
      description:
        "Changes the state of a file transfer protocol-enabled server from OFFLINE to ONLINE. It has no impact on a server that is already ONLINE. An ONLINE server can accept and process file transfer jobs. The state of STARTING indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of START_FAILED can indicate an error condition. No response is returned from this call",
      options: [
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server that you start",
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
      name: "stop-server",
      description:
        "Changes the state of a file transfer protocol-enabled server from ONLINE to OFFLINE. An OFFLINE server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.  Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.  The state of STOPPING indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of STOP_FAILED can indicate an error condition. No response is returned from this call",
      options: [
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server that you stopped",
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
        "Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities. There is no response returned from this call",
      options: [
        {
          name: "--arn",
          description:
            "An Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a server, user, or role",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (servers, users, workflows, and so on) for any purpose",
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
      name: "test-connection",
      description:
        "Tests whether your SFTP connector is set up successfully. We highly recommend that you call this operation to test your ability to transfer files between local Amazon Web Services storage and a trading partner's SFTP server",
      options: [
        {
          name: "--connector-id",
          description: "The unique identifier for the connector",
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
      name: "test-identity-provider",
      description:
        "If the IdentityProviderType of a file transfer protocol-enabled server is AWS_DIRECTORY_SERVICE or API_Gateway, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.  The ServerId and UserName parameters are required. The ServerProtocol, SourceIp, and UserPassword are all optional.  Note the following:    You cannot use TestIdentityProvider if the IdentityProviderType of your server is SERVICE_MANAGED.    TestIdentityProvider does not work with keys: it only accepts passwords.    TestIdentityProvider can test the password operation for a custom Identity Provider that handles keys and passwords.    If you provide any incorrect values for any parameters, the Response field is empty.     If you provide a server ID for a server that uses service-managed users, you get an error:    An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-server-ID not configured for external auth      If you enter a Server ID for the --server-id parameter that does not identify an actual Transfer server, you receive the following error:   An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server.  It is possible your sever is in a different region. You can specify a region by adding the following: --region region-code, such as --region us-east-2 to specify a server in US East (Ohio)",
      options: [
        {
          name: "--server-id",
          description:
            "A system-assigned identifier for a specific server. That server's user authentication method is tested with a user name and password",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-protocol",
          description:
            "The type of file transfer protocol to be tested. The available protocols are:   Secure Shell (SSH) File Transfer Protocol (SFTP)   File Transfer Protocol Secure (FTPS)   File Transfer Protocol (FTP)   Applicability Statement 2 (AS2)",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-ip",
          description: "The source IP address of the account to be tested",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description: "The name of the account to be tested",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-password",
          description: "The password of the account to be tested",
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
      name: "untag-resource",
      description:
        "Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities. No response is returned from this call",
      options: [
        {
          name: "--arn",
          description:
            "The value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is an identifier for a specific Amazon Web Services resource, such as a server, user, or role",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "TagKeys are key-value pairs assigned to ARNs that can be used to group and search for resources by type. This metadata can be attached to resources for any purpose",
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
      name: "update-access",
      description:
        "Allows you to update parameters for the access specified in the ServerID and ExternalID parameters",
      options: [
        {
          name: "--home-directory",
          description:
            "The landing directory (folder) for a user when they log in to the server using the client. A HomeDirectory example is /bucket_name/home/mydirectory.  The HomeDirectory parameter is only used if HomeDirectoryType is set to PATH",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-directory-type",
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to PATH, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to LOGICAL, you need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 or Amazon EFS paths visible to your users.  If HomeDirectoryType is LOGICAL, you must provide mappings, using the HomeDirectoryMappings parameter. If, on the other hand, HomeDirectoryType is PATH, you provide an absolute path using the HomeDirectory parameter. You cannot have both HomeDirectory and HomeDirectoryMappings in your template",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-directory-mappings",
          description:
            'Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the Entry and Target pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in Target. This value can be set only when HomeDirectoryType is set to LOGICAL. The following is an Entry and Target pair example.  [ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]  In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("chroot"). To do this, you can set Entry to / and set Target to the HomeDirectory parameter value. The following is an Entry and Target pair example for chroot.  [ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]',
          args: {
            name: "list",
          },
        },
        {
          name: "--policy",
          description:
            "A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include ${Transfer:UserName}, ${Transfer:HomeDirectory}, and ${Transfer:HomeBucket}.  This policy applies only when the domain of ServerId is Amazon S3. Amazon EFS does not use session policies. For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a session policy, see Example session policy. For more information, see AssumeRole in the Amazon Web ServicesSecurity Token Service API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--posix-profile",
          description:
            "The full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role",
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server instance. This is the specific server that you added your user to",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-id",
          description:
            'A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.  Get-ADGroup -Filter {samAccountName -like "YourGroupName*"} -Properties * | Select SamAccountName,ObjectSid  In that command, replace YourGroupName with the name of your Active Directory group. The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-',
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
      name: "update-agreement",
      description:
        "Updates some of the parameters for an existing agreement. Provide the AgreementId and the ServerId for the agreement that you want to update, along with the new values for the parameters to update",
      options: [
        {
          name: "--agreement-id",
          description:
            "A unique identifier for the agreement. This identifier is returned when you create an agreement",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server instance. This is the specific server that the agreement uses",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "To replace the existing description, provide a short description for the agreement",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "You can update the status for the agreement, either activating an inactive agreement or the reverse",
          args: {
            name: "string",
          },
        },
        {
          name: "--local-profile-id",
          description:
            "A unique identifier for the AS2 local profile. To change the local profile identifier, provide a new value here",
          args: {
            name: "string",
          },
        },
        {
          name: "--partner-profile-id",
          description:
            "A unique identifier for the partner profile. To change the partner profile identifier, provide a new value here",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-directory",
          description:
            "To change the landing directory (folder) for files that are transferred, provide the bucket folder that you want to use; for example, /amzn-s3-demo-bucket/home/mydirectory",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-role",
          description:
            "Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.  For AS2 connectors  With AS2, you can send files by calling StartFileTransfer and specifying the file paths in the request parameter, SendFilePaths. We use the file\u2019s parent directory (for example, for --send-file-paths /bucket/dir/file.txt, parent directory is /bucket/dir/) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the AccessRole needs to provide read and write access to the parent directory of the file location used in the StartFileTransfer request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with StartFileTransfer. If you are using Basic authentication for your AS2 connector, the access role requires the secretsmanager:GetSecretValue permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the kms:Decrypt permission for that key.  For SFTP connectors  Make sure that the access role provides read and write access to the parent directory of the file location that's used in the StartFileTransfer request. Additionally, make sure that the role provides secretsmanager:GetSecretValue permission to Secrets Manager",
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
      name: "update-certificate",
      description: "Updates the active and inactive dates for a certificate",
      options: [
        {
          name: "--certificate-id",
          description:
            "The identifier of the certificate object that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--active-date",
          description:
            "An optional date that specifies when the certificate becomes active",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--inactive-date",
          description:
            "An optional date that specifies when the certificate becomes inactive",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--description",
          description: "A short description to help identify the certificate",
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
      name: "update-connector",
      description:
        "Updates some of the parameters for an existing connector. Provide the ConnectorId for the connector that you want to update, along with the new values for the parameters to update",
      options: [
        {
          name: "--connector-id",
          description: "The unique identifier for the connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--url",
          description: "The URL of the partner's AS2 or SFTP endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--as2-config",
          description:
            "A structure that contains the parameters for an AS2 connector object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-role",
          description:
            "Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.  For AS2 connectors  With AS2, you can send files by calling StartFileTransfer and specifying the file paths in the request parameter, SendFilePaths. We use the file\u2019s parent directory (for example, for --send-file-paths /bucket/dir/file.txt, parent directory is /bucket/dir/) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the AccessRole needs to provide read and write access to the parent directory of the file location used in the StartFileTransfer request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with StartFileTransfer. If you are using Basic authentication for your AS2 connector, the access role requires the secretsmanager:GetSecretValue permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the kms:Decrypt permission for that key.  For SFTP connectors  Make sure that the access role provides read and write access to the parent directory of the file location that's used in the StartFileTransfer request. Additionally, make sure that the role provides secretsmanager:GetSecretValue permission to Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-role",
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs",
          args: {
            name: "string",
          },
        },
        {
          name: "--sftp-config",
          description:
            "A structure that contains the parameters for an SFTP connector object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--security-policy-name",
          description:
            "Specifies the name of the security policy for the connector",
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
      name: "update-host-key",
      description:
        "Updates the description for the host key that's specified by the ServerId and HostKeyId parameters",
      options: [
        {
          name: "--server-id",
          description:
            "The identifier of the server that contains the host key that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-key-id",
          description: "The identifier of the host key that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An updated description for the host key",
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
      name: "update-profile",
      description:
        "Updates some of the parameters for an existing profile. Provide the ProfileId for the profile that you want to update, along with the new values for the parameters to update",
      options: [
        {
          name: "--profile-id",
          description:
            "The identifier of the profile object that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-ids",
          description:
            "An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles",
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
      name: "update-server",
      description:
        "Updates the file transfer protocol-enabled server's properties after that server has been created. The UpdateServer call returns the ServerId of the server you updated",
      options: [
        {
          name: "--certificate",
          description:
            "The Amazon Resource Name (ARN) of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required when Protocols is set to FTPS. To request a new public certificate, see Request a public certificate in the  Amazon Web ServicesCertificate Manager User Guide. To import an existing certificate into ACM, see Importing certificates into ACM in the  Amazon Web ServicesCertificate Manager User Guide. To request a private certificate to use FTPS through private IP addresses, see Request a private certificate in the  Amazon Web ServicesCertificate Manager User Guide. Certificates with the following cryptographic algorithms and key sizes are supported:   2048-bit RSA (RSA_2048)   4096-bit RSA (RSA_4096)   Elliptic Prime Curve 256 bit (EC_prime256v1)   Elliptic Prime Curve 384 bit (EC_secp384r1)   Elliptic Prime Curve 521 bit (EC_secp521r1)    The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer",
          args: {
            name: "string",
          },
        },
        {
          name: "--protocol-details",
          description:
            "The protocol settings that are configured for your server.    To indicate passive mode (for FTP and FTPS protocols), use the PassiveIp parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.    To ignore the error that is generated when the client attempts to use the SETSTAT command on a file that you are uploading to an Amazon S3 bucket, use the SetStatOption parameter. To have the Transfer Family server ignore the SETSTAT command and upload files without needing to make any changes to your SFTP client, set the value to ENABLE_NO_OP. If you set the SetStatOption parameter to ENABLE_NO_OP, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a SETSTAT call.   To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the TlsSessionResumptionMode parameter.    As2Transports indicates the transport method for the AS2 messages. Currently, only HTTP is supported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--endpoint-details",
          description:
            "The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--endpoint-type",
          description:
            "The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC) or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.   After May 19, 2021, you won't be able to create a server using EndpointType=VPC_ENDPOINT in your Amazon Web Services account if your account hasn't already done so before May 19, 2021. If you have already created servers with EndpointType=VPC_ENDPOINT in your Amazon Web Services account on or before May 19, 2021, you will not be affected. After this date, use EndpointType=VPC. For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint. It is recommended that you use VPC as the EndpointType. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with EndpointType set to VPC_ENDPOINT",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-key",
          description:
            'The RSA, ECDSA, or ED25519 private key to use for your SFTP-enabled server. You can add multiple host keys, in case you want to rotate keys, or have a set of active keys that use different algorithms. Use the following command to generate an RSA 2048 bit key with no passphrase:  ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key. Use a minimum value of 2048 for the -b option. You can create a stronger key by using 3072 or 4096. Use the following command to generate an ECDSA 256 bit key with no passphrase:  ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key. Valid values for the -b option for ECDSA are 256, 384, and 521. Use the following command to generate an ED25519 key with no passphrase:  ssh-keygen -t ed25519 -N "" -f my-new-server-key. For all of these commands, you can replace my-new-server-key with a string of your choice.  If you aren\'t planning to migrate existing users from an existing SFTP-enabled server to a new server, don\'t update the host key. Accidentally changing a server\'s host key can be disruptive.  For more information, see Manage host keys for your SFTP-enabled server in the Transfer Family User Guide',
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-provider-details",
          description:
            "An array containing all of the information required to call a customer's authentication API method",
          args: {
            name: "structure",
          },
        },
        {
          name: "--logging-role",
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in your CloudWatch logs",
          args: {
            name: "string",
          },
        },
        {
          name: "--post-authentication-login-banner",
          description:
            "Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.  The SFTP protocol does not support post-authentication display banners",
          args: {
            name: "string",
          },
        },
        {
          name: "--pre-authentication-login-banner",
          description:
            "Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system:  This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel",
          args: {
            name: "string",
          },
        },
        {
          name: "--protocols",
          description:
            "Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:    SFTP (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH    FTPS (File Transfer Protocol Secure): File transfer with TLS encryption    FTP (File Transfer Protocol): Unencrypted file transfer    AS2 (Applicability Statement 2): used for transporting structured business-to-business data      If you select FTPS, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.   If Protocol includes either FTP or FTPS, then the EndpointType must be VPC and the IdentityProviderType must be either AWS_DIRECTORY_SERVICE, AWS_LAMBDA, or API_GATEWAY.   If Protocol includes FTP, then AddressAllocationIds cannot be associated.   If Protocol is set only to SFTP, the EndpointType can be set to PUBLIC and the IdentityProviderType can be set any of the supported identity types: SERVICE_MANAGED, AWS_DIRECTORY_SERVICE, AWS_LAMBDA, or API_GATEWAY.   If Protocol includes AS2, then the EndpointType must be VPC, and domain must be Amazon S3",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-policy-name",
          description:
            "Specifies the name of the security policy for the server",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a server instance that the Transfer Family user is assigned to",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-details",
          description:
            "Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow. In addition to a workflow to execute when a file is uploaded completely, WorkflowDetails can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded. To remove an associated workflow from a server, you can provide an empty OnUpload object, as in the following example.  aws transfer update-server --server-id s-01234567890abcdef --workflow-details '{\"OnUpload\":[]}'",
          args: {
            name: "structure",
          },
        },
        {
          name: "--structured-log-destinations",
          description:
            "Specifies the log groups to which your server logs are sent. To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:  arn:aws:logs:region-name:amazon-account-id:log-group:log-group-name:*  For example, arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*  If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty value for this parameter in an update-server call. For example:  update-server --server-id s-1234567890abcdef0 --structured-log-destinations",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-storage-options",
          description:
            "Specifies whether or not performance for your Amazon S3 directories is optimized. This is disabled by default. By default, home directory mappings have a TYPE of DIRECTORY. If you enable this option, you would then need to explicitly set the HomeDirectoryMapEntry Type to FILE if you want a mapping to have a file target",
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
      name: "update-user",
      description:
        'Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the UserName and ServerId you specify. The response returns the ServerId and the UserName for the updated user. In the console, you can select Restricted when you create or update a user. This ensures that the user can\'t access anything outside of their home directory. The programmatic way to configure this behavior is to update the user. Set their HomeDirectoryType to LOGICAL, and specify HomeDirectoryMappings with Entry as root (/) and Target as their home directory. For example, if the user\'s home directory is /test/admin-user, the following command updates the user so that their configuration in the console shows the Restricted flag as selected.   aws transfer update-user --server-id <server-id> --user-name admin-user --home-directory-type LOGICAL --home-directory-mappings "[{\\"Entry\\":\\"/\\", \\"Target\\":\\"/test/admin-user\\"}]"',
      options: [
        {
          name: "--home-directory",
          description:
            "The landing directory (folder) for a user when they log in to the server using the client. A HomeDirectory example is /bucket_name/home/mydirectory.  The HomeDirectory parameter is only used if HomeDirectoryType is set to PATH",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-directory-type",
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to PATH, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to LOGICAL, you need to provide mappings in the HomeDirectoryMappings for how you want to make Amazon S3 or Amazon EFS paths visible to your users.  If HomeDirectoryType is LOGICAL, you must provide mappings, using the HomeDirectoryMappings parameter. If, on the other hand, HomeDirectoryType is PATH, you provide an absolute path using the HomeDirectory parameter. You cannot have both HomeDirectory and HomeDirectoryMappings in your template",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-directory-mappings",
          description:
            'Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the Entry and Target pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in Target. This value can be set only when HomeDirectoryType is set to LOGICAL. The following is an Entry and Target pair example.  [ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]  In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("chroot"). To do this, you can set Entry to \'/\' and set Target to the HomeDirectory parameter value. The following is an Entry and Target pair example for chroot.  [ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]',
          args: {
            name: "list",
          },
        },
        {
          name: "--policy",
          description:
            "A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include ${Transfer:UserName}, ${Transfer:HomeDirectory}, and ${Transfer:HomeBucket}.  This policy applies only when the domain of ServerId is Amazon S3. Amazon EFS does not use session policies. For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the Policy argument. For an example of a session policy, see Creating a session policy. For more information, see AssumeRole in the Amazon Web Services Security Token Service API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--posix-profile",
          description:
            "Specifies the full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon Elastic File Systems (Amazon EFS). The POSIX permissions that are set on files and directories in your file system determines the level of access your users get when transferring files into and out of your Amazon EFS file systems",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role",
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-id",
          description:
            "A system-assigned unique identifier for a Transfer Family server instance that the user is assigned to",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "A unique string that identifies a user and is associated with a server as specified by the ServerId. This user name must be a minimum of 3 and a maximum of 100 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen '-', period '.', and at sign '@'. The user name can't start with a hyphen, period, or at sign",
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
      name: "update-web-app",
      description:
        "Assigns new properties to a web app. You can modify the access point, identity provider details, and the web app units",
      options: [
        {
          name: "--web-app-id",
          description:
            "Provide the identifier of the web app that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-provider-details",
          description:
            "Provide updated identity provider values in a WebAppIdentityProviderDetails object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-endpoint",
          description:
            "The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-app-units",
          description:
            "A union that contains the value for number of concurrent connections or the user sessions on your web app",
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
      name: "update-web-app-customization",
      description:
        "Assigns new customization properties to a web app. You can modify the icon file, logo file, and title",
      options: [
        {
          name: "--web-app-id",
          description:
            "Provide the identifier of the web app that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--title",
          description: "Provide an updated title",
          args: {
            name: "string",
          },
        },
        {
          name: "--logo-file",
          description: "Specify logo file data string (in base64 encoding)",
          args: {
            name: "blob",
          },
        },
        {
          name: "--favicon-file",
          description: "Specify icon file data string (in base64 encoding)",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "server-offline",
          description:
            "Wait until JMESPath query Server.State returns OFFLINE when polling with ``describe-server``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--server-id",
              description: "A system-assigned unique identifier for a server",
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
          name: "server-online",
          description:
            "Wait until JMESPath query Server.State returns ONLINE when polling with ``describe-server``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--server-id",
              description: "A system-assigned unique identifier for a server",
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
      ],
    },
  ],
};
export default completionSpec;
