const completionSpec: Fig.Spec = {
  name: "rum",
  description:
    "With Amazon CloudWatch RUM, you can perform real-user monitoring to collect client-side data about your web application performance from actual user sessions in real time. The data collected includes page load times, client-side errors, and user behavior. When you view this data, you can see it all aggregated together and also see breakdowns by the browsers and devices that your customers use. You can use the collected data to quickly identify and debug client-side performance issues. CloudWatch RUM helps you visualize anomalies in your application performance and find relevant debugging data such as error messages, stack traces, and user sessions. You can also use RUM to understand the range of end-user impact including the number of users, geolocations, and browsers used",
  subcommands: [
    {
      name: "batch-create-rum-metric-definitions",
      description:
        "Specifies the extended metrics and custom metrics that you want a CloudWatch RUM app monitor to send to a destination. Valid destinations include CloudWatch and Evidently. By default, RUM app monitors send some metrics to CloudWatch. These default metrics are listed in CloudWatch metrics that you can collect with CloudWatch RUM. In addition to these default metrics, you can choose to send extended metrics, custom metrics, or both.   Extended metrics let you send metrics with additional dimensions that aren't included in the default metrics. You can also send extended metrics to both Evidently and CloudWatch. The valid dimension names for the additional dimensions for extended metrics are BrowserName, CountryCode, DeviceType, FileType, OSName, and PageId. For more information, see  Extended metrics that you can send to CloudWatch and CloudWatch Evidently.   Custom metrics are metrics that you define. You can send custom metrics to CloudWatch. CloudWatch Evidently, or both. With custom metrics, you can use any metric name and namespace. To derive the metrics, you can use any custom events, built-in events, custom attributes, or default attributes.  You can't send custom metrics to the AWS/RUM namespace. You must send custom metrics to a custom namespace that you define. The namespace that you use can't start with AWS/. CloudWatch RUM prepends RUM/CustomMetrics/ to the custom namespace that you define, so the final namespace for your metrics in CloudWatch is RUM/CustomMetrics/your-custom-namespace .   The maximum number of metric definitions that you can specify in one BatchCreateRumMetricDefinitions operation is 200. The maximum number of metric definitions that one destination can contain is 2000. Extended metrics sent to CloudWatch and RUM custom metrics are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension value counts as a custom metric. For more information, see Amazon CloudWatch Pricing. You must have already created a destination for the metrics before you send them. For more information, see PutRumMetricsDestination. If some metric definitions specified in a BatchCreateRumMetricDefinitions operations are not valid, those metric definitions fail and return errors, but all valid metric definitions in the same operation still succeed",
      options: [
        {
          name: "--app-monitor-name",
          description:
            "The name of the CloudWatch RUM app monitor that is to send the metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The destination to send the metrics to. Valid values are CloudWatch and Evidently. If you specify Evidently, you must also specify the Amazon Resource Name (ARN) of the CloudWatchEvidently experiment that will receive the metrics and an IAM role that has permission to write to the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description:
            "This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter. This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this experiment as a valid destination. For more information, see PutRumMetricsDestination",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-definitions",
          description:
            "An array of structures which define the metrics that you want to send",
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
      name: "batch-delete-rum-metric-definitions",
      description:
        "Removes the specified metrics from being sent to an extended metrics destination. If some metric definition IDs specified in a BatchDeleteRumMetricDefinitions operations are not valid, those metric definitions fail and return errors, but all valid metric definition IDs in the same operation are still deleted. The maximum number of metric definitions that you can specify in one BatchDeleteRumMetricDefinitions operation is 200",
      options: [
        {
          name: "--app-monitor-name",
          description:
            "The name of the CloudWatch RUM app monitor that is sending these metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "Defines the destination where you want to stop sending the specified metrics. Valid values are CloudWatch and Evidently. If you specify Evidently, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description:
            "This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter.  This parameter specifies the ARN of the Evidently experiment that was receiving the metrics that are being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-definition-ids",
          description:
            "An array of structures which define the metrics that you want to stop sending",
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
      name: "batch-get-rum-metric-definitions",
      description:
        "Retrieves the list of metrics and dimensions that a RUM app monitor is sending to a single destination",
      options: [
        {
          name: "--app-monitor-name",
          description:
            "The name of the CloudWatch RUM app monitor that is sending the metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The type of destination that you want to view metrics for. Valid values are CloudWatch and Evidently",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description:
            "This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter. This parameter specifies the ARN of the Evidently experiment that corresponds to the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100. To retrieve the remaining results, make another call with the returned NextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Use the token returned by the previous operation to request the next page of results",
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
      name: "create-app-monitor",
      description:
        "Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior. You use this operation only to create a new app monitor. To update an existing app monitor, use UpdateAppMonitor instead. After you create an app monitor, sign in to the CloudWatch RUM console to get the JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated?",
      options: [
        {
          name: "--app-monitor-configuration",
          description:
            "A structure that contains much of the configuration data for the app monitor. If you are using Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the Amazon Cognito identity pool to use for authorization. If you don't include AppMonitorConfiguration, you must set up your own authorization method. For more information, see Authorize your application to send data to Amazon Web Services. If you omit this argument, the sample rate used for RUM is set to 10% of the user sessions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--custom-events",
          description:
            "Specifies whether this app monitor allows the web client to define and send custom events. If you omit this parameter, custom events are DISABLED. For more information about custom events, see Send custom events",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cw-log-enabled",
          description:
            "Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges. If you omit this parameter, the default is false",
        },
        {
          name: "--no-cw-log-enabled",
          description:
            "Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges. If you omit this parameter, the default is false",
        },
        {
          name: "--domain",
          description:
            "The top-level internet domain name for which your application has administrative authority",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the app monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags (key-value pairs) to the app monitor. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can associate as many as 50 tags with an app monitor. For more information, see Tagging Amazon Web Services resources",
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
      name: "delete-app-monitor",
      description:
        "Deletes an existing app monitor. This immediately stops the collection of data",
      options: [
        {
          name: "--name",
          description: "The name of the app monitor to delete",
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
      name: "delete-rum-metrics-destination",
      description:
        "Deletes a destination for CloudWatch RUM extended metrics, so that the specified app monitor stops sending extended metrics to that destination",
      options: [
        {
          name: "--app-monitor-name",
          description:
            "The name of the app monitor that is sending metrics to the destination that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The type of destination to delete. Valid values are CloudWatch and Evidently",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description:
            "This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter. This parameter specifies the ARN of the Evidently experiment that corresponds to the destination to delete",
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
      name: "get-app-monitor",
      description:
        "Retrieves the complete configuration information for one app monitor",
      options: [
        {
          name: "--name",
          description: "The app monitor to retrieve information for",
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
      name: "get-app-monitor-data",
      description:
        "Retrieves the raw performance events that RUM has collected from your web application, so that you can do your own processing or analysis of this data",
      options: [
        {
          name: "--filters",
          description:
            "An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description:
            "The name of the app monitor that collected the data that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Use the token returned by the previous operation to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-range",
          description:
            "A structure that defines the time range that you want to retrieve results from",
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
      name: "list-app-monitors",
      description:
        "Returns a list of the Amazon CloudWatch RUM app monitors in the account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Use the token returned by the previous operation to request the next page of results",
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
      name: "list-rum-metrics-destinations",
      description:
        "Returns a list of destinations that you have created to receive RUM extended metrics, for the specified app monitor. For more information about extended metrics, see AddRumMetrics",
      options: [
        {
          name: "--app-monitor-name",
          description:
            "The name of the app monitor associated with the destinations that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100. To retrieve the remaining results, make another call with the returned NextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Use the token returned by the previous operation to request the next page of results",
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
        "Displays the tags associated with a CloudWatch RUM resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource that you want to see the tags of",
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
      name: "put-rum-events",
      description:
        "Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code snippet that RUM generates for you to add to your application includes PutRumEvents operations to send this data to RUM. Each PutRumEvents operation can send a batch of events from one user session",
      options: [
        {
          name: "--app-monitor-details",
          description:
            "A structure that contains information about the app monitor that collected this telemetry information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--batch-id",
          description: "A unique identifier for this batch of RUM event data",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The ID of the app monitor that is sending this data",
          args: {
            name: "string",
          },
        },
        {
          name: "--rum-events",
          description:
            "An array of structures that contain the telemetry event data",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-details",
          description:
            "A structure that contains information about the user session that this batch of events was collected from",
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
      name: "put-rum-metrics-destination",
      description:
        "Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send extended metrics to CloudWatch or to a CloudWatch Evidently experiment. For more information about extended metrics, see BatchCreateRumMetricDefinitions",
      options: [
        {
          name: "--app-monitor-name",
          description:
            "The name of the CloudWatch RUM app monitor that will send the metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "Defines the destination to send the metrics to. Valid values are CloudWatch and Evidently. If you specify Evidently, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description:
            "Use this parameter only if Destination is Evidently. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "This parameter is required if Destination is Evidently. If Destination is CloudWatch, don't use this parameter. This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment. If you specify this parameter, you must be signed on to a role that has PassRole permissions attached to it, to allow the role to be passed. The  CloudWatchAmazonCloudWatchRUMFullAccess policy doesn't include PassRole permissions",
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
        "Assigns one or more tags (key-value pairs) to the specified CloudWatch RUM resource. Currently, the only resources that can be tagged app monitors. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. For more information, see Tagging Amazon Web Services resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the CloudWatch RUM resource that you're adding tags to",
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
      name: "untag-resource",
      description: "Removes one or more tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the CloudWatch RUM resource that you're removing tags from",
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
      name: "update-app-monitor",
      description:
        "Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor configuration that you specify in this operation are changed. For any parameters that you omit, the existing values are kept. You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use TagResource. To create a new app monitor, use CreateAppMonitor. After you update an app monitor, sign in to the CloudWatch RUM console to get the updated JavaScript code snippet to add to your web application. For more information, see How do I find a code snippet that I've already generated?",
      options: [
        {
          name: "--app-monitor-configuration",
          description:
            "A structure that contains much of the configuration data for the app monitor. If you are using Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the Amazon Cognito identity pool to use for authorization. If you don't include AppMonitorConfiguration, you must set up your own authorization method. For more information, see Authorize your application to send data to Amazon Web Services",
          args: {
            name: "structure",
          },
        },
        {
          name: "--custom-events",
          description:
            "Specifies whether this app monitor allows the web client to define and send custom events. The default is for custom events to be DISABLED. For more information about custom events, see Send custom events",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cw-log-enabled",
          description:
            "Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges",
        },
        {
          name: "--no-cw-log-enabled",
          description:
            "Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges",
        },
        {
          name: "--domain",
          description:
            "The top-level internet domain name for which your application has administrative authority",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the app monitor to update",
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
      name: "update-rum-metric-definition",
      description:
        "Modifies one existing metric definition for CloudWatch RUM extended metrics. For more information about extended metrics, see BatchCreateRumMetricsDefinitions",
      options: [
        {
          name: "--app-monitor-name",
          description:
            "The name of the CloudWatch RUM app monitor that sends these metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The destination to send the metrics to. Valid values are CloudWatch and Evidently. If you specify Evidently, you must also specify the ARN of the CloudWatchEvidently experiment that will receive the metrics and an IAM role that has permission to write to the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-arn",
          description:
            "This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter. This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this experiment as a valid destination. For more information, see PutRumMetricsDestination",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-definition",
          description:
            "A structure that contains the new definition that you want to use for this metric",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metric-definition-id",
          description: "The ID of the metric definition to update",
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
