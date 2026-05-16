const completion: Fig.Spec = {
  name: "snapshot",
  description:
    "Manage point-in-time copies of managed disks, native blobs, or other snapshots",
  subcommands: [
    {
      name: "create",
      description: "Create a snapshot",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the snapshot",
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
          name: "--accelerated-network",
          description:
            "Customers can set on Managed Disks or Snapshots to enable the accelerated networking if the OS disk image support",
          args: { name: "accelerated-network", suggestions: ["false", "true"] },
        },
        {
          name: "--architecture",
          description: "CPU architecture",
          args: { name: "architecture", suggestions: ["Arm64", "x64"] },
        },
        {
          name: "--copy-start",
          description:
            "Create snapshot by using a deep copy process, where the resource creation is considered complete only after all data has been copied from the source",
          args: { name: "copy-start", suggestions: ["false", "true"] },
        },
        {
          name: "--disk-access",
          description:
            "Name or ID of the disk access resource for using private endpoints on disks",
          args: { name: "disk-access" },
        },
        {
          name: "--disk-encryption-set",
          description:
            "Name or ID of disk encryption set that is used to encrypt the disk",
          args: { name: "disk-encryption-set" },
        },
        {
          name: "--edge-zone",
          description: "The name of edge zone",
          args: { name: "edge-zone" },
        },
        {
          name: "--encryption-type",
          description:
            "Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest",
          args: {
            name: "encryption-type",
            suggestions: [
              "EncryptionAtRestWithCustomerKey",
              "EncryptionAtRestWithPlatformAndCustomerKeys",
              "EncryptionAtRestWithPlatformKey",
            ],
          },
        },
        {
          name: "--for-upload",
          description:
            'Create the snapshot for uploading blobs later on through storage commands. Run "az snapshot grant-access --access-level Write" to retrieve the snapshot\'s SAS token',
          args: { name: "for-upload", suggestions: ["false", "true"] },
        },
        {
          name: "--hyper-v-generation",
          description:
            "The hypervisor generation of the Virtual Machine. Applicable to OS disks only",
          args: { name: "hyper-v-generation", suggestions: ["V1", "V2"] },
        },
        {
          name: "--incremental",
          description:
            "Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed",
          args: { name: "incremental", suggestions: ["false", "true"] },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. If location is not specified and no default location specified, location will be automatically set as same as the resource group",
          args: { name: "location" },
        },
        {
          name: "--network-access-policy",
          description: "Policy for accessing the disk via network",
          args: {
            name: "network-access-policy",
            suggestions: ["AllowAll", "AllowPrivate", "DenyAll"],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--public-network-access",
          description:
            "Customers can set on Managed Disks or Snapshots to control the export policy on the disk",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: ["--size-gb", "-z"],
          description:
            "Size in GB. Max size: 4095 GB (certain preview disks can be larger)",
          args: { name: "size-gb" },
        },
        {
          name: "--sku",
          description: "",
          args: {
            name: "sku",
            suggestions: ["Premium_LRS", "Standard_LRS", "Standard_ZRS"],
          },
        },
        {
          name: "--source",
          description:
            "Source to create the disk/snapshot from, including unmanaged blob uri, managed disk id or name, or snapshot id or name",
          args: { name: "source" },
        },
        {
          name: "--source-storage-account-id",
          description: "Used when source blob is in a different subscription",
          args: { name: "source-storage-account-id" },
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
      description: "Delete a snapshot",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--snapshot-name", "--name", "-n"],
          description:
            "The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters",
          args: { name: "snapshot-name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
          args: {
            name: "no-wait",
            suggestions: [
              "0",
              "1",
              "f",
              "false",
              "n",
              "no",
              "t",
              "true",
              "y",
              "yes",
            ],
          },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "grant-access",
      description: "Grant read access to a snapshot",
      options: [
        {
          name: "--duration-in-seconds",
          description: "Time duration in seconds until the SAS access expires",
          args: { name: "duration-in-seconds" },
          isRequired: true,
        },
        {
          name: "--access-level",
          description: "Access level",
          args: { name: "access-level", suggestions: ["Read", "Write"] },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the snapshot",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "list",
      description: "List snapshots under a resource group",
      options: [
        {
          name: "--max-items",
          description:
            "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
          args: { name: "max-items" },
        },
        {
          name: "--next-token",
          description:
            "Token to specify where to start paginating. This is the token value from a previously truncated response",
          args: { name: "next-token" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "revoke-access",
      description: "Revoke access to a snapshot",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--snapshot-name", "--name", "-n"],
          description: "The name of the snapshot",
          args: { name: "snapshot-name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
          args: {
            name: "no-wait",
            suggestions: [
              "0",
              "1",
              "f",
              "false",
              "n",
              "no",
              "t",
              "true",
              "y",
              "yes",
            ],
          },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "show",
      description: "Get information about a snapshot",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--snapshot-name", "--name", "-n"],
          description:
            "The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters",
          args: { name: "snapshot-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a snapshot",
      options: [
        {
          name: "--accelerated-network",
          description:
            "Customers can set on Managed Disks or Snapshots to enable the accelerated networking if the OS disk image support",
          args: { name: "accelerated-network", suggestions: ["false", "true"] },
        },
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--architecture",
          description: "CPU architecture",
          args: { name: "architecture", suggestions: ["Arm64", "x64"] },
        },
        {
          name: "--disk-access",
          description:
            "Name or ID of the disk access resource for using private endpoints on disks",
          args: { name: "disk-access" },
        },
        {
          name: "--disk-encryption-set",
          description:
            "Name or ID of disk encryption set that is used to encrypt the disk",
          args: { name: "disk-encryption-set" },
        },
        {
          name: "--encryption-type",
          description:
            "Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest",
          args: {
            name: "encryption-type",
            suggestions: [
              "EncryptionAtRestWithCustomerKey",
              "EncryptionAtRestWithPlatformAndCustomerKeys",
              "EncryptionAtRestWithPlatformKey",
            ],
          },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the snapshot",
          args: { name: "name" },
        },
        {
          name: "--network-access-policy",
          description: "Policy for accessing the disk via network",
          args: {
            name: "network-access-policy",
            suggestions: ["AllowAll", "AllowPrivate", "DenyAll"],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--public-network-access",
          description:
            "Customers can set on Managed Disks or Snapshots to control the export policy on the disk",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
          args: { name: "remove" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
        {
          name: "--sku",
          description: "",
          args: {
            name: "sku",
            suggestions: ["Premium_LRS", "Standard_LRS", "Standard_ZRS"],
          },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "wait",
      description: "Place the CLI in a waiting state until a condition is met",
      options: [
        {
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: ["--snapshot-name", "--name", "-n"],
          description:
            "The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters",
          args: { name: "snapshot-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--updated",
          description:
            "Wait until updated with provisioningState at 'Succeeded'",
        },
      ],
    },
  ],
};

export default completion;
