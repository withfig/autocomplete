const completionSpec: Fig.Spec = {
  name: "batch",
  description:
    "Batch Using Batch, you can run batch computing workloads on the Amazon Web Services Cloud. Batch computing is a common means for developers, scientists, and engineers to access large amounts of compute resources. Batch uses the advantages of the batch computing to remove the undifferentiated heavy lifting of configuring and managing required infrastructure. At the same time, it also adopts a familiar batch computing software approach. You can use Batch to efficiently provision resources, and work toward eliminating capacity constraints, reducing your overall compute costs, and delivering results more quickly. As a fully managed service, Batch can run batch computing workloads of any scale. Batch automatically provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific workloads. With Batch, there's no need to install or manage batch computing software. This means that you can focus on analyzing results and solving your specific problems instead",
  subcommands: [
    {
      name: "cancel-job",
      description:
        "Cancels a job in an Batch job queue. Jobs that are in a SUBMITTED, PENDING, or RUNNABLE state are cancelled and the job status is updated to FAILED.  A PENDING job is canceled after all dependency jobs are completed. Therefore, it may take longer than expected to cancel a job in PENDING status. When you try to cancel an array parent job in PENDING, Batch attempts to cancel all child jobs. The array parent job is canceled when all child jobs are completed.  Jobs that progressed to the STARTING or RUNNING state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the TerminateJob operation",
      options: [
        {
          name: "--job-id",
          description: "The Batch job ID of the job to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "A message to attach to the job that explains the reason for canceling it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs. This parameter has as limit of 1024 characters",
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
      name: "create-compute-environment",
      description:
        "Creates an Batch compute environment. You can create MANAGED or UNMANAGED compute environments. MANAGED compute environments can use Amazon EC2 or Fargate resources. UNMANAGED compute environments can only use EC2 resources. In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the launch template that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.  Multi-node parallel jobs aren't supported on Spot Instances.  In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see container instance AMIs in the Amazon Elastic Container Service Developer Guide. After you created your unmanaged compute environment, you can use the DescribeComputeEnvironments operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see Launching an Amazon ECS container instance in the Amazon Elastic Container Service Developer Guide.  To create a compute environment that uses EKS resources, the caller must have permissions to call eks:DescribeCluster.   Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:   Create a new compute environment with the new AMI.   Add the compute environment to an existing job queue.   Remove the earlier compute environment from your job queue.   Delete the earlier compute environment.   In April 2022, Batch added enhanced support for updating compute environments. For more information, see Updating compute environments. To use the enhanced updating of compute environments to update AMIs, follow these rules:   Either don't set the service role (serviceRole) parameter or set it to the AWSBatchServiceRole service-linked role.   Set the allocation strategy (allocationStrategy) parameter to BEST_FIT_PROGRESSIVE, SPOT_CAPACITY_OPTIMIZED, or SPOT_PRICE_CAPACITY_OPTIMIZED.   Set the update to latest image version (updateToLatestImageVersion) parameter to true. The updateToLatestImageVersion parameter is used when you update a compute environment. This parameter is ignored when you create a compute environment.   Don't specify an AMI ID in imageId, imageIdOverride (in  ec2Configuration ), or in the launch template (launchTemplate). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the imageId or imageIdOverride parameters, or the launch template identified by the LaunchTemplate properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the imageId or imageIdOverride parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to $Default or $Latest, by setting either a new default version for the launch template (if $Default) or by adding a new version to the launch template (if $Latest).   If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the version setting in the launch template (launchTemplate) is set to $Latest or $Default, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the launchTemplate wasn't updated",
      options: [
        {
          name: "--compute-environment-name",
          description:
            "The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the compute environment: MANAGED or UNMANAGED. For more information, see Compute Environments in the Batch User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "The state of the compute environment. If the state is ENABLED, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. If the state is ENABLED, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand. If the state is DISABLED, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a STARTING or RUNNING state continue to progress normally. Managed compute environments in the DISABLED state don't scale out.   Compute environments in a DISABLED state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see State in the Batch User Guide.  When an instance is idle, the instance scales down to the minvCpus value. However, the instance size doesn't change. For example, consider a c5.8xlarge instance with a minvCpus value of 4 and a desiredvCpus value of 36. This instance doesn't scale down to a c5.large instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--unmanagedv-cpus",
          description:
            "The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.  This parameter is only supported when the type parameter is set to UNMANAGED",
          args: {
            name: "integer",
          },
        },
        {
          name: "--compute-resources",
          description:
            "Details about the compute resources managed by the compute environment. This parameter is required for managed compute environments. For more information, see Compute Environments in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role",
          description:
            "The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see Batch service IAM role in the Batch User Guide.  If your account already created the Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the Batch service-linked role doesn't exist in your account, and no role is specified here, the service attempts to create the Batch service-linked role in your account.  If your specified role has a path other than /, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name bar has a path of /foo/, specify /foo/bar as the role name. For more information, see Friendly names and paths in the IAM User Guide.  Depending on how you created your Batch service role, its ARN might contain the service-role path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the service-role path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Amazon Web Services General Reference. These tags can be updated or removed using the TagResource and UntagResource API operations. These tags don't propagate to the underlying compute resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--eks-configuration",
          description:
            "The details for the Amazon EKS cluster that supports the compute environment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context",
          description: "Reserved",
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
      name: "create-job-queue",
      description:
        "Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments. You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment",
      options: [
        {
          name: "--job-queue-name",
          description:
            "The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "The state of the job queue. If the job queue state is ENABLED, it is able to accept jobs. If the job queue state is DISABLED, new jobs can't be added to the queue, but jobs already in the queue can finish",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduling-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the fair share scheduling policy. Job queues that don't have a scheduling policy are scheduled in a first-in, first-out (FIFO) model. After a job queue has a scheduling policy, it can be replaced but can't be removed. The format is aws:Partition:batch:Region:Account:scheduling-policy/Name . An example is aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy. A job queue without a scheduling policy is scheduled as a FIFO job queue and can't have a scheduling policy added. Jobs queues with a scheduling policy can have a maximum of 500 active fair share identifiers. When the limit has been reached, submissions of any jobs that add a new fair share identifier fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "The priority of the job queue. Job queues with a higher priority (or a higher integer value for the priority parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of 10 is given scheduling preference over a job queue with a priority value of 1. All of the compute environments must be either EC2 (EC2 or SPOT) or Fargate (FARGATE or FARGATE_SPOT); EC2 and Fargate compute environments can't be mixed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--compute-environment-order",
          description:
            "The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the VALID state before you can associate them with a job queue. You can associate up to three compute environments with a job queue. All of the compute environments must be either EC2 (EC2 or SPOT) or Fargate (FARGATE or FARGATE_SPOT); EC2 and Fargate compute environments can't be mixed.  All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging your Batch resources in Batch User Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--job-state-time-limit-actions",
          description:
            "The set of actions that Batch performs on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after maxTimeSeconds has passed. (Note: The minimum value for maxTimeSeconds is 600 (10 minutes) and its maximum value is 86,400 (24 hours).)",
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
      name: "create-scheduling-policy",
      description: "Creates an Batch scheduling policy",
      options: [
        {
          name: "--name",
          description:
            "The name of the scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--fairshare-policy",
          description: "The fair share policy of the scheduling policy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Amazon Web Services General Reference. These tags can be updated or removed using the TagResource and UntagResource API operations",
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
      name: "delete-compute-environment",
      description:
        "Deletes an Batch compute environment. Before you can delete a compute environment, you must set its state to DISABLED with the UpdateComputeEnvironment API operation and disassociate it from any job queues with the UpdateJobQueue API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state",
      options: [
        {
          name: "--compute-environment",
          description:
            "The name or Amazon Resource Name (ARN) of the compute environment to delete",
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
      name: "delete-job-queue",
      description:
        "Deletes the specified job queue. You must first disable submissions for a queue with the UpdateJobQueue operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second. It's not necessary to disassociate compute environments from a queue before submitting a DeleteJobQueue request",
      options: [
        {
          name: "--job-queue",
          description:
            "The short name or full Amazon Resource Name (ARN) of the queue to delete",
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
      name: "delete-scheduling-policy",
      description:
        "Deletes the specified scheduling policy. You can't delete a scheduling policy that's used in any job queues",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the scheduling policy to delete",
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
      name: "deregister-job-definition",
      description:
        "Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days",
      options: [
        {
          name: "--job-definition",
          description:
            "The name and revision (name:revision) or full Amazon Resource Name (ARN) of the job definition to deregister",
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
      name: "describe-compute-environments",
      description:
        "Describes one or more of your compute environments. If you're using an unmanaged compute environment, you can use the DescribeComputeEnvironment operation to determine the ecsClusterArn that you launch your Amazon ECS container instances into",
      options: [
        {
          name: "--compute-environments",
          description:
            "A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of cluster results returned by DescribeComputeEnvironments in paginated output. When this parameter is used, DescribeComputeEnvironments only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeComputeEnvironments request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then DescribeComputeEnvironments returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeComputeEnvironments request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "describe-job-definitions",
      description:
        "Describes a list of job definitions. You can specify a status (such as ACTIVE) to only return job definitions that match that status",
      options: [
        {
          name: "--job-definitions",
          description:
            "A list of up to 100 job definitions. Each entry in the list can either be an ARN in the format arn:aws:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision} or a short version using the form ${JobDefinitionName}:${Revision}. This parameter can't be used with other parameters",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by DescribeJobDefinitions in paginated output. When this parameter is used, DescribeJobDefinitions only returns maxResults results in a single page and a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeJobDefinitions request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then DescribeJobDefinitions returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--job-definition-name",
          description: "The name of the job definition to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status used to filter job definitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeJobDefinitions request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "describe-job-queues",
      description: "Describes one or more of your job queues",
      options: [
        {
          name: "--job-queues",
          description:
            "A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by DescribeJobQueues in paginated output. When this parameter is used, DescribeJobQueues only returns maxResults results in a single page and a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeJobQueues request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then DescribeJobQueues returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeJobQueues request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
      name: "describe-jobs",
      description: "Describes a list of Batch jobs",
      options: [
        {
          name: "--jobs",
          description: "A list of up to 100 job IDs",
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
      name: "describe-scheduling-policies",
      description: "Describes one or more of your scheduling policies",
      options: [
        {
          name: "--arns",
          description:
            "A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries",
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
      name: "get-job-queue-snapshot",
      description:
        "Provides a list of the first 100 RUNNABLE jobs associated to a single job queue",
      options: [
        {
          name: "--job-queue",
          description:
            "The job queue\u2019s name or full queue Amazon Resource Name (ARN)",
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
      name: "list-jobs",
      description:
        "Returns a list of Batch jobs. You must specify only one of the following items:   A job queue ID to return a list of jobs in that job queue   A multi-node parallel job ID to return a list of nodes for that job   An array job ID to return a list of the children for that job   You can filter the results by job status with the jobStatus parameter. If you don't specify a status, only RUNNING jobs are returned",
      options: [
        {
          name: "--job-queue",
          description:
            "The name or full Amazon Resource Name (ARN) of the job queue used to list jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--array-job-id",
          description:
            "The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-node-job-id",
          description:
            "The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-status",
          description:
            "The job status used to filter jobs in the specified queue. If the filters parameter is specified, the jobStatus parameter is ignored and jobs with any status are returned. If you don't specify a status, only RUNNING jobs are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned by ListJobs in a paginated output. When this parameter is used, ListJobs returns up to maxResults results in a single page and a nextToken response element, if applicable. The remaining results of the initial request can be seen by sending another ListJobs request with the returned nextToken value. The following outlines key parameters and limitations:   The minimum value is 1.    When --job-status is used, Batch returns up to 1000 values.    When --filters is used, Batch returns up to 100 values.   If neither parameter is used, then ListJobs returns up to 1000 results (jobs that are in the RUNNING status) and a nextToken value, if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListJobs request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The filter to apply to the query. Only one filter can be used at a time. When the filter is used, jobStatus is ignored. The filter doesn't apply to child jobs in an array or multi-node parallel (MNP) jobs. The results are sorted by the createdAt field, with the most recent jobs being first.  JOB_NAME  The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*), the filter matches any job name that begins with the string before the '*'. This corresponds to the jobName value. For example, test1 matches both Test1 and test1, and test1* matches both test1 and Test10. When the JOB_NAME filter is used, the results are grouped by the job name and version.  JOB_DEFINITION  The value for the filter is the name or Amazon Resource Name (ARN) of the job definition. This corresponds to the jobDefinition value. The value is case sensitive. When the value for the filter is the job definition name, the results include all the jobs that used any revision of that job definition name. If the value ends with an asterisk (*), the filter matches any job definition name that begins with the string before the '*'. For example, jd1 matches only jd1, and jd1* matches both jd1 and jd1A. The version of the job definition that's used doesn't affect the sort order. When the JOB_DEFINITION filter is used and the ARN is used (which is in the form arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}), the results include jobs that used the specified revision of the job definition. Asterisk (*) isn't supported when the ARN is used.  BEFORE_CREATED_AT  The value for the filter is the time that's before the job was created. This corresponds to the createdAt value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.  AFTER_CREATED_AT  The value for the filter is the time that's after the job was created. This corresponds to the createdAt value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970",
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
      name: "list-scheduling-policies",
      description: "Returns a list of Batch scheduling policies",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results that's returned by ListSchedulingPolicies in paginated output. When this parameter is used, ListSchedulingPolicies only returns maxResults results in a single page and a nextToken response element. You can see the remaining results of the initial request by sending another ListSchedulingPolicies request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, ListSchedulingPolicies returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value that's returned from a previous paginated ListSchedulingPolicies request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes",
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
        "Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource that tags are listed for. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
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
      name: "register-job-definition",
      description: "Registers an Batch job definition",
      options: [
        {
          name: "--job-definition-name",
          description:
            "The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of job definition. For more information about multi-node parallel jobs, see Creating a multi-node parallel job definition in the Batch User Guide.   If the value is container, then one of the following is required: containerProperties, ecsProperties, or eksProperties.   If the value is multinode, then nodeProperties is required.    If the job is run on Fargate resources, then multinode isn't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a SubmitJob request override any corresponding parameter defaults from the job definition",
          args: {
            name: "map",
          },
        },
        {
          name: "--scheduling-priority",
          description:
            "The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. The minimum supported value is 0 and the maximum supported value is 9999",
          args: {
            name: "integer",
          },
        },
        {
          name: "--container-properties",
          description:
            "An object with properties specific to Amazon ECS-based single-node container-based jobs. If the job definition's type parameter is container, then you must specify either containerProperties or nodeProperties. This must not be specified for Amazon EKS-based job definitions.  If the job runs on Fargate resources, then you must not specify nodeProperties; use only containerProperties",
          args: {
            name: "structure",
          },
        },
        {
          name: "--node-properties",
          description:
            "An object with properties specific to multi-node parallel jobs. If you specify node properties for a job, it becomes a multi-node parallel job. For more information, see Multi-node Parallel Jobs in the Batch User Guide.  If the job runs on Fargate resources, then you must not specify nodeProperties; use containerProperties instead.   If the job runs on Amazon EKS resources, then you must not specify nodeProperties",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retry-strategy",
          description:
            "The retry strategy to use for failed jobs that are submitted with this job definition. Any retry strategy that's specified during a SubmitJob operation overrides the retry strategy defined here. If a job is terminated due to a timeout, it isn't retried",
          args: {
            name: "structure",
          },
        },
        {
          name: "--propagate-tags",
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state.  If the job runs on Amazon EKS resources, then you must not specify propagateTags",
        },
        {
          name: "--no-propagate-tags",
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state.  If the job runs on Amazon EKS resources, then you must not specify propagateTags",
        },
        {
          name: "--timeout",
          description:
            "The timeout configuration for jobs that are submitted with this job definition, after which Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it isn't retried. The minimum value for the timeout is 60 seconds. Any timeout configuration that's specified during a SubmitJob operation overrides the timeout configuration defined here. For more information, see Job Timeouts in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Batch User Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--platform-capabilities",
          description:
            "The platform capabilities required by the job definition. If no value is specified, it defaults to EC2. To run the job on Fargate resources, specify FARGATE.  If the job runs on Amazon EKS resources, then you must not specify platformCapabilities",
          args: {
            name: "list",
          },
        },
        {
          name: "--eks-properties",
          description:
            "An object with properties that are specific to Amazon EKS-based jobs. This must not be specified for Amazon ECS based job definitions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ecs-properties",
          description:
            "An object with properties that are specific to Amazon ECS-based jobs. This must not be specified for Amazon EKS-based job definitions",
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
      name: "submit-job",
      description:
        "Submits an Batch job from a job definition. Parameters that are specified during SubmitJob override parameters defined in the job definition. vCPU and memory requirements that are specified in the resourceRequirements objects in the job definition are the exception. They can't be overridden this way using the memory and vcpus parameters. Rather, you must specify updates to job definition parameters in a resourceRequirements object that's included in the containerOverrides parameter.  Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time.    Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-queue",
          description:
            "The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--share-identifier",
          description:
            "The share identifier for the job. Don't specify this parameter if the job queue doesn't have a scheduling policy. If the job queue has a scheduling policy, then this parameter must be specified. This string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*)",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduling-priority-override",
          description:
            "The scheduling priority for the job. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling priority in the job definition and works only within a single share identifier. The minimum supported value is 0 and the maximum supported value is 9999",
          args: {
            name: "integer",
          },
        },
        {
          name: "--array-properties",
          description:
            "The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. For more information, see Array Jobs in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--depends-on",
          description:
            "A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a SEQUENTIAL type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an N_TO_N type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin",
          args: {
            name: "list",
          },
        },
        {
          name: "--job-definition",
          description:
            "The job definition used by this job. This value can be one of definition-name, definition-name:revision, or the Amazon Resource Name (ARN) for the job definition, with or without the revision (arn:aws:batch:region:account:job-definition/definition-name:revision , or arn:aws:batch:region:account:job-definition/definition-name ). If the revision is not specified, then the latest active revision is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a SubmitJob request override any corresponding parameter defaults from the job definition",
          args: {
            name: "map",
          },
        },
        {
          name: "--container-overrides",
          description:
            "An object with properties that override the defaults for the job definition that specify the name of a container in the specified job definition and the overrides it should receive. You can override the default command for a container, which is specified in the job definition or the Docker image, with a command override. You can also override existing environment variables on a container or add new environment variables to it with an environment override",
          args: {
            name: "structure",
          },
        },
        {
          name: "--node-overrides",
          description:
            "A list of node overrides in JSON format that specify the node range to target and the container overrides for that node range.  This parameter isn't applicable to jobs that are running on Fargate resources; use containerOverrides instead",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retry-strategy",
          description:
            "The retry strategy to use for failed jobs from this SubmitJob operation. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition",
          args: {
            name: "structure",
          },
        },
        {
          name: "--propagate-tags",
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state. When specified, this overrides the tag propagation setting in the job definition",
        },
        {
          name: "--no-propagate-tags",
          description:
            "Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state. When specified, this overrides the tag propagation setting in the job definition",
        },
        {
          name: "--timeout",
          description:
            "The timeout configuration for this SubmitJob operation. You can specify a timeout duration after which Batch terminates your jobs if they haven't finished. If a job is terminated due to a timeout, it isn't retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job. For more information, see Job Timeouts in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Amazon Web Services General Reference",
          args: {
            name: "map",
          },
        },
        {
          name: "--eks-properties-override",
          description:
            "An object, with properties that override defaults for the job definition, can only be specified for jobs that are run on Amazon EKS resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ecs-properties-override",
          description:
            "An object, with properties that override defaults for the job definition, can only be specified for jobs that are run on Amazon ECS resources",
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
      name: "tag-resource",
      description:
        "Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that tags are added to. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see Tagging Amazon Web Services Resources in Amazon Web Services General Reference",
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
      name: "terminate-job",
      description:
        "Terminates a job in a job queue. Jobs that are in the STARTING or RUNNING state are terminated, which causes them to transition to FAILED. Jobs that have not progressed to the STARTING state are cancelled",
      options: [
        {
          name: "--job-id",
          description: "The Batch job ID of the job to terminate",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "A message to attach to the job that explains the reason for canceling it. This message is returned by future DescribeJobs operations on the job. It is also recorded in the Batch activity logs. This parameter has as limit of 1024 characters",
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
      name: "untag-resource",
      description: "Deletes specified tags from an Batch resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource from which to delete tags. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported",
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
      name: "update-compute-environment",
      description: "Updates an Batch compute environment",
      options: [
        {
          name: "--compute-environment",
          description:
            "The name or full Amazon Resource Name (ARN) of the compute environment to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "The state of the compute environment. Compute environments in the ENABLED state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues. If the state is ENABLED, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand. If the state is DISABLED, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a STARTING or RUNNING state continue to progress normally. Managed compute environments in the DISABLED state don't scale out.   Compute environments in a DISABLED state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see State in the Batch User Guide.  When an instance is idle, the instance scales down to the minvCpus value. However, the instance size doesn't change. For example, consider a c5.8xlarge instance with a minvCpus value of 4 and a desiredvCpus value of 36. This instance doesn't scale down to a c5.large instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--unmanagedv-cpus",
          description:
            "The maximum number of vCPUs expected to be used for an unmanaged compute environment. Don't specify this parameter for a managed compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--compute-resources",
          description:
            "Details of the compute resources managed by the compute environment. Required for a managed compute environment. For more information, see Compute Environments in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role",
          description:
            "The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see Batch service IAM role in the Batch User Guide.  If the compute environment has a service-linked role, it can't be changed to use a regular IAM role. Likewise, if the compute environment has a regular IAM role, it can't be changed to use a service-linked role. To update the parameters for the compute environment that require an infrastructure update to change, the AWSServiceRoleForBatch service-linked role must be used. For more information, see Updating compute environments in the Batch User Guide.  If your specified role has a path other than /, then you must either specify the full role ARN (recommended) or prefix the role name with the path.  Depending on how you created your Batch service role, its ARN might contain the service-role path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the service-role path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-policy",
          description:
            "Specifies the updated infrastructure update policy for the compute environment. For more information about infrastructure updates, see Updating compute environments in the Batch User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context",
          description: "Reserved",
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
      name: "update-job-queue",
      description: "Updates a job queue",
      options: [
        {
          name: "--job-queue",
          description:
            "The name or the Amazon Resource Name (ARN) of the job queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "Describes the queue's ability to accept new jobs. If the job queue state is ENABLED, it can accept jobs. If the job queue state is DISABLED, new jobs can't be added to the queue, but jobs already in the queue can finish",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduling-policy-arn",
          description:
            "Amazon Resource Name (ARN) of the fair share scheduling policy. Once a job queue is created, the fair share scheduling policy can be replaced but not removed. The format is aws:Partition:batch:Region:Account:scheduling-policy/Name . For example, aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "The priority of the job queue. Job queues with a higher priority (or a higher integer value for the priority parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of 10 is given scheduling preference over a job queue with a priority value of 1. All of the compute environments must be either EC2 (EC2 or SPOT) or Fargate (FARGATE or FARGATE_SPOT). EC2 and Fargate compute environments can't be mixed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--compute-environment-order",
          description:
            "Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment runs a given job. Compute environments must be in the VALID state before you can associate them with a job queue. All of the compute environments must be either EC2 (EC2 or SPOT) or Fargate (FARGATE or FARGATE_SPOT). EC2 and Fargate compute environments can't be mixed.  All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--job-state-time-limit-actions",
          description:
            "The set of actions that Batch perform on jobs that remain at the head of the job queue in the specified state longer than specified times. Batch will perform each action after maxTimeSeconds has passed. (Note: The minimum value for maxTimeSeconds is 600 (10 minutes) and its maximum value is 86,400 (24 hours).)",
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
      name: "update-scheduling-policy",
      description: "Updates a scheduling policy",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the scheduling policy to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--fairshare-policy",
          description: "The fair share policy",
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
