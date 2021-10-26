const completionSpec: Fig.Spec = {
  name: "databoxedge",
  description: "Support data box edge device and management",
  subcommands: [
    {
      name: "alert",
      description: "Manage alert with databoxedge",
      subcommands: [
        {
          name: "list",
          description:
            "Get all the alerts for a Data Box Edge/Data Box Gateway device",
        },
        { name: "show", description: "Get an alert by name" },
      ],
    },
    {
      name: "bandwidth-schedule",
      description: "Manage bandwidth schedule with databoxedge",
      subcommands: [
        { name: "create", description: "Create a bandwidth schedule" },
        {
          name: "delete",
          description: "Delete the specified bandwidth schedule",
        },
        {
          name: "list",
          description:
            "Get all the bandwidth schedules for a Data Box Edge/Data Box Gateway device",
        },
        {
          name: "show",
          description: "Get the properties of the specified bandwidth schedule",
        },
        { name: "update", description: "Update a bandwidth schedule" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the databoxedge bandwidth-schedule is met",
        },
      ],
    },
    {
      name: "device",
      description: "Manage device with databoxedge",
      subcommands: [
        {
          name: "create",
          description: "Create a Data Box Edge/Data Box Gateway resource",
        },
        {
          name: "delete",
          description: "Delete the Data Box Edge/Data Box Gateway device",
        },
        {
          name: "download-update",
          description:
            "Download the updates on a Data Box Edge/Data Box Gateway device",
        },
        {
          name: "install-update",
          description:
            "Install the updates on the Data Box Edge/Data Box Gateway device",
        },
        {
          name: "list",
          description:
            "Get all the Data Box Edge/Data Box Gateway devices in a resource group or in a subscription",
        },
        {
          name: "scan-for-update",
          description:
            "Scan for updates on a Data Box Edge/Data Box Gateway device",
        },
        {
          name: "show",
          description:
            "Get the properties of the Data Box Edge/Data Box Gateway device",
        },
        {
          name: "show-update-summary",
          description:
            "Get information about the availability of updates based on the last scan of the device. It also gets information about any ongoing download or install jobs on the device",
        },
        {
          name: "update",
          description: "Modify a Data Box Edge/Data Box Gateway resource",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the databoxedge device is met",
        },
      ],
    },
    {
      name: "list-node",
      description:
        "Get all the nodes currently configured under this Data Box Edge device",
    },
    {
      name: "list-sku",
      description:
        "List all the available Skus in the region and information related to them",
    },
    {
      name: "order",
      description: "Manage order with databoxedge",
      subcommands: [
        { name: "create", description: "Create an order" },
        {
          name: "delete",
          description: "Delete the order related to the device",
        },
        {
          name: "list",
          description:
            "List all the orders related to a Data Box Edge/Data Box Gateway device",
        },
        { name: "show", description: "Get a specific order by name" },
        { name: "update", description: "Update an order" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the databoxedge order is met",
        },
      ],
    },
    {
      name: "show-job",
      description:
        "Get the details of a specified job on a Data Box Edge/Data Box Gateway device",
    },
  ],
};

export default completionSpec;
