const completion: Fig.Spec = {
  name: "ml",
  description:
    "Manage Azure Machine Learning resources with the Azure CLI ML extension v1",
  subcommands: [
    {
      name: "computetarget",
      description: "Computetarget subgroup commands",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a compute target (aks or amlcompute or computeinstance)",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of compute target to delete",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the environment to delete",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "detach",
          description:
            "Detach a compute target (aks or remote) from a workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of compute target to detach",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the environment to detach",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "get-credentials",
          description: "Get credentials for a compute target (aks or remote)",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of compute target to retrieve keys for",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the compute target to get credentials for",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "list",
          description: "List all the compute targets attached to a workspace",
          options: [
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the compute target to show",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag" },
          ],
        },
        {
          name: "show",
          description: "Show details of a specific compute target",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of compute target to show",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the compute target to show",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag" },
          ],
        },
        {
          name: "amlcompute",
          description: "AzureML compute commands",
          subcommands: [
            {
              name: "identity",
              description: "AzureML compute target identity commands",
              subcommands: [
                {
                  name: "assign",
                  description: "Assign identity to an AzureML compute target",
                  options: [
                    {
                      name: "--identities",
                      description:
                        "Use '[system]' to set a system assigned identity else input resource IDs separated by commas (ie 'ResourceID1,ResourceID2') to set user assigned identities",
                      args: { name: "identities" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of compute target to provision",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--path",
                      description:
                        "Path to a project folder. Default: current directory",
                      args: { name: "path" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Resource group corresponding to the provided workspace",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription-id",
                      description: "Specifies the subscription Id",
                      args: { name: "subscription-id" },
                    },
                    {
                      name: ["--workspace-name", "-w"],
                      description:
                        "Name of the workspace to create this compute target under",
                      args: { name: "workspace-name" },
                    },
                    { name: "-v", description: "Verbosity flag" },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove identity from an AzureML compute target",
                  options: [
                    {
                      name: "--identities",
                      description:
                        "Use '[system]' to remove a system assigned identity else input resource IDs separated by commas (ie 'ResourceID1,ResourceID2') to remove user assigned identities",
                      args: { name: "identities" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of compute target to provision",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--path",
                      description:
                        "Path to a project folder. Default: current directory",
                      args: { name: "path" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Resource group corresponding to the provided workspace",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription-id",
                      description: "Specifies the subscription Id",
                      args: { name: "subscription-id" },
                    },
                    {
                      name: ["--workspace-name", "-w"],
                      description:
                        "Name of the workspace to create this compute target under",
                      args: { name: "workspace-name" },
                    },
                    { name: "-v", description: "Verbosity flag" },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Display identities of an AzureML compute target",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of compute target to provision",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--path",
                      description:
                        "Path to a project folder. Default: current directory",
                      args: { name: "path" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Resource group corresponding to the provided workspace",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription-id",
                      description: "Specifies the subscription Id",
                      args: { name: "subscription-id" },
                    },
                    {
                      name: ["--workspace-name", "-w"],
                      description:
                        "Name of the workspace to create this compute target under",
                      args: { name: "workspace-name" },
                    },
                    { name: "-v", description: "Verbosity flag" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "attach",
          description: "Attach subgroup commands",
          subcommands: [
            {
              name: "aks",
              description: "Attach an AKS cluster to the workspace",
              options: [
                {
                  name: ["--compute-resource-id", "-i"],
                  description:
                    "Resource ID of the compute object to attach to the workspace",
                  args: { name: "compute-resource-id" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Specifies the compute target name. Must be unique to the workspace",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    'Resource group corresponding to the provided workspace. A default value for all commands can be set by running "az configure --defaults group=". This parameter will override any set default',
                  args: { name: "resource-group" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    'Name of the workspace to create this compute target under. A default value for all commands can be set by running "az configure --defaults workspace_name=". This parameter will override any set default',
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "kubernetes",
              description:
                "Attach a KubernetesCompute as a compute target to the workspace",
              options: [
                {
                  name: ["--compute-resource-id", "-i"],
                  description:
                    "Resource ID of the compute object to attach to the workspace",
                  args: { name: "compute-resource-id" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Specifies the compute target name. Must be unique to the workspace",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--namespace",
                  description:
                    "The Kubernetes namespace to which workloads for the compute target are submitted",
                  args: { name: "namespace" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    'Resource group corresponding to the provided workspace. A default value for all commands can be set by running "az configure --defaults group=". This parameter will override any set default',
                  args: { name: "resource-group" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    'Name of the workspace to create this compute target under. A default value for all commands can be set by running "az configure --defaults workspace_name=". This parameter will override any set default',
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "remote",
              description:
                "Attach a remote machine without Docker as a compute target to the workspace",
              options: [
                {
                  name: ["--address", "-a"],
                  description: "DNS name or IP address of the target",
                  args: { name: "address" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Specifies the compute target name. Must be unique to the workspace",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--ssh-port",
                  description:
                    "Ssh port that can be use to connect to the compute",
                  args: { name: "ssh-port" },
                  isRequired: true,
                },
                {
                  name: ["--username", "-u"],
                  description:
                    "The username for the remote machine being attached. Must also provide either a password or public and private key files",
                  args: { name: "username" },
                  isRequired: true,
                },
                {
                  name: ["--password", "-p"],
                  description:
                    "The password for the remote machine being attached. Must either provide a password or public and private key files",
                  args: { name: "password" },
                },
                {
                  name: "--private-key-file",
                  description:
                    "Path to a file containing the private key information for the remote machine being attached",
                  args: { name: "private-key-file" },
                },
                {
                  name: "--private-key-passphrase",
                  description:
                    "Passphrase for private key specified with the --private-key-file option",
                  args: { name: "private-key-passphrase" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    'Resource group corresponding to the provided workspace. A default value for all commands can be set by running "az configure --defaults group=". This parameter will override any set default',
                  args: { name: "resource-group" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    'Name of the workspace to create this compute target under. A default value for all commands can be set by running "az configure --defaults workspace_name=". This parameter will override any set default',
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "computeinstance",
          description: "AzureML compute instance commands",
          subcommands: [
            {
              name: "restart",
              description: "Restart a compute instance",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of compute instance to restart",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the compute target to restart",
                  args: { name: "workspace-name" },
                },
                { name: "-v", description: "Verbosity flag" },
              ],
            },
            {
              name: "start",
              description: "Start a compute instance",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of compute instance to start",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the compute target to start",
                  args: { name: "workspace-name" },
                },
                { name: "-v", description: "Verbosity flag" },
              ],
            },
            {
              name: "stop",
              description: "Stop a compute instance",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of compute instance to stop",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the compute target to stop",
                  args: { name: "workspace-name" },
                },
                { name: "-v", description: "Verbosity flag" },
              ],
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a compute target (aks or amlcompute or computeinstance)",
          subcommands: [
            {
              name: "aks",
              description: "Create an AKS compute target",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of compute target to provision",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--agent-count", "-a"],
                  description:
                    "Number of agents to provision with the AKS cluster. Default: 3",
                  args: { name: "agent-count" },
                },
                {
                  name: "--cluster-purpose",
                  description:
                    'Targeted purpose of the cluster. This is used when provisioning AzureML components to ensure the desired level of fault-tolerance and QoS. Accepted values are "FastProd" and "DevTest". Further detail of the use cases can be found here: https://aka.ms/azureml-create-new-aks-cluster',
                  args: { name: "cluster-purpose" },
                },
                {
                  name: "--dns-service-ip",
                  description: "Containers DNS server IP address",
                  args: { name: "dns-service-ip" },
                },
                {
                  name: "--docker-bridge-cidr",
                  description: "A CIDR notation IP for Docker bridge",
                  args: { name: "docker-bridge-cidr" },
                },
                {
                  name: "--load-balancer-subnet",
                  description:
                    'You can specify subnet for the AKS cluster when Internal Load Balancer is used as load balancer type. Default is "aks-subnet"',
                  args: { name: "load-balancer-subnet" },
                },
                {
                  name: "--load-balancer-type",
                  description:
                    'You can create an AKS cluster with either Public IP or Internal Load Balancer. Accepted values are "PublicIp" and "InternalLoadBalancer". Default is "PublicIp"',
                  args: { name: "load-balancer-type" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location to provision cluster in. If not specified, will default to workspace location",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service-cidr",
                  description:
                    "A CIDR notation IP range from which to assign service cluster IPs",
                  args: { name: "service-cidr" },
                },
                {
                  name: "--ssl-cert-file",
                  description:
                    "Cert pem file to use for SSL validation. If provided, must also provide cname and key pem file",
                  args: { name: "ssl-cert-file" },
                },
                {
                  name: "--ssl-cname",
                  description:
                    "Cname to use for SSL validation. If provided, must also provide cert and key pem files",
                  args: { name: "ssl-cname" },
                },
                {
                  name: "--ssl-key-file",
                  description:
                    "Key pem file to use for SSL validation. If provided, must also provide cname and cert pem file",
                  args: { name: "ssl-key-file" },
                },
                {
                  name: "--ssl-leaf-domain-label",
                  description:
                    "Leaf domain label to use for the auto generated certificate",
                  args: { name: "ssl-leaf-domain-label" },
                },
                {
                  name: "--ssl-overwrite-domain",
                  description:
                    "When set overwrites the existing leaf domain label",
                  args: { name: "ssl-overwrite-domain" },
                },
                {
                  name: "--subnet-name",
                  description: "Name of the subnet inside the vnet",
                  args: { name: "subnet-name" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--vm-size", "-s"],
                  description:
                    "VM size to use for the compute target. A full list of options can be found here: https://aka.ms/azureml-aks-details Default: Standard_D3_v2",
                  args: { name: "vm-size" },
                },
                {
                  name: "--vnet-name",
                  description: "Name of the virtual network",
                  args: { name: "vnet-name" },
                },
                {
                  name: "--vnet-resourcegroup-name",
                  description:
                    "Name of the resource group where the virtual network is located",
                  args: { name: "vnet-resourcegroup-name" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace to create this compute target under",
                  args: { name: "workspace-name" },
                },
                { name: "-v", description: "Verbosity flag" },
              ],
            },
            {
              name: "amlcompute",
              description: "Create an AzureML compute target",
              options: [
                {
                  name: "--max-nodes",
                  description: "Maximum number of nodes to use. Default: 4",
                  args: { name: "max-nodes" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of compute target to provision",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--vm-size", "-s"],
                  description:
                    "VM size to use for the compute target. More details can be found here: https://aka.ms/azureml-vm-details Default: Standard_NC6",
                  args: { name: "vm-size" },
                  isRequired: true,
                },
                {
                  name: "--admin-user-password",
                  description: "Password of the administrator user account",
                  args: { name: "admin-user-password" },
                },
                {
                  name: "--admin-user-ssh-key",
                  description:
                    "SSH public key of the administrator user account",
                  args: { name: "admin-user-ssh-key" },
                },
                {
                  name: "--admin-username",
                  description:
                    "Name of the administrator user account which can be used to SSH into nodes",
                  args: { name: "admin-username" },
                },
                {
                  name: "--assign-identity",
                  description:
                    "Use '[system]' to set a system assigned identity else input resource IDs separated by commas (ie 'ResourceID1,ResourceID2') to set user assigned identities",
                  args: { name: "assign-identity" },
                },
                {
                  name: "--description",
                  description: "Description of the compute target",
                  args: { name: "description" },
                },
                {
                  name: "--enable-node-public-ip",
                  description: "Enable Node Public IP",
                  args: { name: "enable-node-public-ip" },
                },
                {
                  name: "--idle-seconds-before-scaledown",
                  description:
                    "Node idle time in seconds before scaling down the cluster",
                  args: { name: "idle-seconds-before-scaledown" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location to provision cluster in. If not specified, will default to workspace location",
                  args: { name: "location" },
                },
                {
                  name: "--min-nodes",
                  description: "Minimum number of nodes to use. Default: 0",
                  args: { name: "min-nodes" },
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: "--remote-login-port-public-access",
                  description:
                    "State of the public SSH port. Possible values are: Enabled or Disabled",
                  args: { name: "remote-login-port-public-access" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subnet-name",
                  description: "Name of the subnet inside the vnet",
                  args: { name: "subnet-name" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: "--tag",
                  description:
                    "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --tag options",
                  args: { name: "tag" },
                },
                {
                  name: ["--vm-priority", "-p"],
                  description:
                    "VM priority to use for the compute target. (Options are 'dedicated', 'lowpriority') Default: dedicated",
                  args: { name: "vm-priority" },
                },
                {
                  name: "--vnet-name",
                  description: "Name of the virtual network",
                  args: { name: "vnet-name" },
                },
                {
                  name: "--vnet-resourcegroup-name",
                  description:
                    "Name of the resource group where the virtual network is located",
                  args: { name: "vnet-resourcegroup-name" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace to create this compute target under",
                  args: { name: "workspace-name" },
                },
                { name: "-v", description: "Verbosity flag" },
              ],
            },
            {
              name: "computeinstance",
              description: "Create an AzureML compute instance target",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of compute instance to create",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--vm-size", "-s"],
                  description:
                    "VM size to use for the compute target. More details can be found here: https://aka.ms/azureml-vm-details Default: Standard_NC6",
                  args: { name: "vm-size" },
                  isRequired: true,
                },
                {
                  name: "--admin-user-ssh-public-key",
                  description:
                    "SSH public key of the administrator user account",
                  args: { name: "admin-user-ssh-public-key" },
                },
                {
                  name: "--description",
                  description: "Description of the compute target",
                  args: { name: "description" },
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--ssh-public-access",
                  description:
                    "State of the public SSH port. Possible values are: True or False",
                  args: { name: "ssh-public-access" },
                },
                {
                  name: "--subnet-name",
                  description: "Name of the subnet inside the vnet",
                  args: { name: "subnet-name" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: "--tag",
                  description:
                    "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --tag options",
                  args: { name: "tag" },
                },
                {
                  name: "--user-object-id",
                  description:
                    "The AAD Object ID of the assigned user of this compute instance (preview)",
                  args: { name: "user-object-id" },
                },
                {
                  name: "--user-tenant-id",
                  description:
                    "The AAD Tenant ID of the assigned user of this compute instance (preview)",
                  args: { name: "user-tenant-id" },
                },
                {
                  name: "--vnet-name",
                  description: "Name of the virtual network",
                  args: { name: "vnet-name" },
                },
                {
                  name: "--vnet-resourcegroup-name",
                  description:
                    "Name of the resource group where the virtual network is located",
                  args: { name: "vnet-resourcegroup-name" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace to create this compute target under",
                  args: { name: "workspace-name" },
                },
                { name: "-v", description: "Verbosity flag" },
              ],
            },
            {
              name: "datafactory",
              description: "Create a data factory compute target",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of compute target to provision",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location to provision cluster in. If not specified, will default to workspace location",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace to create this compute target under",
                  args: { name: "workspace-name" },
                },
                { name: "-v", description: "Verbosity flag" },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update a compute target (aks or amlcompute)",
          subcommands: [
            {
              name: "aks",
              description: "Update an AKS compute target",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of compute target to update",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--load-balancer-subnet",
                  description:
                    'You can specify subnet for the AKS cluster when Internal Load Balancer is used as load balancer type. Default is "aks-subnet"',
                  args: { name: "load-balancer-subnet" },
                },
                {
                  name: "--load-balancer-type",
                  description:
                    'You can create an AKS cluster with either Public IP or Internal Load Balancer. Accepted values are "PublicIp" and "InternalLoadBalancer". Default is "PublicIp"',
                  args: { name: "load-balancer-type" },
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--ssl-cert-file",
                  description:
                    "Cert pem file to use for SSL validation. If provided, must also provide cname and key pem file",
                  args: { name: "ssl-cert-file" },
                },
                {
                  name: "--ssl-cname",
                  description:
                    "Cname to use for SSL validation. If provided, must also provide cert and key pem files",
                  args: { name: "ssl-cname" },
                },
                {
                  name: "--ssl-disable",
                  description: "Disable SSL validation",
                  args: { name: "ssl-disable" },
                },
                {
                  name: "--ssl-key-file",
                  description:
                    "Key pem file to use for SSL validation. If provided, must also provide cname and cert pem file",
                  args: { name: "ssl-key-file" },
                },
                {
                  name: "--ssl-leaf-domain-label",
                  description:
                    "Leaf domain label to use for the auto generated certificate",
                  args: { name: "ssl-leaf-domain-label" },
                },
                {
                  name: "--ssl-overwrite-domain",
                  description:
                    "When set overwrites the existing leaf domain label",
                  args: { name: "ssl-overwrite-domain" },
                },
                {
                  name: "--ssl-renew",
                  description:
                    "Refreshes the auto generated certificate. If provided, the existing SSL configuration must be auto",
                  args: { name: "ssl-renew" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace to create this compute target under",
                  args: { name: "workspace-name" },
                },
                { name: "-v", description: "Verbosity flag" },
              ],
            },
            {
              name: "amlcompute",
              description: "Update an AzureML compute target",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of compute target to provision",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--idle-seconds-before-scaledown",
                  description:
                    "Node idle time in seconds before scaling down the cluster",
                  args: { name: "idle-seconds-before-scaledown" },
                },
                {
                  name: "--max-nodes",
                  description: "Maximum number of nodes to use",
                  args: { name: "max-nodes" },
                },
                {
                  name: "--min-nodes",
                  description: "Minimum number of nodes to use",
                  args: { name: "min-nodes" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace to create this compute target under",
                  args: { name: "workspace-name" },
                },
                { name: "-v", description: "Verbosity flag" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "dataset",
      description:
        "Commands for managing datasets in Azure Machine Learning Workspace",
      subcommands: [
        {
          name: "archive",
          description: "Archive an active or deprecated dataset",
          options: [
            {
              name: ["--id", "-i"],
              description: "Dataset ID (guid)",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Registration name of the dataset",
              args: { name: "name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "deprecate",
          description:
            "Deprecate an active dataset in a workspace by another dataset",
          options: [
            {
              name: ["--deprecate-by-id", "-d"],
              description:
                "Dataset ID (guid) which is the intended replacement for this Dataset",
              args: { name: "deprecate-by-id" },
              isRequired: true,
            },
            {
              name: ["--id", "-i"],
              description: "Dataset ID (guid)",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Registration name of the dataset",
              args: { name: "name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List all datasets in the workspace",
          options: [
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "reactivate",
          description: "Reactivate an archived or deprecated dataset",
          options: [
            {
              name: ["--id", "-i"],
              description: "Dataset ID (guid)",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Registration name of the dataset",
              args: { name: "name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "register",
          description: "Register a new dataset from the specified file",
          options: [
            {
              name: ["--file", "-f"],
              description: "Specification file for dataset",
              args: { name: "file" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--show-template",
              description: "Show template of dataset specification file",
            },
            {
              name: "--skip-validation",
              description:
                "Skip validation that ensures data can be loaded from the dataset before registration",
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get details of a dataset by its id or registration name",
          options: [
            {
              name: ["--id", "-i"],
              description: "ID of the dataset saved to workspace",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Registration name of the dataset",
              args: { name: "name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--version", "-v"],
              description: "Registration version of the dataset",
              args: { name: "version" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "unregister",
          description:
            "Unregister all versions under the specified registration name",
          options: [
            {
              name: ["--name", "-n"],
              description: "Registration name of the dataset",
              args: { name: "name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "datastore",
      description:
        "Commands for managing and using datastores with the Azure ML Workspace",
      subcommands: [
        {
          name: "attach-adls",
          description: "Attach an ADLS datastore",
          options: [
            {
              name: "--client-id",
              description: "The service principal's client/application ID",
              args: { name: "client-id" },
              isRequired: true,
            },
            {
              name: "--client-secret",
              description: "The service principal's secret",
              args: { name: "client-secret" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--store-name", "-c"],
              description: "The ADLS store name",
              args: { name: "store-name" },
              isRequired: true,
            },
            {
              name: "--tenant-id",
              description: "The service principal Tenant ID",
              args: { name: "tenant-id" },
              isRequired: true,
            },
            {
              name: "--adls-resource-group",
              description: "The resource group the ADLS store belongs to",
              args: { name: "adls-resource-group" },
            },
            {
              name: "--adls-subscription-id",
              description:
                "The ID of the subscription the ADLS store belongs to",
              args: { name: "adls-subscription-id" },
            },
            {
              name: "--authority-url",
              description: "Authority url used to authenticate the user",
              args: { name: "authority-url" },
            },
            {
              name: "--grant-workspace-msi-access",
              description:
                "Defaults to False. Set it to True to access data behind virtual network from Machine Learning Studio. This makes data access from Machine Learning Studio use workspace managed identity for authentication, You have to be Owner or User Access Administrator of the storage to opt-in. Ask your administrator to configure it for you if you do not have the required permission. Learn more 'https://docs.microsoft.com/azure/machine-learning/how-to-enable-studio-virtual-network",
              args: { name: "grant-workspace-msi-access" },
            },
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-url",
              description:
                "Determines what operations will be performed on the data lake store",
              args: { name: "resource-url" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "attach-adls-gen2",
          description: "Attach a ADLS Gen2 datastore",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the storage account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--client-id",
              description: "The service principal's client/application ID",
              args: { name: "client-id" },
              isRequired: true,
            },
            {
              name: "--client-secret",
              description: "The service principal's secret",
              args: { name: "client-secret" },
              isRequired: true,
            },
            {
              name: ["--file-system", "-c"],
              description: "The file system name of the ADLS Gen2",
              args: { name: "file-system" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--tenant-id",
              description: "The service principal Tenant ID",
              args: { name: "tenant-id" },
              isRequired: true,
            },
            {
              name: "--adlsgen2-account-resource-group",
              description:
                "The resource group of the ADLS Gen2 storage account",
              args: { name: "adlsgen2-account-resource-group" },
            },
            {
              name: "--adlsgen2-account-subscription-id",
              description:
                "The subscription ID of the ADLS Gen2 storage account",
              args: { name: "adlsgen2-account-subscription-id" },
            },
            {
              name: "--authority-url",
              description: "Authority url used to authenticate the user",
              args: { name: "authority-url" },
            },
            {
              name: "--endpoint",
              description:
                "The endpoint of the storage account. Defaults to core.windows.net",
              args: { name: "endpoint" },
            },
            {
              name: "--grant-workspace-msi-access",
              description:
                "Defaults to False. Set it to True to access data behind virtual network from Machine Learning Studio. This makes data access from Machine Learning Studio use workspace managed identity for authentication, You have to be Owner or User Access Administrator of the storage to opt-in. Ask your administrator to configure it for you if you do not have the required permission. Learn more 'https://docs.microsoft.com/azure/machine-learning/how-to-enable-studio-virtual-network",
              args: { name: "grant-workspace-msi-access" },
            },
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: "--protocol",
              description:
                "Protocol to use to connect to the blob container. If not specified, defaults to https",
              args: { name: "protocol" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-url",
              description:
                "Determines what operations will be performed on the data lake store",
              args: { name: "resource-url" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "attach-blob",
          description: "Attach a blob storage datastore",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the storage account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--container-name", "-c"],
              description: "The blob container name",
              args: { name: "container-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--account-key", "-k"],
              description: "The storage account key",
              args: { name: "account-key" },
            },
            {
              name: "--endpoint",
              description:
                "The endpoint of the storage account. Defaults to core.windows.net",
              args: { name: "endpoint" },
            },
            {
              name: "--grant-workspace-msi-access",
              description:
                "Defaults to False. Set it to True to access data behind virtual network from Machine Learning Studio. This makes data access from Machine Learning Studio use workspace managed identity for authentication, You have to be Owner or User Access Administrator of the storage to opt-in. Ask your administrator to configure it for you if you do not have the required permission. Learn more 'https://docs.microsoft.com/azure/machine-learning/how-to-enable-studio-virtual-network",
              args: { name: "grant-workspace-msi-access" },
            },
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: "--protocol",
              description:
                "Protocol to use to connect to the blob container. If not specified, defaults to https",
              args: { name: "protocol" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--sas-token",
              description: "A SAS token for the blob container",
              args: { name: "sas-token" },
            },
            {
              name: "--storage-account-resource-group",
              description: "The resource group of the storage account",
              args: { name: "storage-account-resource-group" },
            },
            {
              name: "--storage-account-subscription-id",
              description: "The subscription ID of the storage account",
              args: { name: "storage-account-subscription-id" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "attach-dbfs",
          description: "Attach a Databricks File System datastore",
          options: [
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "attach-file",
          description: "Attach a file share datastore",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the storage account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--share-name", "-c"],
              description: "The file share name",
              args: { name: "share-name" },
              isRequired: true,
            },
            {
              name: ["--account-key", "-k"],
              description: "The storage account key",
              args: { name: "account-key" },
            },
            {
              name: "--endpoint",
              description:
                "The endpoint of the storage account. Defaults to core.windows.net",
              args: { name: "endpoint" },
            },
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: "--protocol",
              description:
                "Protocol to use to connect to the blob container. If not specified, defaults to https",
              args: { name: "protocol" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--sas-token",
              description: "A SAS token for the blob container",
              args: { name: "sas-token" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "attach-mysqldb",
          description: "Attach an Azure MySQL datastore",
          options: [
            {
              name: ["--database-name", "-d"],
              description: "The database name",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--password", "-p"],
              description: "The password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--server-name",
              description: "The SQL/PostgreSQL/MySQL server name",
              args: { name: "server-name" },
              isRequired: true,
            },
            {
              name: ["--user-id", "-u"],
              description: "The user ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--endpoint",
              description:
                "The endpoint of the server. Defaults to mysql.database.azure.com",
              args: { name: "endpoint" },
            },
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: "--port",
              description: "The port number",
              args: { name: "port" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "attach-psqldb",
          description: "Attach an Azure PostgreSQL datastore",
          options: [
            {
              name: ["--database-name", "-d"],
              description: "The database name",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--password", "-p"],
              description: "The password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--server-name",
              description: "The SQL/PostgreSQL/MySQL server name",
              args: { name: "server-name" },
              isRequired: true,
            },
            {
              name: ["--user-id", "-u"],
              description: "The user ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--endpoint",
              description:
                "The endpoint of the server. Defaults to postgres.database.azure.com",
              args: { name: "endpoint" },
            },
            {
              name: "--enforce-ssl",
              description:
                "This sets the ssl value of the server. Defaults to true if not set",
              args: { name: "enforce-ssl" },
            },
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: "--port",
              description: "The port number",
              args: { name: "port" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "attach-sqldb",
          description: "Attach an Azure SQL datastore",
          options: [
            {
              name: ["--database-name", "-d"],
              description: "The database name",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--server-name",
              description: "The SQL/PostgreSQL/MySQL server name",
              args: { name: "server-name" },
              isRequired: true,
            },
            {
              name: "--authority-url",
              description: "Authority url used to authenticate the user",
              args: { name: "authority-url" },
            },
            {
              name: "--client-id",
              description: "The service principal/application ID",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "The service principal's secret",
              args: { name: "client-secret" },
            },
            {
              name: "--endpoint",
              description:
                "The endpoint of the sql server. Defaults to database.windows.net",
              args: { name: "endpoint" },
            },
            {
              name: "--grant-workspace-msi-access",
              description:
                "Defaults to False. Set it to True to access data behind virtual network from Machine Learning Studio. This makes data access from Machine Learning Studio use workspace managed identity for authentication, You have to be Owner or User Access Administrator of the storage to opt-in. Ask your administrator to configure it for you if you do not have the required permission. Learn more 'https://docs.microsoft.com/azure/machine-learning/how-to-enable-studio-virtual-network",
              args: { name: "grant-workspace-msi-access" },
            },
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--password",
              description:
                "The password of the database user to access the database",
              args: { name: "password" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-url",
              description:
                "Determines what operations will be performed on the database",
              args: { name: "resource-url" },
            },
            {
              name: "--sql-resource-group",
              description: "The resource group of the Azure Sql Server",
              args: { name: "sql-resource-group" },
            },
            {
              name: "--sql-subscription-id",
              description: "The subscription ID of the Azure Sql Server",
              args: { name: "sql-subscription-id" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: "--tenant-id",
              description: "The service principal Tenant ID",
              args: { name: "tenant-id" },
            },
            {
              name: "--username",
              description:
                "The username of the database user to access the database",
              args: { name: "username" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "detach",
          description: "Detach a datastore by name",
          options: [
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "download",
          description: "Download files from a Datastore",
          options: [
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--target-path", "-d"],
              description: "Target path for the downloaded files",
              args: { name: "target-path" },
              isRequired: true,
            },
            {
              name: "--hide-progress",
              description: "Whether to hide progress of operation",
              args: { name: "hide-progress" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--overwrite",
              description: "Overwrite target files if they exist",
              args: { name: "overwrite" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--prefix", "-p"],
              description:
                "Path filter for files to download. If none is provided, downloads everything",
              args: { name: "prefix" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List datastores in the workspace",
          options: [
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "set-default",
          description: "Set the workspace default datastore by name",
          options: [
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a single datastore by name",
          options: [
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show-default",
          description: "Show the workspace default datastore",
          options: [
            {
              name: "--include-secret",
              description: "Show the registered secret for the datastores",
              args: { name: "include-secret" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "upload",
          description: "Upload files to a Datastore",
          options: [
            {
              name: ["--name", "-n"],
              description: "The datastore name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--src-path", "-p"],
              description: "Path from which to upload data",
              args: { name: "src-path" },
              isRequired: true,
            },
            {
              name: "--hide-progress",
              description: "Whether to hide progress of operation",
              args: { name: "hide-progress" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--overwrite",
              description: "Overwrite target files if they exist",
              args: { name: "overwrite" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--target-path", "-u"],
              description:
                "Path to upload data in the container. Uploads to the root by default",
              args: { name: "target-path" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "endpoint",
      description: "Manage machine learning endpoints",
      subcommands: [
        {
          name: "realtime",
          description: "Manage operationalized realtime endpoints",
          subcommands: [
            {
              name: "create-version",
              description:
                "Create a version for realtime endpoint in the workspace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The endpoint name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--version-name", "--vn"],
                  description: "The version name to create in an Endpoint",
                  args: { name: "version-name" },
                  isRequired: true,
                },
                {
                  name: "--add-property",
                  description:
                    "Key/value property to add (e.g. key=value ). Multiple properties can be specified with multiple --add-property options",
                  args: { name: "add-property" },
                },
                {
                  name: "--add-tag",
                  description:
                    "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --add-tag options",
                  args: { name: "add-tag" },
                },
                {
                  name: ["--autoscale-refresh-seconds", "--ar"],
                  description:
                    "How often the autoscaler should attempt to scale this Webservice. Defaults to 1",
                  args: { name: "autoscale-refresh-seconds" },
                },
                {
                  name: ["--autoscale-enabled", "--as"],
                  description:
                    "Whether or not to enable autoscaling for this Webservice. Defaults to True if num_replicas is None",
                  args: { name: "autoscale-enabled" },
                },
                {
                  name: ["--autoscale-target-utilization", "--at"],
                  description:
                    "The target utilization (in percent out of 100) the autoscaler should attempt to maintain for this Webservice. Defaults to 70",
                  args: { name: "autoscale-target-utilization" },
                },
                {
                  name: ["--autoscale-max-replicas", "--ma"],
                  description:
                    "The maximum number of containers to use when autoscaling this Webservice. Defaults to 10",
                  args: { name: "autoscale-max-replicas" },
                },
                {
                  name: ["--autoscale-min-replicas", "--mi"],
                  description:
                    "The minimum number of containers to use when autoscaling this Webservice. Defaults to 1",
                  args: { name: "autoscale-min-replicas" },
                },
                {
                  name: ["--cpu-cores", "--cc"],
                  description:
                    "The number of cpu cores to allocate for this Webservice. Can be a decimal. Defaults to 0.1",
                  args: { name: "cpu-cores" },
                },
                {
                  name: ["--cpu-cores-limit", "--ccl"],
                  description:
                    "The max number of CPU cores this Webservice is allowed to use. Can be a decimal",
                  args: { name: "cpu-cores-limit" },
                },
                {
                  name: ["--conda-file", "--cf"],
                  description:
                    "Path to local file containing a conda environment definition to use for the image",
                  args: { name: "conda-file" },
                },
                {
                  name: ["--collect-model-data", "--md"],
                  description:
                    "Whether or not to enable model data collection for this Webservice. Defaults to False",
                  args: { name: "collect-model-data" },
                },
                {
                  name: ["--is-control-version-type", "--cvt"],
                  description:
                    "Whether or not this is the control version in an Endpoint. Defaults to False",
                  args: { name: "is-control-version-type" },
                },
                {
                  name: ["--deploy-config-file", "--dc"],
                  description:
                    "Path to a JSON file containing deployment metadata",
                  args: { name: "deploy-config-file" },
                },
                {
                  name: ["--description", "-d"],
                  description: "Description of the service",
                  args: { name: "description" },
                },
                {
                  name: ["--environment-directory", "--ed"],
                  description:
                    "Directory for Azure Machine Learning Environment for deployment. It is the same directory path as provided in 'az ml environment scaffold' command",
                  args: { name: "environment-directory" },
                },
                {
                  name: ["--entry-script", "--es"],
                  description:
                    "Path to local file that contains the code to run for service (relative path from source_directory if one is provided)",
                  args: { name: "entry-script" },
                },
                {
                  name: ["--environment-name", "-e"],
                  description:
                    "Name of Azure Machine Learning Environment for deployment",
                  args: { name: "environment-name" },
                },
                {
                  name: ["--environment-version", "--ev"],
                  description:
                    "Version of an existing Azure Machine Learning Environment for deployment",
                  args: { name: "environment-version" },
                },
                {
                  name: ["--failure-threshold", "--ft"],
                  description:
                    "When a Pod starts and the liveness probe fails, Kubernetes will try --failure-threshold times before giving up. Defaults to 3. Minimum value is 1",
                  args: { name: "failure-threshold" },
                },
                {
                  name: ["--memory-gb", "--gb"],
                  description:
                    "The amount of memory (in GB) to allocate for this Webservice. Can be a decimal",
                  args: { name: "memory-gb" },
                },
                {
                  name: ["--memory-gb-limit", "--gbl"],
                  description:
                    "The max amount of memory (in GB) this Webservice is allowed to use. Can be a decimal",
                  args: { name: "memory-gb-limit" },
                },
                {
                  name: ["--gpu-cores", "--gc"],
                  description:
                    "The number of gpu cores to allocate for this Webservice. Default is 1",
                  args: { name: "gpu-cores" },
                },
                {
                  name: ["--inference-config-file", "--ic"],
                  description:
                    "Path to a JSON or YAML file containing inference configuration",
                  args: { name: "inference-config-file" },
                },
                {
                  name: ["--initial-delay-seconds", "--id"],
                  description:
                    "Number of seconds after the container has started before liveness probes are initiated. Defaults to 310",
                  args: { name: "initial-delay-seconds" },
                },
                {
                  name: "--is-default",
                  description:
                    "Whether or not this is the default version in an Endpoint. Defaults to False",
                  args: { name: "is-default" },
                },
                {
                  name: ["--max-request-wait-time", "--mr"],
                  description:
                    "The maximum amount of time a request will stay in the queue (in milliseconds) before returning a 503 error. Defaults to 500",
                  args: { name: "max-request-wait-time" },
                },
                {
                  name: ["--model", "-m"],
                  description:
                    "The ID of the model to be deployed. Multiple models can be specified with additional -m arguments. Models need to be registered first",
                  args: { name: "model" },
                },
                {
                  name: ["--model-metadata-file", "-f"],
                  description:
                    "Path to a JSON file containing model registration metadata. Multiple models can be provided using multiple -f parameters",
                  args: { name: "model-metadata-file" },
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: ["--num-replicas", "--nr"],
                  description:
                    "The number of containers to allocate for this Webservice. No default, if this parameter is not set then the autoscaler is enabled by default",
                  args: { name: "num-replicas" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--period-seconds", "--ps"],
                  description:
                    "How often (in seconds) to perform the liveness probe. Default to 10 seconds. Minimum value is 1",
                  args: { name: "period-seconds" },
                },
                {
                  name: ["--replica-max-concurrent-requests", "--rm"],
                  description:
                    "The number of maximum concurrent requests per node to allow for this Webservice. Defaults to 1",
                  args: { name: "replica-max-concurrent-requests" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--scoring-timeout-ms", "--tm"],
                  description:
                    "A timeout to enforce for scoring calls to this Webservice. Defaults to 60000",
                  args: { name: "scoring-timeout-ms" },
                },
                {
                  name: ["--source-directory", "--sd"],
                  description:
                    "Path to folders that contain all files to create the image",
                  args: { name: "source-directory" },
                },
                {
                  name: ["--success-threshold", "--st"],
                  description:
                    "Minimum consecutive successes for the liveness probe to be considered successful after having failed. Defaults to 1. Minimum value is 1",
                  args: { name: "success-threshold" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--timeout-seconds", "--ts"],
                  description:
                    "Number of seconds after which the liveness probe times out. Defaults to 2 second. Minimum value is 1",
                  args: { name: "timeout-seconds" },
                },
                {
                  name: ["--traffic-percentile", "--tp"],
                  description:
                    "The traffic percentile this version takes in Endpoint",
                  args: { name: "traffic-percentile" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the service to update",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a realtime endpoint and its version from the workspace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The endpoint name to delete",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the endpoint to delete",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "delete-version",
              description:
                "Delete a version for realtime endpoint in the workspace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The endpoint name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--version-name", "--vn"],
                  description: "The version name to delete",
                  args: { name: "version-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the endpoint to delete",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "get-access-token",
              description: "Get a token to issue requests a realtime endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Endpoint Name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the endpoint to show",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "get-keys",
              description:
                "Get keys to issue requests against a realtime endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Endpoint Name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the endpoint to show",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "get-logs",
              description: "Get logs for a realtime endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Endpoint Name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--init", "-i"],
                  description:
                    "Get logs of init container instead of the scoring container",
                },
                {
                  name: ["--num_lines", "-l"],
                  description:
                    "Number of log lines to return from tail (default is 5000)",
                  args: { name: "num_lines" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the endpoint to show",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "list",
              description: "List realtime endpoints in the workspace",
              options: [
                {
                  name: ["--compute-type", "-c"],
                  description:
                    "If provided, will only show services that have the specified compute type. (Options are 'ACI', 'AKS', 'AKSENDPOINT')",
                  args: { name: "compute-type" },
                },
                {
                  name: "--model-id",
                  description:
                    "If provided, will only show services that have the specified model id",
                  args: { name: "model-id" },
                },
                {
                  name: "--model-name",
                  description:
                    "If provided, will only show services that have the specified model name",
                  args: { name: "model-name" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: "--property",
                  description:
                    "If provided, will filter based on the provided key/value (e.g. key, or key=value). Multiple properties can be specified with multiple --property options",
                  args: { name: "property" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: "--tag",
                  description:
                    "If provided, will filter based on the provided key/value (e.g. key, or key=value). Multiple tags can be specified with multiple --tag options",
                  args: { name: "tag" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the endpoints to list",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "regen-key",
              description: "Regenerate keys for a realtime endpoint",
              options: [
                {
                  name: ["--key", "-k"],
                  description:
                    "Which key to regenerate, if regen is specified. Options: Primary, Secondary",
                  args: { name: "key" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Endpoint Name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--set-key", "-s"],
                  description: "Provide auth value for the specified key",
                  args: { name: "set-key" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the endpoint to show",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "run",
              description: "Run a realtime endpoint in the workspace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The endpoint name to score against",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--input-data", "-d"],
                  description: "The data to use for calling the endpoint",
                  args: { name: "input-data" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the endpoint to run",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show details for a realtime endpoint in the workspace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the endpoint to show",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the endpoint to show",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a realtime endpoint in the workspace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The endpoint name to update",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--add-property",
                  description:
                    "Key/value property to add (e.g. key=value ). Multiple properties can be specified with multiple --add-property options",
                  args: { name: "add-property" },
                },
                {
                  name: "--add-tag",
                  description:
                    "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --add-tag options",
                  args: { name: "add-tag" },
                },
                {
                  name: ["--auth-enabled", "--ae"],
                  description:
                    "Whether or not to enable key auth for this Endpoint. Defaults to False",
                  args: { name: "auth-enabled" },
                },
                {
                  name: ["--enable-app-insights", "--ai"],
                  description:
                    "Whether or not to enable AppInsights for this Endpoint. Defaults to False",
                  args: { name: "enable-app-insights" },
                },
                {
                  name: ["--description", "-d"],
                  description: "Description of the endpoint",
                  args: { name: "description" },
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: "--remove-tag",
                  description:
                    "Key of tag to remove. Multiple tags can be specified with multiple --remove-tag options",
                  args: { name: "remove-tag" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: "--token-auth-enabled",
                  description:
                    "Whether or not to enable token auth for this Endpoint. Defaults to False",
                  args: { name: "token-auth-enabled" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the Endpoint to update",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
            {
              name: "update-version",
              description:
                "Update a version for realtime endpoint in the workspace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The endpoint name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--version-name", "--vn"],
                  description: "The version name to create in an Endpoint",
                  args: { name: "version-name" },
                  isRequired: true,
                },
                {
                  name: "--add-property",
                  description:
                    "Key/value property to add (e.g. key=value ). Multiple properties can be specified with multiple --add-property options",
                  args: { name: "add-property" },
                },
                {
                  name: "--add-tag",
                  description:
                    "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --add-tag options",
                  args: { name: "add-tag" },
                },
                {
                  name: ["--autoscale-refresh-seconds", "--ar"],
                  description:
                    "How often the autoscaler should attempt to scale this Webservice. Defaults to 1",
                  args: { name: "autoscale-refresh-seconds" },
                },
                {
                  name: ["--autoscale-enabled", "--as"],
                  description:
                    "Whether or not to enable autoscaling for this Webservice. Defaults to True if num_replicas is None",
                  args: { name: "autoscale-enabled" },
                },
                {
                  name: ["--autoscale-target-utilization", "--at"],
                  description:
                    "The target utilization (in percent out of 100) the autoscaler should attempt to maintain for this Webservice. Defaults to 70",
                  args: { name: "autoscale-target-utilization" },
                },
                {
                  name: ["--autoscale-max-replicas", "--ma"],
                  description:
                    "The maximum number of containers to use when autoscaling this Webservice. Defaults to 10",
                  args: { name: "autoscale-max-replicas" },
                },
                {
                  name: ["--autoscale-min-replicas", "--mi"],
                  description:
                    "The minimum number of containers to use when autoscaling this Webservice. Defaults to 1",
                  args: { name: "autoscale-min-replicas" },
                },
                {
                  name: ["--cpu-cores", "--cc"],
                  description:
                    "The number of cpu cores to allocate for this Webservice. Can be a decimal. Defaults to 0.1",
                  args: { name: "cpu-cores" },
                },
                {
                  name: ["--cpu-cores-limit", "--ccl"],
                  description:
                    "The max number of CPU cores this Webservice is allowed to use. Can be a decimal",
                  args: { name: "cpu-cores-limit" },
                },
                {
                  name: ["--conda-file", "--cf"],
                  description:
                    "Path to local file containing a conda environment definition to use for the image",
                  args: { name: "conda-file" },
                },
                {
                  name: ["--collect-model-data", "--md"],
                  description:
                    "Whether or not to enable model data collection for this Webservice. Defaults to False",
                  args: { name: "collect-model-data" },
                },
                {
                  name: ["--is-control-version-type", "--cvt"],
                  description:
                    "Whether or not this is the control version in an Endpoint. Defaults to False",
                  args: { name: "is-control-version-type" },
                },
                {
                  name: ["--deploy-config-file", "--dc"],
                  description:
                    "Path to a JSON file containing deployment metadata",
                  args: { name: "deploy-config-file" },
                },
                {
                  name: ["--description", "-d"],
                  description: "Description of the service",
                  args: { name: "description" },
                },
                {
                  name: ["--environment-directory", "--ed"],
                  description:
                    "Directory for Azure Machine Learning Environment for deployment. It is the same directory path as provided in 'az ml environment scaffold' command",
                  args: { name: "environment-directory" },
                },
                {
                  name: ["--entry-script", "--es"],
                  description:
                    "Path to local file that contains the code to run for service (relative path from source_directory if one is provided)",
                  args: { name: "entry-script" },
                },
                {
                  name: ["--environment-name", "-e"],
                  description:
                    "Name of Azure Machine Learning Environment for deployment",
                  args: { name: "environment-name" },
                },
                {
                  name: ["--environment-version", "--ev"],
                  description:
                    "Version of an existing Azure Machine Learning Environment for deployment",
                  args: { name: "environment-version" },
                },
                {
                  name: ["--failure-threshold", "--ft"],
                  description:
                    "When a Pod starts and the liveness probe fails, Kubernetes will try --failure-threshold times before giving up. Defaults to 3. Minimum value is 1",
                  args: { name: "failure-threshold" },
                },
                {
                  name: ["--memory-gb", "--gb"],
                  description:
                    "The amount of memory (in GB) to allocate for this Webservice. Can be a decimal",
                  args: { name: "memory-gb" },
                },
                {
                  name: ["--memory-gb-limit", "--gbl"],
                  description:
                    "The max amount of memory (in GB) this Webservice is allowed to use. Can be a decimal",
                  args: { name: "memory-gb-limit" },
                },
                {
                  name: ["--gpu-cores", "--gc"],
                  description:
                    "The number of gpu cores to allocate for this Webservice. Default is 1",
                  args: { name: "gpu-cores" },
                },
                {
                  name: ["--inference-config-file", "--ic"],
                  description:
                    "Path to a JSON or YAML file containing inference configuration",
                  args: { name: "inference-config-file" },
                },
                {
                  name: ["--initial-delay-seconds", "--id"],
                  description:
                    "Number of seconds after the container has started before liveness probes are initiated. Defaults to 310",
                  args: { name: "initial-delay-seconds" },
                },
                {
                  name: "--is-default",
                  description:
                    "Whether or not this is the default version in an Endpoint. Defaults to False",
                  args: { name: "is-default" },
                },
                {
                  name: ["--max-request-wait-time", "--mr"],
                  description:
                    "The maximum amount of time a request will stay in the queue (in milliseconds) before returning a 503 error. Defaults to 500",
                  args: { name: "max-request-wait-time" },
                },
                {
                  name: ["--model", "-m"],
                  description:
                    "The ID of the model to be deployed. Multiple models can be specified with additional -m arguments. Models need to be registered first",
                  args: { name: "model" },
                },
                {
                  name: ["--model-metadata-file", "-f"],
                  description:
                    "Path to a JSON file containing model registration metadata. Multiple models can be provided using multiple -f parameters",
                  args: { name: "model-metadata-file" },
                },
                {
                  name: "--no-wait",
                  description: "Flag to not wait for asynchronous calls",
                  args: { name: "no-wait" },
                },
                {
                  name: ["--num-replicas", "--nr"],
                  description:
                    "The number of containers to allocate for this Webservice. No default, if this parameter is not set then the autoscaler is enabled by default",
                  args: { name: "num-replicas" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a project folder. Default: current directory",
                  args: { name: "path" },
                },
                {
                  name: ["--period-seconds", "--ps"],
                  description:
                    "How often (in seconds) to perform the liveness probe. Default to 10 seconds. Minimum value is 1",
                  args: { name: "period-seconds" },
                },
                {
                  name: ["--replica-max-concurrent-requests", "--rm"],
                  description:
                    "The number of maximum concurrent requests per node to allow for this Webservice. Defaults to 1",
                  args: { name: "replica-max-concurrent-requests" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource group corresponding to the provided workspace",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--scoring-timeout-ms", "--tm"],
                  description:
                    "A timeout to enforce for scoring calls to this Webservice. Defaults to 60000",
                  args: { name: "scoring-timeout-ms" },
                },
                {
                  name: ["--source-directory", "--sd"],
                  description:
                    "Path to folders that contain all files to create the image",
                  args: { name: "source-directory" },
                },
                {
                  name: ["--success-threshold", "--st"],
                  description:
                    "Minimum consecutive successes for the liveness probe to be considered successful after having failed. Defaults to 1. Minimum value is 1",
                  args: { name: "success-threshold" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--timeout-seconds", "--ts"],
                  description:
                    "Number of seconds after which the liveness probe times out. Defaults to 2 second. Minimum value is 1",
                  args: { name: "timeout-seconds" },
                },
                {
                  name: ["--traffic-percentile", "--tp"],
                  description:
                    "The traffic percentile this version takes in Endpoint",
                  args: { name: "traffic-percentile" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description:
                    "Name of the workspace containing the service to update",
                  args: { name: "workspace-name" },
                },
                {
                  name: "-v",
                  description: "Verbosity flag",
                  args: { name: "v" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "environment",
      description: "Commands to manage environments",
      subcommands: [
        {
          name: "download",
          description:
            "Download an environment definition to a specified directory",
          options: [
            {
              name: ["--directory", "-d"],
              description: "Directory for the environment",
              args: { name: "directory" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the environment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--overwrite",
              description: "Overwrite any existing destination folder",
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--version", "-v"],
              description: "Version of the environment",
              args: { name: "version" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List environments in a workspace",
          options: [
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "register",
          description:
            "Register an environment definition from a specified directory",
          options: [
            {
              name: ["--directory", "-d"],
              description: "Directory for the environment",
              args: { name: "directory" },
              isRequired: true,
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "scaffold",
          description:
            "Scaffold the files for a default environment definition in the specified directory",
          options: [
            {
              name: ["--directory", "-d"],
              description: "Directory for the environment",
              args: { name: "directory" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the environment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show an environment by name and optionally version",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the environment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--version", "-v"],
              description: "Version of the environment",
              args: { name: "version" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
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
          name: "list",
          description: "List experiments in a workspace",
          options: [
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "folder",
      description: "Folder subgroup commands",
      subcommands: [
        {
          name: "attach",
          description:
            "Attach a folder to an AzureML workspace and optionally a specific experiment to use by default. If experiment name is not specified, it defaults to the folder name",
          options: [
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "model",
      description: "Manage machine learning models",
      subcommands: [
        {
          name: "delete",
          description: "Delete a model from the workspace",
          options: [
            {
              name: ["--model-id", "-i"],
              description: "ID of model to delete",
              args: { name: "model-id" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Name of the workspace",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "deploy",
          description: "Deploy model(s) from the workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the service deployed",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--auth-enabled", "--ae"],
              description:
                "Whether or not to enable key auth for this Webservice. Defaults to False",
              args: { name: "auth-enabled" },
            },
            {
              name: ["--enable-app-insights", "--ai"],
              description:
                "Whether or not to enable AppInsights for this Webservice. Defaults to False",
              args: { name: "enable-app-insights" },
            },
            {
              name: ["--autoscale-refresh-seconds", "--ar"],
              description:
                "How often the autoscaler should attempt to scale this Webservice. Defaults to 1",
              args: { name: "autoscale-refresh-seconds" },
            },
            {
              name: ["--autoscale-enabled", "--as"],
              description:
                "Whether or not to enable autoscaling for this Webservice. Defaults to True if num_replicas is None",
              args: { name: "autoscale-enabled" },
            },
            {
              name: ["--autoscale-target-utilization", "--at"],
              description:
                "The target utilization (in percent out of 100) the autoscaler should attempt to maintain for this Webservice. Defaults to 70",
              args: { name: "autoscale-target-utilization" },
            },
            {
              name: ["--autoscale-max-replicas", "--ma"],
              description:
                "The maximum number of containers to use when autoscaling this Webservice. Defaults to 10",
              args: { name: "autoscale-max-replicas" },
            },
            {
              name: ["--autoscale-min-replicas", "--mi"],
              description:
                "The minimum number of containers to use when autoscaling this Webservice. Defaults to 1",
              args: { name: "autoscale-min-replicas" },
            },
            {
              name: ["--base-image", "--bi"],
              description:
                "A custom image to be used as base image. If no base image is given then the base image will be used based off of given runtime parameter",
              args: { name: "base-image" },
            },
            {
              name: ["--base-image-registry", "--ir"],
              description: "Image registry that contains the base image",
              args: { name: "base-image-registry" },
            },
            {
              name: ["--cpu-cores", "--cc"],
              description:
                "The number of cpu cores to allocate for this Webservice. Can be a decimal. Defaults to 0.1",
              args: { name: "cpu-cores" },
            },
            {
              name: ["--cpu-cores-limit", "--ccl"],
              description:
                "The max number of CPU cores this Webservice is allowed to use. Can be a decimal",
              args: { name: "cpu-cores-limit" },
            },
            {
              name: ["--conda-file", "--cf"],
              description:
                "Path to local file containing a conda environment definition to use for the image",
              args: { name: "conda-file" },
            },
            {
              name: ["--collect-model-data", "--md"],
              description:
                "Whether or not to enable model data collection for this Webservice. Defaults to False",
              args: { name: "collect-model-data" },
            },
            {
              name: ["--compute-target", "--ct"],
              description:
                "Name of compute target. Only applicable when deploying to AKS",
              args: { name: "compute-target" },
            },
            {
              name: ["--compute-type", "--cp"],
              description: "Compute type of service to deploy",
              args: { name: "compute-type" },
            },
            {
              name: ["--cuda-version", "--cv"],
              description:
                "Version of CUDA to install for images that need GPU support. The GPU image must be used on Microsoft Azure Services such as Azure Container Instances, Azure Machine Learning Compute, Azure Virtual Machines, and Azure Kubernetes Service. Supported versions are 9.0, 9.1, and 10.0. If 'enable_gpu' is set, this defaults to '9.1'",
              args: { name: "cuda-version" },
            },
            {
              name: ["--deploy-config-file", "--dc"],
              description:
                "Path to a JSON or YAML file containing deployment metadata",
              args: { name: "deploy-config-file" },
            },
            {
              name: "--description",
              description: "Description of the service deployed",
              args: { name: "description" },
            },
            {
              name: ["--dns-name-label", "--dn"],
              description: "The dns name for this Webservice",
              args: { name: "dns-name-label" },
            },
            {
              name: ["--extra-docker-file-steps", "--ds"],
              description:
                "Path to local file containing additional Docker steps to run when setting up image",
              args: { name: "extra-docker-file-steps" },
            },
            {
              name: ["--environment-directory", "--ed"],
              description:
                "Directory for Azure Machine Learning Environment for deployment. It is the same directory path as provided in 'az ml environment scaffold' command",
              args: { name: "environment-directory" },
            },
            {
              name: ["--enable-gpu", "--eg"],
              description:
                "Whether or not to enable GPU support in the image. The GPU image must be used on Microsoft Azure Services such as Azure Container Instances, Azure Machine Learning Compute, Azure Virtual Machines, and Azure Kubernetes Service. Defaults to False",
              args: { name: "enable-gpu" },
            },
            {
              name: ["--entry-script", "--es"],
              description:
                "Path to local file that contains the code to run for service (relative path from source_directory if one is provided)",
              args: { name: "entry-script" },
            },
            {
              name: ["--environment-name", "-e"],
              description:
                "Name of Azure Machine Learning Environment for deployment",
              args: { name: "environment-name" },
            },
            {
              name: ["--environment-version", "--ev"],
              description:
                "Version of an existing Azure Machine Learning Environment for deployment",
              args: { name: "environment-version" },
            },
            {
              name: ["--failure-threshold", "--ft"],
              description:
                "When a Pod starts and the liveness probe fails, Kubernetes will try --failure-threshold times before giving up. Defaults to 3. Minimum value is 1",
              args: { name: "failure-threshold" },
            },
            {
              name: ["--memory-gb", "--gb"],
              description:
                "The amount of memory (in GB) to allocate for this Webservice. Can be a decimal",
              args: { name: "memory-gb" },
            },
            {
              name: ["--memory-gb-limit", "--gbl"],
              description:
                "The max amount of memory (in GB) this Webservice is allowed to use. Can be a decimal",
              args: { name: "memory-gb-limit" },
            },
            {
              name: ["--gpu-cores", "--gc"],
              description:
                "The number of gpu cores to allocate for this Webservice. Default is 1",
              args: { name: "gpu-cores" },
            },
            {
              name: ["--inference-config-file", "--ic"],
              description:
                "Path to a JSON or YAML file containing inference configuration",
              args: { name: "inference-config-file" },
            },
            {
              name: ["--initial-delay-seconds", "--id"],
              description:
                "Number of seconds after the container has started before liveness probes are initiated. Defaults to 310",
              args: { name: "initial-delay-seconds" },
            },
            {
              name: "--key-name",
              description:
                "Key name for for encryption properties in customer-managed keys (CMK) for ACI",
              args: { name: "key-name" },
            },
            {
              name: "--key-version",
              description:
                "Key version for for encryption properties in customer-managed keys (CMK) for ACI",
              args: { name: "key-version" },
            },
            {
              name: ["--primary-key", "--kp"],
              description: "A primary auth key to use for this Webservice",
              args: { name: "primary-key" },
            },
            {
              name: ["--secondary-key", "--ks"],
              description: "A secondary auth key to use for this Webservice",
              args: { name: "secondary-key" },
            },
            {
              name: ["--location", "--lo"],
              description:
                "The Azure region to deploy this Webservice to. If not specified the Workspace location will be used. More details on available regions can be found here: https://azure.microsoft.com/en-us/global-infrastructure/services/?regions=all&products=container-instances",
              args: { name: "location" },
            },
            {
              name: ["--max-request-wait-time", "--mr"],
              description:
                "The maximum amount of time a request will stay in the queue (in milliseconds) before returning a 503 error. Defaults to 500",
              args: { name: "max-request-wait-time" },
            },
            {
              name: ["--model", "-m"],
              description:
                "The ID of the model to be deployed. Multiple models can be specified with additional -m arguments. Models need to be registered first",
              args: { name: "model" },
            },
            {
              name: ["--model-metadata-file", "-f"],
              description:
                "Path to a JSON file containing model registration metadata. Multiple models can be provided using multiple -f parameters",
              args: { name: "model-metadata-file" },
            },
            {
              name: "--namespace",
              description:
                "Kubernetes namespace in which to deploy the service: up to 63 lowercase alphanumeric ('a'-'z', '0'-'9') and hyphen ('-') characters. The first and last characters cannot be hyphens. Only applicable when deploying to AKS",
              args: { name: "namespace" },
            },
            {
              name: "--no-wait",
              description: "Flag to not wait for asynchronous calls",
              args: { name: "no-wait" },
            },
            {
              name: ["--num-replicas", "--nr"],
              description:
                "The number of containers to allocate for this Webservice. No default, if this parameter is not set then the autoscaler is enabled by default",
              args: { name: "num-replicas" },
            },
            {
              name: "--overwrite",
              description: "Overwrite the existing service if name conflicts",
              args: { name: "overwrite" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--period-seconds", "--ps"],
              description:
                "How often (in seconds) to perform the liveness probe. Default to 10 seconds. Minimum value is 1",
              args: { name: "period-seconds" },
            },
            {
              name: ["--profile-input", "--pi"],
              description: "Path to a JSON file containing profiling results",
              args: { name: "profile-input" },
            },
            {
              name: ["--port", "--po"],
              description:
                "The local port on which to expose the service's HTTP endpoint",
              args: { name: "port" },
            },
            {
              name: "--property",
              description:
                "Key/value property to add (e.g. key=value ). Multiple properties can be specified with multiple --property options",
              args: { name: "property" },
            },
            {
              name: ["--replica-max-concurrent-requests", "--rm"],
              description:
                "The number of maximum concurrent requests per node to allow for this Webservice. Defaults to 1",
              args: { name: "replica-max-concurrent-requests" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: ["--runtime", "--rt"],
              description:
                "Which runtime to use for image. Current supported runtimes are 'spark-py' and 'python'spark-py|python|python-slim",
              args: { name: "runtime" },
            },
            {
              name: ["--ssl-cname", "--sc"],
              description: "The cname for if SSL is enabled",
              args: { name: "ssl-cname" },
            },
            {
              name: ["--scoring-timeout-ms", "--tm"],
              description:
                "A timeout to enforce for scoring calls to this Webservice. Defaults to 60000",
              args: { name: "scoring-timeout-ms" },
            },
            {
              name: ["--source-directory", "--sd"],
              description:
                "Path to folders that contain all files to create the image",
              args: { name: "source-directory" },
            },
            {
              name: ["--ssl-enabled", "--se"],
              description:
                "Whether or not to enable SSL for this Webservice. Defaults to False",
              args: { name: "ssl-enabled" },
            },
            {
              name: ["--ssl-key-pem-file", "--sk"],
              description: "The key file needed if SSL is enabled",
              args: { name: "ssl-key-pem-file" },
            },
            {
              name: ["--ssl-cert-pem-file", "--sp"],
              description: "The cert file needed if SSL is enabled",
              args: { name: "ssl-cert-pem-file" },
            },
            {
              name: ["--success-threshold", "--st"],
              description:
                "Minimum consecutive successes for the liveness probe to be considered successful after having failed. Defaults to 1. Minimum value is 1",
              args: { name: "success-threshold" },
            },
            {
              name: "--subnet-name",
              description: "Name of the subnet inside the vnet",
              args: { name: "subnet-name" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: "--tag",
              description:
                "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --tag options",
              args: { name: "tag" },
            },
            {
              name: ["--timeout-seconds", "--ts"],
              description:
                "Number of seconds after which the liveness probe times out. Defaults to 2 second. Minimum value is 1",
              args: { name: "timeout-seconds" },
            },
            {
              name: "--token-auth-enabled",
              description:
                "Whether or not to enable token auth for this Webservice. Ignored if not deploying to AKS. Defaults to False",
              args: { name: "token-auth-enabled" },
            },
            {
              name: ["--traffic-percentile", "--tp"],
              description:
                "The amount of traffic the version takes in an endpoint. Can be a decimal. Defaults to 0",
              args: { name: "traffic-percentile" },
            },
            {
              name: "--vault-base-url",
              description:
                "Vault base url for encryption properties in customer-managed keys (CMK) for ACI",
              args: { name: "vault-base-url" },
            },
            {
              name: ["--version-name", "--vn"],
              description:
                "The version name in an endpoint. Defaults to endpoint name for the first version",
              args: { name: "version-name" },
            },
            {
              name: "--vnet-name",
              description: "Name of the virtual network",
              args: { name: "vnet-name" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Name of the workspace",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "download",
          description: "Download a model from the workspace",
          options: [
            {
              name: ["--model-id", "-i"],
              description: "ID of model",
              args: { name: "model-id" },
              isRequired: true,
            },
            {
              name: ["--target-dir", "-t"],
              description: "Target directory to download the model file to",
              args: { name: "target-dir" },
              isRequired: true,
            },
            {
              name: "--overwrite",
              description:
                "Overwrite if the same name file exists in target directory",
              args: { name: "overwrite" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Name of the workspace containing model to show",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "list",
          description: "List models in the workspace",
          options: [
            {
              name: "--dataset-id",
              description:
                "If provided, will only show models with the specified dataset ID",
              args: { name: "dataset-id" },
            },
            {
              name: ["--latest", "-l"],
              description:
                "If provided, will only return models with the latest version",
              args: { name: "latest" },
            },
            {
              name: ["--model-name", "-n"],
              description: "An optional model name to filter the list by",
              args: { name: "model-name" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: "--property",
              description:
                "Key/value property to add (e.g. key=value ). Multiple properties can be specified with multiple --property options",
              args: { name: "property" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--run-id",
              description:
                "If provided, will only show models with the specified Run ID",
              args: { name: "run-id" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: "--tag",
              description:
                "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --tag options",
              args: { name: "tag" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Name of the workspace containing models to list",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "package",
          description: "Package a model in the workspace",
          options: [
            {
              name: ["--conda-file", "--cf"],
              description:
                "Path to local file containing a conda environment definition to use for the package",
              args: { name: "conda-file" },
            },
            {
              name: ["--environment-directory", "--ed"],
              description:
                "Directory for Azure Machine Learning Environment for packaging. It is the same directory path as provided in 'az ml environment scaffold' command",
              args: { name: "environment-directory" },
            },
            {
              name: ["--entry-script", "--es"],
              description:
                "Path to local file that contains the code to run for service (relative path from source_directory if one is provided)",
              args: { name: "entry-script" },
            },
            {
              name: ["--environment-name", "-e"],
              description:
                "Name of Azure Machine Learning Environment for packaging",
              args: { name: "environment-name" },
            },
            {
              name: ["--environment-version", "--ev"],
              description:
                "Version of an existing Azure Machine Learning Environment for packaging",
              args: { name: "environment-version" },
            },
            {
              name: ["--inference-config-file", "--ic"],
              description:
                "Path to a JSON or YAML file containing inference configuration",
              args: { name: "inference-config-file" },
            },
            {
              name: ["--image-label", "--il"],
              description: "Label to give the built package image",
              args: { name: "image-label" },
            },
            {
              name: ["--image-name", "--in"],
              description: "Name to give the built package image",
              args: { name: "image-name" },
            },
            {
              name: ["--model", "-m"],
              description:
                "The ID of the model to be packaged. Multiple models can be specified with additional -m arguments. Models need to be registered first",
              args: { name: "model" },
            },
            {
              name: ["--model-metadata-file", "-f"],
              description:
                "Path to a JSON file containing model registration metadata. Multiple models can be provided using multiple -f parameters",
              args: { name: "model-metadata-file" },
            },
            {
              name: "--no-wait",
              description: "Flag to not wait for asynchronous calls",
              args: { name: "no-wait" },
            },
            {
              name: "--output-path",
              description:
                "Output path for docker context. If an output path is passed, instead of building an image in the workspace ACR, a dockerfile and the necessary build context will be writen to that path",
              args: { name: "output-path" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: ["--runtime", "--rt"],
              description:
                "Which runtime to use for package. Current supported runtimes are 'spark-py' and 'python'spark-py|python|python-slim",
              args: { name: "runtime" },
            },
            {
              name: ["--source-directory", "--sd"],
              description:
                "Path to folders that contain all files to create the image",
              args: { name: "source-directory" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Name of the workspace",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "profile",
          description: "Profile model(s) in the workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the model profile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--base-image", "--bi"],
              description:
                "A custom image to be used as base image. If no base image is given then the base image will be used based off of given runtime parameter",
              args: { name: "base-image" },
            },
            {
              name: ["--base-image-registry", "--ir"],
              description: "Image registry that contains the base image",
              args: { name: "base-image-registry" },
            },
            {
              name: ["--cpu-cores", "--cc"],
              description: "Double value for maximum CPU to use when profiling",
              args: { name: "cpu-cores" },
            },
            {
              name: ["--conda-file", "--cf"],
              description:
                "Path to local file containing a conda environment definition to use for the image",
              args: { name: "conda-file" },
            },
            {
              name: "--description",
              description: "Description of the model profile",
              args: { name: "description" },
            },
            {
              name: ["--environment-directory", "--ed"],
              description:
                "Directory for Azure Machine Learning Environment for deployment. It is the same directory path as provided in 'az ml environment scaffold' command",
              args: { name: "environment-directory" },
            },
            {
              name: ["--entry-script", "--es"],
              description:
                "Path to local file that contains the code to run for service (relative path from source_directory if one is provided)",
              args: { name: "entry-script" },
            },
            {
              name: ["--environment-name", "-e"],
              description:
                "Name of Azure Machine Learning Environment for deployment",
              args: { name: "environment-name" },
            },
            {
              name: ["--environment-version", "--ev"],
              description:
                "Version of an existing Azure Machine Learning Environment for deployment",
              args: { name: "environment-version" },
            },
            {
              name: ["--memory-in-gb", "--gb"],
              description:
                "Double value for maximum Memory to use when profiling",
              args: { name: "memory-in-gb" },
            },
            {
              name: ["--inference-config-file", "--ic"],
              description:
                "Path to a JSON or YAML file containing inference configuration",
              args: { name: "inference-config-file" },
            },
            {
              name: ["--input-dataset-id", "--idi"],
              description:
                "ID of the Tabular Dataset to be used as input for the profile",
              args: { name: "input-dataset-id" },
            },
            {
              name: ["--model", "-m"],
              description:
                "The ID of the model to be deployed. Multiple models can be specified with additional -m arguments. Models need to be registered first",
              args: { name: "model" },
            },
            {
              name: ["--model-metadata-file", "-f"],
              description:
                "Path to a JSON file containing model registration metadata. Multiple models can be provided using multiple -f parameters",
              args: { name: "model-metadata-file" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Path to a JSON file where profile results metadata will be written. Used as input for model deployment",
              args: { name: "output-metadata-file" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: ["--source-directory", "--sd"],
              description:
                "Path to folders that contain all files to create the image",
              args: { name: "source-directory" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Name of the workspace",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "register",
          description: "Register a model to the workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of model to register",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--asset-path",
              description:
                "The cloud path where the experiement run stores the model file",
              args: { name: "asset-path" },
            },
            {
              name: ["--cpu-cores", "--cc"],
              description:
                "The default number of CPU cores to allocate for this model. Can be a decimal",
              args: { name: "cpu-cores" },
            },
            {
              name: ["--description", "-d"],
              description: "Description of the model",
              args: { name: "description" },
            },
            {
              name: "--experiment-name",
              description: "The name of the experiment",
              args: { name: "experiment-name" },
            },
            {
              name: ["--memory-gb", "--gb"],
              description:
                "The default amount of memory (in GB) to allocate for this model. Can be a decimal",
              args: { name: "memory-gb" },
            },
            {
              name: ["--gpu-cores", "--gc"],
              description:
                "The default number of GPUs to allocate for this model",
              args: { name: "gpu-cores" },
            },
            {
              name: "--model-framework",
              description:
                "Framework of the model to register. Currently supported frameworks: TensorFlow, ScikitLearn, Onnx, Custom, Multi",
              args: { name: "model-framework" },
            },
            {
              name: "--model-framework-version",
              description:
                "Framework version of the model to register (e.g. 1.0.0, 2.4.1)",
              args: { name: "model-framework-version" },
            },
            {
              name: ["--model-path", "-p"],
              description: "Full path of the model file to register",
              args: { name: "model-path" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Path to a JSON file where model registration metadata will be written. Used as input for model deployment",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: "--property",
              description:
                "Key/value property to add (e.g. key=value ). Multiple properties can be specified with multiple --property options",
              args: { name: "property" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: ["--run-id", "-r"],
              description:
                "The ID for the experiment run where model is registered from",
              args: { name: "run-id" },
            },
            {
              name: ["--run-metadata-file", "-f"],
              description:
                "Path to a JSON file containing experiement run metadata",
              args: { name: "run-metadata-file" },
            },
            {
              name: "--sample-input-dataset-id",
              description: "The ID for the sample input dataset",
              args: { name: "sample-input-dataset-id" },
            },
            {
              name: "--sample-output-dataset-id",
              description: "The ID for the sample output dataset",
              args: { name: "sample-output-dataset-id" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: "--tag",
              description:
                "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --tag options",
              args: { name: "tag" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Name of the workspace to register this model with",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "show",
          description: "Show a model in the workspace",
          options: [
            {
              name: ["--model-id", "-i"],
              description: "ID of model to show",
              args: { name: "model-id" },
            },
            {
              name: ["--model-name", "-n"],
              description: "Name of model to show",
              args: { name: "model-name" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--run-id",
              description:
                "If provided, will only show models with the specified Run ID",
              args: { name: "run-id" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: "--version",
              description:
                "If provided, will only show models with the specified name and version",
              args: { name: "version" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Name of the workspace containing model to show",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "update",
          description: "Update a model in the workspace",
          options: [
            {
              name: ["--model-id", "-i"],
              description: "ID of model",
              args: { name: "model-id" },
              isRequired: true,
            },
            {
              name: "--add-property",
              description:
                "Key/value property to add (e.g. key=value ). Multiple properties can be specified with multiple --add-property options",
              args: { name: "add-property" },
            },
            {
              name: "--add-tag",
              description:
                "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --add-tag options",
              args: { name: "add-tag" },
            },
            {
              name: ["--cpu-cores", "--cc"],
              description:
                "The default number of CPU cores to allocate for this model. Can be a decimal",
              args: { name: "cpu-cores" },
            },
            {
              name: "--description",
              description:
                "Description to update the model with. Will replace the current description",
              args: { name: "description" },
            },
            {
              name: ["--memory-gb", "--gb"],
              description:
                "The default amount of memory (in GB) to allocate for this model. Can be a decimal",
              args: { name: "memory-gb" },
            },
            {
              name: ["--gpu-cores", "--gc"],
              description:
                "The default number of GPUs to allocate for this model",
              args: { name: "gpu-cores" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: "--remove-tag",
              description:
                "Key of tag to remove. Multiple tags can be specified with multiple --remove-tag options",
              args: { name: "remove-tag" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--sample-input-dataset-id",
              description: "The ID for the sample input dataset",
              args: { name: "sample-input-dataset-id" },
            },
            {
              name: "--sample-output-dataset-id",
              description: "The ID for the sample output dataset",
              args: { name: "sample-output-dataset-id" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Name of the workspace",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
      ],
    },
    {
      name: "pipeline",
      description: "Pipeline subgroup commands",
      subcommands: [
        {
          name: "clone",
          description:
            "Generate yml definition describing the pipeline run, supported only for ModuleStep for now",
          options: [
            {
              name: ["--path", "-p"],
              description: "File path to save pipeline yaml to",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--pipeline-run-id", "-i"],
              description: "ID of the PipelineRun to clone (guid)",
              args: { name: "pipeline-run-id" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-f"],
              description: "File to write output in JSON format",
              args: { name: "output-file" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "clone-draft",
          description: "Create a pipeline draft from an existing pipeline",
          options: [
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name of the specified PipelineRun",
              args: { name: "experiment-name" },
            },
            {
              name: ["--pipeline-draft-id", "-i"],
              description:
                "ID of the PipelineDraft to create PipelineDraft from",
              args: { name: "pipeline-draft-id" },
            },
            {
              name: ["--pipeline-id", "-p"],
              description:
                "ID of the PublishedPipeline to create PipelineDraft from",
              args: { name: "pipeline-id" },
            },
            {
              name: ["--pipeline-run-id", "-r"],
              description: "ID of the PipelineRun to create PipelineDraft from",
              args: { name: "pipeline-run-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a pipeline from a yaml definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name to assign to the pipeline",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--pipeline-yaml", "-y"],
              description: "YAML file which defines a pipeline",
              args: { name: "pipeline-yaml" },
              isRequired: true,
            },
            {
              name: ["--continue", "-c"],
              description:
                "Boolean flag to allow a pipeline to continue executing after a step fails",
              args: { name: "continue" },
            },
            {
              name: ["--description", "-d"],
              description: "Description text of the pipeline",
              args: { name: "description" },
            },
            {
              name: ["--output-file", "-f"],
              description: "File to write output in JSON format",
              args: { name: "output-file" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--version", "-v"],
              description: "Version string of the pipeline",
              args: { name: "version" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "create-draft",
          description: "Create a pipeline draft from a yml definition",
          options: [
            {
              name: ["--experiment_name", "-e"],
              description: "Experiment name for the pipeline draft",
              args: { name: "experiment_name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name to assign to the pipeline draft",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--pipeline-yaml", "-y"],
              description: "YAML file which defines the pipeline draft",
              args: { name: "pipeline-yaml" },
              isRequired: true,
            },
            {
              name: ["--continue", "-c"],
              description:
                "Boolean flag to allow a pipeline to continue executing after a step fails",
              args: { name: "continue" },
            },
            {
              name: ["--description", "-d"],
              description: "Description text of the pipeline draft",
              args: { name: "description" },
            },
            {
              name: "--parameters",
              description:
                "PipelineParameters for the draft with 'key=value' syntax",
              args: { name: "parameters" },
            },
            {
              name: ["--properties", "-p"],
              description: "Properties for the draft with 'key=value' syntax",
              args: { name: "properties" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--tags", "-t"],
              description: "Tags for the draft with 'key=value' syntax",
              args: { name: "tags" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "create-schedule",
          description: "Create a schedule",
          options: [
            {
              name: ["--experiment-name", "-e"],
              description: "Name of experiment",
              args: { name: "experiment-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of schedule",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--pipeline-id", "-i"],
              description: "ID of the pipeline to create schedule (guid)",
              args: { name: "pipeline-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--schedule-yaml", "-y"],
              description: "Schedule YAML input",
              args: { name: "schedule-yaml" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "delete-draft",
          description: "Delete a pipeline draft",
          options: [
            {
              name: ["--pipeline-draft-id", "-i"],
              description: "ID of the PipelineDraft to delete (guid)",
              args: { name: "pipeline-draft-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "disable",
          description: "Disable a pipeline from running",
          options: [
            {
              name: ["--pipeline-id", "-i"],
              description: "ID of the pipeline to disable (guid)",
              args: { name: "pipeline-id" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-f"],
              description: "File to write output in JSON format",
              args: { name: "output-file" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "disable-schedule",
          description: "Disable a schedule from running",
          options: [
            {
              name: ["--schedule-id", "-s"],
              description: "ID of the schedule to show (guid)",
              args: { name: "schedule-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a pipeline and allow it to run",
          options: [
            {
              name: ["--pipeline-id", "-i"],
              description: "ID of the pipeline to enable (guid)",
              args: { name: "pipeline-id" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-f"],
              description: "File to write output in JSON format",
              args: { name: "output-file" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "enable-schedule",
          description: "Enable a schedule and allow it to run",
          options: [
            {
              name: ["--schedule-id", "-s"],
              description: "ID of the schedule to show (guid)",
              args: { name: "schedule-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "get",
          description: "Generate yml definition describing the pipeline",
          options: [
            {
              name: ["--path", "-p"],
              description: "File path to save Pipeline yaml to",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--pipeline-draft-id", "-d"],
              description: "ID of the PipelineDraft to get (guid)",
              args: { name: "pipeline-draft-id" },
            },
            {
              name: ["--pipeline-id", "-i"],
              description: "ID of the Pipeline to get (guid)",
              args: { name: "pipeline-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "last-pipeline-run",
          description: "Show last pipeline run for a schedule",
          options: [
            {
              name: ["--schedule-id", "-s"],
              description: "ID of the schedule to show (guid)",
              args: { name: "schedule-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all pipelines and respective schedules in the workspace",
          options: [
            {
              name: ["--output-file", "-f"],
              description: "File to write output in JSON format",
              args: { name: "output-file" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "list-drafts",
          description: "List pipeline drafts in the workspace",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--tags", "-t"],
              description: "Tags for a draft with 'key=value' syntax",
              args: { name: "tags" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "list-steps",
          description: "List the step runs generated from a pipeline run",
          options: [
            {
              name: ["--run", "-r"],
              description: "The runId of an experiment run",
              args: { name: "run" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-f"],
              description: "File to write output in JSON format",
              args: { name: "output-file" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "pipeline-runs-list",
          description: "List pipeline runs generated from a schedule",
          options: [
            {
              name: ["--schedule-id", "-s"],
              description: "ID of the schedule to show (guid)",
              args: { name: "schedule-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "publish-draft",
          description: "Publish a pipeline draft as a published pipeline",
          options: [
            {
              name: ["--pipeline-draft-id", "-i"],
              description: "ID of the PipelineDraft to publish",
              args: { name: "pipeline-draft-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a pipeline and respective schedules",
          options: [
            {
              name: ["--pipeline-id", "-i"],
              description: "ID of the pipeline to show (guid)",
              args: { name: "pipeline-id" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-f"],
              description: "File to write output in JSON format",
              args: { name: "output-file" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show-draft",
          description: "Show details of a pipeline draft",
          options: [
            {
              name: ["--pipeline-draft-id", "-i"],
              description: "ID of the PipelineDraft to show (guid)",
              args: { name: "pipeline-draft-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show-schedule",
          description: "Show details of a schedule",
          options: [
            {
              name: ["--schedule-id", "-s"],
              description: "ID of the schedule to show (guid)",
              args: { name: "schedule-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "submit-draft",
          description: "Submit a run from the pipeline draft",
          options: [
            {
              name: ["--pipeline-draft-id", "-i"],
              description: "ID of the PipelineDraft to use to submit run",
              args: { name: "pipeline-draft-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update-draft",
          description: "Update a pipeline draft",
          options: [
            {
              name: ["--continue", "-c"],
              description:
                "Boolean flag to allow a pipeline to continue executing after a step fails",
              args: { name: "continue" },
            },
            {
              name: ["--description", "-d"],
              description: "Description text of the pipeline draft",
              args: { name: "description" },
            },
            {
              name: ["--experiment_name", "-e"],
              description: "Experiment name for the pipeline draft",
              args: { name: "experiment_name" },
            },
            {
              name: ["--name", "-n"],
              description: "Name to assign to the pipeline draft",
              args: { name: "name" },
            },
            {
              name: "--parameters",
              description:
                "PipelineParameters for the draft with 'key=value' syntax",
              args: { name: "parameters" },
            },
            {
              name: ["--pipeline-draft-id", "-i"],
              description: "ID of the PipelineDraft to update",
              args: { name: "pipeline-draft-id" },
            },
            {
              name: ["--pipeline-yaml", "-y"],
              description: "YAML file which defines the pipeline draft",
              args: { name: "pipeline-yaml" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--tags", "-t"],
              description: "Tags for the draft with 'key=value' syntax",
              args: { name: "tags" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update-schedule",
          description: "Update a schedule",
          options: [
            {
              name: ["--schedule-id", "-s"],
              description: "ID of the schedule to show (guid)",
              args: { name: "schedule-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the schedule to show (guid)",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--schedule-yaml", "-y"],
              description: "Schedule YAML input",
              args: { name: "schedule-yaml" },
            },
            {
              name: ["--status", "-t"],
              description: "Status of the schedule to show (guid)",
              args: { name: "status" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description: "Commands for submitting, updating, and monitoring runs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel run",
          options: [
            {
              name: ["--run", "-r"],
              description: "The runId of an experiment run",
              args: { name: "run" },
              isRequired: true,
            },
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "download-logs",
          description: "Download log files",
          options: [
            {
              name: ["--output-dir", "-d"],
              description: "Output directory to download log files to",
              args: { name: "output-dir" },
              isRequired: true,
            },
            {
              name: ["--run", "-r"],
              description: "The runId of an experiment run",
              args: { name: "run" },
              isRequired: true,
            },
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List runs",
          options: [
            {
              name: "--compute-target-name",
              description: "The compute target name",
              args: { name: "compute-target-name" },
            },
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: "--last",
              description: "Fetch the latest N elements",
              args: { name: "last" },
            },
            {
              name: "--minimal",
              description: "Flag to provide minimum properties for run output",
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--parent-run-id",
              description: "Parent Run ID",
              args: { name: "parent-run-id" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: "--pipeline-run-id",
              description: "Pipeline Run ID",
              args: { name: "pipeline-run-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--status",
              description: "Status of the run",
              args: {
                name: "status",
                suggestions: [
                  "Completed",
                  "Failed",
                  "Finalizing",
                  "Preparing",
                  "Provisioning",
                  "Queued",
                  "Running",
                  "Starting",
                ],
              },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: "--tags",
              description: "Tags for a run with 'key[=value]' syntax",
              args: { name: "tags" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "monitor-logs",
          description: "Monitor the logs for an existing run",
          options: [
            {
              name: ["--run", "-r"],
              description: "The runId of an experiment run",
              args: { name: "run" },
              isRequired: true,
            },
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "monitor-tensorboard",
          description: "Monitor an existing run using tensorboard",
          options: [
            {
              name: ["--run", "-r"],
              description: "The runId of an experiment run",
              args: { name: "run" },
              isRequired: true,
            },
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: "--local-directory",
              description:
                "Local Directory to stage tensorboard files being monitored",
              args: { name: "local-directory" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show run",
          options: [
            {
              name: ["--run", "-r"],
              description: "The runId of an experiment run",
              args: { name: "run" },
              isRequired: true,
            },
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "submit-hyperdrive",
          description: "Submit a hyper parameter sweep using run config",
          options: [
            {
              name: "--hyperdrive-configuration-name",
              description:
                "The full name of the hyperdrive configuration file. The file should be in a sub-folder of the directory specified by the path parameter",
              args: { name: "hyperdrive-configuration-name" },
              isRequired: true,
            },
            { name: "--async", description: "Disable output streaming" },
            {
              name: ["--conda-dependencies", "-d"],
              description: "Override the default Conda dependencies file",
              args: { name: "conda-dependencies" },
            },
            {
              name: ["--target", "--ct"],
              description: "The name of the compute target to use for the run",
              args: { name: "target" },
            },
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--run-configuration-name", "-c"],
              description:
                "Name (without extension) of a run configuration file. The file should be in a sub-folder of the directory specified by the path parameter",
              args: { name: "run-configuration-name" },
            },
            {
              name: "--source-directory",
              description:
                "A local directory containing source code files. Defaults to path if source directory is not provided",
              args: { name: "source-directory" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
          args: {
            name: "<USER_SCRIPT_AND_ARGUMENTS>",
            description:
              "The run submit arguments, like script name and script arguments",
            isOptional: true,
          },
        },
        {
          name: "submit-pipeline",
          description:
            "Submit a pipeline for execution, from a published pipeline ID or pipeline YAML file",
          options: [
            {
              name: ["--datapaths", "-d"],
              description:
                "Comma-separated list of name=datastore/path pairs for datapath parameter assignments",
              args: { name: "datapaths" },
            },
            {
              name: ["--experiment-name", "-n"],
              description:
                "Experiment name for run submission. If unspecified, use the pipeline name",
              args: { name: "experiment-name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: ["--output_file", "-f"],
              description: "File to write output in JSON format",
              args: { name: "output_file" },
            },
            {
              name: ["--parameters", "-p"],
              description:
                "Comma-separated list of name=value pairs for pipeline parameter assignments",
              args: { name: "parameters" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--pipeline-id", "-i"],
              description: "ID of a pipeline to submit (guid)",
              args: { name: "pipeline-id" },
            },
            {
              name: ["--pipeline-yaml", "-y"],
              description: "YAML file which defines a pipeline",
              args: { name: "pipeline-yaml" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "submit-script",
          description: "Submit a script for execution",
          options: [
            { name: "--async", description: "Disable output streaming" },
            {
              name: ["--conda-dependencies", "-d"],
              description: "Override the default Conda dependencies file",
              args: { name: "conda-dependencies" },
            },
            {
              name: ["--target", "--ct"],
              description: "The name of the compute target to use for the run",
              args: { name: "target" },
            },
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: ["--run-configuration-name", "-c"],
              description:
                "Name (without extension) of a run configuration file. The file should be in a sub-folder of the directory specified by the path parameter",
              args: { name: "run-configuration-name" },
            },
            {
              name: "--source-directory",
              description:
                "A local directory containing source code files. Defaults to path if source directory is not provided",
              args: { name: "source-directory" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
          args: {
            name: "<USER_SCRIPT_AND_ARGUMENTS>",
            description:
              "The run submit arguments, like script name and script arguments",
            isOptional: true,
          },
        },
        {
          name: "update",
          description: "Update the run by adding tags",
          options: [
            {
              name: ["--run", "-r"],
              description: "The runId of an experiment run",
              args: { name: "run" },
              isRequired: true,
            },
            {
              name: "--add-tag",
              description: "Tag the entitiy with 'key[=value]' syntax",
              args: { name: "add-tag" },
            },
            {
              name: ["--experiment-name", "-e"],
              description: "Experiment name",
              args: { name: "experiment-name" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "service",
      description: "Manage operationalized services",
      subcommands: [
        {
          name: "delete",
          description: "Delete a service from the workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "The service name to delete",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the service to delete",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "get-access-token",
          description: "Get a token to issue requests a service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Service Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the service to show",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "get-keys",
          description: "Get keys to issue requests against a service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Service Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the service to show",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "get-logs",
          description: "Get logs for a service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Service Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--init", "-i"],
              description:
                "Get logs of init container instead of the scoring container",
            },
            {
              name: ["--num_lines", "-l"],
              description:
                "Number of log lines to return from tail (default is 5000)",
              args: { name: "num_lines" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the service to show",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "list",
          description: "List services in the workspace",
          options: [
            {
              name: ["--compute-type", "-c"],
              description:
                "If provided, will only show services that have the specified compute type. (Options are 'ACI', 'AKS')",
              args: { name: "compute-type" },
            },
            {
              name: "--image-digest",
              description:
                "If provided, will only show services that have the specified image digest",
              args: { name: "image-digest" },
            },
            {
              name: "--model-id",
              description:
                "If provided, will only show services that have the specified model id",
              args: { name: "model-id" },
            },
            {
              name: "--model-name",
              description:
                "If provided, will only show services that have the specified model name",
              args: { name: "model-name" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: "--property",
              description:
                "If provided, will filter based on the provided key/value (e.g. key, or key=value). Multiple properties can be specified with multiple --property options",
              args: { name: "property" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: "--tag",
              description:
                "If provided, will filter based on the provided key/value (e.g. key, or key=value). Multiple tags can be specified with multiple --tag options",
              args: { name: "tag" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the services to list",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "regen-key",
          description: "Regenerate keys for a service",
          options: [
            {
              name: ["--key", "-k"],
              description:
                "Which key to regenerate, if regen is specified. Options: Primary, Secondary",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Service Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: ["--set-key", "-s"],
              description: "Provide auth value for the specified key",
              args: { name: "set-key" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the service to show",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "run",
          description: "Run a service in the workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "The service name to score against",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--input-data", "-d"],
              description: "The data to use for calling the web service",
              args: { name: "input-data" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the service to run",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "show",
          description: "Show details for a service in the workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the webservice to show",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the service to show",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
        {
          name: "update",
          description: "Update a service in the workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "The service name to update",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--add-property",
              description:
                "Key/value property to add (e.g. key=value ). Multiple properties can be specified with multiple --add-property options",
              args: { name: "add-property" },
            },
            {
              name: "--add-tag",
              description:
                "Key/value tag to add (e.g. key=value ). Multiple tags can be specified with multiple --add-tag options",
              args: { name: "add-tag" },
            },
            {
              name: ["--auth-enabled", "--ae"],
              description:
                "Whether or not to enable key auth for this Webservice. Defaults to False",
              args: { name: "auth-enabled" },
            },
            {
              name: ["--enable-app-insights", "--ai"],
              description:
                "Whether or not to enable AppInsights for this Webservice. Defaults to False",
              args: { name: "enable-app-insights" },
            },
            {
              name: ["--autoscale-refresh-seconds", "--ar"],
              description:
                "How often the autoscaler should attempt to scale this Webservice. Defaults to 1",
              args: { name: "autoscale-refresh-seconds" },
            },
            {
              name: ["--autoscale-enabled", "--as"],
              description:
                "Whether or not to enable autoscaling for this Webservice. Defaults to True if num_replicas is None",
              args: { name: "autoscale-enabled" },
            },
            {
              name: ["--autoscale-target-utilization", "--at"],
              description:
                "The target utilization (in percent out of 100) the autoscaler should attempt to maintain for this Webservice. Defaults to 70",
              args: { name: "autoscale-target-utilization" },
            },
            {
              name: ["--autoscale-max-replicas", "--ma"],
              description:
                "The maximum number of containers to use when autoscaling this Webservice. Defaults to 10",
              args: { name: "autoscale-max-replicas" },
            },
            {
              name: ["--autoscale-min-replicas", "--mi"],
              description:
                "The minimum number of containers to use when autoscaling this Webservice. Defaults to 1",
              args: { name: "autoscale-min-replicas" },
            },
            {
              name: ["--base-image", "--bi"],
              description:
                "A custom image to be used as base image. If no base image is given then the base image will be used based off of given runtime parameter",
              args: { name: "base-image" },
            },
            {
              name: ["--base-image-registry", "--ir"],
              description: "Image registry that contains the base image",
              args: { name: "base-image-registry" },
            },
            {
              name: ["--cpu-cores", "--cc"],
              description:
                "The number of cpu cores to allocate for this Webservice. Can be a decimal. Defaults to 0.1",
              args: { name: "cpu-cores" },
            },
            {
              name: ["--cpu-cores-limit", "--ccl"],
              description:
                "The max number of CPU cores this Webservice is allowed to use. Can be a decimal",
              args: { name: "cpu-cores-limit" },
            },
            {
              name: ["--conda-file", "--cf"],
              description:
                "Path to local file containing a conda environment definition to use for the image",
              args: { name: "conda-file" },
            },
            {
              name: ["--collect-model-data", "--md"],
              description:
                "Whether or not to enable model data collection for this Webservice. Defaults to False",
              args: { name: "collect-model-data" },
            },
            {
              name: "--compute-target",
              description:
                "(Preview) Specifies the compute target with AzureML extension installed to host migrated Kubernetes online endpoint and deployment",
              args: { name: "compute-target" },
            },
            {
              name: ["--cuda-version", "--cv"],
              description:
                "Version of CUDA to install for images that need GPU support. The GPU image must be used on Microsoft Azure Services such as Azure Container Instances, Azure Machine Learning Compute, Azure Virtual Machines, and Azure Kubernetes Service. Supported versions are 9.0, 9.1, and 10.0. If 'enable_gpu' is set, this defaults to '9.1'",
              args: { name: "cuda-version" },
            },
            {
              name: ["--deploy-config-file", "--dc"],
              description: "Path to a JSON file containing deployment metadata",
              args: { name: "deploy-config-file" },
            },
            {
              name: ["--description", "-d"],
              description: "Description of the service",
              args: { name: "description" },
            },
            {
              name: ["--dns-name-label", "--dn"],
              description: "The dns name for this Webservice",
              args: { name: "dns-name-label" },
            },
            {
              name: ["--extra-docker-file-steps", "--ds"],
              description:
                "Path to local file containing additional Docker steps to run when setting up image",
              args: { name: "extra-docker-file-steps" },
            },
            {
              name: ["--environment-directory", "--ed"],
              description:
                "Directory for Azure Machine Learning Environment for deployment. It is the same directory path as provided in 'az ml environment scaffold' command",
              args: { name: "environment-directory" },
            },
            {
              name: ["--enable-gpu", "--eg"],
              description:
                "Whether or not to enable GPU support in the image. The GPU image must be used on Microsoft Azure Services such as Azure Container Instances, Azure Machine Learning Compute, Azure Virtual Machines, and Azure Kubernetes Service. Defaults to False",
              args: { name: "enable-gpu" },
            },
            {
              name: ["--entry-script", "--es"],
              description:
                "Path to local file that contains the code to run for service (relative path from source_directory if one is provided)",
              args: { name: "entry-script" },
            },
            {
              name: ["--environment-name", "-e"],
              description:
                "Name of Azure Machine Learning Environment for deployment",
              args: { name: "environment-name" },
            },
            {
              name: ["--environment-version", "--ev"],
              description:
                "Version of an existing Azure Machine Learning Environment for deployment",
              args: { name: "environment-version" },
            },
            {
              name: ["--failure-threshold", "--ft"],
              description:
                "When a Pod starts and the liveness probe fails, Kubernetes will try --failure-threshold times before giving up. Defaults to 3. Minimum value is 1",
              args: { name: "failure-threshold" },
            },
            {
              name: ["--memory-gb", "--gb"],
              description:
                "The amount of memory (in GB) to allocate for this Webservice. Can be a decimal",
              args: { name: "memory-gb" },
            },
            {
              name: ["--memory-gb-limit", "--gbl"],
              description:
                "The max amount of memory (in GB) this Webservice is allowed to use. Can be a decimal",
              args: { name: "memory-gb-limit" },
            },
            {
              name: ["--gpu-cores", "--gc"],
              description:
                "The number of gpu cores to allocate for this Webservice. Default is 1",
              args: { name: "gpu-cores" },
            },
            {
              name: ["--inference-config-file", "--ic"],
              description:
                "Path to a JSON or YAML file containing inference configuration",
              args: { name: "inference-config-file" },
            },
            {
              name: ["--initial-delay-seconds", "--id"],
              description:
                "Number of seconds after the container has started before liveness probes are initiated. Defaults to 310",
              args: { name: "initial-delay-seconds" },
            },
            {
              name: "--is-migration",
              description:
                "(Preview) Whether or not to migrate AKS web service to Kubernetes online endpoint and deployment. Defaults to False",
              args: { name: "is-migration" },
            },
            {
              name: ["--primary-key", "--kp"],
              description: "A primary auth key to use for this Webservice",
              args: { name: "primary-key" },
            },
            {
              name: ["--secondary-key", "--ks"],
              description: "A secondary auth key to use for this Webservice",
              args: { name: "secondary-key" },
            },
            {
              name: ["--location", "--lo"],
              description:
                "The Azure region to deploy this Webservice to. If not specified the Workspace location will be used. More details on available regions can be found here: https://azure.microsoft.com/en-us/global-infrastructure/services/?regions=all&products=container-instances",
              args: { name: "location" },
            },
            {
              name: ["--max-request-wait-time", "--mr"],
              description:
                "The maximum amount of time a request will stay in the queue (in milliseconds) before returning a 503 error. Defaults to 500",
              args: { name: "max-request-wait-time" },
            },
            {
              name: ["--model", "-m"],
              description:
                "The ID of the model to be deployed. Multiple models can be specified with additional -m arguments. Models need to be registered first",
              args: { name: "model" },
            },
            {
              name: ["--model-metadata-file", "-f"],
              description:
                "Path to a JSON file containing model registration metadata. Multiple models can be provided using multiple -f parameters",
              args: { name: "model-metadata-file" },
            },
            {
              name: "--no-wait",
              description: "Flag to not wait for asynchronous calls",
              args: { name: "no-wait" },
            },
            {
              name: ["--num-replicas", "--nr"],
              description:
                "The number of containers to allocate for this Webservice. No default, if this parameter is not set then the autoscaler is enabled by default",
              args: { name: "num-replicas" },
            },
            {
              name: "--path",
              description:
                "Path to a project folder. Default: current directory",
              args: { name: "path" },
            },
            {
              name: ["--period-seconds", "--ps"],
              description:
                "How often (in seconds) to perform the liveness probe. Default to 10 seconds. Minimum value is 1",
              args: { name: "period-seconds" },
            },
            {
              name: ["--port", "--po"],
              description:
                "The local port on which to expose the service's HTTP endpoint",
              args: { name: "port" },
            },
            {
              name: "--remove-tag",
              description:
                "Key of tag to remove. Multiple tags can be specified with multiple --remove-tag options",
              args: { name: "remove-tag" },
            },
            {
              name: ["--replica-max-concurrent-requests", "--rm"],
              description:
                "The number of maximum concurrent requests per node to allow for this Webservice. Defaults to 1",
              args: { name: "replica-max-concurrent-requests" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Resource group corresponding to the provided workspace",
              args: { name: "resource-group" },
            },
            {
              name: ["--runtime", "--rt"],
              description:
                "Which runtime to use for image. Current supported runtimes are 'spark-py' and 'python'spark-py|python|python-slim",
              args: { name: "runtime" },
            },
            {
              name: ["--ssl-cname", "--sc"],
              description:
                "The cname for if SSL is enabled. Only applicable when updating an ACI service",
              args: { name: "ssl-cname" },
            },
            {
              name: ["--scoring-timeout-ms", "--tm"],
              description:
                "A timeout to enforce for scoring calls to this Webservice. Defaults to 60000",
              args: { name: "scoring-timeout-ms" },
            },
            {
              name: ["--source-directory", "--sd"],
              description:
                "Path to folders that contain all files to create the image",
              args: { name: "source-directory" },
            },
            {
              name: ["--ssl-enabled", "--se"],
              description:
                "Whether or not to enable SSL for this Webservice. Defaults to False",
              args: { name: "ssl-enabled" },
            },
            {
              name: ["--ssl-key-pem-file", "--sk"],
              description: "The key file needed if SSL is enabled",
              args: { name: "ssl-key-pem-file" },
            },
            {
              name: ["--ssl-cert-pem-file", "--sp"],
              description: "The cert file needed if SSL is enabled",
              args: { name: "ssl-cert-pem-file" },
            },
            {
              name: ["--success-threshold", "--st"],
              description:
                "Minimum consecutive successes for the liveness probe to be considered successful after having failed. Defaults to 1. Minimum value is 1",
              args: { name: "success-threshold" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--timeout-seconds", "--ts"],
              description:
                "Number of seconds after which the liveness probe times out. Defaults to 2 second. Minimum value is 1",
              args: { name: "timeout-seconds" },
            },
            {
              name: "--token-auth-enabled",
              description:
                "Whether or not to enable token auth for this Webservice. Only available for AKS web services. Defaults to False",
              args: { name: "token-auth-enabled" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the workspace containing the service to update",
              args: { name: "workspace-name" },
            },
            { name: "-v", description: "Verbosity flag", args: { name: "v" } },
          ],
        },
      ],
    },
    {
      name: "workspace",
      description: "Workspace subgroup commands",
      subcommands: [
        {
          name: "create",
          description: "Create a workspace",
          options: [
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--adb-workspace",
              description: "Adb Workspace to be linked with this workspace",
              args: { name: "adb-workspace" },
            },
            {
              name: "--application-insights",
              description:
                "Application Insights to be associated with this workspace",
              args: { name: "application-insights" },
            },
            {
              name: "--cmk-keyvault",
              description:
                "The key vault containing the customer managed key in the Azure resource ID format",
              args: { name: "cmk-keyvault" },
            },
            {
              name: "--container-registry",
              description:
                "Container Registry to be associated with this workspace",
              args: { name: "container-registry" },
            },
            {
              name: "--exist-ok",
              description: "Do not fail if workspace exists",
            },
            {
              name: ["--friendly-name", "-f"],
              description: "Friendly name for this workspace",
              args: { name: "friendly-name" },
            },
            {
              name: "--hbi-workspace",
              description:
                "Specifies whether the customer data is of High Business Impact(HBI), i.e., contains sensitive business information",
            },
            {
              name: "--keyvault",
              description: "Key Vault to be associated with this workspace",
              args: { name: "keyvault" },
            },
            {
              name: ["--location", "-l"],
              description: "Location for resource",
              args: { name: "location" },
            },
            {
              name: "--pe-auto-approval",
              description:
                "Whether private endpoint connections to the workspace resource via a private link should be auto approved",
            },
            {
              name: "--pe-name",
              description:
                "Name of the workspace private endpoint. Use this parameter to restrict workspace access to private networks, via a private endpoint",
              args: { name: "pe-name" },
            },
            {
              name: "--pe-resource-group",
              description:
                "Name of the existing resource group to create the workspace private endpoint in. The vnet should be in the same resource group. If not specified, the resource group of the workspace will be used",
              args: { name: "pe-resource-group" },
            },
            {
              name: "--pe-subnet-name",
              description:
                "Name of the existing subnet to create the workspace private endpoint in",
              args: { name: "pe-subnet-name" },
            },
            {
              name: "--pe-subscription-id",
              description:
                "Id of the existing subscription to create the workspace private endpoint in. The vnet should be in the same subscription. If not specified, the subscription Id of the workspace will be used",
              args: { name: "pe-subscription-id" },
            },
            {
              name: "--pe-vnet-name",
              description:
                "Name of the existing vnet to create the workspace private endpoint in",
              args: { name: "pe-vnet-name" },
            },
            {
              name: "--primary-user-assigned-identity",
              description:
                "The resourceId of the user assigned identity that used to represent workspace identity",
              args: { name: "primary-user-assigned-identity" },
            },
            {
              name: "--resource-cmk-uri",
              description:
                "The key URI of the customer managed key to encrypt the data at rest",
              args: { name: "resource-cmk-uri" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--sku",
              description:
                "SKU/edition of a workspace -can be a 'basic' workspace or a feature rich 'enterprise' workspace",
              args: { name: "sku" },
            },
            {
              name: "--storage-account",
              description:
                "Storage account to be associated with this workspace",
              args: { name: "storage-account" },
            },
            {
              name: "--system_datastores_auth_mode",
              description:
                "Determines whether or not to use credentials for the system datastores of the workspace 'workspaceblobstore' and 'workspacefilestore'. The default value is 'accessKey', in which case, the workspace will create the system datastores with credentials. If set to 'identity', the workspace will create the system datastores with no credentials",
              args: { name: "system_datastores_auth_mode" },
            },
            {
              name: ["--tags", "-t"],
              description:
                "Tags associated with this workspace with 'key=value' syntax",
              args: { name: "tags" },
            },
            {
              name: "--user-assigned-identity-for-cmk-encryption",
              description:
                "The resourceId of the user assigned identity that needs to be used to access the encryption key",
              args: { name: "user-assigned-identity-for-cmk-encryption" },
            },
            {
              name: ["--v1-legacy-mode", "-v"],
              description:
                "Prevent using v2 API service on public Azure Resource Manager if you set this parameter true. Learn more at aka.ms/amlv2network",
              args: { name: "v1-legacy-mode" },
            },
            {
              name: ["--yes", "-y"],
              description: "Create a resource group for this workspace",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a workspace",
          options: [
            {
              name: "--all-resources",
              description:
                "Deletes resources which this workspace depends on like storage, acr, kv and app insights",
            },
            {
              name: "--no-wait",
              description: "Do not wait for the workspace deletion to complete",
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "diagnose",
          description: "Diagnose workspace setup problems",
          options: [
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List workspaces",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list-keys",
          description:
            "List workspace keys for dependent resources such as storage, acr, and app insights",
          options: [
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "share",
          description: "Share a workspace with another user with a given role",
          options: [
            {
              name: "--role",
              description: "Role to assign to this user",
              args: { name: "role" },
              isRequired: true,
            },
            {
              name: "--user",
              description: "User with whom to share this workspace",
              args: { name: "user" },
              isRequired: true,
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a workspace",
          options: [
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "sync-keys",
          description:
            "Sync workspace keys for dependent resources such as storage, acr, and app insights",
          options: [
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a workspace",
          options: [
            {
              name: "--allow-public-access",
              description: "Allow public access to private link workspace",
              args: { name: "allow-public-access" },
            },
            {
              name: ["--description", "-d"],
              description: "Description of this workspace",
              args: { name: "description" },
            },
            {
              name: ["--friendly-name", "-f"],
              description: "Friendly name",
              args: { name: "friendly-name" },
            },
            {
              name: "--image-build-compute",
              description: "Compute target for image build",
              args: { name: "image-build-compute" },
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: "--primary-user-assigned-identity",
              description:
                "The resourceId of the user assigned identity that used to represent workspace identity",
              args: { name: "primary-user-assigned-identity" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: "--tags",
              description:
                "Tags associated with this workspace with 'key=value' syntax",
              args: { name: "tags" },
            },
            {
              name: ["--v1-legacy-mode", "-v"],
              description:
                "Prevent using v2 API service on public Azure Resource Manager if you set this parameter true. Learn more at aka.ms/amlv2network",
              args: { name: "v1-legacy-mode" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update-dependencies",
          description: "Update workspace dependent resources",
          options: [
            {
              name: "--acr",
              description:
                "The arm id of the container registry that you want to update this workspace with",
              args: { name: "acr" },
            },
            {
              name: "--force",
              description:
                "Force update dependent resources without user's confirmation",
            },
            {
              name: ["--output-metadata-file", "-t"],
              description:
                "Provide an optional output file location for structured object output",
              args: { name: "output-metadata-file" },
            },
            {
              name: "--path",
              description:
                "Path to a root directory for run configuration files",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription-id",
              description: "Specifies the subscription Id",
              args: { name: "subscription-id" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "Workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "private-endpoint",
          description: "Workspace private endpoint subgroup commands",
          subcommands: [
            {
              name: "add",
              description: "Add private endpoint to a workspace",
              options: [
                {
                  name: ["--output-metadata-file", "-t"],
                  description:
                    "Provide an optional output file location for structured object output",
                  args: { name: "output-metadata-file" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a root directory for run configuration files",
                  args: { name: "path" },
                },
                {
                  name: "--pe-auto-approval",
                  description:
                    "Whether private endpoint connections to the workspace resource via a private link should be auto approved",
                },
                {
                  name: "--pe-location",
                  description:
                    "Location of the workspace private endpoint. If not specified it will be the same location of the workspace",
                  args: { name: "pe-location" },
                },
                {
                  name: "--pe-name",
                  description:
                    "Name of the workspace private endpoint. Use this parameter to restrict workspace access to private networks, via a private endpoint",
                  args: { name: "pe-name" },
                },
                {
                  name: "--pe-resource-group",
                  description:
                    "Name of the existing resource group to create the workspace private endpoint in. The vnet should be in the same resource group. If not specified, the resource group of the workspace will be used",
                  args: { name: "pe-resource-group" },
                },
                {
                  name: "--pe-subnet-name",
                  description:
                    "Name of the existing subnet to create the workspace private endpoint in",
                  args: { name: "pe-subnet-name" },
                },
                {
                  name: "--pe-subscription-id",
                  description:
                    "Id of the existing subscription to create the workspace private endpoint in. The vnet should be in the same subscription. If not specified, the subscription Id of the workspace will be used",
                  args: { name: "pe-subscription-id" },
                },
                {
                  name: "--pe-vnet-name",
                  description:
                    "Name of the existing vnet to create the workspace private endpoint in",
                  args: { name: "pe-vnet-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Resource group name",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: "--tags",
                  description:
                    "Tags associated with this private endpoint with 'key=value' syntax",
                  args: { name: "tags" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "Workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the specified private endpoint Connection in the workspace",
              options: [
                {
                  name: ["--output-metadata-file", "-t"],
                  description:
                    "Provide an optional output file location for structured object output",
                  args: { name: "output-metadata-file" },
                },
                {
                  name: "--pe-connection-name",
                  description: "The name of the Private EndPoint Connection",
                  args: { name: "pe-connection-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Resource group name",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "Workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List all private endpoints in a workspace",
              options: [
                {
                  name: ["--output-metadata-file", "-t"],
                  description:
                    "Provide an optional output file location for structured object output",
                  args: { name: "output-metadata-file" },
                },
                {
                  name: "--path",
                  description:
                    "Path to a root directory for run configuration files",
                  args: { name: "path" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Resource group name",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription-id",
                  description: "Specifies the subscription Id",
                  args: { name: "subscription-id" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "Workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
