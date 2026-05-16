const completion: Fig.Spec = {
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
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: [
                  "AzureIaasVM",
                  "AzureStorage",
                  "AzureWorkload",
                  "MAB",
                ],
              },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--use-secondary-region",
              description:
                "Use this flag to list containers in secondary region",
              args: { name: "use-secondary-region" },
            },
          ],
        },
        {
          name: "re-register",
          description: "Reset the registration details for a given container",
          options: [
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "MSSQL",
                  "SAPASE",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                ],
              },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "register",
          description:
            "Register a Resource to the given Recovery Services Vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description:
                "ID of the Azure Resource containing items to be protected by Azure Backup service. Currently, only Azure VM resource IDs are supported",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "MSSQL",
                  "SAPASE",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                ],
              },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of a container registered to a Recovery services vault",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: [
                  "AzureIaasVM",
                  "AzureStorage",
                  "AzureWorkload",
                  "MAB",
                ],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the container. You can use the backup container list command to get the name of a container",
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
              name: "--use-secondary-region",
              description:
                "Use this flag to show container in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "unregister",
          description:
            "Unregister a Backup Container to make the underlying 'resource' be protected by another vault",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: [
                  "AzureIaasVM",
                  "AzureStorage",
                  "AzureWorkload",
                  "MAB",
                ],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
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
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: [
                  "AzureIaasVM",
                  "AzureStorage",
                  "AzureWorkload",
                  "MAB",
                ],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--use-secondary-region",
              description: "Use this flag to list items in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "set-policy",
          description:
            "Update the policy associated with this item. Use this to change policies of the backup item",
          options: [
            {
              name: ["--policy-name", "-p"],
              description:
                "Name of the Backup policy. You can use the backup policy list command to get the name of a backup policy",
              args: { name: "policy-name" },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the backed up item. You can use the backup item list command to get the name of a backed up item",
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
              name: "--tenant-id",
              description:
                "ID of the tenant if the Resource Guard protecting the vault exists in a different tenant",
              args: { name: "tenant-id" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a particular backed up item",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: [
                  "AzureIaasVM",
                  "AzureStorage",
                  "AzureWorkload",
                  "MAB",
                ],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the backed up item. You can use the backup item list command to get the name of a backed up item",
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
              name: "--use-secondary-region",
              description: "Use this flag to show item in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
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
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: [
                  "AzureIaasVM",
                  "AzureStorage",
                  "AzureWorkload",
                  "MAB",
                ],
              },
            },
            {
              name: "--end-date",
              description: "The end date of the range in UTC (d-m-Y)",
              args: { name: "end-date" },
            },
            {
              name: "--operation",
              description: "User initiated operation",
              args: {
                name: "operation",
                suggestions: [
                  "Backup",
                  "ConfigureBackup",
                  "DeleteBackupData",
                  "DisableBackup",
                  "Restore",
                ],
              },
            },
            {
              name: "--start-date",
              description: "The start date of the range in UTC (d-m-Y)",
              args: { name: "start-date" },
            },
            {
              name: "--status",
              description: "Status of the Job",
              args: {
                name: "status",
                suggestions: [
                  "Cancelled",
                  "Completed",
                  "CompletedWithWarnings",
                  "Failed",
                  "InProgress",
                ],
              },
            },
            {
              name: "--use-secondary-region",
              description:
                "Use this flag to show recoverypoints in secondary region",
              args: { name: "use-secondary-region" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a particular job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the job. You can use the backup job list command to get the name of a job",
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
              name: "--use-secondary-region",
              description:
                "Use this flag to show recoverypoints in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "stop",
          description: "Suspend or terminate a currently running job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the job. You can use the backup job list command to get the name of a job",
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
              name: "--use-secondary-region",
              description:
                "Use this flag to show recoverypoints in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Wait until either the job completes or the specified timeout value is reached",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the job. You can use the backup job list command to get the name of a job",
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
              name: "--timeout",
              description: "Maximum time, in seconds, to wait before aborting",
              args: { name: "timeout" },
            },
            {
              name: "--use-secondary-region",
              description:
                "Use this flag to show recoverypoints in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
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
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Policy",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--policy",
              description:
                "JSON encoded policy definition. Use the show command with JSON output to obtain a policy object. Modify the values using a file editor and pass the object",
              args: { name: "policy" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a backup policy which doesn't have any associated backup items",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the backup policy. You can use the backup policy list command to get the name of a policy",
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "get-default-for-vm",
          description:
            "Get the default policy with default values to backup a VM",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all policies for a Recovery services vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: "--move-to-archive-tier",
              description:
                "Parameter that specifies whether to only list policies where archive tier move is enabled/disabled",
              args: {
                name: "move-to-archive-tier",
                suggestions: ["All", "Disabled", "Enabled"],
              },
            },
            {
              name: "--policy-sub-type",
              description:
                "Sub type of policies to be retrieved. To list standard backup policies, specify ‘Standard’ as the value of this parameter. To list enhanced backup policies for Azure VMs, specify ‘Enhanced’ as the value of this parameter",
              args: {
                name: "policy-sub-type",
                suggestions: ["Enhanced", "Standard"],
              },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "list-associated-items",
          description: "List all items protected by a backup policy",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the backup policy. You can use the backup policy list command to get the name of a policy",
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "set",
          description: "Update the existing policy with the provided details",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: "--fix-for-inconsistent-items",
              description:
                "Specify whether or not to retry Policy Update for failed items",
              args: {
                name: "fix-for-inconsistent-items",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Policy",
              args: { name: "name" },
            },
            {
              name: "--policy",
              description:
                "JSON encoded policy definition. Use the show command with JSON output to obtain a policy object. Modify the values using a file editor and pass the object",
              args: { name: "policy" },
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
              name: "--tenant-id",
              description:
                "ID of the tenant if the Resource Guard protecting the vault exists in a different tenant",
              args: { name: "tenant-id" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a particular policy",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the backup policy. You can use the backup policy list command to get the name of a policy",
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
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
          options: [
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "MSSQL",
                  "SAPASE",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                ],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "Retrieve all protectable items within a certain container or across all registered containers",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "MSSQL",
                  "SAPASE",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                ],
              },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--protectable-item-type",
              description:
                "Specify the type of items within the Resource which should be discovered and protected by Azure Backup. 'HANAInstance' and 'SAPHanaSystem' can be used interchangeably",
              args: {
                name: "protectable-item-type",
                suggestions: [
                  "HANAInstance",
                  "SAPHanaDatabase",
                  "SAPHanaSystem",
                  "SQLAG",
                  "SQLDatabase",
                  "SQLInstance",
                ],
              },
            },
            {
              name: "--server-name",
              description: "Parent Server name of the item",
              args: { name: "server-name" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Retrieve the specified protectable item within the given container",
          options: [
            {
              name: "--protectable-item-type",
              description:
                "Specify the type of items within the Resource which should be discovered and protected by Azure Backup. 'HANAInstance' and 'SAPHanaSystem' can be used interchangeably",
              args: {
                name: "protectable-item-type",
                suggestions: [
                  "HANAInstance",
                  "SAPHanaDatabase",
                  "SAPHanaSystem",
                  "SQLAG",
                  "SQLDatabase",
                  "SQLInstance",
                ],
              },
              isRequired: true,
            },
            {
              name: "--server-name",
              description: "Parent Server name of the item",
              args: { name: "server-name" },
              isRequired: true,
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "MSSQL",
                  "SAPASE",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                ],
              },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the protectable item",
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
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
          description:
            "Disable auto-protection for the specified protectable item",
          options: [
            {
              name: "--protectable-item-name",
              description:
                "Specify the resource name to be protected by Azure Backup service",
              args: { name: "protectable-item-name" },
              isRequired: true,
            },
            {
              name: "--protectable-item-type",
              description:
                "Specify the type of items within the Resource which should be discovered and protected by Azure Backup. 'HANAInstance' and 'SAPHanaSystem' can be used interchangeably",
              args: {
                name: "protectable-item-type",
                suggestions: [
                  "HANAInstance",
                  "SAPHanaDatabase",
                  "SAPHanaSystem",
                  "SQLAG",
                  "SQLDatabase",
                  "SQLInstance",
                ],
              },
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
              name: "--server-name",
              description: "Parent Server name of the item",
              args: { name: "server-name" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "auto-enable-for-azurewl",
          description:
            "Automatically protect all existing unprotected DBs and any DB which will be added later with the given policy",
          options: [
            {
              name: ["--policy-name", "-p"],
              description: "Name of the backup policy",
              args: { name: "policy-name" },
              isRequired: true,
            },
            {
              name: "--protectable-item-name",
              description:
                "Specify the resource name to be protected by Azure Backup service",
              args: { name: "protectable-item-name" },
              isRequired: true,
            },
            {
              name: "--protectable-item-type",
              description:
                "Specify the type of items within the Resource which should be discovered and protected by Azure Backup. 'HANAInstance' and 'SAPHanaSystem' can be used interchangeably",
              args: {
                name: "protectable-item-type",
                suggestions: [
                  "HANAInstance",
                  "SAPHanaDatabase",
                  "SAPHanaSystem",
                  "SQLAG",
                  "SQLDatabase",
                  "SQLInstance",
                ],
              },
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
              name: "--server-name",
              description: "Parent Server name of the item",
              args: { name: "server-name" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "backup-now",
          description: "Perform an on-demand backup of a backed up item",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: "--backup-type",
              description:
                "'Full, Differential, Log, CopyOnlyFull' for backup Item type 'MSSQL'. 'Full, Differential' for backup item type 'SAPHANA'",
              args: { name: "backup-type" },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--enable-compression",
              description: "Option to enable compression",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--retain-until",
              description:
                "The date until which this backed up copy will be available for retrieval, in UTC (d-m-Y). In case of VM and AzureFileShare a default value of 30 days is taken. For MSSQL workload, retain-until min value is 2 days and max value is 99 years for backup-type 'CopyOnlyFull'. For MSSQL and SAPHANA, retain-until min value is 45 days and max value is 99 years for backup-type 'Full'. For any other backup-type, retain-until value is overriden by Policy. If not specified, a default value of 30 days will be taken for backup-type 'CopyOnlyFull', and a value of 45 days for backup-type 'Full' and no default value for other backup types",
              args: { name: "retain-until" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "check-vm",
          description:
            "Find out whether the virtual machine is protected or not. If protected, it returns the recovery services vault ID, otherwise it returns empty",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--vm",
              description: "Name or ID of the Virtual Machine to be protected",
              args: { name: "vm" },
            },
          ],
        },
        {
          name: "disable",
          description:
            "Stop protecting a backed up item. Can retain the backed up data forever or choose to delete it",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--delete-backup-data",
              description:
                "Option to delete existing backed up data in the Recovery services vault",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: [
                "--retain-recovery-points-as-per-policy",
                "--retain-as-per-policy",
              ],
              description:
                "Switch parameter that specifies that existing recovery points should be retained for the duration specified by the backup policy",
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tenant-id",
              description:
                "ID of the tenant if the Resource Guard protecting the vault exists in a different tenant",
              args: { name: "tenant-id" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "enable-for-azurefileshare",
          description:
            "Start protecting a previously unprotected Azure File share within an Azure Storage account as per the specified policy to a Recovery services vault",
          options: [
            {
              name: "--azure-file-share",
              description: "Name of the Azure FileShare",
              args: { name: "azure-file-share" },
              isRequired: true,
            },
            {
              name: ["--policy-name", "-p"],
              description: "Name of the backup policy",
              args: { name: "policy-name" },
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
              description: "Name of the Storage Account of the FileShare",
              args: { name: "storage-account" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "enable-for-azurewl",
          description:
            "Start protecting a previously unprotected workload within an Azure VM as per the specified policy to a Recovery services vault. Provide the workload details as a protectable item",
          options: [
            {
              name: ["--policy-name", "-p"],
              description: "Name of the backup policy",
              args: { name: "policy-name" },
              isRequired: true,
            },
            {
              name: "--protectable-item-name",
              description:
                "Specify the resource name to be protected by Azure Backup service",
              args: { name: "protectable-item-name" },
              isRequired: true,
            },
            {
              name: "--protectable-item-type",
              description:
                "Specify the type of items within the Resource which should be discovered and protected by Azure Backup. 'HANAInstance' and 'SAPHanaSystem' can be used interchangeably",
              args: {
                name: "protectable-item-type",
                suggestions: [
                  "HANAInstance",
                  "SAPHanaDatabase",
                  "SAPHanaSystem",
                  "SQLAG",
                  "SQLDatabase",
                  "SQLInstance",
                ],
              },
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
              name: "--server-name",
              description: "Parent Server name of the item",
              args: { name: "server-name" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "enable-for-vm",
          description:
            "Start protecting a previously unprotected Azure VM as per the specified policy to a Recovery services vault",
          options: [
            {
              name: ["--policy-name", "-p"],
              description: "Name of the backup policy",
              args: { name: "policy-name" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--vm",
              description: "Name or ID of the Virtual Machine to be protected",
              args: { name: "vm" },
              isRequired: true,
            },
            {
              name: "--disk-list-setting",
              description:
                "Option to decide whether to include or exclude the disk or reset any previous settings to default behavior",
              args: {
                name: "disk-list-setting",
                suggestions: ["exclude", "include"],
              },
            },
            {
              name: "--diskslist",
              description: "List of disks to be excluded or included",
              args: { name: "diskslist" },
            },
            {
              name: "--exclude-all-data-disks",
              description: "Option to specify to backup OS disk only",
              args: {
                name: "exclude-all-data-disks",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "resume",
          description:
            "Resume backup for the associated backup item. Use this to change the policy associated with the backup item",
          options: [
            {
              name: ["--policy-name", "-p"],
              description: "Name of the backup policy",
              args: { name: "policy-name" },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "undelete",
          description:
            "Rehydrate an item from softdeleted state to stop protection with retained data state",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "update-for-vm",
          description:
            "Update disk exclusion settings associated with a backed up VM item",
          options: [
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--disk-list-setting",
              description:
                "Option to decide whether to include or exclude the disk or reset any previous settings to default behavior",
              args: {
                name: "disk-list-setting",
                suggestions: ["exclude", "include", "resetexclusionsettings"],
              },
            },
            {
              name: "--diskslist",
              description: "List of disks to be excluded or included",
              args: { name: "diskslist" },
            },
            {
              name: "--exclude-all-data-disks",
              description: "Option to specify to backup OS disk only",
              args: {
                name: "exclude-all-data-disks",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
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
          options: [
            {
              name: "--restore-mode",
              description: "Specify the restore mode",
              args: {
                name: "restore-mode",
                suggestions: [
                  "AlternateWorkloadRestore",
                  "OriginalWorkloadRestore",
                  "RestoreAsFiles",
                ],
              },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--filepath",
              description:
                "The path to which the DB should be restored as files",
              args: { name: "filepath" },
            },
            {
              name: "--from-full-rp-name",
              description: "Name of the starting Recovery point",
              args: { name: "from-full-rp-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
            },
            {
              name: "--log-point-in-time",
              description:
                "Specify the point-in-time (in UTC) which will be restored",
              args: { name: "log-point-in-time" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--rp-name", "-r"],
              description: "Name of the recovery point",
              args: { name: "rp-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-container-name",
              description:
                "The target container to which the DB recovery point should be restored",
              args: { name: "target-container-name" },
            },
            {
              name: "--target-instance-name",
              description:
                "Specify the target instance name for the restore operation",
              args: { name: "target-instance-name" },
            },
            {
              name: "--target-item-name",
              description:
                "Specify the target item name for the restore operation",
              args: { name: "target-item-name" },
            },
            {
              name: "--target-resource-group",
              description:
                "Specify the resource group of target item for Cross Region Restore. Default value will be same as --resource-group if not specified",
              args: { name: "target-resource-group" },
            },
            {
              name: "--target-server-name",
              description: "Specify the parent server name of the target item",
              args: { name: "target-server-name" },
            },
            {
              name: "--target-server-type",
              description:
                "Specify the type of the server which should be discovered",
              args: {
                name: "target-server-type",
                suggestions: [
                  "HANAInstance",
                  "SAPHanaDatabase",
                  "SAPHanaSystem",
                  "SQLAG",
                  "SQLDatabase",
                  "SQLInstance",
                ],
              },
            },
            {
              name: "--target-subscription-id",
              description:
                "Specify the subscription of the target item for Cross Subscription Restore. Defaulted to source subscription if not specified",
              args: { name: "target-subscription-id" },
            },
            {
              name: "--target-vault-name",
              description:
                "Specify the vault name of target item for Cross Region Restore. Default value will be same as --vault-name if not specified",
              args: { name: "target-vault-name" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "MSSQL",
                  "SAPASE",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                ],
              },
            },
          ],
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
          options: [
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
              isRequired: true,
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: "--end-date",
              description: "The end date of the range in UTC (d-m-Y)",
              args: { name: "end-date" },
            },
            {
              name: "--is-ready-for-move",
              description:
                "Use this flag to retrieve the recoverypoints that are ready to be moved to destination-tier",
              args: {
                name: "is-ready-for-move",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--recommended-for-archive",
              description:
                "Use this flag to retrieve recommended archivable recoverypoints",
              args: { name: "recommended-for-archive" },
            },
            {
              name: "--start-date",
              description: "The start date of the range in UTC (d-m-Y)",
              args: { name: "start-date" },
            },
            {
              name: "--target-tier",
              description:
                "The destination/target tier to which a particular recovery point has to be moved",
              args: { name: "target-tier", suggestions: ["VaultArchive"] },
            },
            {
              name: "--tier",
              description: "Provide 'tier' parameter to filter recovery points",
              args: {
                name: "tier",
                suggestions: [
                  "Snapshot",
                  "SnapshotAndVaultArchive",
                  "SnapshotAndVaultStandard",
                  "VaultArchive",
                  "VaultStandard",
                  "VaultStandardRehydrated",
                ],
              },
            },
            {
              name: "--use-secondary-region",
              description:
                "Use this flag to list recoverypoints in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "move",
          description:
            "Move a particular recovery point of a backed up item from one tier to another tier",
          options: [
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
              isRequired: true,
            },
            {
              name: "--destination-tier",
              description:
                "The destination/target tier to which a particular recovery point has to be moved",
              args: { name: "destination-tier", suggestions: ["VaultArchive"] },
              isRequired: true,
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the recovery point",
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
              name: "--source-tier",
              description:
                "The source tier from which a particular recovery point has to be moved",
              args: { name: "source-tier", suggestions: ["VaultStandard"] },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Shows details of a particular recovery point",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the recovery point. You can use the backup recovery point list command to get the name of a backed up item",
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
              name: "--use-secondary-region",
              description:
                "Use this flag to show recoverypoints in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
        {
          name: "show-log-chain",
          description:
            "List the start and end points of the unbroken log chain(s) of the given backup item",
          options: [
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
              isRequired: true,
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
            },
            {
              name: "--end-date",
              description: "The end date of the range in UTC (d-m-Y)",
              args: { name: "end-date" },
            },
            {
              name: "--start-date",
              description: "The start date of the range in UTC (d-m-Y)",
              args: { name: "start-date" },
            },
            {
              name: "--use-secondary-region",
              description:
                "Use this flag to list recoverypoints in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: "--workload-type",
              description:
                "Specify the type of applications within the Resource which should be discovered and protected by Azure Backup. 'MSSQL' and 'SQLDataBase' can be used interchangeably for SQL in Azure VM, as can 'SAPHANA' and 'SAPHanaDatabase' for SAP HANA in Azure VM",
              args: {
                name: "workload-type",
                suggestions: [
                  "AzureFileShare",
                  "MSSQL",
                  "SAPHANA",
                  "SAPHanaDatabase",
                  "SQLDataBase",
                  "VM",
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "restore",
      description:
        "Restore backed up items from recovery points in a Recovery Services vault",
      subcommands: [
        {
          name: "restore-azurefiles",
          description:
            "Restore backed up Azure files within a file-share to the same file-share or another file-share in registered storage accounts",
          options: [
            {
              name: "--resolve-conflict",
              description:
                "Instruction if there's a conflict with the restored data",
              args: {
                name: "resolve-conflict",
                suggestions: ["Overwrite", "Skip"],
              },
              isRequired: true,
            },
            {
              name: "--restore-mode",
              description: "Specify the restore mode",
              args: {
                name: "restore-mode",
                suggestions: ["AlternateLocation", "OriginalLocation"],
              },
              isRequired: true,
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--rp-name", "-r"],
              description: "Name of the recovery point",
              args: { name: "rp-name" },
            },
            {
              name: "--source-file-path",
              description:
                "The absolute path of the file, to be restored within the file share, as a string. This path is the same path used in the 'az storage file download' or 'az storage file show' CLI commands",
              args: { name: "source-file-path" },
            },
            {
              name: "--source-file-type",
              description: "Specify the source file type to be selected",
              args: {
                name: "source-file-type",
                suggestions: ["Directory", "File"],
              },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-file-share",
              description:
                "Destination file share to which content will be restored",
              args: { name: "target-file-share" },
            },
            {
              name: "--target-folder",
              description:
                "Destination folder to which content will be restored. To restore content to root , leave the folder name empty",
              args: { name: "target-folder" },
            },
            {
              name: "--target-storage-account",
              description:
                "Destination storage account to which content will be restored",
              args: { name: "target-storage-account" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "restore-azurefileshare",
          description:
            "Restore backed up Azure file shares to the same file-share or another file-share in registered storage accounts",
          options: [
            {
              name: "--resolve-conflict",
              description:
                "Instruction if there's a conflict with the restored data",
              args: {
                name: "resolve-conflict",
                suggestions: ["Overwrite", "Skip"],
              },
              isRequired: true,
            },
            {
              name: "--restore-mode",
              description: "Specify the restore mode",
              args: {
                name: "restore-mode",
                suggestions: ["AlternateLocation", "OriginalLocation"],
              },
              isRequired: true,
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--rp-name", "-r"],
              description: "Name of the recovery point",
              args: { name: "rp-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-file-share",
              description:
                "Destination file share to which content will be restored",
              args: { name: "target-file-share" },
            },
            {
              name: "--target-folder",
              description:
                "Destination folder to which content will be restored. To restore content to root , leave the folder name empty",
              args: { name: "target-folder" },
            },
            {
              name: ["--target-resource-group-name", "--target-rg-name"],
              description:
                "Resource group of the destination storage account to which the content will be restored, needed if it is different from the vault resource group",
              args: { name: "target-resource-group-name" },
            },
            {
              name: "--target-storage-account",
              description:
                "Destination storage account to which content will be restored",
              args: { name: "target-storage-account" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "restore-azurewl",
          description:
            "Restore backed up Azure Workloads in a Recovery services vault to another registered container or to the same container",
          options: [
            {
              name: "--recovery-config",
              description:
                "Specify the recovery configuration of a backed up item. The configuration object can be obtained from 'backup recoveryconfig show' command",
              args: { name: "recovery-config" },
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
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--rehydration-duration",
              description:
                "Set the maximum time, in days (between 10-30, both inclusive) for which the recovery point stays in hydrated state",
              args: { name: "rehydration-duration" },
            },
            {
              name: "--rehydration-priority",
              description:
                "The type of priority to be maintained while rehydrating a recovery point",
              args: {
                name: "rehydration-priority",
                suggestions: ["High", "Standard"],
              },
            },
            {
              name: "--use-secondary-region",
              description:
                "Use this flag to restore from a recoverypoint in secondary region",
              args: { name: "use-secondary-region" },
            },
          ],
        },
        {
          name: "restore-disks",
          description:
            "Restore disks of the backed VM from the specified recovery point",
          options: [
            {
              name: "--storage-account",
              description:
                "Name or ID of the staging storage account. The VM configuration will be restored to this storage account. See the help for --restore-to-staging-storage-account parameter for more info. The ID might be needed for cross-region restores where the storage account and vault are not on the same resource group. In order to get the ID, use the storage account show command as specified here (https://learn.microsoft.com/en-us/azure/storage/common/storage-account-get-info?tabs=azure-cli#get-the-resource-id-for-a-storage-account)",
              args: { name: "storage-account" },
              isRequired: true,
            },
            {
              name: ["--container-name", "-c"],
              description:
                "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
              args: { name: "container-name" },
            },
            {
              name: "--disk-encryption-set-id",
              description:
                "The disk encryption set id is used for encrypting restored disks. Please ensure access to disk encryption set id that is specified here",
              args: { name: "disk-encryption-set-id" },
            },
            {
              name: "--diskslist",
              description: "List of disks to be excluded or included",
              args: { name: "diskslist" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--item-name", "-i"],
              description: "Name of the backed up item",
              args: { name: "item-name" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Use this flag to specify whether a system-assigned managed identity should be used for the restore operation. MI option is not applicable for restoring unmanaged disks",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "ARM ID of the user-assigned managed identity to use for the restore operation. Specify a value for this parameter if you do not want to use a system-assigned MI for restoring the backup item",
              args: { name: "mi-user-assigned" },
            },
            {
              name: "--rehydration-duration",
              description:
                "Set the maximum time, in days (between 10-30, both inclusive) for which the recovery point stays in hydrated state",
              args: { name: "rehydration-duration" },
            },
            {
              name: "--rehydration-priority",
              description:
                "The type of priority to be maintained while rehydrating a recovery point",
              args: {
                name: "rehydration-priority",
                suggestions: ["High", "Standard"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--restore-as-unmanaged-disks",
              description:
                "Use this flag to specify to restore as unmanaged disks",
              args: {
                name: "restore-as-unmanaged-disks",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--restore-mode",
              description: "Specify the restore mode",
              args: {
                name: "restore-mode",
                suggestions: ["AlternateLocation", "OriginalLocation"],
              },
            },
            {
              name: "--restore-only-osdisk",
              description:
                "Use this flag to restore only OS disks of a backed up VM",
              args: {
                name: "restore-only-osdisk",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--restore-to-staging-storage-account",
              description:
                "Use this flag when you want disks to be restored to the staging storage account using the --storage-account parameter. When not specified, disks will be restored to their original storage accounts. Default: false",
              args: {
                name: "restore-to-staging-storage-account",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--rp-name", "-r"],
              description: "Name of the recovery point",
              args: { name: "rp-name" },
            },
            {
              name: "--storage-account-resource-group",
              description:
                "Name of the resource group which contains the storage account. Default value will be same as --resource-group if not specified",
              args: { name: "storage-account-resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--target-resource-group", "-t"],
              description:
                "Use this to specify the target resource group in which the restored disks will be saved",
              args: { name: "target-resource-group" },
            },
            {
              name: "--target-subnet-name",
              description:
                "Name of the subnet in which the target VM should be created, in the case of Alternate Location restore a new VM",
              args: { name: "target-subnet-name" },
            },
            {
              name: "--target-subscription-id",
              description:
                "ID of the subscription to which the resource should be restored",
              args: { name: "target-subscription-id" },
            },
            {
              name: "--target-vm-name",
              description:
                "Name of the VM to which the data should be restored, in the case of Alternate Location restore to a new VM",
              args: { name: "target-vm-name" },
            },
            {
              name: "--target-vnet-name",
              description:
                "Name of the VNet in which the target VM should be created, in the case of Alternate Location restore to a new VM",
              args: { name: "target-vnet-name" },
            },
            {
              name: "--target-vnet-resource-group",
              description:
                "Name of the resource group which contains the target VNet, in the case of Alternate Location restore to a new VM",
              args: { name: "target-vnet-resource-group" },
            },
            {
              name: "--target-zone",
              description:
                "A primary region currently can have three Azure availability zones. Use this argument to specify the target zone number while doing Cross Zonal Restore",
              args: { name: "target-zone", suggestions: ["1", "2", "3"] },
            },
            {
              name: "--use-secondary-region",
              description:
                "Use this flag to restore from a recoverypoint in secondary region",
              args: { name: "use-secondary-region" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "Name of the Recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "files",
          description: "Gives access to all files of a recovery point",
          subcommands: [
            {
              name: "mount-rp",
              description:
                "Download a script which mounts files of a recovery point",
              options: [
                {
                  name: ["--container-name", "-c"],
                  description:
                    "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
                  args: { name: "container-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--item-name", "-i"],
                  description: "Name of the backed up item",
                  args: { name: "item-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rp-name", "-r"],
                  description: "Name of the recovery point",
                  args: { name: "rp-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--vault-name", "-v"],
                  description: "Name of the Recovery services vault",
                  args: { name: "vault-name" },
                },
              ],
            },
            {
              name: "unmount-rp",
              description: "Close access to the recovery point",
              options: [
                {
                  name: ["--container-name", "-c"],
                  description:
                    "Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required",
                  args: { name: "container-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--item-name", "-i"],
                  description: "Name of the backed up item",
                  args: { name: "item-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rp-name", "-r"],
                  description: "Name of the recovery point",
                  args: { name: "rp-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--vault-name", "-v"],
                  description: "Name of the Recovery services vault",
                  args: { name: "vault-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "vault",
      description:
        "Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new Recovery Services vault or update an existing one",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Recovery services vault",
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
              name: "--classic-alerts",
              description:
                "Use this property to specify whether backup alerts from the classic solution should be received",
              args: {
                name: "classic-alerts",
                suggestions: ["Disable", "Enable"],
              },
            },
            {
              name: "--cross-subscription-restore-state",
              description:
                'Use this parameter to configure cross subscription restore settings for the vault. By default, the property is "Enabled" for the vault',
              args: {
                name: "cross-subscription-restore-state",
                suggestions: ["Disable", "Enable", "PermanentlyDisable"],
              },
            },
            {
              name: "--immutability-state",
              description:
                'Use this parameter to configure immutability settings for the vault. By default, immutability is "Disabled" for the vault. "Unlocked" means that immutability is enabled for the vault and can be reversed. "Locked" means that immutability is enabled for the vault and cannot be reversed',
              args: {
                name: "immutability-state",
                suggestions: ["Disabled", "Locked", "Unlocked"],
              },
            },
            {
              name: "--job-failure-alerts",
              description:
                "Use this property to specify whether built-in Azure Monitor alerts should be received for every job failure",
              args: {
                name: "job-failure-alerts",
                suggestions: ["Disable", "Enable"],
              },
            },
            {
              name: "--public-network-access",
              description:
                "Use this property to specify whether public network access for the vault should be enabled or disabled. It is enabled by default. For setting up private endpoints, it has to be disabled",
              args: {
                name: "public-network-access",
                suggestions: ["Disable", "Enable"],
              },
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
          description: "Delete an existing Recovery services vault",
          options: [
            {
              name: "--force",
              description: "Force completion of the requested action",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Recovery services vault",
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
          description: "List Recovery service vaults within a subscription",
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
          name: "list-soft-deleted-containers",
          description:
            "List soft-deleted containers within a particular Recovery Services vault",
          options: [
            {
              name: "--backup-management-type",
              description:
                "Specify the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name",
              args: {
                name: "backup-management-type",
                suggestions: ["AzureIaasVM", "AzureStorage", "AzureWorkload"],
              },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Recovery services vault",
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
          name: "show",
          description: "Show details of a particular Recovery service vault",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Recovery services vault",
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
          name: "backup-properties",
          description: "Properties of the Recovery Services vault",
          subcommands: [
            {
              name: "set",
              description:
                "Sets backup related properties of the Recovery Services vault",
              options: [
                {
                  name: "--backup-storage-redundancy",
                  description:
                    "Set backup storage properties for a Recovery Services vault",
                  args: {
                    name: "backup-storage-redundancy",
                    suggestions: [
                      "GeoRedundant",
                      "LocallyRedundant",
                      "ZoneRedundant",
                    ],
                  },
                },
                {
                  name: "--classic-alerts",
                  description:
                    "Use this property to specify whether backup alerts from the classic solution should be received",
                  args: {
                    name: "classic-alerts",
                    suggestions: ["Disable", "Enable"],
                  },
                },
                {
                  name: "--cross-region-restore-flag",
                  description:
                    "Set cross-region-restore feature state for a Recovery Services Vault. Default: False",
                  args: {
                    name: "cross-region-restore-flag",
                    suggestions: ["False", "True"],
                  },
                },
                {
                  name: "--hybrid-backup-security-features",
                  description:
                    "Use this field to set the security features for hybrid backups in a Recovery Services Vault",
                  args: {
                    name: "hybrid-backup-security-features",
                    suggestions: ["Disable", "Enable"],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--job-failure-alerts",
                  description:
                    "Use this property to specify whether built-in Azure Monitor alerts should be received for every job failure",
                  args: {
                    name: "job-failure-alerts",
                    suggestions: ["Disable", "Enable"],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--soft-delete-duration",
                  description:
                    "Set soft-delete retention duration time in days for a Recovery Services Vault",
                  args: { name: "soft-delete-duration" },
                },
                {
                  name: "--soft-delete-feature-state",
                  description:
                    "Set soft-delete feature state for a Recovery Services Vault",
                  args: {
                    name: "soft-delete-feature-state",
                    suggestions: ["AlwaysOn", "Disable", "Enable"],
                  },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tenant-id",
                  description:
                    "ID of the tenant if the Resource Guard protecting the vault exists in a different tenant",
                  args: { name: "tenant-id" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets backup related properties of the Recovery Services vault",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
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
          ],
        },
        {
          name: "encryption",
          description: "Encryption details of a Recovery Services Vault",
          subcommands: [
            {
              name: "show",
              description:
                "Show details of encryption properties of a Recovery Services Vault",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
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
              name: "update",
              description:
                "Update encryption properties of a Recovery Services Vault",
              options: [
                {
                  name: "--encryption-key-id",
                  description:
                    "The encryption key id you want to use for encryption",
                  args: { name: "encryption-key-id" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--infrastructure-encryption",
                  description:
                    "Use this parameter to enable/disable infrastructure encryption. This must be set when configuring encryption of the vault for the first time. Once enabled/disabled, infrastructure encryption setting cannot be changed. Default value: Disabled. Allowed values: Enabled, Disabled",
                  args: {
                    name: "infrastructure-encryption",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--mi-system-assigned",
                  description:
                    "Provide this flag to use system assigned identity for encryption",
                  args: { name: "mi-system-assigned" },
                },
                {
                  name: "--mi-user-assigned",
                  description:
                    "UserAssigned Identity Id to be used for CMK encryption, this will be applicable for encryption using userassigned identity",
                  args: { name: "mi-user-assigned" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
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
          ],
        },
        {
          name: "identity",
          description: "Identity details of a Recovery Services Vault",
          subcommands: [
            {
              name: "assign",
              description: "Assign Identities to Recovery Services vault",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
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
                  name: "--system-assigned",
                  description:
                    "Provide this flag to enable system assigned identity for Recovery Services Vault",
                  args: { name: "system-assigned" },
                },
                {
                  name: "--user-assigned",
                  description:
                    "Space-separated list of userassigned identities to be assigned to Recovery Services Vault",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove Identities of Recovery Services vault",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
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
                  name: "--system-assigned",
                  description:
                    "Provide this flag to remove system assigned identity for Recovery Services Vault",
                  args: { name: "system-assigned" },
                },
                {
                  name: "--user-assigned",
                  description:
                    "Space-separated list of userassigned identities to be removed from Recovery Services Vault",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "show",
              description: "Show Identities of Recovery Services vault",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
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
          ],
        },
        {
          name: "resource-guard-mapping",
          description:
            "Resource Guard Mapping details of the Recovery Services vault",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete resource guard mapping of the Recovery Services vault",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
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
                  name: "--tenant-id",
                  description:
                    "ID of the tenant where the Resource Guard exists in Cross-Tenant scenarios",
                  args: { name: "tenant-id" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description:
                "Get resource guard mapping of the Recovery Services vault",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
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
              name: "update",
              description:
                "Create/Update resource guard mapping of the Recovery Services vault",
              options: [
                {
                  name: "--resource-guard-id",
                  description:
                    "ARM ID of the Resource Guard to be associated with the vault",
                  args: { name: "resource-guard-id" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Recovery services vault",
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
                  name: "--tenant-id",
                  description:
                    "ID of the tenant where the Resource Guard exists in Cross-Tenant scenarios",
                  args: { name: "tenant-id" },
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
