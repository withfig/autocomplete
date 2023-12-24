const completion: Fig.Spec = {
  name: "sapmonitor",
  description: "(PREVIEW) Manage Azure SAP Monitor",
  subcommands: [
    {
      name: "create",
      description: "Create a SAP Monitor",
      options: [
        {
          name: ["--hana-subnet", "--hdbsn"],
          description:
            "ARM ID of an Azure Subnet with access to the HANA instance",
          args: { name: "hana-subnet" },
          isRequired: true,
        },
        {
          name: ["--monitor-name", "-n"],
          description: "The name of the SAP monitor",
          args: { name: "monitor-name" },
          isRequired: true,
        },
        {
          name: "--region",
          description: "The region to create this SAP monitor on",
          args: { name: "region" },
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
          name: ["--disable_customer_analytics", "--dca"],
          description: "Disable sending analytics to Microsoft",
        },
        {
          name: ["--log-analytics-workspace-arm-id", "--lawsid"],
          description:
            "Existing log analytics workspace id to use for log monitoring",
          args: { name: "log-analytics-workspace-arm-id" },
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
      name: "delete",
      description: "Delete a SAP Monitor",
      options: [
        {
          name: ["--monitor-name", "-n"],
          description: "The name of the SAP monitor",
          args: { name: "monitor-name" },
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
    { name: "list", description: "List SAP Monitors" },
    {
      name: "show",
      description: "Get the details of a SAP Monitor",
      options: [
        {
          name: ["--monitor-name", "-n"],
          description: "The name of the SAP monitor",
          args: { name: "monitor-name" },
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
      description: "Updates the tags field of a SAP Monitor",
      options: [
        {
          name: ["--monitor-name", "-n"],
          description: "The name of the SAP monitor",
          args: { name: "monitor-name" },
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
          description: "Do not wait for the long-running operation to finish",
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
      name: "provider-instance",
      description: "Manage the provider instance for the SAP Monitor",
      subcommands: [
        {
          name: "create",
          description: "Create a new provider instance for the SAP Monitor",
          options: [
            {
              name: ["--monitor-name", "-n"],
              description: "The name of the SAP monitor",
              args: { name: "monitor-name" },
              isRequired: true,
            },
            {
              name: "--provider-instance-name",
              description: "The name of the provider instance",
              args: { name: "provider-instance-name" },
              isRequired: true,
            },
            {
              name: "--provider-instance-properties",
              description:
                "The properties of the provider instance (Should be of JSON format)",
              args: { name: "provider-instance-properties" },
              isRequired: true,
            },
            {
              name: "--provider-instance-type",
              description: "The type of the provider instance",
              args: { name: "provider-instance-type" },
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
              name: "--provider-instance-metadata",
              description:
                "The metadata of the provider instance (Should be of JSON format)",
              args: { name: "provider-instance-metadata" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a provider instance from the SAP Monitor",
          options: [
            {
              name: ["--monitor-name", "-n"],
              description: "The name of the SAP monitor",
              args: { name: "monitor-name" },
              isRequired: true,
            },
            {
              name: "--provider-instance-name",
              description: "The name of the provider instance",
              args: { name: "provider-instance-name" },
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
          description: "List provider instances for the SAP Monitor",
          options: [
            {
              name: ["--monitor-name", "-n"],
              description: "The name of the SAP monitor",
              args: { name: "monitor-name" },
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
          name: "show",
          description:
            "Get the details of a provider instance for the SAP Monitor",
          options: [
            {
              name: ["--monitor-name", "-n"],
              description: "The name of the SAP monitor",
              args: { name: "monitor-name" },
              isRequired: true,
            },
            {
              name: "--provider-instance-name",
              description: "The name of the provider instance",
              args: { name: "provider-instance-name" },
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
