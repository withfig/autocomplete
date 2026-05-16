const completionSpec: Fig.Spec = {
  name: "cloudtrail",
  description:
    "CloudTrail This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail. CloudTrail is a web service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response elements returned by the service.  As an alternative to the API, you can use one of the Amazon Web Services SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to download and install them, see Tools to Build on Amazon Web Services.  See the CloudTrail User Guide for information about the data that is included with each Amazon Web Services API call listed in the log files",
  subcommands: [
    {
      name: "add-tags",
      description:
        "Adds one or more tags to a trail, event data store, dashboard, or channel, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail or event data store that applies to all Amazon Web Services Regions only from the Region in which the trail or event data store was created (also known as its home Region)",
      options: [
        {
          name: "--resource-id",
          description:
            "Specifies the ARN of the trail, event data store, dashboard, or channel to which one or more tags will be added. The format of a trail ARN is: arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail  The format of an event data store ARN is: arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE  The format of a dashboard ARN is: arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash  The format of a channel ARN is: arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags-list",
          description: "Contains a list of tags, up to a limit of 50",
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
      name: "cancel-query",
      description:
        "Cancels a query if the query is not in a terminated state, such as CANCELLED, FAILED, TIMED_OUT, or FINISHED. You must specify an ARN value for EventDataStore. The ID of the query that you want to cancel is also required. When you run CancelQuery, the query status might show as CANCELLED even if the operation is not yet finished",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or the ID suffix of the ARN) of an event data store on which the specified query is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The ID of the query that you want to cancel. The QueryId comes from the response of a StartQuery operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-data-store-owner-account-id",
          description: "The account ID of the event data store owner",
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
      name: "create-channel",
      description:
        "Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify",
      options: [
        {
          name: "--name",
          description: "The name of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description:
            "The name of the partner or external event source. You cannot change this name after you create the channel. A maximum of one channel is allowed per source.  A source can be either Custom for all valid non-Amazon Web Services events, or the name of a partner event source. For information about the source names for available partners, see Additional information about integration partners in the CloudTrail User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--destinations",
          description:
            "One or more event data stores to which events arriving through a channel will be logged",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "A list of tags",
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
      name: "create-dashboard",
      description:
        "Creates a custom dashboard or the Highlights dashboard.     Custom dashboards - Custom dashboards allow you to query events in any event data store type. You can add up to 10 widgets to a custom dashboard. You can manually refresh a custom dashboard, or you can set a refresh schedule.    Highlights dashboard - You can create the Highlights dashboard to see a summary of key user activities and API usage across all your event data stores. CloudTrail Lake manages the Highlights dashboard and refreshes the dashboard every 6 hours. To create the Highlights dashboard, you must set and enable a refresh schedule.    CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the StartQuery operation on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to each event data store. For more information, see Example: Allow CloudTrail to run queries to populate a dashboard in the CloudTrail User Guide.   To set a refresh schedule, CloudTrail must be granted permissions to run the StartDashboardRefresh operation to refresh the dashboard on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to the dashboard. For more information, see  Resource-based policy example for a dashboard in the CloudTrail User Guide.  For more information about dashboards, see CloudTrail Lake dashboards in the CloudTrail User Guide",
      options: [
        {
          name: "--name",
          description:
            "The name of the dashboard. The name must be unique to your account.  To create the Highlights dashboard, the name must be AWSCloudTrail-Highlights",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-schedule",
          description:
            "The refresh schedule configuration for the dashboard.  To create the Highlights dashboard, you must set a refresh schedule and set the Status to ENABLED. The Unit for the refresh schedule must be HOURS and the Value must be 6",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags-list",
          description: "A list of tags",
          args: {
            name: "list",
          },
        },
        {
          name: "--termination-protection-enabled",
          description:
            "Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled",
        },
        {
          name: "--no-termination-protection-enabled",
          description:
            "Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled",
        },
        {
          name: "--widgets",
          description:
            "An array of widgets for a custom dashboard. A custom dashboard can have a maximum of ten widgets.  You do not need to specify widgets for the Highlights dashboard",
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
      name: "create-event-data-store",
      description: "Creates a new event data store",
      options: [
        {
          name: "--name",
          description: "The name of the event data store",
          args: {
            name: "string",
          },
        },
        {
          name: "--advanced-event-selectors",
          description:
            "The advanced event selectors to use to select the events for the data store. You can configure up to five advanced event selectors for each event data store.  For more information about how to use advanced event selectors to log CloudTrail events, see Log events by using advanced event selectors in the CloudTrail User Guide. For more information about how to use advanced event selectors to include Config configuration items in your event data store, see Create an event data store for Config configuration items in the CloudTrail User Guide. For more information about how to use advanced event selectors to include events outside of Amazon Web Services events in your event data store, see Create an integration to log events from outside Amazon Web Services in the CloudTrail User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--multi-region-enabled",
          description:
            "Specifies whether the event data store includes events from all Regions, or only from the Region in which the event data store is created",
        },
        {
          name: "--no-multi-region-enabled",
          description:
            "Specifies whether the event data store includes events from all Regions, or only from the Region in which the event data store is created",
        },
        {
          name: "--organization-enabled",
          description:
            "Specifies whether an event data store collects events logged for an organization in Organizations",
        },
        {
          name: "--no-organization-enabled",
          description:
            "Specifies whether an event data store collects events logged for an organization in Organizations",
        },
        {
          name: "--retention-period",
          description:
            "The retention period of the event data store, in days. If BillingMode is set to EXTENDABLE_RETENTION_PRICING, you can set a retention period of up to 3653 days, the equivalent of 10 years. If BillingMode is set to FIXED_RETENTION_PRICING, you can set a retention period of up to 2557 days, the equivalent of seven years. CloudTrail Lake determines whether to retain an event by checking if the eventTime of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events when the eventTime is older than 90 days.  If you plan to copy trail events to this event data store, we recommend that you consider both the age of the events that you want to copy as well as how long you want to keep the copied events in your event data store. For example, if you copy trail events that are 5 years old and specify a retention period of 7 years, the event data store will retain those events for two years",
          args: {
            name: "integer",
          },
        },
        {
          name: "--termination-protection-enabled",
          description:
            "Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled",
        },
        {
          name: "--no-termination-protection-enabled",
          description:
            "Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled",
        },
        {
          name: "--tags-list",
          description: "A list of tags",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by alias/, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.  Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.  CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see Using multi-Region keys in the Key Management Service Developer Guide. Examples:    alias/MyAliasName     arn:aws:kms:us-east-2:123456789012:alias/MyAliasName     arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012     12345678-1234-1234-1234-123456789012",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-ingestion",
          description:
            "Specifies whether the event data store should start ingesting live events. The default is true",
        },
        {
          name: "--no-start-ingestion",
          description:
            "Specifies whether the event data store should start ingesting live events. The default is true",
        },
        {
          name: "--billing-mode",
          description:
            "The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store. The following are the possible values:    EXTENDABLE_RETENTION_PRICING - This billing mode is generally recommended if you want a flexible retention period of up to 3653 days (about 10 years). The default retention period for this billing mode is 366 days.    FIXED_RETENTION_PRICING - This billing mode is recommended if you expect to ingest more than 25 TB of event data per month and need a retention period of up to 2557 days (about 7 years). The default retention period for this billing mode is 2557 days.   The default value is EXTENDABLE_RETENTION_PRICING. For more information about CloudTrail pricing, see CloudTrail Pricing and Managing CloudTrail Lake costs",
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
      name: "create-trail",
      description:
        "Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name of the trail. The name must meet the following requirements:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)   Start with a letter or number, and end with a letter or number   Be between 3 and 128 characters   Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are not valid.   Not be in IP address format (for example, 192.168.5.4)",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-name",
          description:
            "Specifies the name of the Amazon S3 bucket designated for publishing log files. For information about bucket naming rules, see Bucket naming rules in the Amazon Simple Storage Service User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-key-prefix",
          description:
            "Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-name",
          description:
            "Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-global-service-events",
          description:
            "Specifies whether the trail is publishing events from global services such as IAM to the log files",
        },
        {
          name: "--no-include-global-service-events",
          description:
            "Specifies whether the trail is publishing events from global services such as IAM to the log files",
        },
        {
          name: "--is-multi-region-trail",
          description:
            "Specifies whether the trail is created in the current Region or in all Regions. The default is false, which creates a trail only in the Region where you are signed in. As a best practice, consider creating trails that log events in all Regions",
        },
        {
          name: "--no-is-multi-region-trail",
          description:
            "Specifies whether the trail is created in the current Region or in all Regions. The default is false, which creates a trail only in the Region where you are signed in. As a best practice, consider creating trails that log events in all Regions",
        },
        {
          name: "--enable-log-file-validation",
          description:
            "Specifies whether log file integrity validation is enabled. The default is false.  When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail",
        },
        {
          name: "--no-enable-log-file-validation",
          description:
            "Specifies whether log file integrity validation is enabled. The default is false.  When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail",
        },
        {
          name: "--cloud-watch-logs-log-group-arn",
          description:
            "Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. You must use a log group that exists in your account. Not required unless you specify CloudWatchLogsRoleArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-logs-role-arn",
          description:
            "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by alias/, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier. CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see Using multi-Region keys in the Key Management Service Developer Guide. Examples:    alias/MyAliasName     arn:aws:kms:us-east-2:123456789012:alias/MyAliasName     arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012     12345678-1234-1234-1234-123456789012",
          args: {
            name: "string",
          },
        },
        {
          name: "--is-organization-trail",
          description:
            "Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account or delegated administrator account for an organization in Organizations",
        },
        {
          name: "--no-is-organization-trail",
          description:
            "Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account or delegated administrator account for an organization in Organizations",
        },
        {
          name: "--tags-list",
          description: "A list of tags",
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
      name: "delete-channel",
      description: "Deletes a channel",
      options: [
        {
          name: "--channel",
          description:
            "The ARN or the UUID value of the channel that you want to delete",
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
      name: "delete-dashboard",
      description:
        "Deletes the specified dashboard. You cannot delete a dashboard that has termination protection enabled",
      options: [
        {
          name: "--dashboard-id",
          description: "The name or ARN for the dashboard",
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
      name: "delete-event-data-store",
      description:
        "Disables the event data store specified by EventDataStore, which accepts an event data store ARN. After you run DeleteEventDataStore, the event data store enters a PENDING_DELETION state, and is automatically deleted after a wait period of seven days. TerminationProtectionEnabled must be set to False on the event data store and the FederationStatus must be DISABLED. You cannot delete an event data store if TerminationProtectionEnabled is True or the FederationStatus is ENABLED. After you run DeleteEventDataStore on an event data store, you cannot run ListQueries, DescribeQuery, or GetQueryResults on queries that are using an event data store in a PENDING_DELETION state. An event data store in the PENDING_DELETION state does not incur costs",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or the ID suffix of the ARN) of the event data store to delete",
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
        "Deletes the resource-based policy attached to the CloudTrail event data store, dashboard, or channel",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel you're deleting the resource-based policy from. Example event data store ARN format: arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE  Example dashboard ARN format: arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash  Example channel ARN format: arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890",
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
      name: "delete-trail",
      description:
        "Deletes a trail. This operation must be called from the Region in which the trail was created. DeleteTrail cannot be called on the shadow trails (replicated trails in other Regions) of a trail that is enabled in all Regions",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name or the CloudTrail ARN of the trail to be deleted. The following is the format of a trail ARN. arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
      name: "deregister-organization-delegated-admin",
      description:
        "Removes CloudTrail delegated administrator permissions from a member account in an organization",
      options: [
        {
          name: "--delegated-admin-account-id",
          description:
            "A delegated administrator account ID. This is a member account in an organization that is currently designated as a delegated administrator",
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
      name: "describe-query",
      description:
        "Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. If the query results were delivered to an S3 bucket, the response also provides the S3 URI and the delivery status. You must specify either QueryId or QueryAlias. Specifying the QueryAlias parameter returns information about the last query run for the alias. You can provide RefreshId along with QueryAlias to view the query results of a dashboard query for the specified RefreshId",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or the ID suffix of the ARN) of an event data store on which the specified query was run",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description: "The query ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-alias",
          description: "The alias that identifies a query template",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-id",
          description: "The ID of the dashboard refresh",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-data-store-owner-account-id",
          description: "The account ID of the event data store owner",
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
      name: "describe-trails",
      description:
        "Retrieves settings for one or more trails associated with the current Region for your account",
      options: [
        {
          name: "--trail-name-list",
          description:
            "Specifies a list of trail names, trail ARNs, or both, of the trails to describe. The format of a trail ARN is:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail  If an empty list is specified, information for the trail in the current Region is returned.   If an empty list is specified and IncludeShadowTrails is false, then information for all trails in the current Region is returned.   If an empty list is specified and IncludeShadowTrails is null or true, then information for all trails in the current Region and any associated shadow trails in other Regions is returned.    If one or more trail names are specified, information is returned only if the names match the names of trails belonging only to the current Region and current account. To return information about a trail in another Region, you must specify its trail ARN",
          args: {
            name: "list",
          },
        },
        {
          name: "--include-shadow-trails",
          description:
            "Specifies whether to include shadow trails in the response. A shadow trail is the replication in a Region of a trail that was created in a different Region, or in the case of an organization trail, the replication of an organization trail in member accounts. If you do not include shadow trails, organization trails in a member account and Region replication trails will not be returned. The default is true",
        },
        {
          name: "--no-include-shadow-trails",
          description:
            "Specifies whether to include shadow trails in the response. A shadow trail is the replication in a Region of a trail that was created in a different Region, or in the case of an organization trail, the replication of an organization trail in member accounts. If you do not include shadow trails, organization trails in a member account and Region replication trails will not be returned. The default is true",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disable-federation",
      description:
        "Disables Lake query federation on the specified event data store. When you disable federation, CloudTrail disables the integration with Glue, Lake Formation, and Amazon Athena. After disabling Lake query federation, you can no longer query your event data in Amazon Athena. No CloudTrail Lake data is deleted when you disable federation and you can continue to run queries in CloudTrail Lake",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or ID suffix of the ARN) of the event data store for which you want to disable Lake query federation",
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
      name: "enable-federation",
      description:
        "Enables Lake query federation on the specified event data store. Federating an event data store lets you view the metadata associated with the event data store in the Glue Data Catalog and run SQL queries against your event data using Amazon Athena. The table metadata stored in the Glue Data Catalog lets the Athena query engine know how to find, read, and process the data that you want to query. When you enable Lake query federation, CloudTrail creates a managed database named aws:cloudtrail (if the database doesn't already exist) and a managed federated table in the Glue Data Catalog. The event data store ID is used for the table name. CloudTrail registers the role ARN and event data store in Lake Formation, the service responsible for allowing fine-grained access control of the federated resources in the Glue Data Catalog. For more information about Lake query federation, see Federate an event data store",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or ID suffix of the ARN) of the event data store for which you want to enable Lake query federation",
          args: {
            name: "string",
          },
        },
        {
          name: "--federation-role-arn",
          description:
            "The ARN of the federation role to use for the event data store. Amazon Web Services services like Lake Formation use this federation role to access data for the federated event data store. The federation role must exist in your account and provide the required minimum permissions",
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
      name: "generate-query",
      description:
        'Generates a query from a natural language prompt. This operation uses generative artificial intelligence (generative AI) to produce a ready-to-use SQL query from the prompt.  The prompt can be a question or a statement about the event data in your event data store. For example, you can enter prompts like "What are my top errors in the past month?" and \u201cGive me a list of users that used SNS.\u201d The prompt must be in English. For information about limitations, permissions, and supported Regions, see Create CloudTrail Lake queries from natural language prompts in the CloudTrail  user guide.  Do not include any personally identifying, confidential, or sensitive information in your prompts. This feature uses generative AI large language models (LLMs); we recommend double-checking the LLM response',
      options: [
        {
          name: "--event-data-stores",
          description:
            "The ARN (or ID suffix of the ARN) of the event data store that you want to query. You can only specify one event data store",
          args: {
            name: "list",
          },
        },
        {
          name: "--prompt",
          description:
            "The prompt that you want to use to generate the query. The prompt must be in English. For example prompts, see Example prompts in the CloudTrail  user guide",
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
      name: "get-channel",
      description: "Returns information about a specific channel",
      options: [
        {
          name: "--channel",
          description: "The ARN or UUID of a channel",
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
      name: "get-dashboard",
      description: "Returns the specified dashboard",
      options: [
        {
          name: "--dashboard-id",
          description: "The name or ARN for the dashboard",
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
      name: "get-event-data-store",
      description:
        "Returns information about an event data store specified as either an ARN or the ID portion of the ARN",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or ID suffix of the ARN) of the event data store about which you want information",
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
      name: "get-event-selectors",
      description:
        "Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:   If your event selector includes read-only events, write-only events, or all events. This applies to management events, data events, and network activity events.   If your event selector includes management events.   If your event selector includes network activity events, the event sources for which you are logging network activity events.   If your event selector includes data events, the resources on which you are logging data events.   For more information about logging management, data, and network activity events, see the following topics in the CloudTrail User Guide:    Logging management events     Logging data events     Logging network activity events",
      options: [
        {
          name: "--trail-name",
          description:
            "Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)   Start with a letter or number, and end with a letter or number   Be between 3 and 128 characters   Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are not valid.   Not be in IP address format (for example, 192.168.5.4)   If you specify a trail ARN, it must be in the format:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
      name: "get-import",
      description: "Returns information about a specific import",
      options: [
        {
          name: "--import-id",
          description: "The ID for the import",
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
      name: "get-insight-selectors",
      description:
        "Describes the settings for the Insights event selectors that you configured for your trail or event data store. GetInsightSelectors shows if CloudTrail Insights event logging is enabled on the trail or event data store, and if it is, which Insights types are enabled. If you run GetInsightSelectors on a trail or event data store that does not have Insights events enabled, the operation throws the exception InsightNotEnabledException  Specify either the EventDataStore parameter to get Insights event selectors for an event data store, or the TrailName parameter to the get Insights event selectors for a trail. You cannot specify these parameters together. For more information, see Logging CloudTrail Insights events in the CloudTrail User Guide",
      options: [
        {
          name: "--trail-name",
          description:
            "Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)   Start with a letter or number, and end with a letter or number   Be between 3 and 128 characters   Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are not valid.   Not be in IP address format (for example, 192.168.5.4)   If you specify a trail ARN, it must be in the format:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail  You cannot use this parameter with the EventDataStore parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-data-store",
          description:
            "Specifies the ARN (or ID suffix of the ARN) of the event data store for which you want to get Insights selectors.  You cannot use this parameter with the TrailName parameter",
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
      name: "get-query-results",
      description:
        "Gets event data results of a query. You must specify the QueryID value returned by the StartQuery operation",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or ID suffix of the ARN) of the event data store against which the query was run",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description: "The ID of the query for which you want to get results",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token you can use to get the next page of query results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-query-results",
          description:
            "The maximum number of query results to display on a single page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--event-data-store-owner-account-id",
          description: "The account ID of the event data store owner",
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
      name: "get-resource-policy",
      description:
        "Retrieves the JSON text of the resource-based policy document attached to the CloudTrail event data store, dashboard, or channel",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy. Example event data store ARN format: arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE  Example dashboard ARN format: arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash  Example channel ARN format: arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890",
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
      name: "get-trail",
      description: "Returns settings information for a specified trail",
      options: [
        {
          name: "--name",
          description:
            "The name or the Amazon Resource Name (ARN) of the trail for which you want to retrieve settings information",
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
      name: "get-trail-status",
      description:
        "Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single Region. To return trail status from all Regions, you must call the operation on each Region",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name or the CloudTrail ARN of the trail for which you are requesting status. To get the status of a shadow trail (a replication of the trail in another Region), you must specify its ARN.  The following is the format of a trail ARN: arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail   If the trail is an organization trail and you are a member account in the organization in Organizations, you must provide the full ARN of that trail, and not just the name",
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
      name: "list-channels",
      description:
        "Lists the channels in the current account, and their source names",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of CloudTrail channels to display on a single page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters",
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
      name: "list-dashboards",
      description:
        "Returns information about all dashboards in the account, in the current Region",
      options: [
        {
          name: "--name-prefix",
          description: "Specify a name prefix to filter on",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Specify a dashboard type to filter on: CUSTOM or MANAGED",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token you can use to get the next page of dashboard results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of dashboards to display on a single page",
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
      name: "list-event-data-stores",
      description:
        "Returns information about all event data stores in the account, in the current Region",
      options: [
        {
          name: "--next-token",
          description:
            "A token you can use to get the next page of event data store results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of event data stores to display on a single page",
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
      name: "list-import-failures",
      description: "Returns a list of failures for the specified import",
      options: [
        {
          name: "--import-id",
          description: "The ID of the import",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of failures to display on a single page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token you can use to get the next page of import failures",
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
      name: "list-imports",
      description:
        "Returns information on all imports, or a select set of imports by ImportStatus or Destination",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of imports to display on a single page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--destination",
          description: "The ARN of the destination event data store",
          args: {
            name: "string",
          },
        },
        {
          name: "--import-status",
          description: "The status of the import",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token you can use to get the next page of import results",
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
      name: "list-insights-metric-data",
      description:
        "Returns Insights metrics data for trails that have enabled Insights. The request must include the EventSource, EventName, and InsightType parameters. If the InsightType is set to ApiErrorRateInsight, the request must also include the ErrorCode parameter. The following are the available time periods for ListInsightsMetricData. Each cutoff is inclusive.   Data points with a period of 60 seconds (1-minute) are available for 15 days.   Data points with a period of 300 seconds (5-minute) are available for 63 days.   Data points with a period of 3600 seconds (1 hour) are available for 90 days.   Access to the ListInsightsMetricData API operation is linked to the cloudtrail:LookupEvents action. To use this operation, you must have permissions to perform the cloudtrail:LookupEvents action",
      options: [
        {
          name: "--event-source",
          description:
            "The Amazon Web Services service to which the request was made, such as iam.amazonaws.com or s3.amazonaws.com",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-name",
          description:
            "The name of the event, typically the Amazon Web Services API on which unusual levels of activity were recorded",
          args: {
            name: "string",
          },
        },
        {
          name: "--insight-type",
          description:
            "The type of CloudTrail Insights event, which is either ApiCallRateInsight or ApiErrorRateInsight. The ApiCallRateInsight Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume. The ApiErrorRateInsight Insights type analyzes management API calls that result in error codes",
          args: {
            name: "string",
          },
        },
        {
          name: "--error-code",
          description:
            "Conditionally required if the InsightType parameter is set to ApiErrorRateInsight. If returning metrics for the ApiErrorRateInsight Insights type, this is the error to retrieve data for. For example, AccessDenied",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "Specifies, in UTC, the start time for time-series data. The value specified is inclusive; results include data points with the specified time stamp. The default is 90 days before the time of request",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "Specifies, in UTC, the end time for time-series data. The value specified is exclusive; results include data points up to the specified time stamp. The default is the time of request",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--period",
          description:
            "Granularity of data to retrieve, in seconds. Valid values are 60, 300, and 3600. If you specify any other value, you will get an error. The default is 3600 seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--data-type",
          description:
            "Type of data points to return. Valid values are NonZeroData and FillWithZeros. The default is NonZeroData",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of data points to return. Valid values are integers from 1 to 21600. The default value is 21600",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Returned if all datapoints can't be returned in a single call. For example, due to reaching MaxResults. Add this parameter to the request to continue retrieving results starting from the last evaluated point",
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
      name: "list-public-keys",
      description:
        "Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.  CloudTrail uses different private and public key pairs per Region. Each digest file is signed with a private key unique to its Region. When you validate a digest file from a specific Region, you must look in the same Region for its corresponding public key",
      options: [
        {
          name: "--start-time",
          description:
            "Optionally specifies, in UTC, the start of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used, and the current public key is returned",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "Optionally specifies, in UTC, the end of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description: "Reserved for future use",
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
      name: "list-queries",
      description:
        "Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for EventDataStore. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding StartTime and EndTime parameters, and a QueryStatus value. Valid values for QueryStatus include QUEUED, RUNNING, FINISHED, FAILED, TIMED_OUT, or CANCELLED",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or the ID suffix of the ARN) of an event data store on which queries were run",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A token you can use to get the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of queries to show on a page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--start-time",
          description:
            "Use with EndTime to bound a ListQueries request, and limit its results to only those queries run within a specified time period",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "Use with StartTime to bound a ListQueries request, and limit its results to only those queries run within a specified time period",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--query-status",
          description:
            "The status of queries that you want to return in results. Valid values for QueryStatus include QUEUED, RUNNING, FINISHED, FAILED, TIMED_OUT, or CANCELLED",
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
      description:
        "Lists the tags for the specified trails, event data stores, dashboards, or channels in the current Region",
      options: [
        {
          name: "--resource-id-list",
          description:
            "Specifies a list of trail, event data store, dashboard, or channel ARNs whose tags will be listed. The list has a limit of 20 ARNs.  Example trail ARN format: arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail  Example event data store ARN format: arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE  Example dashboard ARN format: arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash  Example channel ARN format: arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description: "Reserved for future use",
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
      name: "list-trails",
      description: "Lists trails that are in the current account",
      options: [
        {
          name: "--next-token",
          description:
            "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters",
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
      name: "lookup-events",
      description:
        "Looks up management events or CloudTrail Insights events that are captured by CloudTrail. You can look up events that occurred in a Region within the last 90 days.   LookupEvents returns recent Insights events for trails that enable Insights. To view Insights events for an event data store, you can run queries on your Insights event data store, and you can also view the Lake dashboard for Insights.  Lookup supports the following attributes for management events:   Amazon Web Services access key   Event ID   Event name   Event source   Read only   Resource name   Resource type   User name   Lookup supports the following attributes for Insights events:   Event ID   Event name   Event source   All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.  The rate of lookup requests is limited to two per second, per account, per Region. If this limit is exceeded, a throttling error occurs",
      options: [
        {
          name: "--lookup-attributes",
          description:
            "Contains a list of lookup attributes. Currently the list can contain only one item",
          args: {
            name: "list",
          },
        },
        {
          name: "--start-time",
          description:
            "Specifies that only events that occur after or at the specified time are returned. If the specified start time is after the specified end time, an error is returned",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "Specifies that only events that occur before or at the specified time are returned. If the specified end time is before the specified start time, an error is returned",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--event-category",
          description:
            "Specifies the event category. If you do not specify an event category, events of the category are not returned in the response. For example, if you do not specify insight as the value of EventCategory, no Insights events are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of events to return. Possible values are 1 through 50. The default is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters",
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
      name: "put-event-selectors",
      description:
        "Configures event selectors (also referred to as basic event selectors) or advanced event selectors for your trail. You can use either AdvancedEventSelectors or EventSelectors, but not both. If you apply AdvancedEventSelectors to a trail, any existing EventSelectors are overwritten. You can use AdvancedEventSelectors to log management events, data events for all resource types, and network activity events. You can use EventSelectors to log management events and data events for the following resource types:    AWS::DynamoDB::Table     AWS::Lambda::Function     AWS::S3::Object    You can't use EventSelectors to log network activity events. If you want your trail to log Insights events, be sure the event selector or advanced event selector enables logging of the Insights event types you want configured for your trail. For more information about logging Insights events, see Logging Insights events in the CloudTrail User Guide. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events or network activity events. When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. Example   You create an event selector for a trail and specify that you want to log write-only events.   The EC2 GetConsoleOutput and RunInstances API operations occur in your account.   CloudTrail evaluates whether the events match your event selectors.   The RunInstances is a write-only event and it matches your event selector. The trail logs the event.   The GetConsoleOutput is a read-only event that doesn't match your event selector. The trail doesn't log the event.    The PutEventSelectors operation must be called from the Region in which the trail was created; otherwise, an InvalidHomeRegionException exception is thrown. You can configure up to five event selectors for each trail. You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. For more information, see Logging management events, Logging data events, Logging network activity events, and Quotas in CloudTrail in the CloudTrail User Guide",
      options: [
        {
          name: "--trail-name",
          description:
            "Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)   Start with a letter or number, and end with a letter or number   Be between 3 and 128 characters   Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are not valid.   Not be in IP address format (for example, 192.168.5.4)   If you specify a trail ARN, it must be in the following format.  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-selectors",
          description:
            "Specifies the settings for your event selectors. You can use event selectors to log management events and data events for the following resource types:    AWS::DynamoDB::Table     AWS::Lambda::Function     AWS::S3::Object    You can't use event selectors to log network activity events. You can configure up to five event selectors for a trail. You can use either EventSelectors or AdvancedEventSelectors in a PutEventSelectors request, but not both. If you apply EventSelectors to a trail, any existing AdvancedEventSelectors are overwritten",
          args: {
            name: "list",
          },
        },
        {
          name: "--advanced-event-selectors",
          description:
            "Specifies the settings for advanced event selectors. You can use advanced event selectors to log management events, data events for all resource types, and network activity events. You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either AdvancedEventSelectors or EventSelectors, but not both. If you apply AdvancedEventSelectors to a trail, any existing EventSelectors are overwritten. For more information about advanced event selectors, see Logging data events and Logging network activity events in the CloudTrail User Guide",
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
      name: "put-insight-selectors",
      description:
        "Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail or event data store. You also use PutInsightSelectors to turn off Insights event logging, by passing an empty list of Insights types. The valid Insights event types are ApiErrorRateInsight and ApiCallRateInsight. To enable Insights on an event data store, you must specify the ARNs (or ID suffix of the ARNs) for the source event data store (EventDataStore) and the destination event data store (InsightsDestination). The source event data store logs management events and enables Insights. The destination event data store logs Insights events based upon the management event activity of the source event data store. The source and destination event data stores must belong to the same Amazon Web Services account. To log Insights events for a trail, you must specify the name (TrailName) of the CloudTrail trail for which you want to change or add Insights selectors. To log CloudTrail Insights events on API call volume, the trail or event data store must log write management events. To log CloudTrail Insights events on API error rate, the trail or event data store must log read or write management events. You can call GetEventSelectors on a trail to check whether the trail logs management events. You can call GetEventDataStore on an event data store to check whether the event data store logs management events. For more information, see Logging CloudTrail Insights events in the CloudTrail User Guide",
      options: [
        {
          name: "--trail-name",
          description:
            "The name of the CloudTrail trail for which you want to change or add Insights selectors. You cannot use this parameter with the EventDataStore and InsightsDestination parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--insight-selectors",
          description:
            "A JSON string that contains the Insights types you want to log on a trail or event data store. ApiCallRateInsight and ApiErrorRateInsight are valid Insight types. The ApiCallRateInsight Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume. The ApiErrorRateInsight Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful",
          args: {
            name: "list",
          },
        },
        {
          name: "--event-data-store",
          description:
            "The ARN (or ID suffix of the ARN) of the source event data store for which you want to change or add Insights selectors. To enable Insights on an event data store, you must provide both the EventDataStore and InsightsDestination parameters. You cannot use this parameter with the TrailName parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--insights-destination",
          description:
            "The ARN (or ID suffix of the ARN) of the destination event data store that logs Insights events. To enable Insights on an event data store, you must provide both the EventDataStore and InsightsDestination parameters.  You cannot use this parameter with the TrailName parameter",
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
        "Attaches a resource-based permission policy to a CloudTrail event data store, dashboard, or channel. For more information about resource-based policies, see CloudTrail resource-based policy examples in the CloudTrail User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy. Example event data store ARN format: arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE  Example dashboard ARN format: arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash  Example channel ARN format: arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-policy",
          description:
            "A JSON-formatted string for an Amazon Web Services resource-based policy.   For example resource-based policies, see CloudTrail resource-based policy examples in the CloudTrail User Guide",
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
      name: "register-organization-delegated-admin",
      description:
        "Registers an organization\u2019s member account as the CloudTrail delegated administrator",
      options: [
        {
          name: "--member-account-id",
          description:
            "An organization member account ID that you want to designate as a delegated administrator",
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
      name: "remove-tags",
      description:
        "Removes the specified tags from a trail, event data store, dashboard, or channel",
      options: [
        {
          name: "--resource-id",
          description:
            "Specifies the ARN of the trail, event data store, dashboard, or channel from which tags should be removed.  Example trail ARN format: arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail  Example event data store ARN format: arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE  Example dashboard ARN format: arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash  Example channel ARN format: arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags-list",
          description: "Specifies a list of tags to be removed",
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
      name: "restore-event-data-store",
      description:
        "Restores a deleted event data store specified by EventDataStore, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or the ID suffix of the ARN) of the event data store that you want to restore",
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
      name: "start-dashboard-refresh",
      description:
        "Starts a refresh of the specified dashboard.   Each time a dashboard is refreshed, CloudTrail runs queries to populate the dashboard's widgets. CloudTrail must be granted permissions to run the StartQuery operation on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to each event data store. For more information, see Example: Allow CloudTrail to run queries to populate a dashboard in the CloudTrail User Guide",
      options: [
        {
          name: "--dashboard-id",
          description: "The name or ARN of the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-parameter-values",
          description:
            "The query parameter values for the dashboard  For custom dashboards, the following query parameters are valid: $StartTime$, $EndTime$, and $Period$. For managed dashboards, the following query parameters are valid: $StartTime$, $EndTime$, $Period$, and $EventDataStoreId$. The $EventDataStoreId$ query parameter is required",
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
      name: "start-event-data-store-ingestion",
      description:
        "Starts the ingestion of live events on an event data store specified as either an ARN or the ID portion of the ARN. To start ingestion, the event data store Status must be STOPPED_INGESTION and the eventCategory must be Management, Data, NetworkActivity, or ConfigurationItem",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or ID suffix of the ARN) of the event data store for which you want to start ingestion",
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
      name: "start-import",
      description:
        "Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's CloudTrail prefix and the prefixes inside the CloudTrail prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the S3LocationUri. For more considerations about importing trail events, see Considerations for copying trail events in the CloudTrail User Guide.   When you start a new import, the Destinations and ImportSource parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see Controlling ownership of objects and disabling ACLs for your bucket.   When you retry an import, the ImportID parameter is required.    If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization",
      options: [
        {
          name: "--destinations",
          description:
            "The ARN of the destination event data store. Use this parameter for a new import",
          args: {
            name: "list",
          },
        },
        {
          name: "--import-source",
          description:
            "The source S3 bucket for the import. Use this parameter for a new import",
          args: {
            name: "structure",
          },
        },
        {
          name: "--start-event-time",
          description:
            "Use with EndEventTime to bound a StartImport request, and limit imported trail events to only those events logged within a specified time period. When you specify a time range, CloudTrail checks the prefix and log file names to verify the names contain a date between the specified StartEventTime and EndEventTime before attempting to import events",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-event-time",
          description:
            "Use with StartEventTime to bound a StartImport request, and limit imported trail events to only those events logged within a specified time period. When you specify a time range, CloudTrail checks the prefix and log file names to verify the names contain a date between the specified StartEventTime and EndEventTime before attempting to import events",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--import-id",
          description:
            "The ID of the import. Use this parameter when you are retrying an import",
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
      name: "start-logging",
      description:
        "Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all Regions, this operation must be called from the Region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other Regions) of a trail that is enabled in all Regions",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name or the CloudTrail ARN of the trail for which CloudTrail logs Amazon Web Services API calls. The following is the format of a trail ARN.  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
      name: "start-query",
      description:
        "Starts a CloudTrail Lake query. Use the QueryStatement parameter to provide your SQL query, enclosed in single quotation marks. Use the optional DeliveryS3Uri parameter to deliver the query results to an S3 bucket.  StartQuery requires you specify either the QueryStatement parameter, or a QueryAlias and any QueryParameters. In the current release, the QueryAlias and QueryParameters parameters are used only for the queries that populate the CloudTrail Lake dashboards",
      options: [
        {
          name: "--query-statement",
          description: "The SQL code of your query",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-s3-uri",
          description:
            "The URI for the S3 bucket where CloudTrail delivers the query results",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-alias",
          description: "The alias that identifies a query template",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-parameters",
          description: "The query parameters for the specified QueryAlias",
          args: {
            name: "list",
          },
        },
        {
          name: "--event-data-store-owner-account-id",
          description: "The account ID of the event data store owner",
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
      name: "stop-event-data-store-ingestion",
      description:
        "Stops the ingestion of live events on an event data store specified as either an ARN or the ID portion of the ARN. To stop ingestion, the event data store Status must be ENABLED and the eventCategory must be Management, Data, NetworkActivity, or ConfigurationItem",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or ID suffix of the ARN) of the event data store for which you want to stop ingestion",
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
      name: "stop-import",
      description: "Stops a specified import",
      options: [
        {
          name: "--import-id",
          description: "The ID of the import",
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
      name: "stop-logging",
      description:
        "Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all Regions, this operation must be called from the Region in which the trail was created, or an InvalidHomeRegionException will occur. This operation cannot be called on the shadow trails (replicated trails in other Regions) of a trail enabled in all Regions",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name or the CloudTrail ARN of the trail for which CloudTrail will stop logging Amazon Web Services API calls. The following is the format of a trail ARN.  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
      name: "update-channel",
      description:
        "Updates a channel specified by a required channel ARN or UUID",
      options: [
        {
          name: "--channel",
          description:
            "The ARN or ID (the ARN suffix) of the channel that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--destinations",
          description:
            "The ARNs of event data stores that you want to log events arriving through the channel",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "Changes the name of the channel",
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
      name: "update-dashboard",
      description:
        "Updates the specified dashboard.   To set a refresh schedule, CloudTrail must be granted permissions to run the StartDashboardRefresh operation to refresh the dashboard on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to the dashboard. For more information, see  Resource-based policy example for a dashboard in the CloudTrail User Guide.   CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the StartQuery operation on your behalf. To provide permissions, run the PutResourcePolicy operation to attach a resource-based policy to each event data store. For more information, see Example: Allow CloudTrail to run queries to populate a dashboard in the CloudTrail User Guide",
      options: [
        {
          name: "--dashboard-id",
          description: "The name or ARN of the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--widgets",
          description:
            "An array of widgets for the dashboard. A custom dashboard can have a maximum of 10 widgets.  To add new widgets, pass in an array that includes the existing widgets along with any new widgets. Run the GetDashboard operation to get the list of widgets for the dashboard. To remove widgets, pass in an array that includes the existing widgets minus the widgets you want removed",
          args: {
            name: "list",
          },
        },
        {
          name: "--refresh-schedule",
          description: "The refresh schedule configuration for the dashboard",
          args: {
            name: "structure",
          },
        },
        {
          name: "--termination-protection-enabled",
          description:
            "Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled",
        },
        {
          name: "--no-termination-protection-enabled",
          description:
            "Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-event-data-store",
      description:
        "Updates an event data store. The required EventDataStore value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. RetentionPeriod is in days, and valid values are integers between 7 and 3653 if the BillingMode is set to EXTENDABLE_RETENTION_PRICING, or between 7 and 2557 if BillingMode is set to FIXED_RETENTION_PRICING. By default, TerminationProtection is enabled. For event data stores for CloudTrail events, AdvancedEventSelectors includes or excludes management, data, or network activity events in your event data store. For more information about AdvancedEventSelectors, see AdvancedEventSelectors.  For event data stores for CloudTrail Insights events, Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, AdvancedEventSelectors includes events of that type in your event data store",
      options: [
        {
          name: "--event-data-store",
          description:
            "The ARN (or the ID suffix of the ARN) of the event data store that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The event data store name",
          args: {
            name: "string",
          },
        },
        {
          name: "--advanced-event-selectors",
          description:
            "The advanced event selectors used to select events for the event data store. You can configure up to five advanced event selectors for each event data store",
          args: {
            name: "list",
          },
        },
        {
          name: "--multi-region-enabled",
          description:
            "Specifies whether an event data store collects events from all Regions, or only from the Region in which it was created",
        },
        {
          name: "--no-multi-region-enabled",
          description:
            "Specifies whether an event data store collects events from all Regions, or only from the Region in which it was created",
        },
        {
          name: "--organization-enabled",
          description:
            "Specifies whether an event data store collects events logged for an organization in Organizations.  Only the management account for the organization can convert an organization event data store to a non-organization event data store, or convert a non-organization event data store to an organization event data store",
        },
        {
          name: "--no-organization-enabled",
          description:
            "Specifies whether an event data store collects events logged for an organization in Organizations.  Only the management account for the organization can convert an organization event data store to a non-organization event data store, or convert a non-organization event data store to an organization event data store",
        },
        {
          name: "--retention-period",
          description:
            "The retention period of the event data store, in days. If BillingMode is set to EXTENDABLE_RETENTION_PRICING, you can set a retention period of up to 3653 days, the equivalent of 10 years. If BillingMode is set to FIXED_RETENTION_PRICING, you can set a retention period of up to 2557 days, the equivalent of seven years. CloudTrail Lake determines whether to retain an event by checking if the eventTime of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events when the eventTime is older than 90 days.  If you decrease the retention period of an event data store, CloudTrail will remove any events with an eventTime older than the new retention period. For example, if the previous retention period was 365 days and you decrease it to 100 days, CloudTrail will remove events with an eventTime older than 100 days",
          args: {
            name: "integer",
          },
        },
        {
          name: "--termination-protection-enabled",
          description:
            "Indicates that termination protection is enabled and the event data store cannot be automatically deleted",
        },
        {
          name: "--no-termination-protection-enabled",
          description:
            "Indicates that termination protection is enabled and the event data store cannot be automatically deleted",
        },
        {
          name: "--kms-key-id",
          description:
            "Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by alias/, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.  Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.  CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see Using multi-Region keys in the Key Management Service Developer Guide. Examples:    alias/MyAliasName     arn:aws:kms:us-east-2:123456789012:alias/MyAliasName     arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012     12345678-1234-1234-1234-123456789012",
          args: {
            name: "string",
          },
        },
        {
          name: "--billing-mode",
          description:
            "You can't change the billing mode from EXTENDABLE_RETENTION_PRICING to FIXED_RETENTION_PRICING. If BillingMode is set to EXTENDABLE_RETENTION_PRICING and you want to use FIXED_RETENTION_PRICING instead, you'll need to stop ingestion on the event data store and create a new event data store that uses FIXED_RETENTION_PRICING.  The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store. The following are the possible values:    EXTENDABLE_RETENTION_PRICING - This billing mode is generally recommended if you want a flexible retention period of up to 3653 days (about 10 years). The default retention period for this billing mode is 366 days.    FIXED_RETENTION_PRICING - This billing mode is recommended if you expect to ingest more than 25 TB of event data per month and need a retention period of up to 2557 days (about 7 years). The default retention period for this billing mode is 2557 days.   For more information about CloudTrail pricing, see CloudTrail Pricing and Managing CloudTrail Lake costs",
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
      name: "update-trail",
      description:
        "Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. UpdateTrail must be called from the Region in which the trail was created; otherwise, an InvalidHomeRegionException is thrown",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name of the trail or trail ARN. If Name is a trail name, the string must meet the following requirements:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)   Start with a letter or number, and end with a letter or number   Be between 3 and 128 characters   Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are not valid.   Not be in IP address format (for example, 192.168.5.4)   If Name is a trail ARN, it must be in the following format.  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-name",
          description:
            "Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket naming rules",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-key-prefix",
          description:
            "Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-name",
          description:
            "Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-global-service-events",
          description:
            "Specifies whether the trail is publishing events from global services such as IAM to the log files",
        },
        {
          name: "--no-include-global-service-events",
          description:
            "Specifies whether the trail is publishing events from global services such as IAM to the log files",
        },
        {
          name: "--is-multi-region-trail",
          description:
            "Specifies whether the trail applies only to the current Region or to all Regions. The default is false. If the trail exists only in the current Region and this value is set to true, shadow trails (replications of the trail) will be created in the other Regions. If the trail exists in all Regions and this value is set to false, the trail will remain in the Region where it was created, and its shadow trails in other Regions will be deleted. As a best practice, consider using trails that log events in all Regions",
        },
        {
          name: "--no-is-multi-region-trail",
          description:
            "Specifies whether the trail applies only to the current Region or to all Regions. The default is false. If the trail exists only in the current Region and this value is set to true, shadow trails (replications of the trail) will be created in the other Regions. If the trail exists in all Regions and this value is set to false, the trail will remain in the Region where it was created, and its shadow trails in other Regions will be deleted. As a best practice, consider using trails that log events in all Regions",
        },
        {
          name: "--enable-log-file-validation",
          description:
            "Specifies whether log file validation is enabled. The default is false.  When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail",
        },
        {
          name: "--no-enable-log-file-validation",
          description:
            "Specifies whether log file validation is enabled. The default is false.  When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail",
        },
        {
          name: "--cloud-watch-logs-log-group-arn",
          description:
            "Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered. You must use a log group that exists in your account. Not required unless you specify CloudWatchLogsRoleArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-logs-role-arn",
          description:
            "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            'Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier. CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see Using multi-Region keys in the Key Management Service Developer Guide. Examples:   alias/MyAliasName   arn:aws:kms:us-east-2:123456789012:alias/MyAliasName   arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012   12345678-1234-1234-1234-123456789012',
          args: {
            name: "string",
          },
        },
        {
          name: "--is-organization-trail",
          description:
            "Specifies whether the trail is applied to all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account for an organization in Organizations. If the trail is not an organization trail and this is set to true, the trail will be created in all Amazon Web Services accounts that belong to the organization. If the trail is an organization trail and this is set to false, the trail will remain in the current Amazon Web Services account but be deleted from all member accounts in the organization.  Only the management account for the organization can convert an organization trail to a non-organization trail, or convert a non-organization trail to an organization trail",
        },
        {
          name: "--no-is-organization-trail",
          description:
            "Specifies whether the trail is applied to all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account for an organization in Organizations. If the trail is not an organization trail and this is set to true, the trail will be created in all Amazon Web Services accounts that belong to the organization. If the trail is an organization trail and this is set to false, the trail will remain in the current Amazon Web Services account but be deleted from all member accounts in the organization.  Only the management account for the organization can convert an organization trail to a non-organization trail, or convert a non-organization trail to an organization trail",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-subscription",
      description:
        "Creates and configures the AWS resources necessary to use CloudTrail, creates a trail using those resources, and turns on logging",
      options: [
        {
          name: "--name",
          description: "Cloudtrail name",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-new-bucket",
          description: "Create a new S3 bucket with this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-use-bucket",
          description: "Use an existing S3 bucket with this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix",
          description: "S3 object prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-new-topic",
          description: "Create a new SNS topic with this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-global-service-events",
          description: "Whether to include global service events",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-custom-policy",
          description: "Custom S3 policy template or URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-custom-policy",
          description: "Custom SNS policy template or URL",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "update-subscription",
      description:
        "Updates any of the trail configuration settings, and creates and configures any new AWS resources specified",
      options: [
        {
          name: "--name",
          description: "Cloudtrail name",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-new-bucket",
          description: "Create a new S3 bucket with this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-use-bucket",
          description: "Use an existing S3 bucket with this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix",
          description: "S3 object prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-new-topic",
          description: "Create a new SNS topic with this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-global-service-events",
          description: "Whether to include global service events",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-custom-policy",
          description: "Custom S3 policy template or URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-custom-policy",
          description: "Custom SNS policy template or URL",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "validate-logs",
      description:
        "Validates CloudTrail logs for a given period of time.\n\n    This command uses the digest files delivered to your S3 bucket to perform\n    the validation.\n\n    The AWS CLI allows you to detect the following types of changes:\n\n    - Modification or deletion of CloudTrail log files.\n    - Modification or deletion of CloudTrail digest files.\n\n    To validate log files with the AWS CLI, the following preconditions must\n    be met:\n\n    - You must have online connectivity to AWS.\n    - You must have read access to the S3 bucket that contains the digest and\n      log files.\n    - The digest and log files must not have been moved from the original S3\n      location where CloudTrail delivered them.\n    - For organization trails you must have access to describe-organization to\n      validate digest files\n\n    When you disable Log File Validation, the chain of digest files is broken\n    after one hour. CloudTrail will not digest log files that were delivered\n    during a period in which the Log File Validation feature was disabled.\n    For example, if you enable Log File Validation on January 1, disable it\n    on January 2, and re-enable it on January 10, digest files will not be\n    created for the log files delivered from January 3 to January 9. The same\n    applies whenever you stop CloudTrail logging or delete a trail.\n\n    .. note::\n\n        Log files that have been downloaded to local disk cannot be validated\n        with the AWS CLI. The CLI will download all log files each time this\n        command is executed.\n\n    .. note::\n\n        This command requires that the role executing the command has\n        permission to call ListObjects, GetObject, and GetBucketLocation for\n        each bucket referenced by the trail",
      options: [
        {
          name: "--trail-arn",
          description: "Specifies the ARN of the trail to be validated",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            'Specifies that log files delivered on or after the specified UTC timestamp value will be validated. Example: "2015-01-08T05:21:42Z"',
          args: {
            name: "string",
          },
        },
        {
          name: "--end-time",
          description:
            'Optionally specifies that log files delivered on or before the specified UTC timestamp value will be validated. The default value is the current time. Example: "2015-01-08T12:31:41Z"',
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket",
          description:
            "Optionally specifies the S3 bucket where the digest files are stored. If a bucket name is not specified, the CLI will retrieve it by calling describe_trails",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix",
          description:
            "Optionally specifies the optional S3 prefix where the digest files are stored. If not specified, the CLI will determine the prefix automatically by calling describe_trails",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description:
            "Optionally specifies the account for validating logs. This parameter is needed for organization trails for validating logs for specific account inside an organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--verbose",
          description: "Display verbose log validation information",
        },
      ],
    },
  ],
};
export default completionSpec;
