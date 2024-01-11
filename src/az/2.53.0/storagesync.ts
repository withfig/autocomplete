const completion: Fig.Spec = {
  name: "storagesync",
  description: "Manage Azure File Sync",
  subcommands: [
    {
      name: "create",
      description: "Create a new storage sync service",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of storage sync service",
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
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
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
      description: "Delete a given storage sync service",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of storage sync service",
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
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description:
        "List all storage sync services in a resource group or a subscription",
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
      description: "Show the properties for a given storage sync service",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of storage sync service",
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
      name: "registered-server",
      description: "Manage registered server",
      subcommands: [
        {
          name: "delete",
          description:
            "Unregister an on-premises server from it's storage sync service",
          options: [
            {
              name: "--server-id",
              description: "GUID identifying the on-premises server",
              args: { name: "server-id" },
              isRequired: true,
            },
            {
              name: "--storage-sync-service",
              description: "The name or ID of storage sync service",
              args: { name: "storage-sync-service" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List all registered servers for a given storage sync service",
          options: [
            {
              name: "--storage-sync-service",
              description: "The name or ID of storage sync service",
              args: { name: "storage-sync-service" },
              isRequired: true,
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
          name: "show",
          description: "Show the properties for a given registered server",
          options: [
            {
              name: "--server-id",
              description: "GUID identifying the on-premises server",
              args: { name: "server-id" },
              isRequired: true,
            },
            {
              name: "--storage-sync-service",
              description: "The name or ID of storage sync service",
              args: { name: "storage-sync-service" },
              isRequired: true,
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a registered server is met",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--server-id",
              description: "GUID identifying the on-premises server",
              args: { name: "server-id" },
              isRequired: true,
            },
            {
              name: "--storage-sync-service-name",
              description: "Name of Storage Sync Service resource",
              args: { name: "storage-sync-service-name" },
              isRequired: true,
            },
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
    },
    {
      name: "sync-group",
      description: "Manage sync group",
      subcommands: [
        {
          name: "create",
          description: "Create a new sync group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of sync group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--storage-sync-service",
              description: "The name or ID of storage sync service",
              args: { name: "storage-sync-service" },
              isRequired: true,
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
          name: "delete",
          description: "Delete a given sync group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of sync group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--storage-sync-service",
              description: "The name or ID of storage sync service",
              args: { name: "storage-sync-service" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all sync groups in a storage sync service",
          options: [
            {
              name: "--storage-sync-service",
              description: "The name or ID of storage sync service",
              args: { name: "storage-sync-service" },
              isRequired: true,
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
          name: "show",
          description: "Show the properties for a given sync group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of sync group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--storage-sync-service",
              description: "The name or ID of storage sync service",
              args: { name: "storage-sync-service" },
              isRequired: true,
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
          name: "cloud-endpoint",
          description: "Manage cloud endpoint",
          subcommands: [
            {
              name: "create",
              description: "Create a new cloud endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of cloud endpoint",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--storage-sync-service",
                  description: "The name or ID of storage sync service",
                  args: { name: "storage-sync-service" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "The name of sync group",
                  args: { name: "sync-group-name" },
                  isRequired: true,
                },
                {
                  name: "--azure-file-share-name",
                  description: "The name of Azure file share",
                  args: { name: "azure-file-share-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--storage-account",
                  description: "The name or ID of the storage account",
                  args: { name: "storage-account" },
                },
                {
                  name: "--storage-account-tenant-id",
                  description:
                    "The id of the tenant that the storage account is in",
                  args: { name: "storage-account-tenant-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a given cloud endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of cloud endpoint",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--storage-sync-service",
                  description: "The name or ID of storage sync service",
                  args: { name: "storage-sync-service" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "The name of sync group",
                  args: { name: "sync-group-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all cloud endpoints in a sync group",
              options: [
                {
                  name: "--storage-sync-service",
                  description: "The name or ID of storage sync service",
                  args: { name: "storage-sync-service" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "The name of sync group",
                  args: { name: "sync-group-name" },
                  isRequired: true,
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
              name: "show",
              description: "Show the properties for a given cloud endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of cloud endpoint",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--storage-sync-service",
                  description: "The name or ID of storage sync service",
                  args: { name: "storage-sync-service" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "The name of sync group",
                  args: { name: "sync-group-name" },
                  isRequired: true,
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
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a cloud endpoint is met",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of cloud endpoint",
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
                  name: "--storage-sync-service-name",
                  description: "Name of Storage Sync Service resource",
                  args: { name: "storage-sync-service-name" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "Name of Sync Group resource",
                  args: { name: "sync-group-name" },
                  isRequired: true,
                },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
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
        },
        {
          name: "server-endpoint",
          description: "Manage server endpoint",
          subcommands: [
            {
              name: "create",
              description: "Create a new server endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of server endpoint",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--registered-server-id", "--server-id"],
                  description:
                    "The resource id or GUID of the registered server",
                  args: { name: "registered-server-id" },
                  isRequired: true,
                },
                {
                  name: "--server-local-path",
                  description: "The local path of the registered server",
                  args: { name: "server-local-path" },
                  isRequired: true,
                },
                {
                  name: "--storage-sync-service",
                  description: "The name or ID of storage sync service",
                  args: { name: "storage-sync-service" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "The name of sync group",
                  args: { name: "sync-group-name" },
                  isRequired: true,
                },
                {
                  name: "--cloud-tiering",
                  description:
                    "A switch to enable or disable cloud tiering. With cloud tiering, infrequently used or accessed files can be tiered to Azure Files",
                  args: { name: "cloud-tiering", suggestions: ["off", "on"] },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--offline-data-transfer",
                  description:
                    "A switch to enable or disable offline data transfer. With offline data transfer, you can use alternative means, like Azure Data Box, to transport large amounts of files into Azure without network",
                  args: {
                    name: "offline-data-transfer",
                    suggestions: ["off", "on"],
                  },
                },
                {
                  name: "--offline-data-transfer-share-name",
                  description:
                    "The name of Azure file share that is used to transfer data offline",
                  args: { name: "offline-data-transfer-share-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--tier-files-older-than-days",
                  description:
                    "The days that the files are older than will be tiered",
                  args: { name: "tier-files-older-than-days" },
                },
                {
                  name: "--volume-free-space-percent",
                  description:
                    "The amount of free space to reserve on the volume on which the server endpoint is located. For example, if volume free space is set to 50% on a volume that has a single server endpoint, roughly half the amount of data is tiered to Azure Files. Regardless of whether cloud tiering is enabled, your Azure file share always has a complete copy of the data in the sync group",
                  args: { name: "volume-free-space-percent" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a given server endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of server endpoint",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--storage-sync-service",
                  description: "The name or ID of storage sync service",
                  args: { name: "storage-sync-service" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "The name of sync group",
                  args: { name: "sync-group-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all server endpoints in a sync group",
              options: [
                {
                  name: "--storage-sync-service",
                  description: "The name or ID of storage sync service",
                  args: { name: "storage-sync-service" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "The name of sync group",
                  args: { name: "sync-group-name" },
                  isRequired: true,
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
              name: "show",
              description: "Show the properties for a given server endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of server endpoint",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--storage-sync-service",
                  description: "The name or ID of storage sync service",
                  args: { name: "storage-sync-service" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "The name of sync group",
                  args: { name: "sync-group-name" },
                  isRequired: true,
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
              name: "update",
              description: "Update the properties for a given server endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of server endpoint",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--storage-sync-service",
                  description: "The name or ID of storage sync service",
                  args: { name: "storage-sync-service" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "The name of sync group",
                  args: { name: "sync-group-name" },
                  isRequired: true,
                },
                {
                  name: "--cloud-tiering",
                  description:
                    "A switch to enable or disable cloud tiering. With cloud tiering, infrequently used or accessed files can be tiered to Azure Files",
                  args: { name: "cloud-tiering", suggestions: ["off", "on"] },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--offline-data-transfer",
                  description:
                    "A switch to enable or disable offline data transfer. With offline data transfer, you can use alternative means, like Azure Data Box, to transport large amounts of files into Azure without network",
                  args: {
                    name: "offline-data-transfer",
                    suggestions: ["off", "on"],
                  },
                },
                {
                  name: "--offline-data-transfer-share-name",
                  description:
                    "The name of Azure file share that is used to transfer data offline",
                  args: { name: "offline-data-transfer-share-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--tier-files-older-than-days",
                  description:
                    "The days that the files are older than will be tiered",
                  args: { name: "tier-files-older-than-days" },
                },
                {
                  name: "--volume-free-space-percent",
                  description:
                    "The amount of free space to reserve on the volume on which the server endpoint is located. For example, if volume free space is set to 50% on a volume that has a single server endpoint, roughly half the amount of data is tiered to Azure Files. Regardless of whether cloud tiering is enabled, your Azure file share always has a complete copy of the data in the sync group",
                  args: { name: "volume-free-space-percent" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a server endpoint is met",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of server endpoint",
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
                  name: "--storage-sync-service-name",
                  description: "Name of Storage Sync Service resource",
                  args: { name: "storage-sync-service-name" },
                  isRequired: true,
                },
                {
                  name: "--sync-group-name",
                  description: "Name of Sync Group resource",
                  args: { name: "sync-group-name" },
                  isRequired: true,
                },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
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
        },
      ],
    },
  ],
};

export default completion;
