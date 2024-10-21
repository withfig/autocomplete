const completionSpec: Fig.Spec = {
  name: "deadline",
  description:
    "The Amazon Web Services Deadline Cloud API provides infrastructure and centralized management for your projects. Use the Deadline Cloud API to onboard users, assign projects, and attach permissions specific to their job function. With Deadline Cloud, content production teams can deploy resources for their workforce securely in the cloud, reducing the costs of added physical infrastructure. Keep your content production operations secure, while allowing your contributors to access the tools they need, such as scalable high-speed storage, licenses, and cost management services",
  subcommands: [
    {
      name: "associate-member-to-farm",
      description: "Assigns a farm membership level to a member",
      options: [
        {
          name: "--farm-id",
          description: "The ID of the farm to associate with the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "The member's principal ID to associate with the farm",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-type",
          description:
            "The principal type of the member to associate with the farm",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-store-id",
          description:
            "The identity store ID of the member to associate with the farm",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-level",
          description:
            "The principal's membership level for the associated farm",
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
      name: "associate-member-to-fleet",
      description: "Assigns a fleet membership level to a member",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the fleet to associate with the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The ID of the fleet to associate with a member",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "The member's principal ID to associate with a fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-type",
          description:
            "The member's principal type to associate with the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-store-id",
          description:
            "The member's identity store ID to associate with the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-level",
          description:
            "The principal's membership level for the associated fleet",
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
      name: "associate-member-to-job",
      description: "Assigns a job membership level to a member",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the job to associate with the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to associate to the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to associate with the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "The member's principal ID to associate with the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-type",
          description: "The member's principal type to associate with the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-store-id",
          description:
            "The member's identity store ID to associate with the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-level",
          description:
            "The principal's membership level for the associated job",
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
      name: "associate-member-to-queue",
      description: "Assigns a queue membership level to a member",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the queue to associate with the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The ID of the queue to associate to the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "The member's principal ID to associate with the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-type",
          description:
            "The member's principal type to associate with the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-store-id",
          description:
            "The member's identity store ID to associate with the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-level",
          description:
            "The principal's membership level for the associated queue",
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
      name: "assume-fleet-role-for-read",
      description:
        "Get Amazon Web Services credentials from the fleet role. The IAM permissions of the credentials are scoped down to have read-only access",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the fleet's farm",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID",
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
      name: "assume-fleet-role-for-worker",
      description: "Get credentials from the fleet role for a worker",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the fleet's farm",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID that contains the worker",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-id",
          description: "The ID of the worker assuming the fleet role",
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
      name: "assume-queue-role-for-read",
      description:
        "Gets Amazon Web Services credentials from the queue role. The IAM permissions of the credentials are scoped down to have read-only access",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm containing the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID",
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
      name: "assume-queue-role-for-user",
      description: "Allows a user to assume a role for a queue",
      options: [
        {
          name: "--farm-id",
          description:
            "The farm ID of the queue that the user assumes the role for",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description:
            "The queue ID of the queue that the user assumes the role for",
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
      name: "assume-queue-role-for-worker",
      description: "Allows a worker to assume a queue role",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the worker assuming the queue role",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID of the worker assuming the queue role",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-id",
          description: "The worker ID of the worker assuming the queue role",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID of the worker assuming the queue role",
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
      name: "batch-get-job-entity",
      description: "Get batched job details for a worker",
      options: [
        {
          name: "--farm-id",
          description:
            "The farm ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description:
            "The fleet ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-id",
          description:
            "The worker ID of the worker containing the job details to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifiers",
          description:
            "The job identifiers to include within the job entity batch details",
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
      name: "copy-job-template",
      description: "Copies a job template to an Amazon S3 bucket",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID to copy",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to copy",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to copy",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-s3-location",
          description:
            "The Amazon S3 bucket name and key where you would like to add a copy of the job template",
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
      name: "create-budget",
      description:
        "Creates a budget to set spending thresholds for your rendering activity",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID to include in this budget",
          args: {
            name: "string",
          },
        },
        {
          name: "--usage-tracking-resource",
          description: "The queue ID provided to this budget to track usage",
          args: {
            name: "structure",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the budget.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the budget.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--approximate-dollar-limit",
          description: "The dollar limit based on consumed usage",
          args: {
            name: "float",
          },
        },
        {
          name: "--actions",
          description:
            "The budget actions to specify what happens when the budget runs out",
          args: {
            name: "list",
          },
        },
        {
          name: "--schedule",
          description: "The schedule to associate with this budget",
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
      name: "create-farm",
      description:
        "Creates a farm to allow space for queues and fleets. Farms are the space where the components of your renders gather and are pieced together in the cloud. Farms contain budgets and allow you to enforce permissions. Deadline Cloud farms are a useful container for large projects",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the farm.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the farm.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-arn",
          description: "The ARN of the KMS key to use on the farm",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to add to your farm. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings",
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
      name: "create-fleet",
      description:
        "Creates a fleet. Fleets gather information relating to compute, or capacity, for renders within your farms. You can choose to manage your own capacity or opt to have fleets fully managed by Deadline Cloud",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID of the farm to connect to the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the fleet.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the fleet.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The IAM role ARN for the role that the fleet's workers will use",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-worker-count",
          description: "The minimum number of workers for the fleet",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-worker-count",
          description: "The maximum number of workers for the fleet",
          args: {
            name: "integer",
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration settings for the fleet. Customer managed fleets are self-managed. Service managed Amazon EC2 fleets are managed by Deadline Cloud",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings",
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
      name: "create-job",
      description:
        "Creates a job. A job is a set of instructions that AWS Deadline Cloud uses to schedule and run work on available workers. For more information, see Deadline Cloud jobs",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm to connect to the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The ID of the queue that the job is submitted to",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--template",
          description: "The job template to use for this job",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-type",
          description: "The file type for the job template",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "The priority of the job on a scale of 0 to 100. The highest priority (first scheduled) is 100. When two jobs have the same priority, the oldest job is scheduled first",
          args: {
            name: "integer",
          },
        },
        {
          name: "--parameters",
          description: "The parameters for the job",
          args: {
            name: "map",
          },
        },
        {
          name: "--attachments",
          description:
            "The attachments for the job. Attach files required for the job to run to a render job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-profile-id",
          description:
            "The storage profile ID for the storage profile to connect to the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-task-run-status",
          description:
            "The initial job status when it is created. Jobs that are created with a SUSPENDED status will not run until manually requeued",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-failed-tasks-count",
          description:
            "The number of task failures before the job stops running and is marked as FAILED",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-retries-per-task",
          description: "The maximum number of retries for each task",
          args: {
            name: "integer",
          },
        },
        {
          name: "--source-job-id",
          description: "The job ID for the source job",
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
      name: "create-license-endpoint",
      description:
        "Creates a license endpoint to integrate your various licensed software used for rendering on Deadline Cloud",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The VPC (virtual private cloud) ID to use with the license endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description: "The subnet IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description: "The security group IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings",
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
      name: "create-monitor",
      description:
        "Creates an Amazon Web Services Deadline Cloud monitor that you can use to view your farms, queues, and fleets. After you submit a job, you can track the progress of the tasks and steps that make up the job, and then download the job's results",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The name that you give the monitor that is displayed in the Deadline Cloud console.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-center-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM Identity Center instance that authenticates monitor users",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdomain",
          description:
            "The subdomain to use when creating the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that the monitor uses to connect to Deadline Cloud. Every user that signs in to the monitor using IAM Identity Center uses this role to access Deadline Cloud resources",
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
      name: "create-queue",
      description:
        "Creates a queue to coordinate the order in which jobs run on a farm. A queue can also specify where to pull resources and indicate where to output completed jobs",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID of the farm to connect to the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the queue.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the queue.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-budget-action",
          description:
            "The default action to take on a queue if a budget isn't configured",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-attachment-settings",
          description:
            "The job attachment settings for the queue. These are the Amazon S3 bucket name and the Amazon S3 prefix",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The IAM role ARN that workers will use while running jobs for this queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-run-as-user",
          description: "The jobs in the queue run as the specified POSIX user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--required-file-system-location-names",
          description: "The file system location name to include in the queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-storage-profile-ids",
          description: "The storage profile IDs to include in the queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings",
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
      name: "create-queue-environment",
      description:
        "Creates an environment for a queue that defines how jobs in the queue run",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID of the farm to connect to the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to connect the queue and environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "Sets the priority of the environments in the queue from 0 to 10,000, where 0 is the highest priority. If two environments share the same priority value, the environment created first takes higher priority",
          args: {
            name: "integer",
          },
        },
        {
          name: "--template-type",
          description: "The template's file type, JSON or YAML",
          args: {
            name: "string",
          },
        },
        {
          name: "--template",
          description: "The environment template to use in the queue",
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
      name: "create-queue-fleet-association",
      description: "Creates an association between a queue and a fleet",
      options: [
        {
          name: "--farm-id",
          description: "The ID of the farm that the queue and fleet belong to",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID",
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
      name: "create-storage-profile",
      description:
        "Creates a storage profile that specifies the operating system, file type, and file location of resources used on a farm",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description:
            "The farm ID of the farm to connect to the storage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the storage profile.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--os-family",
          description:
            "The type of operating system (OS) for the storage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-locations",
          description: "File system paths to include in the storage profile",
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
      name: "create-worker",
      description:
        "Creates a worker. A worker tells your instance how much processing power (vCPU), and memory (GiB) you\u2019ll need to assemble the digital assets held within a particular instance. You can specify certain instance types to use, or let the worker know which instances types to exclude",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm to connect to the worker",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID to connect to the worker",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-properties",
          description: "The IP address and host name of the worker",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
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
      name: "delete-budget",
      description: "Deletes a budget",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm to remove from the budget",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-id",
          description: "The budget ID of the budget to delete",
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
      name: "delete-farm",
      description: "Deletes a farm",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm to delete",
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
      name: "delete-fleet",
      description: "Deletes a fleet",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID of the farm to remove from the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID of the fleet to delete",
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
      name: "delete-license-endpoint",
      description: "Deletes a license endpoint",
      options: [
        {
          name: "--license-endpoint-id",
          description:
            "The license endpoint ID of the license endpoint to delete",
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
      name: "delete-metered-product",
      description: "Deletes a metered product",
      options: [
        {
          name: "--license-endpoint-id",
          description:
            "The ID of the license endpoint from which to remove the metered product",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product ID to remove from the license endpoint",
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
      name: "delete-monitor",
      description:
        "Removes a Deadline Cloud monitor. After you delete a monitor, you can create a new one and attach farms to the monitor",
      options: [
        {
          name: "--monitor-id",
          description:
            "The unique identifier of the monitor to delete. This ID is returned by the CreateMonitor operation, and is included in the response to the GetMonitor operation",
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
      name: "delete-queue",
      description:
        "Deletes a queue.  You can't recover the jobs in a queue if you delete the queue. Deleting the queue also deletes the jobs in that queue",
      options: [
        {
          name: "--farm-id",
          description: "The ID of the farm from which to remove the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID of the queue to delete",
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
      name: "delete-queue-environment",
      description: "Deletes a queue environment",
      options: [
        {
          name: "--farm-id",
          description:
            "The farm ID of the farm from which to remove the queue environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID of the queue environment to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-environment-id",
          description:
            "The queue environment ID of the queue environment to delete",
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
      name: "delete-queue-fleet-association",
      description: "Deletes a queue-fleet association",
      options: [
        {
          name: "--farm-id",
          description:
            "The farm ID of the farm that holds the queue-fleet association",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID of the queue-fleet association",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID of the queue-fleet association",
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
      name: "delete-storage-profile",
      description: "Deletes a storage profile",
      options: [
        {
          name: "--farm-id",
          description:
            "The farm ID of the farm from which to remove the storage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-profile-id",
          description:
            "The storage profile ID of the storage profile to delete",
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
      name: "delete-worker",
      description: "Deletes a worker",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the worker to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID of the worker to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-id",
          description: "The worker ID of the worker to delete",
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
      name: "disassociate-member-from-farm",
      description: "Disassociates a member from a farm",
      options: [
        {
          name: "--farm-id",
          description:
            "The farm ID of the farm to disassociate from the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "A member's principal ID to disassociate from a farm",
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
      name: "disassociate-member-from-fleet",
      description: "Disassociates a member from a fleet",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the fleet to disassociate a member from",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description:
            "The fleet ID of the fleet to from which to disassociate a member",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "A member's principal ID to disassociate from a fleet",
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
      name: "disassociate-member-from-job",
      description: "Disassociates a member from a job",
      options: [
        {
          name: "--farm-id",
          description:
            "The farm ID for the job to disassociate from the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description:
            "The queue ID connected to a job for which you're disassociating a member",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to disassociate from a member in a job",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "A member's principal ID to disassociate from a job",
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
      name: "disassociate-member-from-queue",
      description: "Disassociates a member from a queue",
      options: [
        {
          name: "--farm-id",
          description:
            "The farm ID for the queue to disassociate from a member",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description:
            "The queue ID of the queue in which you're disassociating from a member",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "A member's principal ID to disassociate from a queue",
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
      name: "get-budget",
      description: "Get a budget",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm connected to the budget",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-id",
          description: "The budget ID",
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
      name: "get-farm",
      description: "Get a farm",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm",
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
      name: "get-fleet",
      description: "Get a fleet",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm in the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID of the fleet to get",
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
      name: "get-job",
      description: "Gets a Deadline Cloud job",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm in the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID associated with the job",
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
      name: "get-license-endpoint",
      description: "Gets a licence endpoint",
      options: [
        {
          name: "--license-endpoint-id",
          description: "The license endpoint ID",
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
      description: "Gets information about the specified monitor",
      options: [
        {
          name: "--monitor-id",
          description:
            "The unique identifier for the monitor. This ID is returned by the CreateMonitor operation",
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
      name: "get-queue",
      description: "Gets a queue",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm in the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the queue to retrieve",
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
      name: "get-queue-environment",
      description: "Gets a queue environment",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the queue environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the queue environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-environment-id",
          description: "The queue environment ID",
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
      name: "get-queue-fleet-association",
      description: "Gets a queue-fleet association",
      options: [
        {
          name: "--farm-id",
          description:
            "The farm ID of the farm that contains the queue-fleet association",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the queue-fleet association",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID for the queue-fleet association",
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
      name: "get-session",
      description: "Gets a session",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The session ID",
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
      name: "get-session-action",
      description: "Gets a session action for the job",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the session action",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the session action",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-action-id",
          description: "The session action ID for the session",
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
      name: "get-sessions-statistics-aggregation",
      description:
        "Gets a set of statistics for queues or farms. Before you can call the GetSessionStatisticsAggregation operation, you must first call the StartSessionsStatisticsAggregation operation. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation",
      options: [
        {
          name: "--farm-id",
          description:
            "The identifier of the farm to include in the statistics. This should be the same as the farm ID used in the call to the StartSessionsStatisticsAggregation operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--aggregation-id",
          description:
            "The identifier returned by the StartSessionsStatisticsAggregation operation that identifies the aggregated statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
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
      name: "get-step",
      description: "Gets a step",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-id",
          description: "The step ID",
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
      name: "get-storage-profile",
      description: "Gets a storage profile",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the storage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-profile-id",
          description: "The storage profile ID",
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
      name: "get-storage-profile-for-queue",
      description: "Gets a storage profile for a queue",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the queue in storage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID the queue in the storage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-profile-id",
          description:
            "The storage profile ID for the storage profile in the queue",
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
      name: "get-task",
      description: "Gets a task",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the farm connected to the task",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the queue connected to the task",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID of the job connected to the task",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-id",
          description: "The step ID for the step connected to the task",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-id",
          description: "The task ID",
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
      name: "get-worker",
      description: "Gets a worker",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the worker",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID of the worker",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-id",
          description: "The worker ID",
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
      name: "list-available-metered-products",
      description: "A list of the available metered products",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-budgets",
      description: "A list of budgets in a farm",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID associated with the budgets",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status",
          description: "The status to list for the budgets",
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
      name: "list-farm-members",
      description: "Lists the members of a farm",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-farms",
      description: "Lists farms",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "The principal ID of the member to list on the farm",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-fleet-members",
      description: "Lists fleet members",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID to include on the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-fleets",
      description: "Lists fleets",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the fleets",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description:
            "The principal ID of the members to include in the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display names of a list of fleets.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-job-members",
      description: "Lists members on a job",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the job to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to include on the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to include on the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-job-parameter-definitions",
      description: "Lists parameter definitions of a job",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the job to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to include on the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to include on the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-jobs",
      description: "Lists jobs",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "The principal ID of the members on the jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-license-endpoints",
      description: "Lists license endpoints",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-metered-products",
      description: "Lists metered products",
      options: [
        {
          name: "--license-endpoint-id",
          description:
            "The license endpoint ID to include on the list of metered products",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-monitors",
      description: "Gets a list of your monitors in Deadline Cloud",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-queue-environments",
      description: "Lists queue environments",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the queue environment list",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the queue environment list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-queue-fleet-associations",
      description: "Lists queue-fleet associations",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the queue-fleet association list",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the queue-fleet association list",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID for the queue-fleet association list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-queue-members",
      description: "Lists the members in a queue",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to include on the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-queues",
      description: "Lists queues",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "The principal IDs to include in the list of queues",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status of the queues listed.    ACTIVE\u2013The queues are active.    SCHEDULING\u2013The queues are scheduling.    SCHEDULING_BLOCKED\u2013The queue scheduling is blocked for these queues",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-session-actions",
      description: "Lists session actions",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the session actions list",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the session actions list",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the session actions list",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The session ID to include on the sessions action list",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-id",
          description: "The task ID for the session actions list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-sessions",
      description: "Lists sessions",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the list of sessions",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the list of sessions",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the list of sessions",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-sessions-for-worker",
      description: "Lists sessions for a worker",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID for the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-id",
          description: "The worker ID for the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-step-consumers",
      description: "Lists step consumers",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the list of step consumers",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the step consumer",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the step consumer",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-id",
          description: "The step ID to include on the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-step-dependencies",
      description: "Lists the dependencies for a step",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID for the step dependencies list",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the step dependencies list",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the step dependencies list",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-id",
          description: "The step ID to include on the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-steps",
      description: "Lists steps for a job",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID to include on the list of steps",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to include on the list of steps",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to include on the list of steps",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-storage-profiles",
      description: "Lists storage profiles",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the storage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-storage-profiles-for-queue",
      description: "Lists storage profiles for a queue",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the queue's storage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID for the storage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      description: "Lists tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The resource ARN to list tags for",
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
      name: "list-tasks",
      description: "Lists tasks for a job",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID connected to the tasks",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID connected to the tasks",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the tasks",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-id",
          description: "The step ID for the tasks",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "list-workers",
      description: "Lists workers",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID connected to the workers",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID of the workers",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null to start from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
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
      name: "put-metered-product",
      description: "Adds a metered product",
      options: [
        {
          name: "--license-endpoint-id",
          description: "The license endpoint ID to add to the metered product",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description: "The product ID to add to the metered product",
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
      name: "search-jobs",
      description: "Searches for jobs",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-ids",
          description: "The queue ID to use in the job search",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-expressions",
          description:
            "The filter expression, AND or OR, to use when searching among a group of search strings in a resource. You can use two groupings per search each within parenthesis ()",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-expressions",
          description: "The search terms for a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--item-offset",
          description:
            "Defines how far into the scrollable list to start the return of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-size",
          description:
            "Specifies the number of items per page for the resource",
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
      name: "search-steps",
      description: "Searches for steps",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID to use for the step search",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-ids",
          description: "The queue IDs in the step search",
          args: {
            name: "list",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to use in the step search",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-expressions",
          description:
            "The filter expression, AND or OR, to use when searching among a group of search strings in a resource. You can use two groupings per search each within parenthesis ()",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-expressions",
          description: "The search terms for a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--item-offset",
          description:
            "Defines how far into the scrollable list to start the return of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-size",
          description:
            "Specifies the number of items per page for the resource",
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
      name: "search-tasks",
      description: "Searches for tasks",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID of the task",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-ids",
          description: "The queue IDs to include in the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the task search",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-expressions",
          description:
            "The filter expression, AND or OR, to use when searching among a group of search strings in a resource. You can use two groupings per search each within parenthesis ()",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-expressions",
          description: "The search terms for a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--item-offset",
          description:
            "Defines how far into the scrollable list to start the return of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-size",
          description:
            "Specifies the number of items per page for the resource",
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
      name: "search-workers",
      description: "Searches for workers",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID in the workers search",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-ids",
          description: "The fleet ID of the workers to search for",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-expressions",
          description:
            "The filter expression, AND or OR, to use when searching among a group of search strings in a resource. You can use two groupings per search each within parenthesis ()",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-expressions",
          description: "The search terms for a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--item-offset",
          description:
            "Defines how far into the scrollable list to start the return of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-size",
          description:
            "Specifies the number of items per page for the resource",
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
      name: "start-sessions-statistics-aggregation",
      description:
        "Starts an asynchronous request for getting aggregated statistics about queues and farms. Get the statistics using the GetSessionsStatisticsAggregation operation. You can only have one running aggregation for your Deadline Cloud farm. Call the GetSessionsStatisticsAggregation operation and check the status field to see if an aggregation is running. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation",
      options: [
        {
          name: "--farm-id",
          description:
            "The identifier of the farm that contains queues or fleets to return statistics for",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-ids",
          description:
            "A list of fleet IDs or queue IDs to gather statistics for",
          args: {
            name: "structure",
          },
        },
        {
          name: "--start-time",
          description:
            "The Linux timestamp of the date and time that the statistics start",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The Linux timestamp of the date and time that the statistics end",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--timezone",
          description:
            'The timezone to use for the statistics. Use UTC notation such as "UTC+8."',
          args: {
            name: "string",
          },
        },
        {
          name: "--period",
          description: "The period to aggregate the statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-by",
          description: "The field to use to group the statistics",
          args: {
            name: "list",
          },
        },
        {
          name: "--statistics",
          description: "One to four statistics to return",
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
      name: "tag-resource",
      description: "Tags a resource using the resource's ARN and desired tags",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource to apply tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings",
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
        "Removes a tag from a resource using the resource's ARN and tag to remove",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource to remove the tag from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "They keys of the tag",
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
      name: "update-budget",
      description:
        "Updates a budget that sets spending thresholds for rendering activity",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID of the budget to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-id",
          description: "The budget ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the budget to update.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the budget to update.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Updates the status of the budget.    ACTIVE\u2013The budget is being evaluated.    INACTIVE\u2013The budget is inactive. This can include Expired, Canceled, or deleted Deleted statuses",
          args: {
            name: "string",
          },
        },
        {
          name: "--approximate-dollar-limit",
          description:
            "The dollar limit to update on the budget. Based on consumed usage",
          args: {
            name: "float",
          },
        },
        {
          name: "--actions-to-add",
          description:
            "The budget actions to add. Budget actions specify what happens when the budget runs out",
          args: {
            name: "list",
          },
        },
        {
          name: "--actions-to-remove",
          description: "The budget actions to remove from the budget",
          args: {
            name: "list",
          },
        },
        {
          name: "--schedule",
          description: "The schedule to update",
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
      name: "update-farm",
      description: "Updates a farm",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the farm to update.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the farm to update.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
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
      name: "update-fleet",
      description: "Updates a fleet",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the fleet to update.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the fleet to update.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The IAM role ARN that the fleet's workers assume while running jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-worker-count",
          description: "The minimum number of workers in the fleet",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-worker-count",
          description: "The maximum number of workers in the fleet",
          args: {
            name: "integer",
          },
        },
        {
          name: "--configuration",
          description: "The fleet configuration to update",
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
      name: "update-job",
      description:
        "Updates a job.  When you change the status of the job to ARCHIVED, the job can't be scheduled or archived.  An archived jobs and its steps and tasks are deleted after 120 days. The job can't be recovered",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID of the job to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID of the job to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-task-run-status",
          description: "The task status to update the job's tasks to",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description: "The job priority to update",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-failed-tasks-count",
          description:
            "The number of task failures before the job stops running and is marked as FAILED",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-retries-per-task",
          description: "The maximum number of retries for a job",
          args: {
            name: "integer",
          },
        },
        {
          name: "--lifecycle-status",
          description:
            "The status of a job in its lifecycle. When you change the status of the job to ARCHIVED, the job can't be scheduled or archived.  An archived jobs and its steps and tasks are deleted after 120 days. The job can't be recovered",
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
      name: "update-monitor",
      description:
        "Modifies the settings for a Deadline Cloud monitor. You can modify one or all of the settings when you call UpdateMonitor",
      options: [
        {
          name: "--monitor-id",
          description: "The unique identifier of the monitor to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdomain",
          description:
            "The new value of the subdomain to use when forming the monitor URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The new value to use for the monitor's display name.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the new IAM role to use with the monitor",
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
      name: "update-queue",
      description: "Updates a queue",
      options: [
        {
          name: "--client-token",
          description: "The idempotency token to update in the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID to update in the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the queue to update.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the queue to update.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-budget-action",
          description:
            "The default action to take for a queue update if a budget isn't configured",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-attachment-settings",
          description: "The job attachment settings to update for the queue",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The IAM role ARN that's used to run jobs from this queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-run-as-user",
          description:
            "Update the jobs in the queue to run as a specified POSIX user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--required-file-system-location-names-to-add",
          description:
            "The required file system location names to add to the queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--required-file-system-location-names-to-remove",
          description:
            "The required file system location names to remove from the queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-storage-profile-ids-to-add",
          description: "The storage profile IDs to add",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-storage-profile-ids-to-remove",
          description: "The storage profile ID to remove",
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
      name: "update-queue-environment",
      description: "Updates the queue environment",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID of the queue environment to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID of the queue environment to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-environment-id",
          description: "The queue environment ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description: "The priority to update",
          args: {
            name: "integer",
          },
        },
        {
          name: "--template-type",
          description: "The template type to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--template",
          description: "The template to update",
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
      name: "update-queue-fleet-association",
      description: "Updates a queue-fleet association",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status to update",
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
      name: "update-session",
      description: "Updates a session",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID to update in the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to update in the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to update in the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The session ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-lifecycle-status",
          description: "The life cycle status to update in the session",
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
      name: "update-step",
      description: "Updates a step",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-id",
          description: "The step ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-task-run-status",
          description: "The task status to update the step's tasks to",
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
      name: "update-storage-profile",
      description: "Updates a storage profile",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-profile-id",
          description: "The storage profile ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The display name of the storage profile to update.  This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--os-family",
          description: "The OS system to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-system-locations-to-add",
          description: "The file system location names to add",
          args: {
            name: "list",
          },
        },
        {
          name: "--file-system-locations-to-remove",
          description: "The file system location names to remove",
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
      name: "update-task",
      description: "Updates a task",
      options: [
        {
          name: "--client-token",
          description:
            "The unique token which the server uses to recognize retries of the same request",
          args: {
            name: "string",
          },
        },
        {
          name: "--farm-id",
          description: "The farm ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The queue ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-id",
          description: "The step ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-id",
          description: "The task ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-run-status",
          description: "The run status with which to start the task",
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
      name: "update-worker",
      description: "Updates a worker",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-id",
          description: "The worker ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The worker status to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--capabilities",
          description: "The worker capabilities to update",
          args: {
            name: "structure",
          },
        },
        {
          name: "--host-properties",
          description: "The host properties to update",
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
      name: "update-worker-schedule",
      description: "Updates the schedule for a worker",
      options: [
        {
          name: "--farm-id",
          description: "The farm ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The fleet ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-id",
          description: "The worker ID to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--updated-session-actions",
          description:
            "The session actions associated with the worker schedule to update",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "fleet-active",
          description:
            "Wait until a Fleet is activated. Use this after invoking CreateFleet or UpdateFleet. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 180 failed checks",
          options: [
            {
              name: "--farm-id",
              description: "The farm ID of the farm in the fleet",
              args: {
                name: "string",
              },
            },
            {
              name: "--fleet-id",
              description: "The fleet ID of the fleet to get",
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
          name: "job-create-complete",
          description:
            "Wait until a Job is created. Use this after invoking CreateJob. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--farm-id",
              description: "The farm ID of the farm in the job",
              args: {
                name: "string",
              },
            },
            {
              name: "--job-id",
              description: "The job ID",
              args: {
                name: "string",
              },
            },
            {
              name: "--queue-id",
              description: "The queue ID associated with the job",
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
          name: "license-endpoint-deleted",
          description:
            "Wait until a LicenseEndpoint is Deleted. Use this after invoking DeleteLicenseEndpoint. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 234 failed checks",
          options: [
            {
              name: "--license-endpoint-id",
              description: "The license endpoint ID",
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
          name: "license-endpoint-valid",
          description:
            "Wait until a LicenseEndpoint is Ready. Use this after invoking CreateLicenseEndpoint. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 114 failed checks",
          options: [
            {
              name: "--license-endpoint-id",
              description: "The license endpoint ID",
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
          name: "queue-fleet-association-stopped",
          description:
            "Wait until a QueueFleetAssociation is stopped. Use this after setting the status to STOP_SCHEDULING_AND_COMPLETE_TASKS or STOP_SCHEDULING_AND_CANCEL_TASKS to wait for a QueueFleetAssociation to reach STOPPED It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--farm-id",
              description:
                "The farm ID of the farm that contains the queue-fleet association",
              args: {
                name: "string",
              },
            },
            {
              name: "--queue-id",
              description: "The queue ID for the queue-fleet association",
              args: {
                name: "string",
              },
            },
            {
              name: "--fleet-id",
              description: "The fleet ID for the queue-fleet association",
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
          name: "queue-scheduling",
          description:
            "Wait until JMESPath query status returns SCHEDULING when polling with ``get-queue``. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 70 failed checks",
          options: [
            {
              name: "--farm-id",
              description: "The farm ID of the farm in the queue",
              args: {
                name: "string",
              },
            },
            {
              name: "--queue-id",
              description: "The queue ID for the queue to retrieve",
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
          name: "queue-scheduling-blocked",
          description:
            "Wait until JMESPath query status returns SCHEDULING_BLOCKED when polling with ``get-queue``. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 30 failed checks",
          options: [
            {
              name: "--farm-id",
              description: "The farm ID of the farm in the queue",
              args: {
                name: "string",
              },
            },
            {
              name: "--queue-id",
              description: "The queue ID for the queue to retrieve",
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
    },
  ],
};
export default completionSpec;
