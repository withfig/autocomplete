const completion: Fig.Spec = {
  name: "elastic-san",
  description: "Manage Elastic SAN",
  subcommands: [
    {
      name: "create",
      description: "Create an Elastic SAN",
      options: [
        {
          name: "--base-size-tib",
          description: "Base size of the Elastic San appliance in TiB",
          args: { name: "base-size-tib" },
          isRequired: true,
        },
        {
          name: ["--elastic-san-name", "--name", "-n"],
          description: "The name of the ElasticSan",
          args: { name: "elastic-san-name" },
          isRequired: true,
        },
        {
          name: ["--extended-capacity-size-tib", "--extended-size"],
          description: "Extended size of the Elastic San appliance in TiB",
          args: { name: "extended-capacity-size-tib" },
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
            'Resource sku Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "sku" },
          isRequired: true,
        },
        {
          name: "--availability-zones",
          description:
            'Logical zone for Elastic San resource; example: ["1"]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "availability-zones" },
        },
        {
          name: ["--location", "-l"],
          description:
            "The geo-location where the resource lives. When not specified, the location of the resource group will be used",
          args: { name: "location" },
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
          name: "--public-network-access",
          description:
            "Allow or disallow public network access to ElasticSan. Value is optional but if passed in, must be 'Enabled' or 'Disabled'",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--tags",
          description:
            'Azure resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an Elastic SAN",
      options: [
        {
          name: ["--elastic-san-name", "--name", "-n"],
          description: "The name of the ElasticSan",
          args: { name: "elastic-san-name" },
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
      description: "Get a list of Elastic SANs in a subscription",
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
      name: "list-sku",
      description: "Get a list of Elastic SAN skus",
      options: [
        {
          name: "--filter",
          description: "Specify $filter='location eq ' to filter on location",
          args: { name: "filter" },
        },
      ],
    },
    {
      name: "show",
      description: "Get an Elastic SAN",
      options: [
        {
          name: ["--elastic-san-name", "--name", "-n"],
          description: "The name of the ElasticSan",
          args: { name: "elastic-san-name" },
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
      description: "Update an Elastic SAN",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--availability-zones",
          description:
            'Logical zone for Elastic San resource; example: ["1"]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "availability-zones" },
        },
        {
          name: "--base-size-tib",
          description: "Base size of the Elastic San appliance in TiB",
          args: { name: "base-size-tib" },
        },
        {
          name: ["--elastic-san-name", "--name", "-n"],
          description: "The name of the ElasticSan",
          args: { name: "elastic-san-name" },
        },
        {
          name: ["--extended-capacity-size-tib", "--extended-size"],
          description: "Extended size of the Elastic San appliance in TiB",
          args: { name: "extended-capacity-size-tib" },
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
          name: "--public-network-access",
          description:
            "Allow or disallow public network access to ElasticSan. Value is optional but if passed in, must be 'Enabled' or 'Disabled'",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
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
            'Resource sku Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "sku" },
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
            'Azure resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "wait",
      description: "Place the CLI in a waiting state until a condition is met",
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
        {
          name: ["--elastic-san-name", "--name", "-n"],
          description: "The name of the ElasticSan",
          args: { name: "elastic-san-name" },
        },
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
      name: "volume",
      description: "Manage Elastic SAN Volume",
      subcommands: [
        {
          name: "create",
          description: "Create a Volume",
          options: [
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
              isRequired: true,
            },
            {
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the Volume",
              args: { name: "volume-name" },
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
              name: "--size-gib",
              description: "Volume size",
              args: { name: "size-gib" },
              isRequired: true,
            },
            {
              name: ["--volume-group-name", "--volume-group", "-v"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
              isRequired: true,
            },
            {
              name: "--creation-data",
              description:
                'State of the operation on the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "creation-data" },
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
          description: "Delete a Volume",
          options: [
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the Volume",
              args: { name: "volume-name" },
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
              name: ["--volume-group-name", "--volume-group", "-v"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
            },
            {
              name: "--x-ms-delete-snapshots",
              description:
                "Optional, used to delete snapshots under volume. Allowed value are only true or false. Default value is false",
              args: {
                name: "x-ms-delete-snapshots",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--x-ms-force-delete",
              description:
                "Optional, used to delete volume if active sessions present. Allowed value are only true or false. Default value is false",
              args: {
                name: "x-ms-force-delete",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List Volumes in a Volume Group",
          options: [
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
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
              name: ["--volume-group-name", "--volume-group", "-v"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
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
          description: "Get a Volume",
          options: [
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the Volume",
              args: { name: "volume-name" },
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
              name: ["--volume-group-name", "--volume-group", "-v"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Volume",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--creation-data",
              description:
                'State of the operation on the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "creation-data" },
            },
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
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
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the Volume",
              args: { name: "volume-name" },
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
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--size-gib",
              description: "Volume size",
              args: { name: "size-gib" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--volume-group-name", "--volume-group", "-v"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
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
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
            },
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
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the Volume",
              args: { name: "volume-name" },
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
              name: ["--volume-group-name", "--volume-group", "-v"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
            },
          ],
        },
        {
          name: "snapshot",
          description: "Manage volume snapshot",
          subcommands: [
            {
              name: "create",
              description: "Create a Volume Snapshot",
              options: [
                {
                  name: "--creation-data",
                  description:
                    'Data used when creating a volume snapshot. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "creation-data" },
                  isRequired: true,
                },
                {
                  name: ["--elastic-san-name", "--elastic-san", "-e"],
                  description: "The name of the ElasticSan",
                  args: { name: "elastic-san-name" },
                  isRequired: true,
                },
                {
                  name: ["--snapshot-name", "--name", "-n"],
                  description:
                    "The name of the volume snapshot within the given volume group",
                  args: { name: "snapshot-name" },
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
                  name: ["--volume-group-name", "--volume-group", "-v"],
                  description: "The name of the VolumeGroup",
                  args: { name: "volume-group-name" },
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
              description: "Delete a Volume Snapshot",
              options: [
                {
                  name: ["--elastic-san-name", "--elastic-san", "-e"],
                  description: "The name of the ElasticSan",
                  args: { name: "elastic-san-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--snapshot-name", "--name", "-n"],
                  description:
                    "The name of the volume snapshot within the given volume group",
                  args: { name: "snapshot-name" },
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
                  name: ["--volume-group-name", "--volume-group", "-v"],
                  description: "The name of the VolumeGroup",
                  args: { name: "volume-group-name" },
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
                "List Snapshots in a VolumeGroup or List Snapshots by Volume (name) in a VolumeGroup using filter",
              options: [
                {
                  name: ["--elastic-san-name", "--elastic-san", "-e"],
                  description: "The name of the ElasticSan",
                  args: { name: "elastic-san-name" },
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
                  name: ["--volume-group-name", "--volume-group", "-v"],
                  description: "The name of the VolumeGroup",
                  args: { name: "volume-group-name" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "Specify $filter='volumeName eq ' to filter on volume",
                  args: { name: "filter" },
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
              description: "Get a Volume Snapshot",
              options: [
                {
                  name: ["--elastic-san-name", "--elastic-san", "-e"],
                  description: "The name of the ElasticSan",
                  args: { name: "elastic-san-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--snapshot-name", "--name", "-n"],
                  description:
                    "The name of the volume snapshot within the given volume group",
                  args: { name: "snapshot-name" },
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
                  name: ["--volume-group-name", "--volume-group", "-v"],
                  description: "The name of the VolumeGroup",
                  args: { name: "volume-group-name" },
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
                {
                  name: ["--elastic-san-name", "--elastic-san", "-e"],
                  description: "The name of the ElasticSan",
                  args: { name: "elastic-san-name" },
                },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                  name: ["--snapshot-name", "--name", "-n"],
                  description:
                    "The name of the volume snapshot within the given volume group",
                  args: { name: "snapshot-name" },
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
                  name: ["--volume-group-name", "--volume-group", "-v"],
                  description: "The name of the VolumeGroup",
                  args: { name: "volume-group-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "volume-group",
      description: "Manage Elastic SAN Volume Group",
      subcommands: [
        {
          name: "create",
          description: "Create a Volume Group",
          options: [
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
              isRequired: true,
            },
            {
              name: ["--volume-group-name", "--name", "-n"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
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
              name: "--encryption",
              description: "Type of encryption",
              args: {
                name: "encryption",
                suggestions: [
                  "EncryptionAtRestWithCustomerManagedKey",
                  "EncryptionAtRestWithPlatformKey",
                ],
              },
            },
            {
              name: "--encryption-properties",
              description:
                'Encryption Properties describing Key Vault and Identity information Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "encryption-properties" },
            },
            {
              name: "--identity",
              description:
                'The identity of the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--network-acls",
              description:
                'A collection of rules governing the accessibility from specific network locations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "network-acls" },
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
              name: "--protocol-type",
              description: "Type of storage target",
              args: { name: "protocol-type", suggestions: ["Iscsi", "None"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Volume Group",
          options: [
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-group-name", "--name", "-n"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
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
          name: "list",
          description: "List Volume Groups",
          options: [
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
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
          description: "Get a Volume Group",
          options: [
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-group-name", "--name", "-n"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
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
          description: "Update a Volume Group",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
            },
            {
              name: "--encryption",
              description: "Type of encryption",
              args: {
                name: "encryption",
                suggestions: [
                  "EncryptionAtRestWithCustomerManagedKey",
                  "EncryptionAtRestWithPlatformKey",
                ],
              },
            },
            {
              name: "--encryption-properties",
              description:
                'Encryption Properties describing Key Vault and Identity information Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "encryption-properties" },
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
              name: "--identity",
              description:
                'The identity of the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-group-name", "--name", "-n"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
            },
            {
              name: "--network-acls",
              description:
                'A collection of rules governing the accessibility from specific network locations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "network-acls" },
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
              name: "--protocol-type",
              description: "Type of storage target",
              args: { name: "protocol-type", suggestions: ["Iscsi", "None"] },
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
              name: ["--elastic-san-name", "--elastic-san", "-e"],
              description: "The name of the ElasticSan",
              args: { name: "elastic-san-name" },
            },
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
              name: ["--volume-group-name", "--name", "-n"],
              description: "The name of the VolumeGroup",
              args: { name: "volume-group-name" },
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
  ],
};

export default completion;
