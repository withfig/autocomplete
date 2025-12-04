const completionSpec: Fig.Spec = {
  name: "application-signals",
  description:
    "Use CloudWatch Application Signals for comprehensive observability of your cloud-based applications. It enables real-time service health dashboards and helps you track long-term performance trends against your business goals. The application-centric view provides you with unified visibility across your applications, services, and dependencies, so you can proactively monitor and efficiently triage any issues that may arise, ensuring optimal customer experience. Application Signals provides the following benefits:   Automatically collect metrics and traces from your applications, and display key metrics such as call volume, availability, latency, faults, and errors.    Create and monitor service level objectives (SLOs).    See a map of your application topology that Application Signals automatically discovers, that gives you a visual representation of your applications, dependencies, and their connectivity.   Application Signals works with CloudWatch RUM, CloudWatch Synthetics canaries, and Amazon Web Services Service Catalog AppRegistry, to display your client pages, Synthetics canaries, and application names within dashboards and maps",
  subcommands: [
    {
      name: "batch-get-service-level-objective-budget-report",
      description:
        "Use this operation to retrieve one or more service level objective (SLO) budget reports. An error budget is the amount of time or requests in an unhealthy state that your service can accumulate during an interval before your overall SLO budget health is breached and the SLO is considered to be unmet. For example, an SLO with a threshold of 99.95% and a monthly interval translates to an error budget of 21.9 minutes of downtime in a 30-day month. Budget reports include a health indicator, the attainment value, and remaining budget. For more information about SLO error budgets, see  SLO concepts",
      options: [
        {
          name: "--timestamp",
          description:
            "The date and time that you want the report to be for. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--slo-ids",
          description:
            "An array containing the IDs of the service level objectives that you want to include in the report",
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
      name: "create-service-level-objective",
      description:
        "Creates a service level objective (SLO), which can help you ensure that your critical business operations are meeting customer expectations. Use SLOs to set and track specific target levels for the reliability and availability of your applications and services. SLOs use service level indicators (SLIs) to calculate whether the application is performing at the level that you want. Create an SLO to set a target for a service or operation\u2019s availability or latency. CloudWatch measures this target frequently you can find whether it has been breached.  The target performance quality that is defined for an SLO is the attainment goal. You can set SLO targets for your applications that are discovered by Application Signals, using critical metrics such as latency and availability. You can also set SLOs against any CloudWatch metric or math expression that produces a time series. When you create an SLO, you specify whether it is a period-based SLO or a request-based SLO. Each type of SLO has a different way of evaluating your application's performance against its attainment goal.   A period-based SLO uses defined periods of time within a specified total time interval. For each period of time, Application Signals determines whether the application met its goal. The attainment rate is calculated as the number of good periods/number of total periods. For example, for a period-based SLO, meeting an attainment goal of 99.9% means that within your interval, your application must meet its performance goal during at least 99.9% of the time periods.   A request-based SLO doesn't use pre-defined periods of time. Instead, the SLO measures number of good requests/number of total requests during the interval. At any time, you can find the ratio of good requests to total requests for the interval up to the time stamp that you specify, and measure that ratio against the goal set in your SLO.   After you have created an SLO, you can retrieve error budget reports for it. An error budget is the amount of time or amount of requests that your application can be non-compliant with the SLO's goal, and still have your application meet the goal.   For a period-based SLO, the error budget starts at a number defined by the highest number of periods that can fail to meet the threshold, while still meeting the overall goal. The remaining error budget decreases with every failed period that is recorded. The error budget within one interval can never increase. For example, an SLO with a threshold that 99.95% of requests must be completed under 2000ms every month translates to an error budget of 21.9 minutes of downtime per month.   For a request-based SLO, the remaining error budget is dynamic and can increase or decrease, depending on the ratio of good requests to total requests.   For more information about SLOs, see  Service level objectives (SLOs).  When you perform a CreateServiceLevelObjective operation, Application Signals creates the AWSServiceRoleForCloudWatchApplicationSignals service-linked role, if it doesn't already exist in your account. This service- linked role has the following permissions:    xray:GetServiceGraph     logs:StartQuery     logs:GetQueryResults     cloudwatch:GetMetricData     cloudwatch:ListMetrics     tag:GetResources     autoscaling:DescribeAutoScalingGroups",
      options: [
        {
          name: "--name",
          description: "A name for this SLO",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for this SLO",
          args: {
            name: "string",
          },
        },
        {
          name: "--sli-config",
          description:
            "If this SLO is a period-based SLO, this structure defines the information about what performance metric this SLO will monitor. You can't specify both RequestBasedSliConfig and SliConfig in the same operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--request-based-sli-config",
          description:
            "If this SLO is a request-based SLO, this structure defines the information about what performance metric this SLO will monitor. You can't specify both RequestBasedSliConfig and SliConfig in the same operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--goal",
          description:
            "This structure contains the attributes that determine the goal of the SLO",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to associate with the SLO. You can associate as many as 50 tags with an SLO. To be able to associate tags with the SLO when you create the SLO, you must have the cloudwatch:TagResource permission. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values",
          args: {
            name: "list",
          },
        },
        {
          name: "--burn-rate-configurations",
          description:
            "Use this array to create burn rates for this SLO. Each burn rate is a metric that indicates how fast the service is consuming the error budget, relative to the attainment goal of the SLO",
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
      name: "delete-service-level-objective",
      description: "Deletes the specified service level objective",
      options: [
        {
          name: "--id",
          description:
            "The ARN or name of the service level objective to delete",
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
      name: "get-service",
      description:
        "Returns information about a service discovered by Application Signals",
      options: [
        {
          name: "--start-time",
          description:
            "The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--key-attributes",
          description:
            "Use this field to specify which service you want to retrieve information for. You must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to",
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
      name: "get-service-level-objective",
      description: "Returns information about one SLO created in the account",
      options: [
        {
          name: "--id",
          description:
            "The ARN or name of the SLO that you want to retrieve information about. You can find the ARNs of SLOs by using the ListServiceLevelObjectives operation",
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
      name: "list-service-dependencies",
      description:
        "Returns a list of service dependencies of the service that you specify. A dependency is an infrastructure component that an operation of this service connects with. Dependencies can include Amazon Web Services services, Amazon Web Services resources, and third-party services",
      options: [
        {
          name: "--start-time",
          description:
            "The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested end time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--key-attributes",
          description:
            "Use this field to specify which service you want to retrieve information for. You must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Include this value, if it was returned by the previous operation, to get the next set of service dependencies",
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
      name: "list-service-dependents",
      description:
        "Returns the list of dependents that invoked the specified service during the provided time range. Dependents include other services, CloudWatch Synthetics canaries, and clients that are instrumented with CloudWatch RUM app monitors",
      options: [
        {
          name: "--start-time",
          description:
            "The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--key-attributes",
          description:
            "Use this field to specify which service you want to retrieve information for. You must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Include this value, if it was returned by the previous operation, to get the next set of service dependents",
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
      name: "list-service-level-objectives",
      description: "Returns a list of SLOs created in this account",
      options: [
        {
          name: "--key-attributes",
          description:
            "You can use this optional field to specify which services you want to retrieve SLO information for. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to",
          args: {
            name: "map",
          },
        },
        {
          name: "--operation-name",
          description:
            "The name of the operation that this SLO is associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Include this value, if it was returned by the previous operation, to get the next set of service level objectives",
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
      name: "list-service-operations",
      description:
        "Returns a list of the operations of this service that have been discovered by Application Signals. Only the operations that were invoked during the specified time range are returned",
      options: [
        {
          name: "--start-time",
          description:
            "The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested end time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--key-attributes",
          description:
            "Use this field to specify which service you want to retrieve information for. You must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Include this value, if it was returned by the previous operation, to get the next set of service operations",
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
      name: "list-services",
      description:
        "Returns a list of services that have been discovered by Application Signals. A service represents a minimum logical and transactional unit that completes a business function. Services are discovered through Application Signals instrumentation",
      options: [
        {
          name: "--start-time",
          description:
            "The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Include this value, if it was returned by the previous operation, to get the next set of services",
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
        "Displays the tags associated with a CloudWatch resource. Tags can be assigned to service level objectives",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the CloudWatch resource that you want to view tags for. The ARN format of an Application Signals SLO is arn:aws:cloudwatch:Region:account-id:slo:slo-name   For more information about ARN format, see  Resource Types Defined by Amazon CloudWatch in the Amazon Web Services General Reference",
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
      name: "start-discovery",
      description:
        "Enables this Amazon Web Services account to be able to use CloudWatch Application Signals by creating the AWSServiceRoleForCloudWatchApplicationSignals service-linked role. This service- linked role has the following permissions:    xray:GetServiceGraph     logs:StartQuery     logs:GetQueryResults     cloudwatch:GetMetricData     cloudwatch:ListMetrics     tag:GetResources     autoscaling:DescribeAutoScalingGroups    After completing this step, you still need to instrument your Java and Python applications to send data to Application Signals. For more information, see  Enabling Application Signals",
      options: [
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
        "Assigns one or more tags (key-value pairs) to the specified CloudWatch resource, such as a service level objective. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a CloudWatch resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the CloudWatch resource that you want to set tags for. The ARN format of an Application Signals SLO is arn:aws:cloudwatch:Region:account-id:slo:slo-name   For more information about ARN format, see  Resource Types Defined by Amazon CloudWatch in the Amazon Web Services General Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs to associate with the alarm",
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
            "The Amazon Resource Name (ARN) of the CloudWatch resource that you want to delete tags from. The ARN format of an Application Signals SLO is arn:aws:cloudwatch:Region:account-id:slo:slo-name   For more information about ARN format, see  Resource Types Defined by Amazon CloudWatch in the Amazon Web Services General Reference",
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
      name: "update-service-level-objective",
      description:
        "Updates an existing service level objective (SLO). If you omit parameters, the previous values of those parameters are retained.  You cannot change from a period-based SLO to a request-based SLO, or change from a request-based SLO to a period-based SLO",
      options: [
        {
          name: "--id",
          description:
            "The Amazon Resource Name (ARN) or name of the service level objective that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the SLO",
          args: {
            name: "string",
          },
        },
        {
          name: "--sli-config",
          description:
            "If this SLO is a period-based SLO, this structure defines the information about what performance metric this SLO will monitor",
          args: {
            name: "structure",
          },
        },
        {
          name: "--request-based-sli-config",
          description:
            "If this SLO is a request-based SLO, this structure defines the information about what performance metric this SLO will monitor. You can't specify both SliConfig and RequestBasedSliConfig in the same operation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--goal",
          description:
            "A structure that contains the attributes that determine the goal of the SLO. This includes the time period for evaluation and the attainment threshold",
          args: {
            name: "structure",
          },
        },
        {
          name: "--burn-rate-configurations",
          description:
            "Use this array to create burn rates for this SLO. Each burn rate is a metric that indicates how fast the service is consuming the error budget, relative to the attainment goal of the SLO",
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
  ],
};
export default completionSpec;
