const completionSpec: Fig.Spec = {
  name: "mgn",
  description: "The Application Migration Service service",
  subcommands: [
    {
      name: "archive-application",
      description: "Archive application",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description: "Application ID",
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
      name: "archive-wave",
      description: "Archive wave",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--wave-id",
          description: "Wave ID",
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
      name: "associate-applications",
      description: "Associate applications to wave",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-ids",
          description: "Application IDs list",
          args: {
            name: "list",
          },
        },
        {
          name: "--wave-id",
          description: "Wave ID",
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
      name: "associate-source-servers",
      description: "Associate source servers to application",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description: "Application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-ids",
          description: "Source server IDs list",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-server-i-ds",
          description: "Source server IDs list",
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
      name: "change-server-life-cycle-state",
      description:
        "Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)",
      options: [
        {
          name: "--account-id",
          description:
            "The request to change the source server migration account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--life-cycle",
          description:
            "The request to change the source server migration lifecycle state",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-server-id",
          description:
            "The request to change the source server migration lifecycle state by source server ID",
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
      description: "Create application",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Application description",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Application name",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Application tags",
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
      name: "create-connector",
      description: "Create Connector",
      options: [
        {
          name: "--name",
          description: "Create Connector request name",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssm-command-config",
          description: "Create Connector request SSM command config",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ssm-instance-id",
          description: "Create Connector request SSM instance ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Create Connector request tags",
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
          name: "--associate-public-ip-address",
          description: "Associate public Ip address",
        },
        {
          name: "--no-associate-public-ip-address",
          description: "Associate public Ip address",
        },
        {
          name: "--boot-mode",
          description: "Launch configuration template boot mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-private-ip",
          description: "Copy private Ip",
        },
        {
          name: "--no-copy-private-ip",
          description: "Copy private Ip",
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
          name: "--enable-map-auto-tagging",
          description: "Enable map auto tagging",
        },
        {
          name: "--no-enable-map-auto-tagging",
          description: "Enable map auto tagging",
        },
        {
          name: "--large-volume-conf",
          description: "Large volume config",
          args: {
            name: "structure",
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
          name: "--licensing",
          description: "Configure Licensing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--map-auto-tagging-mpe-id",
          description: "Launch configuration template map auto tagging MPE ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--post-launch-actions",
          description: "Launch configuration template post launch actions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--small-volume-conf",
          description: "Small volume config",
          args: {
            name: "structure",
          },
        },
        {
          name: "--small-volume-max-size",
          description: "Small volume maximum size",
          args: {
            name: "long",
          },
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
            "Request to associate the default Application Migration Service Security group with the Replication Settings template",
        },
        {
          name: "--no-associate-default-security-group",
          description:
            "Request to associate the default Application Migration Service Security group with the Replication Settings template",
        },
        {
          name: "--bandwidth-throttling",
          description:
            "Request to configure bandwidth throttling during Replication Settings template creation",
          args: {
            name: "long",
          },
        },
        {
          name: "--create-public-ip",
          description:
            "Request to create Public IP during Replication Settings template creation",
        },
        {
          name: "--no-create-public-ip",
          description:
            "Request to create Public IP during Replication Settings template creation",
        },
        {
          name: "--data-plane-routing",
          description:
            "Request to configure data plane routing during Replication Settings template creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-large-staging-disk-type",
          description:
            "Request to configure the default large staging disk EBS volume type during Replication Settings template creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption",
          description:
            "Request to configure EBS encryption during Replication Settings template creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption-key-arn",
          description:
            "Request to configure an EBS encryption key during Replication Settings template creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-server-instance-type",
          description:
            "Request to configure the Replication Server instance type during Replication Settings template creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-servers-security-groups-ids",
          description:
            "Request to configure the Replication Server Security group ID during Replication Settings template creation",
          args: {
            name: "list",
          },
        },
        {
          name: "--staging-area-subnet-id",
          description:
            "Request to configure the Staging Area subnet ID during Replication Settings template creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-tags",
          description:
            "Request to configure Staging Area tags during Replication Settings template creation",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description:
            "Request to configure tags during Replication Settings template creation",
          args: {
            name: "map",
          },
        },
        {
          name: "--use-dedicated-replication-server",
          description:
            "Request to use Dedicated Replication Servers during Replication Settings template creation",
        },
        {
          name: "--no-use-dedicated-replication-server",
          description:
            "Request to use Dedicated Replication Servers during Replication Settings template creation",
        },
        {
          name: "--use-fips-endpoint",
          description:
            "Request to use Fips Endpoint during Replication Settings template creation",
        },
        {
          name: "--no-use-fips-endpoint",
          description:
            "Request to use Fips Endpoint during Replication Settings template creation",
        },
        {
          name: "--replication-servers-security-groups-i-ds",
          description:
            "Request to configure the Replication Server Security group ID during Replication Settings template creation",
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
      name: "create-wave",
      description: "Create wave",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Wave description",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Wave name",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Wave tags",
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
      name: "delete-application",
      description: "Delete application",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description: "Application ID",
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
      name: "delete-connector",
      description: "Delete Connector",
      options: [
        {
          name: "--connector-id",
          description: "Delete Connector request connector ID",
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
          name: "--account-id",
          description: "Request to delete Job from service by Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "Request to delete Job from service by Job ID",
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
          description: "ID of resource to be deleted",
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
            "Request to delete Replication Configuration Template from service by Replication Configuration Template ID",
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
      description: "Deletes a single source server by ID",
      options: [
        {
          name: "--account-id",
          description:
            "Request to delete Source Server from service by Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description:
            "Request to delete Source Server from service by Server ID",
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
      name: "delete-vcenter-client",
      description: "Deletes a given vCenter client by ID",
      options: [
        {
          name: "--vcenter-client-id",
          description: "ID of resource to be deleted",
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
      name: "delete-wave",
      description: "Delete wave",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--wave-id",
          description: "Wave ID",
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
      description: "Retrieves detailed job log items with paging",
      options: [
        {
          name: "--account-id",
          description: "Request to describe Job log Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "Request to describe Job log job ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Request to describe Job log item maximum results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Request to describe Job log next token",
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
        "Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets",
      options: [
        {
          name: "--account-id",
          description: "Request to describe job log items by Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Request to describe Job log filters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Request to describe job log items by max results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Request to describe job log items by next token",
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
            "Next pagination token returned from DescribeLaunchConfigurationTemplates",
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
            "Request to describe Replication Configuration template by max results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Request to describe Replication Configuration template by next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-configuration-template-ids",
          description:
            "Request to describe Replication Configuration template by template IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--replication-configuration-template-i-ds",
          description:
            "Request to describe Replication Configuration template by template IDs",
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
      name: "describe-source-servers",
      description:
        "Retrieves all SourceServers or multiple SourceServers by ID",
      options: [
        {
          name: "--account-id",
          description: "Request to filter Source Servers list by Accoun ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Request to filter Source Servers list",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "Request to filter Source Servers list by maximum results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Request to filter Source Servers list by next token",
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
      name: "describe-vcenter-clients",
      description: "Returns a list of the installed vCenter clients",
      options: [
        {
          name: "--max-results",
          description:
            "Maximum results to be returned in DescribeVcenterClients",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Next pagination token to be provided for DescribeVcenterClients",
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
      name: "disassociate-applications",
      description: "Disassociate applications from wave",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-ids",
          description: "Application IDs list",
          args: {
            name: "list",
          },
        },
        {
          name: "--wave-id",
          description: "Wave ID",
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
      name: "disassociate-source-servers",
      description: "Disassociate source servers from application",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description: "Application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-ids",
          description: "Source server IDs list",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-server-i-ds",
          description: "Source server IDs list",
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
      name: "disconnect-from-service",
      description:
        "Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified",
      options: [
        {
          name: "--account-id",
          description:
            "Request to disconnect Source Server from service by Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description:
            "Request to disconnect Source Server from service by Server ID",
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
      name: "finalize-cutover",
      description:
        "Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified",
      options: [
        {
          name: "--account-id",
          description: "Request to finalize Cutover by Source Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description: "Request to finalize Cutover by Source Server ID",
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
      description:
        "Lists all LaunchConfigurations available, filtered by Source Server IDs",
      options: [
        {
          name: "--account-id",
          description:
            "Request to get Launch Configuration information by Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description:
            "Request to get Launch Configuration information by Source Server ID",
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
        "Lists all ReplicationConfigurations, filtered by Source Server ID",
      options: [
        {
          name: "--account-id",
          description: "Request to get Replication Configuration by Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description:
            "Request to get Replication Configuration by Source Server ID",
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
      description: "Initialize Application Migration Service",
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
      name: "list-applications",
      description: "Retrieves all applications or multiple applications by ID",
      options: [
        {
          name: "--account-id",
          description: "Applications list Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Applications list filters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Maximum results to return when listing applications",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Request next token",
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
      name: "list-connectors",
      description: "List Connectors",
      options: [
        {
          name: "--filters",
          description: "List Connectors Request filters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "List Connectors Request max results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "List Connectors Request next token",
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
      name: "list-export-errors",
      description: "List export errors",
      options: [
        {
          name: "--export-id",
          description: "List export errors request export id",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "List export errors request max results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "List export errors request next token",
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
      name: "list-exports",
      description: "List exports",
      options: [
        {
          name: "--filters",
          description: "List exports request filters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "List export request max results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "List export request next token",
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
      name: "list-import-errors",
      description: "List import errors",
      options: [
        {
          name: "--import-id",
          description: "List import errors request import id",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "List import errors request max results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "List import errors request next token",
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
      name: "list-imports",
      description: "List imports",
      options: [
        {
          name: "--filters",
          description: "List imports request filters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "List imports request max results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "List imports request next token",
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
      name: "list-managed-accounts",
      description: "List Managed Accounts",
      options: [
        {
          name: "--max-results",
          description: "List managed accounts request max results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "List managed accounts request next token",
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
      name: "list-source-server-actions",
      description: "List source server post migration custom actions",
      options: [
        {
          name: "--account-id",
          description:
            "Account ID to return when listing source server post migration custom actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters to apply when listing source server post migration custom actions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum amount of items to return when listing source server post migration custom actions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Next token to use when listing source server post migration custom actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description: "Source server ID",
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
        "List all tags for your Application Migration Service resources",
      options: [
        {
          name: "--resource-arn",
          description: "List tags for resource request by ARN",
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
      name: "list-template-actions",
      description: "List template post migration custom actions",
      options: [
        {
          name: "--filters",
          description:
            "Filters to apply when listing template post migration custom actions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--launch-configuration-template-id",
          description: "Launch configuration template ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum amount of items to return when listing template post migration custom actions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Next token to use when listing template post migration custom actions",
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
      name: "list-waves",
      description: "Retrieves all waves or multiple waves by ID",
      options: [
        {
          name: "--account-id",
          description: "Request account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Waves list filters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Maximum results to return when listing waves",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Request next token",
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
      name: "mark-as-archived",
      description:
        "Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER",
      options: [
        {
          name: "--account-id",
          description: "Mark as archived by Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description: "Mark as archived by Source Server ID",
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
      name: "pause-replication",
      description: "Pause Replication",
      options: [
        {
          name: "--account-id",
          description: "Pause Replication Request account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description: "Pause Replication Request source server ID",
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
      name: "put-source-server-action",
      description: "Put source server post migration custom action",
      options: [
        {
          name: "--account-id",
          description: "Source server post migration custom account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-id",
          description: "Source server post migration custom action ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-name",
          description: "Source server post migration custom action name",
          args: {
            name: "string",
          },
        },
        {
          name: "--active",
          description:
            "Source server post migration custom action active status",
        },
        {
          name: "--no-active",
          description:
            "Source server post migration custom action active status",
        },
        {
          name: "--category",
          description: "Source server post migration custom action category",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Source server post migration custom action description",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-identifier",
          description:
            "Source server post migration custom action document identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-version",
          description:
            "Source server post migration custom action document version",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-parameters",
          description:
            "Source server post migration custom action external parameters",
          args: {
            name: "map",
          },
        },
        {
          name: "--must-succeed-for-cutover",
          description:
            "Source server post migration custom action must succeed for cutover",
        },
        {
          name: "--no-must-succeed-for-cutover",
          description:
            "Source server post migration custom action must succeed for cutover",
        },
        {
          name: "--order",
          description: "Source server post migration custom action order",
          args: {
            name: "integer",
          },
        },
        {
          name: "--parameters",
          description: "Source server post migration custom action parameters",
          args: {
            name: "map",
          },
        },
        {
          name: "--source-server-id",
          description: "Source server ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout-seconds",
          description:
            "Source server post migration custom action timeout in seconds",
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
      name: "put-template-action",
      description: "Put template post migration custom action",
      options: [
        {
          name: "--action-id",
          description: "Template post migration custom action ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-name",
          description: "Template post migration custom action name",
          args: {
            name: "string",
          },
        },
        {
          name: "--active",
          description: "Template post migration custom action active status",
        },
        {
          name: "--no-active",
          description: "Template post migration custom action active status",
        },
        {
          name: "--category",
          description: "Template post migration custom action category",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Template post migration custom action description",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-identifier",
          description:
            "Template post migration custom action document identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-version",
          description: "Template post migration custom action document version",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-parameters",
          description:
            "Template post migration custom action external parameters",
          args: {
            name: "map",
          },
        },
        {
          name: "--launch-configuration-template-id",
          description: "Launch configuration template ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--must-succeed-for-cutover",
          description:
            "Template post migration custom action must succeed for cutover",
        },
        {
          name: "--no-must-succeed-for-cutover",
          description:
            "Template post migration custom action must succeed for cutover",
        },
        {
          name: "--operating-system",
          description:
            "Operating system eligible for this template post migration custom action",
          args: {
            name: "string",
          },
        },
        {
          name: "--order",
          description: "Template post migration custom action order",
          args: {
            name: "integer",
          },
        },
        {
          name: "--parameters",
          description: "Template post migration custom action parameters",
          args: {
            name: "map",
          },
        },
        {
          name: "--timeout-seconds",
          description:
            "Template post migration custom action timeout in seconds",
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
      name: "remove-source-server-action",
      description: "Remove source server post migration custom action",
      options: [
        {
          name: "--account-id",
          description: "Source server post migration account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-id",
          description:
            "Source server post migration custom action ID to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description:
            "Source server ID of the post migration custom action to remove",
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
      name: "remove-template-action",
      description: "Remove template post migration custom action",
      options: [
        {
          name: "--action-id",
          description: "Template post migration custom action ID to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-configuration-template-id",
          description:
            "Launch configuration template ID of the post migration custom action to remove",
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
      name: "resume-replication",
      description: "Resume Replication",
      options: [
        {
          name: "--account-id",
          description: "Resume Replication Request account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description: "Resume Replication Request source server ID",
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
        "Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state",
      options: [
        {
          name: "--account-id",
          description: "Retry data replication for Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description: "Retry data replication for Source Server ID",
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
      name: "start-cutover",
      description:
        "Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER",
      options: [
        {
          name: "--account-id",
          description: "Start Cutover by Account IDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-ids",
          description: "Start Cutover by Source Server IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Start Cutover by Tags",
          args: {
            name: "map",
          },
        },
        {
          name: "--source-server-i-ds",
          description: "Start Cutover by Source Server IDs",
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
      name: "start-export",
      description: "Start export",
      options: [
        {
          name: "--s3-bucket",
          description: "Start export request s3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-owner",
          description: "Start export request s3 bucket owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-key",
          description: "Start export request s3key",
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
      name: "start-import",
      description: "Start import",
      options: [
        {
          name: "--client-token",
          description: "Start import request client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-source",
          description: "Start import request s3 bucket source",
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
      name: "start-replication",
      description: "Starts replication for SNAPSHOT_SHIPPING agents",
      options: [
        {
          name: "--account-id",
          description: "Account ID on which to start replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description: "ID of source server on which to start replication",
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
      name: "start-test",
      description:
        "Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING",
      options: [
        {
          name: "--account-id",
          description: "Start Test for Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-ids",
          description: "Start Test for Source Server IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Start Test by Tags",
          args: {
            name: "map",
          },
        },
        {
          name: "--source-server-i-ds",
          description: "Start Test for Source Server IDs",
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
      name: "stop-replication",
      description: "Stop Replication",
      options: [
        {
          name: "--account-id",
          description: "Stop Replication Request account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description: "Stop Replication Request source server ID",
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
        "Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value",
      options: [
        {
          name: "--resource-arn",
          description: "Tag resource by ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tag resource by Tags",
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
      name: "terminate-target-instances",
      description:
        "Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER",
      options: [
        {
          name: "--account-id",
          description: "Terminate Target instance by Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-ids",
          description: "Terminate Target instance by Source Server IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Terminate Target instance by Tags",
          args: {
            name: "map",
          },
        },
        {
          name: "--source-server-i-ds",
          description: "Terminate Target instance by Source Server IDs",
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
      name: "unarchive-application",
      description: "Unarchive application",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description: "Application ID",
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
      name: "unarchive-wave",
      description: "Unarchive wave",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--wave-id",
          description: "Wave ID",
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
      description:
        "Deletes the specified set of tags from the specified set of Application Migration Service resources",
      options: [
        {
          name: "--resource-arn",
          description: "Untag resource by ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Untag resource by Keys",
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
      description: "Update application",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description: "Application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Application description",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Application name",
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
      name: "update-connector",
      description: "Update Connector",
      options: [
        {
          name: "--connector-id",
          description: "Update Connector request connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Update Connector request name",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssm-command-config",
          description: "Update Connector request SSM command config",
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
      name: "update-launch-configuration",
      description:
        "Updates multiple LaunchConfigurations by Source Server ID.  bootMode valid values are LEGACY_BIOS | UEFI",
      options: [
        {
          name: "--account-id",
          description: "Update Launch configuration Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--boot-mode",
          description: "Update Launch configuration boot mode request",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-private-ip",
          description: "Update Launch configuration copy Private IP request",
        },
        {
          name: "--no-copy-private-ip",
          description: "Update Launch configuration copy Private IP request",
        },
        {
          name: "--copy-tags",
          description: "Update Launch configuration copy Tags request",
        },
        {
          name: "--no-copy-tags",
          description: "Update Launch configuration copy Tags request",
        },
        {
          name: "--enable-map-auto-tagging",
          description: "Enable map auto tagging",
        },
        {
          name: "--no-enable-map-auto-tagging",
          description: "Enable map auto tagging",
        },
        {
          name: "--launch-disposition",
          description: "Update Launch configuration launch disposition request",
          args: {
            name: "string",
          },
        },
        {
          name: "--licensing",
          description: "Update Launch configuration licensing request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--map-auto-tagging-mpe-id",
          description: "Launch configuration map auto tagging MPE ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Update Launch configuration name request",
          args: {
            name: "string",
          },
        },
        {
          name: "--post-launch-actions",
          description:
            "Post Launch Actions to executed on the Test or Cutover instance",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-server-id",
          description:
            "Update Launch configuration by Source Server ID request",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-instance-type-right-sizing-method",
          description:
            "Update Launch configuration Target instance right sizing request",
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
          name: "--associate-public-ip-address",
          description: "Associate public Ip address",
        },
        {
          name: "--no-associate-public-ip-address",
          description: "Associate public Ip address",
        },
        {
          name: "--boot-mode",
          description: "Launch configuration template boot mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-private-ip",
          description: "Copy private Ip",
        },
        {
          name: "--no-copy-private-ip",
          description: "Copy private Ip",
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
          name: "--enable-map-auto-tagging",
          description: "Enable map auto tagging",
        },
        {
          name: "--no-enable-map-auto-tagging",
          description: "Enable map auto tagging",
        },
        {
          name: "--large-volume-conf",
          description: "Large volume config",
          args: {
            name: "structure",
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
          name: "--licensing",
          description: "Configure Licensing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--map-auto-tagging-mpe-id",
          description: "Launch configuration template map auto tagging MPE ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--post-launch-actions",
          description:
            "Post Launch Action to execute on the Test or Cutover instance",
          args: {
            name: "structure",
          },
        },
        {
          name: "--small-volume-conf",
          description: "Small volume config",
          args: {
            name: "structure",
          },
        },
        {
          name: "--small-volume-max-size",
          description: "Small volume maximum size",
          args: {
            name: "long",
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
      name: "update-replication-configuration",
      description:
        "Allows you to update multiple ReplicationConfigurations by Source Server ID",
      options: [
        {
          name: "--account-id",
          description: "Update replication configuration Account ID request",
          args: {
            name: "string",
          },
        },
        {
          name: "--associate-default-security-group",
          description:
            "Update replication configuration associate default Application Migration Service Security group request",
        },
        {
          name: "--no-associate-default-security-group",
          description:
            "Update replication configuration associate default Application Migration Service Security group request",
        },
        {
          name: "--bandwidth-throttling",
          description:
            "Update replication configuration bandwidth throttling request",
          args: {
            name: "long",
          },
        },
        {
          name: "--create-public-ip",
          description:
            "Update replication configuration create Public IP request",
        },
        {
          name: "--no-create-public-ip",
          description:
            "Update replication configuration create Public IP request",
        },
        {
          name: "--data-plane-routing",
          description:
            "Update replication configuration data plane routing request",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-large-staging-disk-type",
          description:
            "Update replication configuration use default large Staging Disk type request",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption",
          description:
            "Update replication configuration EBS encryption request",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption-key-arn",
          description:
            "Update replication configuration EBS encryption key ARN request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Update replication configuration name request",
          args: {
            name: "string",
          },
        },
        {
          name: "--replicated-disks",
          description:
            "Update replication configuration replicated disks request",
          args: {
            name: "list",
          },
        },
        {
          name: "--replication-server-instance-type",
          description:
            "Update replication configuration Replication Server instance type request",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-servers-security-groups-ids",
          description:
            "Update replication configuration Replication Server Security Groups IDs request",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-server-id",
          description:
            "Update replication configuration Source Server ID request",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-subnet-id",
          description:
            "Update replication configuration Staging Area subnet request",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-tags",
          description:
            "Update replication configuration Staging Area Tags request",
          args: {
            name: "map",
          },
        },
        {
          name: "--use-dedicated-replication-server",
          description:
            "Update replication configuration use dedicated Replication Server request",
        },
        {
          name: "--no-use-dedicated-replication-server",
          description:
            "Update replication configuration use dedicated Replication Server request",
        },
        {
          name: "--use-fips-endpoint",
          description: "Update replication configuration use Fips Endpoint",
        },
        {
          name: "--no-use-fips-endpoint",
          description: "Update replication configuration use Fips Endpoint",
        },
        {
          name: "--replication-servers-security-groups-i-ds",
          description:
            "Update replication configuration Replication Server Security Groups IDs request",
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
      name: "update-replication-configuration-template",
      description: "Updates multiple ReplicationConfigurationTemplates by ID",
      options: [
        {
          name: "--arn",
          description: "Update replication configuration template ARN request",
          args: {
            name: "string",
          },
        },
        {
          name: "--associate-default-security-group",
          description:
            "Update replication configuration template associate default Application Migration Service Security group request",
        },
        {
          name: "--no-associate-default-security-group",
          description:
            "Update replication configuration template associate default Application Migration Service Security group request",
        },
        {
          name: "--bandwidth-throttling",
          description:
            "Update replication configuration template bandwidth throttling request",
          args: {
            name: "long",
          },
        },
        {
          name: "--create-public-ip",
          description:
            "Update replication configuration template create Public IP request",
        },
        {
          name: "--no-create-public-ip",
          description:
            "Update replication configuration template create Public IP request",
        },
        {
          name: "--data-plane-routing",
          description:
            "Update replication configuration template data plane routing request",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-large-staging-disk-type",
          description:
            "Update replication configuration template use default large Staging Disk type request",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption",
          description:
            "Update replication configuration template EBS encryption request",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-encryption-key-arn",
          description:
            "Update replication configuration template EBS encryption key ARN request",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-configuration-template-id",
          description:
            "Update replication configuration template template ID request",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-server-instance-type",
          description:
            "Update replication configuration template Replication Server instance type request",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-servers-security-groups-ids",
          description:
            "Update replication configuration template Replication Server Security groups IDs request",
          args: {
            name: "list",
          },
        },
        {
          name: "--staging-area-subnet-id",
          description:
            "Update replication configuration template Staging Area subnet ID request",
          args: {
            name: "string",
          },
        },
        {
          name: "--staging-area-tags",
          description:
            "Update replication configuration template Staging Area Tags request",
          args: {
            name: "map",
          },
        },
        {
          name: "--use-dedicated-replication-server",
          description:
            "Update replication configuration template use dedicated Replication Server request",
        },
        {
          name: "--no-use-dedicated-replication-server",
          description:
            "Update replication configuration template use dedicated Replication Server request",
        },
        {
          name: "--use-fips-endpoint",
          description:
            "Update replication configuration template use Fips Endpoint request",
        },
        {
          name: "--no-use-fips-endpoint",
          description:
            "Update replication configuration template use Fips Endpoint request",
        },
        {
          name: "--replication-servers-security-groups-i-ds",
          description:
            "Update replication configuration template Replication Server Security groups IDs request",
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
      name: "update-source-server",
      description: "Update Source Server",
      options: [
        {
          name: "--account-id",
          description: "Update Source Server request account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--connector-action",
          description: "Update Source Server request connector action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-server-id",
          description: "Update Source Server request source server ID",
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
      name: "update-source-server-replication-type",
      description:
        "Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type",
      options: [
        {
          name: "--account-id",
          description: "Account ID on which to update replication type",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-type",
          description: "Replication type to which to update source server",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-server-id",
          description:
            "ID of source server on which to update replication type",
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
      name: "update-wave",
      description: "Update wave",
      options: [
        {
          name: "--account-id",
          description: "Account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Wave description",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Wave name",
          args: {
            name: "string",
          },
        },
        {
          name: "--wave-id",
          description: "Wave ID",
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
};
export default completionSpec;
