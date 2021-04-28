export const completionSpec: Fig.Spec = {
  name: "opsworks",
  description:
    "AWS OpsWorks Welcome to the AWS OpsWorks Stacks API Reference. This guide provides descriptions, syntax, and usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error codes.  AWS OpsWorks Stacks is an application management service that provides an integrated experience for overseeing the complete application lifecycle. For information about this product, go to the AWS OpsWorks details page.   SDKs and CLI  The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:    AWS CLI     AWS SDK for Java     AWS SDK for .NET     AWS SDK for PHP 2     AWS SDK for Ruby     AWS SDK for Node.js     AWS SDK for Python(Boto)     Endpoints  AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.   opsworks.us-east-1.amazonaws.com   opsworks.us-east-2.amazonaws.com   opsworks.us-west-1.amazonaws.com   opsworks.us-west-2.amazonaws.com   opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)   opsworks.eu-west-1.amazonaws.com   opsworks.eu-west-2.amazonaws.com   opsworks.eu-west-3.amazonaws.com   opsworks.eu-central-1.amazonaws.com   opsworks.ap-northeast-1.amazonaws.com   opsworks.ap-northeast-2.amazonaws.com   opsworks.ap-south-1.amazonaws.com   opsworks.ap-southeast-1.amazonaws.com   opsworks.ap-southeast-2.amazonaws.com   opsworks.sa-east-1.amazonaws.com    Chef Versions  When you call CreateStack, CloneStack, or UpdateStack we recommend you use the ConfigurationManager parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see Chef Versions.  You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.",
  subcommands: [
    {
      name: "assign-instance",
      description:
        "Assign a registered instance to a layer.   You can assign registered on-premises instances to any layer type.   You can assign registered Amazon EC2 instances only to custom layers.   You cannot use this action with instances that were created with AWS OpsWorks Stacks.    Required Permissions: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--layer-ids",
          description:
            "The layer ID, which must correspond to a custom layer. You cannot assign a registered instance to a built-in layer.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "assign-volume",
      description:
        "Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling RegisterVolume. After you register the volume, you must call UpdateVolume to specify a mount point before calling AssignVolume. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--volume-id",
          description: "The volume ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "associate-elastic-ip",
      description:
        "Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling RegisterElasticIp. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--elastic-ip",
          description: "The Elastic IP address.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "attach-elastic-load-balancer",
      description:
        "Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see Elastic Load Balancing.  You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see  Elastic Load Balancing Developer Guide.   Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--elastic-load-balancer-name",
          description: "The Elastic Load Balancing instance's name.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--layer-id",
          description:
            "The ID of the layer to which the Elastic Load Balancing instance is to be attached.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "clone-stack",
      description:
        "Creates a clone of a specified stack. For more information, see Clone a Stack. By default, all parameters are set to the values used by the parent stack.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--source-stack-id",
          description: "The source stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The cloned stack name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--vpc-id",
          description:
            "The ID of the VPC that the cloned stack is to be launched into. It must be in the specified region. All instances are launched into this VPC, and you cannot change the ID later.   If your account supports EC2 Classic, the default value is no VPC.   If your account does not support EC2 Classic, the default value is the default VPC for the specified region.   If the VPC ID corresponds to a default VPC and you have specified either the DefaultAvailabilityZone or the DefaultSubnetId parameter only, AWS OpsWorks Stacks infers the value of the other parameter. If you specify neither parameter, AWS OpsWorks Stacks sets these parameters to the first valid Availability Zone for the specified region and the corresponding default VPC subnet ID, respectively.  If you specify a nondefault VPC ID, note the following:   It must belong to a VPC in your account that is in the specified region.   You must specify a value for DefaultSubnetId.   For more information about how to use AWS OpsWorks Stacks with a VPC, see Running a Stack in a VPC. For more information about default VPC and EC2 Classic, see Supported Platforms.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--attributes",
          description:
            "A list of stack attributes and values as key/value pairs to be added to the cloned stack.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--service-role-arn",
          description:
            "The stack AWS Identity and Access Management (IAM) role, which allows AWS OpsWorks Stacks to work with AWS resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an existing IAM role. If you create a stack by using the AWS OpsWorks Stacks console, it creates the role for you. You can obtain an existing stack's IAM ARN programmatically by calling DescribePermissions. For more information about IAM ARNs, see Using Identifiers.  You must set this parameter to a valid service role ARN or the action will fail; there is no default value. You can specify the source stack's service role ARN, if you prefer, but you must do so explicitly.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--default-instance-profile-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances. For more information about IAM ARNs, see Using Identifiers.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-os",
          description:
            "The stack's operating system, which must be set to one of the following.   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2018.03, Amazon Linux 2017.09, Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7     Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   A custom AMI: Custom. You specify the custom AMI you want to use when you create instances. For more information about how to use custom AMIs with OpsWorks, see Using Custom AMIs.   The default option is the parent stack's operating system. For more information about supported operating systems, see AWS OpsWorks Stacks Operating Systems.  You can specify a different Linux operating system for the cloned stack, but you cannot change from Linux to Windows or Windows to Linux.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--hostname-theme",
          description:
            "The stack's host name theme, with spaces are replaced by underscores. The theme is used to generate host names for the stack's instances. By default, HostnameTheme is set to Layer_Dependent, which creates host names by appending integers to the layer's short name. The other themes are:    Baked_Goods     Clouds     Europe_Cities     Fruits     Greek_Deities_and_Titans     Legendary_creatures_from_Japan     Planets_and_Moons     Roman_Deities     Scottish_Islands     US_Cities     Wild_Cats    To obtain a generated host name, call GetHostNameSuggestion, which returns a host name based on the current theme.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-availability-zone",
          description:
            "The cloned stack's default Availability Zone, which must be in the specified region. For more information, see Regions and Endpoints. If you also specify a value for DefaultSubnetId, the subnet must be in the same zone. For more information, see the VpcId parameter description.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-subnet-id",
          description:
            "The stack's default VPC subnet ID. This parameter is required if you specify a value for the VpcId parameter. All instances are launched into this subnet unless you specify otherwise when you create the instance. If you also specify a value for DefaultAvailabilityZone, the subnet must be in that zone. For information on default values and when this parameter is required, see the VpcId parameter description.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--custom-json",
          description:
            'A string that contains user-defined, custom JSON. It is used to override the corresponding default stack configuration JSON values. The string should be in the following format:  "{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"  For more information about custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--configuration-manager",
          description:
            "The configuration manager. When you clone a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--chef-configuration",
          description:
            "A ChefConfiguration object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see Create a New Stack.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--use-custom-cookbooks",
          description: "Whether to use custom cookbooks.",
        },
        {
          name: "--no-use-custom-cookbooks",
          description: "Whether to use custom cookbooks.",
        },
        {
          name: "--use-opsworks-security-groups",
          description:
            "Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers. AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With UseOpsworksSecurityGroups you can instead provide your own custom security groups. UseOpsworksSecurityGroups has the following settings:    True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it but you cannot delete the built-in security group.   False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate Amazon Elastic Compute Cloud (Amazon EC2) security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.   For more information, see Create a New Stack.",
        },
        {
          name: "--no-use-opsworks-security-groups",
          description:
            "Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers. AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With UseOpsworksSecurityGroups you can instead provide your own custom security groups. UseOpsworksSecurityGroups has the following settings:    True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it but you cannot delete the built-in security group.   False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate Amazon Elastic Compute Cloud (Amazon EC2) security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.   For more information, see Create a New Stack.",
        },
        {
          name: "--custom-cookbooks-source",
          description:
            "Contains the information required to retrieve an app or cookbook from a repository. For more information, see Adding Apps or Cookbooks and Recipes.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--default-ssh-key-name",
          description:
            "A default Amazon EC2 key pair name. The default value is none. If you specify a key pair name, AWS OpsWorks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see  Using SSH to Communicate with an Instance and  Managing SSH Access. You can override this setting by specifying a different key pair, or no key pair, when you  create an instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--clone-permissions",
          description: "Whether to clone the source stack's permissions.",
        },
        {
          name: "--no-clone-permissions",
          description: "Whether to clone the source stack's permissions.",
        },
        {
          name: "--clone-app-ids",
          description:
            "A list of source stack app IDs to be included in the cloned stack.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--default-root-device-type",
          description:
            "The default root device type. This value is used by default for all instances in the cloned stack, but you can override it when you create an instance. For more information, see Storage for the Root Device.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--agent-version",
          description:
            "The default AWS OpsWorks Stacks agent version. You have the following options:   Auto-update - Set this parameter to LATEST. AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.   Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.   The default setting is LATEST. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.  You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--stack-region",
          description:
            'The cloned stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see Regions and Endpoints.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-app",
      description:
        "Creates an app for a specified stack. For more information, see Creating Apps.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--shortname",
          description: "The app's short name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--name",
          description: "The app name.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "A description of the app.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--data-sources",
          description: "The app's data source.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--type",
          description:
            "The app type. Each supported type is associated with a particular layer. For example, PHP applications are associated with a PHP layer. AWS OpsWorks Stacks deploys an application to those instances that are members of the corresponding layer. If your app isn't one of the standard types, or you prefer to implement your own Deploy recipes, specify other.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--app-source",
          description: "A Source object that specifies the app repository.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--domains",
          description:
            "The app virtual host settings, with multiple domains separated by commas. For example: 'www.example.com, example.com'",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--enable-ssl",
          description: "Whether to enable SSL for the app.",
        },
        {
          name: "--no-enable-ssl",
          description: "Whether to enable SSL for the app.",
        },
        {
          name: "--ssl-configuration",
          description: "An SslConfiguration object with the SSL configuration.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--attributes",
          description:
            "One or more user-defined key/value pairs to be added to the stack attributes.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--environment",
          description:
            "An array of EnvironmentVariable objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instance. For more information, see  Environment Variables. There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables' names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, \"Environment: is too large (maximum is 20KB).\"  If you have specified one or more environment variables, you cannot modify the stack's Chef version.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-deployment",
      description:
        "Runs deployment or stack commands. For more information, see Deploying Apps and Run Stack Commands.  Required Permissions: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--app-id",
          description:
            "The app ID. This parameter is required for app deployments, but not for other deployment commands.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--instance-ids",
          description: "The instance IDs for the deployment targets.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--layer-ids",
          description: "The layer IDs for the deployment targets.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--command",
          description:
            "A DeploymentCommand object that specifies the deployment command and any associated arguments.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--comment",
          description: "A user-defined comment.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--custom-json",
          description:
            'A string that contains user-defined, custom JSON. You can use this parameter to override some corresponding default stack configuration JSON values. The string should be in the following format:  "{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"  For more information about custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes and Overriding Attributes With Custom JSON.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-instance",
      description:
        "Creates an instance in a specified stack. For more information, see Adding an Instance to a Layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--layer-ids",
          description: "An array that contains the instance's layer IDs.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--instance-type",
          description:
            "The instance type, such as t2.micro. For a list of supported instance types, open the stack in the console, choose Instances, and choose + Instance. The Size list contains the currently supported types. For more information, see Instance Families and Types. The parameter values that you use to specify the various types are in the API Name column of the Available Instance Types table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--auto-scaling-type",
          description:
            "For load-based or time-based instances, the type. Windows stacks can use only time-based instances.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--hostname",
          description: "The instance host name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--os",
          description:
            "The instance's operating system, which must be set to one of the following.   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2018.03, Amazon Linux 2017.09, Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7    A supported Windows operating system, such as Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   A custom AMI: Custom.   For more information about the supported operating systems, see AWS OpsWorks Stacks Operating Systems. The default option is the current Amazon Linux version. If you set this parameter to Custom, you must use the CreateInstance action's AmiId parameter to specify the custom AMI that you want to use. Block device mappings are not supported if the value is Custom. For more information about supported operating systems, see Operating SystemsFor more information about how to use custom AMIs with AWS OpsWorks Stacks, see Using Custom AMIs.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ami-id",
          description:
            "A custom AMI ID to be used to create the instance. The AMI should be based on one of the supported operating systems. For more information, see Using Custom AMIs.  If you specify a custom AMI, you must set Os to Custom.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ssh-key-name",
          description: "The instance's Amazon EC2 key-pair name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--availability-zone",
          description:
            "The instance Availability Zone. For more information, see Regions and Endpoints.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--virtualization-type",
          description:
            "The instance's virtualization type, paravirtual or hvm.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--subnet-id",
          description:
            "The ID of the instance's subnet. If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks Stacks to launch the instance in a different subnet.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--architecture",
          description:
            "The instance architecture. The default option is x86_64. Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see Instance Families and Types.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--root-device-type",
          description:
            "The instance root device type. For more information, see Storage for the Root Device.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--block-device-mappings",
          description:
            "An array of BlockDeviceMapping objects that specify the instance's block devices. For more information, see Block Device Mapping. Note that block device mappings are not supported for custom AMIs.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--install-updates-on-boot",
          description:
            "Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true to ensure that your instances have the latest security updates.",
        },
        {
          name: "--no-install-updates-on-boot",
          description:
            "Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true to ensure that your instances have the latest security updates.",
        },
        {
          name: "--ebs-optimized",
          description: "Whether to create an Amazon EBS-optimized instance.",
        },
        {
          name: "--no-ebs-optimized",
          description: "Whether to create an Amazon EBS-optimized instance.",
        },
        {
          name: "--agent-version",
          description:
            "The default AWS OpsWorks Stacks agent version. You have the following options:    INHERIT - Use the stack's default agent version setting.    version_number - Use the specified agent version. This value overrides the stack's default setting. To update the agent version, edit the instance configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the instance.   The default setting is INHERIT. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tenancy",
          description:
            "The instance's tenancy option. The default option is no tenancy, or if the instance is running in a VPC, inherit tenancy settings from the VPC. The following are valid values for this parameter: dedicated, default, or host. Because there are costs associated with changes in tenancy options, we recommend that you research tenancy options before choosing them for your instances. For more information about dedicated hosts, see Dedicated Hosts Overview and Amazon EC2 Dedicated Hosts. For more information about dedicated instances, see Dedicated Instances and Amazon EC2 Dedicated Instances.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-layer",
      description:
        "Creates a layer. For more information, see How to Create a Layer.  You should use CreateLayer for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, CreateLayer fails. A stack can have an arbitrary number of custom layers, so you can call CreateLayer as many times as you like for that layer type.   Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The layer stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--type",
          description:
            "The layer type. A stack cannot have more than one built-in layer of the same type. It can have any number of custom layers. Built-in layers are not available in Chef 12 stacks.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The layer name, which is used by the console.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--shortname",
          description:
            "For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters, which are limited to the alphanumeric characters, '-', '_', and '.'. The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the Layer Reference.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--attributes",
          description:
            "One or more user-defined key-value pairs to be added to the stack attributes. To create a cluster layer, set the EcsClusterArn attribute to the cluster's ARN.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--cloud-watch-logs-configuration",
          description:
            "Specifies CloudWatch Logs configuration options for the layer. For more information, see CloudWatchLogsLogStream.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--custom-instance-profile-arn",
          description:
            "The ARN of an IAM profile to be used for the layer's EC2 instances. For more information about IAM ARNs, see Using Identifiers.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--custom-json",
          description:
            "A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer's instances. For more information, see  Using Custom JSON. This feature is supported as of version 1.7.42 of the AWS CLI.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--custom-security-group-ids",
          description:
            "An array containing the layer custom security group IDs.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--packages",
          description:
            "An array of Package objects that describes the layer packages.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--volume-configurations",
          description:
            "A VolumeConfigurations object that describes the layer's Amazon EBS volumes.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--enable-auto-healing",
          description: "Whether to disable auto healing for the layer.",
        },
        {
          name: "--no-enable-auto-healing",
          description: "Whether to disable auto healing for the layer.",
        },
        {
          name: "--auto-assign-elastic-ips",
          description:
            "Whether to automatically assign an Elastic IP address to the layer's instances. For more information, see How to Edit a Layer.",
        },
        {
          name: "--no-auto-assign-elastic-ips",
          description:
            "Whether to automatically assign an Elastic IP address to the layer's instances. For more information, see How to Edit a Layer.",
        },
        {
          name: "--auto-assign-public-ips",
          description:
            "For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances. For more information, see How to Edit a Layer.",
        },
        {
          name: "--no-auto-assign-public-ips",
          description:
            "For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances. For more information, see How to Edit a Layer.",
        },
        {
          name: "--custom-recipes",
          description:
            "A LayerCustomRecipes object that specifies the layer custom recipes.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--install-updates-on-boot",
          description:
            "Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   To ensure that your instances have the latest security updates, we strongly recommend using the default value of true.",
        },
        {
          name: "--no-install-updates-on-boot",
          description:
            "Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   To ensure that your instances have the latest security updates, we strongly recommend using the default value of true.",
        },
        {
          name: "--use-ebs-optimized-instances",
          description: "Whether to use Amazon EBS-optimized instances.",
        },
        {
          name: "--no-use-ebs-optimized-instances",
          description: "Whether to use Amazon EBS-optimized instances.",
        },
        {
          name: "--lifecycle-event-configuration",
          description:
            "A LifeCycleEventConfiguration object that you can use to configure the Shutdown event to specify an execution timeout and enable or disable Elastic Load Balancer connection draining.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-stack",
      description:
        "Creates a new stack. For more information, see Create a New Stack.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--name",
          description: "The stack name.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--vpc-id",
          description:
            "The ID of the VPC that the stack is to be launched into. The VPC must be in the stack's region. All instances are launched into this VPC. You cannot change the ID later.   If your account supports EC2-Classic, the default value is no VPC.   If your account does not support EC2-Classic, the default value is the default VPC for the specified region.   If the VPC ID corresponds to a default VPC and you have specified either the DefaultAvailabilityZone or the DefaultSubnetId parameter only, AWS OpsWorks Stacks infers the value of the other parameter. If you specify neither parameter, AWS OpsWorks Stacks sets these parameters to the first valid Availability Zone for the specified region and the corresponding default VPC subnet ID, respectively. If you specify a nondefault VPC ID, note the following:   It must belong to a VPC in your account that is in the specified region.   You must specify a value for DefaultSubnetId.   For more information about how to use AWS OpsWorks Stacks with a VPC, see Running a Stack in a VPC. For more information about default VPC and EC2-Classic, see Supported Platforms.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--attributes",
          description:
            "One or more user-defined key-value pairs to be added to the stack attributes.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--service-role-arn",
          description:
            "The stack's AWS Identity and Access Management (IAM) role, which allows AWS OpsWorks Stacks to work with AWS resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an existing IAM role. For more information about IAM ARNs, see Using Identifiers.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--default-instance-profile-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances. For more information about IAM ARNs, see Using Identifiers.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--default-os",
          description:
            "The stack's default operating system, which is installed on every instance unless you specify a different operating system when you create the instance. You can specify one of the following.   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2018.03, Amazon Linux 2017.09, Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7    A supported Windows operating system, such as Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   A custom AMI: Custom. You specify the custom AMI you want to use when you create instances. For more information, see  Using Custom AMIs.   The default option is the current Amazon Linux version. For more information about supported operating systems, see AWS OpsWorks Stacks Operating Systems.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--hostname-theme",
          description:
            "The stack's host name theme, with spaces replaced by underscores. The theme is used to generate host names for the stack's instances. By default, HostnameTheme is set to Layer_Dependent, which creates host names by appending integers to the layer's short name. The other themes are:    Baked_Goods     Clouds     Europe_Cities     Fruits     Greek_Deities_and_Titans     Legendary_creatures_from_Japan     Planets_and_Moons     Roman_Deities     Scottish_Islands     US_Cities     Wild_Cats    To obtain a generated host name, call GetHostNameSuggestion, which returns a host name based on the current theme.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-availability-zone",
          description:
            "The stack's default Availability Zone, which must be in the specified region. For more information, see Regions and Endpoints. If you also specify a value for DefaultSubnetId, the subnet must be in the same zone. For more information, see the VpcId parameter description.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-subnet-id",
          description:
            "The stack's default VPC subnet ID. This parameter is required if you specify a value for the VpcId parameter. All instances are launched into this subnet unless you specify otherwise when you create the instance. If you also specify a value for DefaultAvailabilityZone, the subnet must be in that zone. For information on default values and when this parameter is required, see the VpcId parameter description.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--custom-json",
          description:
            'A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:  "{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"  For more information about custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--configuration-manager",
          description:
            "The configuration manager. When you create a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--chef-configuration",
          description:
            "A ChefConfiguration object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see Create a New Stack.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--use-custom-cookbooks",
          description: "Whether the stack uses custom cookbooks.",
        },
        {
          name: "--no-use-custom-cookbooks",
          description: "Whether the stack uses custom cookbooks.",
        },
        {
          name: "--use-opsworks-security-groups",
          description:
            "Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers. AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With UseOpsworksSecurityGroups you can instead provide your own custom security groups. UseOpsworksSecurityGroups has the following settings:    True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.   False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.   For more information, see Create a New Stack.",
        },
        {
          name: "--no-use-opsworks-security-groups",
          description:
            "Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers. AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With UseOpsworksSecurityGroups you can instead provide your own custom security groups. UseOpsworksSecurityGroups has the following settings:    True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.   False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.   For more information, see Create a New Stack.",
        },
        {
          name: "--custom-cookbooks-source",
          description:
            "Contains the information required to retrieve an app or cookbook from a repository. For more information, see Adding Apps or Cookbooks and Recipes.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--default-ssh-key-name",
          description:
            "A default Amazon EC2 key pair name. The default value is none. If you specify a key pair name, AWS OpsWorks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see  Using SSH to Communicate with an Instance and  Managing SSH Access. You can override this setting by specifying a different key pair, or no key pair, when you  create an instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-root-device-type",
          description:
            "The default root device type. This value is the default for all instances in the stack, but you can override it when you create an instance. The default option is instance-store. For more information, see Storage for the Root Device.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--agent-version",
          description:
            "The default AWS OpsWorks Stacks agent version. You have the following options:   Auto-update - Set this parameter to LATEST. AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.   Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.   The default setting is the most recent release of the agent. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.  You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--stack-region",
          description:
            "The stack's AWS region, such as ap-south-1. For more information about Amazon regions, see Regions and Endpoints.  In the AWS CLI, this API maps to the --stack-region parameter. If the --stack-region parameter and the AWS CLI common parameter --region are set to the same value, the stack uses a regional endpoint. If the --stack-region parameter is not set, but the AWS CLI --region parameter is, this also results in a stack with a regional endpoint. However, if the --region parameter is set to us-east-1, and the --stack-region parameter is set to one of the following, then the stack uses a legacy or classic region: us-west-1, us-west-2, sa-east-1, eu-central-1, eu-west-1, ap-northeast-1, ap-southeast-1, ap-southeast-2. In this case, the actual API endpoint of the stack is in us-east-1. Only the preceding regions are supported as classic regions in the us-east-1 API endpoint. Because it is a best practice to choose the regional endpoint that is closest to where you manage AWS, we recommend that you use regional endpoints for new stacks. The AWS CLI common --region parameter always specifies a regional API endpoint; it cannot be used to specify a classic AWS OpsWorks Stacks region.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-user-profile",
      description:
        "Creates a new user profile.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--iam-user-arn",
          description:
            "The user's IAM ARN; this can also be a federated user's ARN.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--ssh-username",
          description:
            "The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example, my.name will be changed to myname. If you do not specify an SSH user name, AWS OpsWorks Stacks generates one from the IAM user name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ssh-public-key",
          description: "The user's public SSH key.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--allow-self-management",
          description:
            "Whether users can specify their own SSH public key through the My Settings page. For more information, see Setting an IAM User's Public SSH Key.",
        },
        {
          name: "--no-allow-self-management",
          description:
            "Whether users can specify their own SSH public key through the My Settings page. For more information, see Setting an IAM User's Public SSH Key.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-app",
      description:
        "Deletes a specified app.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--app-id",
          description: "The app ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-instance",
      description:
        "Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it. For more information, see Deleting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--delete-elastic-ip",
          description: "Whether to delete the instance Elastic IP address.",
        },
        {
          name: "--no-delete-elastic-ip",
          description: "Whether to delete the instance Elastic IP address.",
        },
        {
          name: "--delete-volumes",
          description: "Whether to delete the instance's Amazon EBS volumes.",
        },
        {
          name: "--no-delete-volumes",
          description: "Whether to delete the instance's Amazon EBS volumes.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-layer",
      description:
        "Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see How to Delete a Layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--layer-id",
          description: "The layer ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-stack",
      description:
        "Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see Shut Down a Stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-user-profile",
      description:
        "Deletes a user profile.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--iam-user-arn",
          description:
            "The user's IAM ARN. This can also be a federated user's ARN.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "deregister-ecs-cluster",
      description:
        "Deregisters a specified Amazon ECS cluster from a stack. For more information, see  Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html.",
      options: [
        {
          name: "--ecs-cluster-arn",
          description: "The cluster's Amazon Resource Number (ARN).",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "deregister-elastic-ip",
      description:
        "Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--elastic-ip",
          description: "The Elastic IP address.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "deregister-instance",
      description:
        "Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "deregister-rds-db-instance",
      description:
        "Deregisters an Amazon RDS instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--rds-db-instance-arn",
          description: "The Amazon RDS instance's ARN.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "deregister-volume",
      description:
        "Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--volume-id",
          description:
            "The AWS OpsWorks Stacks volume ID, which is the GUID that AWS OpsWorks Stacks assigned to the instance when you registered the volume with the stack, not the Amazon EC2 volume ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-agent-versions",
      description:
        "Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. DescribeAgentVersions returns a list of available agent versions for the specified stack or configuration manager.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--configuration-manager",
          description: "The configuration manager.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-apps",
      description:
        "Requests a description of a specified set of apps.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description:
            "The app stack ID. If you use this parameter, DescribeApps returns a description of the apps in the specified stack.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--app-ids",
          description:
            "An array of app IDs for the apps to be described. If you use this parameter, DescribeApps returns a description of the specified apps. Otherwise, it returns a description of every app.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-commands",
      description:
        "Describes the results of specified commands.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--deployment-id",
          description:
            "The deployment ID. If you include this parameter, DescribeCommands returns a description of the commands associated with the specified deployment.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--instance-id",
          description:
            "The instance ID. If you include this parameter, DescribeCommands returns a description of the commands associated with the specified instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--command-ids",
          description:
            "An array of command IDs. If you include this parameter, DescribeCommands returns a description of the specified commands. Otherwise, it returns a description of every command.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-deployments",
      description:
        "Requests a description of a specified set of deployments.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description:
            "The stack ID. If you include this parameter, the command returns a description of the commands associated with the specified stack.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--app-id",
          description:
            "The app ID. If you include this parameter, the command returns a description of the commands associated with the specified app.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--deployment-ids",
          description:
            "An array of deployment IDs to be described. If you include this parameter, the command returns a description of the specified deployments. Otherwise, it returns a description of every deployment.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-ecs-clusters",
      description:
        "Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the MaxResults and NextToken parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see Managing User Permissions. This call accepts only one resource-identifying parameter.",
      options: [
        {
          name: "--ecs-cluster-arns",
          description: "A list of ARNs, one for each cluster to be described.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--stack-id",
          description:
            "A stack ID. DescribeEcsClusters returns a description of the cluster that is registered with the stack.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object'sNextToken parameter value is set to a token. To retrieve the next set of results, call DescribeEcsClusters again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "To receive a paginated response, use this parameter to specify the maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-elastic-ips",
      description:
        "Describes Elastic IP addresses.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description:
            "The instance ID. If you include this parameter, DescribeElasticIps returns a description of the Elastic IP addresses associated with the specified instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--stack-id",
          description:
            "A stack ID. If you include this parameter, DescribeElasticIps returns a description of the Elastic IP addresses that are registered with the specified stack.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ips",
          description:
            "An array of Elastic IP addresses to be described. If you include this parameter, DescribeElasticIps returns a description of the specified Elastic IP addresses. Otherwise, it returns a description of every Elastic IP address.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-elastic-load-balancers",
      description:
        "Describes a stack's Elastic Load Balancing instances.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description:
            "A stack ID. The action describes the stack's Elastic Load Balancing instances.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--layer-ids",
          description:
            "A list of layer IDs. The action describes the Elastic Load Balancing instances for the specified layers.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-instances",
      description:
        "Requests a description of a set of instances.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description:
            "A stack ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified stack.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--layer-id",
          description:
            "A layer ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified layer.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--instance-ids",
          description:
            "An array of instance IDs to be described. If you use this parameter, DescribeInstances returns a description of the specified instances. Otherwise, it returns a description of every instance.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-layers",
      description:
        "Requests a description of one or more layers in a specified stack.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--layer-ids",
          description:
            "An array of layer IDs that specify the layers to be described. If you omit this parameter, DescribeLayers returns a description of every layer in the specified stack.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-load-based-auto-scaling",
      description:
        "Describes load-based auto scaling configurations for specified layers.  You must specify at least one of the parameters.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--layer-ids",
          description: "An array of layer IDs.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-my-user-profile",
      description:
        "Describes a user's SSH information.  Required Permissions: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-operating-systems",
      description:
        "Describes the operating systems that are supported by AWS OpsWorks Stacks.",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-permissions",
      description:
        "Describes the permissions for a specified stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--iam-user-arn",
          description:
            "The user's IAM ARN. This can also be a federated user's ARN. For more information about IAM ARNs, see Using Identifiers.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-raid-arrays",
      description:
        "Describe an instance's RAID arrays.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description:
            "The instance ID. If you use this parameter, DescribeRaidArrays returns descriptions of the RAID arrays associated with the specified instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--raid-array-ids",
          description:
            "An array of RAID array IDs. If you use this parameter, DescribeRaidArrays returns descriptions of the specified arrays. Otherwise, it returns a description of every array.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-rds-db-instances",
      description:
        "Describes Amazon RDS instances.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions. This call accepts only one resource-identifying parameter.",
      options: [
        {
          name: "--stack-id",
          description:
            "The ID of the stack with which the instances are registered. The operation returns descriptions of all registered Amazon RDS instances.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--rds-db-instance-arns",
          description:
            "An array containing the ARNs of the instances to be described.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-service-errors",
      description:
        "Describes AWS OpsWorks Stacks service errors.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions. This call accepts only one resource-identifying parameter.",
      options: [
        {
          name: "--stack-id",
          description:
            "The stack ID. If you use this parameter, DescribeServiceErrors returns descriptions of the errors associated with the specified stack.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--instance-id",
          description:
            "The instance ID. If you use this parameter, DescribeServiceErrors returns descriptions of the errors associated with the specified instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--service-error-ids",
          description:
            "An array of service error IDs. If you use this parameter, DescribeServiceErrors returns descriptions of the specified errors. Otherwise, it returns a description of every error.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-stack-provisioning-parameters",
      description:
        "Requests a description of a stack's provisioning parameters.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-stack-summary",
      description:
        "Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as running_setup or online.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-stacks",
      description:
        "Requests a description of one or more stacks.  Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-ids",
          description:
            "An array of stack IDs that specify the stacks to be described. If you omit this parameter, DescribeStacks returns a description of every stack.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-time-based-auto-scaling",
      description:
        "Describes time-based auto scaling configurations for specified instances.  You must specify at least one of the parameters.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-ids",
          description: "An array of instance IDs.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-user-profiles",
      description:
        "Describe specified users.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--iam-user-arns",
          description:
            "An array of IAM or federated user ARNs that identify the users to be described.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-volumes",
      description:
        "Describes an instance's Amazon EBS volumes.  This call accepts only one resource-identifying parameter.   Required Permissions: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description:
            "The instance ID. If you use this parameter, DescribeVolumes returns descriptions of the volumes associated with the specified instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--stack-id",
          description:
            "A stack ID. The action describes the stack's registered Amazon EBS volumes.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--raid-array-id",
          description:
            "The RAID array ID. If you use this parameter, DescribeVolumes returns descriptions of the volumes associated with the specified RAID array.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--volume-ids",
          description:
            "Am array of volume IDs. If you use this parameter, DescribeVolumes returns descriptions of the specified volumes. Otherwise, it returns a description of every volume.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "detach-elastic-load-balancer",
      description:
        "Detaches a specified Elastic Load Balancing instance from its layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--elastic-load-balancer-name",
          description: "The Elastic Load Balancing instance's name.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--layer-id",
          description:
            "The ID of the layer that the Elastic Load Balancing instance is attached to.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "disassociate-elastic-ip",
      description:
        "Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--elastic-ip",
          description: "The Elastic IP address.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "get-hostname-suggestion",
      description:
        "Gets a generated host name for the specified layer, based on the current host name theme.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--layer-id",
          description: "The layer ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "grant-access",
      description:
        "This action can be used only with Windows stacks.  Grants RDP access to a Windows instance for a specified time period.",
      options: [
        {
          name: "--instance-id",
          description: "The instance's AWS OpsWorks Stacks ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--valid-for-in-minutes",
          description:
            "The length of time (in minutes) that the grant is valid. When the grant expires at the end of this period, the user will no longer be able to use the credentials to log in. If the user is logged in at the time, he or she automatically will be logged out.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "list-tags",
      description:
        "Returns a list of tags that are applied to the specified stack or layer.",
      options: [
        {
          name: "--resource-arn",
          description: "The stack or layer's Amazon Resource Number (ARN).",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--max-results",
          description:
            "Do not use. A validation exception occurs if you add a MaxResults parameter to a ListTagsRequest call.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "Do not use. A validation exception occurs if you add a NextToken parameter to a ListTagsRequest call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "reboot-instance",
      description:
        "Reboots a specified instance. For more information, see Starting, Stopping, and Rebooting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "register-ecs-cluster",
      description:
        "Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see  Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see  Managing User Permissions.",
      options: [
        {
          name: "--ecs-cluster-arn",
          description: "The cluster's ARN.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "register-elastic-ip",
      description:
        "Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling DeregisterElasticIp. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--elastic-ip",
          description: "The Elastic IP address.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "register-instance",
      description:
        "Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.  We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. RegisterInstance handles only the second step. You should instead use the AWS CLI register command, which performs the entire registration operation. For more information, see  Registering an Instance with an AWS OpsWorks Stacks Stack.  Registered instances have the same requirements as instances that are created by using the CreateInstance API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see  Preparing the Instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description:
            "The ID of the stack that the instance is to be registered with.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--hostname",
          description: "The instance's hostname.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--public-ip",
          description: "The instance's public IP address.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--private-ip",
          description: "The instance's private IP address.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--rsa-public-key",
          description:
            "The instances public RSA key. This key is used to encrypt communication between the instance and the service.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--rsa-public-key-fingerprint",
          description: "The instances public RSA key fingerprint.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--instance-identity",
          description:
            "An InstanceIdentity object that contains the instance's identity.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "register-rds-db-instance",
      description:
        "Registers an Amazon RDS instance with a stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--rds-db-instance-arn",
          description: "The Amazon RDS instance's ARN.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--db-user",
          description: "The database's master user name.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--db-password",
          description: "The database password.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "register-volume",
      description:
        "Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling DeregisterVolume. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--ec2-volume-id",
          description: "The Amazon EBS volume ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--ec-2-volume-id",
          description: "The Amazon EBS volume ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "set-load-based-auto-scaling",
      description:
        "Specify the load-based auto scaling configuration for a specified layer. For more information, see Managing Load with Time-based and Load-based Instances.  To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.   Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--layer-id",
          description: "The layer ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--enable",
          description: "Enables load-based auto scaling for the layer.",
        },
        {
          name: "--no-enable",
          description: "Enables load-based auto scaling for the layer.",
        },
        {
          name: "--up-scaling",
          description:
            "An AutoScalingThresholds object with the upscaling threshold configuration. If the load exceeds these thresholds for a specified amount of time, AWS OpsWorks Stacks starts a specified number of instances.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--down-scaling",
          description:
            "An AutoScalingThresholds object with the downscaling threshold configuration. If the load falls below these thresholds for a specified amount of time, AWS OpsWorks Stacks stops a specified number of instances.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "set-permission",
      description:
        "Specifies a user's permissions. For more information, see Security and Permissions.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--iam-user-arn",
          description:
            "The user's IAM ARN. This can also be a federated user's ARN.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--allow-ssh",
          description:
            "The user is allowed to use SSH to communicate with the instance.",
        },
        {
          name: "--no-allow-ssh",
          description:
            "The user is allowed to use SSH to communicate with the instance.",
        },
        {
          name: "--allow-sudo",
          description: "The user is allowed to use sudo to elevate privileges.",
        },
        {
          name: "--no-allow-sudo",
          description: "The user is allowed to use sudo to elevate privileges.",
        },
        {
          name: "--level",
          description:
            "The user's permission level, which must be set to one of the following strings. You cannot set your own permissions level.    deny     show     deploy     manage     iam_only    For more information about the permissions associated with these levels, see Managing User Permissions.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "set-time-based-auto-scaling",
      description:
        "Specify the time-based auto scaling configuration for a specified instance. For more information, see Managing Load with Time-based and Load-based Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--auto-scaling-schedule",
          description: "An AutoScalingSchedule with the instance schedule.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "start-instance",
      description:
        "Starts a specified instance. For more information, see Starting, Stopping, and Rebooting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "start-stack",
      description:
        "Starts a stack's instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "stop-instance",
      description:
        "Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see Starting, Stopping, and Rebooting Instances.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--force",
          description:
            "Specifies whether to force an instance to stop. If the instance's root device type is ebs, or EBS-backed, adding the Force parameter to the StopInstances API call disassociates the AWS OpsWorks Stacks instance from EC2, and forces deletion of only the OpsWorks Stacks instance. You must also delete the formerly-associated instance in EC2 after troubleshooting and replacing the AWS OpsWorks Stacks instance with a new one.",
        },
        {
          name: "--no-force",
          description:
            "Specifies whether to force an instance to stop. If the instance's root device type is ebs, or EBS-backed, adding the Force parameter to the StopInstances API call disassociates the AWS OpsWorks Stacks instance from EC2, and forces deletion of only the OpsWorks Stacks instance. You must also delete the formerly-associated instance in EC2 after troubleshooting and replacing the AWS OpsWorks Stacks instance with a new one.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "stop-stack",
      description:
        "Stops a specified stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
      description:
        "Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see Tags in the AWS OpsWorks User Guide.",
      options: [
        {
          name: "--resource-arn",
          description: "The stack or layer's Amazon Resource Number (ARN).",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to a stack or layer.   The key cannot be empty.   The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: + - = . _ : /    The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: + - = . _ : /    Leading and trailing white spaces are trimmed from both the key and value.   A maximum of 40 tags is allowed for any resource.",
          args: {
            name: "map",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "unassign-instance",
      description:
        "Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "unassign-volume",
      description:
        "Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--volume-id",
          description: "The volume ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
      description: "Removes tags from a specified stack or layer.",
      options: [
        {
          name: "--resource-arn",
          description: "The stack or layer's Amazon Resource Number (ARN).",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tag-keys",
          description:
            "A list of the keys of tags to be removed from a stack or layer.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-app",
      description:
        "Updates a specified app.  Required Permissions: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--app-id",
          description: "The app ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The app name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "A description of the app.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--data-sources",
          description: "The app's data sources.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--type",
          description: "The app type.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--app-source",
          description: "A Source object that specifies the app repository.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--domains",
          description:
            "The app's virtual host settings, with multiple domains separated by commas. For example: 'www.example.com, example.com'",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--enable-ssl",
          description: "Whether SSL is enabled for the app.",
        },
        {
          name: "--no-enable-ssl",
          description: "Whether SSL is enabled for the app.",
        },
        {
          name: "--ssl-configuration",
          description: "An SslConfiguration object with the SSL configuration.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--attributes",
          description:
            "One or more user-defined key/value pairs to be added to the stack attributes.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--environment",
          description:
            "An array of EnvironmentVariable objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instances.For more information, see  Environment Variables. There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables' names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, \"Environment: is too large (maximum is 20 KB).\"  If you have specified one or more environment variables, you cannot modify the stack's Chef version.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-elastic-ip",
      description:
        "Updates a registered Elastic IP address's name. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--elastic-ip",
          description: "The IP address for which you want to update the name.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The new name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-instance",
      description:
        "Updates a specified instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--instance-id",
          description: "The instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--layer-ids",
          description: "The instance's layer IDs.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--instance-type",
          description:
            "The instance type, such as t2.micro. For a list of supported instance types, open the stack in the console, choose Instances, and choose + Instance. The Size list contains the currently supported types. For more information, see Instance Families and Types. The parameter values that you use to specify the various types are in the API Name column of the Available Instance Types table.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--auto-scaling-type",
          description:
            "For load-based or time-based instances, the type. Windows stacks can use only time-based instances.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--hostname",
          description: "The instance host name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--os",
          description:
            "The instance's operating system, which must be set to one of the following. You cannot update an instance that is using a custom AMI.   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2018.03, Amazon Linux 2017.09, Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7    A supported Windows operating system, such as Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   For more information about supported operating systems, see AWS OpsWorks Stacks Operating Systems. The default option is the current Amazon Linux version. If you set this parameter to Custom, you must use the AmiId parameter to specify the custom AMI that you want to use. For more information about supported operating systems, see Operating Systems. For more information about how to use custom AMIs with OpsWorks, see Using Custom AMIs.  You can specify a different Linux operating system for the updated stack, but you cannot change from Linux to Windows or Windows to Linux.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ami-id",
          description:
            "The ID of the AMI that was used to create the instance. The value of this parameter must be the same AMI ID that the instance is already using. You cannot apply a new AMI to an instance by running UpdateInstance. UpdateInstance does not work on instances that are using custom AMIs.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ssh-key-name",
          description: "The instance's Amazon EC2 key name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--architecture",
          description:
            "The instance architecture. Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see Instance Families and Types.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--install-updates-on-boot",
          description:
            "Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true, to ensure that your instances have the latest security updates.",
        },
        {
          name: "--no-install-updates-on-boot",
          description:
            "Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or by manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true, to ensure that your instances have the latest security updates.",
        },
        {
          name: "--ebs-optimized",
          description: "This property cannot be updated.",
        },
        {
          name: "--no-ebs-optimized",
          description: "This property cannot be updated.",
        },
        {
          name: "--agent-version",
          description:
            "The default AWS OpsWorks Stacks agent version. You have the following options:    INHERIT - Use the stack's default agent version setting.    version_number - Use the specified agent version. This value overrides the stack's default setting. To update the agent version, you must edit the instance configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the instance.   The default setting is INHERIT. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-layer",
      description:
        "Updates a specified layer.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--layer-id",
          description: "The layer ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The layer name, which is used by the console.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--shortname",
          description:
            "For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters and must be in the following format: /\\A[a-z0-9\\-\\_\\.]+\\Z/. The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the Layer Reference",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--attributes",
          description:
            "One or more user-defined key/value pairs to be added to the stack attributes.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--cloud-watch-logs-configuration",
          description:
            "Specifies CloudWatch Logs configuration options for the layer. For more information, see CloudWatchLogsLogStream.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--custom-instance-profile-arn",
          description:
            "The ARN of an IAM profile to be used for all of the layer's EC2 instances. For more information about IAM ARNs, see Using Identifiers.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--custom-json",
          description:
            "A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer's instances. For more information, see  Using Custom JSON.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--custom-security-group-ids",
          description:
            "An array containing the layer's custom security group IDs.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--packages",
          description:
            "An array of Package objects that describe the layer's packages.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--volume-configurations",
          description:
            "A VolumeConfigurations object that describes the layer's Amazon EBS volumes.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--enable-auto-healing",
          description: "Whether to disable auto healing for the layer.",
        },
        {
          name: "--no-enable-auto-healing",
          description: "Whether to disable auto healing for the layer.",
        },
        {
          name: "--auto-assign-elastic-ips",
          description:
            "Whether to automatically assign an Elastic IP address to the layer's instances. For more information, see How to Edit a Layer.",
        },
        {
          name: "--no-auto-assign-elastic-ips",
          description:
            "Whether to automatically assign an Elastic IP address to the layer's instances. For more information, see How to Edit a Layer.",
        },
        {
          name: "--auto-assign-public-ips",
          description:
            "For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances. For more information, see How to Edit a Layer.",
        },
        {
          name: "--no-auto-assign-public-ips",
          description:
            "For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances. For more information, see How to Edit a Layer.",
        },
        {
          name: "--custom-recipes",
          description:
            "A LayerCustomRecipes object that specifies the layer's custom recipes.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--install-updates-on-boot",
          description:
            "Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true, to ensure that your instances have the latest security updates.",
        },
        {
          name: "--no-install-updates-on-boot",
          description:
            "Whether to install operating system and package updates when the instance boots. The default value is true. To control when updates are installed, set this value to false. You must then update your instances manually by using CreateDeployment to run the update_dependencies stack command or manually running yum (Amazon Linux) or apt-get (Ubuntu) on the instances.   We strongly recommend using the default value of true, to ensure that your instances have the latest security updates.",
        },
        {
          name: "--use-ebs-optimized-instances",
          description: "Whether to use Amazon EBS-optimized instances.",
        },
        {
          name: "--no-use-ebs-optimized-instances",
          description: "Whether to use Amazon EBS-optimized instances.",
        },
        {
          name: "--lifecycle-event-configuration",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-my-user-profile",
      description:
        "Updates a user's SSH public key.  Required Permissions: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--ssh-public-key",
          description: "The user's SSH public key.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-rds-db-instance",
      description:
        "Updates an Amazon RDS instance.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--rds-db-instance-arn",
          description: "The Amazon RDS instance's ARN.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--db-user",
          description: "The master user name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--db-password",
          description: "The database password.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-stack",
      description:
        "Updates a specified stack.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--stack-id",
          description: "The stack ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The stack's new name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--attributes",
          description:
            "One or more user-defined key-value pairs to be added to the stack attributes.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--service-role-arn",
          description:
            "Do not use this parameter. You cannot update a stack's service role.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-instance-profile-arn",
          description:
            "The ARN of an IAM profile that is the default profile for all of the stack's EC2 instances. For more information about IAM ARNs, see Using Identifiers.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-os",
          description:
            "The stack's operating system, which must be set to one of the following:   A supported Linux operating system: An Amazon Linux version, such as Amazon Linux 2018.03, Amazon Linux 2017.09, Amazon Linux 2017.03, Amazon Linux 2016.09, Amazon Linux 2016.03, Amazon Linux 2015.09, or Amazon Linux 2015.03.   A supported Ubuntu operating system, such as Ubuntu 16.04 LTS, Ubuntu 14.04 LTS, or Ubuntu 12.04 LTS.    CentOS Linux 7     Red Hat Enterprise Linux 7    A supported Windows operating system, such as Microsoft Windows Server 2012 R2 Base, Microsoft Windows Server 2012 R2 with SQL Server Express, Microsoft Windows Server 2012 R2 with SQL Server Standard, or Microsoft Windows Server 2012 R2 with SQL Server Web.   A custom AMI: Custom. You specify the custom AMI you want to use when you create instances. For more information about how to use custom AMIs with OpsWorks, see Using Custom AMIs.   The default option is the stack's current operating system. For more information about supported operating systems, see AWS OpsWorks Stacks Operating Systems.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--hostname-theme",
          description:
            "The stack's new host name theme, with spaces replaced by underscores. The theme is used to generate host names for the stack's instances. By default, HostnameTheme is set to Layer_Dependent, which creates host names by appending integers to the layer's short name. The other themes are:    Baked_Goods     Clouds     Europe_Cities     Fruits     Greek_Deities_and_Titans     Legendary_creatures_from_Japan     Planets_and_Moons     Roman_Deities     Scottish_Islands     US_Cities     Wild_Cats    To obtain a generated host name, call GetHostNameSuggestion, which returns a host name based on the current theme.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-availability-zone",
          description:
            "The stack's default Availability Zone, which must be in the stack's region. For more information, see Regions and Endpoints. If you also specify a value for DefaultSubnetId, the subnet must be in the same zone. For more information, see CreateStack.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-subnet-id",
          description:
            "The stack's default VPC subnet ID. This parameter is required if you specify a value for the VpcId parameter. All instances are launched into this subnet unless you specify otherwise when you create the instance. If you also specify a value for DefaultAvailabilityZone, the subnet must be in that zone. For information on default values and when this parameter is required, see the VpcId parameter description.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--custom-json",
          description:
            'A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration JSON values or to pass data to recipes. The string should be in the following format:  "{\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\",...}"  For more information about custom JSON, see Use Custom JSON to Modify the Stack Configuration Attributes.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--configuration-manager",
          description:
            "The configuration manager. When you update a stack, we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--chef-configuration",
          description:
            "A ChefConfiguration object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see Create a New Stack.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--use-custom-cookbooks",
          description: "Whether the stack uses custom cookbooks.",
        },
        {
          name: "--no-use-custom-cookbooks",
          description: "Whether the stack uses custom cookbooks.",
        },
        {
          name: "--custom-cookbooks-source",
          description:
            "Contains the information required to retrieve an app or cookbook from a repository. For more information, see Adding Apps or Cookbooks and Recipes.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--default-ssh-key-name",
          description:
            "A default Amazon EC2 key-pair name. The default value is none. If you specify a key-pair name, AWS OpsWorks Stacks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see  Using SSH to Communicate with an Instance and  Managing SSH Access. You can override this setting by specifying a different key pair, or no key pair, when you  create an instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-root-device-type",
          description:
            "The default root device type. This value is used by default for all instances in the stack, but you can override it when you create an instance. For more information, see Storage for the Root Device.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--use-opsworks-security-groups",
          description:
            "Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers. AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. UseOpsworksSecurityGroups allows you to provide your own custom security groups instead of using the built-in groups. UseOpsworksSecurityGroups has the following settings:    True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.   False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on. Custom security groups are required only for those layers that need custom settings.   For more information, see Create a New Stack.",
        },
        {
          name: "--no-use-opsworks-security-groups",
          description:
            "Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers. AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. UseOpsworksSecurityGroups allows you to provide your own custom security groups instead of using the built-in groups. UseOpsworksSecurityGroups has the following settings:    True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.   False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on. Custom security groups are required only for those layers that need custom settings.   For more information, see Create a New Stack.",
        },
        {
          name: "--agent-version",
          description:
            "The default AWS OpsWorks Stacks agent version. You have the following options:   Auto-update - Set this parameter to LATEST. AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.   Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks then automatically installs that version on the stack's instances.   The default setting is LATEST. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.  You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-user-profile",
      description:
        "Updates a specified user profile.  Required Permissions: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--iam-user-arn",
          description:
            "The user IAM ARN. This can also be a federated user's ARN.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--ssh-username",
          description:
            "The user's SSH user name. The allowable characters are [a-z], [A-Z], [0-9], '-', and '_'. If the specified name includes other punctuation marks, AWS OpsWorks Stacks removes them. For example, my.name will be changed to myname. If you do not specify an SSH user name, AWS OpsWorks Stacks generates one from the IAM user name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ssh-public-key",
          description: "The user's new SSH public key.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--allow-self-management",
          description:
            "Whether users can specify their own SSH public key through the My Settings page. For more information, see Managing User Permissions.",
        },
        {
          name: "--no-allow-self-management",
          description:
            "Whether users can specify their own SSH public key through the My Settings page. For more information, see Managing User Permissions.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-volume",
      description:
        "Updates an Amazon EBS volume's name or mount point. For more information, see Resource Management.  Required Permissions: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see Managing User Permissions.",
      options: [
        {
          name: "--volume-id",
          description: "The volume ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The new name.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--mount-point",
          description: "The new mount point.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "register",
      description:
        "Registers an EC2 instance or machine with AWS OpsWorks.\n\nRegistering a machine using this command will install the AWS OpsWorks\nagent on the target machine and register it with an existing OpsWorks\nstack.",
      options: [
        {
          name: "--stack-id",
          description:
            "A stack ID. The instance will be registered with the\n                         given stack.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--infrastructure-class",
          description:
            "Specifies whether to register an EC2 instance (`ec2`)\n                         or an on-premises instance (`on-premises`).",
          args: {
            name: "string",
            suggestions: ["ec2", "on-premises"],
          },
          isOptional: false,
        },
        {
          name: "--override-hostname",
          description:
            "The instance hostname. If not provided, the current\n                         hostname of the machine will be used.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--override-private-ip",
          description:
            "An IP address. If you set this parameter, the given IP\n                         address will be used as the private IP address within\n                         OpsWorks.  Otherwise the private IP address will be\n                         determined automatically. Not to be used with EC2\n                         instances.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--override-public-ip",
          description:
            "An IP address. If you set this parameter, the given IP\n                         address will be used as the public IP address within\n                         OpsWorks.  Otherwise the public IP address will be\n                         determined automatically. Not to be used with EC2\n                         instances.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--override-ssh",
          description:
            "If you set this parameter, the given command will be\n                         used to connect to the machine.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ssh-username",
          description:
            "If provided, this username will be used to connect to\n                         the host.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ssh-private-key",
          description:
            "If provided, the given private key file will be used\n                         to connect to the machine.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--local",
          description:
            "If given, instead of a remote machine, the local\n                         machine will be imported. Cannot be used together\n                         with `target`.",
        },
        {
          name: "--use-instance-profile",
          description:
            "Use the instance profile instead of creating an IAM\n                         user.",
        },
      ],
      args: [
        {
          name: "target",
          description:
            "Either the EC2 instance ID or the hostname of the\n                         instance or machine to be registered with OpsWorks.\n                         Cannot be used together with `--local`.",
          isOptional: true,
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met.",
      subcommands: [
        {
          name: "app-exists",
          description:
            "Wait until 200 response is received when polling with ``describe-apps``. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
          options: [
            {
              name: "--stack-id",
              description:
                "The app stack ID. If you use this parameter, DescribeApps returns a description of the apps in the specified stack.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--app-ids",
              description:
                "An array of app IDs for the apps to be described. If you use this parameter, DescribeApps returns a description of the specified apps. Otherwise, it returns a description of every app.",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "deployment-successful",
          description:
            "Wait until a deployment has completed successfully. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
          options: [
            {
              name: "--stack-id",
              description:
                "The stack ID. If you include this parameter, the command returns a description of the commands associated with the specified stack.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--app-id",
              description:
                "The app ID. If you include this parameter, the command returns a description of the commands associated with the specified app.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--deployment-ids",
              description:
                "An array of deployment IDs to be described. If you include this parameter, the command returns a description of the specified deployments. Otherwise, it returns a description of every deployment.",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "instance-online",
          description:
            "Wait until OpsWorks instance is online. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
          options: [
            {
              name: "--stack-id",
              description:
                "A stack ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified stack.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--layer-id",
              description:
                "A layer ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified layer.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--instance-ids",
              description:
                "An array of instance IDs to be described. If you use this parameter, DescribeInstances returns a description of the specified instances. Otherwise, it returns a description of every instance.",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "instance-registered",
          description:
            "Wait until OpsWorks instance is registered. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
          options: [
            {
              name: "--stack-id",
              description:
                "A stack ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified stack.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--layer-id",
              description:
                "A layer ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified layer.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--instance-ids",
              description:
                "An array of instance IDs to be described. If you use this parameter, DescribeInstances returns a description of the specified instances. Otherwise, it returns a description of every instance.",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "instance-stopped",
          description:
            "Wait until OpsWorks instance is stopped. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
          options: [
            {
              name: "--stack-id",
              description:
                "A stack ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified stack.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--layer-id",
              description:
                "A layer ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified layer.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--instance-ids",
              description:
                "An array of instance IDs to be described. If you use this parameter, DescribeInstances returns a description of the specified instances. Otherwise, it returns a description of every instance.",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "instance-terminated",
          description:
            "Wait until OpsWorks instance is terminated. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
          options: [
            {
              name: "--stack-id",
              description:
                "A stack ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified stack.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--layer-id",
              description:
                "A layer ID. If you use this parameter, DescribeInstances returns descriptions of the instances associated with the specified layer.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--instance-ids",
              description:
                "An array of instance IDs to be described. If you use this parameter, DescribeInstances returns a description of the specified instances. Otherwise, it returns a description of every instance.",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
      ],
    },
  ],
};
