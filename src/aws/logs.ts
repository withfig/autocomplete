const completionSpec: Fig.Spec = {
  name: "logs",
  description:
    'You can use Amazon CloudWatch Logs to monitor, store, and access your log files from EC2 instances, CloudTrail, and other sources. You can then retrieve the associated log data from CloudWatch Logs using the CloudWatch console. Alternatively, you can use CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch Logs SDK. You can use CloudWatch Logs to:    Monitor logs from EC2 instances in real time: You can use CloudWatch Logs to monitor applications and systems using log data. For example, CloudWatch Logs can track the number of errors that occur in your application logs. Then, it can send you a notification whenever the rate of errors exceeds a threshold that you specify. CloudWatch Logs uses your log data for monitoring so no code changes are required. For example, you can monitor application logs for specific literal terms (such as "NullReferenceException"). You can also count the number of occurrences of a literal term at a particular position in log data (such as "404" status codes in an Apache access log). When the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch metric that you specify.    Monitor CloudTrail logged events: You can create alarms in CloudWatch and receive notifications of particular API activity as captured by CloudTrail. You can use the notification to perform troubleshooting.    Archive log data: You can use CloudWatch Logs to store your log data in highly durable storage. You can change the log retention setting so that any log events earlier than this setting are automatically deleted. The CloudWatch Logs agent helps to quickly send both rotated and non-rotated log data off of a host and into the log service. You can then access the raw log data when you need it',
  subcommands: [
    {
      name: "associate-kms-key",
      description:
        "Associates the specified KMS key with either one log group in the account, or with all stored CloudWatch Logs query insights results in the account. When you use AssociateKmsKey, you specify either the logGroupName parameter or the resourceIdentifier parameter. You can't specify both of those parameters in the same operation.   Specify the logGroupName parameter to cause all log events stored in the log group to be encrypted with that key. Only the log events ingested after the key is associated are encrypted with that key. Associating a KMS key with a log group overrides any existing associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested. Associating a key with a log group does not cause the results of queries of that log group to be encrypted with that key. To have query results encrypted with a KMS key, you must use an AssociateKmsKey operation with the resourceIdentifier parameter that specifies a query-result resource.    Specify the resourceIdentifier parameter with a query-result resource, to use that key to encrypt the stored results of all future StartQuery operations in the account. The response from a GetQueryResults operation will still return the query results in plain text. Even if you have not associated a key with your query results, the query results are encrypted when stored, using the default CloudWatch Logs method. If you run a query from a monitoring account that queries logs in a source account, the query results key from the monitoring account, if any, is used.    If you delete the key that is used to encrypt log events or log group query results, then all the associated stored log events or query results that were encrypted with that key will be unencryptable and unusable.   CloudWatch Logs supports only symmetric KMS keys. Do not use an associate an asymmetric KMS key with your log group or query results. For more information, see Using Symmetric and Asymmetric Keys.  It can take up to 5 minutes for this operation to take effect. If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an InvalidParameterException error",
      options: [
        {
          name: "--log-group-name",
          description:
            "The name of the log group. In your AssociateKmsKey operation, you must specify either the resourceIdentifier parameter or the logGroup parameter, but you can't specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data. This must be a symmetric KMS key. For more information, see Amazon Resource Names and Using Symmetric and Asymmetric Keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-identifier",
          description:
            "Specifies the target for this operation. You must specify one of the following:   Specify the following ARN to have future GetQueryResults operations in this account encrypt the results with the specified KMS key. Replace REGION and ACCOUNT_ID with your Region and account ID.  arn:aws:logs:REGION:ACCOUNT_ID:query-result:*    Specify the ARN of a log group to have CloudWatch Logs use the KMS key to encrypt log events that are ingested and stored by that log group. The log group ARN must be in the following format. Replace REGION and ACCOUNT_ID with your Region and account ID.  arn:aws:logs:REGION:ACCOUNT_ID:log-group:LOG_GROUP_NAME     In your AssociateKmsKey operation, you must specify either the resourceIdentifier parameter or the logGroup parameter, but you can't specify both",
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
      name: "create-delivery",
      description:
        "Creates a delivery. A delivery is a connection between a logical delivery source and a logical delivery destination that you have already created. Only some Amazon Web Services services support being configured as a delivery source using this operation. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from Amazon Web Services services.  A delivery destination can represent a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose. To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following:   Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see PutDeliverySource.   Create a delivery destination, which is a logical object that represents the actual delivery destination. For more information, see PutDeliveryDestination.   If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.    Use CreateDelivery to create a delivery by pairing exactly one delivery source and one delivery destination.    You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination. To update an existing delivery configuration, use UpdateDeliveryConfiguration",
      options: [
        {
          name: "--delivery-source-name",
          description:
            "The name of the delivery source to use for this delivery",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-destination-arn",
          description:
            "The ARN of the delivery destination to use for this delivery",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-fields",
          description:
            "The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list",
          args: {
            name: "list",
          },
        },
        {
          name: "--field-delimiter",
          description:
            "The field delimiter to use between record fields when the final output format of a delivery is in Plain, W3C, or Raw format",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-delivery-configuration",
          description:
            "This structure contains parameters that are valid only when the delivery's delivery destination is an S3 bucket",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An optional list of key-value pairs to associate with the resource. For more information about tagging, see Tagging Amazon Web Services resources",
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
      name: "create-export-task",
      description:
        "Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a CreateExportTask operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination. Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported. Exporting to S3 buckets that are encrypted with AES-256 is supported.  This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use DescribeExportTasks to get the status of the export task. Each account can only have one active (RUNNING or PENDING) export task at a time. To cancel an export task, use CancelExportTask. You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects.  Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities",
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
            "The end time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported. You must specify a time that is not earlier than when this log group was created",
          args: {
            name: "long",
          },
        },
        {
          name: "--destination",
          description:
            "The name of S3 bucket for the exported log data. The bucket must be in the same Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-prefix",
          description:
            "The prefix used as the start of the key for every object exported. If you don't specify a value, the default is exportedlogs. The length of this parameter must comply with the S3 object key name length limits. The object key name is a sequence of Unicode characters with UTF-8 encoding, and can be up to 1,024 bytes",
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
      name: "create-log-anomaly-detector",
      description:
        "Creates an anomaly detector that regularly scans one or more log groups and look for patterns and anomalies in the logs. An anomaly detector can help surface issues by automatically discovering anomalies in your log event traffic. An anomaly detector uses machine learning algorithms to scan log events and find patterns. A pattern is a shared text structure that recurs among your log fields. Patterns provide a useful tool for analyzing large sets of logs because a large number of log events can often be compressed into a few patterns. The anomaly detector uses pattern recognition to find anomalies, which are unusual log events. It uses the evaluationFrequency to compare current log events and patterns with trained baselines.  Fields within a pattern are called tokens. Fields that vary within a pattern, such as a request ID or timestamp, are referred to as dynamic tokens and represented by <*>.  The following is an example of a pattern:  [INFO] Request time: <*> ms  This pattern represents log events like [INFO] Request time: 327 ms and other similar log events that differ only by the number, in this csse 327. When the pattern is displayed, the different numbers are replaced by <*>   Any parts of log events that are masked as sensitive data are not scanned for anomalies. For more information about masking sensitive data, see Help protect sensitive log data with masking",
      options: [
        {
          name: "--log-group-arn-list",
          description:
            "An array containing the ARN of the log group that this anomaly detector will watch. You can specify only one log group ARN",
          args: {
            name: "list",
          },
        },
        {
          name: "--detector-name",
          description: "A name for this anomaly detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-frequency",
          description:
            "Specifies how often the anomaly detector is to run and look for anomalies. Set this value according to the frequency that the log group receives new logs. For example, if the log group receives new log events every 10 minutes, then 15 minutes might be a good setting for evaluationFrequency",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-pattern",
          description:
            "You can use this parameter to limit the anomaly detection model to examine only log events that match the pattern you specify here. For more information, see Filter and Pattern Syntax",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "Optionally assigns a KMS key to secure this anomaly detector and its findings. If a key is assigned, the anomalies found and the model used by this detector are encrypted at rest with the key. If a key is assigned to an anomaly detector, a user must have permissions for both this key and for the anomaly detector to retrieve information about the anomalies that it finds. For more information about using a KMS key and to see the required IAM policy, see Use a KMS key with an anomaly detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-visibility-time",
          description:
            "The number of days to have visibility on an anomaly. After this time period has elapsed for an anomaly, it will be automatically baselined and the anomaly detector will treat new occurrences of a similar anomaly as normal. Therefore, if you do not correct the cause of an anomaly during the time period specified in anomalyVisibilityTime, it will be considered normal going forward and will not be detected as an anomaly",
          args: {
            name: "long",
          },
        },
        {
          name: "--tags",
          description:
            "An optional list of key-value pairs to associate with the resource. For more information about tagging, see Tagging Amazon Web Services resources",
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
      name: "create-log-group",
      description:
        "Creates a log group with the specified name. You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group:   Log group names must be unique within a Region for an Amazon Web Services account.   Log group names can be between 1 and 512 characters long.   Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)   Log group names can't start with the string aws/    When you create a log group, by default the log events in the log group do not expire. To set a retention policy so that events expire and are deleted after a specified time, use PutRetentionPolicy. If you associate an KMS key with the log group, ingested data is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested. If you attempt to associate a KMS key with the log group but the KMS key does not exist or the KMS key is disabled, you receive an InvalidParameterException error.   CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group. For more information, see Using Symmetric and Asymmetric Keys",
      options: [
        {
          name: "--log-group-name",
          description: "A name for the log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data. For more information, see Amazon Resource Names",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value pairs to use for the tags. You can grant users access to certain log groups while preventing them from accessing other log groups. To do so, tag your groups and use IAM policies that refer to those tags. To assign tags when you create a log group, you must have either the logs:TagResource or logs:TagLogGroup permission. For more information about tagging, see Tagging Amazon Web Services resources. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags",
          args: {
            name: "map",
          },
        },
        {
          name: "--log-group-class",
          description:
            "Use this parameter to specify the log group class for this log group. There are two classes:   The Standard log class supports all CloudWatch Logs features.   The Infrequent Access log class supports a subset of CloudWatch Logs features and incurs lower costs.   If you omit this parameter, the default of STANDARD is used.  The value of logGroupClass can't be changed after a log group is created.  For details about the features supported by each class, see Log classes",
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
      name: "create-log-stream",
      description:
        "Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored. There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on CreateLogStream operations, after which transactions are throttled. You must use the following guidelines when naming a log stream:   Log stream names must be unique within the log group.   Log stream names can be between 1 and 512 characters long.   Don't use ':' (colon) or '*' (asterisk) characters",
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
      name: "delete-account-policy",
      description:
        "Deletes a CloudWatch Logs account policy. This stops the account-wide policy from applying to log groups in the account. If you delete a data protection policy or subscription filter policy, any log-group level policies of those types remain in effect. To use this operation, you must be signed on with the correct permissions depending on the type of policy that you are deleting.   To delete a data protection policy, you must have the logs:DeleteDataProtectionPolicy and logs:DeleteAccountPolicy permissions.   To delete a subscription filter policy, you must have the logs:DeleteSubscriptionFilter and logs:DeleteAccountPolicy permissions.   To delete a transformer policy, you must have the logs:DeleteTransformer and logs:DeleteAccountPolicy permissions.   To delete a field index policy, you must have the logs:DeleteIndexPolicy and logs:DeleteAccountPolicy permissions.   If you delete a field index policy, the indexing of the log events that happened before you deleted the policy will still be used for up to 30 days to improve CloudWatch Logs Insights queries",
      options: [
        {
          name: "--policy-name",
          description: "The name of the policy to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-type",
          description: "The type of policy to delete",
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
      name: "delete-data-protection-policy",
      description:
        "Deletes the data protection policy from the specified log group.  For more information about data protection policies, see PutDataProtectionPolicy",
      options: [
        {
          name: "--log-group-identifier",
          description:
            "The name or ARN of the log group that you want to delete the data protection policy for",
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
      name: "delete-delivery",
      description:
        "Deletes s delivery. A delivery is a connection between a logical delivery source and a logical delivery destination. Deleting a delivery only deletes the connection between the delivery source and delivery destination. It does not delete the delivery destination or the delivery source",
      options: [
        {
          name: "--id",
          description:
            "The unique ID of the delivery to delete. You can find the ID of a delivery with the DescribeDeliveries operation",
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
      name: "delete-delivery-destination",
      description:
        "Deletes a delivery destination. A delivery is a connection between a logical delivery source and a logical delivery destination. You can't delete a delivery destination if any current deliveries are associated with it. To find whether any deliveries are associated with this delivery destination, use the DescribeDeliveries operation and check the deliveryDestinationArn field in the results",
      options: [
        {
          name: "--name",
          description:
            "The name of the delivery destination that you want to delete. You can find a list of delivery destionation names by using the DescribeDeliveryDestinations operation",
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
      name: "delete-delivery-destination-policy",
      description:
        "Deletes a delivery destination policy. For more information about these policies, see PutDeliveryDestinationPolicy",
      options: [
        {
          name: "--delivery-destination-name",
          description:
            "The name of the delivery destination that you want to delete the policy for",
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
      name: "delete-delivery-source",
      description:
        "Deletes a delivery source. A delivery is a connection between a logical delivery source and a logical delivery destination. You can't delete a delivery source if any current deliveries are associated with it. To find whether any deliveries are associated with this delivery source, use the DescribeDeliveries operation and check the deliverySourceName field in the results",
      options: [
        {
          name: "--name",
          description:
            "The name of the delivery source that you want to delete",
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
      name: "delete-index-policy",
      description:
        "Deletes a log-group level field index policy that was applied to a single log group. The indexing of the log events that happened before you delete the policy will still be used for as many as 30 days to improve CloudWatch Logs Insights queries. You can't use this operation to delete an account-level index policy. Instead, use DeletAccountPolicy. If you delete a log-group level field index policy and there is an account-level field index policy, in a few minutes the log group begins using that account-wide policy to index new incoming log events",
      options: [
        {
          name: "--log-group-identifier",
          description:
            "The log group to delete the index policy for. You can specify either the name or the ARN of the log group",
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
      name: "delete-integration",
      description:
        "Deletes the integration between CloudWatch Logs and OpenSearch Service. If your integration has active vended logs dashboards, you must specify true for the force parameter, otherwise the operation will fail. If you delete the integration by setting force to true, all your vended logs dashboards powered by OpenSearch Service will be deleted and the data that was on them will no longer be accessible",
      options: [
        {
          name: "--integration-name",
          description:
            "The name of the integration to delete. To find the name of your integration, use ListIntegrations",
          args: {
            name: "string",
          },
        },
        {
          name: "--force",
          description:
            "Specify true to force the deletion of the integration even if vended logs dashboards currently exist. The default is false",
        },
        {
          name: "--no-force",
          description:
            "Specify true to force the deletion of the integration even if vended logs dashboards currently exist. The default is false",
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
      name: "delete-log-anomaly-detector",
      description: "Deletes the specified CloudWatch Logs anomaly detector",
      options: [
        {
          name: "--anomaly-detector-arn",
          description:
            "The ARN of the anomaly detector to delete. You can find the ARNs of log anomaly detectors in your account by using the ListLogAnomalyDetectors operation",
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
      name: "delete-transformer",
      description:
        "Deletes the log transformer for the specified log group. As soon as you do this, the transformation of incoming log events according to that transformer stops. If this account has an account-level transformer that applies to this log group, the log group begins using that account-level transformer when this log-group level transformer is deleted. After you delete a transformer, be sure to edit any metric filters or subscription filters that relied on the transformed versions of the log events",
      options: [
        {
          name: "--log-group-identifier",
          description:
            "Specify either the name or ARN of the log group to delete the transformer for. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN",
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
      name: "describe-account-policies",
      description:
        "Returns a list of all CloudWatch Logs account policies in the account",
      options: [
        {
          name: "--policy-type",
          description:
            "Use this parameter to limit the returned policies to only the policies that match the policy type that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description:
            "Use this parameter to limit the returned policies to only the policy with the name that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-identifiers",
          description:
            "If you are using an account that is set up as a monitoring account for CloudWatch unified cross-account observability, you can use this to specify the account ID of a source account. If you do, the operation returns the account policy for the specified account. Currently, you can specify only one account ID in this parameter. If you omit this parameter, only the policy in the current account is returned",
          args: {
            name: "list",
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
      name: "describe-configuration-templates",
      description:
        "Use this operation to return the valid and default values that are used when creating delivery sources, delivery destinations, and deliveries. For more information about deliveries, see CreateDelivery",
      options: [
        {
          name: "--service",
          description:
            "Use this parameter to filter the response to include only the configuration templates that apply to the Amazon Web Services service that you specify here",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-types",
          description:
            "Use this parameter to filter the response to include only the configuration templates that apply to the log types that you specify here",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-types",
          description:
            "Use this parameter to filter the response to include only the configuration templates that apply to the resource types that you specify here",
          args: {
            name: "list",
          },
        },
        {
          name: "--delivery-destination-types",
          description:
            "Use this parameter to filter the response to include only the configuration templates that apply to the delivery destination types that you specify here",
          args: {
            name: "list",
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
          name: "--limit",
          description:
            "Use this parameter to limit the number of configuration templates that are returned in the response",
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
      name: "describe-deliveries",
      description:
        "Retrieves a list of the deliveries that have been created in the account. A delivery is a connection between a  delivery source  and a  delivery destination . A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, or Firehose. Only some Amazon Web Services services support being configured as a delivery source. These services are listed in Enable logging from Amazon Web Services services",
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
            "Optionally specify the maximum number of deliveries to return in the response",
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
      name: "describe-delivery-destinations",
      description:
        "Retrieves a list of the delivery destinations that have been created in the account",
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
            "Optionally specify the maximum number of delivery destinations to return in the response",
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
      name: "describe-delivery-sources",
      description:
        "Retrieves a list of the delivery sources that have been created in the account",
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
            "Optionally specify the maximum number of delivery sources to return in the response",
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
            "The maximum number of items returned. If you don't specify a value, the default maximum value of 50 items is used",
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
      name: "describe-export-tasks",
      description:
        "Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status",
      options: [
        {
          name: "--task-id",
          description:
            "The ID of the export task. Specifying a task ID filters the results to one or zero export tasks",
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
      name: "describe-field-indexes",
      description:
        "Returns a list of field indexes listed in the field index policies of one or more log groups. For more information about field index policies, see PutIndexPolicy",
      options: [
        {
          name: "--log-group-identifiers",
          description:
            "An array containing the names or ARNs of the log groups that you want to retrieve field indexes for",
          args: {
            name: "list",
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
      name: "describe-index-policies",
      description:
        "Returns the field index policies of one or more log groups. For more information about field index policies, see PutIndexPolicy. If a specified log group has a log-group level index policy, that policy is returned by this operation. If a specified log group doesn't have a log-group level index policy, but an account-wide index policy applies to it, that account-wide policy is returned by this operation. To find information about only account-level policies, use DescribeAccountPolicies instead",
      options: [
        {
          name: "--log-group-identifiers",
          description:
            "An array containing the name or ARN of the log group that you want to retrieve field index policies for",
          args: {
            name: "list",
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
      name: "describe-log-groups",
      description:
        "Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name. CloudWatch Logs doesn't support IAM policies that control access to the DescribeLogGroups action by using the aws:ResourceTag/key-name  condition key. Other CloudWatch Logs actions do support the use of the aws:ResourceTag/key-name  condition key to control access. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability",
      options: [
        {
          name: "--account-identifiers",
          description:
            "When includeLinkedAccounts is set to True, use this parameter to specify the list of accounts to search. You can specify as many as 20 account IDs in the array",
          args: {
            name: "list",
          },
        },
        {
          name: "--log-group-name-prefix",
          description:
            "The prefix to match.   logGroupNamePrefix and logGroupNamePattern are mutually exclusive. Only one of these parameters can be passed",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-name-pattern",
          description:
            "If you specify a string for this parameter, the operation returns only log groups that have names that match the string based on a case-sensitive substring search. For example, if you specify Foo, log groups named FooBar, aws/Foo, and GroupFoo would match, but foo, F/o/o and Froo would not match. If you specify logGroupNamePattern in your request, then only arn, creationTime, and logGroupName are included in the response.    logGroupNamePattern and logGroupNamePrefix are mutually exclusive. Only one of these parameters can be passed",
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
          name: "--include-linked-accounts",
          description:
            "If you are using a monitoring account, set this to True to have the operation return log groups in the accounts listed in accountIdentifiers. If this parameter is set to true and accountIdentifiers contains a null value, the operation returns all log groups in the monitoring account and all log groups in all source accounts that are linked to the monitoring account",
        },
        {
          name: "--no-include-linked-accounts",
          description:
            "If you are using a monitoring account, set this to True to have the operation return log groups in the accounts listed in accountIdentifiers. If this parameter is set to true and accountIdentifiers contains a null value, the operation returns all log groups in the monitoring account and all log groups in all source accounts that are linked to the monitoring account",
        },
        {
          name: "--log-group-class",
          description:
            "Specifies the log group class for this log group. There are two classes:   The Standard log class supports all CloudWatch Logs features.   The Infrequent Access log class supports a subset of CloudWatch Logs features and incurs lower costs.   For details about the features supported by each class, see Log classes",
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
      name: "describe-log-streams",
      description:
        "Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must include one of these two parameters, but you can't include both.  This operation has a limit of five transactions per second, after which transactions are throttled. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability",
      options: [
        {
          name: "--log-group-name",
          description:
            "The name of the log group.   You must include either logGroupIdentifier or logGroupName, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-identifier",
          description:
            "Specify either the name or ARN of the log group to view. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.   You must include either logGroupIdentifier or logGroupName, but not both",
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
            "The prefix to match. CloudWatch Logs uses the value that you set here only if you also include the logGroupName parameter in your request",
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
      name: "describe-queries",
      description:
        "Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have been run recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status",
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
          name: "--query-language",
          description:
            "Limits the returned queries to only the queries that use the specified query language",
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
      name: "describe-query-definitions",
      description:
        "This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions. You can retrieve query definitions from the current account or from a source account that is linked to the current account. You can use the queryDefinitionNamePrefix parameter to limit the results to only the query definitions that have names that start with a certain string",
      options: [
        {
          name: "--query-language",
          description:
            "The query language used for this query. For more information about the query languages that CloudWatch Logs supports, see Supported query languages",
          args: {
            name: "string",
          },
        },
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
      name: "disassociate-kms-key",
      description:
        "Disassociates the specified KMS key from the specified log group or from all CloudWatch Logs Insights query results in the account. When you use DisassociateKmsKey, you specify either the logGroupName parameter or the resourceIdentifier parameter. You can't specify both of those parameters in the same operation.   Specify the logGroupName parameter to stop using the KMS key to encrypt future log events ingested and stored in the log group. Instead, they will be encrypted with the default CloudWatch Logs method. The log events that were ingested while the key was associated with the log group are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.   Specify the resourceIdentifier parameter with the query-result resource to stop using the KMS key to encrypt the results of all future StartQuery operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with the account are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.   It can take up to 5 minutes for this operation to take effect",
      options: [
        {
          name: "--log-group-name",
          description:
            "The name of the log group. In your DisassociateKmsKey operation, you must specify either the resourceIdentifier parameter or the logGroup parameter, but you can't specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-identifier",
          description:
            "Specifies the target for this operation. You must specify one of the following:   Specify the ARN of a log group to stop having CloudWatch Logs use the KMS key to encrypt log events that are ingested and stored by that log group. After you run this operation, CloudWatch Logs encrypts ingested log events with the default CloudWatch Logs method. The log group ARN must be in the following format. Replace REGION and ACCOUNT_ID with your Region and account ID.  arn:aws:logs:REGION:ACCOUNT_ID:log-group:LOG_GROUP_NAME     Specify the following ARN to stop using this key to encrypt the results of future StartQuery operations in this account. Replace REGION and ACCOUNT_ID with your Region and account ID.  arn:aws:logs:REGION:ACCOUNT_ID:query-result:*    In your DisssociateKmsKey operation, you must specify either the resourceIdentifier parameter or the logGroup parameter, but you can't specify both",
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
      name: "filter-log-events",
      description:
        "Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream. You must have the logs:FilterLogEvents permission to perform this operation. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must include one of these two parameters, but you can't include both.  By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events) or all the events found within the specified time range. If the results include a token, that means there are more log events available. You can get additional results by specifying the token in a subsequent call. This operation can return empty results while there are more log events available through the token. The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the PutLogEvents request. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability",
      options: [
        {
          name: "--log-group-name",
          description:
            "The name of the log group to search.   You must include either logGroupIdentifier or logGroupName, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-identifier",
          description:
            "Specify either the name or ARN of the log group to view log events from. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.   You must include either logGroupIdentifier or logGroupName, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-stream-names",
          description:
            "Filters the results to only logs from the log streams in this list. If you specify a value for both logStreamNames and logStreamNamePrefix, the action returns an InvalidParameterException error",
          args: {
            name: "list",
          },
        },
        {
          name: "--log-stream-name-prefix",
          description:
            "Filters the results to include only events from log streams that have names starting with this prefix. If you specify a value for both logStreamNamePrefix and logStreamNames, the action returns an InvalidParameterException error",
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
            "If the value is true, the operation attempts to provide responses that contain events from multiple log streams within the log group, interleaved in a single response. If the value is false, all the matched log events in the first log stream are searched first, then those in the next log stream, and so on.  Important As of June 17, 2019, this parameter is ignored and the value is assumed to be true. The response from this operation always interleaves events from multiple log streams within a log group",
        },
        {
          name: "--no-interleaved",
          description:
            "If the value is true, the operation attempts to provide responses that contain events from multiple log streams within the log group, interleaved in a single response. If the value is false, all the matched log events in the first log stream are searched first, then those in the next log stream, and so on.  Important As of June 17, 2019, this parameter is ignored and the value is assumed to be true. The response from this operation always interleaves events from multiple log streams within a log group",
        },
        {
          name: "--unmask",
          description:
            "Specify true to display the log event fields with all sensitive data unmasked and visible. The default is false. To use this operation with this parameter, you must be signed into an account with the logs:Unmask permission",
        },
        {
          name: "--no-unmask",
          description:
            "Specify true to display the log event fields with all sensitive data unmasked and visible. The default is false. To use this operation with this parameter, you must be signed into an account with the logs:Unmask permission",
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
      name: "get-data-protection-policy",
      description:
        "Returns information about a log group data protection policy",
      options: [
        {
          name: "--log-group-identifier",
          description:
            "The name or ARN of the log group that contains the data protection policy that you want to see",
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
      name: "get-delivery",
      description:
        "Returns complete information about one logical delivery. A delivery is a connection between a  delivery source  and a  delivery destination . A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, or Firehose. Only some Amazon Web Services services support being configured as a delivery source. These services are listed in Enable logging from Amazon Web Services services.  You need to specify the delivery id in this operation. You can find the IDs of the deliveries in your account with the DescribeDeliveries operation",
      options: [
        {
          name: "--id",
          description: "The ID of the delivery that you want to retrieve",
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
      name: "get-delivery-destination",
      description:
        "Retrieves complete information about one delivery destination",
      options: [
        {
          name: "--name",
          description:
            "The name of the delivery destination that you want to retrieve",
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
      name: "get-delivery-destination-policy",
      description:
        "Retrieves the delivery destination policy assigned to the delivery destination that you specify. For more information about delivery destinations and their policies, see PutDeliveryDestinationPolicy",
      options: [
        {
          name: "--delivery-destination-name",
          description:
            "The name of the delivery destination that you want to retrieve the policy of",
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
      name: "get-delivery-source",
      description: "Retrieves complete information about one delivery source",
      options: [
        {
          name: "--name",
          description:
            "The name of the delivery source that you want to retrieve",
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
      name: "get-integration",
      description:
        "Returns information about one integration between CloudWatch Logs and OpenSearch Service",
      options: [
        {
          name: "--integration-name",
          description:
            "The name of the integration that you want to find information about. To find the name of your integration, use ListIntegrations",
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
      name: "get-log-anomaly-detector",
      description:
        "Retrieves information about the log anomaly detector that you specify",
      options: [
        {
          name: "--anomaly-detector-arn",
          description:
            "The ARN of the anomaly detector to retrieve information about. You can find the ARNs of log anomaly detectors in your account by using the ListLogAnomalyDetectors operation",
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
      name: "get-log-events",
      description:
        "Lists log events from the specified log stream. You can list all of the log events or filter using a time range. By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call. This operation can return empty results while there are more log events available through the token. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must include one of these two parameters, but you can't include both",
      options: [
        {
          name: "--log-group-name",
          description:
            "The name of the log group.   You must include either logGroupIdentifier or logGroupName, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-identifier",
          description:
            "Specify either the name or ARN of the log group to view events from. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.   You must include either logGroupIdentifier or logGroupName, but not both",
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
            "The maximum number of log events returned. If you don't specify a limit, the default is as many log events as can fit in a response size of 1 MB (up to 10,000 log events)",
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
          name: "--unmask",
          description:
            "Specify true to display the log event fields with all sensitive data unmasked and visible. The default is false. To use this operation with this parameter, you must be signed into an account with the logs:Unmask permission",
        },
        {
          name: "--no-unmask",
          description:
            "Specify true to display the log event fields with all sensitive data unmasked and visible. The default is false. To use this operation with this parameter, you must be signed into an account with the logs:Unmask permission",
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
      name: "get-log-group-fields",
      description:
        "Returns a list of the fields that are included in log events in the specified log group. Includes the percentage of log events that contain each field. The search is limited to a time period that you specify. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must specify one of these parameters, but you can't specify both.  In the results, fields that start with @ are fields generated by CloudWatch Logs. For example, @timestamp is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see Supported Logs and Discovered Fields. The response results are sorted by the frequency percentage, starting with the highest percentage. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability",
      options: [
        {
          name: "--log-group-name",
          description:
            "The name of the log group to search.   You must include either logGroupIdentifier or logGroupName, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--time",
          description:
            "The time to set as the center of the query. If you specify time, the 8 minutes before and 8 minutes after this time are searched. If you omit time, the most recent 15 minutes up to the current time are searched. The time value is specified as epoch time, which is the number of seconds since January 1, 1970, 00:00:00 UTC",
          args: {
            name: "long",
          },
        },
        {
          name: "--log-group-identifier",
          description:
            "Specify either the name or ARN of the log group to view. If the log group is in a source account and you are using a monitoring account, you must specify the ARN.   You must include either logGroupIdentifier or logGroupName, but not both",
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
          name: "--unmask",
          description:
            "Specify true to display the log event fields with all sensitive data unmasked and visible. The default is false. To use this operation with this parameter, you must be signed into an account with the logs:Unmask permission",
        },
        {
          name: "--no-unmask",
          description:
            "Specify true to display the log event fields with all sensitive data unmasked and visible. The default is false. To use this operation with this parameter, you must be signed into an account with the logs:Unmask permission",
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
      name: "get-query-results",
      description:
        "Returns the results from the specified query. Only the fields requested in the query are returned, along with a @ptr field, which is the identifier for the log record. You can use the value of @ptr in a GetLogRecord operation to get the full log record.  GetQueryResults does not start running a query. To run a query, use StartQuery. For more information about how long results of previous queries are available, see CloudWatch Logs quotas. If the value of the Status field in the output is Running, this operation returns only partial results. If you see a value of Scheduled or Running for the status, you can retry the operation later to see the final results.  If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see CloudWatch cross-account observability",
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
      name: "get-transformer",
      description:
        "Returns the information about the log transformer associated with this log group. This operation returns data only for transformers created at the log group level. To get information for an account-level transformer, use DescribeAccountPolicies",
      options: [
        {
          name: "--log-group-identifier",
          description:
            "Specify either the name or ARN of the log group to return transformer information for. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN",
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
      name: "list-anomalies",
      description:
        "Returns a list of anomalies that log anomaly detectors have found. For details about the structure format of each anomaly object that is returned, see the example in this section",
      options: [
        {
          name: "--anomaly-detector-arn",
          description:
            "Use this to optionally limit the results to only the anomalies found by a certain anomaly detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--suppression-state",
          description:
            "You can specify this parameter if you want to the operation to return only anomalies that are currently either suppressed or unsuppressed",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items to return. If you don't specify a value, the default maximum value of 50 items is used",
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
      name: "list-integrations",
      description:
        "Returns a list of integrations between CloudWatch Logs and other services in this account. Currently, only one integration can be created in an account, and this integration must be with OpenSearch Service",
      options: [
        {
          name: "--integration-name-prefix",
          description:
            "To limit the results to integrations that start with a certain name prefix, specify that name prefix here",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-type",
          description:
            "To limit the results to integrations of a certain type, specify that type here",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-status",
          description:
            "To limit the results to integrations with a certain status, specify that status here",
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
      name: "list-log-anomaly-detectors",
      description:
        "Retrieves a list of the log anomaly detectors in the account",
      options: [
        {
          name: "--filter-log-group-arn",
          description:
            "Use this to optionally filter the results to only include anomaly detectors that are associated with the specified log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items to return. If you don't specify a value, the default maximum value of 50 items is used",
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
      name: "list-log-groups-for-query",
      description:
        "Returns a list of the log groups that were analyzed during a single CloudWatch Logs Insights query. This can be useful for queries that use log group name prefixes or the filterIndex command, because the log groups are dynamically selected in these cases. For more information about field indexes, see Create field indexes to improve query performance and reduce costs",
      options: [
        {
          name: "--query-id",
          description:
            "The ID of the query to use. This query ID is from the response to your StartQuery operation",
          args: {
            name: "string",
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
          name: "--max-results",
          description:
            "Limits the number of returned log groups to the specified number",
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
      name: "list-tags-for-resource",
      description:
        "Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and destinations support tagging",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource that you want to view tags for. The ARN format of a log group is arn:aws:logs:Region:account-id:log-group:log-group-name   The ARN format of a destination is arn:aws:logs:Region:account-id:destination:destination-name   For more information about ARN format, see CloudWatch Logs resources and operations",
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
      name: "list-tags-log-group",
      description:
        "The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use ListTagsForResource instead.  Lists the tags for the specified log group",
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
      name: "put-account-policy",
      description:
        "Creates an account-level data protection policy, subscription filter policy, or field index policy that applies to all log groups or a subset of log groups in the account.  Data protection policy  A data protection policy can help safeguard sensitive data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only one account-level data protection policy.  Sensitive data is detected and masked when it is ingested into a log group. When you set a data protection policy, log events ingested into the log groups before that time are not masked.  If you use PutAccountPolicy to create a data protection policy for your whole account, it applies to both existing log groups and all log groups that are created later in this account. The account-level policy is applied to existing log groups with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked. By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the logs:Unmask permission can use a GetLogEvents or FilterLogEvents operation with the unmask parameter set to true to view the unmasked log events. Users with the logs:Unmask can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the unmask query command. For more information, including a list of types of data that can be audited and masked, see Protect sensitive log data with masking. To use the PutAccountPolicy operation for a data protection policy, you must be signed on with the logs:PutDataProtectionPolicy and logs:PutAccountPolicy permissions. The PutAccountPolicy operation applies to all log groups in the account. You can use PutDataProtectionPolicy to create a data protection policy that applies to just one log group. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.  Subscription filter policy  A subscription filter policy sets up a real-time feed of log events from CloudWatch Logs to other Amazon Web Services services. Account-level subscription filter policies apply to both existing log groups and log groups that are created later in this account. Supported destinations are Kinesis Data Streams, Firehose, and Lambda. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format. The following destinations are supported for subscription filters:   An Kinesis Data Streams data stream in the same account as the subscription policy, for same-account delivery.   An Firehose data stream in the same account as the subscription policy, for same-account delivery.   A Lambda function in the same account as the subscription policy, for same-account delivery.   A logical destination in a different account created with PutDestination, for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations.   Each account can have one account-level subscription filter policy per Region. If you are updating an existing filter, you must specify the correct name in PolicyName. To perform a PutAccountPolicy subscription filter operation for any destination except a Lambda function, you must also have the iam:PassRole permission.  Transformer policy  Creates or updates a log transformer policy for your account. You use log transformers to transform log events into a different format, making them easier for you to process and analyze. You can also transform logs from different sources into standardized formats that contain relevant, source-specific information. After you have created a transformer, CloudWatch Logs performs this transformation at the time of log ingestion. You can then refer to the transformed versions of the logs during operations such as querying with CloudWatch Logs Insights or creating metric filters or subscription filters. You can also use a transformer to copy metadata from metadata keys into the log events themselves. This metadata can include log group name, log stream name, account ID and Region. A transformer for a log group is a series of processors, where each processor applies one type of transformation to the log events ingested into this log group. For more information about the available processors to use in a transformer, see  Processors that you can use. Having log events in standardized format enables visibility across your applications for your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation for common log types with out-of-the-box transformation templates for major Amazon Web Services log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use pre-built transformation templates or create custom transformation policies. You can create transformers only for the log groups in the Standard log class. You can have one account-level transformer policy that applies to all log groups in the account. Or you can create as many as 20 account-level transformer policies that are each scoped to a subset of log groups with the selectionCriteria parameter. If you have multiple account-level transformer policies with selection criteria, no two of them can use the same or overlapping log group name prefixes. For example, if you have one policy filtered to log groups that start with my-log, you can't have another field index policy filtered to my-logpprod or my-logging. You can also set up a transformer at the log-group level. For more information, see PutTransformer. If there is both a log-group level transformer created with PutTransformer and an account-level transformer that could apply to the same log group, the log group uses only the log-group level transformer. It ignores the account-level transformer.  Field index policy  You can use field index policies to create indexes on fields found in log events in the log group. Creating field indexes can help lower the scan volume for CloudWatch Logs Insights queries that reference those fields, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields or values that match only a small fraction of the total log events. Common examples of indexes include request ID, session ID, user IDs, or instance IDs. For more information, see Create field indexes to improve query performance and reduce costs  To find the fields that are in your log group events, use the GetLogGroupFields operation. For example, suppose you have created a field index for requestId. Then, any CloudWatch Logs Insights query on that log group that includes requestId = value  or requestId in [value, value, ...] will attempt to process only the log events where the indexed field matches the specified value. Matches of log events to the names of indexed fields are case-sensitive. For example, an indexed field of RequestId won't match a log event containing requestId. You can have one account-level field index policy that applies to all log groups in the account. Or you can create as many as 20 account-level field index policies that are each scoped to a subset of log groups with the selectionCriteria parameter. If you have multiple account-level index policies with selection criteria, no two of them can use the same or overlapping log group name prefixes. For example, if you have one policy filtered to log groups that start with my-log, you can't have another field index policy filtered to my-logpprod or my-logging. If you create an account-level field index policy in a monitoring account in cross-account observability, the policy is applied only to the monitoring account and not to any source accounts. If you want to create a field index policy for a single log group, you can use PutIndexPolicy instead of PutAccountPolicy. If you do so, that log group will use only that log-group level policy, and will ignore the account-level policy that you create with PutAccountPolicy",
      options: [
        {
          name: "--policy-name",
          description:
            "A name for the policy. This must be unique within the account",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-document",
          description:
            'Specify the policy, in JSON.  Data protection policy  A data protection policy must include two JSON blocks:   The first block must include both a DataIdentifer array and an Operation property with an Audit action. The DataIdentifer array lists the types of sensitive data that you want to mask. For more information about the available options, see Types of data that you can mask. The Operation property with an Audit action is required to find the sensitive data terms. This Audit action must contain a FindingsDestination object. You can optionally use that FindingsDestination object to list one or more destinations to send audit findings to. If you specify destinations such as log groups, Firehose streams, and S3 buckets, they must already exist.   The second block must include both a DataIdentifer array and an Operation property with an Deidentify action. The DataIdentifer array must exactly match the DataIdentifer array in the first block of the policy. The Operation property with the Deidentify action is what actually masks the data, and it must contain the  "MaskConfig": {} object. The  "MaskConfig": {} object must be empty.   For an example data protection policy, see the Examples section on this page.  The contents of the two DataIdentifer arrays must match exactly.  In addition to the two JSON blocks, the policyDocument can also include Name, Description, and Version fields. The Name is different than the operation\'s policyName parameter, and is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch. The JSON specified in policyDocument can be up to 30,720 characters long.  Subscription filter policy  A subscription filter policy can include the following attributes in a JSON block:    DestinationArn The ARN of the destination to deliver log events to. Supported destinations are:   An Kinesis Data Streams data stream in the same account as the subscription policy, for same-account delivery.   An Firehose data stream in the same account as the subscription policy, for same-account delivery.   A Lambda function in the same account as the subscription policy, for same-account delivery.   A logical destination in a different account created with PutDestination, for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations.      RoleArn The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don\'t need to provide the ARN when you are working with a logical destination for cross-account delivery.    FilterPattern A filter pattern for subscribing to a filtered stream of log events.    Distribution The method used to distribute log data to the destination. By default, log data is grouped by log stream, but the grouping can be set to Random for a more even distribution. This property is only applicable when the destination is an Kinesis Data Streams data stream.    Transformer policy  A transformer policy must include one JSON block with the array of processors and their configurations. For more information about available processors, see  Processors that you can use.   Field index policy  A field index filter policy can include the following attribute in a JSON block:    Fields The array of field indexes to create.   It must contain at least one field index. The following is an example of an index policy document that creates two indexes, RequestId and TransactionId.  "policyDocument": "{ \\"Fields\\": [ \\"RequestId\\", \\"TransactionId\\" ] }"',
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-type",
          description: "The type of policy that you're creating or updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Currently the only valid value for this parameter is ALL, which specifies that the data protection policy applies to all log groups in the account. If you omit this parameter, the default of ALL is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-criteria",
          description:
            "Use this parameter to apply the new policy to a subset of log groups in the account. Specifing selectionCriteria is valid only when you specify SUBSCRIPTION_FILTER_POLICY, FIELD_INDEX_POLICY or TRANSFORMER_POLICYfor policyType. If policyType is SUBSCRIPTION_FILTER_POLICY, the only supported selectionCriteria filter is LogGroupName NOT IN []  If policyType is FIELD_INDEX_POLICY or TRANSFORMER_POLICY, the only supported selectionCriteria filter is LogGroupNamePrefix  The selectionCriteria string can be up to 25KB in length. The length is determined by using its UTF-8 bytes. Using the selectionCriteria parameter with SUBSCRIPTION_FILTER_POLICY is useful to help prevent infinite loops. For more information, see Log recursion prevention",
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
      name: "put-data-protection-policy",
      description:
        "Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data.  Sensitive data is detected and masked when it is ingested into the log group. When you set a data protection policy, log events ingested into the log group before that time are not masked.  By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the logs:Unmask permission can use a GetLogEvents or FilterLogEvents operation with the unmask parameter set to true to view the unmasked log events. Users with the logs:Unmask can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the unmask query command. For more information, including a list of types of data that can be audited and masked, see Protect sensitive log data with masking. The PutDataProtectionPolicy operation applies to only the specified log group. You can also use PutAccountPolicy to create an account-level data protection policy that applies to all log groups in the account, including both existing log groups and log groups that are created level. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked",
      options: [
        {
          name: "--log-group-identifier",
          description: "Specify either the log group name or log group ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-document",
          description:
            'Specify the data protection policy, in JSON. This policy must include two JSON blocks:   The first block must include both a DataIdentifer array and an Operation property with an Audit action. The DataIdentifer array lists the types of sensitive data that you want to mask. For more information about the available options, see Types of data that you can mask. The Operation property with an Audit action is required to find the sensitive data terms. This Audit action must contain a FindingsDestination object. You can optionally use that FindingsDestination object to list one or more destinations to send audit findings to. If you specify destinations such as log groups, Firehose streams, and S3 buckets, they must already exist.   The second block must include both a DataIdentifer array and an Operation property with an Deidentify action. The DataIdentifer array must exactly match the DataIdentifer array in the first block of the policy. The Operation property with the Deidentify action is what actually masks the data, and it must contain the  "MaskConfig": {} object. The  "MaskConfig": {} object must be empty.   For an example data protection policy, see the Examples section on this page.  The contents of the two DataIdentifer arrays must match exactly.  In addition to the two JSON blocks, the policyDocument can also include Name, Description, and Version fields. The Name is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch. The JSON specified in policyDocument can be up to 30,720 characters',
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
      name: "put-delivery-destination",
      description:
        "Creates or updates a logical delivery destination. A delivery destination is an Amazon Web Services resource that represents an Amazon Web Services service that logs can be sent to. CloudWatch Logs, Amazon S3, and Firehose are supported as logs delivery destinations. To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following:   Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see PutDeliverySource.   Use PutDeliveryDestination to create a delivery destination, which is a logical object that represents the actual delivery destination.    If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.    Use CreateDelivery to create a delivery by pairing exactly one delivery source and one delivery destination. For more information, see CreateDelivery.    You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination. Only some Amazon Web Services services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from Amazon Web Services services.  If you use this operation to update an existing delivery destination, all the current delivery destination parameters are overwritten with the new parameter values that you specify",
      options: [
        {
          name: "--name",
          description:
            "A name for this delivery destination. This name must be unique for all delivery destinations in your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-format",
          description:
            "The format for the logs that this delivery destination will receive",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-destination-configuration",
          description:
            "A structure that contains the ARN of the Amazon Web Services resource that will receive the logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An optional list of key-value pairs to associate with the resource. For more information about tagging, see Tagging Amazon Web Services resources",
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
      name: "put-delivery-destination-policy",
      description:
        "Creates and assigns an IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. To configure the delivery of logs from an Amazon Web Services service in another account to a logs delivery destination in the current account, you must do the following:   Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see PutDeliverySource.   Create a delivery destination, which is a logical object that represents the actual delivery destination. For more information, see PutDeliveryDestination.   Use this operation in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.    Create a delivery by pairing exactly one delivery source and one delivery destination. For more information, see CreateDelivery.   Only some Amazon Web Services services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from Amazon Web Services services.  The contents of the policy must include two statements. One statement enables general logs delivery, and the other allows delivery to the chosen destination. See the examples for the needed policies",
      options: [
        {
          name: "--delivery-destination-name",
          description:
            "The name of the delivery destination to assign this policy to",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-destination-policy",
          description: "The contents of the policy",
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
      name: "put-delivery-source",
      description:
        "Creates or updates a logical delivery source. A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, or Firehose. To configure logs delivery between a delivery destination and an Amazon Web Services service that is supported as a delivery source, you must do the following:   Use PutDeliverySource to create a delivery source, which is a logical object that represents the resource that is actually sending the logs.    Use PutDeliveryDestination to create a delivery destination, which is a logical object that represents the actual delivery destination. For more information, see PutDeliveryDestination.   If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.    Use CreateDelivery to create a delivery by pairing exactly one delivery source and one delivery destination. For more information, see CreateDelivery.    You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination. Only some Amazon Web Services services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from Amazon Web Services services.  If you use this operation to update an existing delivery source, all the current delivery source parameters are overwritten with the new parameter values that you specify",
      options: [
        {
          name: "--name",
          description:
            "A name for this delivery source. This name must be unique for all delivery sources in your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The ARN of the Amazon Web Services resource that is generating and sending logs. For example, arn:aws:workmail:us-east-1:123456789012:organization/m-1234EXAMPLEabcd1234abcd1234abcd1234",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-type",
          description:
            "Defines the type of log that the source is sending.   For Amazon Bedrock, the valid value is APPLICATION_LOGS.   For Amazon CodeWhisperer, the valid value is EVENT_LOGS.   For IAM Identity Center, the valid value is ERROR_LOGS.   For Amazon WorkMail, the valid values are ACCESS_CONTROL_LOGS, AUTHENTICATION_LOGS, WORKMAIL_AVAILABILITY_PROVIDER_LOGS, and WORKMAIL_MAILBOX_ACCESS_LOGS",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An optional list of key-value pairs to associate with the resource. For more information about tagging, see Tagging Amazon Web Services resources",
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
      name: "put-destination",
      description:
        "Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions. A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With a destination, you can subscribe to a real-time stream of log events for a different account, ingested using PutLogEvents. Through an access policy, a destination controls what is written to it. By default, PutDestination does not set any access policy with the destination, which means a cross-account user cannot call PutSubscriptionFilter against this destination. To enable this, the destination owner must call PutDestinationPolicy after PutDestination. To perform a PutDestination operation, you must also have the iam:PassRole permission",
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
          name: "--tags",
          description:
            "An optional list of key-value pairs to associate with the resource. For more information about tagging, see Tagging Amazon Web Services resources",
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
      name: "put-destination-policy",
      description:
        "Creates or updates an access policy associated with an existing destination. An access policy is an IAM policy document that is used to authorize claims to register a subscription filter against a given destination",
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
            "Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual Amazon Web Services accounts. Before you update a destination policy this way, you must first update the subscription filters in the accounts that send logs to this destination. If you do not, the subscription filters might stop working. By specifying true for forceUpdate, you are affirming that you have already updated the subscription filters. For more information, see  Updating an existing cross-account subscription  If you omit this parameter, the default of false is used",
        },
        {
          name: "--no-force-update",
          description:
            "Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual Amazon Web Services accounts. Before you update a destination policy this way, you must first update the subscription filters in the accounts that send logs to this destination. If you do not, the subscription filters might stop working. By specifying true for forceUpdate, you are affirming that you have already updated the subscription filters. For more information, see  Updating an existing cross-account subscription  If you omit this parameter, the default of false is used",
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
      name: "put-index-policy",
      description:
        "Creates or updates a field index policy for the specified log group. Only log groups in the Standard log class support field index policies. For more information about log classes, see Log classes. You can use field index policies to create field indexes on fields found in log events in the log group. Creating field indexes speeds up and lowers the costs for CloudWatch Logs Insights queries that reference those field indexes, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields or values that match only a small fraction of the total log events. Common examples of indexes include request ID, session ID, userID, and instance IDs. For more information, see Create field indexes to improve query performance and reduce costs. To find the fields that are in your log group events, use the GetLogGroupFields operation. For example, suppose you have created a field index for requestId. Then, any CloudWatch Logs Insights query on that log group that includes requestId = value  or requestId IN [value, value, ...] will process fewer log events to reduce costs, and have improved performance. Each index policy has the following quotas and restrictions:   As many as 20 fields can be included in the policy.   Each field name can include as many as 100 characters.   Matches of log events to the names of indexed fields are case-sensitive. For example, a field index of RequestId won't match a log event containing requestId. Log group-level field index policies created with PutIndexPolicy override account-level field index policies created with PutAccountPolicy. If you use PutIndexPolicy to create a field index policy for a log group, that log group uses only that policy. The log group ignores any account-wide field index policy that you might have created",
      options: [
        {
          name: "--log-group-identifier",
          description:
            "Specify either the log group name or log group ARN to apply this field index policy to. If you specify an ARN, use the format arn:aws:logs:region:account-id:log-group:log_group_name Don't include an * at the end",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-document",
          description:
            'The index policy document, in JSON format. The following is an example of an index policy document that creates two indexes, RequestId and TransactionId.  "policyDocument": "{ "Fields": [ "RequestId", "TransactionId" ] }"  The policy document must include at least one field index. For more information about the fields that can be included and other restrictions, see Field index syntax and quotas',
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
      name: "put-integration",
      description:
        "Creates an integration between CloudWatch Logs and another service in this account. Currently, only integrations with OpenSearch Service are supported, and currently you can have only one integration in your account. Integrating with OpenSearch Service makes it possible for you to create curated vended logs dashboards, powered by OpenSearch Service analytics. For more information, see Vended log dashboards powered by Amazon OpenSearch Service. You can use this operation only to create a new integration. You can't modify an existing integration",
      options: [
        {
          name: "--integration-name",
          description: "A name for the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description:
            "A structure that contains configuration information for the integration that you are creating",
          args: {
            name: "structure",
          },
        },
        {
          name: "--integration-type",
          description:
            "The type of integration. Currently, the only supported type is OPENSEARCH",
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
      name: "put-log-events",
      description:
        'Uploads a batch of log events to the specified log stream.  The sequence token is now ignored in PutLogEvents actions. PutLogEvents actions are always accepted and never return InvalidSequenceTokenException or DataAlreadyAcceptedException even if the sequence token is not valid. You can use parallel PutLogEvents actions on the same log stream.   The batch of events must satisfy the following constraints:   The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.   None of the log events in the batch can be more than 2 hours in the future.   None of the log events in the batch can be more than 14 days in the past. Also, none of the log events can be from earlier than the retention period of the log group.   The log events in the batch must be in chronological order by their timestamp. The timestamp is the time that the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: yyyy-mm-ddThh:mm:ss. For example, 2017-09-15T13:45:30.)    A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.   Each log event can be no larger than 256 KB.   The maximum number of log events in a batch is 10,000.    The quota of five requests per second per log stream has been removed. Instead, PutLogEvents actions are throttled based on a per-second per-account quota. You can request an increase to the per-second throttling quota by using the Service Quotas service.    If a call to PutLogEvents returns "UnrecognizedClientException" the most likely cause is a non-valid Amazon Web Services access key ID or secret key',
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
            "The sequence token obtained from the response of the previous PutLogEvents call.  The sequenceToken parameter is now ignored in PutLogEvents actions. PutLogEvents actions are now accepted and never return InvalidSequenceTokenException or DataAlreadyAcceptedException even if the sequence token is not valid",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity",
          description: "The entity associated with the log events",
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
      name: "put-metric-filter",
      description:
        "Creates or updates a metric filter and associates it with the specified log group. With metric filters, you can configure rules to extract metric data from log events ingested through PutLogEvents. The maximum number of metric filters that can be associated with a log group is 100. Using regular expressions to create metric filters is supported. For these filters, there is a quota of two regular expression patterns within a single filter pattern. There is also a quota of five regular expression patterns per log group. For more information about using regular expressions in metric filters, see  Filter pattern syntax for metric filters, subscription filters, filter log events, and Live Tail. When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created.  Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as IPAddress or requestID as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.  CloudWatch Logs might disable a metric filter if it generates 1,000 different name/value pairs for your specified dimensions within one hour. You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see  Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges",
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
          name: "--apply-on-transformed-logs",
          description:
            "This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see PutTransformer. If the log group uses either a log-group level or account-level transformer, and you specify true, the metric filter will be applied on the transformed version of the log events instead of the original ingested log events",
        },
        {
          name: "--no-apply-on-transformed-logs",
          description:
            "This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see PutTransformer. If the log group uses either a log-group level or account-level transformer, and you specify true, the metric filter will be applied on the transformed version of the log events instead of the original ingested log events",
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
      name: "put-query-definition",
      description:
        "Creates or updates a query definition for CloudWatch Logs Insights. For more information, see Analyzing Log Data with CloudWatch Logs Insights. To update a query definition, specify its queryDefinitionId in your request. The values of name, queryString, and logGroupNames are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, imagine updating a current query definition that includes log groups. If you don't specify the logGroupNames parameter in your update operation, the query definition changes to contain no log groups. You must have the logs:PutQueryDefinition permission to be able to perform this operation",
      options: [
        {
          name: "--query-language",
          description:
            "Specify the query language to use for this query. The options are Logs Insights QL, OpenSearch PPL, and OpenSearch SQL. For more information about the query languages that CloudWatch Logs supports, see Supported query languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A name for the query definition. If you are saving numerous query definitions, we recommend that you name them. This way, you can find the ones you want by using the first part of the name as a filter in the queryDefinitionNamePrefix parameter of DescribeQueryDefinitions",
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
            "Use this parameter to include specific log groups as part of your query definition. If your query uses the OpenSearch Service query language, you specify the log group names inside the querystring instead of here. If you are updating an existing query definition for the Logs Insights QL or OpenSearch Service PPL and you omit this parameter, then the updated definition will contain no log groups",
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
          name: "--client-token",
          description:
            "Used as an idempotency token, to avoid returning an exception if the service receives the same request twice because of a network error",
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
            'Details of the new policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. This parameter is required. The following example creates a resource policy enabling the Route 53 service to put DNS query logs in to the specified log group. Replace "logArn" with the ARN of your CloudWatch Logs resource, such as a log group or log stream. CloudWatch Logs also supports aws:SourceArn and aws:SourceAccount condition context keys. In the example resource policy, you would replace the value of SourceArn with the resource making the call from Route\u00a053 to CloudWatch Logs. You would also replace the value of SourceAccount with the Amazon Web Services account ID making that call.   { "Version": "2012-10-17", "Statement": [ { "Sid": "Route53LogsToCloudWatchLogs", "Effect": "Allow", "Principal": { "Service": [ "route53.amazonaws.com" ] }, "Action": "logs:PutLogEvents", "Resource": "logArn", "Condition": { "ArnLike": { "aws:SourceArn": "myRoute53ResourceArn" }, "StringEquals": { "aws:SourceAccount": "myAwsAccountId" } } } ] }',
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
      name: "put-retention-policy",
      description:
        "Sets the retention of the specified log group. With a retention policy, you can configure the number of days for which to retain log events in the specified log group.  CloudWatch Logs doesn't immediately delete log events when they reach their retention setting. It typically takes up to 72 hours after that before log events are deleted, but in rare situations might take longer. To illustrate, imagine that you change a log group to have a longer retention setting when it contains log events that are past the expiration date, but haven't been deleted. Those log events will take up to 72 hours to be deleted after the new retention date is reached. To make sure that log data is deleted permanently, keep a log group at its lower retention setting until 72 hours after the previous retention period ends. Alternatively, wait to change the retention setting until you confirm that the earlier log events are deleted.  When log events reach their retention setting they are marked for deletion. After they are marked for deletion, they do not add to your archival storage costs anymore, even if they are not actually deleted until later. These log events marked for deletion are also not included when you use an API to retrieve the storedBytes value to see how many bytes a log group is storing",
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
            "The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653. To set a log group so that its log events do not expire, use DeleteRetentionPolicy",
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
      name: "put-subscription-filter",
      description:
        "Creates or updates a subscription filter and associates it with the specified log group. With subscription filters, you can subscribe to a real-time stream of log events ingested through PutLogEvents and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format. The following destinations are supported for subscription filters:   An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.   A logical destination created with PutDestination that belongs to a different account, for cross-account delivery. We currently support Kinesis Data Streams and Firehose as logical destinations.   An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.   An Lambda function that belongs to the same account as the subscription filter, for same-account delivery.   Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in filterName.  Using regular expressions to create subscription filters is supported. For these filters, there is a quotas of quota of two regular expression patterns within a single filter pattern. There is also a quota of five regular expression patterns per log group. For more information about using regular expressions in subscription filters, see  Filter pattern syntax for metric filters, subscription filters, filter log events, and Live Tail. To perform a PutSubscriptionFilter operation for any destination except a Lambda function, you must also have the iam:PassRole permission",
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
            "The ARN of the destination to deliver matching log events to. Currently, the supported destinations are:   An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.   A logical destination (specified using an ARN) belonging to a different account, for cross-account delivery. If you're setting up a cross-account subscription, the destination must have an IAM policy associated with it. The IAM policy must allow the sender to send logs to the destination. For more information, see PutDestinationPolicy.   A Kinesis Data Firehose delivery stream belonging to the same account as the subscription filter, for same-account delivery.   A Lambda function belonging to the same account as the subscription filter, for same-account delivery",
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
            "The method used to distribute log data to the destination. By default, log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis data stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-on-transformed-logs",
          description:
            "This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see PutTransformer. If the log group uses either a log-group level or account-level transformer, and you specify true, the subscription filter will be applied on the transformed version of the log events instead of the original ingested log events",
        },
        {
          name: "--no-apply-on-transformed-logs",
          description:
            "This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see PutTransformer. If the log group uses either a log-group level or account-level transformer, and you specify true, the subscription filter will be applied on the transformed version of the log events instead of the original ingested log events",
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
      name: "put-transformer",
      description:
        "Creates or updates a log transformer for a single log group. You use log transformers to transform log events into a different format, making them easier for you to process and analyze. You can also transform logs from different sources into standardized formats that contains relevant, source-specific information. After you have created a transformer, CloudWatch Logs performs the transformations at the time of log ingestion. You can then refer to the transformed versions of the logs during operations such as querying with CloudWatch Logs Insights or creating metric filters or subscription filers. You can also use a transformer to copy metadata from metadata keys into the log events themselves. This metadata can include log group name, log stream name, account ID and Region. A transformer for a log group is a series of processors, where each processor applies one type of transformation to the log events ingested into this log group. The processors work one after another, in the order that you list them, like a pipeline. For more information about the available processors to use in a transformer, see  Processors that you can use. Having log events in standardized format enables visibility across your applications for your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation for common log types with out-of-the-box transformation templates for major Amazon Web Services log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use pre-built transformation templates or create custom transformation policies. You can create transformers only for the log groups in the Standard log class. You can also set up a transformer at the account level. For more information, see PutAccountPolicy. If there is both a log-group level transformer created with PutTransformer and an account-level transformer that could apply to the same log group, the log group uses only the log-group level transformer. It ignores the account-level transformer",
      options: [
        {
          name: "--log-group-identifier",
          description:
            "Specify either the name or ARN of the log group to create the transformer for",
          args: {
            name: "string",
          },
        },
        {
          name: "--transformer-config",
          description:
            "This structure contains the configuration of this log transformer. A log transformer is an array of processors, where each processor applies one type of transformation to the log events that are ingested",
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
      name: "start-live-tail",
      description:
        "Starts a Live Tail streaming session for one or more log groups. A Live Tail session provides a near real-time streaming of log events as they are ingested into selected log groups. A session can go on for a maximum of 3 hours.\n\nYou must have logs:StartLiveTail permission to perform this operation. If the log events matching the filters are more than 500 events per second, we sample the events to provide the real-time tailing experience.\n\nIf you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and start tailing on Log Group(s) present in the linked source accounts. For more information, see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html.\n\nLive Tail sessions incur charges by session usage time, per minute. For pricing details, please refer to https://aws.amazon.com/cloudwatch/pricing/",
      options: [
        {
          name: "--log-group-identifiers",
          description:
            "The Log Group Identifiers are the ARNs for the CloudWatch Logs groups to tail. You can provide up to 10 Log Group Identifiers.\n\nLogs can be filtered by Log Stream(s) by providing  --log-stream-names or --log-stream-name-prefixes. If more than one Log Group is provided --log-stream-names and --log-stream-name-prefixes  is disabled. --log-stream-names and --log-stream-name-prefixes can't be provided simultaneously.\n\nNote -  The Log Group ARN must be in the following format. Replace REGION and ACCOUNT_ID with your Region and account ID. ``arn:aws:logs:REGION :ACCOUNT_ID :log-group:LOG_GROUP_NAME``. A ``:*`` after the ARN is prohibited.For more information about ARN format, see CloudWatch Logs resources and operations",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--log-stream-names",
          description:
            "The list of stream names to filter logs by.\n\n This parameter cannot be specified when --log-stream-name-prefixes are also specified. This parameter cannot be specified when multiple log-group-identifiers are specified",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--log-stream-name-prefixes",
          description:
            "The prefix to filter logs by. Only events from log streams with names beginning with this prefix will be returned. \n\nThis parameter cannot be specified when --log-stream-names is also specified. This parameter cannot be specified when multiple log-group-identifiers are specified",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--log-event-filter-pattern",
          description:
            "The filter pattern to use. See Filter and Pattern Syntax for details. If not provided, all the events are matched. This option can be used to include or exclude log events patterns.  Additionally, when multiple filter patterns are provided, they must be encapsulated by quotes",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "start-query",
      description:
        "Starts a query of one or more log groups using CloudWatch Logs Insights. You specify the log groups and time range to query and the query string to use. For more information, see CloudWatch Logs Insights Query Syntax. After you run a query using StartQuery, the query results are stored by CloudWatch Logs. You can use GetQueryResults to retrieve the results of a query, using the queryId that StartQuery returns.   To specify the log groups to query, a StartQuery operation must include one of the following:   Either exactly one of the following parameters: logGroupName, logGroupNames, or logGroupIdentifiers    Or the queryString must include a SOURCE command to select log groups for the query. The SOURCE command can select log groups based on log group name prefix, account ID, and log class.  For more information about the SOURCE command, see SOURCE.    If you have associated a KMS key with the query results in this account, then StartQuery uses that key to encrypt the results when it stores them. If no key is associated with query results, the query results are encrypted with the default CloudWatch Logs encryption method. Queries time out after 60 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see CloudWatch cross-account observability. For a cross-account StartQuery operation, the query definition must be defined in the monitoring account. You can have up to 30 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards",
      options: [
        {
          name: "--query-language",
          description:
            "Specify the query language to use for this query. The options are Logs Insights QL, OpenSearch PPL, and OpenSearch SQL. For more information about the query languages that CloudWatch Logs supports, see Supported query languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-name",
          description:
            "The log group on which to perform the query.  A StartQuery operation must include exactly one of the following parameters: logGroupName, logGroupNames, or logGroupIdentifiers. The exception is queries using the OpenSearch Service SQL query language, where you specify the log group names inside the querystring instead of here",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-names",
          description:
            "The list of log groups to be queried. You can include up to 50 log groups.  A StartQuery operation must include exactly one of the following parameters: logGroupName, logGroupNames, or logGroupIdentifiers. The exception is queries using the OpenSearch Service SQL query language, where you specify the log group names inside the querystring instead of here",
          args: {
            name: "list",
          },
        },
        {
          name: "--log-group-identifiers",
          description:
            "The list of log groups to query. You can include up to 50 log groups. You can specify them by the log group name or ARN. If a log group that you're querying is in a source account and you're using a monitoring account, you must specify the ARN of the log group here. The query definition must also be defined in the monitoring account. If you specify an ARN, use the format arn:aws:logs:region:account-id:log-group:log_group_name Don't include an * at the end. A StartQuery operation must include exactly one of the following parameters: logGroupName, logGroupNames, or logGroupIdentifiers. The exception is queries using the OpenSearch Service SQL query language, where you specify the log group names inside the querystring instead of here",
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
            "The maximum number of log events to return in the query. If the query string uses the fields command, only the specified fields and their values are returned. The default is 10,000",
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
      name: "tag-log-group",
      description:
        "The TagLogGroup operation is on the path to deprecation. We recommend that you use TagResource instead.  Adds or updates the specified tags for the specified log group. To list the tags for a log group, use ListTagsForResource. To remove tags, use UntagResource. For more information about tags, see Tag Log Groups in Amazon CloudWatch Logs in the Amazon CloudWatch Logs User Guide. CloudWatch Logs doesn't support IAM policies that prevent users from assigning specified tags to log groups using the aws:Resource/key-name  or aws:TagKeys condition keys. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags",
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
        "Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource. Currently, the only CloudWatch Logs resources that can be tagged are log groups and destinations.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a CloudWatch Logs resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource that you're adding tags to. The ARN format of a log group is arn:aws:logs:Region:account-id:log-group:log-group-name   The ARN format of a destination is arn:aws:logs:Region:account-id:destination:destination-name   For more information about ARN format, see CloudWatch Logs resources and operations",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs to associate with the resource",
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
      name: "test-transformer",
      description:
        "Use this operation to test a log transformer. You enter the transformer configuration and a set of log events to test with. The operation responds with an array that includes the original log events and the transformed versions",
      options: [
        {
          name: "--transformer-config",
          description:
            "This structure contains the configuration of this log transformer that you want to test. A log transformer is an array of processors, where each processor applies one type of transformation to the log events that are ingested",
          args: {
            name: "list",
          },
        },
        {
          name: "--log-event-messages",
          description:
            "An array of the raw log events that you want to use to test this transformer",
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
      name: "untag-log-group",
      description:
        "The UntagLogGroup operation is on the path to deprecation. We recommend that you use UntagResource instead.  Removes the specified tags from the specified log group. To list the tags for a log group, use ListTagsForResource. To add tags, use TagResource. CloudWatch Logs doesn't support IAM policies that prevent users from assigning specified tags to log groups using the aws:Resource/key-name  or aws:TagKeys condition keys",
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
      description: "Removes one or more tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the CloudWatch Logs resource that you're removing tags from. The ARN format of a log group is arn:aws:logs:Region:account-id:log-group:log-group-name   The ARN format of a destination is arn:aws:logs:Region:account-id:destination:destination-name   For more information about ARN format, see CloudWatch Logs resources and operations",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The list of tag keys to remove from the resource",
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
      name: "update-anomaly",
      description:
        "Use this operation to suppress anomaly detection for a specified anomaly or pattern. If you suppress an anomaly, CloudWatch Logs won't report new occurrences of that anomaly and won't update that anomaly with new data. If you suppress a pattern, CloudWatch Logs won't report any anomalies related to that pattern. You must specify either anomalyId or patternId, but you can't specify both parameters in the same operation. If you have previously used this operation to suppress detection of a pattern or anomaly, you can use it again to cause CloudWatch Logs to end the suppression. To do this, use this operation and specify the anomaly or pattern to stop suppressing, and omit the suppressionType and suppressionPeriod parameters",
      options: [
        {
          name: "--anomaly-id",
          description:
            "If you are suppressing or unsuppressing an anomaly, specify its unique ID here. You can find anomaly IDs by using the ListAnomalies operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--pattern-id",
          description:
            "If you are suppressing or unsuppressing an pattern, specify its unique ID here. You can find pattern IDs by using the ListAnomalies operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-detector-arn",
          description:
            "The ARN of the anomaly detector that this operation is to act on",
          args: {
            name: "string",
          },
        },
        {
          name: "--suppression-type",
          description:
            "Use this to specify whether the suppression to be temporary or infinite. If you specify LIMITED, you must also specify a suppressionPeriod. If you specify INFINITE, any value for suppressionPeriod is ignored",
          args: {
            name: "string",
          },
        },
        {
          name: "--suppression-period",
          description:
            "If you are temporarily suppressing an anomaly or pattern, use this structure to specify how long the suppression is to last",
          args: {
            name: "structure",
          },
        },
        {
          name: "--baseline",
          description:
            "Set this to true to prevent CloudWatch Logs from displaying this behavior as an anomaly in the future. The behavior is then treated as baseline behavior. However, if similar but more severe occurrences of this behavior occur in the future, those will still be reported as anomalies.  The default is false",
        },
        {
          name: "--no-baseline",
          description:
            "Set this to true to prevent CloudWatch Logs from displaying this behavior as an anomaly in the future. The behavior is then treated as baseline behavior. However, if similar but more severe occurrences of this behavior occur in the future, those will still be reported as anomalies.  The default is false",
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
      name: "update-delivery-configuration",
      description:
        "Use this operation to update the configuration of a delivery to change either the S3 path pattern or the format of the delivered logs. You can't use this operation to change the source or destination of the delivery",
      options: [
        {
          name: "--id",
          description: "The ID of the delivery to be updated by this request",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-fields",
          description:
            "The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list",
          args: {
            name: "list",
          },
        },
        {
          name: "--field-delimiter",
          description:
            "The field delimiter to use between record fields when the final output format of a delivery is in Plain, W3C, or Raw format",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-delivery-configuration",
          description:
            "This structure contains parameters that are valid only when the delivery's delivery destination is an S3 bucket",
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
      name: "update-log-anomaly-detector",
      description: "Updates an existing log anomaly detector",
      options: [
        {
          name: "--anomaly-detector-arn",
          description:
            "The ARN of the anomaly detector that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-frequency",
          description:
            "Specifies how often the anomaly detector runs and look for anomalies. Set this value according to the frequency that the log group receives new logs. For example, if the log group receives new log events every 10 minutes, then setting evaluationFrequency to FIFTEEN_MIN might be appropriate",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-pattern",
          description:
            "A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-visibility-time",
          description:
            "The number of days to use as the life cycle of anomalies. After this time, anomalies are automatically baselined and the anomaly detector model will treat new occurrences of similar event as normal. Therefore, if you do not correct the cause of an anomaly during this time, it will be considered normal going forward and will not be detected",
          args: {
            name: "long",
          },
        },
        {
          name: "--enabled",
          description:
            "Use this parameter to pause or restart the anomaly detector",
        },
        {
          name: "--no-enabled",
          description:
            "Use this parameter to pause or restart the anomaly detector",
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
