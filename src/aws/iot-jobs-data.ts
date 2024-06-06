const completionSpec: Fig.Spec = {
  name: "iot-jobs-data",
  description:
    "AWS IoT Jobs is a service that allows you to define a set of jobs \u2014 remote operations that are sent to and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.  To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.  AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job",
  subcommands: [
    {
      name: "describe-job-execution",
      description: "Gets details of a job execution",
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
        "Gets the list of all jobs for a thing that are not in a terminal status",
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
      name: "start-next-pending-job-execution",
      description:
        "Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing",
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
            "A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged",
          args: {
            name: "map",
          },
        },
        {
          name: "--step-timeout-in-minutes",
          description:
            "Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling UpdateJobExecution, setting the status to IN_PROGRESS and specifying a new timeout value in field stepTimeoutInMinutes) the job execution status will be automatically set to TIMED_OUT. Note that setting this timeout has no effect on that job execution timeout which may have been specified when the job was created (CreateJob using field timeoutConfig)",
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
      description: "Updates the status of a job execution",
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
            "Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged",
          args: {
            name: "map",
          },
        },
        {
          name: "--step-timeout-in-minutes",
          description:
            "Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling UpdateJobExecution, setting the status to IN_PROGRESS and specifying a new timeout value in this field) the job execution status will be automatically set to TIMED_OUT. Note that setting or resetting this timeout has no effect on that job execution timeout which may have been specified when the job was created (CreateJob using field timeoutConfig)",
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
