const completion: Fig.Spec = {
  name: "hybridaks",
  description: "Manage hybridaks provisioned clusters",
  subcommands: [
    {
      name: "create",
      description: "Creates the Hybrid AKS provisioned cluster",
      options: [
        {
          name: "--custom-location",
          description:
            "Name or ID of the custom location to use for the provisioned cluster",
          args: { name: "custom-location" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the provisioned cluster",
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
          name: ["--aad-admin-group-object-ids", "-i"],
          description:
            "Comma-separated list of aad group object IDs that will be set as cluster admin on the provisioned cluster",
          args: { name: "aad-admin-group-object-ids" },
        },
        {
          name: ["--addon", "-a"],
          description:
            "Enable addon. Multiple addons can be added by specifying this flag. Usage: --addon name=addon-name [config_key=config_value ...]",
          args: { name: "addon" },
        },
        {
          name: "--arc-agent-auto-upgrade",
          description: "Arc Agent Auto Upgrade",
          args: { name: "arc-agent-auto-upgrade" },
        },
        {
          name: "--arc-agent-version",
          description: "Arc Agent Version",
          args: { name: "arc-agent-version" },
        },
        {
          name: "--control-plane-count",
          description: "Number of control plane nodes",
          args: { name: "control-plane-count" },
        },
        {
          name: "--control-plane-ip",
          description: "API server IP Address for the control plane",
          args: { name: "control-plane-ip" },
        },
        {
          name: "--control-plane-vm-size",
          description: "VM Size of control plane",
          args: { name: "control-plane-vm-size" },
        },
        {
          name: "--generate-ssh-keys",
          description: "Generate ssh key-pair if not present",
        },
        {
          name: ["--kubernetes-version", "-k"],
          description: "The kubernetes version of the provisioned cluster",
          args: { name: "kubernetes-version" },
        },
        {
          name: "--load-balancer-count",
          description: "Number of load balancer nodes",
          args: { name: "load-balancer-count" },
        },
        {
          name: "--load-balancer-sku",
          description:
            'Type of load balancer. Options: "unstacked-haproxy" | "stacked-kube-vip" | "stacked-metallb" | "unmanaged"',
          args: { name: "load-balancer-sku" },
        },
        {
          name: "--load-balancer-vm-size",
          description: "VM Size of load balancer",
          args: { name: "load-balancer-vm-size" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--no-ssh-key", "-x"],
          description: "Do not use inject any public ssh key",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--node-count", "-c"],
          description: "Number of nodes to be created in the nodepool",
          args: { name: "node-count" },
        },
        {
          name: "--node-vm-size",
          description: "VM Size of the nodes in the nodepool",
          args: { name: "node-vm-size" },
        },
        {
          name: "--pod-cidr",
          description:
            "The CIDR notation IP ranges from which to assign pod IPs",
          args: { name: "pod-cidr" },
        },
        {
          name: "--service-cidr",
          description:
            "A CIDR notation IP range from which to assign service cluster IPs",
          args: { name: "service-cidr" },
        },
        {
          name: "--ssh-key-value",
          description:
            "Path to the ssh public key to be injected into the control plane",
          args: { name: "ssh-key-value" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--vnet-ids",
          description: "ARM resource ID(s) of the HybridAKS VNets",
          args: { name: "vnet-ids" },
        },
        {
          name: ["--zones", "-z"],
          description:
            "Comma-separated list of availability zones where control plane nodes will be placed",
          args: { name: "zones" },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes the Hybrid AKS provisioned cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the provisioned cluster",
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
      name: "get-upgrades",
      description:
        "Get the upgrade versions available for the Hybrid AKS provisioned cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the provisioned cluster",
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
      name: "list",
      description:
        "Lists the Hybrid AKS provisioned cluster in a resource group or in a subscription",
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
      name: "notice",
      description: "Output NOTICE file to user specified filepath",
      options: [
        {
          name: "--output-filepath",
          description: "Output filepath for NOTICE file",
          args: { name: "output-filepath" },
          isRequired: true,
        },
      ],
    },
    {
      name: "proxy",
      description: "Gets access to a connected Hybrid AKS provisioned cluster",
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
          description: "The name of the hybrid AKS provisioned cluster",
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
      description: "Gets the Hybrid AKS provisioned cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the provisioned cluster",
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
      description: "Updates the Hybrid AKS provisioned cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the provisioned cluster",
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
          name: ["--aad-admin-group-object-ids", "-i"],
          description:
            "Comma-separated list of aad group object IDs that will be set as cluster admin on the provisioned cluster",
          args: { name: "aad-admin-group-object-ids" },
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
      name: "upgrade",
      description: "Upgrades the Hybrid AKS provisioned cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the provisioned cluster",
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
          name: ["--kubernetes-version", "-k"],
          description: "The kubernetes version of the provisioned cluster",
          args: { name: "kubernetes-version" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--node-image-only",
          description: "Flag to upgrade only the node image",
        },
        { name: "--yes", description: "Flag to disable confirmation prompts" },
      ],
    },
    {
      name: "nodepool",
      description: "Manage nodepools in a hybridaks provisioned cluster",
      subcommands: [
        {
          name: "add",
          description: "Adds a nodepool in the Hybrid AKS provisioned cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the provisioned cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the nodepool",
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
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--node-count", "-c"],
              description: "Number of nodes to be created in the nodepool",
              args: { name: "node-count" },
            },
            {
              name: "--node-vm-size",
              description: "VM Size of the nodes in the nodepool",
              args: { name: "node-vm-size" },
            },
            {
              name: "--os-type",
              description:
                'OS Type for the nodes in the nodepool. Options: "Linux" | "Windows"',
              args: { name: "os-type" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--zones", "-z"],
              description:
                "Comma-separated list of availability zones where agent nodes will be placed",
              args: { name: "zones" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the nodepool in the Hybrid AKS provisioned cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the provisioned cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the nodepool",
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
            "Lists all the nodepools in the Hybrid AKS provisioned cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the provisioned cluster",
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
          name: "scale",
          description:
            "Scales the nodepool in the Hybrid AKS provisioned cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the provisioned cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the nodepool",
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
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--node-count", "-c"],
              description: "Number of nodes to scale to in the nodepool",
              args: { name: "node-count" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the nodepool in the Hybrid AKS provisioned cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the provisioned cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the nodepool",
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
    },
    {
      name: "vnet",
      description: "Manage virtual networks for hybridaks",
      subcommands: [
        {
          name: "create",
          description: "Creates the Hybrid AKS virtual network",
          options: [
            {
              name: "--custom-location",
              description:
                "Name or ID of the custom location to use for the virtual network",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the virtual network",
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
              name: "--aods-vnet-id",
              description: "ID of the network for AODS Infrastructure",
              args: { name: "aods-vnet-id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--moc-group",
              description:
                "Name of the MOC group containing the MOC network for HCI Infrastructure",
              args: { name: "moc-group" },
            },
            {
              name: "--moc-location",
              description:
                "Name of the MOC location containing the MOC group with the network for HCI Infrastructure",
              args: { name: "moc-location" },
            },
            {
              name: "--moc-vnet-name",
              description: "Name of the MOC network for HCI Infrastructure",
              args: { name: "moc-vnet-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--vsphere-segment-name",
              description:
                "Name of the VSphere segment for VMware Infrastructure",
              args: { name: "vsphere-segment-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the Hybrid AKS virtual network",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the virtual network",
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
            "Lists the Hybrid AKS virtual networks by resource group or subscription",
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
          description: "Gets the Hybrid AKS virtual network",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the virtual network",
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
    },
  ],
};

export default completion;
