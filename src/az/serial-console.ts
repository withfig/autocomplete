const completionSpec: Fig.Spec = {
  name: "serial-console",
  description:
    "Connent to the Serial Console of a Linux/Windows Virtual Machine or VMSS Instance",
  subcommands: [
    {
      name: "connect",
      description: "Connect to Serial Console VM or VMSS Instance",
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
        },
        {
          name: "reset",
          description: 'Perform a "hard" restart of the VM or VMSS Instance',
        },
        {
          name: "sysrq",
          description: "Send SysRq sequence to a VM or VMSS Instance",
        },
      ],
    },
  ],
};

export default completionSpec;
