const completionSpec: Fig.Spec = {
  name: "cloudtrail",
  description:
    "AWS CloudTrail This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail. CloudTrail is a web service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the AWS API call, the source IP address, the request parameters, and the response elements returned by the service.  As an alternative to the API, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWSCloudTrail. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For information about the AWS SDKs, including how to download and install them, see the Tools for Amazon Web Services page.  See the AWS CloudTrail User Guide for information about the data that is included with each AWS API call listed in the log files",
  subcommands: [
    {
      name: "add-tags",
      description:
        "Adds one or more tags to a trail, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique for a trail; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail that applies to all AWS Regions only from the Region in which the trail was created (also known as its home region)",
      options: [
        {
          name: "--resource-id",
          description:
            "Specifies the ARN of the trail to which one or more tags will be added. The format of a trail ARN is:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags-list",
          description:
            "Contains a list of CloudTrail tags, up to a limit of 50",
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
      name: "create-trail",
      description:
        "Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name of the trail. The name must meet the following requirements:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)   Start with a letter or number, and end with a letter or number   Be between 3 and 128 characters   Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are invalid.   Not be in IP address format (for example, 192.168.5.4)",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-name",
          description:
            "Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements",
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
            "Specifies whether the trail is created in the current region or in all regions. The default is false, which creates a trail only in the region where you are signed in. As a best practice, consider creating trails that log events in all regions",
        },
        {
          name: "--no-is-multi-region-trail",
          description:
            "Specifies whether the trail is created in the current region or in all regions. The default is false, which creates a trail only in the region where you are signed in. As a best practice, consider creating trails that log events in all regions",
        },
        {
          name: "--enable-log-file-validation",
          description:
            "Specifies whether log file integrity validation is enabled. The default is false.  When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail",
        },
        {
          name: "--no-enable-log-file-validation",
          description:
            "Specifies whether log file integrity validation is enabled. The default is false.  When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail",
        },
        {
          name: "--cloud-watch-logs-log-group-arn",
          description:
            "Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-logs-role-arn",
          description:
            "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            'Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier. Examples:   alias/MyAliasName   arn:aws:kms:us-east-2:123456789012:alias/MyAliasName   arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012   12345678-1234-1234-1234-123456789012',
          args: {
            name: "string",
          },
        },
        {
          name: "--is-organization-trail",
          description:
            "Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations",
        },
        {
          name: "--no-is-organization-trail",
          description:
            "Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations",
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
      name: "delete-trail",
      description:
        "Deletes a trail. This operation must be called from the region in which the trail was created. DeleteTrail cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name or the CloudTrail ARN of the trail to be deleted. The format of a trail ARN is: arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
        "Retrieves settings for one or more trails associated with the current region for your account",
      options: [
        {
          name: "--trail-name-list",
          description:
            "Specifies a list of trail names, trail ARNs, or both, of the trails to describe. The format of a trail ARN is:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail  If an empty list is specified, information for the trail in the current region is returned.   If an empty list is specified and IncludeShadowTrails is false, then information for all trails in the current region is returned.   If an empty list is specified and IncludeShadowTrails is null or true, then information for all trails in the current region and any associated shadow trails in other regions is returned.    If one or more trail names are specified, information is returned only if the names match the names of trails belonging only to the current region. To return information about a trail in another region, you must specify its trail ARN",
          args: {
            name: "list",
          },
        },
        {
          name: "--include-shadow-trails",
          description:
            "Specifies whether to include shadow trails in the response. A shadow trail is the replication in a region of a trail that was created in a different region, or in the case of an organization trail, the replication of an organization trail in member accounts. If you do not include shadow trails, organization trails in a member account and region replication trails will not be returned. The default is true",
        },
        {
          name: "--no-include-shadow-trails",
          description:
            "Specifies whether to include shadow trails in the response. A shadow trail is the replication in a region of a trail that was created in a different region, or in the case of an organization trail, the replication of an organization trail in member accounts. If you do not include shadow trails, organization trails in a member account and region replication trails will not be returned. The default is true",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:   If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.   If your event selector includes management events.   If your event selector includes data events, the Amazon S3 objects or AWS Lambda functions that you are logging for data events.   For more information, see Logging Data and Management Events for Trails  in the AWS CloudTrail User Guide",
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
      name: "get-insight-selectors",
      description:
        "Describes the settings for the Insights event selectors that you configured for your trail. GetInsightSelectors shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run GetInsightSelectors on a trail that does not have Insights events enabled, the operation throws the exception InsightNotEnabledException  For more information, see Logging CloudTrail Insights Events for Trails  in the AWS CloudTrail User Guide",
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
        "Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name or the CloudTrail ARN of the trail for which you are requesting status. To get the status of a shadow trail (a replication of the trail in another region), you must specify its ARN. The format of a trail ARN is:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
        "Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.  CloudTrail uses different private/public key pairs per region. Each digest file is signed with a private key unique to its region. Therefore, when you validate a digest file from a particular region, you must look in the same region for its corresponding public key",
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
      name: "list-tags",
      description: "Lists the tags for the trail in the current region",
      options: [
        {
          name: "--resource-id-list",
          description:
            "Specifies a list of trail ARNs whose tags will be listed. The list has a limit of 20 ARNs. The format of a trail ARN is:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
            "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters",
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
        "Looks up management events or CloudTrail Insights events that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:   AWS access key   Event ID   Event name   Event source   Read only   Resource name   Resource type   User name   Lookup supports the following attributes for Insights events:   Event ID   Event name   Event source   All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.  The rate of lookup requests is limited to two per second, per account, per region. If this limit is exceeded, a throttling error occurs",
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
            "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters",
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
        "Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.  Example   You create an event selector for a trail and specify that you want write-only events.   The EC2 GetConsoleOutput and RunInstances API operations occur in your account.   CloudTrail evaluates whether the events match your event selectors.   The RunInstances is a write-only event and it matches your event selector. The trail logs the event.   The GetConsoleOutput is a read-only event that doesn't match your event selector. The trail doesn't log the event.    The PutEventSelectors operation must be called from the region in which the trail was created; otherwise, an InvalidHomeRegionException exception is thrown. You can configure up to five event selectors for each trail. For more information, see Logging data and management events for trails  and Quotas in AWS CloudTrail in the AWS CloudTrail User Guide. You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either AdvancedEventSelectors or EventSelectors, but not both. If you apply AdvancedEventSelectors to a trail, any existing EventSelectors are overwritten. For more information about advanced event selectors, see Logging data events for trails in the AWS CloudTrail User Guide",
      options: [
        {
          name: "--trail-name",
          description:
            "Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)   Start with a letter or number, and end with a letter or number   Be between 3 and 128 characters   Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are invalid.   Not be in IP address format (for example, 192.168.5.4)   If you specify a trail ARN, it must be in the format:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-selectors",
          description:
            "Specifies the settings for your event selectors. You can configure up to five event selectors for a trail. You can use either EventSelectors or AdvancedEventSelectors in a PutEventSelectors request, but not both. If you apply EventSelectors to a trail, any existing AdvancedEventSelectors are overwritten",
          args: {
            name: "list",
          },
        },
        {
          name: "--advanced-event-selectors",
          description:
            "Specifies the settings for advanced event selectors. You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either AdvancedEventSelectors or EventSelectors, but not both. If you apply AdvancedEventSelectors to a trail, any existing EventSelectors are overwritten. For more information about advanced event selectors, see Logging data events for trails in the AWS CloudTrail User Guide",
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
        "Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use PutInsightSelectors to turn off Insights event logging, by passing an empty list of insight types. In this release, only ApiCallRateInsight is supported as an Insights selector",
      options: [
        {
          name: "--trail-name",
          description:
            "The name of the CloudTrail trail for which you want to change or add Insights selectors",
          args: {
            name: "string",
          },
        },
        {
          name: "--insight-selectors",
          description:
            "A JSON string that contains the insight types you want to log on a trail. In this release, only ApiCallRateInsight is supported as an insight type",
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
      name: "remove-tags",
      description: "Removes the specified tags from a trail",
      options: [
        {
          name: "--resource-id",
          description:
            "Specifies the ARN of the trail from which tags should be removed. The format of a trail ARN is:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
      name: "start-logging",
      description:
        "Starts the recording of AWS API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name or the CloudTrail ARN of the trail for which CloudTrail logs AWS API calls. The format of a trail ARN is:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
        "Suspends the recording of AWS API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an InvalidHomeRegionException will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name or the CloudTrail ARN of the trail for which CloudTrail will stop logging AWS API calls. The format of a trail ARN is:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
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
        "Updates the settings that specify delivery of log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. UpdateTrail must be called from the region in which the trail was created; otherwise, an InvalidHomeRegionException is thrown",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name of the trail or trail ARN. If Name is a trail name, the string must meet the following requirements:   Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)   Start with a letter or number, and end with a letter or number   Be between 3 and 128 characters   Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are invalid.   Not be in IP address format (for example, 192.168.5.4)   If Name is a trail ARN, it must be in the format:  arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-name",
          description:
            "Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements",
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
            "Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions",
        },
        {
          name: "--no-is-multi-region-trail",
          description:
            "Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions",
        },
        {
          name: "--enable-log-file-validation",
          description:
            "Specifies whether log file validation is enabled. The default is false.  When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail",
        },
        {
          name: "--no-enable-log-file-validation",
          description:
            "Specifies whether log file validation is enabled. The default is false.  When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail",
        },
        {
          name: "--cloud-watch-logs-log-group-arn",
          description:
            "Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-logs-role-arn",
          description:
            "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            'Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier. Examples:   alias/MyAliasName   arn:aws:kms:us-east-2:123456789012:alias/MyAliasName   arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012   12345678-1234-1234-1234-123456789012',
          args: {
            name: "string",
          },
        },
        {
          name: "--is-organization-trail",
          description:
            "Specifies whether the trail is applied to all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations. If the trail is not an organization trail and this is set to true, the trail will be created in all AWS accounts that belong to the organization. If the trail is an organization trail and this is set to false, the trail will remain in the current AWS account but be deleted from all member accounts in the organization",
        },
        {
          name: "--no-is-organization-trail",
          description:
            "Specifies whether the trail is applied to all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations. If the trail is not an organization trail and this is set to true, the trail will be created in all AWS accounts that belong to the organization. If the trail is an organization trail and this is set to false, the trail will remain in the current AWS account but be deleted from all member accounts in the organization",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "\n    Validates CloudTrail logs for a given period of time.\n\n    This command uses the digest files delivered to your S3 bucket to perform\n    the validation.\n\n    The AWS CLI allows you to detect the following types of changes:\n\n    - Modification or deletion of CloudTrail log files.\n    - Modification or deletion of CloudTrail digest files.\n\n    To validate log files with the AWS CLI, the following preconditions must\n    be met:\n\n    - You must have online connectivity to AWS.\n    - You must have read access to the S3 bucket that contains the digest and\n      log files.\n    - The digest and log files must not have been moved from the original S3\n      location where CloudTrail delivered them.\n    - For organization trails you must have access to describe-organization to\n      validate digest files\n\n    When you disable Log File Validation, the chain of digest files is broken\n    after one hour. CloudTrail will not digest log files that were delivered\n    during a period in which the Log File Validation feature was disabled.\n    For example, if you enable Log File Validation on January 1, disable it\n    on January 2, and re-enable it on January 10, digest files will not be\n    created for the log files delivered from January 3 to January 9. The same\n    applies whenever you stop CloudTrail logging or delete a trail.\n\n    .. note::\n\n        Log files that have been downloaded to local disk cannot be validated\n        with the AWS CLI. The CLI will download all log files each time this\n        command is executed.\n\n    .. note::\n\n        This command requires that the role executing the command has\n        permission to call ListObjects, GetObject, and GetBucketLocation for\n        each bucket referenced by the trail.\n\n",
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
