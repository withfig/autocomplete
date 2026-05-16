const completionSpec: Fig.Spec = {
  name: "networkmonitor",
  description:
    "Amazon CloudWatch Network Monitor is an Amazon Web Services active network monitoring service that identifies if a network issues exists within the Amazon Web Services network or your own company network. Within Network Monitor you'll choose the source VPCs and subnets from the Amazon Web Services network in which you operate and then you'll choose the destination IP addresses from your on-premises network. From these sources and destinations, Network Monitor creates a monitor containing all the possible source and destination combinations, each of which is called a probe, within a single monitor. These probes then monitor network traffic to help you identify where network issues might be affecting your traffic. Before you begin, ensure the Amazon Web Services CLI is configured in the Amazon Web Services Account where you will create the Network Monitor resource. Network Monitor doesn\u2019t support creation on cross-account resources, but you can create a Network Monitor in any subnet belonging to a VPC owned by your Account. For more information, see Using Amazon CloudWatch Network Monitor in the Amazon CloudWatch User Guide",
  subcommands: [
    {
      name: "create-monitor",
      description:
        "Creates a monitor between a source subnet and destination IP address. Within a monitor you'll create one or more probes that monitor network traffic between your source Amazon Web Services VPC subnets and your destination IP addresses. Each probe then aggregates and sends metrics to Amazon CloudWatch. You can also create a monitor with probes using this command. For each probe, you define the following:    source\u2014The subnet IDs where the probes will be created.    destination\u2014 The target destination IP address for the probe.    destinationPort\u2014Required only if the protocol is TCP.    protocol\u2014The communication protocol between the source and destination. This will be either TCP or ICMP.    packetSize\u2014The size of the packets. This must be a number between 56 and 8500.   (Optional) tags \u2014Key-value pairs created and assigned to the probe",
      options: [
        {
          name: "--monitor-name",
          description:
            "The name identifying the monitor. It can contain only letters, underscores (_), or dashes (-), and can be up to 200 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--probes",
          description:
            "Displays a list of all of the probes created for a monitor",
          args: {
            name: "list",
          },
        },
        {
          name: "--aggregation-period",
          description:
            "The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid values are either 30 or 60. 60 is the default if no period is chosen",
          args: {
            name: "long",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs created and assigned to the monitor",
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
      name: "create-probe",
      description:
        "Create a probe within a monitor. Once you create a probe, and it begins monitoring your network traffic, you'll incur billing charges for that probe. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names. Note the name of the monitorName you want to create the probe for",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor to associated with the probe",
          args: {
            name: "string",
          },
        },
        {
          name: "--probe",
          description:
            "Describes the details of an individual probe for a monitor",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs created and assigned to the probe",
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
      description:
        "Deletes a specified monitor. This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names",
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
      name: "delete-probe",
      description:
        "Deletes the specified probe. Once a probe is deleted you'll no longer incur any billing fees for that probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs. You can only delete a single probe at a time using this action",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--probe-id",
          description: "The ID of the probe to delete",
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
        "Returns details about a specific monitor.  This action requires the monitorName parameter. Run ListMonitors to get a list of monitor names",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor that details are returned for",
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
      name: "get-probe",
      description:
        "Returns the details about a probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs",
      options: [
        {
          name: "--monitor-name",
          description:
            "The name of the monitor associated with the probe. Run ListMonitors to get a list of monitor names",
          args: {
            name: "string",
          },
        },
        {
          name: "--probe-id",
          description:
            "The ID of the probe to get information about. Run GetMonitor action to get a list of probes and probe IDs for the monitor",
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
      description: "Returns a list of all of your monitors",
      options: [
        {
          name: "--next-token",
          description: "The token for the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If MaxResults is given a value larger than 100, only 100 results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--state",
          description: "The list of all monitors and their states",
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
      description: "Lists the tags assigned to this resource",
      options: [
        {
          name: "--resource-arn",
          description: "The",
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
      description: "Adds key-value pairs to a monitor or probe",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the monitor or probe to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs assigned to the monitor or probe",
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
      description: "Removes a key-value pair from a monitor or probe",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the monitor or probe that the tag should be removed from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The key-value pa",
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
        "Updates the aggregationPeriod for a monitor. Monitors support an aggregationPeriod of either 30 or 60 seconds. This action requires the monitorName and probeId parameter. Run ListMonitors to get a list of monitor names",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--aggregation-period",
          description:
            "The aggregation time, in seconds, to change to. This must be either 30 or 60",
          args: {
            name: "long",
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
      name: "update-probe",
      description:
        "Updates a monitor probe. This action requires both the monitorName and probeId parameters. Run ListMonitors to get a list of monitor names. Run GetMonitor to get a list of probes and probe IDs.  You can update the following para create a monitor with probes using this command. For each probe, you define the following:    state\u2014The state of the probe.    destination\u2014 The target destination IP address for the probe.    destinationPort\u2014Required only if the protocol is TCP.    protocol\u2014The communication protocol between the source and destination. This will be either TCP or ICMP.    packetSize\u2014The size of the packets. This must be a number between 56 and 8500.   (Optional) tags \u2014Key-value pairs created and assigned to the probe",
      options: [
        {
          name: "--monitor-name",
          description: "The name of the monitor that the probe was updated for",
          args: {
            name: "string",
          },
        },
        {
          name: "--probe-id",
          description: "The ID of the probe to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The state of the probe update",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The updated IP address for the probe destination. This must be either an IPv4 or IPv6 address",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-port",
          description:
            "The updated port for the probe destination. This is required only if the protocol is TCP and must be a number between 1 and 65536",
          args: {
            name: "integer",
          },
        },
        {
          name: "--protocol",
          description:
            "The updated network protocol for the destination. This can be either TCP or ICMP. If the protocol is TCP, then port is also required",
          args: {
            name: "string",
          },
        },
        {
          name: "--packet-size",
          description:
            "He updated packets size for network traffic between the source and destination. This must be a number between 56 and 8500",
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
  ],
};
export default completionSpec;
