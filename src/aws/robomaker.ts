const completionSpec: Fig.Spec = {
  name: "robomaker",
  description:
    "This section provides documentation for the AWS RoboMaker API operations",
  subcommands: [
    {
      name: "batch-delete-worlds",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Deletes one or more worlds in a batch operation",
      options: [
        {
          name: "--worlds",
          description:
            "A list of Amazon Resource Names (arns) that correspond to worlds to delete",
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
      name: "batch-describe-simulation-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Describes one or more simulation jobs",
      options: [
        {
          name: "--jobs",
          description:
            "A list of Amazon Resource Names (ARNs) of simulation jobs to describe",
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
      name: "cancel-deployment-job",
      description:
        "This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.  Cancels the specified deployment job",
      options: [
        {
          name: "--job",
          description: "The deployment job ARN to cancel",
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
      name: "cancel-simulation-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Cancels the specified simulation job",
      options: [
        {
          name: "--job",
          description: "The simulation job ARN to cancel",
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
      name: "cancel-simulation-job-batch",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch",
      options: [
        {
          name: "--batch",
          description: "The id of the batch to cancel",
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
      name: "cancel-world-export-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Cancels the specified export job",
      options: [
        {
          name: "--job",
          description:
            "The Amazon Resource Name (arn) of the world export job to cancel",
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
      name: "cancel-world-generation-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Cancels the specified world generator job",
      options: [
        {
          name: "--job",
          description:
            "The Amazon Resource Name (arn) of the world generator job to cancel",
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
      name: "create-deployment-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported and will throw an error if used. For more information, see the January 31, 2022 update in the Support policy page.  Deploys a specific version of a robot application to robots in a fleet. The robot application must have a numbered applicationVersion for consistency reasons. To create a new version, use CreateRobotApplicationVersion or see Creating a Robot Application Version.   After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible",
      options: [
        {
          name: "--deployment-config",
          description: "The requested deployment configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet",
          description: "The Amazon Resource Name (ARN) of the fleet to deploy",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-application-configs",
          description: "The deployment application configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the deployment job",
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
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported and will throw an error if used. For more information, see the January 31, 2022 update in the Support policy page.  Creates a fleet, a logical group of robots running the same robot application",
      options: [
        {
          name: "--name",
          description: "The name of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the fleet",
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
      name: "create-robot",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported and will throw an error if used. For more information, see the January 31, 2022 update in the Support policy page.  Creates a robot",
      options: [
        {
          name: "--name",
          description: "The name for the robot",
          args: {
            name: "string",
          },
        },
        {
          name: "--architecture",
          description: "The target architecture of the robot",
          args: {
            name: "string",
          },
        },
        {
          name: "--greengrass-group-id",
          description: "The Greengrass group id",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the robot",
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
      name: "create-robot-application",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Creates a robot application",
      options: [
        {
          name: "--name",
          description: "The name of the robot application",
          args: {
            name: "string",
          },
        },
        {
          name: "--sources",
          description: "The sources of the robot application",
          args: {
            name: "list",
          },
        },
        {
          name: "--robot-software-suite",
          description: "The robot software suite used by the robot application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the robot application",
          args: {
            name: "map",
          },
        },
        {
          name: "--environment",
          description:
            "The object that contains that URI of the Docker image that you use for your robot application",
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
      name: "create-robot-application-version",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Creates a version of a robot application",
      options: [
        {
          name: "--application",
          description: "The application information for the robot application",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-revision-id",
          description:
            "The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-etags",
          description:
            "The Amazon S3 identifier for the zip file bundle that you use for your robot application",
          args: {
            name: "list",
          },
        },
        {
          name: "--image-digest",
          description:
            "A SHA256 identifier for the Docker image that you use for your robot application",
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
      name: "create-simulation-application",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Creates a simulation application",
      options: [
        {
          name: "--name",
          description: "The name of the simulation application",
          args: {
            name: "string",
          },
        },
        {
          name: "--sources",
          description: "The sources of the simulation application",
          args: {
            name: "list",
          },
        },
        {
          name: "--simulation-software-suite",
          description:
            "The simulation software suite used by the simulation application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--robot-software-suite",
          description:
            "The robot software suite used by the simulation application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--rendering-engine",
          description: "The rendering engine for the simulation application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the simulation application",
          args: {
            name: "map",
          },
        },
        {
          name: "--environment",
          description:
            "The object that contains the Docker image URI used to create your simulation application",
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
      name: "create-simulation-application-version",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Creates a simulation application with a specific revision id",
      options: [
        {
          name: "--application",
          description:
            "The application information for the simulation application",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-revision-id",
          description:
            "The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-etags",
          description:
            "The Amazon S3 eTag identifier for the zip file bundle that you use to create the simulation application",
          args: {
            name: "list",
          },
        },
        {
          name: "--image-digest",
          description:
            "The SHA256 digest used to identify the Docker image URI used to created the simulation application",
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
      name: "create-simulation-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Creates a simulation job.  After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible",
      options: [
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-location",
          description:
            "Location for output files generated by the simulation job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--logging-config",
          description: "The logging configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-job-duration-in-seconds",
          description:
            "The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When maxJobDurationInSeconds is reached, the simulation job will status will transition to Completed",
          args: {
            name: "long",
          },
        },
        {
          name: "--iam-role",
          description:
            "The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job",
          args: {
            name: "string",
          },
        },
        {
          name: "--failure-behavior",
          description:
            "The failure behavior the simulation job.  Continue  Leaves the instance running for its maximum timeout duration after a 4XX error code.  Fail  Stop the simulation job and terminate the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--robot-applications",
          description: "The robot application to use in the simulation job",
          args: {
            name: "list",
          },
        },
        {
          name: "--simulation-applications",
          description:
            "The simulation application to use in the simulation job",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-sources",
          description:
            "Specify data sources to mount read-only files from S3 into your simulation. These files are available under /opt/robomaker/datasources/data_source_name.   There is a limit of 100 files and a combined size of 25GB for all DataSourceConfig objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the simulation job",
          args: {
            name: "map",
          },
        },
        {
          name: "--vpc-config",
          description:
            "If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and one subnet ID",
          args: {
            name: "structure",
          },
        },
        {
          name: "--compute",
          description: "Compute information for the simulation job",
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
      name: "create-world-export-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Creates a world export job",
      options: [
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--worlds",
          description:
            "A list of Amazon Resource Names (arns) that correspond to worlds to export",
          args: {
            name: "list",
          },
        },
        {
          name: "--output-location",
          description: "The output location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--iam-role",
          description:
            "The IAM role that the world export process uses to access the Amazon S3 bucket and put the export",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the world export job",
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
      name: "create-world-generation-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Creates worlds using the specified template",
      options: [
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--template",
          description:
            "The Amazon Resource Name (arn) of the world template describing the worlds you want to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--world-count",
          description: "Information about the world count",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the world generator job",
          args: {
            name: "map",
          },
        },
        {
          name: "--world-tags",
          description:
            "A map that contains tag keys and tag values that are attached to the generated worlds",
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
      name: "create-world-template",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Creates a world template",
      options: [
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the world template",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description: "The world template body",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-location",
          description: "The location of the world template",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the world template",
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
      name: "delete-fleet",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.  Deletes a fleet",
      options: [
        {
          name: "--fleet",
          description: "The Amazon Resource Name (ARN) of the fleet",
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
      name: "delete-robot",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.  Deletes a robot",
      options: [
        {
          name: "--robot",
          description: "The Amazon Resource Name (ARN) of the robot",
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
      name: "delete-robot-application",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Deletes a robot application",
      options: [
        {
          name: "--application",
          description:
            "The Amazon Resource Name (ARN) of the the robot application",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-version",
          description: "The version of the robot application to delete",
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
      name: "delete-simulation-application",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Deletes a simulation application",
      options: [
        {
          name: "--application",
          description:
            "The application information for the simulation application to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-version",
          description: "The version of the simulation application to delete",
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
      name: "delete-world-template",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Deletes a world template",
      options: [
        {
          name: "--template",
          description:
            "The Amazon Resource Name (arn) of the world template you want to delete",
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
      name: "deregister-robot",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.  Deregisters a robot",
      options: [
        {
          name: "--fleet",
          description: "The Amazon Resource Name (ARN) of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--robot",
          description: "The Amazon Resource Name (ARN) of the robot",
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
      name: "describe-deployment-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.  Describes a deployment job",
      options: [
        {
          name: "--job",
          description: "The Amazon Resource Name (ARN) of the deployment job",
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
      name: "describe-fleet",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.  Describes a fleet",
      options: [
        {
          name: "--fleet",
          description: "The Amazon Resource Name (ARN) of the fleet",
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
      name: "describe-robot",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.  Describes a robot",
      options: [
        {
          name: "--robot",
          description:
            "The Amazon Resource Name (ARN) of the robot to be described",
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
      name: "describe-robot-application",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Describes a robot application",
      options: [
        {
          name: "--application",
          description:
            "The Amazon Resource Name (ARN) of the robot application",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-version",
          description: "The version of the robot application to describe",
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
      name: "describe-simulation-application",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Describes a simulation application",
      options: [
        {
          name: "--application",
          description:
            "The application information for the simulation application",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-version",
          description: "The version of the simulation application to describe",
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
      name: "describe-simulation-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Describes a simulation job",
      options: [
        {
          name: "--job",
          description:
            "The Amazon Resource Name (ARN) of the simulation job to be described",
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
      name: "describe-simulation-job-batch",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Describes a simulation job batch",
      options: [
        {
          name: "--batch",
          description: "The id of the batch to describe",
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
      name: "describe-world",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Describes a world",
      options: [
        {
          name: "--world",
          description:
            "The Amazon Resource Name (arn) of the world you want to describe",
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
      name: "describe-world-export-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Describes a world export job",
      options: [
        {
          name: "--job",
          description:
            "The Amazon Resource Name (arn) of the world export job to describe",
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
      name: "describe-world-generation-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Describes a world generation job",
      options: [
        {
          name: "--job",
          description:
            "The Amazon Resource Name (arn) of the world generation job to describe",
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
      name: "describe-world-template",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Describes a world template",
      options: [
        {
          name: "--template",
          description:
            "The Amazon Resource Name (arn) of the world template you want to describe",
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
      name: "get-world-template-body",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Gets the world template body",
      options: [
        {
          name: "--template",
          description: "The Amazon Resource Name (arn) of the world template",
          args: {
            name: "string",
          },
        },
        {
          name: "--generation-job",
          description:
            "The Amazon Resource Name (arn) of the world generator job",
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
      name: "list-deployment-jobs",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.   Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs",
      options: [
        {
          name: "--filters",
          description:
            "Optional filters to limit results. The filter names status and fleetName are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status InProgress or the status Pending",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListDeploymentJobs again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListDeploymentJobs only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListDeploymentJobs request with the returned nextToken value. This value can be between 1 and 200. If this parameter is not used, then ListDeploymentJobs returns up to 200 results and a nextToken value if applicable",
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
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.   Returns a list of fleets. You can optionally provide filters to retrieve specific fleets",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListFleets again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListFleets only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListFleets request with the returned nextToken value. This value can be between 1 and 200. If this parameter is not used, then ListFleets returns up to 200 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Optional filters to limit results. The filter name name is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters",
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
      name: "list-robot-applications",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications",
      options: [
        {
          name: "--version-qualifier",
          description: "The version qualifier of the robot application",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListRobotApplications again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListRobotApplications only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListRobotApplications request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListRobotApplications returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Optional filters to limit results. The filter name name is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters",
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
      name: "list-robots",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.   Returns a list of robots. You can optionally provide filters to retrieve specific robots",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListRobots again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListRobots only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListRobots request with the returned nextToken value. This value can be between 1 and 200. If this parameter is not used, then ListRobots returns up to 200 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Optional filters to limit results. The filter names status and fleetName are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status Registered or the status Available",
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
      name: "list-simulation-applications",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications",
      options: [
        {
          name: "--version-qualifier",
          description: "The version qualifier of the simulation application",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListSimulationApplications again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListSimulationApplications only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListSimulationApplications request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListSimulationApplications returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Optional list of filters to limit results. The filter name name is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters",
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
      name: "list-simulation-job-batches",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListSimulationJobBatches again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListSimulationJobBatches only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListSimulationJobBatches request with the returned nextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description: "Optional filters to limit results",
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
      name: "list-simulation-jobs",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListSimulationJobs again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListSimulationJobs only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListSimulationJobs request with the returned nextToken value. This value can be between 1 and 1000. If this parameter is not used, then ListSimulationJobs returns up to 1000 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Optional filters to limit results. The filter names status and simulationApplicationName and robotApplicationName are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status Preparing or the status Running",
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
      name: "list-tags-for-resource",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Lists all tags on a AWS RoboMaker resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed",
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
      name: "list-world-export-jobs",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Lists world export jobs",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListWorldExportJobs again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListWorldExportJobs only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListWorldExportJobs request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListWorldExportJobs returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Optional filters to limit results. You can use generationJobId and templateId",
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
      name: "list-world-generation-jobs",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Lists world generator jobs",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListWorldGenerationJobsRequest again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListWorldGeneratorJobs only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListWorldGeneratorJobs request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListWorldGeneratorJobs returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Optional filters to limit results. You can use status and templateId",
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
      name: "list-world-templates",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Lists world templates",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListWorldTemplates again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListWorldTemplates only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListWorldTemplates request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListWorldTemplates returns up to 100 results and a nextToken value if applicable",
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
      name: "list-worlds",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Lists worlds",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous paginated request did not return all of the remaining results, the response object's nextToken parameter value is set to a token. To retrieve the next set of results, call ListWorlds again and assign that token to the request object's nextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "When this parameter is used, ListWorlds only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListWorlds request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListWorlds returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description: "Optional filters to limit results. You can use status",
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
      name: "register-robot",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Registers a robot with a fleet.  This API is no longer supported and will throw an error if used. For more information, see the January 31, 2022 update in the Support policy page",
      options: [
        {
          name: "--fleet",
          description: "The Amazon Resource Name (ARN) of the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--robot",
          description: "The Amazon Resource Name (ARN) of the robot",
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
      name: "restart-simulation-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Restarts a running simulation job",
      options: [
        {
          name: "--job",
          description: "The Amazon Resource Name (ARN) of the simulation job",
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
      name: "start-simulation-job-batch",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Starts a new simulation job batch. The batch is defined using one or more SimulationJobRequest objects",
      options: [
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--batch-policy",
          description: "The batch policy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--create-simulation-job-requests",
          description:
            "A list of simulation job requests to create in the batch",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the deployment job batch",
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
      name: "sync-deployment-job",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.    This API is no longer supported. For more information, see the May 2, 2022 update in the Support policy page.   Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment",
      options: [
        {
          name: "--client-request-token",
          description:
            "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet",
          description: "The target fleet for the synchronization",
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
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Adds or edits tags for a AWS RoboMaker resource. Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings.  For information about the rules that apply to tag keys and tag values, see User-Defined Tag Restrictions in the AWS Billing and Cost Management User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map that contains tag keys and tag values that are attached to the resource",
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
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Removes the specified tags from the specified AWS RoboMaker resource. To remove a tag, specify the tag key. To change the tag value of an existing tag key, use  TagResource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A map that contains tag keys and tag values that will be unattached from the resource",
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
      name: "update-robot-application",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Updates a robot application",
      options: [
        {
          name: "--application",
          description: "The application information for the robot application",
          args: {
            name: "string",
          },
        },
        {
          name: "--sources",
          description: "The sources of the robot application",
          args: {
            name: "list",
          },
        },
        {
          name: "--robot-software-suite",
          description: "The robot software suite used by the robot application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--current-revision-id",
          description: "The revision id for the robot application",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment",
          description:
            "The object that contains the Docker image URI for your robot application",
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
      name: "update-simulation-application",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Updates a simulation application",
      options: [
        {
          name: "--application",
          description:
            "The application information for the simulation application",
          args: {
            name: "string",
          },
        },
        {
          name: "--sources",
          description: "The sources of the simulation application",
          args: {
            name: "list",
          },
        },
        {
          name: "--simulation-software-suite",
          description:
            "The simulation software suite used by the simulation application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--robot-software-suite",
          description: "Information about the robot software suite",
          args: {
            name: "structure",
          },
        },
        {
          name: "--rendering-engine",
          description: "The rendering engine for the simulation application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--current-revision-id",
          description: "The revision id for the robot application",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment",
          description:
            "The object that contains the Docker image URI for your simulation application",
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
      name: "update-world-template",
      description:
        "End of support notice: On September 10, 2025, Amazon Web Services will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources. For more information on transitioning to Batch to help run containerized simulations, visit https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/.   Updates a world template",
      options: [
        {
          name: "--template",
          description:
            "The Amazon Resource Name (arn) of the world template to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description: "The world template body",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-location",
          description: "The location of the world template",
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
