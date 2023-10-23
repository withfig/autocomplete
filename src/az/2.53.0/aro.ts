const completion: Fig.Spec = {
  name: "aro",
  description: "Manage Azure Red Hat OpenShift clusters",
  subcommands: [
    {
      name: "create",
      description: "Create a cluster",
      options: [
        {
          name: "--master-subnet",
          description:
            "Name or ID of master vnet subnet. If name is supplied, --vnet must be supplied",
          args: { name: "master-subnet" },
          isRequired: true,
        },
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
          name: "--worker-subnet",
          description:
            "Name or ID of worker vnet subnet. If name is supplied, --vnet must be supplied",
          args: { name: "worker-subnet" },
          isRequired: true,
        },
        {
          name: "--apiserver-visibility",
          description: "API server visibility",
          args: {
            name: "apiserver-visibility",
            suggestions: ["Private", "Public"],
          },
        },
        {
          name: "--client-id",
          description: "Client ID of cluster service principal",
          args: { name: "client-id" },
        },
        {
          name: "--client-secret",
          description: "Client secret of cluster service principal",
          args: { name: "client-secret" },
        },
        {
          name: "--cluster-resource-group",
          description: "Resource group of cluster",
          args: { name: "cluster-resource-group" },
        },
        {
          name: "--disk-encryption-set",
          description:
            "ResourceID of the DiskEncryptionSet to be used for master and worker VMs",
          args: { name: "disk-encryption-set" },
        },
        {
          name: "--domain",
          description: "Domain of cluster",
          args: { name: "domain" },
        },
        {
          name: ["--fips-validated-modules", "--fips"],
          description: "Use FIPS validated cryptography modules",
          args: {
            name: "fips-validated-modules",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--ingress-visibility",
          description: "Ingress visibility",
          args: {
            name: "ingress-visibility",
            suggestions: ["Private", "Public"],
          },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--master-encryption-at-host", "--master-enc-host"],
          description: "Encryption at host flag for master VMs",
        },
        {
          name: "--master-vm-size",
          description: "Size of master VMs",
          args: { name: "master-vm-size" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--outbound-type",
          description:
            'Outbound type of cluster. Must be "Loadbalancer" (default) or "UserDefinedRouting"',
          args: { name: "outbound-type" },
        },
        {
          name: "--pod-cidr",
          description:
            "CIDR of pod network. Must be a minimum of /18 or larger",
          args: { name: "pod-cidr" },
        },
        {
          name: "--pull-secret",
          description: "Pull secret of cluster",
          args: { name: "pull-secret" },
        },
        {
          name: "--service-cidr",
          description:
            "CIDR of service network. Must be a minimum of /18 or larger",
          args: { name: "service-cidr" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--version",
          description: "OpenShift version to use for cluster creation",
          args: { name: "version" },
        },
        {
          name: "--vnet",
          description:
            "Name or ID of vnet. If name is supplied, --vnet-resource-group must be supplied",
          args: { name: "vnet" },
        },
        {
          name: "--vnet-resource-group",
          description: "Name of vnet resource group",
          args: { name: "vnet-resource-group" },
        },
        {
          name: "--worker-count",
          description: "Count of worker VMs",
          args: { name: "worker-count" },
        },
        {
          name: ["--worker-encryption-at-host", "--worker-enc-host"],
          description: "Encryption at host flag for worker VMs",
        },
        {
          name: "--worker-vm-disk-size-gb",
          description: "Disk size in GB of worker VMs",
          args: { name: "worker-vm-disk-size-gb" },
        },
        {
          name: "--worker-vm-size",
          description: "Size of worker VMs",
          args: { name: "worker-vm-size" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a cluster",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "get-admin-kubeconfig",
      description: "List admin kubeconfig of a cluster",
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
          name: ["--file", "-f"],
          description:
            "Path to the file where kubeconfig should be saved. Default: kubeconfig in local directory",
          args: { name: "file" },
        },
      ],
    },
    {
      name: "get-versions",
      description: "List versions available for installation",
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
      name: "list",
      description: "List clusters",
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
      name: "list-credentials",
      description: "List credentials of a cluster",
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
      ],
    },
    {
      name: "show",
      description: "Get the details of a cluster",
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
      ],
    },
    {
      name: "update",
      description: "Update a cluster",
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
          name: "--client-id",
          description: "Client ID of cluster service principal",
          args: { name: "client-id" },
        },
        {
          name: "--client-secret",
          description: "Client secret of cluster service principal",
          args: { name: "client-secret" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--refresh-credentials",
          description: "Refresh cluster application credentials",
        },
      ],
    },
    {
      name: "validate",
      description: "Validate permissions required to create a cluster",
      options: [
        {
          name: "--master-subnet",
          description:
            "Name or ID of master vnet subnet. If name is supplied, --vnet must be supplied",
          args: { name: "master-subnet" },
          isRequired: true,
        },
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
          name: "--worker-subnet",
          description:
            "Name or ID of worker vnet subnet. If name is supplied, --vnet must be supplied",
          args: { name: "worker-subnet" },
          isRequired: true,
        },
        {
          name: "--client-id",
          description: "Client ID of cluster service principal",
          args: { name: "client-id" },
        },
        {
          name: "--client-secret",
          description: "Client secret of cluster service principal",
          args: { name: "client-secret" },
        },
        {
          name: "--cluster-resource-group",
          description: "Resource group of cluster",
          args: { name: "cluster-resource-group" },
        },
        {
          name: "--disk-encryption-set",
          description:
            "ResourceID of the DiskEncryptionSet to be used for master and worker VMs",
          args: { name: "disk-encryption-set" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--pod-cidr",
          description:
            "CIDR of pod network. Must be a minimum of /18 or larger",
          args: { name: "pod-cidr" },
        },
        {
          name: "--service-cidr",
          description:
            "CIDR of service network. Must be a minimum of /18 or larger",
          args: { name: "service-cidr" },
        },
        {
          name: "--version",
          description: "OpenShift version to use for cluster creation",
          args: { name: "version" },
        },
        {
          name: "--vnet",
          description:
            "Name or ID of vnet. If name is supplied, --vnet-resource-group must be supplied",
          args: { name: "vnet" },
        },
        {
          name: "--vnet-resource-group",
          description: "Name of vnet resource group",
          args: { name: "vnet-resource-group" },
        },
      ],
    },
    {
      name: "wait",
      description: "Wait for a cluster to reach a desired state",
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
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--updated",
          description:
            "Wait until updated with provisioningState at 'Succeeded'",
        },
      ],
    },
  ],
};

export default completion;
