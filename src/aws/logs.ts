const completionSpec: Fig.Spec = {
  name: "logs",
  description:
    'You can use Amazon CloudWatch Logs to monitor, store, and access your log files from EC2 instances, CloudTrail, and other sources. You can then retrieve the associated log data from CloudWatch Logs using the CloudWatch console, CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch Logs SDK. You can use CloudWatch Logs to:    Monitor logs from EC2 instances in real-time: You can use CloudWatch Logs to monitor applications and systems using log data. For example, CloudWatch Logs can track the number of errors that occur in your application logs and send you a notification whenever the rate of errors exceeds a threshold that you specify. CloudWatch Logs uses your log data for monitoring so no code changes are required. For example, you can monitor application logs for specific literal terms (such as "NullReferenceException") or count the number of occurrences of a literal term at a particular position in log data (such as "404" status codes in an Apache access log). When the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch metric that you specify.    Monitor CloudTrail logged events: You can create alarms in CloudWatch and receive notifications of particular API activity as captured by CloudTrail. You can use the notification to perform troubleshooting.    Archive log data: You can use CloudWatch Logs to store your log data in highly durable storage. You can change the log retention setting so that any log events older than this setting are automatically deleted. The CloudWatch Logs agent makes it easy to quickly send both rotated and non-rotated log data off of a host and into the log service. You can then access the raw log data when you need it',
  subcommands: [
    {
      name: "associate-kms-key",
      description:
        "Associates the specified Key Management Service customer master key (CMK) with the specified log group. Associating an KMS CMK with a log group overrides any existing associations between the log group and a CMK. After a CMK is associated with a log group, all newly ingested data for the log group is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.  CloudWatch Logs supports only symmetric CMKs. Do not use an associate an asymmetric CMK with your log group. For more information, see Using Symmetric and Asymmetric Keys.  It can take up to 5 minutes for this operation to take effect. If you attempt to associate a CMK with a log group but the CMK does not exist or the CMK is disabled, you receive an InvalidParameterException error",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. This must be a symmetric CMK. For more information, see Amazon Resource Names - Key Management Service and Using Symmetric and Asymmetric Keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "cancel-export-task",
      description:
        "Cancels the specified export task. The task must be in the PENDING or RUNNING state",
      options: [
        {
          name: "--task-id",
          description: "The ID of the export task",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-export-task",
      description:
        "Creates an export task, which allows you to efficiently export data from a log group to an Amazon S3 bucket. When you perform a CreateExportTask operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination.  Exporting log data to Amazon S3 buckets that are encrypted by KMS is not supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is not supported. Exporting to S3 buckets that are encrypted with AES-256 is supported.   This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use DescribeExportTasks to get the status of the export task. Each account can only have one active (RUNNING or PENDING) export task at a time. To cancel an export task, use CancelExportTask. You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate out log data for each export task, you can specify a prefix to be used as the Amazon S3 key prefix for all exported objects.  Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log fild data by using Linux utilities",
      options: [
        {
          name: "--task-name",
          description: "The name of the export task",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-stream-name-prefix",
          description:
            "Export only log streams that match the provided prefix. If you don't specify a value, no prefix filter is applied",
          args: {
            name: "string",
          },
        },
        {
          name: "--from",
          description:
            "The start time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp earlier than this time are not exported",
          args: {
            name: "long",
          },
        },
        {
          name: "--to",
          description:
            "The end time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported",
          args: {
            name: "long",
          },
        },
        {
          name: "--destination",
          description:
            "The name of S3 bucket for the exported log data. The bucket must be in the same Amazon Web Services region",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-prefix",
          description:
            "The prefix used as the start of the key for every object exported. If you don't specify a value, the default is exportedlogs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-log-group",
      description:
        "Creates a log group with the specified name. You can create up to 20,000 log groups per account. You must use the following guidelines when naming a log group:   Log group names must be unique within a region for an Amazon Web Services account.   Log group names can be between 1 and 512 characters long.   Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)   When you create a log group, by default the log events in the log group never expire. To set a retention policy so that events expire and are deleted after a specified time, use PutRetentionPolicy. If you associate a Key Management Service customer master key (CMK) with the log group, ingested data is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested. If you attempt to associate a CMK with the log group but the CMK does not exist or the CMK is disabled, you receive an InvalidParameterException error.   CloudWatch Logs supports only symmetric CMKs. Do not associate an asymmetric CMK with your log group. For more information, see Using Symmetric and Asymmetric Keys",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. For more information, see Amazon Resource Names - Key Management Service",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value pairs to use for the tags. CloudWatch Logs doesn\u2019t support IAM policies that prevent users from assigning specified tags to log groups using the aws:Resource/key-name  or aws:TagKeys condition keys. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-log-stream",
      description:
        "Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored. There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on CreateLogStream operations, after which transactions are throttled. You must use the following guidelines when naming a log stream:   Log stream names must be unique within the log group.   Log stream names can be between 1 and 512 characters long.   The ':' (colon) and '*' (asterisk) characters are not allowed",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-stream-name",
          description: "The name of the log stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-destination",
      description:
        "Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination",
      options: [
        {
          name: "--destination-name",
          description: "The name of the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-log-group",
      description:
        "Deletes the specified log group and permanently deletes all the archived log events associated with the log group",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-log-stream",
      description:
        "Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-stream-name",
          description: "The name of the log stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-metric-filter",
      description: "Deletes the specified metric filter",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "The name of the metric filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-query-definition",
      description:
        "Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query. Each DeleteQueryDefinition operation can delete one query definition. You must have the logs:DeleteQueryDefinition permission to be able to perform this operation",
      options: [
        {
          name: "--query-definition-id",
          description:
            "The ID of the query definition that you want to delete. You can use DescribeQueryDefinitions to retrieve the IDs of your saved query definitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-resource-policy",
      description:
        "Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account",
      options: [
        {
          name: "--policy-name",
          description:
            "The name of the policy to be revoked. This parameter is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-retention-policy",
      description:
        "Deletes the specified retention policy. Log events do not expire if they belong to log groups without a retention policy",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-subscription-filter",
      description: "Deletes the specified subscription filter",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "The name of the subscription filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-destinations",
      description:
        "Lists all your destinations. The results are ASCII-sorted by destination name",
      options: [
        {
          name: "--destination-name-prefix",
          description:
            "The prefix to match. If you don't specify a value, no prefix filter is applied",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-export-tasks",
      description:
        "Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status",
      options: [
        {
          name: "--task-id",
          description:
            "The ID of the export task. Specifying a task ID filters the results to zero or one export tasks",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-code",
          description:
            "The status code of the export task. Specifying a status code filters the results to zero or more export tasks",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-log-groups",
      description:
        "Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name. CloudWatch Logs doesn\u2019t support IAM policies that control access to the DescribeLogGroups action by using the aws:ResourceTag/key-name  condition key. Other CloudWatch Logs actions do support the use of the aws:ResourceTag/key-name  condition key to control access. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags",
      options: [
        {
          name: "--log-group-name-prefix",
          description: "The prefix to match",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-log-streams",
      description:
        "Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered. This operation has a limit of five transactions per second, after which transactions are throttled",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-stream-name-prefix",
          description:
            "The prefix to match. If orderBy is LastEventTime, you cannot specify this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--order-by",
          description:
            "If the value is LogStreamName, the results are ordered by log stream name. If the value is LastEventTime, the results are ordered by the event time. The default value is LogStreamName. If you order the results by event time, you cannot specify the logStreamNamePrefix parameter.  lastEventTimestamp represents the time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. lastEventTimestamp updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but in rare situations might take longer",
          args: {
            name: "string",
          },
        },
        {
          name: "--descending",
          description:
            "If the value is true, results are returned in descending order. If the value is to false, results are returned in ascending order. The default value is false",
        },
        {
          name: "--no-descending",
          description:
            "If the value is true, results are returned in descending order. If the value is to false, results are returned in ascending order. The default value is false",
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-metric-filters",
      description:
        "Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name-prefix",
          description:
            "The prefix to match. CloudWatch Logs uses the value you set here only if you also include the logGroupName parameter in your request",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items",
          args: {
            name: "integer",
          },
        },
        {
          name: "--metric-name",
          description:
            "Filters results to include only those with the specified metric name. If you include this parameter in your request, you must also include the metricNamespace parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-namespace",
          description:
            "Filters results to include only those in the specified namespace. If you include this parameter in your request, you must also include the metricName parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-queries",
      description:
        "Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status",
      options: [
        {
          name: "--log-group-name",
          description:
            "Limits the returned queries to only those for the specified log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Limits the returned queries to only those that have the specified status. Valid values are Cancelled, Complete, Failed, Running, and Scheduled",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Limits the number of returned queries to the specified number",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. The token expires after 24 hours",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-query-definitions",
      description:
        "This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions. You can use the queryDefinitionNamePrefix parameter to limit the results to only the query definitions that have names that start with a certain string",
      options: [
        {
          name: "--query-definition-name-prefix",
          description:
            "Use this parameter to filter your results to only the query definitions that have names that start with the prefix you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Limits the number of returned query definitions to the specified number",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. The token expires after 24 hours",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-resource-policies",
      description: "Lists the resource policies in this account",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. The token expires after 24 hours",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of resource policies to be displayed with one call of this API",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-subscription-filters",
      description:
        "Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name-prefix",
          description:
            "The prefix to match. If you don't specify a value, no prefix filter is applied",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items returned. If you don't specify a value, the default is up to 50 items",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "disassociate-kms-key",
      description:
        "Disassociates the associated Key Management Service customer master key (CMK) from the specified log group. After the KMS CMK is disassociated from the log group, CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and CloudWatch Logs requires permissions for the CMK whenever the encrypted data is requested. Note that it can take up to 5 minutes for this operation to take effect",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "filter-log-events",
      description:
        "Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream. By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events) or all the events found within the time range that you specify. If the results include a token, then there are more log events available, and you can get additional results by specifying the token in a subsequent call. This operation can return empty results while there are more log events available through the token. The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the PutLogEvents request",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-stream-names",
          description:
            "Filters the results to only logs from the log streams in this list. If you specify a value for both logStreamNamePrefix and logStreamNames, the action returns an InvalidParameterException error",
          args: {
            name: "list",
          },
        },
        {
          name: "--log-stream-name-prefix",
          description:
            "Filters the results to include only events from log streams that have names starting with this prefix. If you specify a value for both logStreamNamePrefix and logStreamNames, but the value for logStreamNamePrefix does not match any log stream names specified in logStreamNames, the action returns an InvalidParameterException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The start of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp before this time are not returned",
          args: {
            name: "long",
          },
        },
        {
          name: "--end-time",
          description:
            "The end of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not returned",
          args: {
            name: "long",
          },
        },
        {
          name: "--filter-pattern",
          description:
            "The filter pattern to use. For more information, see Filter and Pattern Syntax. If not provided, all the events are matched",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of events to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of events to return. The default is 10,000 events",
          args: {
            name: "integer",
          },
        },
        {
          name: "--interleaved",
          description:
            "If the value is true, the operation makes a best effort to provide responses that contain events from multiple log streams within the log group, interleaved in a single response. If the value is false, all the matched log events in the first log stream are searched first, then those in the next log stream, and so on. The default is false.  Important: Starting on June 17, 2019, this parameter is ignored and the value is assumed to be true. The response from this operation always interleaves events from multiple log streams within a log group",
        },
        {
          name: "--no-interleaved",
          description:
            "If the value is true, the operation makes a best effort to provide responses that contain events from multiple log streams within the log group, interleaved in a single response. If the value is false, all the matched log events in the first log stream are searched first, then those in the next log stream, and so on. The default is false.  Important: Starting on June 17, 2019, this parameter is ignored and the value is assumed to be true. The response from this operation always interleaves events from multiple log streams within a log group",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-log-events",
      description:
        "Lists log events from the specified log stream. You can list all of the log events or filter using a time range. By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call. This operation can return empty results while there are more log events available through the token",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-stream-name",
          description: "The name of the log stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The start of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp equal to this time or later than this time are included. Events with a timestamp earlier than this time are not included",
          args: {
            name: "long",
          },
        },
        {
          name: "--end-time",
          description:
            "The end of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp equal to or later than this time are not included",
          args: {
            name: "long",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of log events returned. If you don't specify a value, the maximum is as many log events as can fit in a response size of 1 MB, up to 10,000 log events",
          args: {
            name: "integer",
          },
        },
        {
          name: "--start-from-head",
          description:
            "If the value is true, the earliest log events are returned first. If the value is false, the latest log events are returned first. The default value is false. If you are using a previous nextForwardToken value as the nextToken in this operation, you must specify true for startFromHead",
        },
        {
          name: "--no-start-from-head",
          description:
            "If the value is true, the earliest log events are returned first. If the value is false, the latest log events are returned first. The default value is false. If you are using a previous nextForwardToken value as the nextToken in this operation, you must specify true for startFromHead",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-log-group-fields",
      description:
        "Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify. In the results, fields that start with @ are fields generated by CloudWatch Logs. For example, @timestamp is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see Supported Logs and Discovered Fields. The response results are sorted by the frequency percentage, starting with the highest percentage",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--time",
          description:
            "The time to set as the center of the query. If you specify time, the 15 minutes before this time are queries. If you omit time the 8 minutes before and 8 minutes after this time are searched. The time value is specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-log-record",
      description:
        "Retrieves all of the fields and values of a single log event. All fields are retrieved, even if the original query that produced the logRecordPointer retrieved only a subset of fields. Fields are returned as field name/field value pairs. The full unparsed log event is returned within @message",
      options: [
        {
          name: "--log-record-pointer",
          description:
            "The pointer corresponding to the log event record you want to retrieve. You get this from the response of a GetQueryResults operation. In that response, the value of the @ptr field for a log event is the value to use as logRecordPointer to retrieve that complete log event record",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-query-results",
      description:
        "Returns the results from the specified query. Only the fields requested in the query are returned, along with a @ptr field, which is the identifier for the log record. You can use the value of @ptr in a GetLogRecord operation to get the full log record.  GetQueryResults does not start a query execution. To run a query, use StartQuery. If the value of the Status field in the output is Running, this operation returns only partial results. If you see a value of Scheduled or Running for the status, you can retry the operation later to see the final results",
      options: [
        {
          name: "--query-id",
          description: "The ID number of the query",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-tags-log-group",
      description: "Lists the tags for the specified log group",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-destination",
      description:
        "Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions. A destination encapsulates a physical resource (such as an Amazon Kinesis stream) and enables you to subscribe to a real-time stream of log events for a different account, ingested using PutLogEvents. Through an access policy, a destination controls what is written to it. By default, PutDestination does not set any access policy with the destination, which means a cross-account user cannot call PutSubscriptionFilter against this destination. To enable this, the destination owner must call PutDestinationPolicy after PutDestination. To perform a PutDestination operation, you must also have the iam:PassRole permission",
      options: [
        {
          name: "--destination-name",
          description: "A name for the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-arn",
          description:
            "The ARN of an Amazon Kinesis stream to which to deliver matching log events",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of an IAM role that grants CloudWatch Logs permissions to call the Amazon Kinesis PutRecord operation on the destination stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-destination-policy",
      description:
        "Creates or updates an access policy associated with an existing destination. An access policy is an IAM policy document that is used to authorize claims to register a subscription filter against a given destination. If multiple Amazon Web Services accounts are sending logs to this destination, each sender account must be listed separately in the policy. The policy does not support specifying * as the Principal or the use of the aws:PrincipalOrgId global key",
      options: [
        {
          name: "--destination-name",
          description: "A name for an existing destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-policy",
          description:
            "An IAM policy document that authorizes cross-account users to deliver their log events to the associated destination. This can be up to 5120 bytes",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-update",
          description:
            "Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual AWS accounts. Before you update a destination policy this way, you must first update the subscription filters in the accounts that send logs to this destination. If you do not, the subscription filters might stop working. By specifying true for forceUpdate, you are affirming that you have already updated the subscription filters. For more information, see  Updating an existing cross-account subscription  If you omit this parameter, the default of false is used",
        },
        {
          name: "--no-force-update",
          description:
            "Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual AWS accounts. Before you update a destination policy this way, you must first update the subscription filters in the accounts that send logs to this destination. If you do not, the subscription filters might stop working. By specifying true for forceUpdate, you are affirming that you have already updated the subscription filters. For more information, see  Updating an existing cross-account subscription  If you omit this parameter, the default of false is used",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-log-events",
      description:
        'Uploads a batch of log events to the specified log stream. You must include the sequence token obtained from the response of the previous call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token in the expectedSequenceToken field from InvalidSequenceTokenException. If you call PutLogEvents twice within a narrow time period using the same value for sequenceToken, both calls might be successful or one might be rejected. The batch of events must satisfy the following constraints:   The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.   None of the log events in the batch can be more than 2 hours in the future.   None of the log events in the batch can be older than 14 days or older than the retention period of the log group.   The log events in the batch must be in chronological order by their timestamp. The timestamp is the time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: yyyy-mm-ddThh:mm:ss. For example, 2017-09-15T13:45:30.)    A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.   The maximum number of log events in a batch is 10,000.   There is a quota of 5 requests per second per log stream. Additional requests are throttled. This quota can\'t be changed.   If a call to PutLogEvents returns "UnrecognizedClientException" the most likely cause is an invalid Amazon Web Services access key ID or secret key',
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-stream-name",
          description: "The name of the log stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-events",
          description: "The log events",
          args: {
            name: "list",
          },
        },
        {
          name: "--sequence-token",
          description:
            "The sequence token obtained from the response of the previous PutLogEvents call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token using DescribeLogStreams. If you call PutLogEvents twice within a narrow time period using the same value for sequenceToken, both calls might be successful or one might be rejected",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-metric-filter",
      description:
        "Creates or updates a metric filter and associates it with the specified log group. Metric filters allow you to configure rules to extract metric data from log events ingested through PutLogEvents. The maximum number of metric filters that can be associated with a log group is 100. When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created.  Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as IPAddress or requestID as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.  To help prevent accidental high charges, Amazon disables a metric filter if it generates 1000 different name/value pairs for the dimensions that you have specified within a certain amount of time. You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see  Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "A name for the metric filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-pattern",
          description:
            "A filter pattern for extracting metric data out of ingested log events",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-transformations",
          description:
            "A collection of information that defines how metric data gets emitted",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-query-definition",
      description:
        "Creates or updates a query definition for CloudWatch Logs Insights. For more information, see Analyzing Log Data with CloudWatch Logs Insights. To update a query definition, specify its queryDefinitionId in your request. The values of name, queryString, and logGroupNames are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, if you update a current query definition that includes log groups, and you don't specify the logGroupNames parameter in your update operation, the query definition changes to contain no log groups. You must have the logs:PutQueryDefinition permission to be able to perform this operation",
      options: [
        {
          name: "--name",
          description:
            "A name for the query definition. If you are saving a lot of query definitions, we recommend that you name them so that you can easily find the ones you want by using the first part of the name as a filter in the queryDefinitionNamePrefix parameter of DescribeQueryDefinitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-definition-id",
          description:
            "If you are updating a query definition, use this parameter to specify the ID of the query definition that you want to update. You can use DescribeQueryDefinitions to retrieve the IDs of your saved query definitions. If you are creating a query definition, do not specify this parameter. CloudWatch generates a unique ID for the new query definition and include it in the response to this operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-names",
          description:
            "Use this parameter to include specific log groups as part of your query definition. If you are updating a query definition and you omit this parameter, then the updated definition will contain no log groups",
          args: {
            name: "list",
          },
        },
        {
          name: "--query-string",
          description:
            "The query string to use for this definition. For more information, see CloudWatch Logs Insights Query Syntax",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-resource-policy",
      description:
        "Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per Amazon Web Services Region",
      options: [
        {
          name: "--policy-name",
          description: "Name of the new policy. This parameter is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-document",
          description:
            'Details of the new policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. This parameter is required. The following example creates a resource policy enabling the Route 53 service to put DNS query logs in to the specified log group. Replace "logArn" with the ARN of your CloudWatch Logs resource, such as a log group or log stream. CloudWatch Logs also supports aws:SourceArn and aws:SourceAccount condition context keys. In the example resource policy, you would replace the value of SourceArn with the resource making the call from Route\u00a053 to CloudWatch Logs and replace the value of SourceAccount with the Amazon Web Services account ID making that call.   { "Version": "2012-10-17", "Statement": [ { "Sid": "Route53LogsToCloudWatchLogs", "Effect": "Allow", "Principal": { "Service": [ "route53.amazonaws.com" ] }, "Action": "logs:PutLogEvents", "Resource": "logArn", "Condition": { "ArnLike": { "aws:SourceArn": "myRoute53ResourceArn" }, "StringEquals": { "aws:SourceAccount": "myAwsAccountId" } } } ] }',
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-retention-policy",
      description:
        "Sets the retention of the specified log group. A retention policy allows you to configure the number of days for which to retain log events in the specified log group",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--retention-in-days",
          description:
            "The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 2192, 2557, 2922, 3288, and 3653. To set a log group to never have log events expire, use DeleteRetentionPolicy",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-subscription-filter",
      description:
        "Creates or updates a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events ingested through PutLogEvents and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the gzip format. The following destinations are supported for subscription filters:   An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.   A logical destination that belongs to a different account, for cross-account delivery.   An Amazon Kinesis Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.   An Lambda function that belongs to the same account as the subscription filter, for same-account delivery.   Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in filterName.  To perform a PutSubscriptionFilter operation, you must also have the iam:PassRole permission",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description:
            "A name for the subscription filter. If you are updating an existing filter, you must specify the correct name in filterName. To find the name of the filter currently associated with a log group, use DescribeSubscriptionFilters",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-pattern",
          description:
            "A filter pattern for subscribing to a filtered stream of log events",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description:
            "The ARN of the destination to deliver matching log events to. Currently, the supported destinations are:   An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.   A logical destination (specified using an ARN) belonging to a different account, for cross-account delivery. If you are setting up a cross-account subscription, the destination must have an IAM policy associated with it that allows the sender to send logs to the destination. For more information, see PutDestinationPolicy.   An Amazon Kinesis Firehose delivery stream belonging to the same account as the subscription filter, for same-account delivery.   A Lambda function belonging to the same account as the subscription filter, for same-account delivery",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery",
          args: {
            name: "string",
          },
        },
        {
          name: "--distribution",
          description:
            "The method used to distribute log data to the destination. By default, log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-query",
      description:
        "Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query and the query string to use. For more information, see CloudWatch Logs Insights Query Syntax. Queries time out after 15 minutes of execution. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries",
      options: [
        {
          name: "--log-group-name",
          description:
            "The log group on which to perform the query. A StartQuery operation must include a logGroupNames or a logGroupName parameter, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-names",
          description:
            "The list of log groups to be queried. You can include up to 20 log groups. A StartQuery operation must include a logGroupNames or a logGroupName parameter, but not both",
          args: {
            name: "list",
          },
        },
        {
          name: "--start-time",
          description:
            "The beginning of the time range to query. The range is inclusive, so the specified start time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC",
          args: {
            name: "long",
          },
        },
        {
          name: "--end-time",
          description:
            "The end of the time range to query. The range is inclusive, so the specified end time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC",
          args: {
            name: "long",
          },
        },
        {
          name: "--query-string",
          description:
            "The query string to use. For more information, see CloudWatch Logs Insights Query Syntax",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of log events to return in the query. If the query string uses the fields command, only the specified fields and their values are returned. The default is 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "stop-query",
      description:
        "Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running",
      options: [
        {
          name: "--query-id",
          description:
            "The ID number of the query to stop. To find this ID number, use DescribeQueries",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "tag-log-group",
      description:
        "Adds or updates the specified tags for the specified log group. To list the tags for a log group, use ListTagsLogGroup. To remove tags, use UntagLogGroup. For more information about tags, see Tag Log Groups in Amazon CloudWatch Logs in the Amazon CloudWatch Logs User Guide. CloudWatch Logs doesn\u2019t support IAM policies that prevent users from assigning specified tags to log groups using the aws:Resource/key-name  or aws:TagKeys condition keys. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The key-value pairs to use for the tags",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "test-metric-filter",
      description:
        "Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern",
      options: [
        {
          name: "--filter-pattern",
          description:
            "A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-event-messages",
          description: "The log event messages to test",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "untag-log-group",
      description:
        "Removes the specified tags from the specified log group. To list the tags for a log group, use ListTagsLogGroup. To add tags, use TagLogGroup. CloudWatch Logs doesn\u2019t support IAM policies that prevent users from assigning specified tags to log groups using the aws:Resource/key-name  or aws:TagKeys condition keys",
      options: [
        {
          name: "--log-group-name",
          description: "The name of the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag keys. The corresponding tags are removed from the log group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "tail",
      description:
        "Tails the logs for a CloudWatch Logs group. By default, the command returns logs from all associated CloudWatch Logs streams during the past ten minutes. Note that there is no guarantee for exact timestamp ordering of logs",
      options: [
        {
          name: "--since",
          description:
            "From what time to begin displaying logs. By default, logs will be displayed starting from ten minutes in the past. The value provided can be an ISO 8601 timestamp or a relative time. For relative times, provide a number and a single unit. Supported units include:\n\n ``s`` - seconds  ``m`` - minutes  ``h`` - hours  ``d`` - days  ``w`` - weeks For example, a value of ``5m`` would indicate to display logs starting five minutes in the past. Note that multiple units are **not** supported (i.e. ``5h30m``)",
          args: {
            name: "string",
          },
        },
        {
          name: "--follow",
          description:
            "Whether to continuously poll for new logs. By default, the command will exit once there are no more logs to display. To exit from this mode, use Control-C",
        },
        {
          name: "--format",
          description:
            "The format to display the logs. The following formats are supported:\n\n detailed - This the default format. It prints out the timestamp with millisecond precision and timezones, the log stream name, and the log message. short - A shortened format. It prints out the a shortened timestamp and the log message. json - Pretty print any messages that are entirely JSON",
          args: {
            name: "string",
            suggestions: ["detailed", "short", "json"],
          },
        },
        {
          name: "--filter-pattern",
          description:
            "The filter pattern to use. See Filter and Pattern Syntax for details. If not provided, all the events are matched",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-stream-names",
          description:
            "The list of stream names to filter logs by. This parameter cannot be specified when ``--log-stream-name-prefix`` is also specified",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--log-stream-name-prefix",
          description:
            "The prefix to filter logs by. Only events from log streams with names beginning with this prefix will be returned. This parameter cannot be specified when ``log-stream-names`` is also specified",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "group_name",
        description: "The name of the CloudWatch Logs group",
      },
    },
  ],
};
export default completionSpec;
