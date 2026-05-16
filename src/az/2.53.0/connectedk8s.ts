const completion: Fig.Spec = {
  name: "connectedk8s",
  description: "Commands to manage connected kubernetes clusters",
  subcommands: [
    {
      name: "connect",
      description: "Onboard a connected kubernetes cluster to azure",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the connected cluster",
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
          name: "--azure-hybrid-benefit",
          description: "Flag to enable/disable Azure Hybrid Benefit feature",
          args: {
            name: "azure-hybrid-benefit",
            suggestions: ["False", "NotApplicable", "True"],
          },
        },
        {
          name: "--container-log-path",
          description:
            "Override the default container log path to enable fluent-bit logging",
          args: { name: "container-log-path" },
        },
        {
          name: "--correlation-id",
          description:
            "A guid that is used to internally track the source of cluster onboarding. Please do not modify it unless advised",
          args: { name: "correlation-id" },
        },
        {
          name: ["--custom-ca-cert", "--proxy-cert"],
          description:
            "Path to the certificate file for proxy or custom Certificate Authority",
          args: { name: "custom-ca-cert" },
        },
        {
          name: "--custom-locations-oid",
          description: "OID of 'custom-locations' app",
          args: { name: "custom-locations-oid" },
        },
        {
          name: "--disable-auto-upgrade",
          description: "Flag to disable auto upgrade of arc agents",
        },
        {
          name: "--distribution",
          description:
            "The Kubernetes distribution which will be running on this connected cluster",
          args: {
            name: "distribution",
            suggestions: [
              "aks",
              "aks_edge_k3s",
              "aks_edge_k8s",
              "aks_engine",
              "aks_management",
              "aks_workload",
              "canonical",
              "capz",
              "eks",
              "generic",
              "gke",
              "k3s",
              "karbon",
              "kind",
              "minikube",
              "openshift",
              "rancher_rke",
              "tkg",
            ],
          },
        },
        {
          name: "--distribution-version",
          description:
            "The Kubernetes distribution version of the connected cluster",
          args: { name: "distribution-version" },
        },
        {
          name: "--enable-private-link",
          description:
            "Flag to enable/disable private link support on a connected cluster resource. Allowed values: false, true",
          args: { name: "enable-private-link", suggestions: ["false", "true"] },
        },
        {
          name: "--infrastructure",
          description:
            "The infrastructure on which the Kubernetes cluster represented by this connected cluster will be running on",
          args: {
            name: "infrastructure",
            suggestions: [
              "LTSCWindows 10 Enterprise LTSC",
              "Windows 10 Enterprise",
              "Windows 10 Enterprise LTSC 2019",
              "Windows 10 Enterprise LTSC 2021",
              "Windows 10 Enterprise N",
              "Windows 10 Enterprise N LTSC 2019",
              "Windows 10 Enterprise N LTSC 2021",
              "Windows 10 IoT Enterprise",
              "Windows 10 IoT Enterprise LTSC 2019",
              "Windows 10 IoT Enterprise LTSC 2021",
              "Windows 10 Pro",
              "Windows 11 Enterprise",
              "Windows 11 Enterprise N",
              "Windows 11 IoT Enterprise",
              "Windows 11 Pro",
              "Windows Server 2019",
              "Windows Server 2019 Datacenter",
              "Windows Server 2019 Standard",
              "Windows Server 2022",
              "Windows Server 2022 Datacenter",
              "Windows Server 2022 Standard",
              "aws",
              "azure",
              "azure_stack_edge",
              "azure_stack_hci",
              "azure_stack_hub",
              "gcp",
              "generic",
              "vsphere",
              "windows_server",
            ],
          },
        },
        {
          name: "--kube-config",
          description: "Path to the kube config file",
          args: { name: "kube-config" },
        },
        {
          name: "--kube-context",
          description: "Kubconfig context from current machine",
          args: { name: "kube-context" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--onboarding-timeout",
          description:
            "Time required (in seconds) for the arc-agent pods to be installed on the kubernetes cluster. Override this value if the hardware/network constraints on your cluster requires more time for installing the arc-agent pods",
          args: { name: "onboarding-timeout" },
        },
        {
          name: ["--private-link-scope-resource-id", "--pls-arm-id"],
          description:
            "ARM resource id of the private link scope resource to which this connected cluster is associated",
          args: { name: "private-link-scope-resource-id" },
        },
        {
          name: "--proxy-http",
          description: "Http proxy URL to be used",
          args: { name: "proxy-http" },
        },
        {
          name: "--proxy-https",
          description: "Https proxy URL to be used",
          args: { name: "proxy-https" },
        },
        {
          name: "--proxy-skip-range",
          description:
            "List of URLs/CIDRs for which proxy should not to be used",
          args: { name: "proxy-skip-range" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "delete",
      description:
        "Delete a connected kubernetes cluster along with connected cluster agents",
      options: [
        {
          name: "--force",
          description:
            "Force delete to remove all azure-arc resources from the cluster",
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--kube-config",
          description: "Path to the kube config file",
          args: { name: "kube-config" },
        },
        {
          name: "--kube-context",
          description: "Kubconfig context from current machine",
          args: { name: "kube-context" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the connected cluster",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "disable-features",
      description: "Disables the selective features on the connected cluster",
      options: [
        {
          name: "--features",
          description: "Space-separated list of features you want to disable",
          args: {
            name: "features",
            suggestions: ["azure-rbac", "cluster-connect", "custom-locations"],
          },
          isRequired: true,
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--kube-config",
          description: "Path to the kube config file",
          args: { name: "kube-config" },
        },
        {
          name: "--kube-context",
          description: "Kubconfig context from current machine",
          args: { name: "kube-context" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the connected cluster",
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
      name: "enable-features",
      description: "Enables the selective features on the connected cluster",
      options: [
        {
          name: "--features",
          description: "Space-separated list of features you want to enable",
          args: {
            name: "features",
            suggestions: ["azure-rbac", "cluster-connect", "custom-locations"],
          },
          isRequired: true,
        },
        {
          name: "--app-id",
          description:
            "Application ID for enabling Azure RBAC. Specify when enabling azure-rbac",
          args: { name: "app-id" },
        },
        {
          name: "--app-secret",
          description:
            "Application secret for enabling Azure RBAC. Specify when enabling azure-rbac",
          args: { name: "app-secret" },
        },
        {
          name: "--custom-locations-oid",
          description: "OID of 'custom-locations' app",
          args: { name: "custom-locations-oid" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--kube-config",
          description: "Path to the kube config file",
          args: { name: "kube-config" },
        },
        {
          name: "--kube-context",
          description: "Kubconfig context from current machine",
          args: { name: "kube-context" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the connected cluster",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--skip-azure-rbac-list",
          description:
            "Comma separated list of names of usernames/email/oid. Azure RBAC will be skipped for these users. Specify when enabling azure-rbac",
          args: { name: "skip-azure-rbac-list" },
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
      description: "List connected kubernetes clusters",
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
      name: "proxy",
      description: "Get access to a connected kubernetes cluster",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "Kubernetes configuration file to update. If not provided, updates the file '~/.kube/config'. Use '-' to print YAML to stdout instead",
          args: { name: "file" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--kube-context",
          description: "If specified, overwrite the default context name",
          args: { name: "kube-context" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the connected cluster",
          args: { name: "name" },
        },
        {
          name: "--port",
          description: "Port used for accessing connected cluster",
          args: { name: "port" },
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
          name: "--token",
          description:
            "Service account token to use to authenticate to the kubernetes cluster",
          args: { name: "token" },
        },
      ],
    },
    {
      name: "show",
      description: "Show details of a connected kubernetes cluster",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the connected cluster",
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
      name: "troubleshoot",
      description:
        "Perform diagnostic checks on an Arc enabled Kubernetes cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the connected cluster",
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
          name: "--kube-config",
          description: "Path to the kube config file",
          args: { name: "kube-config" },
        },
        {
          name: "--kube-context",
          description: "Kubconfig context from current machine",
          args: { name: "kube-context" },
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
      name: "update",
      description: "Update properties of the arc onboarded kubernetes cluster",
      options: [
        {
          name: "--auto-upgrade",
          description:
            "Flag to enable/disable auto upgrade of arc agents. By default, auto upgrade of agents is enabled",
          args: { name: "auto-upgrade", suggestions: ["false", "true"] },
        },
        {
          name: "--azure-hybrid-benefit",
          description: "Flag to enable/disable Azure Hybrid Benefit feature",
          args: {
            name: "azure-hybrid-benefit",
            suggestions: ["False", "NotApplicable", "True"],
          },
        },
        {
          name: "--container-log-path",
          description:
            "Override the default container log path to enable fluent-bit logging",
          args: { name: "container-log-path" },
        },
        {
          name: ["--custom-ca-cert", "--proxy-cert"],
          description:
            "Path to the certificate file for proxy or custom Certificate Authority",
          args: { name: "custom-ca-cert" },
        },
        {
          name: "--disable-proxy",
          description: "Disables proxy settings for agents",
        },
        {
          name: "--distribution",
          description:
            "The Kubernetes distribution which will be running on this connected cluster",
          args: {
            name: "distribution",
            suggestions: [
              "aks",
              "aks_edge_k3s",
              "aks_edge_k8s",
              "aks_engine",
              "aks_management",
              "aks_workload",
              "canonical",
              "capz",
              "eks",
              "generic",
              "gke",
              "k3s",
              "karbon",
              "kind",
              "minikube",
              "openshift",
              "rancher_rke",
              "tkg",
            ],
          },
        },
        {
          name: "--distribution-version",
          description:
            "The Kubernetes distribution version of the connected cluster",
          args: { name: "distribution-version" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--kube-config",
          description: "Path to the kube config file",
          args: { name: "kube-config" },
        },
        {
          name: "--kube-context",
          description: "Kubconfig context from current machine",
          args: { name: "kube-context" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the connected cluster",
          args: { name: "name" },
        },
        {
          name: "--proxy-http",
          description: "Http proxy URL to be used",
          args: { name: "proxy-http" },
        },
        {
          name: "--proxy-https",
          description: "Https proxy URL to be used",
          args: { name: "proxy-https" },
        },
        {
          name: "--proxy-skip-range",
          description:
            "List of URLs/CIDRs for which proxy should not to be used",
          args: { name: "proxy-skip-range" },
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
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "upgrade",
      description:
        "Atomically upgrade onboarded agents to the specific version or default to the latest version",
      options: [
        {
          name: "--agent-version",
          description: "Version of agent to update the helm charts to",
          args: { name: "agent-version" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--kube-config",
          description: "Path to the kube config file",
          args: { name: "kube-config" },
        },
        {
          name: "--kube-context",
          description: "Kubconfig context from current machine",
          args: { name: "kube-context" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the connected cluster",
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
          name: "--upgrade-timeout",
          description:
            "Time required (in seconds) for the arc-agent pods to be upgraded on the kubernetes cluster. Override this value if the hardware/network constraints on your cluster requires more time for upgrading the arc-agent pods",
          args: { name: "upgrade-timeout" },
        },
      ],
    },
  ],
};

export default completion;
