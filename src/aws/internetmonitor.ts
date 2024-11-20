const completionSpec: Fig.Spec = {
  name: "internetmonitor",
  description:
    "Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability between your applications hosted on Amazon Web Services and your end users. It can reduce the time it takes for you to diagnose internet issues from days to minutes. Internet Monitor uses the connectivity data that Amazon Web Services captures from its global networking footprint to calculate a baseline of performance and availability for internet traffic. This is the same data that Amazon Web Services uses to monitor internet uptime and availability. With those measurements as a baseline, Internet Monitor raises awareness for you when there are significant problems for your end users in the different geographic locations where your application runs. Internet Monitor publishes internet measurements to CloudWatch Logs and CloudWatch Metrics, to easily support using CloudWatch tools with health information for geographies and networks specific to your application. Internet Monitor sends health events to Amazon EventBridge so that you can set up notifications. If an issue is caused by the Amazon Web Services network, you also automatically receive an Amazon Web Services Health Dashboard notification with the steps that Amazon Web Services is taking to mitigate the problem. To use Internet Monitor, you create a monitor and associate your application's resources with it - VPCs, NLBs, CloudFront distributions, or WorkSpaces directories - so Internet Monitor can determine where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to the locations and ASNs (typically, internet service providers or ISPs) that communicate with your application. For more information, see Using Amazon CloudWatch Internet Monitor in the Amazon CloudWatch User Guide",
  subcommands: [
    {
      name: "create-monitor",
      description:
        "Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: VPCs, Network Load Balancers (NLBs), Amazon CloudFront distributions, and Amazon WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the city-networks. That is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see Using Amazon CloudWatch Internet Monitor in the Amazon CloudWatch User Guide. When you create a monitor, you choose the percentage of traffic that you want to monitor. You can also set a maximum limit for the number of city-networks where client traffic is monitored, that caps the total traffic that Internet Monitor monitors. A city-network maximum is the limit of city-networks, but you only pay for the number of city-networks that are actually monitored. You can update your monitor at any time to change the percentage of traffic to monitor or the city-networks maximum. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--resources",
          description:
            "The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs, Amazon CloudFront distributions, or Amazon WorkSpaces directories. You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add NLBs or WorkSpaces directories together with any other resources.  If you add only Amazon VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags for a monitor. You can add a maximum of 50 tags in Internet Monitor",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-city-networks-to-monitor",
          description:
            "The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. Setting this limit can help control billing costs. To learn more, see Choosing a city-network maximum value  in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--internet-measurements-log-delivery",
          description:
            "Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic-percentage-to-monitor",
          description:
            "The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set. To learn more, see Choosing an application traffic percentage to monitor  in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--health-events-config",
          description:
            "Defines the threshold percentages and other configuration information for when Amazon CloudWatch Internet Monitor creates a health event. Internet Monitor creates a health event when an internet issue that affects your application end users has a health score percentage that is at or below a specific threshold, and, sometimes, when other criteria are met. If you don't set a health event threshold, the default value is 95%. For more information, see  Change health event thresholds in the Internet Monitor section of the CloudWatch User Guide",
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
      name: "delete-monitor",
      description: "Deletes a monitor in Amazon CloudWatch Internet Monitor",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor to delete",
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
      name: "get-health-event",
      description:
        "Gets information that Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all the information related to the event, by location. The information returned includes the impact on performance, availability, and round-trip time, information about the network providers (ASNs), the event type, and so on. Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-id",
          description:
            "The internally-generated identifier of a health event. Because EventID contains the forward slash (\u201c/\u201d) character, you must URL-encode the EventID field in the request URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--linked-account-id",
          description:
            "The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see Internet Monitor cross-account observability in the Amazon CloudWatch Internet Monitor User Guide",
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
      name: "get-internet-event",
      description:
        "Gets information that Amazon CloudWatch Internet Monitor has generated about an internet event. Internet Monitor displays information about recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services customers.  The information returned here includes the impacted location, when the event started and (if the event is over) ended, the type of event (PERFORMANCE or AVAILABILITY), and the status (ACTIVE or RESOLVED)",
      options: [
        {
          name: "--event-id",
          description:
            "The EventId of the internet event to return information for",
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
      name: "get-monitor",
      description:
        "Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--linked-account-id",
          description:
            "The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see Internet Monitor cross-account observability in the Amazon CloudWatch Internet Monitor User Guide",
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
        "Return the data for a query with the Amazon CloudWatch Internet Monitor query interface. Specify the query that you want to return results for by providing a QueryId and a monitor name. For more information about using the query interface, including examples, see Using the Amazon CloudWatch Internet Monitor query interface in the Amazon CloudWatch Internet Monitor User Guide",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor to return data for",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The ID of the query that you want to return data results for. A QueryId is an internally-generated identifier for a specific query",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. You receive this token from a previous call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of query results that you want to return with this call",
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
      name: "get-query-status",
      description:
        "Returns the current status of a query for the Amazon CloudWatch Internet Monitor query interface, for a specified query ID and monitor. When you run a query, check the status to make sure that the query has SUCCEEDED before you review the results.    QUEUED: The query is scheduled to run.    RUNNING: The query is in progress but not complete.    SUCCEEDED: The query completed sucessfully.    FAILED: The query failed due to an error.    CANCELED: The query was canceled",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The ID of the query that you want to return the status for. A QueryId is an internally-generated dentifier for a specific query",
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
      name: "list-health-events",
      description:
        "Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns information for health events including the event start and end times, and the status.  Health events that have start times during the time frame that is requested are not included in the list of health events",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description: "The time when a health event started",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The time when a health event ended. If the health event is still ongoing, then the end time is not set",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. You receive this token from a previous call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of health event objects that you want to return with this call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--event-status",
          description: "The status of a health event",
          args: {
            name: "string",
          },
        },
        {
          name: "--linked-account-id",
          description:
            "The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see Internet Monitor cross-account observability in the Amazon CloudWatch Internet Monitor User Guide",
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
      name: "list-internet-events",
      description:
        "Lists internet events that cause performance or availability issues for client locations. Amazon CloudWatch Internet Monitor displays information about recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services customers.  You can constrain the list of internet events returned by providing a start time and end time to define a total time frame for events you want to list. Both start time and end time specify the time when an event started. End time is optional. If you don't include it, the default end time is the current time. You can also limit the events returned to a specific status (ACTIVE or RESOLVED) or type (PERFORMANCE or AVAILABILITY)",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results. You receive this token from a previous call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of query results that you want to return with this call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--start-time",
          description:
            "The start time of the time window that you want to get a list of internet events for",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The end time of the time window that you want to get a list of internet events for",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--event-status",
          description: "The status of an internet event",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-type",
          description: "The type of network impairment",
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
      name: "list-monitors",
      description:
        "Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results. You receive this token from a previous call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of monitor objects that you want to return with this call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--monitor-status",
          description:
            "The status of a monitor. This includes the status of the data processing for the monitor and the status of the monitor itself. For information about the statuses for a monitor, see  Monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-linked-accounts",
          description:
            "A boolean option that you can set to TRUE to include monitors for linked accounts in a list of monitors, when you've set up cross-account sharing in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see Internet Monitor cross-account observability in the Amazon CloudWatch Internet Monitor User Guide",
        },
        {
          name: "--no-include-linked-accounts",
          description:
            "A boolean option that you can set to TRUE to include monitors for linked accounts in a list of monitors, when you've set up cross-account sharing in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see Internet Monitor cross-account observability in the Amazon CloudWatch Internet Monitor User Guide",
        },
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
        "Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) for a resource",
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
        "Start a query to return data for a specific query type for the Amazon CloudWatch Internet Monitor query interface. Specify a time period for the data that you want returned by using StartTime and EndTime. You filter the query results to return by providing parameters that you specify with FilterParameters. For more information about using the query interface, including examples, see Using the Amazon CloudWatch Internet Monitor query interface in the Amazon CloudWatch Internet Monitor User Guide",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor to query",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The timestamp that is the beginning of the period that you want to retrieve data for with your query",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp that is the end of the period that you want to retrieve data for with your query",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--query-type",
          description:
            "The type of query to run. The following are the three types of queries that you can run using the Internet Monitor query interface:    MEASUREMENTS: Provides availability score, performance score, total traffic, and round-trip times, at 5 minute intervals.    TOP_LOCATIONS: Provides availability score, performance score, total traffic, and time to first byte (TTFB) information, for the top location and ASN combinations that you're monitoring, by traffic volume.    TOP_LOCATION_DETAILS: Provides TTFB for Amazon CloudFront, your current configuration, and the best performing EC2 configuration, at 1 hour intervals.    OVERALL_TRAFFIC_SUGGESTIONS: Provides TTFB, using a 30-day weighted average, for all traffic in each Amazon Web Services location that is monitored.    OVERALL_TRAFFIC_SUGGESTIONS_DETAILS: Provides TTFB, using a 30-day weighted average, for each top location, for a proposed Amazon Web Services location. Must provide an Amazon Web Services location to search.    ROUTING_SUGGESTIONS: Provides the predicted average round-trip time (RTT) from an IP prefix toward an Amazon Web Services location for a DNS resolver. The RTT is calculated at one hour intervals, over a one hour period.   For lists of the fields returned with each query type and more information about how each type of query is performed, see  Using the Amazon CloudWatch Internet Monitor query interface in the Amazon CloudWatch Internet Monitor User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-parameters",
          description:
            "The FilterParameters field that you use with Amazon CloudWatch Internet Monitor queries is a string the defines how you want a query to be filtered. The filter parameters that you can specify depend on the query type, since each query type returns a different set of Internet Monitor data. For more information about specifying filter parameters, see Using the Amazon CloudWatch Internet Monitor query interface in the Amazon CloudWatch Internet Monitor User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--linked-account-id",
          description:
            "The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see Internet Monitor cross-account observability in the Amazon CloudWatch Internet Monitor User Guide",
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
      name: "stop-query",
      description: "Stop a query that is progress for a specific monitor",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The ID of the query that you want to stop. A QueryId is an internally-generated identifier for a specific query",
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
        "Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor. A minimum of one tag is required for this call. It returns an error if you use the TagResource request with 0 tags",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for a tag that you add to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags that you add to a resource. You can add a maximum of 50 tags in Internet Monitor",
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
      description: "Removes a tag from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for a tag you remove a resource from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Tag keys that you remove from a resource",
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
      name: "update-monitor",
      description:
        "Updates a monitor. You can update a monitor to change the percentage of traffic to monitor or the maximum number of city-networks (locations and ASNs), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--resources-to-add",
          description:
            "The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs, Amazon CloudFront distributions, or Amazon WorkSpaces directories. You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add NLBs or WorkSpaces directories together with any other resources.  If you add only Amazon Virtual Private Clouds resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity",
          args: {
            name: "list",
          },
        },
        {
          name: "--resources-to-remove",
          description:
            "The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs)",
          args: {
            name: "list",
          },
        },
        {
          name: "--status",
          description:
            "The status for a monitor. The accepted values for Status with the UpdateMonitor API call are the following: ACTIVE and INACTIVE. The following values are not accepted: PENDING, and ERROR",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-city-networks-to-monitor",
          description:
            "The maximum number of city-networks to monitor for your application. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. Setting this limit can help control billing costs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--internet-measurements-log-delivery",
          description:
            "Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic-percentage-to-monitor",
          description:
            "The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set. To learn more, see Choosing an application traffic percentage to monitor  in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--health-events-config",
          description:
            "The list of health score thresholds. A threshold percentage for health scores, along with other configuration information, determines when Internet Monitor creates a health event when there's an internet issue that affects your application end users. For more information, see  Change health event thresholds in the Internet Monitor section of the CloudWatch User Guide",
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
  ],
};
export default completionSpec;
