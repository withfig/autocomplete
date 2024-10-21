const completionSpec: Fig.Spec = {
  name: "finspace",
  description:
    "The FinSpace management service provides the APIs for managing FinSpace environments",
  subcommands: [
    {
      name: "create-environment",
      description: "Create a new FinSpace environment",
      options: [
        {
          name: "--name",
          description: "The name of the FinSpace environment to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the FinSpace environment to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The KMS key id to encrypt your data in the FinSpace environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Add tags to your FinSpace environment",
          args: {
            name: "map",
          },
        },
        {
          name: "--federation-mode",
          description:
            "Authentication mode for the environment.    FEDERATED - Users access FinSpace through Single Sign On (SSO) via your Identity provider.    LOCAL - Users access FinSpace via email and password managed within the FinSpace environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--federation-parameters",
          description:
            "Configuration information when authentication mode is FEDERATED",
          args: {
            name: "structure",
          },
        },
        {
          name: "--superuser-parameters",
          description: "Configuration information for the superuser",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-bundles",
          description:
            "The list of Amazon Resource Names (ARN) of the data bundles to install. Currently supported data bundle ARNs:    arn:aws:finspace:${Region}::data-bundle/capital-markets-sample - Contains sample Capital Markets datasets, categories and controlled vocabularies.    arn:aws:finspace:${Region}::data-bundle/taq (default) - Contains trades and quotes data in addition to sample Capital Markets data",
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
      name: "create-kx-changeset",
      description:
        "Creates a changeset for a kdb database. A changeset allows you to add and delete existing files by using an ordered list of change requests",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier of the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The name of the kdb database",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-requests",
          description:
            'A list of change request objects that are run in order. A change request object consists of changeType , s3Path, and dbPath. A changeType can have the following values:    PUT \u2013 Adds or updates files in a database.   DELETE \u2013 Deletes files in a database.   All the change requests require a mandatory dbPath attribute that defines the path within the database directory. All database paths must start with a leading / and end with a trailing /. The s3Path attribute defines the s3 source file path and is required for a PUT change type. The s3path must end with a trailing / if it is a directory and must end without a trailing / if it is a file.  Here are few examples of how you can use the change request object:   This request adds a single sym file at database root location.   { "changeType": "PUT", "s3Path":"s3://bucket/db/sym", "dbPath":"/"}    This request adds files in the given s3Path under the 2020.01.02 partition of the database.  { "changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/", "dbPath":"/2020.01.02/"}    This request adds files in the given s3Path under the taq table partition of the database.  [ { "changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/taq/", "dbPath":"/2020.01.02/taq/"}]    This request deletes the 2020.01.02 partition of the database.  [{ "changeType": "DELETE", "dbPath": "/2020.01.02/"} ]    The DELETE request allows you to delete the existing files under the 2020.01.02 partition of the database, and the PUT request adds a new taq table under it.  [ {"changeType": "DELETE", "dbPath":"/2020.01.02/"}, {"changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/taq/", "dbPath":"/2020.01.02/taq/"}]',
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "create-kx-cluster",
      description: "Creates a new kdb cluster",
      options: [
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description: "A unique name for the cluster that you want to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-type",
          description:
            "Specifies the type of KDB database that is being created. The following types are available:    HDB \u2013 A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.   RDB \u2013 A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the savedownStorageConfiguration parameter.   GATEWAY \u2013 A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.   GP \u2013 A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only SINGLE AZ mode.   Tickerplant \u2013 A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process",
          args: {
            name: "string",
          },
        },
        {
          name: "--tickerplant-log-configuration",
          description:
            "A configuration to store Tickerplant logs. It consists of a list of volumes that will be mounted to your cluster. For the cluster type Tickerplant, the location of the TP volume on the cluster will be available by using the global variable .aws.tp_log_path",
          args: {
            name: "structure",
          },
        },
        {
          name: "--databases",
          description:
            "A list of databases that will be available for querying",
          args: {
            name: "list",
          },
        },
        {
          name: "--cache-storage-configurations",
          description:
            "The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-configuration",
          description:
            "The configuration based on which FinSpace will scale in or scale out nodes in your cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cluster-description",
          description: "A description of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity-configuration",
          description:
            "A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--release-label",
          description: "The version of FinSpace managed kdb to run",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-configuration",
          description:
            "Configuration details about the network where the Privatelink endpoint of the cluster resides",
          args: {
            name: "structure",
          },
        },
        {
          name: "--initialization-script",
          description:
            "Specifies a Q program that will be run at launch of a cluster. It is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q",
          args: {
            name: "string",
          },
        },
        {
          name: "--command-line-arguments",
          description:
            "Defines the key-value pairs to make them available inside the cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--code",
          description:
            "The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role",
          description:
            "An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--savedown-storage-configuration",
          description:
            "The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose clusterType as RDB. All the data written to this storage space is lost when the cluster node is restarted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--az-mode",
          description:
            "The number of availability zones you want to assign per cluster. This can be one of the following     SINGLE \u2013 Assigns one availability zone per cluster.    MULTI \u2013 Assigns all the availability zones per cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-id",
          description:
            "The availability zone identifiers for the requested regions",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to label the cluster. You can add up to 50 tags to a cluster",
          args: {
            name: "map",
          },
        },
        {
          name: "--scaling-group-configuration",
          description:
            "The structure that stores the configuration details of a scaling group",
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
      name: "create-kx-database",
      description: "Creates a new kdb database in the environment",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The name of the kdb database",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the database",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to label the kdb database. You can add up to 50 tags to your kdb database",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "create-kx-dataview",
      description:
        "Creates a snapshot of kdb database with tiered storage capabilities and a pre-warmed cache, ready for mounting on kdb clusters. Dataviews are only available for clusters running on a scaling group. They are not supported on dedicated clusters",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, where you want to create the dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database where you want to create a dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataview-name",
          description: "A unique identifier for the dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--az-mode",
          description:
            "The number of availability zones you want to assign per volume. Currently, FinSpace only supports SINGLE for volumes. This places dataview in a single AZ",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-id",
          description: "The identifier of the availability zones",
          args: {
            name: "string",
          },
        },
        {
          name: "--changeset-id",
          description:
            "A unique identifier of the changeset that you want to use to ingest data",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-configurations",
          description:
            "The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-update",
          description:
            "The option to specify whether you want to apply all the future additions and corrections automatically to the dataview, when you ingest new changesets. The default value is false",
        },
        {
          name: "--no-auto-update",
          description:
            "The option to specify whether you want to apply all the future additions and corrections automatically to the dataview, when you ingest new changesets. The default value is false",
        },
        {
          name: "--read-write",
          description:
            "The option to specify whether you want to make the dataview writable to perform database maintenance. The following are some considerations related to writable dataviews.\u2028\u2028   You cannot create partial writable dataviews. When you create writeable dataviews you must provide the entire database path.   You cannot perform updates on a writeable dataview. Hence, autoUpdate must be set as False if readWrite is True for a dataview.   You must also use a unique volume for creating a writeable dataview. So, if you choose a volume that is already in use by another dataview, the dataview creation fails.   Once you create a dataview as writeable, you cannot change it to read-only. So, you cannot update the readWrite parameter later",
        },
        {
          name: "--no-read-write",
          description:
            "The option to specify whether you want to make the dataview writable to perform database maintenance. The following are some considerations related to writable dataviews.\u2028\u2028   You cannot create partial writable dataviews. When you create writeable dataviews you must provide the entire database path.   You cannot perform updates on a writeable dataview. Hence, autoUpdate must be set as False if readWrite is True for a dataview.   You must also use a unique volume for creating a writeable dataview. So, if you choose a volume that is already in use by another dataview, the dataview creation fails.   Once you create a dataview as writeable, you cannot change it to read-only. So, you cannot update the readWrite parameter later",
        },
        {
          name: "--description",
          description: "A description of the dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to label the dataview. You can add up to 50 tags to a dataview",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "create-kx-environment",
      description: "Creates a managed kdb environment for the account",
      options: [
        {
          name: "--name",
          description:
            "The name of the kdb environment that you want to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The KMS key ID to encrypt your data in the FinSpace environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to label the kdb environment. You can add up to 50 tags to your kdb environment",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "create-kx-scaling-group",
      description: "Creates a new scaling group",
      options: [
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, where you want to create the scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-group-name",
          description: "A unique identifier for the kdb scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-type",
          description:
            "The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed. You can add one of the following values:    kx.sg.large \u2013 The host type with a configuration of 16 GiB memory and 2 vCPUs.    kx.sg.xlarge \u2013 The host type with a configuration of 32 GiB memory and 4 vCPUs.    kx.sg.2xlarge \u2013 The host type with a configuration of 64 GiB memory and 8 vCPUs.    kx.sg.4xlarge \u2013 The host type with a configuration of 108 GiB memory and 16 vCPUs.    kx.sg.8xlarge \u2013 The host type with a configuration of 216 GiB memory and 32 vCPUs.    kx.sg.16xlarge \u2013 The host type with a configuration of 432 GiB memory and 64 vCPUs.    kx.sg.32xlarge \u2013 The host type with a configuration of 864 GiB memory and 128 vCPUs.    kx.sg1.16xlarge \u2013 The host type with a configuration of 1949 GiB memory and 64 vCPUs.    kx.sg1.24xlarge \u2013 The host type with a configuration of 2948 GiB memory and 96 vCPUs",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-id",
          description: "The identifier of the availability zones",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to label the scaling group. You can add up to 50 tags to a scaling group",
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
      name: "create-kx-user",
      description:
        "Creates a user in FinSpace kdb environment with an associated IAM role",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment where you want to create a user",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description: "A unique identifier for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role",
          description: "The IAM role ARN that will be associated with the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to label the user. You can add up to 50 tags to a user",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "create-kx-volume",
      description:
        "Creates a new volume with a specific amount of throughput and storage capacity",
      options: [
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, whose clusters can attach to the volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-type",
          description:
            "The type of file system volume. Currently, FinSpace only supports NAS_1 volume type. When you select NAS_1 volume type, you must also provide nas1Configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-name",
          description: "A unique identifier for the volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--nas1-configuration",
          description:
            "Specifies the configuration for the Network attached storage (NAS_1) file system volume. This parameter is required when you choose volumeType as NAS_1",
          args: {
            name: "structure",
          },
        },
        {
          name: "--az-mode",
          description:
            "The number of availability zones you want to assign per volume. Currently, FinSpace only supports SINGLE for volumes. This places dataview in a single AZ",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-ids",
          description: "The identifier of the availability zones",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to label the volume. You can add up to 50 tags to a volume",
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
      name: "delete-environment",
      description: "Delete an FinSpace environment",
      options: [
        {
          name: "--environment-id",
          description: "The identifier for the FinSpace environment",
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
      name: "delete-kx-cluster",
      description: "Deletes a kdb cluster",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description: "The name of the cluster that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "delete-kx-cluster-node",
      description: "Deletes the specified nodes from a cluster",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description:
            "The name of the cluster, for which you want to delete the nodes",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-id",
          description:
            "A unique identifier for the node that you want to delete",
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
      name: "delete-kx-database",
      description:
        "Deletes the specified database and all of its associated data. This action is irreversible. You must copy any data out of the database before deleting it if the data is to be retained",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The name of the kdb database that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "delete-kx-dataview",
      description:
        "Deletes the specified dataview. Before deleting a dataview, make sure that it is not in use by any cluster",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, from where you want to delete the dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database whose dataview you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataview-name",
          description: "The name of the dataview that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "delete-kx-environment",
      description:
        "Deletes the kdb environment. This action is irreversible. Deleting a kdb environment will remove all the associated data and any services running in it",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "delete-kx-scaling-group",
      description:
        "Deletes the specified scaling group. This action is irreversible. You cannot delete a scaling group until all the clusters running on it have been deleted",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, from where you want to delete the dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-group-name",
          description: "A unique identifier for the kdb scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "delete-kx-user",
      description: "Deletes a user in the specified kdb environment",
      options: [
        {
          name: "--user-name",
          description:
            "A unique identifier for the user that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "delete-kx-volume",
      description:
        "Deletes a volume. You can only delete a volume if it's not attached to a cluster or a dataview. When a volume is deleted, any data on the volume is lost. This action is irreversible",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, whose clusters can attach to the volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-name",
          description: "The name of the volume that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "get-environment",
      description: "Returns the FinSpace environment object",
      options: [
        {
          name: "--environment-id",
          description: "The identifier of the FinSpace environment",
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
      name: "get-kx-changeset",
      description: "Returns information about a kdb changeset",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The name of the kdb database",
          args: {
            name: "string",
          },
        },
        {
          name: "--changeset-id",
          description:
            "A unique identifier of the changeset for which you want to retrieve data",
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
      name: "get-kx-cluster",
      description: "Retrieves information about a kdb cluster",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description: "The name of the cluster that you want to retrieve",
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
      name: "get-kx-connection-string",
      description:
        "Retrieves a connection string for a user to connect to a kdb cluster. You must call this API using the same role that you have defined while creating a user",
      options: [
        {
          name: "--user-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description: "A name of the kdb cluster",
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
      name: "get-kx-database",
      description:
        "Returns database information for the specified environment ID",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The name of the kdb database",
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
      name: "get-kx-dataview",
      description: "Retrieves details of the dataview",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, from where you want to retrieve the dataview details",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database where you created the dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataview-name",
          description: "A unique identifier for the dataview",
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
      name: "get-kx-environment",
      description:
        "Retrieves all the information for the specified kdb environment",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
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
      name: "get-kx-scaling-group",
      description: "Retrieves details of a scaling group",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-group-name",
          description: "A unique identifier for the kdb scaling group",
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
      name: "get-kx-user",
      description: "Retrieves information about the specified kdb user",
      options: [
        {
          name: "--user-name",
          description: "A unique identifier for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
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
      name: "get-kx-volume",
      description: "Retrieves the information about the volume",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, whose clusters can attach to the volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-name",
          description: "A unique identifier for the volume",
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
      name: "list-environments",
      description: "A list of all of your FinSpace environments",
      options: [
        {
          name: "--next-token",
          description:
            "A token generated by FinSpace that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the nextTokennextToken value from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
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
      name: "list-kx-changesets",
      description: "Returns a list of all the changesets for a database",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The name of the kdb database",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
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
      name: "list-kx-cluster-nodes",
      description: "Lists all the nodes in a kdb cluster",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description: "A unique name for the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
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
      name: "list-kx-clusters",
      description: "Returns a list of clusters",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-type",
          description:
            "Specifies the type of KDB database that is being created. The following types are available:    HDB \u2013 A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.   RDB \u2013 A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the savedownStorageConfiguration parameter.   GATEWAY \u2013 A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.   GP \u2013 A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only SINGLE AZ mode.   Tickerplant \u2013 A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
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
      name: "list-kx-databases",
      description: "Returns a list of all the databases in the kdb environment",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
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
      name: "list-kx-dataviews",
      description: "Returns a list of all the dataviews in the database",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, for which you want to retrieve a list of dataviews",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database where the dataviews were created",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
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
      name: "list-kx-environments",
      description: "Returns a list of kdb environments created in an account",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
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
      name: "list-kx-scaling-groups",
      description: "Returns a list of scaling groups in a kdb environment",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, for which you want to retrieve a list of scaling groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
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
      name: "list-kx-users",
      description: "Lists all the users in a kdb environment",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
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
      name: "list-kx-volumes",
      description: "Lists all the volumes in a kdb environment",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, whose clusters can attach to the volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-type",
          description:
            "The type of file system volume. Currently, FinSpace only supports NAS_1 volume type",
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
      name: "list-tags-for-resource",
      description: "A list of all tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name of the resource",
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
      description: "Adds metadata tags to a FinSpace resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) for the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "One or more tags to be assigned to the resource",
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
      description: "Removes metadata tags from a FinSpace resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "A FinSpace resource from which you want to remove a tag or tags. The value for this parameter is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys (names) of one or more tags to be removed",
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
      name: "update-environment",
      description: "Update your FinSpace environment",
      options: [
        {
          name: "--environment-id",
          description: "The identifier of the FinSpace environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--federation-mode",
          description:
            "Authentication mode for the environment.    FEDERATED - Users access FinSpace through Single Sign On (SSO) via your Identity provider.    LOCAL - Users access FinSpace via email and password managed within the FinSpace environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--federation-parameters",
          description:
            "Configuration information when authentication mode is FEDERATED",
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
      name: "update-kx-cluster-code-configuration",
      description:
        "Allows you to update code configuration on a running cluster. By using this API you can update the code, the initialization script path, and the command line arguments for a specific cluster. The configuration that you want to update will override any existing configurations on the cluster",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier of the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description: "The name of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "The structure of the customer code available within the running cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--initialization-script",
          description:
            "Specifies a Q program that will be run at launch of a cluster. It is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q. You cannot update this parameter for a NO_RESTART deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--command-line-arguments",
          description:
            "Specifies the key-value pairs to make them available inside the cluster. You cannot update this parameter for a NO_RESTART deployment",
          args: {
            name: "list",
          },
        },
        {
          name: "--deployment-configuration",
          description:
            "The configuration that allows you to choose how you want to update the code on a cluster",
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
      name: "update-kx-cluster-databases",
      description:
        "Updates the databases mounted on a kdb cluster, which includes the changesetId and all the dbPaths to be cached. This API does not allow you to change a database name or add a database if you created a cluster without one.  Using this API you can point a cluster to a different changeset and modify a list of partitions being cached",
      options: [
        {
          name: "--environment-id",
          description: "The unique identifier of a kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-name",
          description: "A unique name for the cluster that you want to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--databases",
          description: "The structure of databases mounted on the cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--deployment-configuration",
          description:
            "The configuration that allows you to choose how you want to update the databases on a cluster",
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
      name: "update-kx-database",
      description: "Updates information for the given kdb database",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The name of the kdb database",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the database",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "update-kx-dataview",
      description:
        "Updates the specified dataview. The dataviews get automatically updated when any new changesets are ingested. Each update of the dataview creates a new version, including changeset details and cache configurations",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment, where you want to update the dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The name of the database",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataview-name",
          description: "The name of the dataview that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for a dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--changeset-id",
          description: "A unique identifier for the changeset",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-configurations",
          description:
            "The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "update-kx-environment",
      description: "Updates information for the given kdb environment",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "update-kx-environment-network",
      description:
        "Updates environment network to connect to your internal network by using a transit gateway. This API supports request to create a transit gateway attachment from FinSpace VPC to your transit gateway ID and create a custom Route-53 outbound resolvers. Once you send a request to update a network, you cannot change it again. Network update might require termination of any clusters that are running in the existing network",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--transit-gateway-configuration",
          description:
            "Specifies the transit gateway and network configuration to connect the kdb environment to an internal network",
          args: {
            name: "structure",
          },
        },
        {
          name: "--custom-dns-configuration",
          description:
            "A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "update-kx-user",
      description:
        "Updates the user details. You can only update the IAM role associated with a user",
      options: [
        {
          name: "--environment-id",
          description: "A unique identifier for the kdb environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description: "A unique identifier for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role",
          description: "The IAM role ARN that is associated with the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "update-kx-volume",
      description:
        "Updates the throughput or capacity of a volume. During the update process, the filesystem might be unavailable for a few minutes. You can retry any operations after the update is complete",
      options: [
        {
          name: "--environment-id",
          description:
            "A unique identifier for the kdb environment where you created the storage volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-name",
          description: "A unique identifier for the volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the volume",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--nas1-configuration",
          description:
            "Specifies the configuration for the Network attached storage (NAS_1) file system volume",
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
