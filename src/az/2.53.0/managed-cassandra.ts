const completion: Fig.Spec = {
  name: "managed-cassandra",
  description: "Azure Managed Cassandra",
  subcommands: [
    {
      name: "cluster",
      description: "Azure Managed Cassandra Cluster",
      subcommands: [
        {
          name: "create",
          description: "Create a Managed Cassandra Cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--delegated-management-subnet-id", "-s"],
              description:
                "The resource id of a subnet where the ip address of the cassandra management server will be allocated. This subnet must have connectivity to the delegated_subnet_id subnet of each data center",
              args: { name: "delegated-management-subnet-id" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "Azure Location of the Cluster",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--authentication-method",
              description:
                "Authentication mode can be None or Cassandra. If None, no authentication will be required to connect to the Cassandra API. If Cassandra, then passwords will be used",
              args: {
                name: "authentication-method",
                suggestions: ["Cassandra", "None"],
              },
            },
            {
              name: "--cassandra-version",
              description: "The version of Cassandra chosen",
              args: { name: "cassandra-version" },
            },
            {
              name: "--client-certificates",
              description:
                "If specified, enables client certificate authentication to the Cassandra API",
              args: { name: "client-certificates" },
            },
            {
              name: "--cluster-name-override",
              description:
                "If a cluster must have a name that is not a valid azure resource name, this field can be specified to choose the Cassandra cluster name. Otherwise, the resource name will be used as the cluster name",
              args: { name: "cluster-name-override" },
            },
            {
              name: ["--external-gossip-certificates", "-e"],
              description:
                "A list of certificates that the managed cassandra data center's should accept",
              args: { name: "external-gossip-certificates" },
            },
            {
              name: "--external-seed-nodes",
              description:
                "A list of ip addresses of the seed nodes of on-premise data centers",
              args: { name: "external-seed-nodes" },
            },
            {
              name: "--hours-between-backups",
              description: "The number of hours between backup attempts",
              args: { name: "hours-between-backups" },
            },
            {
              name: "--identity-type",
              description:
                "Type of identity used for Customer Managed Disk Key",
              args: {
                name: "identity-type",
                suggestions: ["None", "SystemAssigned"],
              },
            },
            {
              name: ["--initial-cassandra-admin-password", "-i"],
              description:
                "The intial password to be configured when a cluster is created for authentication_method Cassandra",
              args: { name: "initial-cassandra-admin-password" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--repair-enabled",
              description: "Enables automatic repair",
              args: { name: "repair-enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--restore-from-backup-id",
              description:
                "The resource id of a backup. If provided on create, the backup will be used to prepopulate the cluster. The cluster data center count and node counts must match the backup",
              args: { name: "restore-from-backup-id" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "deallocate",
          description:
            "Deallocate the Managed Cassandra Cluster and Associated Data Centers. Deallocation will deallocate the host virtual machine of this cluster, and reserved the data disk. This won't do anything on an already deallocated cluster. Use Start to restart the cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a Managed Cassandra Cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "invoke-command",
          description:
            "Invoke a command like nodetool for cassandra maintenance",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--command-name",
              description: "The command which should be run",
              args: { name: "command-name" },
              isRequired: true,
            },
            {
              name: "--host",
              description:
                "IP address of the cassandra host to run the command on",
              args: { name: "host" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--arguments",
              description: 'The key="value" of arguments for the command',
              args: { name: "arguments" },
            },
            {
              name: "--cassandra-stop-start",
              description:
                "If true, stops cassandra before executing the command and then start it again",
              args: {
                name: "cassandra-stop-start",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--readwrite",
              description:
                "If true, allows the command to write to the cassandra directory, otherwise read-only",
              args: { name: "readwrite", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the Managed Cassandra Clusters in a ResourceGroup and Subscription. If the ResourceGroup is not specified all the clusters in this Subscription are returned",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a Managed Cassandra Cluster Resource",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "start",
          description:
            "Start the Managed Cassandra Cluster and Associated Data Centers. Start will start the host virtual machine of this cluster with reserved data disk. This won't do anything on an already running cluster. Use Deallocate to deallocate the cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "status",
          description:
            "Gets the CPU, memory, and disk usage statistics for each Cassandra node in a cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a Managed Cassandra Cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--authentication-method",
              description:
                "Authentication mode can be None or Cassandra. If None, no authentication will be required to connect to the Cassandra API. If Cassandra, then passwords will be used",
              args: {
                name: "authentication-method",
                suggestions: ["Cassandra", "None"],
              },
            },
            {
              name: "--cassandra-version",
              description: "The version of Cassandra chosen",
              args: { name: "cassandra-version" },
            },
            {
              name: "--client-certificates",
              description:
                "If specified, enables client certificate authentication to the Cassandra API",
              args: { name: "client-certificates" },
            },
            {
              name: ["--external-gossip-certificates", "-e"],
              description:
                "A list of certificates that the managed cassandra data center's should accept",
              args: { name: "external-gossip-certificates" },
            },
            {
              name: "--external-seed-nodes",
              description:
                "A list of ip addresses of the seed nodes of on-premise data centers",
              args: { name: "external-seed-nodes" },
            },
            {
              name: "--hours-between-backups",
              description: "The number of hours between backup attempts",
              args: { name: "hours-between-backups" },
            },
            {
              name: "--identity-type",
              description:
                "Type of identity used for Customer Managed Disk Key",
              args: {
                name: "identity-type",
                suggestions: ["None", "SystemAssigned"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--repair-enabled",
              description: "Enables automatic repair",
              args: { name: "repair-enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "backup",
          description: "Azure Managed Cassandra cluster Backup",
          subcommands: [
            {
              name: "list",
              description:
                "List the backups of this cluster that are available to restore",
              options: [
                {
                  name: ["--cluster-name", "-c"],
                  description: "Cluster Name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get a managed cassandra backup resource of this cluster",
              options: [
                {
                  name: "--backup-id",
                  description: "The resource id of the backup",
                  args: { name: "backup-id" },
                  isRequired: true,
                },
                {
                  name: ["--cluster-name", "-c"],
                  description: "Cluster Name",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "datacenter",
      description: "Azure Managed Cassandra DataCenter",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Datacenter in an Azure Managed Cassandra Cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--data-center-location", "-l"],
              description: "Azure Location of the Datacenter",
              args: { name: "data-center-location" },
              isRequired: true,
            },
            {
              name: ["--data-center-name", "-d"],
              description: "Datacenter Name",
              args: { name: "data-center-name" },
              isRequired: true,
            },
            {
              name: ["--delegated-subnet-id", "-s"],
              description:
                "The resource id of a subnet where ip addresses of the Cassandra virtual machines will be allocated. This must be in the same region as data_center_location",
              args: { name: "delegated-subnet-id" },
              isRequired: true,
            },
            {
              name: ["--node-count", "-n"],
              description:
                "The number of Cassandra virtual machines in this data center. The minimum value is 3",
              args: { name: "node-count" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--availability-zone", "-z"],
              description:
                "If the data center haves Availability Zone feature, apply it to the Virtual Machine ScaleSet that host the data center virtual machines",
              args: {
                name: "availability-zone",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--backup-storage-customer-key-uri", "-p"],
              description:
                "Indicates the Key Uri of the customer key to use for encryption of the backup storage account",
              args: { name: "backup-storage-customer-key-uri" },
            },
            {
              name: ["--base64-encoded-cassandra-yaml-fragment", "-b"],
              description:
                "This is a Base64 encoded yaml file that is a subset of cassandra.yaml. Supported fields will be honored and others will be ignored",
              args: { name: "base64-encoded-cassandra-yaml-fragment" },
            },
            {
              name: "--disk-capacity",
              description:
                "Number of disk used for data centers. Default value is 4",
              args: { name: "disk-capacity" },
            },
            {
              name: "--disk-sku",
              description:
                "Disk SKU used for data centers. Default value is P30",
              args: { name: "disk-sku" },
            },
            {
              name: ["--managed-disk-customer-key-uri", "-k"],
              description:
                "Key uri to use for encryption of managed disks. Ensure the system assigned identity of the cluster has been assigned appropriate permissions(key get/wrap/unwrap permissions) on the key",
              args: { name: "managed-disk-customer-key-uri" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--sku",
              description:
                "Virtual Machine SKU used for data centers. Default value is Standard_DS14_v2",
              args: { name: "sku" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a Managed Cassandra Datacenter",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--data-center-name", "-d"],
              description: "Datacenter Name",
              args: { name: "data-center-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List the Managed Cassandra Datacenters in a given Cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a Managed Cassandra DataCenter Resource",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--data-center-name", "-d"],
              description: "Datacenter Name",
              args: { name: "data-center-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a Datacenter in an Azure Managed Cassandra Cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Cluster Name",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--data-center-name", "-d"],
              description: "Datacenter Name",
              args: { name: "data-center-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--backup-storage-customer-key-uri", "-p"],
              description:
                "Indicates the Key Uri of the customer key to use for encryption of the backup storage account",
              args: { name: "backup-storage-customer-key-uri" },
            },
            {
              name: ["--base64-encoded-cassandra-yaml-fragment", "-b"],
              description:
                "This is a Base64 encoded yaml file that is a subset of cassandra.yaml. Supported fields will be honored and others will be ignored",
              args: { name: "base64-encoded-cassandra-yaml-fragment" },
            },
            {
              name: ["--managed-disk-customer-key-uri", "-k"],
              description:
                "Key uri to use for encryption of managed disks. Ensure the system assigned identity of the cluster has been assigned appropriate permissions(key get/wrap/unwrap permissions) on the key",
              args: { name: "managed-disk-customer-key-uri" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--node-count", "-n"],
              description:
                "The number of Cassandra virtual machines in this data center. The minimum value is 3",
              args: { name: "node-count" },
            },
            {
              name: "--sku",
              description:
                "Virtual Machine SKU used for data centers. Default value is Standard_DS14_v2",
              args: { name: "sku" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
