const completionSpec: Fig.Spec = {
  name: "netappfiles",
  description: "Manage Azure NetApp Files (ANF) Resources",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure NetApp Files (ANF) Account Resources",
      subcommands: [
        {
          name: "ad",
          description:
            "Manage Azure NetApp Files (ANF) Account active directories",
          subcommands: [
            {
              name: "add",
              description: "Add an active directory to the account",
            },
            {
              name: "list",
              description: "List the active directories of an account",
            },
            {
              name: "remove",
              description: "Remove an active directory from the account",
            },
          ],
        },
        {
          name: "backup",
          description:
            "Manage Azure NetApp Files (ANF) Account Backup Resources",
          subcommands: [
            {
              name: "delete",
              description: "Delete Backup for a Netapp Files (ANF) Account",
            },
            {
              name: "list",
              description:
                "Get list of all Azure NetApp Files (ANF) Account Backups",
            },
            {
              name: "show",
              description: "Get Backup for a Netapp Files (ANF) Account",
            },
          ],
        },
        {
          name: "backup-policy",
          description:
            "Manage Azure NetApp Files (ANF) Backup Policy Resources",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new Azure NetApp Files (ANF) backup policy",
            },
            {
              name: "delete",
              description: "Delete the specified ANF backup policy",
            },
            {
              name: "list",
              description:
                "List the ANF backup policy for the specified account",
            },
            {
              name: "show",
              description: "Get the specified ANF backup policy",
            },
            {
              name: "update",
              description: "Update the specified ANF backup policy",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new Azure NetApp Files (ANF) account. Note that active directories are added using the subgroup commands",
        },
        { name: "delete", description: "Delete the specified ANF account" },
        { name: "list", description: "List ANF accounts" },
        {
          name: "set",
          description:
            "Sets the tags or the active directory details for a specified ANF account. Sets the active directory property to exactly what is provided. If none is provided then the active directory is removed, i.e. provide empty []",
        },
        { name: "show", description: "Get the specified ANF account" },
        {
          name: "update",
          description: "Set/modify the tags for a specified ANF account",
        },
      ],
    },
    {
      name: "mount-target",
      description: "Manage Azure NetApp Files (ANF) Mount Target Resources",
      subcommands: [
        {
          name: "list",
          description: "List the mount targets of an ANF volume",
        },
      ],
    },
    {
      name: "pool",
      description: "Manage Azure NetApp Files (ANF) Pool Resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new Azure NetApp Files (ANF) pool",
        },
        { name: "delete", description: "Delete the specified ANF pool" },
        {
          name: "list",
          description: "L:ist the ANF pools for the specified account",
        },
        { name: "show", description: "Get the specified ANF pool" },
        {
          name: "update",
          description: "Update the tags of the specified ANF pool",
        },
      ],
    },
    {
      name: "snapshot",
      description: "Manage Azure NetApp Files (ANF) Snapshot Resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new Azure NetApp Files (ANF) snapshot",
        },
        { name: "delete", description: "Delete the specified ANF snapshot" },
        { name: "list", description: "List the snapshots of an ANF volume" },
        {
          name: "policy",
          description:
            "Manage Azure NetApp Files (ANF) Snapshot Policy Resources",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new Azure NetApp Files (ANF) snapshot policy",
            },
            {
              name: "delete",
              description: "Delete the specified ANF snapshot policy",
            },
            {
              name: "list",
              description:
                "List the ANF snapshot policies for the specified account",
            },
            {
              name: "show",
              description: "Get the specified ANF snapshot policy",
            },
            {
              name: "update",
              description: "Update the specified ANF snapshot policy",
            },
            {
              name: "volumes",
              description:
                "Get the all ANF volumes associated with snapshot policy",
            },
          ],
        },
        { name: "show", description: "Get the specified ANF snapshot" },
        { name: "update", description: "Update a snapshot" },
      ],
    },
    {
      name: "vault",
      description: "Manage Azure NetApp Files (ANF) Vault Resources",
      subcommands: [
        { name: "list", description: "List the ANF vaults for NetApp Account" },
      ],
    },
    {
      name: "volume",
      description: "Manage Azure NetApp Files (ANF) Volume Resources",
      subcommands: [
        {
          name: "backup",
          description:
            "Manage Azure NetApp Files (ANF) Volume Backup Resources",
          subcommands: [
            {
              name: "create",
              description: "Create specified ANF volume backup",
            },
            { name: "delete", description: "Delete backup" },
            {
              name: "list",
              description: "List the ANF Backups for the specified volume",
            },
            {
              name: "restore-status",
              description:
                "Get backup restore status of the specified ANF Volume",
            },
            { name: "show", description: "Get the specified ANF Backup" },
            {
              name: "status",
              description: "Get backup status of the specified ANF Volume",
            },
            {
              name: "update",
              description:
                "Update the specified ANF backup with the values provided",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new Azure NetApp Files (ANF) volume. Export policies are applied with the subgroup commands but note that volumes are always created with a default export policy",
        },
        { name: "delete", description: "Delete the specified ANF volume" },
        {
          name: "export-policy",
          description: "Manage Azure NetApp Files (ANF) Volume export policies",
          subcommands: [
            {
              name: "add",
              description: "Add a new rule to the export policy for a volume",
            },
            {
              name: "list",
              description: "List the export policy rules for a volume",
            },
            {
              name: "remove",
              description:
                "Remove a rule from the export policy for a volume by rule index. The current rules can be obtained by performing the subgroup list command",
            },
          ],
        },
        {
          name: "list",
          description: "List the ANF Pools for the specified account",
        },
        {
          name: "pool-change",
          description: "Change pool for an Azure NetApp Files (ANF) volume",
        },
        {
          name: "replication",
          description:
            "Manage Azure NetApp Files (ANF) Volume replication operations",
          subcommands: [
            {
              name: "approve",
              description:
                "Authorize a volume as a replication destination for a specified source",
            },
            {
              name: "re-initialize",
              description:
                "Re-initialise a volume replication for the specified destination volume. The replication process is resumed from source to destination",
            },
            {
              name: "remove",
              description:
                "Delete a volume replication for the specified destination volume. The data replication objects of source and destination volumes will be removed",
            },
            {
              name: "resume",
              description:
                "Resync a volume replication for the specified destination volume. The replication process is resumed from source to destination",
            },
            {
              name: "status",
              description:
                "Get the replication status for the specified replication volume",
            },
            {
              name: "suspend",
              description:
                "Suspend/break a volume replication for the specified destination volume. The replication process is suspended until resumed or deleted",
            },
          ],
        },
        {
          name: "revert",
          description: "Revert a volume to one of its snapshots",
        },
        { name: "show", description: "Get the specified ANF volume" },
        {
          name: "update",
          description:
            "Update the specified ANF volume with the values provided. Unspecified values will remain unchanged. Export policies are amended/created with the subgroup commands",
        },
      ],
    },
  ],
};

export default completionSpec;
