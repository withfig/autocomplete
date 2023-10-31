const completion: Fig.Spec = {
  name: "hpc-cache",
  description: "Commands to manage hpc cache",
  subcommands: [
    {
      name: "blob-storage-target",
      description: "Commands to create hpc cache blob storage target",
      subcommands: [
        {
          name: "add",
          description:
            "Create or update a blob Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again",
          options: [
            {
              name: "--cache-name",
              description: "Name of Cache",
              args: { name: "cache-name" },
              isRequired: true,
            },
            {
              name: "--container-name",
              description: "Name of target storage container",
              args: { name: "container-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the Storage Target",
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
              name: "--storage-account",
              description: "Resource ID or Name of target storage account",
              args: { name: "storage-account" },
              isRequired: true,
            },
            {
              name: ["--virtual-namespace-path", "-v"],
              description:
                "Path to create for this storage target in the client-facing virtual filesystem",
              args: { name: "virtual-namespace-path" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Create or update a blob Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again",
          options: [
            {
              name: "--cache-name",
              description: "Name of Cache",
              args: { name: "cache-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the Storage Target",
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
              name: "--container-name",
              description: "Name of target storage container",
              args: { name: "container-name" },
            },
            {
              name: "--storage-account",
              description: "Resource ID or Name of target storage account",
              args: { name: "storage-account" },
            },
            {
              name: ["--virtual-namespace-path", "-v"],
              description:
                "Path to create for this storage target in the client-facing virtual filesystem",
              args: { name: "virtual-namespace-path" },
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create or update a Cache",
      options: [
        {
          name: "--cache-size-gb",
          description: "The size of this Cache, in GB",
          args: { name: "cache-size-gb" },
          isRequired: true,
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: "--name",
          description: "Name of Cache",
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
          name: "--sku-name",
          description: "SKU name for this Cache",
          args: { name: "sku-name" },
          isRequired: true,
        },
        {
          name: "--subnet",
          description: "Subnet used for the Cache",
          args: { name: "subnet" },
          isRequired: true,
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description: "Schedule a Cache for deletion",
      options: [
        {
          name: "--name",
          description: "Name of Cache",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "flush",
      description:
        "Tell a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see errors returned until the flush is complete",
      options: [
        {
          name: "--name",
          description: "Name of Cache",
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
        "Return all Caches the user has access to under a resource group",
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
      description: "Return a Cache",
      options: [
        {
          name: "--name",
          description: "Name of Cache",
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
      description: "Tell a Stopped state Cache to transition to Active state",
      options: [
        {
          name: "--name",
          description: "Name of Cache",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "stop",
      description: "Tell an Active Cache to transition to Stopped state",
      options: [
        {
          name: "--name",
          description: "Name of Cache",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "update",
      description: "Update a Cache",
      options: [
        {
          name: "--name",
          description: "Name of Cache",
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
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "upgrade-firmware",
      description:
        "Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect",
      options: [
        {
          name: "--name",
          description: "Name of Cache",
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
      name: "wait",
      description: "Wait a hpc Cache to specified state",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of Cache",
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
    {
      name: "nfs-storage-target",
      description: "Commands to create hpc cache nfs storage target",
      subcommands: [
        {
          name: "add",
          description:
            "Create or update a nfs Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again",
          options: [
            {
              name: "--cache-name",
              description: "Name of Cache",
              args: { name: "cache-name" },
              isRequired: true,
            },
            {
              name: "--junction",
              description:
                "List of Cache namespace junctions to target for namespace associations.The sub parameters contains: (1) --namespace-path: Namespace path on a Cache for a Storage Target (2) --nfs-export: NFS export where targetPath exists (3) --target-path(Optional): Path in Storage Target to which namespacePath points",
              args: { name: "junction" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the Storage Target",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--nfs3-target",
              description:
                "IP address or host name of an NFSv3 host (e.g., 10.0.44.44)",
              args: { name: "nfs3-target" },
              isRequired: true,
            },
            {
              name: "--nfs3-usage-model",
              description:
                "Identify the primary usage model to be used for this Storage Target. You can use command az hpc-cache usage-model list to see the names of usage models. For more details about usage models, please refer to https://docs.microsoft.com/azure/hpc-cache/hpc-cache-add-storage?tabs=azure-cli#choose-a-usage-model",
              args: { name: "nfs3-usage-model" },
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
          description:
            "Create or update a nfs Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again",
          options: [
            {
              name: "--cache-name",
              description: "Name of Cache",
              args: { name: "cache-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the Storage Target",
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
              name: "--junction",
              description:
                "List of Cache namespace junctions to target for namespace associations.The sub parameters contains: (1) --namespace-path: Namespace path on a Cache for a Storage Target (2) --nfs-export: NFS export where targetPath exists (3) --target-path(Optional): Path in Storage Target to which namespacePath points",
              args: { name: "junction" },
            },
            {
              name: "--nfs3-target",
              description:
                "IP address or host name of an NFSv3 host (e.g., 10.0.44.44)",
              args: { name: "nfs3-target" },
            },
            {
              name: "--nfs3-usage-model",
              description:
                "Identify the primary usage model to be used for this Storage Target. You can use command az hpc-cache usage-model list to see the names of usage models. For more details about usage models, please refer to https://docs.microsoft.com/azure/hpc-cache/hpc-cache-add-storage?tabs=azure-cli#choose-a-usage-model",
              args: { name: "nfs3-usage-model" },
            },
          ],
        },
      ],
    },
    {
      name: "skus",
      description: "Commands to manage hpc cache skus",
      subcommands: [
        {
          name: "list",
          description:
            "Get the list of StorageCache.Cache SKUs available to this subscription",
        },
      ],
    },
    {
      name: "storage-target",
      description: "Commands to manage hpc cache storage target",
      subcommands: [
        {
          name: "list",
          description:
            "Return a list of Storage Targets for the specified Cache",
          options: [
            {
              name: "--cache-name",
              description: "Name of Cache",
              args: { name: "cache-name" },
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
          name: "remove",
          description:
            "Remove a Storage Target from a Cache. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual removal of the Storage Target may be delayed until the Cache is healthy again. Note that if the Cache has data to flush to the Storage Target, the data will be flushed before the Storage Target will be deleted",
          options: [
            {
              name: "--cache-name",
              description: "Name of Cache",
              args: { name: "cache-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the Storage Target",
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
          name: "show",
          description: "Return a Storage Target from a Cache",
          options: [
            {
              name: "--cache-name",
              description: "Name of Cache",
              args: { name: "cache-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the Storage Target",
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
      ],
    },
    {
      name: "usage-model",
      description: "Commands to manage hpc cache usage model",
      subcommands: [
        {
          name: "list",
          description:
            "Get the list of Cache Usage Models available to this subscription",
        },
      ],
    },
  ],
};

export default completion;
