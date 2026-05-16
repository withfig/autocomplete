const completion: Fig.Spec = {
  name: "redis",
  description: "Manage dedicated Redis caches for your Azure applications",
  subcommands: [
    {
      name: "create",
      description: "Create new Redis Cache instance",
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
          description: "Name of the Redis cache",
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
          name: "--sku",
          description: "Type of Redis cache",
          args: { name: "sku", suggestions: ["Basic", "Premium", "Standard"] },
          isRequired: true,
        },
        {
          name: "--vm-size",
          description:
            "Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P",
          args: {
            name: "vm-size",
            suggestions: [
              "c0",
              "c1",
              "c2",
              "c3",
              "c4",
              "c5",
              "c6",
              "p1",
              "p2",
              "p3",
              "p4",
              "p5",
            ],
          },
          isRequired: true,
        },
        {
          name: "--enable-non-ssl-port",
          description:
            "If specified, then the non-ssl redis server port (6379) will be enabled",
          args: { name: "enable-non-ssl-port" },
        },
        {
          name: "--mi-system-assigned",
          description: "Flag to specify system assigned identity",
          args: { name: "mi-system-assigned" },
        },
        {
          name: "--mi-user-assigned",
          description:
            "One or more space separated resource IDs of user assigned identities",
          args: { name: "mi-user-assigned" },
        },
        {
          name: "--minimum-tls-version",
          description:
            "Specifies the TLS version required by clients to connect to cache",
          args: {
            name: "minimum-tls-version",
            suggestions: ["1.0", "1.1", "1.2"],
          },
        },
        {
          name: "--redis-configuration",
          description:
            "A json file used to set redis-configuration settings. You may encounter parse errors if the json file is invalid",
          args: { name: "redis-configuration" },
        },
        {
          name: "--redis-version",
          description:
            "Redis version. This should be in the form 'major[.minor]' (only 'major' is required) or the value 'latest' which refers to the latest stable Redis version that is available. Supported versions: 4.0, 6.0 (latest). Default value is 'latest'",
          args: { name: "redis-version" },
        },
        {
          name: "--replicas-per-master",
          description: "The number of replicas to be created per master",
          args: { name: "replicas-per-master" },
        },
        {
          name: "--shard-count",
          description:
            "The number of shards to be created on a Premium Cluster Cache",
          args: { name: "shard-count" },
        },
        {
          name: "--static-ip",
          description:
            "Specify a static ip if required for the VNET. If you do not specify a static IP then an IP address is chosen automatically",
          args: { name: "static-ip" },
        },
        {
          name: "--subnet-id",
          description:
            "The full resource ID of a subnet in a virtual network to deploy the redis cache in. Example format /subscriptions/{subid}/resourceGroups/{resourceGroupName}/providers/Microsoft.{Network|ClassicNetwork}/virtualNetworks/vnet1/subnets/subnet1",
          args: { name: "subnet-id" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--tenant-settings",
          description: "Space-separated tenant settings in key[=value] format",
          args: { name: "tenant-settings" },
        },
        {
          name: ["--zones", "-z"],
          description:
            "Space-separated list of availability zones into which to provision the resource",
          args: { name: "zones", suggestions: ["1", "2", "3"] },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes a Redis cache",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
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
      name: "export",
      description: "Export data stored in a Redis cache",
      options: [
        {
          name: "--container",
          description:
            "SAS url for container where data needs to be exported to",
          args: { name: "container" },
          isRequired: true,
        },
        {
          name: "--prefix",
          description: "Prefix to use for exported files",
          args: { name: "prefix" },
          isRequired: true,
        },
        {
          name: ["--preferred-data-archive-auth-method", "--auth-method"],
          description:
            "Preferred auth method to communicate to storage account used for data archive, default value is SAS",
          args: {
            name: "preferred-data-archive-auth-method",
            suggestions: ["ManagedIdentity", "SAS"],
          },
        },
        {
          name: "--file-format",
          description:
            "Format of the blob (Currently rdb is the only supported format, with other formats expected in the future)",
          args: { name: "file-format" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
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
      name: "force-reboot",
      description: "Reboot specified Redis node(s)",
      options: [
        {
          name: "--reboot-type",
          description:
            "Which Redis node(s) to reboot. Depending on this value data loss is possible",
          args: {
            name: "reboot-type",
            suggestions: ["AllNodes", "PrimaryNode", "SecondaryNode"],
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
          description: "Name of the Redis cache",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--shard-id",
          description:
            "If clustering is enabled, the ID of the shard to be rebooted",
          args: { name: "shard-id" },
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
      description: "Import data into a Redis cache",
      options: [
        {
          name: "--files",
          description: "SAS url for blobs that needs to be imported",
          args: { name: "files" },
          isRequired: true,
        },
        {
          name: ["--preferred-data-archive-auth-method", "--auth-method"],
          description:
            "Preferred auth method to communicate to storage account used for data archive, default value is SAS",
          args: {
            name: "preferred-data-archive-auth-method",
            suggestions: ["ManagedIdentity", "SAS"],
          },
        },
        {
          name: "--file-format",
          description:
            "Format of the blob (Currently rdb is the only supported format, with other formats expected in the future)",
          args: { name: "file-format" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
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
      name: "import-method",
      description: "Import data into Redis cache",
      options: [
        {
          name: "--files",
          description: "SAS url for blobs that needs to be imported",
          args: { name: "files" },
          isRequired: true,
        },
        {
          name: ["--preferred-data-archive-auth-method", "--auth-method"],
          description:
            "Preferred auth method to communicate to storage account used for data archive, default value is SAS",
          args: {
            name: "preferred-data-archive-auth-method",
            suggestions: ["ManagedIdentity", "SAS"],
          },
        },
        {
          name: "--file-format",
          description:
            "Format of the blob (Currently rdb is the only supported format, with other formats expected in the future)",
          args: { name: "file-format" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
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
      description: "List Redis Caches",
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
      name: "list-keys",
      description: "Retrieve a Redis cache's access keys",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
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
      name: "regenerate-keys",
      description: "Regenerate Redis cache's access keys",
      options: [
        {
          name: "--key-type",
          description: "The Redis access key to regenerate",
          args: { name: "key-type", suggestions: ["Primary", "Secondary"] },
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
          description: "Name of the Redis cache",
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
      description: "Gets a Redis cache (resource description)",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Redis cache",
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
      description: "Update a Redis cache",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
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
          description: "Name of the Redis cache",
          args: { name: "name" },
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
          description: "Type of Redis cache",
          args: { name: "sku", suggestions: ["Basic", "Premium", "Standard"] },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--vm-size",
          description:
            "Size of Redis cache to deploy. Basic and Standard Cache sizes start with C. Premium Cache sizes start with P",
          args: {
            name: "vm-size",
            suggestions: [
              "c0",
              "c1",
              "c2",
              "c3",
              "c4",
              "c5",
              "c6",
              "p1",
              "p2",
              "p3",
              "p4",
              "p5",
            ],
          },
        },
      ],
    },
    {
      name: "firewall-rules",
      description: "Manage Redis firewall rules",
      subcommands: [
        {
          name: "create",
          description: "Create a redis cache firewall rule",
          options: [
            {
              name: "--end-ip",
              description: "Highest IP address included in the range",
              args: { name: "end-ip" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
              name: "--rule-name",
              description: "The name of the firewall rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: "--start-ip",
              description: "Lowest IP address included in the range",
              args: { name: "start-ip" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a single firewall rule in a specified redis cache",
          options: [
            {
              name: "--rule-name",
              description: "The name of the firewall rule",
              args: { name: "rule-name" },
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
              description: "Name of the Redis cache",
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
          description: "Gets all firewall rules in the specified redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description: "Gets a single firewall rule in a specified redis cache",
          options: [
            {
              name: "--rule-name",
              description: "The name of the firewall rule",
              args: { name: "rule-name" },
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
              description: "Name of the Redis cache",
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
          description: "Update a redis cache firewall rule",
          options: [
            {
              name: "--end-ip",
              description: "Highest IP address included in the range",
              args: { name: "end-ip" },
              isRequired: true,
            },
            {
              name: "--rule-name",
              description: "The name of the firewall rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: "--start-ip",
              description: "Lowest IP address included in the range",
              args: { name: "start-ip" },
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
              description: "Name of the Redis cache",
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
      description: "Manage identity assigned to Azure cache for Redis",
      subcommands: [
        {
          name: "assign",
          description: "Assign identity for Azure cache for Redis",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--mi-system-assigned",
              description: "Flag to specify system assigned identity",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "One or more space separated resource IDs of user assigned identities",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          name: "remove",
          description:
            "Remove the identity already assigned for Azure cache for Redis",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--mi-system-assigned",
              description: "Flag to specify system assigned identity",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "One or more space separated resource IDs of user assigned identities",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description: "Show the identity assigned for Azure cache for Redis",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
      name: "patch-schedule",
      description: "Manage Redis patch schedules",
      subcommands: [
        {
          name: "create",
          description: "Create patching schedule for Redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
              name: "--schedule-entries",
              description:
                'List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]',
              args: { name: "schedule-entries" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the patching schedule of a redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description: "Gets the patching schedule of a redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          name: "update",
          description: "Update the patching schedule for Redis cache",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
              name: "--schedule-entries",
              description:
                'List of Patch schedule entries. Example Value:[{"dayOfWeek":"Monday","startHourUtc":"00","maintenanceWindow":"PT5H"}]',
              args: { name: "schedule-entries" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "server-link",
      description: "Manage Redis server links",
      subcommands: [
        {
          name: "create",
          description:
            "Adds a server link to the Redis cache (requires Premium SKU)",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--replication-role",
              description: "Role of the redis cache to be linked",
              args: {
                name: "replication-role",
                suggestions: ["Primary", "Secondary"],
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
              name: "--server-to-link",
              description:
                "Resource ID or name of the redis cache to be linked",
              args: { name: "server-to-link" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the linked server from a redis cache (requires Premium SKU)",
          options: [
            {
              name: "--linked-server-name",
              description: "Name of the linked redis cache",
              args: { name: "linked-server-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
            "Gets the list of linked servers associated with this redis cache (requires Premium SKU)",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
          description:
            "Gets the detailed information about a linked server of a redis cache (requires Premium SKU)",
          options: [
            {
              name: "--linked-server-name",
              description: "Name of the linked redis cache",
              args: { name: "linked-server-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Redis cache",
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
  ],
};

export default completion;
