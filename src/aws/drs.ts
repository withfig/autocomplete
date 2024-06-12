const completionSpec: Fig.Spec = {
  name: "drs",
  description: "AWS Elastic Disaster Recovery Service",
  subcommands: [
    {
      name: "associate-source-network-stack",
      description:
        "Associate a Source Network to an existing CloudFormation Stack and modify launch templates to use this network. Can be used for reverting to previously deployed CloudFormation stacks",
      options: [
        {
          name: "--cfn-stack-name",
          description:
            "CloudFormation template to associate with a Source Network",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-network-id",
          description:
            "The Source Network ID to associate with CloudFormation template",
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
      name: "create-extended-source-server",
      description:
        "Create an extended source server in the target Account based on the source server in staging account",
      options: [
        {
          name: "--source-server-arn",
          description:
            "This defines the ARN of the source server in staging Account based on which you want to create an extended source server",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags associated with the extended source server",
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
      name: "create-launch-configuration-template",
      description: "Creates a new Launch Configuration Template",
      options: [
        {
          name: "--copy-private-ip",
          description: "Copy private IP",
        },
        {
          name: "--no-copy-private-ip",
          description: "Copy private IP",
        },
        {
          name: "--copy-tags",
          description: "Copy tags",
        },
        {
          name: "--no-copy-tags",
          description: "Copy tags",
        },
        {
          name: "--export-bucket-arn",
          description: "S3 bucket ARN to export Source Network templates",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-disposition",
          description: "Launch disposition",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-into-source-instance",
          description:
            "DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance",
        },
        {
          name: "--no-launch-into-source-instance",
          description:
            "DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance",
        },
        {
          name: "--licensing",
          description: "Licensing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--post-launch-enabled",
          description: "Whether we want to activate post-launch actions",
        },
        {
          name: "--no-post-launch-enabled",
          description: "Whether we want to activate post-launch actions",
        },
        {
          name: "--tags",
          description:
            "Request to associate tags during creation of a Launch Configuration Template",
          args: {
            name: "map",
          },
        },
        {
          name: "--target-instance-type-right-sizing-method",
          description: "Target instance type right-sizing method",
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
      name: "create-replication-configuration-template",
      description: "Creates a new ReplicationConfigurationTemplate",
      options: [
        {
          name: "--associate-default-security-group",
          description:
            "Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template",
        },
        {
          name: "--no-associate-default-security-group",
          description:
            "Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template",
        },
        {
          name: "--auto-replicate-new-disks",
          description:
            "Whether to allow the AWS replication agent to automatically replicate newly added disks",
        },
        {
          name: "--no-auto-replicate-new-disks",
          description:
            "Whether to allow the AWS replication agent to automatically replicate newly added disks",
        },
        {
          name: "--bandwidth-throttling",
          description:
            "Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps",
          args: {
            name: "long",
          },
        },
        {
          name: "--create-public-ip",
          description:
            "Whether to create a Public IP for the Recovery Instance by default",
        },
        {
          name: "--no-create-public-ip",
          description:
            "Whether to create a Public IP for the Recovery Instance by default",
        },
        {
          name: "--data-plane-routing",
          description:
            "The data plane routing mechanism that will be used for replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-large-staging-disk-type",
          description:
            "The Staging Disk EBS volume type to be used during replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption",
          description:
            "The type of EBS encryption to be used during replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption-key-arn",
          description:
            "The ARN of the EBS encryption key to be used during replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--pit-policy",
          description:
            "The Point in time (PIT) policy to manage snapshots taken during replication",
          args: {
            name: "list",
          },
        },
        {
          name: "--replication-server-instance-type",
          description:
            "The instance type to be used for the replication server",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-servers-security-groups-ids",
          description:
            "The security group IDs that will be used by the replication server",
          args: {
            name: "list",
          },
        },
        {
          name: "--staging-area-subnet-id",
          description: "The subnet to be used by the replication staging area",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-tags",
          description:
            "A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description:
            "A set of tags to be associated with the Replication Configuration Template resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--use-dedicated-replication-server",
          description:
            "Whether to use a dedicated Replication Server in the replication staging area",
        },
        {
          name: "--no-use-dedicated-replication-server",
          description:
            "Whether to use a dedicated Replication Server in the replication staging area",
        },
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
      name: "create-source-network",
      description: "Create a new Source Network resource for a provided VPC ID",
      options: [
        {
          name: "--origin-account-id",
          description: "Account containing the VPC to protect",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-region",
          description: "Region containing the VPC to protect",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A set of tags to be associated with the Source Network resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--vpc-id",
          description: "Which VPC ID to protect",
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
      name: "delete-job",
      description: "Deletes a single Job by ID",
      options: [
        {
          name: "--job-id",
          description: "The ID of the Job to be deleted",
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
      name: "delete-launch-action",
      description: "Deletes a resource launch action",
      options: [
        {
          name: "--action-id",
          description: "Launch action Id",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "Launch configuration template Id or Source Server Id",
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
      name: "delete-launch-configuration-template",
      description: "Deletes a single Launch Configuration Template by ID",
      options: [
        {
          name: "--launch-configuration-template-id",
          description:
            "The ID of the Launch Configuration Template to be deleted",
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
      name: "delete-recovery-instance",
      description:
        "Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it",
      options: [
        {
          name: "--recovery-instance-id",
          description: "The ID of the Recovery Instance to be deleted",
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
      name: "delete-replication-configuration-template",
      description: "Deletes a single Replication Configuration Template by ID",
      options: [
        {
          name: "--replication-configuration-template-id",
          description:
            "The ID of the Replication Configuration Template to be deleted",
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
      name: "delete-source-network",
      description: "Delete Source Network resource",
      options: [
        {
          name: "--source-network-id",
          description: "ID of the Source Network to delete",
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
      name: "delete-source-server",
      description:
        "Deletes a single Source Server by ID. The Source Server must be disconnected first",
      options: [
        {
          name: "--source-server-id",
          description: "The ID of the Source Server to be deleted",
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
      name: "describe-job-log-items",
      description: "Retrieves a detailed Job log with pagination",
      options: [
        {
          name: "--job-id",
          description:
            "The ID of the Job for which Job log items will be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of Job log items to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token of the next Job log items to retrieve",
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
      description:
        "Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets",
      options: [
        {
          name: "--filters",
          description: "A set of filters by which to return Jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of Jobs to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token of the next Job to retrieve",
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
      name: "describe-launch-configuration-templates",
      description:
        "Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs",
      options: [
        {
          name: "--launch-configuration-template-ids",
          description:
            "Request to filter Launch Configuration Templates list by Launch Configuration Template ID",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum results to be returned in DescribeLaunchConfigurationTemplates",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token of the next Launch Configuration Template to retrieve",
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
      name: "describe-recovery-instances",
      description:
        "Lists all Recovery Instances or multiple Recovery Instances by ID",
      options: [
        {
          name: "--filters",
          description: "A set of filters by which to return Recovery Instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of Recovery Instances to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token of the next Recovery Instance to retrieve",
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
      name: "describe-recovery-snapshots",
      description: "Lists all Recovery Snapshots for a single Source Server",
      options: [
        {
          name: "--filters",
          description: "A set of filters by which to return Recovery Snapshots",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of Recovery Snapshots to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token of the next Recovery Snapshot to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--order",
          description:
            "The sorted ordering by which to return Recovery Snapshots",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description: "Filter Recovery Snapshots by Source Server ID",
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
      name: "describe-replication-configuration-templates",
      description:
        "Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs",
      options: [
        {
          name: "--max-results",
          description:
            "Maximum number of Replication Configuration Templates to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token of the next Replication Configuration Template to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-configuration-template-ids",
          description:
            "The IDs of the Replication Configuration Templates to retrieve. An empty list means all Replication Configuration Templates",
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
      name: "describe-source-networks",
      description:
        "Lists all Source Networks or multiple Source Networks filtered by ID",
      options: [
        {
          name: "--filters",
          description: "A set of filters by which to return Source Networks",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of Source Networks to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token of the next Source Networks to retrieve",
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
      name: "describe-source-servers",
      description:
        "Lists all Source Servers or multiple Source Servers filtered by ID",
      options: [
        {
          name: "--filters",
          description: "A set of filters by which to return Source Servers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of Source Servers to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token of the next Source Server to retrieve",
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
      name: "disconnect-recovery-instance",
      description:
        "Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified",
      options: [
        {
          name: "--recovery-instance-id",
          description: "The ID of the Recovery Instance to disconnect",
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
      name: "disconnect-source-server",
      description:
        "Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified",
      options: [
        {
          name: "--source-server-id",
          description: "The ID of the Source Server to disconnect",
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
      name: "export-source-network-cfn-template",
      description:
        "Export the Source Network CloudFormation template to an S3 bucket",
      options: [
        {
          name: "--source-network-id",
          description:
            "The Source Network ID to export its CloudFormation template to an S3 bucket",
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
      name: "get-failback-replication-configuration",
      description:
        "Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID",
      options: [
        {
          name: "--recovery-instance-id",
          description:
            "The ID of the Recovery Instance whose failback replication configuration should be returned",
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
      name: "get-launch-configuration",
      description: "Gets a LaunchConfiguration, filtered by Source Server IDs",
      options: [
        {
          name: "--source-server-id",
          description:
            "The ID of the Source Server that we want to retrieve a Launch Configuration for",
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
      name: "get-replication-configuration",
      description:
        "Gets a ReplicationConfiguration, filtered by Source Server ID",
      options: [
        {
          name: "--source-server-id",
          description:
            "The ID of the Source Serve for this Replication Configuration.r",
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
      name: "initialize-service",
      description: "Initialize Elastic Disaster Recovery",
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
      name: "list-extensible-source-servers",
      description:
        "Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we\u2019re reading from is not an extension of another source server",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of extensible source servers to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token of the next extensible source server to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-account-id",
          description:
            "The Id of the staging Account to retrieve extensible source servers from",
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
      name: "list-launch-actions",
      description: "Lists resource launch actions",
      options: [
        {
          name: "--filters",
          description: "Filters to apply when listing resource launch actions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum amount of items to return when listing resource launch actions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Next token to use when listing resource launch actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "Launch configuration template Id or Source Server Id",
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
      name: "list-staging-accounts",
      description:
        "Returns an array of staging accounts for existing extended source servers",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of staging Accounts to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token of the next staging Account to retrieve",
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
      description: "List all tags for your Elastic Disaster Recovery resources",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource whose tags should be returned",
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
      name: "put-launch-action",
      description: "Puts a resource launch action",
      options: [
        {
          name: "--action-code",
          description: "Launch action code",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-id",
          description: "Launch action Id",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-version",
          description: "Launch action version",
          args: {
            name: "string",
          },
        },
        {
          name: "--active",
          description: "Whether the launch action is active",
        },
        {
          name: "--no-active",
          description: "Whether the launch action is active",
        },
        {
          name: "--category",
          description: "Launch action category",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Launch action description",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Launch action name",
          args: {
            name: "string",
          },
        },
        {
          name: "--optional",
          description:
            "Whether the launch will not be marked as failed if this action fails",
        },
        {
          name: "--no-optional",
          description:
            "Whether the launch will not be marked as failed if this action fails",
        },
        {
          name: "--order",
          description: "Launch action order",
          args: {
            name: "integer",
          },
        },
        {
          name: "--parameters",
          description: "Launch action parameters",
          args: {
            name: "map",
          },
        },
        {
          name: "--resource-id",
          description: "Launch configuration template Id or Source Server Id",
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
      name: "retry-data-replication",
      description:
        "WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state",
      options: [
        {
          name: "--source-server-id",
          description:
            "The ID of the Source Server whose data replication should be retried",
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
      name: "reverse-replication",
      description:
        "Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them",
      options: [
        {
          name: "--recovery-instance-id",
          description:
            "The ID of the Recovery Instance that we want to reverse the replication for",
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
      name: "start-failback-launch",
      description:
        "Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process",
      options: [
        {
          name: "--recovery-instance-ids",
          description:
            "The IDs of the Recovery Instance whose failback launch we want to request",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags to be associated with the failback launch Job",
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
      name: "start-recovery",
      description:
        "Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot",
      options: [
        {
          name: "--is-drill",
          description:
            "Whether this Source Server Recovery operation is a drill or not",
        },
        {
          name: "--no-is-drill",
          description:
            "Whether this Source Server Recovery operation is a drill or not",
        },
        {
          name: "--source-servers",
          description:
            "The Source Servers that we want to start a Recovery Job for",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags to be associated with the Recovery Job",
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
      name: "start-replication",
      description:
        "Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it",
      options: [
        {
          name: "--source-server-id",
          description: "The ID of the Source Server to start replication for",
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
      name: "start-source-network-recovery",
      description:
        "Deploy VPC for the specified Source Network and modify launch templates to use this network. The VPC will be deployed using a dedicated CloudFormation stack",
      options: [
        {
          name: "--deploy-as-new",
          description:
            "Don't update existing CloudFormation Stack, recover the network using a new stack",
        },
        {
          name: "--no-deploy-as-new",
          description:
            "Don't update existing CloudFormation Stack, recover the network using a new stack",
        },
        {
          name: "--source-networks",
          description:
            "The Source Networks that we want to start a Recovery Job for",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be associated with the Source Network recovery Job",
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
      name: "start-source-network-replication",
      description:
        "Starts replication for a Source Network. This action would make the Source Network protected",
      options: [
        {
          name: "--source-network-id",
          description: "ID of the Source Network to replicate",
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
      name: "stop-failback",
      description:
        "Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED",
      options: [
        {
          name: "--recovery-instance-id",
          description:
            "The ID of the Recovery Instance we want to stop failback for",
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
      name: "stop-replication",
      description:
        "Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it",
      options: [
        {
          name: "--source-server-id",
          description: "The ID of the Source Server to stop replication for",
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
      name: "stop-source-network-replication",
      description:
        "Stops replication for a Source Network. This action would make the Source Network unprotected",
      options: [
        {
          name: "--source-network-id",
          description: "ID of the Source Network to stop replication",
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
        "Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value",
      options: [
        {
          name: "--resource-arn",
          description:
            "ARN of the resource for which tags are to be added or updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Array of tags to be added or updated",
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
      name: "terminate-recovery-instances",
      description:
        "Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service",
      options: [
        {
          name: "--recovery-instance-ids",
          description:
            "The IDs of the Recovery Instances that should be terminated",
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
      description:
        "Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources",
      options: [
        {
          name: "--resource-arn",
          description: "ARN of the resource for which tags are to be removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Array of tags to be removed",
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
      name: "update-failback-replication-configuration",
      description:
        "Allows you to update the failback replication configuration of a Recovery Instance by ID",
      options: [
        {
          name: "--bandwidth-throttling",
          description:
            "Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps",
          args: {
            name: "long",
          },
        },
        {
          name: "--name",
          description: "The name of the Failback Replication Configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-instance-id",
          description: "The ID of the Recovery Instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-private-ip",
          description:
            "Whether to use Private IP for the failback replication of the Recovery Instance",
        },
        {
          name: "--no-use-private-ip",
          description:
            "Whether to use Private IP for the failback replication of the Recovery Instance",
        },
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
      name: "update-launch-configuration",
      description: "Updates a LaunchConfiguration by Source Server ID",
      options: [
        {
          name: "--copy-private-ip",
          description:
            "Whether we should copy the Private IP of the Source Server to the Recovery Instance",
        },
        {
          name: "--no-copy-private-ip",
          description:
            "Whether we should copy the Private IP of the Source Server to the Recovery Instance",
        },
        {
          name: "--copy-tags",
          description:
            "Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance",
        },
        {
          name: "--no-copy-tags",
          description:
            "Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance",
        },
        {
          name: "--launch-disposition",
          description:
            "The state of the Recovery Instance in EC2 after the recovery operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-into-instance-properties",
          description: "Launch into existing instance properties",
          args: {
            name: "structure",
          },
        },
        {
          name: "--licensing",
          description:
            "The licensing configuration to be used for this launch configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "The name of the launch configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--post-launch-enabled",
          description:
            "Whether we want to enable post-launch actions for the Source Server",
        },
        {
          name: "--no-post-launch-enabled",
          description:
            "Whether we want to enable post-launch actions for the Source Server",
        },
        {
          name: "--source-server-id",
          description:
            "The ID of the Source Server that we want to retrieve a Launch Configuration for",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-instance-type-right-sizing-method",
          description:
            "Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server",
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
      name: "update-launch-configuration-template",
      description: "Updates an existing Launch Configuration Template by ID",
      options: [
        {
          name: "--copy-private-ip",
          description: "Copy private IP",
        },
        {
          name: "--no-copy-private-ip",
          description: "Copy private IP",
        },
        {
          name: "--copy-tags",
          description: "Copy tags",
        },
        {
          name: "--no-copy-tags",
          description: "Copy tags",
        },
        {
          name: "--export-bucket-arn",
          description: "S3 bucket ARN to export Source Network templates",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-configuration-template-id",
          description: "Launch Configuration Template ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-disposition",
          description: "Launch disposition",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-into-source-instance",
          description:
            "DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance",
        },
        {
          name: "--no-launch-into-source-instance",
          description:
            "DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance",
        },
        {
          name: "--licensing",
          description: "Licensing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--post-launch-enabled",
          description: "Whether we want to activate post-launch actions",
        },
        {
          name: "--no-post-launch-enabled",
          description: "Whether we want to activate post-launch actions",
        },
        {
          name: "--target-instance-type-right-sizing-method",
          description: "Target instance type right-sizing method",
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
      name: "update-replication-configuration",
      description:
        "Allows you to update a ReplicationConfiguration by Source Server ID",
      options: [
        {
          name: "--associate-default-security-group",
          description:
            "Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration",
        },
        {
          name: "--no-associate-default-security-group",
          description:
            "Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration",
        },
        {
          name: "--auto-replicate-new-disks",
          description:
            "Whether to allow the AWS replication agent to automatically replicate newly added disks",
        },
        {
          name: "--no-auto-replicate-new-disks",
          description:
            "Whether to allow the AWS replication agent to automatically replicate newly added disks",
        },
        {
          name: "--bandwidth-throttling",
          description:
            "Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps",
          args: {
            name: "long",
          },
        },
        {
          name: "--create-public-ip",
          description:
            "Whether to create a Public IP for the Recovery Instance by default",
        },
        {
          name: "--no-create-public-ip",
          description:
            "Whether to create a Public IP for the Recovery Instance by default",
        },
        {
          name: "--data-plane-routing",
          description:
            "The data plane routing mechanism that will be used for replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-large-staging-disk-type",
          description:
            "The Staging Disk EBS volume type to be used during replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption",
          description:
            "The type of EBS encryption to be used during replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption-key-arn",
          description:
            "The ARN of the EBS encryption key to be used during replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Replication Configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--pit-policy",
          description:
            "The Point in time (PIT) policy to manage snapshots taken during replication",
          args: {
            name: "list",
          },
        },
        {
          name: "--replicated-disks",
          description:
            "The configuration of the disks of the Source Server to be replicated",
          args: {
            name: "list",
          },
        },
        {
          name: "--replication-server-instance-type",
          description:
            "The instance type to be used for the replication server",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-servers-security-groups-ids",
          description:
            "The security group IDs that will be used by the replication server",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-server-id",
          description:
            "The ID of the Source Server for this Replication Configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-subnet-id",
          description: "The subnet to be used by the replication staging area",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-tags",
          description:
            "A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc",
          args: {
            name: "map",
          },
        },
        {
          name: "--use-dedicated-replication-server",
          description:
            "Whether to use a dedicated Replication Server in the replication staging area",
        },
        {
          name: "--no-use-dedicated-replication-server",
          description:
            "Whether to use a dedicated Replication Server in the replication staging area",
        },
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
      name: "update-replication-configuration-template",
      description: "Updates a ReplicationConfigurationTemplate by ID",
      options: [
        {
          name: "--arn",
          description: "The Replication Configuration Template ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--associate-default-security-group",
          description:
            "Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template",
        },
        {
          name: "--no-associate-default-security-group",
          description:
            "Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template",
        },
        {
          name: "--auto-replicate-new-disks",
          description:
            "Whether to allow the AWS replication agent to automatically replicate newly added disks",
        },
        {
          name: "--no-auto-replicate-new-disks",
          description:
            "Whether to allow the AWS replication agent to automatically replicate newly added disks",
        },
        {
          name: "--bandwidth-throttling",
          description:
            "Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps",
          args: {
            name: "long",
          },
        },
        {
          name: "--create-public-ip",
          description:
            "Whether to create a Public IP for the Recovery Instance by default",
        },
        {
          name: "--no-create-public-ip",
          description:
            "Whether to create a Public IP for the Recovery Instance by default",
        },
        {
          name: "--data-plane-routing",
          description:
            "The data plane routing mechanism that will be used for replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-large-staging-disk-type",
          description:
            "The Staging Disk EBS volume type to be used during replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption",
          description:
            "The type of EBS encryption to be used during replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption-key-arn",
          description:
            "The ARN of the EBS encryption key to be used during replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--pit-policy",
          description:
            "The Point in time (PIT) policy to manage snapshots taken during replication",
          args: {
            name: "list",
          },
        },
        {
          name: "--replication-configuration-template-id",
          description: "The Replication Configuration Template ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-server-instance-type",
          description:
            "The instance type to be used for the replication server",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-servers-security-groups-ids",
          description:
            "The security group IDs that will be used by the replication server",
          args: {
            name: "list",
          },
        },
        {
          name: "--staging-area-subnet-id",
          description: "The subnet to be used by the replication staging area",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-tags",
          description:
            "A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc",
          args: {
            name: "map",
          },
        },
        {
          name: "--use-dedicated-replication-server",
          description:
            "Whether to use a dedicated Replication Server in the replication staging area",
        },
        {
          name: "--no-use-dedicated-replication-server",
          description:
            "Whether to use a dedicated Replication Server in the replication staging area",
        },
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
