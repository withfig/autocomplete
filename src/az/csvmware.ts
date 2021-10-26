const completionSpec: Fig.Spec = {
  name: "csvmware",
  description: "Manage Azure VMware Solution by CloudSimple",
  subcommands: [
    {
      name: "private-cloud",
      description: "Manage VMware private clouds",
      subcommands: [
        {
          name: "list",
          description: "List details of private clouds in a region",
        },
        {
          name: "show",
          description: "Get the details of a private cloud in a region",
        },
      ],
    },
    {
      name: "resource-pool",
      description: "Manage VMware resource pools",
      subcommands: [
        {
          name: "list",
          description: "List details of resource pools in a private cloud",
        },
        {
          name: "show",
          description: "Get the details of a resource pool in a private cloud",
        },
      ],
    },
    {
      name: "virtual-network",
      description: "Manage virtual networks",
      subcommands: [
        {
          name: "list",
          description:
            "List details of available virtual networks in a private cloud",
        },
        {
          name: "show",
          description:
            "Get the details of a virtual network in a private cloud",
        },
      ],
    },
    {
      name: "vm",
      description: "Manage VMware virtual machines",
      subcommands: [
        { name: "create", description: "Create a VMware virtual machine" },
        { name: "delete", description: "Delete a VMware virtual machine" },
        {
          name: "disk",
          description: "Manage VMware virtual machine's disks",
          subcommands: [
            {
              name: "add",
              description: "Add disk to a VMware virtual machine",
            },
            { name: "delete", description: "Delete disks from a VM" },
            {
              name: "list",
              description:
                "List details of disks available on a VMware virtual machine",
            },
            {
              name: "show",
              description: "Get the details of a VMware virtual machine's disk",
            },
          ],
        },
        {
          name: "list",
          description:
            "List details of VMware virtual machines in the current subscription. If resource group is specified, only the details of virtual machines in that resource group would be listed",
        },
        {
          name: "nic",
          description:
            "Manage VMware virtual machine's Network Interface Cards",
          subcommands: [
            { name: "add", description: "Add NIC to a VMware virtual machine" },
            { name: "delete", description: "Delete NICs from a VM" },
            {
              name: "list",
              description:
                "List details of NICs available on a VMware virtual machine",
            },
            {
              name: "show",
              description: "Get the details of a VMware virtual machine's NIC",
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a VMware virtual machine",
        },
        { name: "start", description: "Start a VMware virtual machine" },
        {
          name: "stop",
          description: "Stop/Reboot/Suspend a VMware virtual machine",
        },
        {
          name: "update",
          description: "Update the tags field of a VMware virtual machine",
        },
      ],
    },
    {
      name: "vm-template",
      description: "Manage VMware virtual machine templates",
      subcommands: [
        {
          name: "list",
          description:
            "List details of VMware virtual machines templates in a private cloud",
        },
        {
          name: "show",
          description:
            "Get the details of a VMware virtual machines template in a private cloud",
        },
      ],
    },
  ],
};

export default completionSpec;
