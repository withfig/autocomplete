const completion: Fig.Spec = {
  name: "dataprotection",
  description: "Manage dataprotection",
  subcommands: [
    {
      name: "backup-instance",
      description: "Manage backup instance with dataprotection",
      subcommands: [
        {
          name: "adhoc-backup",
          description: "Trigger adhoc backup",
          options: [
            {
              name: "--rule-name",
              description: "Specify backup policy rule name",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: ["--backup-instance-name", "--name", "-n"],
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
              name: "--retention-tag-override",
              description: "Specify retention override tag",
              args: { name: "retention-tag-override" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "create",
          description: "Configure backup for a resource in a backup vault",
          options: [
            {
              name: "--backup-instance",
              description:
                "Request backup instance object for operation. Support json-file and yaml-file",
              args: { name: "backup-instance" },
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
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          ],
        },
        {
          name: "delete",
          description: "Delete a backup instance in a backup vault",
          options: [
            {
              name: ["--backup-instance-name", "--name", "-n"],
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "initialize",
          description:
            "Initialize JSON request body for configuring backup of a resource",
          options: [
            {
              name: "--datasource-id",
              description: "ARM Id of the resource to be backed up",
              args: { name: "datasource-id" },
              isRequired: true,
            },
            {
              name: ["--datasource-location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "datasource-location" },
              isRequired: true,
            },
            {
              name: "--datasource-type",
              description:
                "Specify the datasource type of the resource to be backed up",
              args: {
                name: "datasource-type",
                suggestions: [
                  "AzureBlob",
                  "AzureDatabaseForPostgreSQL",
                  "AzureDisk",
                  "AzureKubernetesService",
                ],
              },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description:
                "Id of the backup policy the datasource will be associated",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--backup-configuration",
              description:
                "Backup configuration for backup. Use this parameter to configure protection for AzureKubernetesService",
              args: { name: "backup-configuration" },
            },
            {
              name: "--friendly-name",
              description: "User-defined friendly name for the backup instance",
              args: { name: "friendly-name" },
            },
            {
              name: "--secret-store-type",
              description:
                "Specify the secret store type to use for authentication",
              args: {
                name: "secret-store-type",
                suggestions: ["AzureKeyVault"],
              },
            },
            {
              name: "--secret-store-uri",
              description:
                "Specify the secret store uri to use for authentication",
              args: { name: "secret-store-uri" },
            },
            {
              name: ["--snapshot-resource-group-name", "--snapshot-rg"],
              description:
                "Name of the resource group in which the backup snapshots should be stored",
              args: { name: "snapshot-resource-group-name" },
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
          name: "initialize-backupconfig",
          description:
            "Initialize JSON request body for initializing and configuring backup of an AzureKubernetesService resource",
          options: [
            {
              name: "--datasource-type",
              description:
                "Specify the datasource type of the resource to be backed up",
              args: {
                name: "datasource-type",
                suggestions: [
                  "AzureBlob",
                  "AzureDatabaseForPostgreSQL",
                  "AzureDisk",
                  "AzureKubernetesService",
                ],
              },
              isRequired: true,
            },
            {
              name: ["--backup-hook-references", "--backup-hook-refs"],
              description:
                "Property sets the hook reference to be executed during backup",
              args: { name: "backup-hook-references" },
            },
            {
              name: "--excluded-namespaces",
              description: "List of namespaces to be excluded for backup",
              args: { name: "excluded-namespaces" },
            },
            {
              name: ["--excluded-resource-types", "--excluded-resource-type"],
              description: "List of resource types to be excluded for backup",
              args: { name: "excluded-resource-types" },
            },
            {
              name: [
                "--include-cluster-scope-resources",
                "--include-cluster-scope",
              ],
              description:
                "Boolean parameter to decide whether cluster scope resources are included for restore. By default this is taken as true",
              args: {
                name: "include-cluster-scope-resources",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--included-namespaces",
              description: "List of namespaces to be included for backup",
              args: { name: "included-namespaces" },
            },
            {
              name: ["--included-resource-types", "--included-resource-type"],
              description: "List of resource types to be included for backup",
              args: { name: "included-resource-types" },
            },
            {
              name: "--label-selectors",
              description: "List of labels for internal filtering for backup",
              args: { name: "label-selectors" },
            },
            {
              name: "--snapshot-volumes",
              description:
                "Boolean parameter to decide whether snapshot volumes are included for backup. By default this is taken as true",
              args: {
                name: "snapshot-volumes",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "initialize-restoreconfig",
          description:
            "Initialize JSON request body for initializing and configuring restore of an AzureKubernetesService resource",
          options: [
            {
              name: "--datasource-type",
              description:
                "Specify the datasource type of the resource to be backed up",
              args: {
                name: "datasource-type",
                suggestions: [
                  "AzureBlob",
                  "AzureDatabaseForPostgreSQL",
                  "AzureDisk",
                  "AzureKubernetesService",
                ],
              },
              isRequired: true,
            },
            {
              name: "--conflict-policy",
              description:
                "Conflict policy for restore. Allowed values are Skip, Patch. Default value is Skip",
              args: { name: "conflict-policy", suggestions: ["Patch", "Skip"] },
            },
            {
              name: "--excluded-namespaces",
              description: "List of namespaces to be excluded for restore",
              args: { name: "excluded-namespaces" },
            },
            {
              name: ["--excluded-resource-types", "--excluded-resource-type"],
              description: "List of resource types to be excluded for restore",
              args: { name: "excluded-resource-types" },
            },
            {
              name: [
                "--include-cluster-scope-resources",
                "--include-cluster-scope",
              ],
              description:
                "Boolean parameter to decide whether cluster scope resources are included for restore. By default this is taken as true",
              args: {
                name: "include-cluster-scope-resources",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--included-namespaces",
              description: "List of namespaces to be included for restore",
              args: { name: "included-namespaces" },
            },
            {
              name: ["--included-resource-types", "--included-resource-type"],
              description: "List of resource types to be included for restore",
              args: { name: "included-resource-types" },
            },
            {
              name: "--label-selectors",
              description: "List of labels for internal filtering for restore",
              args: { name: "label-selectors" },
            },
            {
              name: "--namespace-mappings",
              description:
                "Namespaces mapping from source namespaces to target namespaces to resolve namespace naming conflicts in the target cluster",
              args: { name: "namespace-mappings" },
            },
            {
              name: [
                "--persistent-volume-restore-mode",
                "--persistent-restoremode",
              ],
              description:
                "Restore mode for persistent volumes. Allowed values are RestoreWithVolumeData, RestoreWithoutVolumeData. Default value is RestoreWithVolumeData",
              args: {
                name: "persistent-volume-restore-mode",
                suggestions: [
                  "RestoreWithVolumeData",
                  "RestoreWithoutVolumeData",
                ],
              },
            },
            {
              name: ["--restore-hook-references", "--restore-hook-refs"],
              description:
                "Property sets the hook reference to be executed during restore",
              args: { name: "restore-hook-references" },
            },
          ],
        },
        {
          name: "list",
          description: "Gets backup instances belonging to a backup vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
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
          ],
        },
        {
          name: "list-from-resourcegraph",
          description:
            "List backup instances across subscriptions, resource groups and vaults",
          options: [
            {
              name: "--datasource-type",
              description: "Specify the datasource type",
              args: {
                name: "datasource-type",
                suggestions: [
                  "AzureBlob",
                  "AzureDatabaseForPostgreSQL",
                  "AzureDisk",
                  "AzureKubernetesService",
                ],
              },
              isRequired: true,
            },
            {
              name: "--datasource-id",
              description: "Specify datasource id filter to apply",
              args: { name: "datasource-id" },
            },
            {
              name: "--protection-status",
              description: "Specify protection status",
              args: {
                name: "protection-status",
                suggestions: ["ProtectionConfigured", "ProtectionError"],
              },
            },
            {
              name: "--resource-groups",
              description: "List of resource groups",
              args: { name: "resource-groups" },
            },
            {
              name: "--subscriptions",
              description: "List of subscription Ids",
              args: { name: "subscriptions" },
            },
            {
              name: "--vaults",
              description: "List of vault names",
              args: { name: "vaults" },
            },
          ],
        },
        {
          name: "resume-protection",
          description:
            "This operation will resume protection for a stopped backup instance",
          options: [
            {
              name: ["--backup-instance-name", "--name", "-n"],
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a backup instance with name in a backup vault",
          options: [
            {
              name: ["--backup-instance-name", "--name", "-n"],
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
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
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "stop-protection",
          description:
            "This operation will stop protection of a backup instance and data will be held forever",
          options: [
            {
              name: ["--backup-instance-name", "--name", "-n"],
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "suspend-backup",
          description:
            "This operation will stop backup for a backup instance and retains the backup data as per the policy (except latest Recovery point, which will be retained forever)",
          options: [
            {
              name: ["--backup-instance-name", "--name", "-n"],
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a backup instance in a backup vault",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--backup-instance-name", "--name", "-n"],
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
            },
            {
              name: "--data-source-info",
              description:
                'Gets or sets the data source information. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "data-source-info" },
            },
            {
              name: "--data-source-set-info",
              description:
                'Gets or sets the data source set information. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "data-source-set-info" },
            },
            {
              name: [
                "--datasource-auth-credentials",
                "--datasource-auth-creds",
              ],
              description:
                'Credentials to use to authenticate with data source provider. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "datasource-auth-credentials" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
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
              name: "--friendly-name",
              description: "Gets or sets the Backup Instance friendly name",
              args: { name: "friendly-name" },
            },
            {
              name: "--identity-details",
              description:
                'Contains information of the Identity Details for the BI. If it is null, default will be considered as System Assigned. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity-details" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
              name: "--object-type",
              description:
                "Type of Backup or Restore Instance for request body",
              args: { name: "object-type" },
            },
            {
              name: "--policy-info",
              description:
                'Gets or sets the policy information. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "policy-info" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Proxy Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--validation-type",
              description:
                "Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again",
              args: {
                name: "validation-type",
                suggestions: ["DeepValidation", "ShallowValidation"],
              },
            },
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update-msi-permissions",
          description:
            "Assign the required permissions needed to successfully enable backup for the datasource",
          options: [
            {
              name: "--datasource-type",
              description:
                "Specify the datasource type of the resource to be backed up",
              args: {
                name: "datasource-type",
                suggestions: [
                  "AzureBlob",
                  "AzureDatabaseForPostgreSQL",
                  "AzureDisk",
                  "AzureKubernetesService",
                ],
              },
              isRequired: true,
            },
            {
              name: "--operation",
              description: "List of possible operations",
              args: { name: "operation", suggestions: ["Backup", "Restore"] },
              isRequired: true,
            },
            {
              name: "--permissions-scope",
              description:
                "Scope for assigning permissions to the backup vault",
              args: {
                name: "permissions-scope",
                suggestions: ["Resource", "ResourceGroup", "Subscription"],
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
              name: "--vault-name",
              description: "Name of the vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--backup-instance",
              description:
                'Request body for operation "Backup" Expected value: json-string/@json-file. Required when --operation is Backup',
              args: { name: "backup-instance" },
            },
            {
              name: "--keyvault-id",
              description:
                "ARM id of the key vault. Required when --datasource-type is AzureDatabaseForPostgreSQL",
              args: { name: "keyvault-id" },
            },
            {
              name: "--restore-request-object",
              description:
                'Request body for operation "Restore" Expected value: json-string/@json-file. Required when --operation is Restore',
              args: { name: "restore-request-object" },
            },
            {
              name: ["--snapshot-resource-group-id", "--snapshot-rg-id"],
              description:
                "ARM id of the snapshot resource group. Required when assigning permissions over snapshot resource group and the --operation is Restore",
              args: { name: "snapshot-resource-group-id" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "update-policy",
          description: "Update backup policy associated with backup instance",
          options: [
            {
              name: "--backup-instance-name",
              description: "Backup instance name",
              args: { name: "backup-instance-name" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description:
                "Specify the ID of the new policy with which backup instance will be associated with",
              args: { name: "policy-id" },
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
              name: "--vault-name",
              description: "Name of the vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "validate-for-backup",
          description:
            "Validate whether configure backup will be successful or not",
          options: [
            {
              name: "--backup-instance",
              description:
                "Request body for operation Expected value: json-string/@json-file",
              args: { name: "backup-instance" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "validate-for-restore",
          description: "Validates if Restore can be triggered for a DataSource",
          options: [
            {
              name: "--restore-request-object",
              description:
                "Gets or sets the restore request object. Support json-file and yaml-file",
              args: { name: "restore-request-object" },
              isRequired: true,
            },
            {
              name: ["--backup-instance-name", "--name", "-n"],
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--backup-instance-name", "--name", "-n"],
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
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
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "deleted-backup-instance",
          description: "Perform operations on soft-deleted backup instances",
          subcommands: [
            {
              name: "list",
              description:
                "List deleted backup instances belonging to a backup vault",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--vault-name",
                  description: "The name of the backup vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
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
              ],
            },
            {
              name: "show",
              description:
                "Get a deleted backup instance with name in a backup vault",
              options: [
                {
                  name: ["--backup-instance-name", "--name", "-n"],
                  description: "The name of the deleted backup instance",
                  args: { name: "backup-instance-name" },
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
                  name: "--vault-name",
                  description: "The name of the backup vault",
                  args: { name: "vault-name" },
                },
              ],
            },
            {
              name: "undelete",
              description: "Undelete soft-deleted backup instances",
              options: [
                {
                  name: ["--backup-instance-name", "--name", "-n"],
                  description: "The name of the deleted backup instance",
                  args: { name: "backup-instance-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
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
                {
                  name: "--vault-name",
                  description: "The name of the backup vault",
                  args: { name: "vault-name" },
                },
              ],
            },
          ],
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
              options: [
                {
                  name: "--datasource-type",
                  description: "Specify the datasource type",
                  args: {
                    name: "datasource-type",
                    suggestions: [
                      "AzureBlob",
                      "AzureDatabaseForPostgreSQL",
                      "AzureDisk",
                      "AzureKubernetesService",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--restore-location",
                  description: "Specify the restore location",
                  args: { name: "restore-location" },
                  isRequired: true,
                },
                {
                  name: "--source-datastore",
                  description:
                    "Specify the datastore type of the given recovery point or point in time",
                  args: {
                    name: "source-datastore",
                    suggestions: [
                      "ArchiveStore",
                      "OperationalStore",
                      "VaultStore",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--backup-instance-id",
                  description: "Specify the backup instance ID",
                  args: { name: "backup-instance-id" },
                },
                {
                  name: "--point-in-time",
                  description:
                    "Specify the point in time which will be used for restoring the data in UTC (yyyy-mm-ddTHH:MM:SS)",
                  args: { name: "point-in-time" },
                },
                {
                  name: "--recovery-point-id",
                  description:
                    "Specify the recovery point ID which will be used for restoring the data",
                  args: { name: "recovery-point-id" },
                },
                {
                  name: "--rehydration-duration",
                  description:
                    "Specify the rehydration duration for rehydrate restore",
                  args: { name: "rehydration-duration" },
                },
                {
                  name: "--rehydration-priority",
                  description:
                    "Specify the rehydration priority for rehydrate restore",
                  args: {
                    name: "rehydration-priority",
                    suggestions: ["Standard"],
                  },
                },
                {
                  name: "--restore-configuration",
                  description:
                    "Restore configuration for restore. Use this parameter to restore with AzureKubernetesService",
                  args: { name: "restore-configuration" },
                },
                {
                  name: "--secret-store-type",
                  description:
                    "Specify the secret store type to use for authentication",
                  args: {
                    name: "secret-store-type",
                    suggestions: ["AzureKeyVault"],
                  },
                },
                {
                  name: "--secret-store-uri",
                  description:
                    "Specify the secret store uri to use for authentication",
                  args: { name: "secret-store-uri" },
                },
                {
                  name: "--target-resource-id",
                  description:
                    "Specify the resource ID to which the data will be restored",
                  args: { name: "target-resource-id" },
                },
              ],
            },
            {
              name: "initialize-for-data-recovery-as-files",
              description:
                "Initialize restore request object to recover all backed up data as files in a backup vault",
              options: [
                {
                  name: "--datasource-type",
                  description: "Specify the datasource type",
                  args: {
                    name: "datasource-type",
                    suggestions: [
                      "AzureBlob",
                      "AzureDatabaseForPostgreSQL",
                      "AzureDisk",
                      "AzureKubernetesService",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--restore-location",
                  description: "Specify the restore location",
                  args: { name: "restore-location" },
                  isRequired: true,
                },
                {
                  name: "--source-datastore",
                  description:
                    "Specify the datastore type of the given recovery point or point in time",
                  args: {
                    name: "source-datastore",
                    suggestions: [
                      "ArchiveStore",
                      "OperationalStore",
                      "VaultStore",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--target-blob-container-url",
                  description:
                    "Specify the blob container url to which the data will be restored",
                  args: { name: "target-blob-container-url" },
                  isRequired: true,
                },
                {
                  name: "--target-file-name",
                  description:
                    "Specify the file name to which the data will be restored",
                  args: { name: "target-file-name" },
                  isRequired: true,
                },
                {
                  name: "--point-in-time",
                  description:
                    "Specify the point in time which will be used for restoring the data in UTC (yyyy-mm-ddTHH:MM:SS)",
                  args: { name: "point-in-time" },
                },
                {
                  name: "--recovery-point-id",
                  description:
                    "Specify the recovery point ID which will be used for restoring the data",
                  args: { name: "recovery-point-id" },
                },
                {
                  name: "--rehydration-duration",
                  description:
                    "Specify the rehydration duration for rehydrate restore",
                  args: { name: "rehydration-duration" },
                },
                {
                  name: "--rehydration-priority",
                  description:
                    "Specify the rehydration priority for rehydrate restore",
                  args: {
                    name: "rehydration-priority",
                    suggestions: ["Standard"],
                  },
                },
                {
                  name: "--target-resource-id",
                  description:
                    "Specify the target storage container ARM ID to which data will be restored, required for restoring as files to another subscription",
                  args: { name: "target-resource-id" },
                },
              ],
            },
            {
              name: "initialize-for-item-recovery",
              description:
                "Initialize restore request object to recover specified items of backed up data in a backup vault",
              options: [
                {
                  name: "--datasource-type",
                  description: "Specify the datasource type",
                  args: {
                    name: "datasource-type",
                    suggestions: [
                      "AzureBlob",
                      "AzureDatabaseForPostgreSQL",
                      "AzureDisk",
                      "AzureKubernetesService",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--restore-location",
                  description: "Specify the restore location",
                  args: { name: "restore-location" },
                  isRequired: true,
                },
                {
                  name: "--source-datastore",
                  description:
                    "Specify the datastore type of the given recovery point or point in time",
                  args: {
                    name: "source-datastore",
                    suggestions: [
                      "ArchiveStore",
                      "OperationalStore",
                      "VaultStore",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--backup-instance-id",
                  description: "Specify the backup instance ID",
                  args: { name: "backup-instance-id" },
                },
                {
                  name: "--container-list",
                  description: "Specify the list of containers to restore",
                  args: { name: "container-list" },
                },
                {
                  name: "--from-prefix-pattern",
                  description: "Specify the prefix pattern for start range",
                  args: { name: "from-prefix-pattern" },
                },
                {
                  name: "--point-in-time",
                  description:
                    "Specify the point in time which will be used for restoring the data in UTC (yyyy-mm-ddTHH:MM:SS)",
                  args: { name: "point-in-time" },
                },
                {
                  name: "--recovery-point-id",
                  description:
                    "Specify the recovery point ID which will be used for restoring the data",
                  args: { name: "recovery-point-id" },
                },
                {
                  name: "--restore-configuration",
                  description:
                    "Restore configuration for restore. Use this parameter to restore with AzureKubernetesService",
                  args: { name: "restore-configuration" },
                },
                {
                  name: "--target-resource-id",
                  description:
                    "Specify the resource ID to which the data will be restored",
                  args: { name: "target-resource-id" },
                },
                {
                  name: "--to-prefix-pattern",
                  description: "Specify the prefix pattern for end range",
                  args: { name: "to-prefix-pattern" },
                },
              ],
            },
            {
              name: "trigger",
              description: "Triggers restore for a BackupInstance",
              options: [
                {
                  name: "--restore-request-object",
                  description:
                    "Gets or sets the restore request object. Expected value: json-string/@json-file. Support json-file and yaml-file",
                  args: { name: "restore-request-object" },
                  isRequired: true,
                },
                {
                  name: ["--backup-instance-name", "--name", "-n"],
                  description: "The name of the backup instance",
                  args: { name: "backup-instance-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
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
                {
                  name: "--vault-name",
                  description: "The name of the backup vault",
                  args: { name: "vault-name" },
                },
              ],
            },
          ],
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
          options: [
            {
              name: ["--backup-policy-name", "--name", "-n"],
              description: "Name of the policy",
              args: { name: "backup-policy-name" },
              isRequired: true,
            },
            {
              name: "--policy",
              description:
                "Request body for operation Expected value: json-string/@json-file. Support json-file and yaml-file",
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
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a backup policy belonging to a backup vault",
          options: [
            {
              name: ["--backup-policy-name", "--name", "-n"],
              description: "Name of the policy",
              args: { name: "backup-policy-name" },
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
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "get-default-policy-template",
          description:
            "Get default policy template for a given datasource type",
          options: [
            {
              name: "--datasource-type",
              description:
                "Specify the datasource type of the resource to be backed up",
              args: {
                name: "datasource-type",
                suggestions: [
                  "AzureBlob",
                  "AzureDatabaseForPostgreSQL",
                  "AzureDisk",
                  "AzureKubernetesService",
                ],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "List list of backup policies belonging to a backup vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
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
          ],
        },
        {
          name: "show",
          description: "Get a backup policy belonging to a backup vault",
          options: [
            {
              name: ["--backup-policy-name", "--name", "-n"],
              description: "Name of the policy",
              args: { name: "backup-policy-name" },
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
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a backup policy belonging to a backup vault",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--backup-policy-name", "--name", "-n"],
              description: "Name of the policy",
              args: { name: "backup-policy-name" },
            },
            {
              name: "--datasource-types",
              description:
                'Type of datasource for the backup management Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "datasource-types" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--policy",
              description:
                'Request body for operation Expected value: json- string/@json-file. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "policy" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "retention-rule",
          description:
            "Create lifecycles and add or remove retention rules in a backup policy",
          subcommands: [
            {
              name: "create-lifecycle",
              description: "Create lifecycle for Azure Retention rule",
              options: [
                {
                  name: ["--retention-duration-count", "--count"],
                  description: "Retention duration count",
                  args: { name: "retention-duration-count" },
                  isRequired: true,
                },
                {
                  name: ["--retention-duration-type", "--type"],
                  description: "Retention duration type",
                  args: {
                    name: "retention-duration-type",
                    suggestions: ["Days", "Months", "Weeks", "Years"],
                  },
                  isRequired: true,
                },
                {
                  name: "--source-datastore",
                  description: "Specify source datastore",
                  args: {
                    name: "source-datastore",
                    suggestions: [
                      "ArchiveStore",
                      "OperationalStore",
                      "VaultStore",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--copy-option",
                  description:
                    "Specify copy option from source datastore to target datastore",
                  args: {
                    name: "copy-option",
                    suggestions: [
                      "CopyOnExpiryOption",
                      "CustomCopyOption",
                      "ImmediateCopyOption",
                    ],
                  },
                },
                {
                  name: "--target-datastore",
                  description: "Specify target datastore",
                  args: {
                    name: "target-datastore",
                    suggestions: [
                      "ArchiveStore",
                      "OperationalStore",
                      "VaultStore",
                    ],
                  },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove existing retention rule in a backup policy",
              options: [
                {
                  name: "--name",
                  description:
                    "Specify the retention rule name to be removed in policy",
                  args: {
                    name: "name",
                    suggestions: [
                      "Daily",
                      "Default",
                      "Monthly",
                      "Weekly",
                      "Yearly",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--policy",
                  description: "Existing policy Json string or file",
                  args: { name: "policy" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "set",
              description:
                "Add new retention rule or update existing retention rule",
              options: [
                {
                  name: "--lifecycles",
                  description:
                    "Lifecycles to be associated with the retention rule. Specify space separated json file names",
                  args: { name: "lifecycles" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description:
                    "Specify the retention rule name to be edited in policy",
                  args: {
                    name: "name",
                    suggestions: [
                      "Daily",
                      "Default",
                      "Monthly",
                      "Weekly",
                      "Yearly",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--policy",
                  description: "Policy Json string or file",
                  args: { name: "policy" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "tag",
          description: "Create criterias and add or remove tag in policy",
          subcommands: [
            {
              name: "create-absolute-criteria",
              description: "Create absolute criteria",
              options: [
                {
                  name: "--absolute-criteria",
                  description: "Specify retention criteria",
                  args: {
                    name: "absolute-criteria",
                    suggestions: [
                      "AllBackup",
                      "FirstOfDay",
                      "FirstOfMonth",
                      "FirstOfWeek",
                      "FirstOfYear",
                    ],
                  },
                  isRequired: true,
                },
              ],
            },
            {
              name: "create-generic-criteria",
              description: "Create generic criteria",
              options: [
                {
                  name: "--days-of-month",
                  description:
                    "Specify days of month. Allowed values are 1 to 28 and Last",
                  args: { name: "days-of-month" },
                },
                {
                  name: "--days-of-week",
                  description: "Specify days of week",
                  args: {
                    name: "days-of-week",
                    suggestions: [
                      "Friday",
                      "Monday",
                      "Saturday",
                      "Sunday",
                      "Thursday",
                      "Tuesday",
                      "Wednesday",
                    ],
                  },
                },
                {
                  name: "--months-of-year",
                  description: "Specify months of year",
                  args: {
                    name: "months-of-year",
                    suggestions: [
                      "April",
                      "August",
                      "December",
                      "February",
                      "January",
                      "July",
                      "June",
                      "March",
                      "May",
                      "November",
                      "October",
                      "September",
                    ],
                  },
                },
                {
                  name: "--weeks-of-month",
                  description: "Specify weeks of month",
                  args: {
                    name: "weeks-of-month",
                    suggestions: ["First", "Fourth", "Last", "Second", "Third"],
                  },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove existing tag from a backup policy",
              options: [
                {
                  name: "--name",
                  description: "Specify the tag name to be removed in policy",
                  args: {
                    name: "name",
                    suggestions: ["Daily", "Monthly", "Weekly", "Yearly"],
                  },
                  isRequired: true,
                },
                {
                  name: "--policy",
                  description: "Existing policy Json string or file",
                  args: { name: "policy" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "set",
              description:
                "Add new tag or update existing tag of a backup policy",
              options: [
                {
                  name: "--criteria",
                  description:
                    "Crtierias to be associated with the tag. Specify space separated json file names",
                  args: { name: "criteria" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "Specify the tag name to be edited in policy",
                  args: {
                    name: "name",
                    suggestions: ["Daily", "Monthly", "Weekly", "Yearly"],
                  },
                  isRequired: true,
                },
                {
                  name: "--policy",
                  description: "Policy Json string or file",
                  args: { name: "policy" },
                  isRequired: true,
                },
              ],
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
              options: [
                {
                  name: "--interval-count",
                  description: "Specify duration of backup frequency",
                  args: { name: "interval-count" },
                  isRequired: true,
                },
                {
                  name: "--interval-type",
                  description: "Specify Backup Frequency",
                  args: {
                    name: "interval-type",
                    suggestions: ["Daily", "Hourly", "Weekly"],
                  },
                  isRequired: true,
                },
                {
                  name: "--schedule-days",
                  description:
                    "Specify the backup schedule time in UTC (yyyy-mm-ddTHH:MM:SS)",
                  args: { name: "schedule-days" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "set",
              description: "Associate backup schedule to a backup policy",
              options: [
                {
                  name: "--policy",
                  description: "Existing policy Json string or file",
                  args: { name: "policy" },
                  isRequired: true,
                },
                {
                  name: "--schedule",
                  description:
                    "Specify schedule time intervals for backup rule",
                  args: { name: "schedule" },
                  isRequired: true,
                },
              ],
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
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--storage-settings", "--storage-setting"],
              description:
                "Storage Settings. Usage: --storage-setting \"[{type:'LocallyRedundant',datastore-type:'VaultStore'}]\" Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more. Singular flags: --storage-settings",
              args: { name: "storage-settings" },
              isRequired: true,
            },
            {
              name: ["--vault-name", "-v"],
              description: "The name of the backup vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: [
                "--azure-monitor-alerts-for-job-failures",
                "--job-failure-alerts",
              ],
              description:
                "Property that specifies whether built-in Azure Monitor alerts should be fired for all failed jobs",
              args: {
                name: "azure-monitor-alerts-for-job-failures",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--cross-subscription-restore-state", "--csr-state"],
              description: "CrossSubscriptionRestore state",
              args: {
                name: "cross-subscription-restore-state",
                suggestions: ["Disabled", "Enabled", "PermanentlyDisabled"],
              },
            },
            {
              name: "--e-tag",
              description: "Optional ETag",
              args: { name: "e-tag" },
            },
            {
              name: "--immutability-state",
              description: "Immutability state",
              args: {
                name: "immutability-state",
                suggestions: ["Disabled", "Locked", "Unlocked"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
              name: ["--retention-duration-in-days", "--soft-delete-retention"],
              description: "Soft delete retention duration",
              args: { name: "retention-duration-in-days" },
            },
            {
              name: "--soft-delete-state",
              description: "State of soft delete",
              args: {
                name: "soft-delete-state",
                suggestions: ["AlwaysOn", "Off", "On"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--type",
              description:
                "The identityType which can be either SystemAssigned or None",
              args: { name: "type" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a BackupVault resource from the resource group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            {
              name: ["--vault-name", "-v"],
              description: "The name of the backup vault",
              args: { name: "vault-name" },
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
            "Gets list of backup vault in a subscription or in a resource group",
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
          name: "show",
          description: "Get a resource belonging to a resource group",
          options: [
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
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates a BackupVault resource belonging to a resource group. For example, updating tags for a resource",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: [
                "--azure-monitor-alerts-for-job-failures",
                "--job-failure-alerts",
              ],
              description:
                "Property that specifies whether built-in Azure Monitor alerts should be fired for all failed jobs",
              args: {
                name: "azure-monitor-alerts-for-job-failures",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--cross-subscription-restore-state", "--csr-state"],
              description: "CrossSubscriptionRestore state",
              args: {
                name: "cross-subscription-restore-state",
                suggestions: ["Disabled", "Enabled", "PermanentlyDisabled"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--immutability-state",
              description: "Immutability state",
              args: {
                name: "immutability-state",
                suggestions: ["Disabled", "Locked", "Unlocked"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
              name: ["--retention-duration-in-days", "--soft-delete-retention"],
              description: "Soft delete retention duration",
              args: { name: "retention-duration-in-days" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--soft-delete-state",
              description: "State of soft delete",
              args: {
                name: "soft-delete-state",
                suggestions: ["AlwaysOn", "Off", "On"],
              },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--type",
              description:
                "The identityType which can be either SystemAssigned or None",
              args: { name: "type" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
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
            {
              name: ["--vault-name", "-v"],
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "resource-guard-mapping",
          description: "Manage ResourceGuard mappings for a backup vault",
          subcommands: [
            {
              name: "create",
              description: "Create a ResourceGuard mapping",
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
                  description: "The name of the backup vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-guard-mapping-name", "--name", "-n"],
                  description: "The name of the resource guard mapping",
                  args: { name: "resource-guard-mapping-name" },
                },
                {
                  name: ["--resource-guard-resource-id", "--resource-guard-id"],
                  description: "ARM Id of the resource guard to be mapped to",
                  args: { name: "resource-guard-resource-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the ResourceGuard mapping",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--resource-guard-mapping-name", "--name", "-n"],
                  description: "The name of the resource guard mapping",
                  args: { name: "resource-guard-mapping-name" },
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
                  description: "The name of the backup vault",
                  args: { name: "vault-name" },
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
                "Get the ResourceGuard mapping object associated with the vault, and that matches the name in the request",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--resource-guard-mapping-name", "--name", "-n"],
                  description: "The name of the resource guard mapping",
                  args: { name: "resource-guard-mapping-name" },
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
                  description: "The name of the backup vault",
                  args: { name: "vault-name" },
                },
              ],
            },
          ],
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
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
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
          ],
        },
        {
          name: "list-from-resourcegraph",
          description:
            "List backup jobs across subscriptions, resource groups and vaults",
          options: [
            {
              name: "--datasource-type",
              description: "Specify the datasource type",
              args: {
                name: "datasource-type",
                suggestions: [
                  "AzureBlob",
                  "AzureDatabaseForPostgreSQL",
                  "AzureDisk",
                  "AzureKubernetesService",
                ],
              },
              isRequired: true,
            },
            {
              name: "--datasource-id",
              description: "Specify datasource id filter to apply",
              args: { name: "datasource-id" },
            },
            {
              name: "--end-time",
              description:
                "Specify end time of the job in UTC (yyyy-mm-ddTHH:MM:SS)",
              args: { name: "end-time" },
            },
            {
              name: "--operation",
              description: "Specify job operation values for filter",
              args: {
                name: "operation",
                suggestions: ["OnDemandBackup", "Restore", "ScheduledBackup"],
              },
            },
            {
              name: "--resource-groups",
              description: "List of resource groups",
              args: { name: "resource-groups" },
            },
            {
              name: "--start-time",
              description:
                "Specify start time of the job in UTC (yyyy-mm-ddTHH:MM:SS)",
              args: { name: "start-time" },
            },
            {
              name: "--status",
              description: "Specify job status values for filter",
              args: {
                name: "status",
                suggestions: ["Completed", "Failed", "InProgress"],
              },
            },
            {
              name: "--subscriptions",
              description: "List of subscription Ids",
              args: { name: "subscriptions" },
            },
            {
              name: "--vaults",
              description: "List of vault names",
              args: { name: "vaults" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a job with id in a backup vault",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--job-id",
              description:
                "The Job ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)",
              args: { name: "job-id" },
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
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
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
          options: [
            {
              name: "--backup-instance-name",
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
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
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--end-time",
              description:
                "Specify the end date time in UTC (yyyy-mm-ddTHH:MM:SS)",
              args: { name: "end-time" },
            },
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
              name: "--start-time",
              description:
                "Specify the start date time in UTC (yyyy-mm-ddTHH:MM:SS)",
              args: { name: "start-time" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a Recovery Point using recoveryPointId for a Datasource",
          options: [
            {
              name: "--backup-instance-name",
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--recovery-point-id",
              description: "Id of the recovery point",
              args: { name: "recovery-point-id" },
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
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "resource-guard",
      description: "Manage resource guard with dataprotection",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a ResourceGuard resource belonging to a resource group",
          options: [
            {
              name: ["--resource-guard-name", "--name", "-n"],
              description: "The name of Resource Guard",
              args: { name: "resource-guard-name" },
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
              name: "--e-tag",
              description: "Optional ETag",
              args: { name: "e-tag" },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a ResourceGuard resource from the resource group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-guard-name", "--name", "-n"],
              description: "The name of ResourceGuard",
              args: { name: "resource-guard-name" },
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
            "Gets list of ResourceGuards in a subscription or in a resource group",
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
          name: "list-protected-operations",
          description:
            "Lists protected operations associated with a ResourceGuard",
          options: [
            {
              name: "--resource-type",
              description:
                "Type of the resource associated with the protected operations",
              args: {
                name: "resource-type",
                suggestions: ["Microsoft.RecoveryServices/vaults"],
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
              name: ["--resource-guard-name", "--name", "-n"],
              description: "The name of ResourceGuard",
              args: { name: "resource-guard-name" },
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
          description: "Returns a ResourceGuard belonging to a resource group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-guard-name", "--name", "-n"],
              description: "The name of ResourceGuard",
              args: { name: "resource-guard-name" },
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
          name: "unlock",
          description:
            "Unlocks the critical operation which is protected by the resource guard",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-guard-mapping-name", "--name", "-n"],
              description: "The name of the resource guard mapping",
              args: { name: "resource-guard-mapping-name" },
            },
            {
              name: [
                "--resource-guard-operation-requests",
                "--operation-requests",
              ],
              description:
                'List of critical operations which are protected by the resourceGuard and need to be unlocked. Supported values are DeleteBackupInstance, DisableMUA Support shorthand-syntax, json-file and yaml-file. Try "??" to show more. Singular flags: --operation-requests',
              args: { name: "resource-guard-operation-requests" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-to-be-deleted",
              description:
                "ARM Id of the resource that need to be unlocked for performing critical operation",
              args: { name: "resource-to-be-deleted" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tenant-id",
              description: "Tenant ID for cross-tenant calls",
              args: { name: "tenant-id" },
            },
            {
              name: ["--vault-name", "-v"],
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates protected operations associated with a ResourceGuard",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--critical-operation-exclusion-list",
              description:
                'List of critical operations which are not protected by this resourceGuard. Allowed values: deleteProtection, getSecurityPIN, updatePolicy, updateProtection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "critical-operation-exclusion-list" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-guard-name", "--name", "-n"],
              description: "The name of Resource Guard",
              args: { name: "resource-guard-name" },
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
              name: "--resource-type",
              description:
                "Type of the resource associated with the protected operations",
              args: {
                name: "resource-type",
                suggestions: ["Microsoft.RecoveryServices/vaults"],
              },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "restorable-time-range",
      description: "Manage restorable time range with dataprotection",
      subcommands: [
        {
          name: "find",
          description:
            "Finds the valid recovery point in time ranges for the restore",
          options: [
            {
              name: "--source-data-store-type",
              description: "Gets or sets the type of the source data store",
              args: {
                name: "source-data-store-type",
                suggestions: ["ArchiveStore", "OperationalStore", "VaultStore"],
              },
              isRequired: true,
            },
            {
              name: "--backup-instance-name",
              description: "The name of the backup instance",
              args: { name: "backup-instance-name" },
            },
            {
              name: "--end-time",
              description:
                "End time for the List Restore Ranges request. ISO 8601 format",
              args: { name: "end-time" },
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
              name: "--start-time",
              description:
                "Start time for the List Restore Ranges request. ISO 8601 format",
              args: { name: "start-time" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vault-name",
              description: "The name of the backup vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
