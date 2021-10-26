const completionSpec: Fig.Spec = {
  name: "disk-pool",
  description: "Manage Azure disk pool",
  subcommands: [
    { name: "create", description: "Create Disk pool" },
    { name: "delete", description: "Delete a Disk pool" },
    {
      name: "iscsi-target",
      description: "Manage iSCSI target with a Disk Pool",
      subcommands: [
        { name: "create", description: "Create an iSCSI Target" },
        { name: "delete", description: "Delete an iSCSI Target" },
        { name: "list", description: "Get iSCSI Targets in a Disk pool" },
        { name: "show", description: "Get an iSCSI Target" },
        { name: "update", description: "Update an iSCSI Target" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the disk-pool iscsi-target is met",
        },
      ],
    },
    {
      name: "list",
      description:
        "Gets a list of DiskPools in a resource group. And Gets a list of Disk Pools in a subscription",
    },
    {
      name: "list-outbound-network-dependency-endpoint",
      description:
        "Gets the network endpoints of all outbound dependencies of a Disk Pool",
    },
    {
      name: "list-skus",
      description: "Lists available Disk Pool Skus in an Azure location",
    },
    { name: "show", description: "Get a Disk pool" },
    { name: "start", description: "The operation to start a Disk Pool" },
    {
      name: "stop",
      description:
        "Shuts down the Disk Pool and releases the compute resources. You are not billed for the compute resources that this Disk Pool uses",
    },
    { name: "update", description: "Update a Disk pool" },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the disk-pool is met",
    },
  ],
};

export default completionSpec;
