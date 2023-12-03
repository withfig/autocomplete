const completion: Fig.Spec = {
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
          options: [
            {
              name: ["--location", "-l"],
              description: "Region in which the private cloud is present",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a private cloud in a region",
          options: [
            {
              name: ["--location", "-l"],
              description: "Region in which the private cloud is present",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name or ID of the CloudSimple private cloud",
              args: { name: "name" },
              isRequired: true,
            },
          ],
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
          options: [
            {
              name: ["--location", "-l"],
              description: "Region in which the private cloud is present",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-p"],
              description: "Name or ID of the CloudSimple private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a resource pool in a private cloud",
          options: [
            {
              name: ["--location", "-l"],
              description: "Region in which the private cloud is present",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "ID of the VMware resource pool in your CloudSimple Private Cloud. You can also pass the basename of the ID",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-p"],
              description: "Name or ID of the CloudSimple private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
          ],
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
          options: [
            {
              name: ["--location", "-l"],
              description: "Region in which the private cloud is present",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-p"],
              description: "Name or ID of the CloudSimple private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
            {
              name: ["--resource-pool", "-r"],
              description:
                "ID of the resource pool used to derive vSphere cluster which contains virtual networks. You can also pass the basename of the ID",
              args: { name: "resource-pool" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the details of a virtual network in a private cloud",
          options: [
            {
              name: ["--location", "-l"],
              description: "Region in which the private cloud is present",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "ID of the virtual network (vsphereId). You can also pass the basename of the ID",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-p"],
              description: "Name or ID of the CloudSimple private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "vm",
      description: "Manage VMware virtual machines",
      subcommands: [
        {
          name: "create",
          description: "Create a VMware virtual machine",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-p"],
              description: "Name or ID of the CloudSimple private cloud",
              args: { name: "private-cloud" },
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
              name: ["--resource-pool", "-r"],
              description:
                "ID of the VMware resource pool for this virtual machine in your CloudSimple Private Cloud. You can also pass the basename of the ID",
              args: { name: "resource-pool" },
              isRequired: true,
            },
            {
              name: "--template",
              description:
                "ID of the vSphere template from which this virtual machine will be created. You can also pass the basename of the ID",
              args: { name: "template" },
              isRequired: true,
            },
            {
              name: "--cores",
              description:
                "The number of CPU cores required. The default is taken from the vSphere VM template specified",
              args: { name: "cores" },
            },
            {
              name: "--disk",
              description: "Add or modify disks",
              args: { name: "disk" },
            },
            {
              name: "--expose-to-guest-vm",
              description:
                "Will expose full CPU virtualization to the guest operating system. The default is taken from the vSphere VM template specified",
              args: {
                name: "expose-to-guest-vm",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Region in which the private cloud is present. If default location is not configured, will default to the resource group's location",
              args: { name: "location" },
            },
            {
              name: "--nic",
              description: "Add or modify NICs",
              args: { name: "nic" },
            },
            {
              name: "--ram",
              description:
                "The amount of memory in MB. The default is taken from the vSphere VM template specified",
              args: { name: "ram" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a VMware virtual machine",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine",
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
            "List details of VMware virtual machines in the current subscription. If resource group is specified, only the details of virtual machines in that resource group would be listed",
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
          description: "Get the details of a VMware virtual machine",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine",
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
          name: "start",
          description: "Start a VMware virtual machine",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine",
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
          name: "stop",
          description: "Stop/Reboot/Suspend a VMware virtual machine",
          options: [
            {
              name: "--mode",
              description: "Stop mode",
              args: {
                name: "mode",
                suggestions: ["poweroff", "reboot", "shutdown", "suspend"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine",
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
          description: "Update the tags field of a VMware virtual machine",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the virtual machine",
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
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
          ],
        },
        {
          name: "disk",
          description: "Manage VMware virtual machine's disks",
          subcommands: [
            {
              name: "add",
              description: "Add disk to a VMware virtual machine",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--vm-name",
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--controller",
                  description:
                    "Id of the controller. Input 1000 for SCSI controller 0, and 15000 for SATA controller 0",
                  args: { name: "controller" },
                },
                {
                  name: "--mode",
                  description: "The disk independence mode",
                  args: {
                    name: "mode",
                    suggestions: [
                      "independent_nonpersistent",
                      "independent_persistent",
                      "persistent",
                    ],
                  },
                },
                {
                  name: "--size",
                  description: "The amount of disk size in KB",
                  args: { name: "size" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete disks from a VM",
              options: [
                {
                  name: "--disks",
                  description: "Names of disks",
                  args: { name: "disks" },
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
                  name: "--vm-name",
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description:
                "List details of disks available on a VMware virtual machine",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--vm-name",
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a VMware virtual machine's disk",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the disk",
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
                  name: "--vm-name",
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "nic",
          description:
            "Manage VMware virtual machine's Network Interface Cards",
          subcommands: [
            {
              name: "add",
              description: "Add NIC to a VMware virtual machine",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--virtual-network",
                  description:
                    "ID of the virtual network. You can also pass the basename of the ID",
                  args: { name: "virtual-network" },
                  isRequired: true,
                },
                {
                  name: "--vm-name",
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--adapter",
                  description: "The adapter for the NIC",
                  args: {
                    name: "adapter",
                    suggestions: [
                      "E1000",
                      "E1000E",
                      "PCNET32",
                      "VMXNET",
                      "VMXNET2",
                      "VMXNET3",
                    ],
                  },
                },
                {
                  name: "--power-on-boot",
                  description: "Will power on the NIC at boot time",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete NICs from a VM",
              options: [
                {
                  name: "--nics",
                  description: "Names of NICs",
                  args: { name: "nics" },
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
                  name: "--vm-name",
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description:
                "List details of NICs available on a VMware virtual machine",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--vm-name",
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a VMware virtual machine's NIC",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the NIC",
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
                  name: "--vm-name",
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
          ],
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
          options: [
            {
              name: ["--location", "-l"],
              description: "Region in which the private cloud is present",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-p"],
              description: "Name or ID of the CloudSimple private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
            {
              name: ["--resource-pool", "-r"],
              description:
                "ID of the VMware resource pool in your CloudSimple Private Cloud. You can also pass the basename of the ID",
              args: { name: "resource-pool" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the details of a VMware virtual machines template in a private cloud",
          options: [
            {
              name: ["--location", "-l"],
              description: "Region in which the private cloud is present",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "ID of the vSphere virtual machine template. You can also pass the basename of the ID",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-p"],
              description: "Name or ID of the CloudSimple private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
