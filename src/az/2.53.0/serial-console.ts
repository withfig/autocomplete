const completion: Fig.Spec = {
  name: "serial-console",
  description:
    "Connect to the Serial Console of a Linux/Windows Virtual Machine or VMSS Instance",
  subcommands: [
    {
      name: "connect",
      description: "Connect to Serial Console VM or VMSS Instance",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the Virtual Machine or Virtual Machine Scale Set",
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
          name: "--instance-id",
          description:
            "ID of VMSS instance. Not needed when connecting to the serialport of a Virtual Machine",
          args: { name: "instance-id" },
        },
      ],
    },
    {
      name: "disable",
      description:
        "Disable the serial console service for an entire subscription",
    },
    {
      name: "enable",
      description:
        "Enable the serial console service for an entire subscription",
    },
    {
      name: "send",
      description: "Send NMI/SysRq/Reset to a VM or VMSS Instance",
      subcommands: [
        {
          name: "nmi",
          description:
            "Send a Non-Maskable Interrupt (NMI) to a VM or VMSS Instance",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the Virtual Machine or Virtual Machine Scale Set",
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
              name: "--instance-id",
              description:
                "ID of VMSS instance. Not needed when connecting to the serialport of a Virtual Machine",
              args: { name: "instance-id" },
            },
          ],
        },
        {
          name: "reset",
          description: 'Perform a "hard" restart of the VM or VMSS Instance',
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the Virtual Machine or Virtual Machine Scale Set",
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
              name: "--instance-id",
              description:
                "ID of VMSS instance. Not needed when connecting to the serialport of a Virtual Machine",
              args: { name: "instance-id" },
            },
          ],
        },
        {
          name: "sysrq",
          description: "Send SysRq sequence to a VM or VMSS Instance",
          options: [
            {
              name: "--input",
              description:
                "Input key to send over serial console. Must be one character",
              args: { name: "input" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the Virtual Machine or Virtual Machine Scale Set",
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
              name: "--instance-id",
              description:
                "ID of VMSS instance. Not needed when connecting to the serialport of a Virtual Machine",
              args: { name: "instance-id" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
