const completionSpec: Fig.Spec = {
  name: "appstream",
  description:
    "Amazon AppStream 2.0 This is the Amazon AppStream 2.0 API Reference. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand.   You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint in the Amazon AppStream 2.0 Administration Guide.  To learn more about AppStream 2.0, see the following resources:    Amazon AppStream 2.0 product page     Amazon AppStream 2.0 documentation",
  subcommands: [
    {
      name: "associate-fleet",
      description: "Associates the specified fleet with the specified stack",
      options: [
        {
          name: "--fleet-name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-name",
          description: "The name of the stack",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-associate-user-stack",
      description:
        "Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain",
      options: [
        {
          name: "--user-stack-associations",
          description: "The list of UserStackAssociation objects",
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
      name: "batch-disassociate-user-stack",
      description:
        "Disassociates the specified users from the specified stacks",
      options: [
        {
          name: "--user-stack-associations",
          description: "The list of UserStackAssociation objects",
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
      name: "copy-image",
      description:
        "Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied",
      options: [
        {
          name: "--source-image-name",
          description: "The name of the image to copy",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-image-name",
          description:
            "The name that the image will have when it is copied to the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-region",
          description:
            "The destination region to which the image will be copied. This parameter is required, even if you are copying an image within the same region",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-image-description",
          description:
            "The description that the image will have when it is copied to the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-directory-config",
      description:
        "Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains",
      options: [
        {
          name: "--directory-name",
          description:
            "The fully qualified name of the directory (for example, corp.example.com)",
          args: {
            name: "string",
          },
        },
        {
          name: "--organizational-unit-distinguished-names",
          description:
            "The distinguished names of the organizational units for computer accounts",
          args: {
            name: "list",
          },
        },
        {
          name: "--service-account-credentials",
          description:
            "The credentials for the service account used by the fleet or image builder to connect to the directory",
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
      name: "create-fleet",
      description:
        "Creates a fleet. A fleet consists of streaming instances that run a specified image",
      options: [
        {
          name: "--name",
          description: "A unique name for the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-name",
          description: "The name of the image used to create the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-arn",
          description: "The ARN of the public, private, or shared image to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-type",
          description:
            "The instance type to use when launching fleet instances. The following instance types are available:   stream.standard.small   stream.standard.medium   stream.standard.large   stream.compute.large   stream.compute.xlarge   stream.compute.2xlarge   stream.compute.4xlarge   stream.compute.8xlarge   stream.memory.large   stream.memory.xlarge   stream.memory.2xlarge   stream.memory.4xlarge   stream.memory.8xlarge   stream.memory.z1d.large   stream.memory.z1d.xlarge   stream.memory.z1d.2xlarge   stream.memory.z1d.3xlarge   stream.memory.z1d.6xlarge   stream.memory.z1d.12xlarge   stream.graphics-design.large   stream.graphics-design.xlarge   stream.graphics-design.2xlarge   stream.graphics-design.4xlarge   stream.graphics-desktop.2xlarge   stream.graphics.g4dn.xlarge   stream.graphics.g4dn.2xlarge   stream.graphics.g4dn.4xlarge   stream.graphics.g4dn.8xlarge   stream.graphics.g4dn.12xlarge   stream.graphics.g4dn.16xlarge   stream.graphics-pro.4xlarge   stream.graphics-pro.8xlarge   stream.graphics-pro.16xlarge",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-type",
          description:
            "The fleet type.  ALWAYS_ON  Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.  ON_DEMAND  Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-capacity",
          description: "The desired capacity for the fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-config",
          description: "The VPC configuration for the fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-user-duration-in-seconds",
          description:
            "The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance. Specify a value between 600 and 360000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--disconnect-timeout-in-seconds",
          description:
            "The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.  Specify a value between 60 and 360000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--description",
          description: "The description to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The fleet name to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-default-internet-access",
          description:
            "Enables or disables default internet access for the fleet",
        },
        {
          name: "--no-enable-default-internet-access",
          description:
            "Enables or disables default internet access for the fleet",
        },
        {
          name: "--domain-join-info",
          description:
            "The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to associate with the fleet. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.  If you do not specify a value, the value is set to an empty string. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:  _ . : / = + \\ - @ For more information, see Tagging Your Resources in the Amazon AppStream 2.0 Administration Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--idle-disconnect-timeout-in-seconds",
          description:
            "The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the DisconnectTimeoutInSeconds time interval begins. Users are notified before they are disconnected due to inactivity. If they try to reconnect to the streaming session before the time interval specified in DisconnectTimeoutInSeconds elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in IdleDisconnectTimeoutInSeconds elapses, they are disconnected. To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.  If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity",
          args: {
            name: "integer",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) AssumeRole API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the appstream_machine_role credential profile on the instance. For more information, see Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances in the Amazon AppStream 2.0 Administration Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-view",
          description:
            "The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When APP is specified, only the windows of applications opened by users display. When DESKTOP is specified, the standard desktop that is provided by the operating system displays. The default value is APP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-image-builder",
      description:
        "Creates an image builder. An image builder is a virtual machine that is used to create an image. The initial state of the builder is PENDING. When it is ready, the state is RUNNING",
      options: [
        {
          name: "--name",
          description: "A unique name for the image builder",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-name",
          description: "The name of the image used to create the image builder",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-arn",
          description: "The ARN of the public, private, or shared image to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-type",
          description:
            "The instance type to use when launching the image builder. The following instance types are available:   stream.standard.small   stream.standard.medium   stream.standard.large   stream.compute.large   stream.compute.xlarge   stream.compute.2xlarge   stream.compute.4xlarge   stream.compute.8xlarge   stream.memory.large   stream.memory.xlarge   stream.memory.2xlarge   stream.memory.4xlarge   stream.memory.8xlarge   stream.memory.z1d.large   stream.memory.z1d.xlarge   stream.memory.z1d.2xlarge   stream.memory.z1d.3xlarge   stream.memory.z1d.6xlarge   stream.memory.z1d.12xlarge   stream.graphics-design.large   stream.graphics-design.xlarge   stream.graphics-design.2xlarge   stream.graphics-design.4xlarge   stream.graphics-desktop.2xlarge   stream.graphics.g4dn.xlarge   stream.graphics.g4dn.2xlarge   stream.graphics.g4dn.4xlarge   stream.graphics.g4dn.8xlarge   stream.graphics.g4dn.12xlarge   stream.graphics.g4dn.16xlarge   stream.graphics-pro.4xlarge   stream.graphics-pro.8xlarge   stream.graphics-pro.16xlarge",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The image builder name to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "The VPC configuration for the image builder. You can specify only one subnet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to apply to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) AssumeRole API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the appstream_machine_role credential profile on the instance. For more information, see Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances in the Amazon AppStream 2.0 Administration Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-default-internet-access",
          description:
            "Enables or disables default internet access for the image builder",
        },
        {
          name: "--no-enable-default-internet-access",
          description:
            "Enables or disables default internet access for the image builder",
        },
        {
          name: "--domain-join-info",
          description:
            "The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--appstream-agent-version",
          description:
            "The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to associate with the image builder. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.  Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:  _ . : / = + \\ - @ If you do not specify a value, the value is set to an empty string. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Administration Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--access-endpoints",
          description:
            "The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the image builder only through the specified endpoints",
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
      name: "create-image-builder-streaming-url",
      description: "Creates a URL to start an image builder streaming session",
      options: [
        {
          name: "--name",
          description: "The name of the image builder",
          args: {
            name: "string",
          },
        },
        {
          name: "--validity",
          description:
            "The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 3600 seconds",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-stack",
      description:
        "Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations",
      options: [
        {
          name: "--name",
          description: "The name of the stack",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The stack name to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-connectors",
          description: "The storage connectors to enable",
          args: {
            name: "list",
          },
        },
        {
          name: "--redirect-url",
          description:
            "The URL that users are redirected to after their streaming session ends",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-url",
          description:
            "The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-settings",
          description:
            "The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled",
          args: {
            name: "list",
          },
        },
        {
          name: "--application-settings",
          description:
            "The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to associate with the stack. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.  If you do not specify a value, the value is set to an empty string. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:  _ . : / = + \\ - @ For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Administration Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--access-endpoints",
          description:
            "The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints",
          args: {
            name: "list",
          },
        },
        {
          name: "--embed-host-domains",
          description:
            "The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions",
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
      name: "create-streaming-url",
      description:
        "Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup",
      options: [
        {
          name: "--stack-name",
          description: "The name of the stack",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description:
            "The name of the application to launch after the session starts. This is the name that you specified as Name in the Image Assistant. If your fleet is enabled for the Desktop stream view, you can also choose to launch directly to the operating system desktop. To do so, specify Desktop",
          args: {
            name: "string",
          },
        },
        {
          name: "--validity",
          description:
            "The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 60 seconds",
          args: {
            name: "long",
          },
        },
        {
          name: "--session-context",
          description:
            "The session context. For more information, see Session Context in the Amazon AppStream 2.0 Administration Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-updated-image",
      description:
        'Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software. For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in Administer Your AppStream 2.0 Images, in the Amazon AppStream 2.0 Administration Guide',
      options: [
        {
          name: "--existing-image-name",
          description: "The name of the image to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-image-name",
          description:
            "The name of the new image. The name must be unique within the AWS account and Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-image-description",
          description: "The description to display for the new image",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-image-display-name",
          description: "The name to display for the new image",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-image-tags",
          description:
            "The tags to associate with the new image. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.  Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:  _ . : / = + \\ - @ If you do not specify a value, the value is set to an empty string. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Administration Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--dry-run",
          description:
            "Indicates whether to display the status of image update availability before AppStream 2.0 initiates the process of creating a new updated image. If this value is set to true, AppStream 2.0 displays whether image updates are available. If this value is set to false, AppStream 2.0 initiates the process of creating a new updated image without displaying whether image updates are available",
        },
        {
          name: "--no-dry-run",
          description:
            "Indicates whether to display the status of image update availability before AppStream 2.0 initiates the process of creating a new updated image. If this value is set to true, AppStream 2.0 displays whether image updates are available. If this value is set to false, AppStream 2.0 initiates the process of creating a new updated image without displaying whether image updates are available",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-usage-report-subscription",
      description:
        "Creates a usage report subscription. Usage reports are generated daily",
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
      name: "create-user",
      description: "Creates a new user in the user pool",
      options: [
        {
          name: "--user-name",
          description:
            "The email address of the user.  Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a \"user does not exist\" error message displays",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-action",
          description:
            "The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent.   The temporary password in the welcome email is valid for only 7 days. If users don\u2019t set their passwords within 7 days, you must send them a new welcome email",
          args: {
            name: "string",
          },
        },
        {
          name: "--first-name",
          description: "The first name, or given name, of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-name",
          description: "The last name, or surname, of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-type",
          description:
            "The authentication type for the user. You must specify USERPOOL",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-directory-config",
      description:
        "Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain",
      options: [
        {
          name: "--directory-name",
          description: "The name of the directory configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-fleet",
      description: "Deletes the specified fleet",
      options: [
        {
          name: "--name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-image",
      description:
        "Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image",
      options: [
        {
          name: "--name",
          description: "The name of the image",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-image-builder",
      description:
        "Deletes the specified image builder and releases the capacity",
      options: [
        {
          name: "--name",
          description: "The name of the image builder",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-image-permissions",
      description:
        "Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image",
      options: [
        {
          name: "--name",
          description: "The name of the private image",
          args: {
            name: "string",
          },
        },
        {
          name: "--shared-account-id",
          description:
            "The 12-digit identifier of the AWS account for which to delete image permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-stack",
      description:
        "Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released",
      options: [
        {
          name: "--name",
          description: "The name of the stack",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-usage-report-subscription",
      description: "Disables usage report generation",
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
      name: "delete-user",
      description: "Deletes a user from the user pool",
      options: [
        {
          name: "--user-name",
          description:
            "The email address of the user.  Users' email addresses are case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-type",
          description:
            "The authentication type for the user. You must specify USERPOOL",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-directory-configs",
      description:
        "Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains.  Although the response syntax in this topic includes the account password, this password is not returned in the actual response",
      options: [
        {
          name: "--directory-names",
          description: "The directory names",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of each page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
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
      name: "describe-fleets",
      description:
        "Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described",
      options: [
        {
          name: "--names",
          description: "The names of the fleets to describe",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
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
      name: "describe-image-builders",
      description:
        "Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described",
      options: [
        {
          name: "--names",
          description: "The names of the image builders to describe",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of each page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
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
      name: "describe-image-permissions",
      description:
        "Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own",
      options: [
        {
          name: "--name",
          description:
            "The name of the private image for which to describe permissions. The image must be one that you own",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of each page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--shared-aws-account-ids",
          description:
            "The 12-digit identifier of one or more AWS accounts with which the image is shared",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-images",
      description:
        "Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described",
      options: [
        {
          name: "--names",
          description: "The names of the public or private images to describe",
          args: {
            name: "list",
          },
        },
        {
          name: "--arns",
          description:
            "The ARNs of the public, private, and shared images to describe",
          args: {
            name: "list",
          },
        },
        {
          name: "--type",
          description:
            "The type of image (public, private, or shared) to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of each page of results",
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
      name: "describe-sessions",
      description:
        "Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL",
      options: [
        {
          name: "--stack-name",
          description: "The name of the stack. This value is case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-name",
          description: "The name of the fleet. This value is case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The user identifier (ID). If you specify a user ID, you must also specify the authentication type",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The size of each page of results. The default value is 20 and the maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--authentication-type",
          description:
            "The authentication method. Specify API for a user authenticated using a streaming URL or SAML for a SAML federated user. The default is to authenticate users using a streaming URL",
          args: {
            name: "string",
          },
        },
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
      name: "describe-stacks",
      description:
        "Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described",
      options: [
        {
          name: "--names",
          description: "The names of the stacks to describe",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
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
      name: "describe-usage-report-subscriptions",
      description:
        "Retrieves a list that describes one or more usage report subscriptions",
      options: [
        {
          name: "--max-results",
          description: "The maximum size of each page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user-stack-associations",
      description:
        "Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:   The stack name   The user name (email address of the user associated with the stack) and the authentication type for the user",
      options: [
        {
          name: "--stack-name",
          description: "The name of the stack that is associated with the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "The email address of the user who is associated with the stack.  Users' email addresses are case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-type",
          description:
            "The authentication type for the user who is associated with the stack. You must specify USERPOOL",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of each page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
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
      name: "describe-users",
      description:
        "Retrieves a list that describes one or more specified users in the user pool",
      options: [
        {
          name: "--authentication-type",
          description:
            "The authentication type for the users in the user pool to describe. You must specify USERPOOL",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of each page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
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
      name: "disable-user",
      description:
        "Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user",
      options: [
        {
          name: "--user-name",
          description:
            "The email address of the user.  Users' email addresses are case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-type",
          description:
            "The authentication type for the user. You must specify USERPOOL",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-fleet",
      description: "Disassociates the specified fleet from the specified stack",
      options: [
        {
          name: "--fleet-name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-name",
          description: "The name of the stack",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "enable-user",
      description:
        "Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned",
      options: [
        {
          name: "--user-name",
          description:
            "The email address of the user.  Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a \"user does not exist\" error message displays",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-type",
          description:
            "The authentication type for the user. You must specify USERPOOL",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "expire-session",
      description: "Immediately stops the specified streaming session",
      options: [
        {
          name: "--session-id",
          description: "The identifier of the streaming session",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-associated-fleets",
      description:
        "Retrieves the name of the fleet that is associated with the specified stack",
      options: [
        {
          name: "--stack-name",
          description: "The name of the stack",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
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
      name: "list-associated-stacks",
      description:
        "Retrieves the name of the stack with which the specified fleet is associated",
      options: [
        {
          name: "--fleet-name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
          args: {
            name: "string",
          },
        },
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
        "Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Administration Guide",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-fleet",
      description: "Starts the specified fleet",
      options: [
        {
          name: "--name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-image-builder",
      description: "Starts the specified image builder",
      options: [
        {
          name: "--name",
          description: "The name of the image builder",
          args: {
            name: "string",
          },
        },
        {
          name: "--appstream-agent-version",
          description:
            "The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-fleet",
      description: "Stops the specified fleet",
      options: [
        {
          name: "--name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-image-builder",
      description: "Stops the specified image builder",
      options: [
        {
          name: "--name",
          description: "The name of the image builder",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value. To list the current tags for your resources, use ListTagsForResource. To disassociate tags from your resources, use UntagResource. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Administration Guide",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to associate. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=.  If you do not specify a value, the value is set to an empty string. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters:  _ . : / = + \\ - @",
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
      description:
        "Disassociates one or more specified tags from the specified AppStream 2.0 resource. To list the current tags for your resources, use ListTagsForResource. For more information about tags, see Tagging Your Resources in the Amazon AppStream 2.0 Administration Guide",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys for the tags to disassociate",
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
      name: "update-directory-config",
      description:
        "Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains",
      options: [
        {
          name: "--directory-name",
          description: "The name of the Directory Config object",
          args: {
            name: "string",
          },
        },
        {
          name: "--organizational-unit-distinguished-names",
          description:
            "The distinguished names of the organizational units for computer accounts",
          args: {
            name: "list",
          },
        },
        {
          name: "--service-account-credentials",
          description:
            "The credentials for the service account used by the fleet or image builder to connect to the directory",
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
      name: "update-fleet",
      description:
        "Updates the specified fleet. If the fleet is in the STOPPED state, you can update any attribute except the fleet name. If the fleet is in the RUNNING state, you can update the DisplayName, ComputeCapacity, ImageARN, ImageName, IdleDisconnectTimeoutInSeconds, and DisconnectTimeoutInSeconds attributes. If the fleet is in the STARTING or STOPPING state, you can't update it",
      options: [
        {
          name: "--image-name",
          description: "The name of the image used to create the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-arn",
          description: "The ARN of the public, private, or shared image to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A unique name for the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-type",
          description:
            "The instance type to use when launching fleet instances. The following instance types are available:   stream.standard.small   stream.standard.medium   stream.standard.large   stream.compute.large   stream.compute.xlarge   stream.compute.2xlarge   stream.compute.4xlarge   stream.compute.8xlarge   stream.memory.large   stream.memory.xlarge   stream.memory.2xlarge   stream.memory.4xlarge   stream.memory.8xlarge   stream.memory.z1d.large   stream.memory.z1d.xlarge   stream.memory.z1d.2xlarge   stream.memory.z1d.3xlarge   stream.memory.z1d.6xlarge   stream.memory.z1d.12xlarge   stream.graphics-design.large   stream.graphics-design.xlarge   stream.graphics-design.2xlarge   stream.graphics-design.4xlarge   stream.graphics-desktop.2xlarge   stream.graphics.g4dn.xlarge   stream.graphics.g4dn.2xlarge   stream.graphics.g4dn.4xlarge   stream.graphics.g4dn.8xlarge   stream.graphics.g4dn.12xlarge   stream.graphics.g4dn.16xlarge   stream.graphics-pro.4xlarge   stream.graphics-pro.8xlarge   stream.graphics-pro.16xlarge",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-capacity",
          description: "The desired capacity for the fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-config",
          description: "The VPC configuration for the fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-user-duration-in-seconds",
          description:
            "The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance. Specify a value between 600 and 360000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--disconnect-timeout-in-seconds",
          description:
            "The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.  Specify a value between 60 and 360000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--delete-vpc-config",
          description: "Deletes the VPC association for the specified fleet",
        },
        {
          name: "--no-delete-vpc-config",
          description: "Deletes the VPC association for the specified fleet",
        },
        {
          name: "--description",
          description: "The description to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The fleet name to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-default-internet-access",
          description:
            "Enables or disables default internet access for the fleet",
        },
        {
          name: "--no-enable-default-internet-access",
          description:
            "Enables or disables default internet access for the fleet",
        },
        {
          name: "--domain-join-info",
          description:
            "The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idle-disconnect-timeout-in-seconds",
          description:
            "The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the DisconnectTimeoutInSeconds time interval begins. Users are notified before they are disconnected due to inactivity. If users try to reconnect to the streaming session before the time interval specified in DisconnectTimeoutInSeconds elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in IdleDisconnectTimeoutInSeconds elapses, they are disconnected.  To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.  If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity",
          args: {
            name: "integer",
          },
        },
        {
          name: "--attributes-to-delete",
          description: "The fleet attributes to delete",
          args: {
            name: "list",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) AssumeRole API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the appstream_machine_role credential profile on the instance. For more information, see Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances in the Amazon AppStream 2.0 Administration Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-view",
          description:
            "The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When APP is specified, only the windows of applications opened by users display. When DESKTOP is specified, the standard desktop that is provided by the operating system displays. The default value is APP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-image-permissions",
      description:
        "Adds or updates permissions for the specified private image",
      options: [
        {
          name: "--name",
          description: "The name of the private image",
          args: {
            name: "string",
          },
        },
        {
          name: "--shared-account-id",
          description:
            "The 12-digit identifier of the AWS account for which you want add or update image permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-permissions",
          description: "The permissions for the image",
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
      name: "update-stack",
      description: "Updates the specified fields for the specified stack",
      options: [
        {
          name: "--display-name",
          description: "The stack name to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description to display",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the stack",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-connectors",
          description: "The storage connectors to enable",
          args: {
            name: "list",
          },
        },
        {
          name: "--delete-storage-connectors",
          description:
            "Deletes the storage connectors currently enabled for the stack",
        },
        {
          name: "--no-delete-storage-connectors",
          description:
            "Deletes the storage connectors currently enabled for the stack",
        },
        {
          name: "--redirect-url",
          description:
            "The URL that users are redirected to after their streaming session ends",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-url",
          description:
            "The URL that users are redirected to after they choose the Send Feedback link. If no URL is specified, no Send Feedback link is displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes-to-delete",
          description: "The stack attributes to delete",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-settings",
          description:
            "The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled",
          args: {
            name: "list",
          },
        },
        {
          name: "--application-settings",
          description:
            "The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-endpoints",
          description:
            "The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints",
          args: {
            name: "list",
          },
        },
        {
          name: "--embed-host-domains",
          description:
            "The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "fleet-started",
          description:
            "Wait until JMESPath query Fleets[].State returns ACTIVE for all elements when polling with ``describe-fleets``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--names",
              description: "The names of the fleets to describe",
              args: {
                name: "list",
              },
            },
            {
              name: "--next-token",
              description:
                "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
              args: {
                name: "string",
              },
            },
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
          name: "fleet-stopped",
          description:
            "Wait until JMESPath query Fleets[].State returns INACTIVE for all elements when polling with ``describe-fleets``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--names",
              description: "The names of the fleets to describe",
              args: {
                name: "list",
              },
            },
            {
              name: "--next-token",
              description:
                "The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page",
              args: {
                name: "string",
              },
            },
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
