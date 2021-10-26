const completionSpec: Fig.Spec = {
  name: "dataprotection",
  description: "Manage Data Protection",
  subcommands: [
    {
      name: "backup-instance",
      description: "Manage backup instance with dataprotection",
      subcommands: [
        { name: "adhoc-backup", description: "Trigger adhoc backup" },
        {
          name: "create",
          description: "Configure backup for a resource in a backup vault",
        },
        {
          name: "delete",
          description: "Delete a backup instance in a backup vault",
        },
        {
          name: "initialize",
          description:
            "Initialize JSON request body for configuring backup of a resource",
        },
        {
          name: "list",
          description: "Gets a backup instances belonging to a backup vault",
        },
        {
          name: "list-from-resourcegraph",
          description:
            "List backup instances across subscriptions, resource groups and vaults",
        },
        {
          name: "restore",
          description:
            "Restore backed up instances from recovery points in a backup vault",
          subcommands: [
            {
              name: "initialize-for-data-recovery",
              description:
                "Initialize restore request object to recover all backed up data in a backup vault",
            },
            {
              name: "initialize-for-data-recovery-as-files",
              description:
                "Initialize restore request object to recover all backed up data as files in a backup vault",
            },
            {
              name: "initialize-for-item-recovery",
              description:
                "Initialize restore request object to recover specified items of backed up data in a backup vault",
            },
            {
              name: "trigger",
              description: "Triggers restore for a BackupInstance",
            },
          ],
        },
        {
          name: "show",
          description: "Gets a backup instance with name in a backup vault",
        },
        {
          name: "update-policy",
          description: "Update backup policy associated with backup instance",
        },
        {
          name: "validate-for-backup",
          description:
            "Validate whether configure backup will be successful or not",
        },
        {
          name: "validate-for-restore",
          description: "Validates if Restore can be triggered for a DataSource",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the dataprotection backup-instance is met",
        },
      ],
    },
    {
      name: "backup-policy",
      description: "Manage backup policy with dataprotection",
      subcommands: [
        {
          name: "create",
          description: "Create a backup policy belonging to a backup vault",
        },
        {
          name: "delete",
          description: "Deletes a backup policy belonging to a backup vault",
        },
        {
          name: "get-default-policy-template",
          description:
            "Get default policy template for a given datasource type",
        },
        {
          name: "list",
          description:
            "Returns list of backup policies belonging to a backup vault",
        },
        {
          name: "retention-rule",
          description:
            "Create lifecycles and add or remove retention rules in a backup policy",
          subcommands: [
            {
              name: "create-lifecycle",
              description: "Create lifecycle for Azure Retention rule",
            },
            {
              name: "remove",
              description: "Remove existing retention rule in a backup policy",
            },
            {
              name: "set",
              description:
                "Add new retention rule or update existing retention rule",
            },
          ],
        },
        {
          name: "show",
          description: "Gets a backup policy belonging to a backup vault",
        },
        {
          name: "tag",
          description: "Create criterias and add or remove tag in policy",
          subcommands: [
            {
              name: "create-absolute-criteria",
              description: "Create absolute criteria",
            },
            {
              name: "create-generic-criteria",
              description: "Create generic criteria",
            },
            {
              name: "remove",
              description: "Remove existing tag from a backup policy",
            },
            {
              name: "set",
              description:
                "Add new tag or update existing tag of a backup policy",
            },
          ],
        },
        {
          name: "trigger",
          description: "Manage backup schedule of a backup policy",
          subcommands: [
            {
              name: "create-schedule",
              description: "Create backup schedule of a policy",
            },
            {
              name: "set",
              description: "Associate backup schedule to a backup policy",
            },
          ],
        },
      ],
    },
    {
      name: "backup-vault",
      description: "Manage backup vault with dataprotection",
      subcommands: [
        {
          name: "create",
          description:
            "Create a BackupVault resource belonging to a resource group",
        },
        {
          name: "delete",
          description: "Deletes a BackupVault resource from the resource group",
        },
        {
          name: "list",
          description:
            "Gets list of backup vault in a subscription or in a resource group",
        },
        {
          name: "show",
          description: "Returns a resource belonging to a resource group",
        },
        {
          name: "update",
          description:
            "Updates a BackupVault resource belonging to a resource group. For example, updating tags for a resource",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the dataprotection backup-vault is met",
        },
      ],
    },
    {
      name: "job",
      description: "Manage job with dataprotection",
      subcommands: [
        {
          name: "list",
          description: "Returns list of jobs belonging to a backup vault",
        },
        {
          name: "list-from-resourcegraph",
          description:
            "List backup jobs across subscriptions, resource groups and vaults",
        },
        { name: "show", description: "Gets a job with id in a backup vault" },
      ],
    },
    {
      name: "recovery-point",
      description: "Manage recovery point with dataprotection",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of Recovery Points for a DataSource in a vault",
        },
        {
          name: "show",
          description:
            "Gets a Recovery Point using recoveryPointId for a Datasource",
        },
      ],
    },
    {
      name: "restorable-time-range",
      description: "Manage restorable time range with dataprotection",
      subcommands: [{ name: "find", description: "" }],
    },
  ],
};

export default completionSpec;
