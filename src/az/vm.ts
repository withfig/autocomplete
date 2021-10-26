const completionSpec: Fig.Spec = {
  name: "vm",
  description: "Manage Linux or Windows virtual machines",
  subcommands: [
    {
      name: "aem",
      description: "Manage Azure Enhanced Monitoring Extension for SAP",
      subcommands: [
        {
          name: "delete",
          description: "Remove Azure Enhanced Monitoring Extension",
        },
        {
          name: "set",
          description: "Configure Azure Enhanced Monitoring Extension",
        },
        {
          name: "verify",
          description:
            "Verify Azure Enhanced Monitoring Extensions configured correctly",
        },
      ],
    },
    { name: "assess-patches", description: "Assess patches on a VM" },
    { name: "auto-shutdown", description: "Manage auto-shutdown for VM" },
    {
      name: "availability-set",
      description: "Group resources into availability sets",
      subcommands: [
        {
          name: "convert",
          description:
            "Convert an Azure Availability Set to contain VMs with managed disks",
        },
        { name: "create", description: "Create an Azure Availability Set" },
        { name: "delete", description: "Delete an availability set" },
        { name: "list", description: "List availability sets" },
        {
          name: "list-sizes",
          description: "List VM sizes for an availability set",
        },
        {
          name: "show",
          description: "Get information for an availability set",
        },
        { name: "update", description: "Update an Azure Availability Set" },
      ],
    },
    {
      name: "boot-diagnostics",
      description: "Troubleshoot the startup of an Azure Virtual Machine",
      subcommands: [
        {
          name: "disable",
          description: "Disable the boot diagnostics on a VM",
        },
        { name: "enable", description: "Enable the boot diagnostics on a VM" },
        {
          name: "get-boot-log",
          description: "Get the boot diagnostics log from a VM",
        },
        {
          name: "get-boot-log-uris",
          description:
            "Get SAS URIs for a virtual machine's boot diagnostic logs",
        },
      ],
    },
    { name: "capture", description: "Capture information for a stopped VM" },
    {
      name: "convert",
      description: "Convert a VM with unmanaged disks to use managed disks",
    },
    { name: "create", description: "Create an Azure Virtual Machine" },
    { name: "deallocate", description: "Deallocate a VM" },
    { name: "delete", description: "Delete a VM" },
    {
      name: "diagnostics",
      description: "Configure the Azure Virtual Machine diagnostics extension",
      subcommands: [
        {
          name: "get-default-config",
          description: "Get the default configuration settings for a VM",
        },
        {
          name: "set",
          description: "Configure the Azure VM diagnostics extension",
        },
      ],
    },
    {
      name: "disk",
      description: "Manage the managed data disks attached to a VM",
      subcommands: [
        {
          name: "attach",
          description:
            "Attach a managed persistent disk to a VM. Please note that --ids only supports one disk",
        },
        { name: "detach", description: "Detach a managed disk from a VM" },
      ],
    },
    {
      name: "encryption",
      description: "Manage encryption of VM disks",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable disk encryption on the OS disk and/or data disks. Decrypt mounted disks",
        },
        {
          name: "enable",
          description:
            "Enable disk encryption on the OS disk and/or data disks. Encrypt mounted disks",
        },
        { name: "show", description: "Show encryption status" },
      ],
    },
    {
      name: "extension",
      description: "Manage extensions on VMs",
      subcommands: [
        { name: "delete", description: "Remove an extension attached to a VM" },
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
              description: "List the names of available extensions",
            },
            {
              name: "list-versions",
              description: "List the versions for available extensions",
            },
            {
              name: "show",
              description: "Display information for an extension",
            },
          ],
        },
        { name: "list", description: "List the extensions attached to a VM" },
        { name: "set", description: "Set extensions for a VM" },
        {
          name: "show",
          description: "Display information about extensions attached to a VM",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a virtual machine extension is met",
        },
      ],
    },
    {
      name: "generalize",
      description:
        "Mark a VM as generalized, allowing it to be imaged for multiple deployments",
    },
    {
      name: "get-instance-view",
      description: "Get instance information about a VM",
    },
    {
      name: "host",
      description: "Manage Dedicated Hosts for Virtual Machines",
      subcommands: [
        { name: "create", description: "Create a dedicated host" },
        { name: "delete", description: "Delete a dedicated host" },
        {
          name: "get-instance-view",
          description: "Get instance information about a dedicated host",
        },
        {
          name: "group",
          description: "Manage Dedicated Host Groups",
          subcommands: [
            { name: "create", description: "Create a dedicated host group" },
            { name: "delete", description: "Delete a dedicated host group" },
            {
              name: "get-instance-view",
              description: "Get instance view of a dedicated host group",
            },
            { name: "list", description: "List dedicated host groups" },
            {
              name: "show",
              description: "Get the details of a dedicated host group",
            },
            { name: "update", description: "Update a dedicated host group" },
          ],
        },
        { name: "list", description: "List dedicated hosts" },
        { name: "show", description: "Get the details of a dedicated host" },
        { name: "update", description: "Update a dedicated host" },
      ],
    },
    {
      name: "identity",
      description: "Manage service identities of a VM",
      subcommands: [
        {
          name: "assign",
          description: "Enable managed service identity on a VM",
        },
        {
          name: "remove",
          description: "Remove managed service identities from a VM",
        },
        { name: "show", description: "Display VM's managed identity info" },
      ],
    },
    {
      name: "image",
      description: "Information on available virtual machine images",
      subcommands: [
        {
          name: "accept-terms",
          description:
            "Accept Azure Marketplace term so that the image can be used to create VMs",
        },
        {
          name: "list",
          description:
            "List the VM/VMSS images available in the Azure Marketplace",
        },
        {
          name: "list-offers",
          description:
            "List the VM image offers available in the Azure Marketplace",
        },
        {
          name: "list-publishers",
          description:
            "List the VM image publishers available in the Azure Marketplace",
        },
        {
          name: "list-skus",
          description:
            "List the VM image SKUs available in the Azure Marketplace",
        },
        {
          name: "show",
          description:
            "Get the details for a VM image available in the Azure Marketplace",
        },
        {
          name: "terms",
          description: "Manage Azure Marketplace image terms",
          subcommands: [
            {
              name: "accept",
              description:
                "Accept Azure Marketplace image terms so that the image can be used to create VMs",
            },
            {
              name: "cancel",
              description: "Cancel Azure Marketplace image terms",
            },
            {
              name: "show",
              description: "Get the details of Azure Marketplace image terms",
            },
          ],
        },
      ],
    },
    { name: "install-patches", description: "Install patches on a VM" },
    { name: "list", description: "List details of Virtual Machines" },
    {
      name: "list-ip-addresses",
      description: "List IP addresses associated with a VM",
    },
    { name: "list-sizes", description: "List available sizes for VMs" },
    {
      name: "list-skus",
      description: "Get details for compute-related resource SKUs",
    },
    {
      name: "list-usage",
      description: "List available usage resources for VMs",
    },
    {
      name: "list-vm-resize-options",
      description: "List available resizing options for VMs",
    },
    {
      name: "monitor",
      description: "Manage monitor aspect for a vm",
      subcommands: [
        {
          name: "log",
          description: "Manage log analytics workspace for a vm",
          subcommands: [
            {
              name: "show",
              description:
                "Execute a query against the Log Analytics workspace linked with a VM",
            },
          ],
        },
        {
          name: "metrics",
          description: "Manage metrics for a vm",
          subcommands: [
            {
              name: "list-definitions",
              description: "List the metric definitions for a VM",
            },
            { name: "tail", description: "List the metric values for a VM" },
          ],
        },
      ],
    },
    {
      name: "nic",
      description: "Manage network interfaces. See also az network nic",
      subcommands: [
        { name: "add", description: "Add existing NICs to a VM" },
        { name: "list", description: "List the NICs available on a VM" },
        { name: "remove", description: "Remove NICs from a VM" },
        {
          name: "set",
          description: "Configure settings of a NIC attached to a VM",
        },
        {
          name: "show",
          description: "Display information for a NIC attached to a VM",
        },
      ],
    },
    {
      name: "open-port",
      description: "Opens a VM to inbound traffic on specified ports",
    },
    {
      name: "perform-maintenance",
      description: "The operation to perform maintenance on a virtual machine",
    },
    { name: "reapply", description: "Reapply VMs" },
    { name: "redeploy", description: "Redeploy an existing VM" },
    {
      name: "repair",
      description: "Auto repair commands to fix VMs",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new repair VM and attach the source VM's copied OS disk as a data disk",
        },
        {
          name: "list-scripts",
          description:
            "List available scripts. Located https://github.com/Azure/repair-script-library",
        },
        {
          name: "restore",
          description:
            "Replace source VM's OS disk with data disk from repair VM",
        },
        {
          name: "run",
          description:
            "Run verified scripts from GitHub on a VM. 'az vm repair list-scripts' to view available scripts",
        },
      ],
    },
    { name: "resize", description: "Update a VM's size" },
    { name: "restart", description: "Restart VMs" },
    {
      name: "run-command",
      description: "Manage run commands on a Virtual Machine",
      subcommands: [
        {
          name: "invoke",
          description: "Execute a specific run command on a vm",
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
    {
      name: "secret",
      description: "Manage VM secrets",
      subcommands: [
        { name: "add", description: "Add a secret to a VM" },
        {
          name: "format",
          description:
            "Transform secrets into a form that can be used by VMs and VMSSes",
        },
        { name: "list", description: "List secrets on a VM" },
        { name: "remove", description: "Remove a secret from a VM" },
      ],
    },
    { name: "show", description: "Get the details of a VM" },
    {
      name: "simulate-eviction",
      description: "Simulate the eviction of a Spot VM",
    },
    { name: "start", description: "Start a stopped VM" },
    { name: "stop", description: "Power off (stop) a running VM" },
    {
      name: "unmanaged-disk",
      description: "Manage the unmanaged data disks attached to a VM",
      subcommands: [
        {
          name: "attach",
          description: "Attach an unmanaged persistent disk to a VM",
        },
        { name: "detach", description: "Detach an unmanaged disk from a VM" },
        { name: "list", description: "List unmanaged disks of a VM" },
      ],
    },
    { name: "update", description: "Update the properties of a VM" },
    {
      name: "user",
      description: "Manage user accounts for a VM",
      subcommands: [
        { name: "delete", description: "Delete a user account from a VM" },
        {
          name: "reset-ssh",
          description: "Reset the SSH configuration on a VM",
        },
        { name: "update", description: "Update a user account" },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the VM is met",
    },
  ],
};

export default completionSpec;
