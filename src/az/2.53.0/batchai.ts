const completion: Fig.Spec = {
  name: "batchai",
  description: "Manage Batch AI resources",
  subcommands: [
    {
      name: "cluster",
      description: "Commands to manage clusters",
      subcommands: [
        {
          name: "auto-scale",
          description: "Set auto-scale parameters for a cluster",
          options: [
            {
              name: "--max",
              description: "Maximum number of nodes",
              args: { name: "max" },
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum number of nodes",
              args: { name: "min" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of cluster",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of cluster",
              args: { name: "name" },
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
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
            {
              name: "--afs-mount-path",
              description:
                "Relative mount path for Azure File share. The file share will be available at $AZ_BATCHAI_MOUNT_ROOT/<relative_mount_path> folder",
              args: { name: "afs-mount-path" },
            },
            {
              name: "--afs-name",
              description:
                "Name of Azure File Share to be mounted on each cluster node. Must be used in conjunction with --storage-account-name. Multiple shares can be mounted using configuration file (see --config-file option)",
              args: { name: "afs-name" },
            },
            {
              name: "--bfs-mount-path",
              description:
                "Relative mount path for Azure Storage container. The container will be available at $AZ_BATCHAI_MOUNT_ROOT/<relative_mount_path> folder",
              args: { name: "bfs-mount-path" },
            },
            {
              name: "--bfs-name",
              description:
                "Name of Azure Storage container to be mounted on each cluster node. Must be used in conjunction with --storage-account-name. Multiple containers can be mounted using configuration file (see --config-file option)",
              args: { name: "bfs-name" },
            },
            {
              name: ["--config-file", "-f"],
              description:
                "A path to a json file containing cluster create parameters (json representation of azure.mgmt.batchai.models.ClusterCreateParameters)",
              args: { name: "config-file" },
            },
            {
              name: "--custom-image",
              description:
                "ARM ID of a virtual machine image to be used for nodes creation. Note, you need to provide --image containing information about the base image used for this image creation",
              args: { name: "custom-image" },
            },
            {
              name: "--generate-ssh-keys",
              description:
                "Generate SSH public and private key files in ~/.ssh directory (if missing)",
              args: { name: "generate-ssh-keys" },
            },
            {
              name: ["--image", "-i"],
              description:
                'Operation system image for cluster nodes. The value may contain an alias (UbuntuLTS, UbuntuDSVM) or specify image details in the form "publisher:offer:sku:version". If image configuration is not provided via command line or configuration file, Batch AI will choose default OS image',
              args: { name: "image" },
            },
            {
              name: "--max",
              description: "Max nodes count for the auto-scale cluster",
              args: { name: "max" },
            },
            {
              name: "--min",
              description: "Min nodes count for the auto-scale cluster",
              args: { name: "min" },
            },
            {
              name: "--nfs",
              description:
                "Name or ARM ID of a file server to be mounted on each cluster node. You need to provide full ARM ID if the file server belongs to a different workspace. Multiple NFS can be mounted using configuration file (see --config-file option)",
              args: { name: "nfs" },
            },
            {
              name: "--nfs-mount-path",
              description:
                "Relative mount path for NFS. The NFS will be available at $AZ_BATCHAI_MOUNT_ROOT/<relative_mount_path> folder",
              args: { name: "nfs-mount-path" },
            },
            {
              name: ["--password", "-p"],
              description:
                "Optional password for the admin user account to be created on each compute node",
              args: { name: "password" },
            },
            {
              name: "--setup-task",
              description:
                "A command line which should be executed on each compute node when it's got allocated or rebooted. The task is executed in a bash subshell under root account",
              args: { name: "setup-task" },
            },
            {
              name: "--setup-task-output",
              description:
                "Directory path to store where setup-task's logs. Note, Batch AI will create several helper directories under this path. The created directories are reported as stdOutErrPathSuffix by 'az cluster show' command",
              args: { name: "setup-task-output" },
            },
            {
              name: ["--ssh-key", "-k"],
              description:
                "Optional SSH public key value or path. If ommited and no password specified, default SSH key (~/.ssh/id_rsa.pub) will be used",
              args: { name: "ssh-key" },
            },
            {
              name: "--storage-account-key",
              description:
                "Storage account key. Required if the storage account belongs to a different subscription. Can be specified using AZURE_BATCHAI_STORAGE_KEY environment variable",
              args: { name: "storage-account-key" },
            },
            {
              name: "--storage-account-name",
              description:
                "Storage account name for Azure File Shares and/or Azure Storage Containers to be mounted on each cluster node. Can be specified using AZURE_BATCHAI_STORAGE_ACCOUNT environment variable",
              args: { name: "storage-account-name" },
            },
            {
              name: "--subnet",
              description:
                "ARM ID of a virtual network subnet to put the cluster in",
              args: { name: "subnet" },
            },
            {
              name: ["--target", "-t"],
              description:
                "Number of nodes which should be allocated immediately after cluster creation. If the cluster is in auto-scale mode, BatchAI can change the number of nodes later based on number of running and queued jobs",
              args: { name: "target" },
            },
            {
              name: "--use-auto-storage",
              description:
                'If provided, the command will create a storage account in a new or existing resource group named "batchaiautostorage". It will also create Azure File Share with name "batchaishare", Azure Blob Container with name "batchaicontainer". The File Share and Blob Container will be mounted on each cluster node at $AZ_BATCHAI_MOUNT_ROOT/autoafs and $AZ_BATCHAI_MOUNT_ROOT/autobfs. If the resource group already exists and contains an approapriate storage account belonging to the same region as cluster, this command will reuse existing storage account',
            },
            {
              name: ["--user-name", "-u"],
              description:
                "Name of admin user account to be created on each compute node. If the value is not provided and no user configuration is provided in the config file, current user's name will be used",
              args: { name: "user-name" },
            },
            {
              name: "--vm-priority",
              description: "VM priority",
              args: {
                name: "vm-priority",
                suggestions: ["dedicated", "lowpriority"],
              },
            },
            {
              name: ["--vm-size", "-s"],
              description:
                "VM size for cluster nodes (e.g. Standard_NC6 for 1 GPU node)",
              args: { name: "vm-size" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of cluster",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List clusters",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "resize",
          description: "Resize a cluster",
          options: [
            {
              name: ["--target", "-t"],
              description: "Target number of compute nodes",
              args: { name: "target" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of cluster",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
          ],
        },
        {
          name: "show",
          description: "Show information about a cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of cluster",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
          ],
        },
        {
          name: "file",
          description:
            "Commands to work with files generated by node setup task",
          subcommands: [
            {
              name: "list",
              description:
                "List files generated by the cluster's node setup task",
              options: [
                {
                  name: ["--cluster", "-c"],
                  description: "Name of cluster",
                  args: { name: "cluster" },
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
                  name: ["--workspace", "-w"],
                  description: "Name of workspace",
                  args: { name: "workspace" },
                  isRequired: true,
                },
                {
                  name: "--expiry",
                  description:
                    "Time in minutes for how long generated download URLs should remain valid",
                  args: { name: "expiry" },
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "Relative path of a subfolder inside of the node setup task output directory",
                  args: { name: "path" },
                },
              ],
            },
          ],
        },
        {
          name: "node",
          description: "Commands to work with cluster nodes",
          subcommands: [
            {
              name: "exec",
              description:
                "Executes a command line on a cluster's node with optional ports forwarding",
              options: [
                {
                  name: ["--cluster", "-c"],
                  description: "Name of cluster",
                  args: { name: "cluster" },
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
                  name: ["--workspace", "-w"],
                  description: "Name of workspace",
                  args: { name: "workspace" },
                  isRequired: true,
                },
                {
                  name: ["--address", "-L"],
                  description:
                    "Specifies that connections to the given TCP port or Unix socket on the local (client) host are to be forwarded to the given host and port, or Unix socket, on the remote side. e.g. -L 8080:localhost:8080",
                  args: { name: "address" },
                },
                {
                  name: "--exec",
                  description:
                    "Optional command line to be executed on the node. If not provided, the command will perform ports forwarding only",
                  args: { name: "exec" },
                },
                {
                  name: ["--node-id", "-n"],
                  description:
                    "ID of the node to forward the ports to. If not provided, the command will be executed on the first available node",
                  args: { name: "node-id" },
                },
                {
                  name: ["--password", "-p"],
                  description: "Optional password to establish SSH connection",
                  args: { name: "password" },
                },
                {
                  name: ["--ssh-private-key", "-k"],
                  description:
                    "Optional SSH private key path to establish SSH connection. If omitted, the default SSH private key will be used",
                  args: { name: "ssh-private-key" },
                },
              ],
            },
            {
              name: "list",
              description: "List remote login information for cluster's nodes",
              options: [
                {
                  name: ["--cluster", "-c"],
                  description: "Name of cluster",
                  args: { name: "cluster" },
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
                  name: ["--workspace", "-w"],
                  description: "Name of workspace",
                  args: { name: "workspace" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "experiment",
      description: "Commands to manage experiments",
      subcommands: [
        {
          name: "create",
          description: "Create an experiment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of experiment",
              args: { name: "name" },
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
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an experiment",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of experiment",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List experiments",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show information about an experiment",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of experiment",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
          ],
        },
      ],
    },
    {
      name: "file-server",
      description: "Commands to manage file servers",
      subcommands: [
        {
          name: "create",
          description: "Create a file server",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of file server",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure a default value by setting up default workspace using az batchai workspace set-default",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace", "-w"],
              description:
                "Name or ARM ID of the workspace. You can configure default workspace using az batchai workspace set-default",
              args: { name: "workspace" },
              isRequired: true,
            },
            {
              name: "--caching-type",
              description:
                "Caching type for premium disks. If not provided via command line or in configuration file, no caching will be used",
              args: {
                name: "caching-type",
                suggestions: ["none", "readonly", "readwrite"],
              },
            },
            {
              name: ["--config-file", "-f"],
              description:
                "A path to a json file containing file server create parameters (json representation of azure.mgmt.batchai.models.FileServerCreateParameters). Note, parameters given via command line will overwrite parameters specified in the configuration file",
              args: { name: "config-file" },
            },
            {
              name: "--disk-count",
              description: "Number of disks",
              args: { name: "disk-count" },
            },
            {
              name: "--disk-size",
              description: "Disk size in Gb",
              args: { name: "disk-size" },
            },
            {
              name: "--generate-ssh-keys",
              description:
                "Generate SSH public and private key files in ~/.ssh directory (if missing)",
              args: { name: "generate-ssh-keys" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--password", "-p"],
              description:
                "Optional password for the admin user created on the NFS node",
              args: { name: "password" },
            },
            {
              name: ["--ssh-key", "-k"],
              description:
                "Optional SSH public key value or path. If ommited and no password specified, default SSH key (~/.ssh/id_rsa.pub) will be used",
              args: { name: "ssh-key" },
            },
            {
              name: "--storage-sku",
              description: "The sku of storage account to persist VM",
              args: {
                name: "storage-sku",
                suggestions: ["Premium_LRS", "Standard_LRS"],
              },
            },
            {
              name: "--subnet",
              description:
                "ARM ID of a virtual network subnet to put the file server in. If not provided via command line or in the configuration file, Batch AI will create a new virtual network and subnet under your subscription",
              args: { name: "subnet" },
            },
            {
              name: ["--user-name", "-u"],
              description:
                "Name of admin user account to be created on NFS node. If the value is not provided and no user configuration is provided in the config file, current user's name will be used",
              args: { name: "user-name" },
            },
            {
              name: ["--vm-size", "-s"],
              description: "VM size",
              args: { name: "vm-size" },
            },
          ],
        },
        {
          name: "list",
          description: "List file servers",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Commands to manage jobs",
      subcommands: [
        {
          name: "create",
          description: "Create a job",
          options: [
            {
              name: ["--cluster", "-c"],
              description:
                "Name or ARM ID of the cluster to run the job. You need to provide ARM ID if the cluster belongs to a different workspace",
              args: { name: "cluster" },
              isRequired: true,
            },
            {
              name: ["--config-file", "-f"],
              description:
                "A path to a json file containing job create parameters (json representation of azure.mgmt.batchai.models.JobCreateParameters)",
              args: { name: "config-file" },
              isRequired: true,
            },
            {
              name: ["--experiment", "-e"],
              description: "Name of experiment",
              args: { name: "experiment" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of job",
              args: { name: "name" },
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
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
            {
              name: "--afs-mount-path",
              description:
                "Relative mount path for Azure File Share. The File Share will be available at $AZ_BATCHAI_JOB_MOUNT_ROOT/<relative_mount_path> folder",
              args: { name: "afs-mount-path" },
            },
            {
              name: "--afs-name",
              description:
                "Name of Azure File Share to mount during the job execution. The File Share will be mounted only on the nodes which are executing the job. Must be used in conjunction with --storage-account-name. Multiple shares can be mounted using configuration file (see --config-file option)",
              args: { name: "afs-name" },
            },
            {
              name: "--bfs-mount-path",
              description:
                "Relative mount path for Azure Storage Blob Container. The container will be available at $AZ_BATCHAI_JOB_MOUNT_ROOT/<relative_mount_path> folder",
              args: { name: "bfs-mount-path" },
            },
            {
              name: "--bfs-name",
              description:
                "Name of Azure Storage Blob Container to mount during the job execution. The container will be mounted only on the nodes which are executing the job. Must be used in conjunction with --storage-account-name. Multiple containers can be mounted using configuration file (see --config-file option)",
              args: { name: "bfs-name" },
            },
            {
              name: "--nfs",
              description:
                "Name or ARM ID of the file server to be mounted during the job execution. You need to provide ARM ID if the file server belongs to a different workspace. You can configure multiple file servers using job's configuration file",
              args: { name: "nfs" },
            },
            {
              name: "--nfs-mount-path",
              description:
                "Relative mount path for NFS. The NFS will be available at $AZ_BATCHAI_JOB_MOUNT_ROOT/<relative_mount_path> folder",
              args: { name: "nfs-mount-path" },
            },
            {
              name: "--storage-account-key",
              description:
                "Storage account key. Required if the storage account belongs to a different subscription. Can be specified using AZURE_BATCHAI_STORAGE_KEY environment variable",
              args: { name: "storage-account-key" },
            },
            {
              name: "--storage-account-name",
              description:
                "Storage account name for Azure File Shares and/or Azure Storage Containers to be mounted on each cluster node. Can be specified using AZURE_BATCHAI_STORAGE_ACCOUNT environment variable",
              args: { name: "storage-account-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a job",
          options: [
            {
              name: ["--experiment", "-e"],
              description: "Name of experiment",
              args: { name: "experiment" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of job",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List jobs",
          options: [
            {
              name: ["--experiment", "-e"],
              description: "Name of experiment",
              args: { name: "experiment" },
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
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show information about a job",
          options: [
            {
              name: ["--experiment", "-e"],
              description: "Name of experiment",
              args: { name: "experiment" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of job",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
          ],
        },
        {
          name: "terminate",
          description: "Terminate a job",
          options: [
            {
              name: ["--experiment", "-e"],
              description: "Name of experiment",
              args: { name: "experiment" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of job",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Waits for specified job completion and setups the exit code to the job's exit code",
          options: [
            {
              name: ["--experiment", "-e"],
              description: "Name of experiment",
              args: { name: "experiment" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in sec",
              args: { name: "interval" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of job",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-w"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
          ],
        },
        {
          name: "file",
          description:
            "Commands to list and stream files in job's output directories",
          subcommands: [
            {
              name: "list",
              description:
                "List job's output files in a directory with given id",
              options: [
                {
                  name: ["--experiment", "-e"],
                  description: "Name of experiment",
                  args: { name: "experiment" },
                  isRequired: true,
                },
                {
                  name: ["--job", "-j"],
                  description: "Name of job",
                  args: { name: "job" },
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
                  name: ["--workspace", "-w"],
                  description: "Name of workspace",
                  args: { name: "workspace" },
                  isRequired: true,
                },
                {
                  name: "--expiry",
                  description:
                    "Time in minutes for how long generated download URL should remain valid",
                  args: { name: "expiry" },
                },
                {
                  name: ["--output-directory-id", "-d"],
                  description:
                    'The Id of the job\'s output directory (as specified by "id" element in outputDirectories collection in the job create parameters)',
                  args: { name: "output-directory-id" },
                },
                {
                  name: ["--path", "-p"],
                  description: "Relative path in the given output directory",
                  args: { name: "path" },
                },
              ],
            },
            {
              name: "stream",
              description:
                "Stream the content of a file (similar to 'tail -f')",
              options: [
                {
                  name: ["--experiment", "-e"],
                  description: "Name of experiment",
                  args: { name: "experiment" },
                  isRequired: true,
                },
                {
                  name: ["--file-name", "-f"],
                  description: "The name of the file to stream",
                  args: { name: "file-name" },
                  isRequired: true,
                },
                {
                  name: ["--job", "-j"],
                  description: "Name of job",
                  args: { name: "job" },
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
                  name: ["--workspace", "-w"],
                  description: "Name of workspace",
                  args: { name: "workspace" },
                  isRequired: true,
                },
                {
                  name: ["--output-directory-id", "-d"],
                  description:
                    'The Id of the job\'s output directory (as specified by "id" element in outputDirectories collection in the job create parameters)',
                  args: { name: "output-directory-id" },
                },
                {
                  name: ["--path", "-p"],
                  description: "Relative path in the given output directory",
                  args: { name: "path" },
                },
              ],
            },
          ],
        },
        {
          name: "node",
          description: "Commands to work with nodes which executed a job",
          subcommands: [
            {
              name: "exec",
              description:
                "Executes a command line on a cluster's node used to execute the job with optional ports forwarding",
              options: [
                {
                  name: ["--experiment", "-e"],
                  description: "Name of experiment",
                  args: { name: "experiment" },
                  isRequired: true,
                },
                {
                  name: ["--job", "-j"],
                  description: "Name of job",
                  args: { name: "job" },
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
                  name: ["--workspace", "-w"],
                  description: "Name of workspace",
                  args: { name: "workspace" },
                  isRequired: true,
                },
                {
                  name: ["--address", "-L"],
                  description:
                    "Specifies that connections to the given TCP port or Unix socket on the local (client) host are to be forwarded to the given host and port, or Unix socket, on the remote side. e.g. -L 8080:localhost:8080",
                  args: { name: "address" },
                },
                {
                  name: "--exec",
                  description:
                    "Optional command line to be executed on the node. If not provided, the command will perform ports forwarding only",
                  args: { name: "exec" },
                },
                {
                  name: ["--node-id", "-n"],
                  description:
                    "ID of the node to forward the ports to. If not provided, the command will be executed on the first available node",
                  args: { name: "node-id" },
                },
                {
                  name: ["--password", "-p"],
                  description: "Optional password to establish SSH connection",
                  args: { name: "password" },
                },
                {
                  name: ["--ssh-private-key", "-k"],
                  description:
                    "Optional SSH private key path to establish SSH connection. If omitted, the default SSH private key will be used",
                  args: { name: "ssh-private-key" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List remote login information for nodes which executed the job",
              options: [
                {
                  name: ["--experiment", "-e"],
                  description: "Name of experiment",
                  args: { name: "experiment" },
                  isRequired: true,
                },
                {
                  name: ["--job", "-j"],
                  description: "Name of job",
                  args: { name: "job" },
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
                  name: ["--workspace", "-w"],
                  description: "Name of workspace",
                  args: { name: "workspace" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "list-usages",
      description:
        "Gets the current usage information as well as limits for Batch AI resources for given location",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
      ],
    },
    {
      name: "workspace",
      description: "Commands to manage workspaces",
      subcommands: [
        {
          name: "create",
          description: "Create a workspace",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace", "-n"],
              description: "Name of workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of the workspace. If omitted, the location of the resource group will be used",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-n"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List workspaces",
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
          description: "Show information about a workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--workspace", "-n"],
              description: "Name of workspace",
              args: { name: "workspace" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
