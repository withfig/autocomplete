const completionSpec: Fig.Spec = {
  name: "autoscaling-plans",
  description:
    "AWS Auto Scaling Use AWS Auto Scaling to create scaling plans for your applications to automatically scale your scalable AWS resources.   API Summary  You can use the AWS Auto Scaling service API to accomplish the following tasks:   Create and manage scaling plans   Define target tracking scaling policies to dynamically scale your resources based on utilization   Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your Amazon EC2 capacity faster   Set minimum and maximum capacity limits   Retrieve information on existing scaling plans   Access current forecast data and historical forecast data for up to 56 days previous   To learn more about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the AWS Auto Scaling User Guide",
  subcommands: [
    {
      name: "create-scaling-plan",
      description: "Creates a scaling plan",
      options: [
        {
          name: "--scaling-plan-name",
          description:
            "The name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-source",
          description:
            "A CloudFormation stack or set of tags. You can create one scaling plan per application source. For more information, see ApplicationSource in the AWS Auto Scaling API Reference",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scaling-instructions",
          description:
            "The scaling instructions. For more information, see ScalingInstruction in the AWS Auto Scaling API Reference",
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
      name: "delete-scaling-plan",
      description:
        "Deletes the specified scaling plan. Deleting a scaling plan deletes the underlying ScalingInstruction for all of the scalable resources that are covered by the plan. If the plan has launched resources or has scaling activities in progress, you must delete those resources separately",
      options: [
        {
          name: "--scaling-plan-name",
          description: "The name of the scaling plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-plan-version",
          description:
            "The version number of the scaling plan. Currently, the only valid value is 1",
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
      name: "describe-scaling-plan-resources",
      description:
        "Describes the scalable resources in the specified scaling plan",
      options: [
        {
          name: "--scaling-plan-name",
          description: "The name of the scaling plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-plan-version",
          description:
            "The version number of the scaling plan. Currently, the only valid value is 1",
          args: {
            name: "long",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of scalable resources to return. The value must be between 1 and 50. The default value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token for the next set of results",
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
      name: "describe-scaling-plans",
      description: "Describes one or more of your scaling plans",
      options: [
        {
          name: "--scaling-plan-names",
          description:
            "The names of the scaling plans (up to 10). If you specify application sources, you cannot specify scaling plan names",
          args: {
            name: "list",
          },
        },
        {
          name: "--scaling-plan-version",
          description:
            "The version number of the scaling plan. Currently, the only valid value is 1.  If you specify a scaling plan version, you must also specify a scaling plan name",
          args: {
            name: "long",
          },
        },
        {
          name: "--application-sources",
          description:
            "The sources for the applications (up to 10). If you specify scaling plan names, you cannot specify application sources",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of scalable resources to return. This value can be between 1 and 50. The default value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token for the next set of results",
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
      name: "get-scaling-plan-resource-forecast-data",
      description:
        "Retrieves the forecast data for a scalable resource. Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days",
      options: [
        {
          name: "--scaling-plan-name",
          description: "The name of the scaling plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-plan-version",
          description:
            "The version number of the scaling plan. Currently, the only valid value is 1",
          args: {
            name: "long",
          },
        },
        {
          name: "--service-namespace",
          description:
            "The namespace of the AWS service. The only valid value is autoscaling",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The ID of the resource. This string consists of a prefix (autoScalingGroup) followed by the name of a specified Auto Scaling group (my-asg). Example: autoScalingGroup/my-asg",
          args: {
            name: "string",
          },
        },
        {
          name: "--scalable-dimension",
          description:
            "The scalable dimension for the resource. The only valid value is autoscaling:autoScalingGroup:DesiredCapacity",
          args: {
            name: "string",
          },
        },
        {
          name: "--forecast-data-type",
          description:
            "The type of forecast data to get.    LoadForecast: The load metric forecast.     CapacityForecast: The capacity forecast.     ScheduledActionMinCapacity: The minimum capacity for each scheduled scaling action. This data is calculated as the larger of two values: the capacity forecast or the minimum capacity in the scaling instruction.    ScheduledActionMaxCapacity: The maximum capacity for each scheduled scaling action. The calculation used is determined by the predictive scaling maximum capacity behavior setting in the scaling instruction",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The inclusive start time of the time range for the forecast data to get. The date and time can be at most 56 days before the current date and time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is seven days.  Although this parameter can accept a date and time that is more than two days in the future, the availability of forecast data has limits. AWS Auto Scaling only issues forecasts for periods of two days in advance",
          args: {
            name: "timestamp",
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
      name: "update-scaling-plan",
      description:
        "Updates the specified scaling plan. You cannot update a scaling plan if it is in the process of being created, updated, or deleted",
      options: [
        {
          name: "--scaling-plan-name",
          description: "The name of the scaling plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-plan-version",
          description:
            "The version number of the scaling plan. The only valid value is 1. Currently, you cannot have multiple scaling plan versions",
          args: {
            name: "long",
          },
        },
        {
          name: "--application-source",
          description:
            "A CloudFormation stack or set of tags. For more information, see ApplicationSource in the AWS Auto Scaling API Reference",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scaling-instructions",
          description:
            "The scaling instructions. For more information, see ScalingInstruction in the AWS Auto Scaling API Reference",
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
