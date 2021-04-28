export const completionSpec: Fig.Spec = {
  name: "mq",
  description:
    "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.",
  subcommands: [
    {
      name: "create-broker",
      description: "Creates a broker. Note: This API is asynchronous.",
      options: [
        {
          name: "--authentication-strategy",
          description: "The authentication strategy used to secure the broker.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.",
        },
        {
          name: "--broker-name",
          description:
            "Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--configuration",
          description: "A list of information about the configuration.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--creator-request-id",
          description:
            "The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--deployment-mode",
          description: "Required. The deployment mode of the broker.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--encryption-options",
          description: "Encryption options for the broker.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--engine-type",
          description:
            "Required. The type of broker engine. Note: Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--engine-version",
          description:
            "Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--host-instance-type",
          description: "Required. The broker's instance type.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ldap-server-metadata",
          description:
            "The metadata of the LDAP server used to authenticate and authorize connections to the broker.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--logs",
          description: "Enables Amazon CloudWatch logging for brokers.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--maintenance-window-start-time",
          description: "The parameters that determine the WeeklyStartTime.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--publicly-accessible",
          description:
            "Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.",
        },
        {
          name: "--security-groups",
          description:
            "The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--storage-type",
          description: "The broker's storage type.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--subnet-ids",
          description:
            "The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment (ACTIVEMQ) requires two subnets. A CLUSTER_MULTI_AZ deployment (RABBITMQ) has no subnet requirements when deployed with public accessibility, deployment without public accessibility requires at least one subnet.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "Create tags when creating the broker.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--users",
          description:
            "Required. The list of broker users (persons or applications) who can access queues and topics. For RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ Web Console. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.",
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
      name: "create-configuration",
      description:
        "Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).",
      options: [
        {
          name: "--authentication-strategy",
          description:
            "The authentication strategy associated with the configuration.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--engine-type",
          description:
            "Required. The type of broker engine. Note: Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--engine-version",
          description:
            "Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--name",
          description:
            "Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "Create tags when creating the configuration.",
          args: {
            name: "map",
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
      name: "create-tags",
      description: "Add a tag to a resource.",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource tag.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description: "The key-value pair for the resource tag.",
          args: {
            name: "map",
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
      name: "create-user",
      description: "Creates an ActiveMQ user.",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--console-access",
          description:
            "Enables access to the the ActiveMQ Web Console for the ActiveMQ user.",
        },
        {
          name: "--no-console-access",
          description:
            "Enables access to the the ActiveMQ Web Console for the ActiveMQ user.",
        },
        {
          name: "--groups",
          description:
            "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--password",
          description:
            "Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--username",
          description:
            "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.",
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
      name: "delete-broker",
      description: "Deletes a broker. Note: This API is asynchronous.",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker.",
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
      name: "delete-tags",
      description: "Removes a tag from a resource.",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource tag.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tag-keys",
          description: "An array of tag keys to delete",
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
      name: "delete-user",
      description: "Deletes an ActiveMQ user.",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--username",
          description:
            "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.",
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
      name: "describe-broker",
      description: "Returns information about the specified broker.",
      options: [
        {
          name: "--broker-id",
          description:
            "The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.",
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
      name: "describe-broker-engine-types",
      description: "Describe available engine types and versions.",
      options: [
        {
          name: "--engine-type",
          description: "Filter response by engine type.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of engine types that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.",
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
      name: "describe-broker-instance-options",
      description: "Describe available broker instance options.",
      options: [
        {
          name: "--engine-type",
          description: "Filter response by engine type.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--host-instance-type",
          description: "Filter response by host instance type.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of instance options that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--storage-type",
          description: "Filter response by storage type.",
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
      name: "describe-configuration",
      description: "Returns information about the specified configuration.",
      options: [
        {
          name: "--configuration-id",
          description:
            "The unique ID that Amazon MQ generates for the configuration.",
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
      name: "describe-configuration-revision",
      description:
        "Returns the specified configuration revision for the specified configuration.",
      options: [
        {
          name: "--configuration-id",
          description:
            "The unique ID that Amazon MQ generates for the configuration.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--configuration-revision",
          description: "The revision of the configuration.",
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
      name: "describe-user",
      description: "Returns information about an ActiveMQ user.",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--username",
          description:
            "The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.",
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
      name: "list-brokers",
      description: "Returns a list of all brokers.",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.",
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
      name: "list-configuration-revisions",
      description:
        "Returns a list of all revisions for the specified configuration.",
      options: [
        {
          name: "--configuration-id",
          description:
            "The unique ID that Amazon MQ generates for the configuration.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.",
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
      name: "list-configurations",
      description: "Returns a list of all configurations.",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.",
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
      name: "list-tags",
      description: "Lists tags for a resource.",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource tag.",
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
      name: "list-users",
      description: "Returns a list of all ActiveMQ users.",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.",
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
      name: "reboot-broker",
      description: "Reboots a broker. Note: This API is asynchronous.",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker.",
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
      name: "update-broker",
      description: "Adds a pending configuration change to a broker.",
      options: [
        {
          name: "--authentication-strategy",
          description: "The authentication strategy used to secure the broker.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.",
        },
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--configuration",
          description: "A list of information about the configuration.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--engine-version",
          description:
            "The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--host-instance-type",
          description:
            "The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ldap-server-metadata",
          description:
            "The metadata of the LDAP server used to authenticate and authorize connections to the broker.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--logs",
          description: "Enables Amazon CloudWatch logging for brokers.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--security-groups",
          description:
            "The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.",
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
      name: "update-configuration",
      description: "Updates the specified configuration.",
      options: [
        {
          name: "--configuration-id",
          description:
            "The unique ID that Amazon MQ generates for the configuration.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--data",
          description: "Required. The base64-encoded XML configuration.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "The description of the configuration.",
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
      name: "update-user",
      description: "Updates the information for an ActiveMQ user.",
      options: [
        {
          name: "--broker-id",
          description: "The unique ID that Amazon MQ generates for the broker.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--console-access",
          description:
            "Enables access to the the ActiveMQ Web Console for the ActiveMQ user.",
        },
        {
          name: "--no-console-access",
          description:
            "Enables access to the the ActiveMQ Web Console for the ActiveMQ user.",
        },
        {
          name: "--groups",
          description:
            "The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--password",
          description:
            "The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--username",
          description:
            "Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.",
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
  ],
};
