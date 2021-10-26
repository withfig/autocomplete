const completionSpec: Fig.Spec = {
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
        },
        {
          name: "update",
          description:
            "Create or update a blob Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again",
        },
      ],
    },
    { name: "create", description: "Create or update a Cache" },
    { name: "delete", description: "Schedule a Cache for deletion" },
    {
      name: "flush",
      description:
        "Tell a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see errors returned until the flush is complete",
    },
    {
      name: "list",
      description:
        "Return all Caches the user has access to under a resource group",
    },
    {
      name: "nfs-storage-target",
      description: "Commands to create hpc cache nfs storage target",
      subcommands: [
        {
          name: "add",
          description:
            "Create or update a nfs Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again",
        },
        {
          name: "update",
          description:
            "Create or update a nfs Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again",
        },
      ],
    },
    { name: "show", description: "Return a Cache" },
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
      name: "start",
      description: "Tell a Stopped state Cache to transition to Active state",
    },
    {
      name: "stop",
      description: "Tell an Active Cache to transition to Stopped state",
    },
    {
      name: "storage-target",
      description: "Commands to manage hpc cache storage target",
      subcommands: [
        {
          name: "list",
          description:
            "Return a list of Storage Targets for the specified Cache",
        },
        {
          name: "remove",
          description:
            "Remove a Storage Target from a Cache. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual removal of the Storage Target may be delayed until the Cache is healthy again. Note that if the Cache has data to flush to the Storage Target, the data will be flushed before the Storage Target will be deleted",
        },
        { name: "show", description: "Return a Storage Target from a Cache" },
      ],
    },
    { name: "update", description: "Update a Cache" },
    {
      name: "upgrade-firmware",
      description:
        "Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect",
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
    { name: "wait", description: "Wait a hpc Cache to specified state" },
  ],
};

export default completionSpec;
