const completionSpec: Fig.Spec = {
  name: "vmss",
  description:
    "Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS)",
  subcommands: [
    {
      name: "create",
      description: "Create an Azure Virtual Machine Scale Set",
    },
    { name: "deallocate", description: "Deallocate VMs within a VMSS" },
    { name: "delete", description: "Deletes a VM scale set" },
    { name: "delete-instances", description: "Delete VMs within a VMSS" },
    {
      name: "diagnostics",
      description:
        "Configure the Azure Virtual Machine Scale Set diagnostics extension",
      subcommands: [
        {
          name: "get-default-config",
          description:
            "Show the default config file which defines data to be collected",
        },
        { name: "set", description: "Enable diagnostics on a VMSS" },
      ],
    },
    {
      name: "disk",
      description: "Manage data disks of a VMSS",
      subcommands: [
        {
          name: "attach",
          description:
            "Attach managed data disks to a scale set or its instances",
        },
        {
          name: "detach",
          description:
            "Detach managed data disks from a scale set or its instances",
        },
      ],
    },
    {
      name: "encryption",
      description: "Manage encryption of VMSS",
      subcommands: [
        {
          name: "disable",
          description: "Disable the encryption on a VMSS with managed disks",
        },
        { name: "enable", description: "Encrypt a VMSS with managed disks" },
        { name: "show", description: "Show encryption status" },
      ],
    },
    {
      name: "extension",
      description: "Manage extensions on a VM scale set",
      subcommands: [
        { name: "delete", description: "Delete an extension from a VMSS" },
        {
          name: "image",
          description:
            "Find the available VM extensions for a subscription and region",
          subcommands: [
            {
              name: "list",
              description: "List the information on available extensions",
            },
            {
              name: "list-names",
              description:
                "Gets a list of virtual machine extension image types",
            },
            {
              name: "list-versions",
              description:
                "Gets a list of virtual machine extension image versions",
            },
            {
              name: "show",
              description: "Gets a virtual machine extension image",
            },
          ],
        },
        { name: "list", description: "List extensions associated with a VMSS" },
        {
          name: "set",
          description:
            "Add an extension to a VMSS or update an existing extension",
        },
        { name: "show", description: "Show details on a VMSS extension" },
        {
          name: "upgrade",
          description:
            "Upgrade all extensions for all VMSS instances to the latest version",
        },
      ],
    },
    { name: "get-instance-view", description: "View an instance of a VMSS" },
    {
      name: "get-os-upgrade-history",
      description: "Gets list of OS upgrades on a VM scale set instance",
    },
    {
      name: "identity",
      description: "Manage service identities of a VM scaleset",
      subcommands: [
        {
          name: "assign",
          description: "Enable managed service identity on a VMSS",
        },
        {
          name: "remove",
          description: "Remove user assigned identities from a VM scaleset",
        },
        {
          name: "show",
          description: "Display VM scaleset's managed identity info",
        },
      ],
    },
    { name: "list", description: "List VMSS" },
    {
      name: "list-instance-connection-info",
      description:
        "Get the IP address and port number used to connect to individual VM instances within a set",
    },
    {
      name: "list-instance-public-ips",
      description: "List public IP addresses of VM instances within a set",
    },
    {
      name: "list-instances",
      description: "Gets a list of all virtual machines in a VM scale sets",
    },
    {
      name: "list-skus",
      description:
        "Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU",
    },
    {
      name: "nic",
      description: "Manage network interfaces of a VMSS",
      subcommands: [
        {
          name: "list",
          description:
            "Gets all network interfaces in a virtual machine scale set",
        },
        {
          name: "list-vm-nics",
          description:
            "Gets information about all network interfaces in a virtual machine in a virtual machine scale set",
        },
        {
          name: "show",
          description:
            "Get the specified network interface in a virtual machine scale set",
        },
      ],
    },
    {
      name: "perform-maintenance",
      description:
        "Perform maintenance on one or more virtual machines in a VM scale set",
    },
    { name: "reimage", description: "Reimage VMs within a VMSS" },
    { name: "restart", description: "Restart VMs within a VMSS" },
    {
      name: "rolling-upgrade",
      description: "Manage rolling upgrades",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancels the current virtual machine scale set rolling upgrade",
        },
        {
          name: "get-latest",
          description:
            "Gets the status of the latest virtual machine scale set rolling upgrade",
        },
        {
          name: "start",
          description:
            "Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version",
        },
      ],
    },
    {
      name: "run-command",
      description: "Manage run commands on a Virtual Machine Scale Set",
      subcommands: [
        {
          name: "invoke",
          description:
            "Execute a specific run command on a Virtual Machine Scale Set instance",
        },
        {
          name: "list",
          description:
            "Lists all available run commands for a subscription in a location",
        },
        {
          name: "show",
          description:
            "Gets specific run command for a subscription in a location",
        },
      ],
    },
    { name: "scale", description: "Change the number of VMs within a VMSS" },
    {
      name: "set-orchestration-service-state",
      description:
        "Change ServiceState property for a given service within a VMSS",
    },
    { name: "show", description: "Get details on VMs within a VMSS" },
    {
      name: "simulate-eviction",
      description:
        "Simulate the eviction of a Spot virtual machine in a VM scale set",
    },
    { name: "start", description: "Start VMs within a VMSS" },
    { name: "stop", description: "Power off (stop) VMs within a VMSS" },
    {
      name: "update",
      description:
        "Update a VMSS. Run 'az vmss update-instances' command to roll out the changes to VMs if you have not configured upgrade policy",
    },
    { name: "update-instances", description: "Upgrade VMs within a VMSS" },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of a scale set is met",
    },
  ],
};

export default completionSpec;
