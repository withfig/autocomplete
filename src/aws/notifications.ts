const completionSpec: Fig.Spec = {
  name: "notifications",
  description:
    "The AWS User Notifications API Reference provides descriptions, API request parameters, and the JSON response for each of the User Notification API actions. User Notification control APIs are currently available in US East (Virginia) - us-east-1.  GetNotificationEvent and ListNotificationEvents APIs are currently available in commercial partition Regions and only return notifications stored in the same Region in which they're called. The User Notifications console can only be used in US East (Virginia). Your data however, is stored in each Region chosen as a notification hub in addition to US East (Virginia)",
  subcommands: [
    {
      name: "associate-channel",
      description:
        "Associates a delivery Channel with a particular NotificationConfiguration. Supported Channels include AWS Chatbot, the AWS Console Mobile Application, and emails (notifications-contacts)",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the Channel to associate with the NotificationConfiguration. Supported ARNs include AWS Chatbot, the Console Mobile Application, and notifications-contacts",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-configuration-arn",
          description:
            "The ARN of the NotificationConfiguration to associate with the Channel",
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
      name: "create-event-rule",
      description:
        "Creates an EventRule that is associated with a specified Notification Configuration",
      options: [
        {
          name: "--notification-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the NotificationConfiguration associated with this EventRule",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description:
            "The matched event source. Must match one of the valid EventBridge sources. Only AWS service sourced events are supported. For example, aws.ec2 and aws.cloudwatch. For more information, see Event delivery from AWS services in the Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-type",
          description:
            "The event type to match. Must match one of the valid Amazon EventBridge event types. For example, EC2 Instance State-change Notification and AWS CloudWatch Alarm State Change. For more information, see Event delivery from AWS services in the Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-pattern",
          description:
            "An additional event pattern used to further filter the events this EventRule receives. For more information, see Amazon EventBridge event patterns in the Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--regions",
          description:
            "A list of AWS Regions that send events to this EventRule",
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
      name: "create-notification-configuration",
      description: "Creates a new NotificationConfiguration",
      options: [
        {
          name: "--name",
          description:
            "The name of the NotificationConfiguration. Supports RFC 3986's unreserved characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the NotificationConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--aggregation-duration",
          description:
            "The aggregation preference of the NotificationConfiguration.   Values:    LONG    Aggregate notifications for long periods of time (12 hours).      SHORT    Aggregate notifications for short periods of time (5 minutes).      NONE    Don't aggregate notifications. No delay in delivery",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs",
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
      name: "delete-event-rule",
      description: "Deletes an EventRule",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the EventRule to delete",
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
      name: "delete-notification-configuration",
      description: "Deletes a NotificationConfiguration",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the NotificationConfiguration to delete",
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
      name: "deregister-notification-hub",
      description:
        "Deregisters a NotificationHub in the specified Region.  You can't deregister the last NotificationHub in the account. NotificationEvents stored in the deregistered NotificationHub are no longer be visible. Recreating a new NotificationHub in the same Region restores access to those NotificationEvents",
      options: [
        {
          name: "--notification-hub-region",
          description: "The NotificationHub Region",
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
      name: "disassociate-channel",
      description:
        "Disassociates a Channel from a specified NotificationConfiguration. Supported Channels include AWS Chatbot, the AWS Console Mobile Application, and emails (notifications-contacts)",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the Channel to disassociate",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-configuration-arn",
          description:
            "The ARN of the NotificationConfiguration to disassociate",
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
      name: "get-event-rule",
      description: "Returns a specified EventRule",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the EventRule to return",
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
      name: "get-notification-configuration",
      description: "Returns a specified NotificationConfiguration",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the NotificationConfiguration to return",
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
      name: "get-notification-event",
      description:
        "Returns a specified NotificationEvent.  User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. GetNotificationEvent only returns notifications stored in the same Region in which the action is called. User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub. For more information, see Notification hubs in the AWS User Notifications User Guide",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the NotificationEvent to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale",
          description:
            "The locale code of the language used for the retrieved NotificationEvent. The default locale is English en_US",
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
      description: "Returns a list of Channels for a NotificationConfiguration",
      options: [
        {
          name: "--notification-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the NotificationConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned in this call. The default value is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The start token for paginated calls. Retrieved from the response of a previous ListNotificationEvents call. NextToken uses Base64 encoding",
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
      name: "list-event-rules",
      description:
        "Returns a list of EventRules according to specified filters, in reverse chronological order (newest first)",
      options: [
        {
          name: "--notification-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the NotificationConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned in this call. The default value is 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The start token for paginated calls. Retrieved from the response of a previous ListEventRules call. Next token uses Base64 encoding",
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
      name: "list-notification-configurations",
      description:
        "Returns a list of abbreviated NotificationConfigurations according to specified filters, in reverse chronological order (newest first)",
      options: [
        {
          name: "--event-rule-source",
          description:
            "The matched event source. Must match one of the valid EventBridge sources. Only AWS service sourced events are supported. For example, aws.ec2 and aws.cloudwatch. For more information, see Event delivery from AWS services in the Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-arn",
          description: "The Amazon Resource Name (ARN) of the Channel to match",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The NotificationConfiguration status to match.   Values:    ACTIVE    All EventRules are ACTIVE and any call can be run.      PARTIALLY_ACTIVE    Some EventRules are ACTIVE and some are INACTIVE. Any call can be run.   Any call can be run.      INACTIVE    All EventRules are INACTIVE and any call can be run.      DELETING    This NotificationConfiguration is being deleted.   Only GET and LIST calls can be run",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned in this call. Defaults to 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The start token for paginated calls. Retrieved from the response of a previous ListEventRules call. Next token uses Base64 encoding",
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
      name: "list-notification-events",
      description:
        "Returns a list of NotificationEvents according to specified filters, in reverse chronological order (newest first).  User Notifications stores notifications in the individual Regions you register as notification hubs and the Region of the source event rule. ListNotificationEvents only returns notifications stored in the same Region in which the action is called. User Notifications doesn't backfill notifications to new Regions selected as notification hubs. For this reason, we recommend that you make calls in your oldest registered notification hub. For more information, see Notification hubs in the AWS User Notifications User Guide",
      options: [
        {
          name: "--start-time",
          description: "The earliest time of events to return from this call",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description: "Latest time of events to return from this call",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--locale",
          description:
            "The locale code of the language used for the retrieved NotificationEvent. The default locale is English (en_US)",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description:
            "The matched event source. Must match one of the valid EventBridge sources. Only AWS service sourced events are supported. For example, aws.ec2 and aws.cloudwatch. For more information, see Event delivery from AWS services in the Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-child-events",
          description: "Include aggregated child events in the result",
        },
        {
          name: "--no-include-child-events",
          description: "Include aggregated child events in the result",
        },
        {
          name: "--aggregate-notification-event-arn",
          description:
            "The Amazon Resource Name (ARN) of the aggregatedNotificationEventArn to match",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned in this call. Defaults to 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The start token for paginated calls. Retrieved from the response of a previous ListEventRules call. Next token uses Base64 encoding",
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
      name: "list-notification-hubs",
      description: "Returns a list of NotificationHubs",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of records to list in a single response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token. Set to null to start listing notification hubs from the start",
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
        "Returns a list of tags for a specified Amazon Resource Name (ARN). For more information, see Tagging your AWS resources in the Tagging AWS Resources User Guide.  This is only supported for NotificationConfigurations",
      options: [
        {
          name: "--arn",
          description: "The Amazon Resource Name (ARN) to use to list tags",
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
      name: "register-notification-hub",
      description:
        "Registers a NotificationHub in the specified Region. There is a maximum of one NotificationHub per Region. You can have a maximum of 3 NotificationHubs at a time",
      options: [
        {
          name: "--notification-hub-region",
          description: "The Region of the NotificationHub",
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
        "Tags the resource with a tag key and value. For more information, see Tagging your AWS resources in the Tagging AWS Resources User Guide.  This is only supported for NotificationConfigurations",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) to use to tag a resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs",
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
        "Untags a resource with a specified Amazon Resource Name (ARN). For more information, see Tagging your AWS resources in the Tagging AWS Resources User Guide",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) to use to untag a resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys to use to untag a resource",
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
      name: "update-event-rule",
      description: "Updates an existing EventRule",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) to use to update the EventRule",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-pattern",
          description:
            "An additional event pattern used to further filter the events this EventRule receives. For more information, see Amazon EventBridge event patterns in the Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--regions",
          description:
            "A list of AWS Regions that sends events to this EventRule",
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
      name: "update-notification-configuration",
      description: "Updates a NotificationConfiguration",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) used to update the NotificationConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the NotificationConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the NotificationConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--aggregation-duration",
          description:
            "The status of this NotificationConfiguration. The status should always be INACTIVE when part of the CreateNotificationConfiguration response.   Values:    ACTIVE    All EventRules are ACTIVE and any call can be run.      PARTIALLY_ACTIVE    Some EventRules are ACTIVE and some are INACTIVE. Any call can be run.   Any call can be run.      INACTIVE    All EventRules are INACTIVE and any call can be run.      DELETING    This NotificationConfiguration is being deleted.   Only GET and LIST calls can be run",
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
};
export default completionSpec;
