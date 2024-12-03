const completionSpec: Fig.Spec = {
  name: "iot-jobs-data",
  description:
    "IoT Jobs is a service that allows you to define a set of jobs \u2014 remote operations that are sent to and executed on one or more devices connected to Amazon Web Services IoT Core. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations. Find the endpoint address for actions in the IoT jobs data plane by running this CLI command:  aws iot describe-endpoint --endpoint-type iot:Jobs  The service name used by Amazon Web Services Signature Version 4 to sign requests is: iot-jobs-data.  To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.  IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to Amazon Web Services IoT Core. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job",
  subcommands: [
    {
      name: "describe-job-execution",
      description:
        "Gets details of a job execution. Requires permission to access the DescribeJobExecution action",
      options: [
        {
          name: "--job-id",
          description:
            "The unique identifier assigned to this job when it was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--thing-name",
          description:
            "The thing name associated with the device the job execution is running on",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-job-document",
          description:
            "Optional. Unless set to false, the response contains the job document. The default is true",
        },
        {
          name: "--no-include-job-document",
          description:
            "Optional. Unless set to false, the response contains the job document. The default is true",
        },
        {
          name: "--execution-number",
          description:
            "Optional. A number that identifies a particular job execution on a particular device. If not specified, the latest job execution is returned",
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
      name: "get-pending-job-executions",
      description:
        "Gets the list of all jobs for a thing that are not in a terminal status. Requires permission to access the GetPendingJobExecutions action",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing that is executing the job",
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
      name: "start-command-execution",
      description:
        "Using the command created with the CreateCommand API, start a command execution on a specific device",
      options: [
        {
          name: "--target-arn",
          description:
            "The Amazon Resource Number (ARN) of the device where the command execution is occurring",
          args: {
            name: "string",
          },
        },
        {
          name: "--command-arn",
          description:
            "The Amazon Resource Number (ARN) of the command. For example, arn:aws:iot:<region>:<accountid>:command/<commandName>",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "A list of parameters that are required by the StartCommandExecution API when performing the command on a device",
          args: {
            name: "map",
          },
        },
        {
          name: "--execution-timeout-seconds",
          description:
            "Specifies the amount of time in second the device has to finish the command execution. A timer is started as soon as the command execution is created. If the command execution status is not set to another terminal state before the timer expires, it will automatically update to TIMED_OUT",
          args: {
            name: "long",
          },
        },
        {
          name: "--client-token",
          description:
            "The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you retry the request using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request",
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
      name: "start-next-pending-job-execution",
      description:
        "Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing. Requires permission to access the StartNextPendingJobExecution action",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing associated with the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-details",
          description:
            "A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. The maximum length of the value in the name/value pair is 1,024 characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--step-timeout-in-minutes",
          description:
            "Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling UpdateJobExecution, setting the status to IN_PROGRESS, and specifying a new timeout value in field stepTimeoutInMinutes) the job execution status will be automatically set to TIMED_OUT. Note that setting the step timeout has no effect on the in progress timeout that may have been specified when the job was created (CreateJob using field timeoutConfig). Valid values for this parameter range from 1 to 10080 (1 minute to 7 days)",
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
      name: "update-job-execution",
      description:
        "Updates the status of a job execution. Requires permission to access the UpdateJobExecution action",
      options: [
        {
          name: "--job-id",
          description:
            "The unique identifier assigned to this job when it was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--thing-name",
          description: "The name of the thing associated with the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-details",
          description:
            "Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. The maximum length of the value in the name/value pair is 1,024 characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--step-timeout-in-minutes",
          description:
            "Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling UpdateJobExecution, setting the status to IN_PROGRESS, and specifying a new timeout value in this field) the job execution status will be automatically set to TIMED_OUT. Note that setting or resetting the step timeout has no effect on the in progress timeout that may have been specified when the job was created (CreateJob using field timeoutConfig). Valid values for this parameter range from 1 to 10080 (1 minute to 7 days). A value of -1 is also valid and will cancel the current step timer (created by an earlier use of UpdateJobExecutionRequest)",
          args: {
            name: "long",
          },
        },
        {
          name: "--expected-version",
          description:
            "Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)",
          args: {
            name: "long",
          },
        },
        {
          name: "--include-job-execution-state",
          description:
            "Optional. When included and set to true, the response contains the JobExecutionState data. The default is false",
        },
        {
          name: "--no-include-job-execution-state",
          description:
            "Optional. When included and set to true, the response contains the JobExecutionState data. The default is false",
        },
        {
          name: "--include-job-document",
          description:
            "Optional. When set to true, the response contains the job document. The default is false",
        },
        {
          name: "--no-include-job-document",
          description:
            "Optional. When set to true, the response contains the job document. The default is false",
        },
        {
          name: "--execution-number",
          description:
            "Optional. A number that identifies a particular job execution on a particular device",
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
  ],
};
export default completionSpec;
