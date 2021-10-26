const completionSpec: Fig.Spec = {
  name: "arcappliance",
  description: "Commands to manage an Appliance resource",
  subcommands: [
    {
      name: "create",
      description: "Command group for creation of Appliance",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to create HCI Appliance - must be done after Appliance has been deployed",
        },
        {
          name: "scvmm",
          description:
            "Command to create SCVMM Appliance - must be done Appliance has been deployed. e.g az arcappliance create scvmm --resource-group [REQUIRED] --config-file [REQUIRED] --kubeconfig [REQUIRED]",
        },
        {
          name: "vmware",
          description:
            "Command to create VMware Appliance - must be done Appliance has been deployed",
        },
      ],
    },
    {
      name: "createconfig",
      description:
        "Command group for creating configuration files for an Appliance",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to create Appliance configuration files on Azure Stack HCI",
        },
        {
          name: "scvmm",
          description:
            "Command to create Appliance configuration files on SCVMM",
        },
        {
          name: "vmware",
          description:
            "Command to create Appliance configuration files on VMware",
        },
      ],
    },
    {
      name: "delete",
      description:
        "Command group for deletion of an Appliance cluster and resource",
      subcommands: [
        { name: "hci", description: "Command to delete HCI Appliance" },
        {
          name: "scvmm",
          description:
            "Command to delete SCVMM Appliance. e.g az arcappliance delete scvmm --config-file [REQUIRED]",
        },
        { name: "vmware", description: "Command to delete VMware Appliance" },
      ],
    },
    {
      name: "deploy",
      description: "Command group for deployment of an Appliance cluster",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to deploy Appliance on Azure Stack HCI - must be done before Azure Resource creation",
        },
        {
          name: "scvmm",
          description:
            "Command to deploy Appliance on SCVMM - must be done before Azure Resource creation. e.g az arcappliance deploy scvmm --config-file [REQUIRED] --outfile [OPTIONAL]",
        },
        {
          name: "vmware",
          description:
            "Command to deploy VMware Appliance - must be done before Azure Resource creation",
        },
      ],
    },
    { name: "get-credentials", description: "Command to get credentials" },
    { name: "list", description: "Command to list Appliances" },
    {
      name: "logs",
      description: "Command group for collecting logs for an Appliance cluster",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to collect logs for an Appliance on Azure Stack HCI",
        },
        {
          name: "scvmm",
          description: "Command to collect logs for Arc Appliance on SCVMM",
        },
        {
          name: "vmware",
          description: "Command to collect logs for Appliance on VMware",
        },
      ],
    },
    {
      name: "prepare",
      description:
        "Command group for preparing an Appliance cluster and configuration for deployment",
      subcommands: [
        { name: "hci", description: "Command to prepare HCI Appliance" },
        {
          name: "scvmm",
          description: "Command to prepare SCVMM Arc Appliance",
        },
        { name: "vmware", description: "Command to prepare VMware Appliance" },
      ],
    },
    {
      name: "run",
      description:
        "Command group for running the Appliance creation operations",
      subcommands: [
        {
          name: "hci",
          description:
            "Command to run all operations for Appliance creation on Azure Stack HCI",
        },
        {
          name: "scvmm",
          description:
            "Command to run all operations for Arc Appliance creation on SCVMM",
        },
        {
          name: "vmware",
          description:
            "Command to run all operations for Appliance creation on VMware",
        },
      ],
    },
    { name: "show", description: "Command to get an Appliance resource" },
    {
      name: "validate",
      description:
        "Command group to validate Appliance cluster and configuration",
      subcommands: [
        {
          name: "hci",
          description: "Command to validate HCI Appliance Configuration",
        },
        {
          name: "scvmm",
          description: "Command to validate SCVMM Appliance Configuration",
        },
        {
          name: "vmware",
          description: "Command to validate VMware Appliance Configuration",
        },
      ],
    },
  ],
};

export default completionSpec;
