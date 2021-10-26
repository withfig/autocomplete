const completionSpec: Fig.Spec = {
  name: "backup",
  description: "Manage Azure Backups",
  subcommands: [
    {
      name: "container",
      description:
        "Resource which houses items or applications to be protected",
      subcommands: [
        {
          name: "list",
          description:
            "List containers registered to a Recovery services vault",
        },
        {
          name: "register",
          description:
            "Register a Resource to the given Recovery Services Vault",
        },
        {
          name: "re-register",
          description: "Reset the registration details for a given container",
        },
        {
          name: "show",
          description:
            "Show details of a container registered to a Recovery services vault",
        },
        {
          name: "unregister",
          description:
            "Unregister a Backup Container to make the underlying 'resource' be protected by another vault",
        },
      ],
    },
    {
      name: "item",
      description:
        "An item which is already protected or backed up to an Azure Recovery services vault with an associated policy",
      subcommands: [
        {
          name: "list",
          description: "List all backed up items within a container",
        },
        {
          name: "set-policy",
          description:
            "Update the policy associated with this item. Use this to change policies of the backup item",
        },
        {
          name: "show",
          description: "Show details of a particular backed up item",
        },
      ],
    },
    {
      name: "job",
      description: "Entity which contains details of the job",
      subcommands: [
        {
          name: "list",
          description: "List all backup jobs of a Recovery Services vault",
        },
        { name: "show", description: "Show details of a particular job" },
        {
          name: "stop",
          description: "Suspend or terminate a currently running job",
        },
        {
          name: "wait",
          description:
            "Wait until either the job completes or the specified timeout value is reached",
        },
      ],
    },
    {
      name: "policy",
      description:
        "A backup policy defines when you want to take a backup and for how long you would retain each backup copy",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new policy for the given BackupManagementType and workloadType",
        },
        {
          name: "delete",
          description:
            "Delete a backup policy which doesn't have any associated backup items",
        },
        {
          name: "get-default-for-vm",
          description:
            "Get the default policy with default values to backup a VM",
        },
        {
          name: "list",
          description: "List all policies for a Recovery services vault",
        },
        {
          name: "list-associated-items",
          description: "List all items protected by a backup policy",
        },
        {
          name: "set",
          description: "Update the existing policy with the provided details",
        },
        { name: "show", description: "Show details of a particular policy" },
      ],
    },
    {
      name: "protectable-item",
      description:
        "Manage the item which is yet to be protected or backed up to an Azure Recovery services vault with an associated policy",
      subcommands: [
        {
          name: "initialize",
          description:
            "Trigger the discovery of any unprotected items of the given workload type in the given container",
        },
        {
          name: "list",
          description:
            "Retrieve all protectable items within a certain container or across all registered containers",
        },
        {
          name: "show",
          description:
            "Retrieve the specified protectable item within the given container",
        },
      ],
    },
    {
      name: "protection",
      description:
        "Manage protection of your items, enable protection or disable it, or take on-demand backups",
      subcommands: [
        {
          name: "auto-disable-for-azurewl",
          description: "Disable auto-protection for the specified item",
        },
        {
          name: "auto-enable-for-azurewl",
          description:
            "Automatically protect all existing unprotected DBs and any DB which will be added later with the given policy",
        },
        {
          name: "backup-now",
          description: "Perform an on-demand backup of a backed up item",
        },
        {
          name: "check-vm",
          description:
            "Find out whether the virtual machine is protected or not. If protected, it returns the recovery services vault ID, otherwise it returns empty",
        },
        {
          name: "disable",
          description:
            "Stop protecting a backed up item. Can retain the backed up data forever or choose to delete it",
        },
        {
          name: "enable-for-azurefileshare",
          description:
            "Start protecting a previously unprotected Azure File share within an Azure Storage account as per the specified policy to a Recovery services vault",
        },
        {
          name: "enable-for-azurewl",
          description:
            "Start protecting a previously unprotected workload within an Azure VM as per the specified policy to a Recovery services vault. Provide the workload details as a protectable item",
        },
        {
          name: "enable-for-vm",
          description:
            "Start protecting a previously unprotected Azure VM as per the specified policy to a Recovery services vault",
        },
        {
          name: "resume",
          description:
            "Resume backup for the associated backup item. Use this to change the policy associated with the backup item",
        },
        {
          name: "undelete",
          description:
            "Rehydrate an item from softdeleted state to stop protection with retained data state",
        },
        {
          name: "update-for-vm",
          description:
            "Update disk exclusion settings associated with a backed up VM item",
        },
      ],
    },
    {
      name: "recoveryconfig",
      description:
        "Manage recovery configuration of an Azure workload backed up item",
      subcommands: [
        {
          name: "show",
          description:
            "Construct the recovery configuration of an Azure workload backed up item",
        },
      ],
    },
    {
      name: "recoverypoint",
      description:
        "A snapshot of data at that point-of-time, stored in Recovery Services Vault, from which you can restore information",
      subcommands: [
        {
          name: "list",
          description: "List all recovery points of a backed up item",
        },
        {
          name: "move",
          description:
            "Move a particular recovery point of a backed up item from one tier to another tier",
        },
        {
          name: "show",
          description: "Shows details of a particular recovery point",
        },
        {
          name: "show-log-chain",
          description:
            "List the start and end points of the unbroken log chain(s) of the given backup item",
        },
      ],
    },
    {
      name: "restore",
      description:
        "Restore backed up items from recovery points in a Recovery Services vault",
      subcommands: [
        {
          name: "files",
          description: "Gives access to all files of a recovery point",
          subcommands: [
            {
              name: "mount-rp",
              description:
                "Download a script which mounts files of a recovery point",
            },
            {
              name: "unmount-rp",
              description: "Close access to the recovery point",
            },
          ],
        },
        {
          name: "restore-azurefiles",
          description:
            "Restore backed up Azure files within a file-share to the same file-share or another file-share in registered storage accounts",
        },
        {
          name: "restore-azurefileshare",
          description:
            "Restore backed up Azure file shares to the same file-share or another file-share in registered storage accounts",
        },
        {
          name: "restore-azurewl",
          description:
            "Restore backed up Azure Workloads in a Recovery services vault to another registered container or to the same container",
        },
        {
          name: "restore-disks",
          description:
            "Restore disks of the backed VM from the specified recovery point",
        },
      ],
    },
    {
      name: "vault",
      description:
        "Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies",
      subcommands: [
        {
          name: "backup-properties",
          description: "Properties of the Recovery Services vault",
          subcommands: [
            {
              name: "set",
              description:
                "Sets backup related properties of the Recovery Services vault",
            },
            {
              name: "show",
              description:
                "Gets backup related properties of the Recovery Services vault",
            },
          ],
        },
        { name: "create", description: "Create a new Recovery Services vault" },
        {
          name: "delete",
          description: "Delete an existing Recovery services vault",
        },
        {
          name: "encryption",
          description: "Encryption details of a Recovery Services Vault",
          subcommands: [
            {
              name: "show",
              description:
                "Show details of encryption properties of a Recovery Services Vault",
            },
            {
              name: "update",
              description:
                "Update encryption properties of a Recovery Services Vault",
            },
          ],
        },
        {
          name: "identity",
          description: "Identity details of a Recovery Services Vault",
          subcommands: [
            {
              name: "assign",
              description: "Assign Identities to Recovery Services vault",
            },
            {
              name: "remove",
              description: "Remove Identities of Recovery Services vault",
            },
            {
              name: "show",
              description: "Show Identities of Recovery Services vault",
            },
          ],
        },
        {
          name: "list",
          description: "List Recovery service vaults within a subscription",
        },
        {
          name: "show",
          description: "Show details of a particular Recovery service vault",
        },
      ],
    },
  ],
};

export default completionSpec;
