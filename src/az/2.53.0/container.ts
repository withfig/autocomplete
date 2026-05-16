const completion: Fig.Spec = {
  name: "container",
  description: "Manage Azure Container Instances",
  subcommands: [
    {
      name: "app",
      description: "Commands to Manage Azure Container Instances App",
      subcommands: [
        {
          name: "up",
          description:
            "Deploy to Azure Container Instances using GitHub Actions",
          options: [
            {
              name: "--acr",
              description:
                "Name of the Azure Container Registry to be used for pushing the image",
              args: { name: "acr" },
            },
            {
              name: "--branch-name",
              description:
                "New branch name to be created to check in files and raise a PR",
              args: { name: "branch-name" },
            },
            {
              name: "--do-not-wait",
              description: "Do not wait for workflow completion",
            },
            {
              name: "--port",
              description:
                "Port on which your application runs. Default is 8080",
              args: { name: "port" },
            },
            {
              name: "--repository",
              description:
                "GitHub Repository URL e.g. https://github.com/contoso/webapp",
              args: { name: "repository" },
            },
          ],
        },
      ],
    },
    {
      name: "attach",
      description:
        "Attach local standard output and error streams to a container in a container group. This command provides diagnostic information during container startup. Once the container has started, it streams STDOUT and STDERR to your local console",
      options: [
        {
          name: "--container-name",
          description:
            "The container to attach to. If omitted, the first container in the container group will be chosen",
          args: { name: "container-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the container group",
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
      ],
    },
    {
      name: "create",
      description: "Create a container group",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--acr-identity",
          description: "The identity with access to the container registry",
          args: { name: "acr-identity" },
        },
        {
          name: "--add-capabilities",
          description: "A List of security context capabilities to be added",
          args: { name: "add-capabilities" },
        },
        {
          name: "--allow-escalation",
          description:
            "Allow whether a process can gain more privileges than its parent process",
        },
        {
          name: "--assign-identity",
          description:
            "Space-separated list of assigned identities. Assigned identities are either user assigned identities (resource IDs) and / or the system assigned identity ('[system]'). See examples for more info",
          args: { name: "assign-identity" },
        },
        {
          name: "--azure-file-volume-account-key",
          description:
            "The storage account access key used to access the Azure File share",
          args: { name: "azure-file-volume-account-key" },
        },
        {
          name: "--azure-file-volume-account-name",
          description:
            "The name of the storage account that contains the Azure File share",
          args: { name: "azure-file-volume-account-name" },
        },
        {
          name: "--azure-file-volume-mount-path",
          description:
            "The path within the container where the azure file volume should be mounted. Must not contain colon ':'",
          args: { name: "azure-file-volume-mount-path" },
        },
        {
          name: "--azure-file-volume-share-name",
          description:
            "The name of the Azure File share to be mounted as a volume",
          args: { name: "azure-file-volume-share-name" },
        },
        {
          name: "--cce-policy",
          description: "The CCE policy for the confidential container group",
          args: { name: "cce-policy" },
        },
        {
          name: "--command-line",
          description:
            "The command line to run when the container is started, e.g. '/bin/bash -c myscript.sh'",
          args: { name: "command-line" },
        },
        {
          name: "--cpu",
          description:
            "The required number of CPU cores of the containers, accurate to one decimal place",
          args: { name: "cpu" },
        },
        {
          name: "--dns-name-label",
          description: "The dns name label for container group with public IP",
          args: { name: "dns-name-label" },
        },
        {
          name: "--drop-capabilities",
          description: "A List of security context capabilities to be dropped",
          args: { name: "drop-capabilities" },
        },
        {
          name: ["--environment-variables", "-e"],
          description:
            "A list of environment variable for the container. Space-separated values in 'key=value' format",
          args: { name: "environment-variables" },
        },
        {
          name: ["--file", "-f"],
          description: "The path to the input file",
          args: { name: "file" },
        },
        {
          name: "--gitrepo-dir",
          description:
            "The target directory path in the git repository. Must not contain '..'",
          args: { name: "gitrepo-dir" },
        },
        {
          name: "--gitrepo-mount-path",
          description:
            "The path within the container where the git repo volume should be mounted. Must not contain colon ':'",
          args: { name: "gitrepo-mount-path" },
        },
        {
          name: "--gitrepo-revision",
          description: "The commit hash for the specified revision",
          args: { name: "gitrepo-revision" },
        },
        {
          name: "--gitrepo-url",
          description: "The URL of a git repository to be mounted as a volume",
          args: { name: "gitrepo-url" },
        },
        {
          name: "--image",
          description: "The container image name",
          args: { name: "image" },
        },
        {
          name: "--ip-address",
          description: "The IP address type of the container group",
          args: { name: "ip-address", suggestions: ["Private", "Public"] },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--log-analytics-workspace",
          description:
            "The Log Analytics workspace name or id. Use the current subscription or use --subscription flag to set the desired subscription",
          args: { name: "log-analytics-workspace" },
        },
        {
          name: "--log-analytics-workspace-key",
          description: "The Log Analytics workspace key",
          args: { name: "log-analytics-workspace-key" },
        },
        {
          name: "--memory",
          description:
            "The required memory of the containers in GB, accurate to one decimal place",
          args: { name: "memory" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the container group",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--os-type",
          description: "The OS type of the containers",
          args: { name: "os-type", suggestions: ["Linux", "Windows"] },
        },
        {
          name: "--ports",
          description: "A list of ports to open. Space-separated list of ports",
          args: { name: "ports" },
        },
        {
          name: "--priority",
          description: "The priority of the container group",
          args: { name: "priority" },
        },
        {
          name: "--privileged",
          description:
            "The flag to determine if the contianer permissions is elevated to Privileged",
        },
        {
          name: "--protocol",
          description: "The network protocol to use",
          args: { name: "protocol", suggestions: ["TCP", "UDP"] },
        },
        {
          name: "--registry-login-server",
          description: "The container image registry login server",
          args: { name: "registry-login-server" },
        },
        {
          name: "--registry-password",
          description: "The password to log in container image registry server",
          args: { name: "registry-password" },
        },
        {
          name: "--registry-username",
          description: "The username to log in container image registry server",
          args: { name: "registry-username" },
        },
        {
          name: "--restart-policy",
          description:
            "Restart policy for all containers within the container group",
          args: {
            name: "restart-policy",
            suggestions: ["Always", "Never", "OnFailure"],
          },
        },
        {
          name: "--role",
          description: "Role name or id the system assigned identity will have",
          args: { name: "role" },
        },
        {
          name: "--run-as-group",
          description: "Set the User UID for the container",
          args: { name: "run-as-group" },
        },
        {
          name: "--run-as-user",
          description: "Set the User GID for the container",
          args: { name: "run-as-user" },
        },
        {
          name: "--scope",
          description: "Scope that the system assigned identity can access",
          args: { name: "scope" },
        },
        {
          name: "--seccomp-profile",
          description:
            "A base64 encoded string containing the contents of the JSON in the seccomp profile",
          args: { name: "seccomp-profile" },
        },
        {
          name: "--secrets",
          description: "Space-separated secrets in 'key=value' format",
          args: { name: "secrets" },
        },
        {
          name: "--secrets-mount-path",
          description:
            "The path within the container where the secrets volume should be mounted. Must not contain colon ':'",
          args: { name: "secrets-mount-path" },
        },
        {
          name: "--secure-environment-variables",
          description:
            "A list of secure environment variable for the container. Space-separated values in 'key=value' format",
          args: { name: "secure-environment-variables" },
        },
        {
          name: "--sku",
          description: "The SKU of the container group",
          args: { name: "sku" },
        },
        {
          name: "--subnet",
          description:
            "The name of the subnet when creating a new VNET or referencing an existing one. Can also reference an existing subnet by ID",
          args: { name: "subnet" },
        },
        {
          name: "--subnet-address-prefix",
          description:
            "The subnet IP address prefix to use when creating a new VNET in CIDR format",
          args: { name: "subnet-address-prefix" },
        },
        {
          name: "--vnet",
          description:
            "The name of the VNET when creating a new one or referencing an existing one. Can also reference an existing vnet by ID. This allows using vnets from other resource groups",
          args: { name: "vnet" },
        },
        {
          name: "--vnet-address-prefix",
          description:
            "The IP address prefix to use when creating a new VNET in CIDR format",
          args: { name: "vnet-address-prefix" },
        },
        {
          name: "--vnet-name",
          description:
            "Argument 'vnet_name' has been deprecated and will be removed in a future release. Use '--vnet' instead. The name of the VNET when creating a new one or referencing an existing one",
          args: { name: "vnet-name" },
        },
        {
          name: "--zone",
          description: "The zone to place the container group",
          args: { name: "zone" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a container group",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the container group",
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
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "exec",
      description:
        "Execute a command from within a running container of a container group",
      options: [
        {
          name: "--exec-command",
          description: "The command to run from within the container",
          args: { name: "exec-command" },
          isRequired: true,
        },
        {
          name: "--container-name",
          description:
            "The container name where to execute the command. Can be ommitted for container groups with only one container",
          args: { name: "container-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the container group",
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
      ],
    },
    {
      name: "export",
      description: "Export a container group in yaml format",
      options: [
        {
          name: ["--file", "-f"],
          description: "The file path to export the container group",
          args: { name: "file" },
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
          description: "The name of the container group",
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
      ],
    },
    {
      name: "list",
      description: "List container groups",
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
      name: "logs",
      description: "Examine the logs for a container in a container group",
      options: [
        {
          name: "--container-name",
          description:
            "The container name to tail the logs. If omitted, the first container in the container group will be chosen",
          args: { name: "container-name" },
        },
        {
          name: "--follow",
          description: "Indicate to stream the tailing logs",
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the container group",
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
      ],
    },
    {
      name: "restart",
      description: "Restarts all containers in a container group",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the container group",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of a container group",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the container group",
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
      ],
    },
    {
      name: "start",
      description: "Starts all containers in a container group",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the container group",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "stop",
      description: "Stops all containers in a container group",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the container group",
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
      ],
    },
  ],
};

export default completion;
