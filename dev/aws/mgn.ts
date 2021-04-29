export const completionSpec: Fig.Spec = {
  name: "mgn",
  description: "The Application Migration Service service.",
  subcommands: [
    {
      name: "change-server-life-cycle-state",
      description:
        "Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)",
      options: [
        {
          name: "--life-cycle",
          description:
            "The request to change the source server migration lifecycle state.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-server-id",
          description:
            "The request to change the source server migration lifecycle state by source server ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-replication-configuration-template",
      description: "Creates a new ReplicationConfigurationTemplate.",
      options: [
        {
          name: "--associate-default-security-group",
          description:
            "Request to associate the default Application Migration Service Security group with the Replication Settings template.",
        },
        {
          name: "--no-associate-default-security-group",
          description:
            "Request to associate the default Application Migration Service Security group with the Replication Settings template.",
        },
        {
          name: "--bandwidth-throttling",
          description:
            "Request to configure bandwidth throttling during Replication Settings template creation.",
          args: {
            name: "long",
          },
        },
        {
          name: "--create-public-ip",
          description:
            "Request to create Public IP during Replication Settings template creation.",
        },
        {
          name: "--no-create-public-ip",
          description:
            "Request to create Public IP during Replication Settings template creation.",
        },
        {
          name: "--data-plane-routing",
          description:
            "Request to configure data plane routing during Replication Settings template creation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-large-staging-disk-type",
          description:
            'Request to configure the Staging Disk EBS volume type to "gp2" during Replication Settings template creation.',
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption",
          description:
            "Request to configure EBS enryption during Replication Settings template creation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption-key-arn",
          description:
            "Request to configure an EBS enryption key during Replication Settings template creation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-server-instance-type",
          description:
            "Request to configure the Replication Server instance type during Replication Settings template creation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-servers-security-groups-i-ds",
          description:
            "Request to configure the Replication Server Secuirity group ID during Replication Settings template creation.",
          args: {
            name: "list",
          },
        },
        {
          name: "--staging-area-subnet-id",
          description:
            "Request to configure the Staging Area subnet ID during Replication Settings template creation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-tags",
          description:
            "Request to configure Staiging Area tags during Replication Settings template creation.",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description:
            "Request to configure tags during Replication Settings template creation.",
          args: {
            name: "map",
          },
        },
        {
          name: "--use-dedicated-replication-server",
          description:
            "Request to use Dedicated Replication Servers during Replication Settings template creation.",
        },
        {
          name: "--no-use-dedicated-replication-server",
          description:
            "Request to use Dedicated Replication Servers during Replication Settings template creation.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-job",
      description: "Deletes a single Job by ID.",
      options: [
        {
          name: "--job-id",
          description: "Request to delete Job from service by Job ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
            "Request to delete Replication Configuration Template from service by Replication Configuration Template ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-source-server",
      description: "Deletes a single source server by ID.",
      options: [
        {
          name: "--source-server-id",
          description:
            "Request to delete Source Server from service by Server ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-job-log-items",
      description: "Retrieves detailed Job log with paging.",
      options: [
        {
          name: "--job-id",
          description: "Request to describe Job log job ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Request to describe Job log item maximum results.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Request to describe Job log next token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normaly created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.",
      options: [
        {
          name: "--filters",
          description: "Request to describe Job log filters.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Request to describe Job log by max results.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Request to describe Job logby next token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.",
      options: [
        {
          name: "--max-results",
          description:
            "Request to describe Replication Configuration template by max results.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Request to describe Replication Configuration template by next token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-configuration-template-i-ds",
          description:
            "Request to describe Replication Configuration template by template IDs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Retrieves all SourceServers or multiple SourceServers by ID.",
      options: [
        {
          name: "--filters",
          description: "Request to filter Source Servers list.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "Request to filter Source Servers list by maximum results.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Request to filter Source Servers list by next token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disconnect-from-service",
      description:
        "Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communciating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.",
      options: [
        {
          name: "--source-server-id",
          description:
            "Request to disconnect Source Server from service by Server ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "finalize-cutover",
      description:
        "Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.",
      options: [
        {
          name: "--source-server-id",
          description: "Request to finalize Cutover by Soure Server ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-launch-configuration",
      description:
        "Lists all LaunchConfigurations available, filtered by Source Server IDs.",
      options: [
        {
          name: "--source-server-id",
          description:
            "Request to get Launch Configuration information by Source Server ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists all ReplicationConfigurations, filtered by Source Server ID.",
      options: [
        {
          name: "--source-server-id",
          description:
            "Request to get Replication Configuaration by Source Server ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "initialize-service",
      description: "Initialize Application Migration Service.",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "List all tags for your Application Migration Service resources.",
      options: [
        {
          name: "--resource-arn",
          description: "List tags for resource request by ARN.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "mark-as-archived",
      description:
        "Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.",
      options: [
        {
          name: "--source-server-id",
          description: "Mark as archived by Source Server ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.",
      options: [
        {
          name: "--source-server-id",
          description: "Retry data replication for Source Server ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-cutover",
      description:
        "Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.",
      options: [
        {
          name: "--source-server-i-ds",
          description: "Start Cutover by Source Server IDs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Start Cutover by Tags.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-test",
      description:
        "Lauches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.",
      options: [
        {
          name: "--source-server-i-ds",
          description: "Start Test for Source Server IDs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Start Test by Tags.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.",
      options: [
        {
          name: "--resource-arn",
          description: "Tag resource by ARN.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tag resource by Tags.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "terminate-target-instances",
      description:
        "Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.",
      options: [
        {
          name: "--source-server-i-ds",
          description: "Terminate Target instance by Source Server IDs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Terminate Target instance by Tags.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes the specified set of tags from the specified set of Application Migration Service resources.",
      options: [
        {
          name: "--resource-arn",
          description: "Untag resource by ARN.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Untag resource by Keys.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-launch-configuration",
      description: "Updates multiple LaunchConfigurations by Source Server ID.",
      options: [
        {
          name: "--copy-private-ip",
          description: "Update Launch configuration copy Private IP request.",
        },
        {
          name: "--no-copy-private-ip",
          description: "Update Launch configuration copy Private IP request.",
        },
        {
          name: "--copy-tags",
          description: "Update Launch configuration copy Tags request.",
        },
        {
          name: "--no-copy-tags",
          description: "Update Launch configuration copy Tags request.",
        },
        {
          name: "--launch-disposition",
          description:
            "Update Launch configuration launch disposition request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--licensing",
          description: "Update Launch configuration licensing request.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "Update Launch configuration name request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description:
            "Update Launch configuration by Source Server ID request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-instance-type-right-sizing-method",
          description:
            "Update Launch configuration Target instance right sizing request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Allows you to update multiple ReplicationConfigurations by Source Server ID.",
      options: [
        {
          name: "--associate-default-security-group",
          description:
            "Update replication configuration associate default Application Migration Service Security group request.",
        },
        {
          name: "--no-associate-default-security-group",
          description:
            "Update replication configuration associate default Application Migration Service Security group request.",
        },
        {
          name: "--bandwidth-throttling",
          description:
            "Update replication configuration bandwidth throttling request.",
          args: {
            name: "long",
          },
        },
        {
          name: "--create-public-ip",
          description:
            "Update replication configuration create Public IP request.",
        },
        {
          name: "--no-create-public-ip",
          description:
            "Update replication configuration create Public IP request.",
        },
        {
          name: "--data-plane-routing",
          description:
            "Update replication configuration data plane routing request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-large-staging-disk-type",
          description:
            "Update replication configuration use default large Staging Disk type request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption",
          description:
            "Update replication configuration EBS encryption request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption-key-arn",
          description:
            "Update replication configuration EBS encryption key ARN request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Update replication configuration name request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--replicated-disks",
          description:
            "Update replication configuration replicated disks request.",
          args: {
            name: "list",
          },
        },
        {
          name: "--replication-server-instance-type",
          description:
            "Update replication configuration Replication Server instance type request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-servers-security-groups-i-ds",
          description:
            "Update replication configuration Replication Server Security Groups IDs request.",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-server-id",
          description:
            "Update replication configuration Source Server ID request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-subnet-id",
          description:
            "Update replication configuration Staging Area subnet request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-tags",
          description:
            "Update replication configuration Staging Area Tags request.",
          args: {
            name: "map",
          },
        },
        {
          name: "--use-dedicated-replication-server",
          description:
            "Update replication configuration use dedicated Replication Server request.",
        },
        {
          name: "--no-use-dedicated-replication-server",
          description:
            "Update replication configuration use dedicated Replication Server request.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-replication-configuration-template",
      description: "Updates multiple ReplicationConfigurationTemplates by ID.",
      options: [
        {
          name: "--arn",
          description: "Update replication configuration template ARN request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--associate-default-security-group",
          description:
            "Update replication configuration template associate default Application Migration Service Security group request.",
        },
        {
          name: "--no-associate-default-security-group",
          description:
            "Update replication configuration template associate default Application Migration Service Security group request.",
        },
        {
          name: "--bandwidth-throttling",
          description:
            "Update replication configuration template bandwidth throttling request.",
          args: {
            name: "long",
          },
        },
        {
          name: "--create-public-ip",
          description:
            "Update replication configuration template create Public IP request.",
        },
        {
          name: "--no-create-public-ip",
          description:
            "Update replication configuration template create Public IP request.",
        },
        {
          name: "--data-plane-routing",
          description:
            "Update replication configuration template data plane routing request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-large-staging-disk-type",
          description:
            "Update replication configuration template use default large Staging Disk type request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption",
          description:
            "Update replication configuration template EBS encryption request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption-key-arn",
          description:
            "Update replication configuration template EBS encryption key ARN request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-configuration-template-id",
          description:
            "Update replication configuration template template ID request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-server-instance-type",
          description:
            "Update replication configuration template Replication Server instance type request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-servers-security-groups-i-ds",
          description:
            "Update replication configuration template Replication Server Security groups IDs request.",
          args: {
            name: "list",
          },
        },
        {
          name: "--staging-area-subnet-id",
          description:
            "Update replication configuration template Staging Area subnet ID request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-tags",
          description:
            "Update replication configuration template Staging Area Tags request.",
          args: {
            name: "map",
          },
        },
        {
          name: "--use-dedicated-replication-server",
          description:
            "Update replication configuration template use dedicated Replication Server request.",
        },
        {
          name: "--no-use-dedicated-replication-server",
          description:
            "Update replication configuration template use dedicated Replication Server request.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
