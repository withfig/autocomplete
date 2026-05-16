const completionSpec: Fig.Spec = {
  name: "emr-serverless",
  description:
    'Amazon EMR Serverless is a new deployment option for Amazon EMR. Amazon EMR Serverless provides a serverless runtime environment that simplifies running analytics applications using the latest open source frameworks such as Apache Spark and Apache Hive. With Amazon EMR Serverless, you don\u2019t have to configure, optimize, secure, or operate clusters to run applications with these frameworks. The API reference to Amazon EMR Serverless is emr-serverless. The emr-serverless prefix is used in the following scenarios:    It is the prefix in the CLI commands for Amazon EMR Serverless. For example, aws emr-serverless start-job-run.   It is the prefix before IAM policy actions for Amazon EMR Serverless. For example, "Action": ["emr-serverless:StartJobRun"]. For more information, see Policy actions for Amazon EMR Serverless.   It is the prefix used in Amazon EMR Serverless service endpoints. For example, emr-serverless.us-east-2.amazonaws.com',
  subcommands: [
    {
      name: "cancel-job-run",
      description: "Cancels a job run",
      options: [
        {
          name: "--application-id",
          description:
            "The ID of the application on which the job run will be canceled",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-run-id",
          description: "The ID of the job run to cancel",
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
      name: "create-application",
      description: "Creates an application",
      options: [
        {
          name: "--name",
          description: "The name of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--release-label",
          description: "The Amazon EMR release associated with the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of application you want to start, such as Spark or Hive",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "The client idempotency token of the application to create. Its value must be unique for each request",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-capacity",
          description:
            "The capacity to initialize when the application is created",
          args: {
            name: "map",
          },
        },
        {
          name: "--maximum-capacity",
          description:
            "The maximum capacity to allocate when the application is created. This is cumulative across all workers at any given point in time, not just when an application is created. No new resources will be created once any one of the defined limits is hit",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags assigned to the application",
          args: {
            name: "map",
          },
        },
        {
          name: "--auto-start-configuration",
          description:
            "The configuration for an application to automatically start on job submission",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-stop-configuration",
          description:
            "The configuration for an application to automatically stop after a certain amount of time being idle",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-configuration",
          description:
            "The network configuration for customer VPC connectivity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--architecture",
          description: "The CPU architecture of an application",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-configuration",
          description:
            "The image configuration for all worker types. You can either set this parameter or imageConfiguration for each worker type in workerTypeSpecifications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--worker-type-specifications",
          description:
            "The key-value pairs that specify worker type to WorkerTypeSpecificationInput. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types",
          args: {
            name: "map",
          },
        },
        {
          name: "--runtime-configuration",
          description:
            "The Configuration specifications to use when creating an application. Each configuration consists of a classification and properties. This configuration is applied to all the job runs submitted under the application",
          args: {
            name: "list",
          },
        },
        {
          name: "--monitoring-configuration",
          description: "The configuration setting for monitoring",
          args: {
            name: "structure",
          },
        },
        {
          name: "--interactive-configuration",
          description:
            "The interactive configuration object that enables the interactive use cases to use when running an application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scheduler-configuration",
          description:
            "The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above",
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
      name: "delete-application",
      description:
        "Deletes an application. An application has to be in a stopped or created state in order to be deleted",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application that will be deleted",
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
      name: "get-application",
      description:
        "Displays detailed information about a specified application",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application that will be described",
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
      name: "get-dashboard-for-job-run",
      description:
        "Creates and returns a URL that you can use to access the application UIs for a job run. For jobs in a running state, the application UI is a live user interface such as the Spark or Tez web UI. For completed jobs, the application UI is a persistent application user interface such as the Spark History Server or persistent Tez UI.  The URL is valid for one hour after you generate it. To access the application UI after that hour elapses, you must invoke the API again to generate a new URL",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-run-id",
          description: "The ID of the job run",
          args: {
            name: "string",
          },
        },
        {
          name: "--attempt",
          description:
            "An optimal parameter that indicates the amount of attempts for the job. If not specified, this value defaults to the attempt of the latest job",
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
      name: "get-job-run",
      description: "Displays detailed information about a job run",
      options: [
        {
          name: "--application-id",
          description:
            "The ID of the application on which the job run is submitted",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-run-id",
          description: "The ID of the job run",
          args: {
            name: "string",
          },
        },
        {
          name: "--attempt",
          description:
            "An optimal parameter that indicates the amount of attempts for the job. If not specified, this value defaults to the attempt of the latest job",
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
      name: "list-applications",
      description: "Lists applications based on a set of parameters",
      options: [
        {
          name: "--next-token",
          description: "The token for the next set of application results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of applications that can be listed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--states",
          description:
            "An optional filter for application states. Note that if this filter contains multiple states, the resulting list will be grouped by the state",
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
      name: "list-job-run-attempts",
      description: "Lists all attempt of a job run",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application for which to list job runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-run-id",
          description: "The ID of the job run to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token for the next set of job run attempt results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of job run attempts to list",
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
      name: "list-job-runs",
      description: "Lists job runs based on a set of parameters",
      options: [
        {
          name: "--application-id",
          description:
            "The ID of the application for which to list the job run",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token for the next set of job run results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of job runs that can be listed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--created-at-after",
          description:
            "The lower bound of the option to filter by creation date and time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-at-before",
          description:
            "The upper bound of the option to filter by creation date and time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--states",
          description:
            "An optional filter for job run states. Note that if this filter contains multiple states, the resulting list will be grouped by the state",
          args: {
            name: "list",
          },
        },
        {
          name: "--mode",
          description: "The mode of the job runs to list",
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
      description: "Lists the tags assigned to the resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs",
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
      name: "start-application",
      description:
        "Starts a specified application and initializes initial capacity if configured",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application to start",
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
      name: "start-job-run",
      description: "Starts a job run",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application on which to run the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "The client idempotency token of the job run to start. Its value must be unique for each request",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description: "The execution role ARN for the job run",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-driver",
          description: "The job driver for the job run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--configuration-overrides",
          description: "The configuration overrides for the job run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags assigned to the job run",
          args: {
            name: "map",
          },
        },
        {
          name: "--execution-timeout-minutes",
          description:
            "The maximum duration for the job run to run. If the job run runs beyond this duration, it will be automatically cancelled",
          args: {
            name: "long",
          },
        },
        {
          name: "--name",
          description:
            "The optional job run name. This doesn't have to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description: "The mode of the job run when it starts",
          args: {
            name: "string",
          },
        },
        {
          name: "--retry-policy",
          description: "The retry policy when job run starts",
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
      name: "stop-application",
      description:
        "Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application to stop",
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
        "Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to add to the resource. A tag is an array of key-value pairs",
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
      description: "Removes tags from resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to be removed",
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
      name: "update-application",
      description:
        "Updates a specified application. An application has to be in a stopped or created state in order to be updated",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "The client idempotency token of the application to update. Its value must be unique for each request",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-capacity",
          description:
            "The capacity to initialize when the application is updated",
          args: {
            name: "map",
          },
        },
        {
          name: "--maximum-capacity",
          description:
            "The maximum capacity to allocate when the application is updated. This is cumulative across all workers at any given point in time during the lifespan of the application. No new resources will be created once any one of the defined limits is hit",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-start-configuration",
          description:
            "The configuration for an application to automatically start on job submission",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-stop-configuration",
          description:
            "The configuration for an application to automatically stop after a certain amount of time being idle",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-configuration",
          description:
            "The network configuration for customer VPC connectivity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--architecture",
          description: "The CPU architecture of an application",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-configuration",
          description:
            "The image configuration to be used for all worker types. You can either set this parameter or imageConfiguration for each worker type in WorkerTypeSpecificationInput",
          args: {
            name: "structure",
          },
        },
        {
          name: "--worker-type-specifications",
          description:
            "The key-value pairs that specify worker type to WorkerTypeSpecificationInput. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types",
          args: {
            name: "map",
          },
        },
        {
          name: "--interactive-configuration",
          description:
            "The interactive configuration object that contains new interactive use cases when the application is updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--release-label",
          description:
            "The Amazon EMR release label for the application. You can change the release label to use a different release of Amazon EMR",
          args: {
            name: "string",
          },
        },
        {
          name: "--runtime-configuration",
          description:
            "The Configuration specifications to use when updating an application. Each configuration consists of a classification and properties. This configuration is applied across all the job runs submitted under the application",
          args: {
            name: "list",
          },
        },
        {
          name: "--monitoring-configuration",
          description: "The configuration setting for monitoring",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scheduler-configuration",
          description:
            "The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above",
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
