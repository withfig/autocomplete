const completionSpec: Fig.Spec = {
  name: "networkflowmonitor",
  description:
    "Network Flow Monitor is a feature of Amazon CloudWatch Network Monitoring that provides visibility into the performance of network flows for your Amazon Web Services workloads, between instances in subnets, as well as to and from Amazon Web Services. Lightweight agents that you install on the instances capture performance metrics for your network flows, such as packet loss and latency, and send them to the Network Flow Monitor backend. Then, you can view and analyze metrics from the top contributors for each metric type, to help troubleshoot issues. In addition, when you create a monitor, Network Flow Monitor provides a network health indicator (NHI) that informs you whether there were Amazon Web Services network issues for one or more of the network flows tracked by a monitor, during a time period that you choose. By using this value, you can independently determine if the Amazon Web Services network is impacting your workload during a specific time frame, to help you focus troubleshooting efforts. To learn more about Network Flow Monitor, see the Network Flow Monitor User Guide in the Amazon CloudWatch User Guide",
  subcommands: [
    {
      name: "create-monitor",
      description:
        "Create a monitor for specific network flows between local and remote resources, so that you can monitor network performance for one or several of your workloads. For each monitor, Network Flow Monitor publishes detailed end-to-end performance metrics and a network health indicators (NHI) that informs you whether there were Amazon Web Services network issues for one or more of the network flows tracked by a monitor, during a time period that you choose",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--local-resources",
          description:
            "The local resources to monitor. A local resource, in a bi-directional flow of a workload, is the host where the agent is installed. For example, if a workload consists of an interaction between a web service and a backend database (for example, Amazon Relational Database Service (RDS)), the EC2 instance hosting the web service, which also runs the agent, is the local resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--remote-resources",
          description:
            "The remote resources to monitor. A remote resource is the other endpoint in the bi-directional flow of a workload, with a local resource. For example, Amazon Relational Database Service (RDS) can be a remote resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--scope-arn",
          description:
            "The Amazon Resource Name (ARN) of the scope for the monitor",
          args: {
            name: "string",
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
            "The tags for a monitor. You can add a maximum of 200 tags",
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
      name: "create-scope",
      description:
        "Create a scope of resources that you want to be available for Network Flow Monitor to generate metrics for, when you have active agents on those resources sending metrics reports to the Network Flow Monitor backend. This call returns a scope ID to identify the scope. When you create a scope, you enable permissions for Network Flow Monitor. The scope is set to the resources for the Amazon Web Services that enables the feature",
      options: [
        {
          name: "--targets",
          description:
            "The targets to define the scope to be monitored. Currently, a target is an Amazon Web Services account",
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
            "The tags for a scope. You can add a maximum of 200 tags",
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
      name: "delete-monitor",
      description: "Deletes a monitor in Network Flow Monitor",
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
      name: "delete-scope",
      description: "Deletes a scope that has been defined",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account",
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
        "Gets information about a monitor in Network Flow Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
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
      name: "get-query-results-monitor-top-contributors",
      description:
        "Return the data for a query with the Network Flow Monitor query interface. You specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for a specific monitor. Create a query ID for this call by calling the corresponding API call to start the query, StartQueryMonitorTopContributors. Use the scope ID that was returned for your account by CreateScope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor",
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
            "The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query",
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
      name: "get-query-results-workload-insights-top-contributors",
      description:
        "Return the data for a query with the Network Flow Monitor query interface. You specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for a specific monitor. Create a query ID for this call by calling the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributors. Use the scope ID that was returned for your account by CreateScope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query",
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
      name: "get-query-results-workload-insights-top-contributors-data",
      description:
        "Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a scope ID. This query returns data for the top contributors for workload insights. Workload insights provide a high level view of network flow performance data collected by agents for a scope. Create a query ID for this call by calling the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributorsData. Use the scope ID that was returned for your account by CreateScope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor. The top contributor network flows overall for a specific metric type, for example, the number of retransmissions",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query",
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
      name: "get-query-status-monitor-top-contributors",
      description:
        "Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and monitor. This call returns the query status for the top contributors for a monitor. When you start a query, use this call to check the status of the query to make sure that it has has SUCCEEDED before you review the results. Use the same query ID that you used for the corresponding API call to start the query, StartQueryMonitorTopContributors. When you run a query, use this call to check the status of the query to make sure that the query has SUCCEEDED before you review the results",
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
            "The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query",
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
      name: "get-query-status-workload-insights-top-contributors",
      description:
        "Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for workload insights. When you start a query, use this call to check the status of the query to make sure that it has has SUCCEEDED before you review the results. Use the same query ID that you used for the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributors. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query",
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
      name: "get-query-status-workload-insights-top-contributors-data",
      description:
        "Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and monitor. This call returns the query status for the top contributors data for workload insights. When you start a query, use this call to check the status of the query to make sure that it has has SUCCEEDED before you review the results. Use the same query ID that you used for the corresponding API call to start the query, StartQueryWorkloadInsightsTopContributorsData. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor. The top contributor network flows overall for a specific metric type, for example, the number of retransmissions",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a CreateScope API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query",
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
      name: "get-scope",
      description:
        "Gets information about a scope, including the name, status, tags, and target details. The scope in Network Flow Monitor is an account",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a CreateScope API call",
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
      name: "list-monitors",
      description:
        "List all monitors in an account. Optionally, you can list only monitors that have a specific status, by using the STATUS parameter",
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
          name: "--monitor-status",
          description:
            "The status of a monitor. The status can be one of the following    PENDING: The monitor is in the process of being created.    ACTIVE: The monitor is active.    INACTIVE: The monitor is inactive.    ERROR: Monitor creation failed due to an error.    DELETING: The monitor is in the process of being deleted",
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
      name: "list-scopes",
      description: "List all the scopes for an account",
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
      description: "Returns all the tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
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
      name: "start-query-monitor-top-contributors",
      description:
        "Start a query to return the data with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for a specific monitor. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor",
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
          description:
            "The timestamp that is the date and time beginning of the period that you want to retrieve results for with your query",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp that is the date and time end of the period that you want to retrieve results for with your query",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--metric-name",
          description:
            "The metric that you want to query top contributors for. That is, you can specify this metric to return the top contributor network flows, for this type of metric, for a monitor and (optionally) within a specific category, such as network flows between Availability Zones",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-category",
          description:
            "The category that you want to query top contributors for, for a specific monitor. Destination categories can be one of the following:     INTRA_AZ: Top contributor network flows within a single Availability Zone    INTER_AZ: Top contributor network flows between Availability Zones    INTER_VPC: Top contributor network flows between VPCs    AWS_SERVICES: Top contributor network flows to or from Amazon Web Services services    UNCLASSIFIED: Top contributor network flows that do not have a bucket classification",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of top contributors to return",
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
      name: "start-query-workload-insights-top-contributors",
      description:
        "Start a query to return the data with the Network Flow Monitor query interface. Specify the query that you want to start by providing a query ID and a monitor name. This query returns the top contributors for a specific monitor. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a CreateScope API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The timestamp that is the date and time beginning of the period that you want to retrieve results for with your query",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp that is the date and time end of the period that you want to retrieve results for with your query",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--metric-name",
          description:
            "The metric that you want to query top contributors for. That is, you can specify this metric to return the top contributor network flows, for this type of metric, for a monitor and (optionally) within a specific category, such as network flows between Availability Zones",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-category",
          description:
            "The destination category for a top contributors row. Destination categories can be one of the following:     INTRA_AZ: Top contributor network flows within a single Availability Zone    INTER_AZ: Top contributor network flows between Availability Zones    INTER_VPC: Top contributor network flows between VPCs    AWS_SERVICES: Top contributor network flows to or from Amazon Web Services services    UNCLASSIFIED: Top contributor network flows that do not have a bucket classification",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of top contributors to return",
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
      name: "start-query-workload-insights-top-contributors-data",
      description:
        "Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a scope ID. This query returns data for the top contributors for workload insights. Workload insights provide a high level view of network flow performance data collected by agents for a scope. A query ID is returned from an API call to start a query of a specific type; for example  Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor. The top contributor network flows overall for a specific metric type, for example, the number of retransmissions",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The timestamp that is the date and time beginning of the period that you want to retrieve results for with your query",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp that is the date and time end of the period that you want to retrieve results for with your query",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--metric-name",
          description:
            "The metric that you want to query top contributors for. That is, you can specify this metric to return the top contributor network flows, for this type of metric, for a monitor and (optionally) within a specific category, such as network flows between Availability Zones",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-category",
          description:
            "The destination category for a top contributors. Destination categories can be one of the following:     INTRA_AZ: Top contributor network flows within a single Availability Zone    INTER_AZ: Top contributor network flows between Availability Zones    INTER_VPC: Top contributor network flows between VPCs    AWS_SERVICES: Top contributor network flows to or from Amazon Web Services services    UNCLASSIFIED: Top contributor network flows that do not have a bucket classification",
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
      name: "stop-query-monitor-top-contributors",
      description:
        "Stop a query with the Network Flow Monitor query interface. Specify the query that you want to stop by providing a query ID and a monitor name. This query returns the top contributors for a specific monitor. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor",
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
            "The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query",
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
      name: "stop-query-workload-insights-top-contributors",
      description:
        "Stop a query with the Network Flow Monitor query interface. Specify the query that you want to stop by providing a query ID and a monitor name. This query returns the top contributors for a specific monitor. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query",
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
      name: "stop-query-workload-insights-top-contributors-data",
      description:
        "Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a scope ID. This query returns data for the top contributors for workload insights. Workload insights provide a high level view of network flow performance data collected by agents for a scope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type, related to a scope (for workload insights) or a monitor. The top contributor network flows overall for a specific metric type, for example, the number of retransmissions",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query",
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
      description: "Adds a tag to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags for a resource",
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
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Keys that you specified when you tagged a resource",
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
        "Update a monitor to add or remove local or remote resources",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor",
          args: {
            name: "string",
          },
        },
        {
          name: "--local-resources-to-add",
          description:
            "The local resources to add, as an array of resources with identifiers and types",
          args: {
            name: "list",
          },
        },
        {
          name: "--local-resources-to-remove",
          description:
            "The local resources to remove, as an array of resources with identifiers and types",
          args: {
            name: "list",
          },
        },
        {
          name: "--remote-resources-to-add",
          description:
            "The remove resources to add, as an array of resources with identifiers and types",
          args: {
            name: "list",
          },
        },
        {
          name: "--remote-resources-to-remove",
          description:
            "The remove resources to remove, as an array of resources with identifiers and types",
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
      name: "update-scope",
      description:
        "Update a scope to add or remove resources that you want to be available for Network Flow Monitor to generate metrics for, when you have active agents on those resources sending metrics reports to the Network Flow Monitor backend",
      options: [
        {
          name: "--scope-id",
          description:
            "The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account",
          args: {
            name: "string",
          },
        },
        {
          name: "--resources-to-add",
          description: "A list of resources to add to a scope",
          args: {
            name: "list",
          },
        },
        {
          name: "--resources-to-delete",
          description: "A list of resources to delete from a scope",
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
