const completionSpec: Fig.Spec = {
  name: "mq",
  description:
    "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols",
  subcommands: [
    {
      name: "create-broker",
      description:
        "Creates a broker. Note: This API is asynchronous. To create a broker, you must either use the AmazonMQFullAccess IAM policy or include the following EC2 permissions in your IAM policy. ec2:CreateNetworkInterface This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account. ec2:CreateNetworkInterfacePermission This permission is required to attach the ENI to the broker instance. ec2:DeleteNetworkInterface ec2:DeleteNetworkInterfacePermission ec2:DetachNetworkInterface ec2:DescribeInternetGateways ec2:DescribeNetworkInterfaces ec2:DescribeNetworkInterfacePermissions ec2:DescribeRouteTables ec2:DescribeSecurityGroups ec2:DescribeSubnets ec2:DescribeVpcs For more information, see Create an IAM User and Get Your Amazon Web Services Credentials and Never Modify or Delete the Amazon MQ Elastic Network Interface in the Amazon MQ Developer Guide",
      options: [
        {
          name: "--authentication-strategy",
          description:
            "Optional. The authentication strategy used to secure the broker. The default is SIMPLE",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot. Set to true by default, if no value is specified. Must be set to true for ActiveMQ brokers version 5.18 and above and for RabbitMQ brokers version 3.13 and above",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot. Set to true by default, if no value is specified. Must be set to true for ActiveMQ brokers version 5.18 and above and for RabbitMQ brokers version 3.13 and above",
        },
        {
          name: "--broker-name",
          description:
            "Required. The broker's name. This value must be unique in your Amazon Web Services account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters. Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker names are not intended to be used for private or sensitive data",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description: "A list of information about the configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--creator-request-id",
          description:
            "The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-mode",
          description: "Required. The broker's deployment mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-options",
          description: "Encryption options for the broker",
          args: {
            name: "structure",
          },
        },
        {
          name: "--engine-type",
          description:
            "Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The broker engine version. Defaults to the latest available version for the specified broker engine type. For more information, see the ActiveMQ version management and the RabbitMQ version management sections in the Amazon MQ Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-instance-type",
          description: "Required. The broker's instance type",
          args: {
            name: "string",
          },
        },
        {
          name: "--ldap-server-metadata",
          description:
            "Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--logs",
          description: "Enables Amazon CloudWatch logging for brokers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--maintenance-window-start-time",
          description: "The parameters that determine the WeeklyStartTime",
          args: {
            name: "structure",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided",
        },
        {
          name: "--security-groups",
          description:
            "The list of rules (1 minimum, 125 maximum) that authorize connections to brokers",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-type",
          description: "The broker's storage type",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ Amazon MQ for ActiveMQ deployment requires two subnets. A CLUSTER_MULTI_AZ Amazon MQ for RabbitMQ deployment has no subnet requirements when deployed with public accessibility. Deployment without public accessibility requires at least one subnet. If you specify subnets in a shared VPC for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your Amazon Web Services account. Amazon MQ will not be able to create VPC endpoints in VPCs that are not owned by your Amazon Web Services account",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Create tags when creating the broker",
          args: {
            name: "map",
          },
        },
        {
          name: "--users",
          description:
            "The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-replication-mode",
          description:
            "Defines whether this broker is a part of a data replication pair",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-replication-primary-broker-arn",
          description:
            "The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when dataReplicationMode is set to CRDR",
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
      name: "create-configuration",
      description:
        "Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version)",
      options: [
        {
          name: "--authentication-strategy",
          description:
            "Optional. The authentication strategy associated with the configuration. The default is SIMPLE",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-type",
          description:
            "Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The broker engine version. Defaults to the latest available version for the specified broker engine type. For more information, see the ActiveMQ version management and the RabbitMQ version management sections in the Amazon MQ Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Create tags when creating the configuration",
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
      name: "create-tags",
      description: "Add a tag to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The key-value pair for the resource tag",
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
      name: "create-user",
      description:
        "Creates an ActiveMQ user. Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
          args: {
            name: "string",
          },
        },
        {
          name: "--console-access",
          description:
            "Enables access to the ActiveMQ Web Console for the ActiveMQ user",
        },
        {
          name: "--no-console-access",
          description:
            "Enables access to the ActiveMQ Web Console for the ActiveMQ user",
        },
        {
          name: "--groups",
          description:
            "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long",
          args: {
            name: "list",
          },
        },
        {
          name: "--password",
          description:
            "Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=)",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-user",
          description:
            "Defines if this user is intended for CRDR replication purposes",
        },
        {
          name: "--no-replication-user",
          description:
            "Defines if this user is intended for CRDR replication purposes",
        },
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
      name: "delete-broker",
      description: "Deletes a broker. Note: This API is asynchronous",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
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
      description: "Removes a tag from a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "An array of tag keys to delete",
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
      name: "delete-user",
      description: "Deletes an ActiveMQ user",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long",
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
      name: "describe-broker",
      description: "Returns information about the specified broker",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
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
      name: "describe-broker-engine-types",
      description: "Describe available engine types and versions",
      options: [
        {
          name: "--engine-type",
          description: "Filter response by engine type",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty",
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
      name: "describe-broker-instance-options",
      description: "Describe available broker instance options",
      options: [
        {
          name: "--engine-type",
          description: "Filter response by engine type",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-instance-type",
          description: "Filter response by host instance type",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-type",
          description: "Filter response by storage type",
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
      name: "describe-configuration",
      description: "Returns information about the specified configuration",
      options: [
        {
          name: "--configuration-id",
          description:
            "The unique ID that Amazon MQ generates for the configuration",
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
      name: "describe-configuration-revision",
      description:
        "Returns the specified configuration revision for the specified configuration",
      options: [
        {
          name: "--configuration-id",
          description:
            "The unique ID that Amazon MQ generates for the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-revision",
          description: "The revision of the configuration",
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
      description: "Returns information about an ActiveMQ user",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long",
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
      name: "list-brokers",
      description: "Returns a list of all brokers",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty",
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
      name: "list-configuration-revisions",
      description:
        "Returns a list of all revisions for the specified configuration",
      options: [
        {
          name: "--configuration-id",
          description:
            "The unique ID that Amazon MQ generates for the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty",
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
      name: "list-configurations",
      description: "Returns a list of all configurations",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty",
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
      name: "list-tags",
      description: "Lists tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource tag",
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
      name: "list-users",
      description: "Returns a list of all ActiveMQ users",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty",
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
      name: "promote",
      description:
        "Promotes a data replication replica broker to the primary broker role",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "The Promote mode requested. Note: Valid values for the parameter are SWITCHOVER, FAILOVER",
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
      name: "reboot-broker",
      description: "Reboots a broker. Note: This API is asynchronous",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
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
      name: "update-broker",
      description: "Adds a pending configuration change to a broker",
      options: [
        {
          name: "--authentication-strategy",
          description:
            "Optional. The authentication strategy used to secure the broker. The default is SIMPLE",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot. Must be set to true for ActiveMQ brokers version 5.18 and above and for RabbitMQ brokers version 3.13 and above",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot. Must be set to true for ActiveMQ brokers version 5.18 and above and for RabbitMQ brokers version 3.13 and above",
        },
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description: "A list of information about the configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--engine-version",
          description:
            "The broker engine version. For more information, see the ActiveMQ version management and the RabbitMQ version management sections in the Amazon MQ Developer Guide. When upgrading to ActiveMQ version 5.18 and above or RabbitMQ version 3.13 and above, you must have autoMinorVersionUpgrade set to true for the broker",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-instance-type",
          description:
            "The broker's host instance type to upgrade to. For a list of supported instance types, see Broker instance types",
          args: {
            name: "string",
          },
        },
        {
          name: "--ldap-server-metadata",
          description:
            "Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--logs",
          description: "Enables Amazon CloudWatch logging for brokers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--maintenance-window-start-time",
          description: "The parameters that determine the WeeklyStartTime",
          args: {
            name: "structure",
          },
        },
        {
          name: "--security-groups",
          description:
            "The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-replication-mode",
          description:
            "Defines whether this broker is a part of a data replication pair",
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
      name: "update-configuration",
      description: "Updates the specified configuration",
      options: [
        {
          name: "--configuration-id",
          description:
            "The unique ID that Amazon MQ generates for the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description:
            "Amazon MQ for Active MQ: The base64-encoded XML configuration. Amazon MQ for RabbitMQ: the base64-encoded Cuttlefish configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the configuration",
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
      name: "update-user",
      description: "Updates the information for an ActiveMQ user",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker",
          args: {
            name: "string",
          },
        },
        {
          name: "--console-access",
          description:
            "Enables access to the the ActiveMQ Web Console for the ActiveMQ user",
        },
        {
          name: "--no-console-access",
          description:
            "Enables access to the the ActiveMQ Web Console for the ActiveMQ user",
        },
        {
          name: "--groups",
          description:
            "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long",
          args: {
            name: "list",
          },
        },
        {
          name: "--password",
          description:
            "The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=)",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-user",
          description:
            "Defines whether the user is intended for data replication",
        },
        {
          name: "--no-replication-user",
          description:
            "Defines whether the user is intended for data replication",
        },
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
