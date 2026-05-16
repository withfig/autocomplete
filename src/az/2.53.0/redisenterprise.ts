const completion: Fig.Spec = {
  name: "redisenterprise",
  description: "Manage the redisenterprise cache",
  subcommands: [
    {
      name: "create",
      description:
        "Create an existing (overwrite/recreate, with potential downtime) cache cluster",
      options: [
        {
          name: ["--cluster-name", "--name", "-n"],
          description: "The name of the RedisEnterprise cluster",
          args: { name: "cluster-name" },
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
          name: "--sku",
          description:
            "The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.)",
          args: {
            name: "sku",
            suggestions: [
              "EnterpriseFlash_F1500",
              "EnterpriseFlash_F300",
              "EnterpriseFlash_F700",
              "Enterprise_E10",
              "Enterprise_E100",
              "Enterprise_E20",
              "Enterprise_E200",
              "Enterprise_E400",
              "Enterprise_E5",
              "Enterprise_E50",
            ],
          },
          isRequired: true,
        },
        {
          name: ["--user-assigned-identities", "--assigned-identities"],
          description:
            "The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests",
          args: { name: "user-assigned-identities" },
        },
        {
          name: "--capacity",
          description:
            "The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs",
          args: { name: "capacity" },
        },
        {
          name: "--client-protocol",
          description:
            "Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted",
          args: {
            name: "client-protocol",
            suggestions: ["Encrypted", "Plaintext"],
          },
        },
        {
          name: "--clustering-policy",
          description:
            "Clustering policy - default is OSSCluster. Specified at create time",
          args: {
            name: "clustering-policy",
            suggestions: ["EnterpriseCluster", "OSSCluster"],
          },
        },
        {
          name: "--eviction-policy",
          description: "Redis eviction policy - default is VolatileLRU",
          args: {
            name: "eviction-policy",
            suggestions: [
              "AllKeysLFU",
              "AllKeysLRU",
              "AllKeysRandom",
              "NoEviction",
              "VolatileLFU",
              "VolatileLRU",
              "VolatileRandom",
              "VolatileTTL",
            ],
          },
        },
        {
          name: "--group-nickname",
          description: "Name for the group of linked database resources",
          args: { name: "group-nickname" },
        },
        {
          name: [
            "--user-assigned-identity-resource-id",
            "--identity-resource-id",
          ],
          description:
            "User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions//resourceGroups//providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId",
          args: { name: "user-assigned-identity-resource-id" },
        },
        {
          name: "--identity-type",
          description:
            "Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed)",
          args: {
            name: "identity-type",
            suggestions: [
              "None",
              "SystemAssigned",
              "SystemAssigned",
              "UserAssigned",
              "UserAssigned",
            ],
          },
        },
        {
          name: ["--key-encryption-identity-type", "--key-identity-type"],
          description:
            "Only userAssignedIdentity is supported in this API version; other types may be supported in the future",
          args: {
            name: "key-encryption-identity-type",
            suggestions: ["systemAssignedIdentity", "userAssignedIdentity"],
          },
        },
        {
          name: "--key-encryption-key-url",
          description:
            "Key encryption key Url, versioned only.Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78",
          args: { name: "key-encryption-key-url" },
        },
        {
          name: "--linked-databases",
          description: "List of database resources to link with this database",
          args: { name: "linked-databases" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--minimum-tls-version",
          description:
            "The minimum TLS version for the cluster to support, e.g. '1.2'",
          args: {
            name: "minimum-tls-version",
            suggestions: ["1.0", "1.1", "1.2"],
          },
        },
        {
          name: ["--modules", "--module"],
          description:
            "Optional set of redis modules to enable in this database - modules can only be added at creation time",
          args: { name: "modules" },
        },
        {
          name: "--no-database",
          description:
            "Advanced. Do not automatically create a default database. Warning: the cache will not be usable until you create a database",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--persistence",
          description: "Persistence settings",
          args: { name: "persistence" },
        },
        {
          name: "--port",
          description:
            "TCP port of the database endpoint. Specified at create time. Defaults to an available port",
          args: { name: "port" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: ["--zones", "-z"],
          description:
            "The Availability Zones where this cluster will be deployed",
          args: { name: "zones" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a RedisEnterprise cache cluster",
      options: [
        {
          name: ["--cluster-name", "--name", "-n"],
          description: "The name of the RedisEnterprise cluster",
          args: { name: "cluster-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
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
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description:
        "List all RedisEnterprise clusters in the specified subscription",
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
      description: "Get information about a RedisEnterprise cluster",
      options: [
        {
          name: ["--cluster-name", "--name", "-n"],
          description: "The name of the RedisEnterprise cluster",
          args: { name: "cluster-name" },
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
      ],
    },
    {
      name: "update",
      description:
        "Update an existing (overwrite/recreate, with potential downtime) cache cluster",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: ["--user-assigned-identities", "--assigned-identities"],
          description:
            'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "user-assigned-identities" },
        },
        {
          name: "--capacity",
          description:
            "The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs",
          args: { name: "capacity" },
        },
        {
          name: ["--cluster-name", "--name", "-n"],
          description: "The name of the RedisEnterprise cluster",
          args: { name: "cluster-name" },
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
          name: [
            "--user-assigned-identity-resource-id",
            "--identity-resource-id",
          ],
          description:
            "User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions//resourceGroups//providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId",
          args: { name: "user-assigned-identity-resource-id" },
        },
        {
          name: "--identity-type",
          description:
            "Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed)",
          args: {
            name: "identity-type",
            suggestions: [
              "None",
              "SystemAssigned",
              "SystemAssigned",
              "UserAssigned",
              "UserAssigned",
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
          name: ["--key-encryption-identity-type", "--key-identity-type"],
          description:
            "Only userAssignedIdentity is supported in this API version; other types may be supported in the future",
          args: {
            name: "key-encryption-identity-type",
            suggestions: ["systemAssignedIdentity", "userAssignedIdentity"],
          },
        },
        {
          name: "--key-encryption-key-url",
          description:
            "Key encryption key Url, versioned only. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78",
          args: { name: "key-encryption-key-url" },
        },
        {
          name: "--minimum-tls-version",
          description:
            "The minimum TLS version for the cluster to support, e.g. '1.2'",
          args: {
            name: "minimum-tls-version",
            suggestions: ["1.0", "1.1", "1.2"],
          },
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
          description:
            "The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.)",
          args: {
            name: "sku",
            suggestions: [
              "EnterpriseFlash_F1500",
              "EnterpriseFlash_F300",
              "EnterpriseFlash_F700",
              "Enterprise_E10",
              "Enterprise_E100",
              "Enterprise_E20",
              "Enterprise_E200",
              "Enterprise_E400",
              "Enterprise_E5",
              "Enterprise_E50",
            ],
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
          name: "--zones",
          description:
            'The Availability Zones where this cluster will be deployed. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "zones" },
        },
      ],
    },
    {
      name: "wait",
      description: "Place the CLI in a waiting state until a condition is met",
      options: [
        {
          name: ["--cluster-name", "--name", "-n"],
          description: "The name of the RedisEnterprise cluster",
          args: { name: "cluster-name" },
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
      ],
    },
    {
      name: "database",
      description: "Manage Redis Enterprise databases",
      subcommands: [
        {
          name: "create",
          description: "Create a database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
              name: "--client-protocol",
              description:
                "Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted",
              args: {
                name: "client-protocol",
                suggestions: ["Encrypted", "Plaintext"],
              },
            },
            {
              name: "--clustering-policy",
              description:
                "Clustering policy - default is OSSCluster. Specified at create time",
              args: {
                name: "clustering-policy",
                suggestions: ["EnterpriseCluster", "OSSCluster"],
              },
            },
            {
              name: "--eviction-policy",
              description: "Redis eviction policy - default is VolatileLRU",
              args: {
                name: "eviction-policy",
                suggestions: [
                  "AllKeysLFU",
                  "AllKeysLRU",
                  "AllKeysRandom",
                  "NoEviction",
                  "VolatileLFU",
                  "VolatileLRU",
                  "VolatileRandom",
                  "VolatileTTL",
                ],
              },
            },
            {
              name: "--group-nickname",
              description: "Name for the group of linked database resources",
              args: { name: "group-nickname" },
            },
            {
              name: [
                "--linked-databases",
                "--linked-database",
                "--linkeddatabase",
              ],
              description:
                'List of database resources to link with this database Support shorthand-syntax, json-file and yaml-file. Try "??" to show more. Singular flags: --linked-database --linked-databases',
              args: { name: "linked-databases" },
            },
            {
              name: ["--modules", "--module", "--mods"],
              description:
                'Optional set of redis modules to enable in this database - modules can only be added at creation time. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more. Singular flags: --module --modules',
              args: { name: "modules" },
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
              name: "--persistence",
              description:
                'Persistence settings Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "persistence" },
            },
            {
              name: "--port",
              description:
                "TCP port of the database endpoint. Specified at create time. Defaults to an available port",
              args: { name: "port" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a single database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "export",
          description: "Exports a database file from target database",
          options: [
            {
              name: "--sas-uri",
              description: "SAS URI for the target directory to export to",
              args: { name: "sas-uri" },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
          ],
        },
        {
          name: "flush",
          description:
            "Flushes all the keys in this database and also from its linked databases",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--linked-ids",
              description:
                'The resource identifiers of all the other database resources in the georeplication group to be flushed Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "linked-ids" },
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
          ],
        },
        {
          name: "force-unlink",
          description:
            "Forcibly removes the link to the specified database resource",
          options: [
            {
              name: "--unlink-ids",
              description:
                'The resource IDs of the database resources to be unlinked. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "unlink-ids" },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
          ],
        },
        {
          name: "import",
          description: "Imports database files to target database",
          options: [
            {
              name: "--sas-uris",
              description:
                'SAS URIs for the target blobs to import from Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "sas-uris" },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
          ],
        },
        {
          name: "list",
          description:
            "List all databases in the specified RedisEnterprise cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
          name: "list-keys",
          description:
            "Retrieves the access keys for the RedisEnterprise database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
          ],
        },
        {
          name: "regenerate-key",
          description: "Regenerates the RedisEnterprise database's access keys",
          options: [
            {
              name: "--key-type",
              description: "Which access key to regenerate",
              args: { name: "key-type", suggestions: ["Primary", "Secondary"] },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
          ],
        },
        {
          name: "show",
          description:
            "Get information about a database in a RedisEnterprise cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
          ],
        },
        {
          name: "update",
          description: "Update a database",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--client-protocol",
              description:
                "Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted",
              args: {
                name: "client-protocol",
                suggestions: ["Encrypted", "Plaintext"],
              },
            },
            {
              name: "--cluster-name",
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--eviction-policy",
              description: "Redis eviction policy - default is VolatileLRU",
              args: {
                name: "eviction-policy",
                suggestions: [
                  "AllKeysLFU",
                  "AllKeysLRU",
                  "AllKeysRandom",
                  "NoEviction",
                  "VolatileLFU",
                  "VolatileLRU",
                  "VolatileRandom",
                  "VolatileTTL",
                ],
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
              name: "--persistence",
              description:
                'Persistence settings Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "persistence" },
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
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the RedisEnterprise cluster",
              args: { name: "cluster-name" },
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
          ],
        },
      ],
    },
    {
      name: "operation-status",
      description: "Get the status of an operation",
      subcommands: [
        {
          name: "show",
          description: "Get the status of operation",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--operation-id", "--name", "-n"],
              description: "The ID of an ongoing async operation",
              args: { name: "operation-id" },
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
  ],
};

export default completion;
