const completion: Fig.Spec = {
  name: "vmware",
  description: "Commands to manage Azure VMware Solution",
  subcommands: [
    {
      name: "addon",
      description: "Commands to manage addons for a private cloud",
      subcommands: [
        {
          name: "list",
          description: "List addons in a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "arc",
          description: "Commands to manage a Arc addon",
          subcommands: [
            {
              name: "create",
              description: "Create an Arc addon for a private cloud",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--vcenter",
                  description: "The VMware vCenter resource ID",
                  args: { name: "vcenter" },
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
              description: "Delete an Arc addon for a private cloud",
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              name: "show",
              description: "Show details of an Arc addon for a private cloud",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description: "Update an Arc addon for a private cloud",
              options: [
                {
                  name: "--vcenter",
                  description: "The VMware vCenter resource ID",
                  args: { name: "vcenter" },
                  isRequired: true,
                },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          ],
        },
        {
          name: "hcx",
          description: "Commands to manage a HCX addon",
          subcommands: [
            {
              name: "create",
              description: "Create a HCX addon for a private cloud",
              options: [
                {
                  name: "--offer",
                  description:
                    "The HCX offer, example VMware MaaS Cloud Provider (Enterprise)",
                  args: { name: "offer" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description: "Delete a HCX addon for a private cloud",
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              name: "show",
              description: "Show details of a HCX addon for a private cloud",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description: "Update a HCX addon for a private cloud",
              options: [
                {
                  name: "--offer",
                  description:
                    "The HCX offer, example VMware MaaS Cloud Provider (Enterprise)",
                  args: { name: "offer" },
                  isRequired: true,
                },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          ],
        },
        {
          name: "srm",
          description: "Commands to manage a Site Recovery Manager (SRM) addon",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Site Recovery Manager (SRM) addon for a private cloud",
              options: [
                {
                  name: "--license-key",
                  description: "The Site Recovery Manager (SRM) license",
                  args: { name: "license-key" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description:
                "Delete a Site Recovery Manager (SRM) addon for a private cloud",
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              name: "show",
              description:
                "Show details of a Site Recovery Manager (SRM) addon",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "Update a Site Recovery Manager (SRM) addon for a private cloud",
              options: [
                {
                  name: "--license-key",
                  description: "The Site Recovery Manager (SRM) license",
                  args: { name: "license-key" },
                  isRequired: true,
                },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          ],
        },
        {
          name: "vr",
          description: "Commands to manage a vSphere Replication (VR) addon",
          subcommands: [
            {
              name: "create",
              description:
                "Create a vSphere Replication (VR) addon for a private cloud",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--vrs-count",
                  description: "The vSphere Replication Server (VRS) count",
                  args: { name: "vrs-count" },
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
              description:
                "Delete a vSphere Replication (VR) addon for a private cloud",
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              name: "show",
              description:
                "Show details of a vSphere Replication (VR) addon for a private cloud",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "Update a vSphere Replication (VR) addon for a private cloud",
              options: [
                {
                  name: "--vrs-count",
                  description: "The vSphere Replication Server (VRS) count",
                  args: { name: "vrs-count" },
                  isRequired: true,
                },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          ],
        },
      ],
    },
    {
      name: "authorization",
      description:
        "Commands to manage the authorizations of an ExpressRoute Circuit for a private cloud",
      subcommands: [
        {
          name: "create",
          description:
            "Create an ExpressRoute Circuit Authorization in a private cloud",
          options: [
            {
              name: ["--authorization-name", "--name", "-n"],
              description:
                "Name of the ExpressRoute Circuit Authorization in the private cloud",
              args: { name: "authorization-name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
              name: "--express-route-id",
              description: "The ID of the ExpressRoute Circuit",
              args: { name: "express-route-id" },
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
          description:
            "Delete an ExpressRoute Circuit Authorization in a private cloud",
          options: [
            {
              name: ["--authorization-name", "--name", "-n"],
              description:
                "Name of the ExpressRoute Circuit Authorization in the private cloud",
              args: { name: "authorization-name" },
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
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
            "List ExpressRoute Circuit Authorizations in a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          description:
            "Get an ExpressRoute Circuit Authorization by name in a private cloud",
          options: [
            {
              name: ["--authorization-name", "--name", "-n"],
              description:
                "Name of the ExpressRoute Circuit Authorization in the private cloud",
              args: { name: "authorization-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--authorization-name", "--name", "-n"],
              description:
                "Name of the ExpressRoute Circuit Authorization in the private cloud",
              args: { name: "authorization-name" },
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
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
      name: "cloud-link",
      description: "Commands to manage cloud links in a private cloud",
      subcommands: [
        {
          name: "create",
          description: "Create a cloud link in a private cloud",
          options: [
            {
              name: ["--cloud-link-name", "--name", "-n"],
              description: "Name of the cloud link resource",
              args: { name: "cloud-link-name" },
              isRequired: true,
            },
            {
              name: "--linked-cloud",
              description:
                "Identifier of the other private cloud participating in the link",
              args: { name: "linked-cloud" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "Delete a cloud link in a private cloud",
          options: [
            {
              name: ["--cloud-link-name", "--name", "-n"],
              description: "Name of the cloud link resource",
              args: { name: "cloud-link-name" },
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
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "List cloud link in a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "Show details of a cloud link in a private cloud",
          options: [
            {
              name: ["--cloud-link-name", "--name", "-n"],
              description: "Name of the cloud link resource",
              args: { name: "cloud-link-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "Update a cloud link in a private cloud",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--cloud-link-name", "--name", "-n"],
              description: "Name of the cloud link resource",
              args: { name: "cloud-link-name" },
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
              name: "--linked-cloud",
              description:
                "Identifier of the other private cloud participating in the link",
              args: { name: "linked-cloud" },
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
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
      ],
    },
    {
      name: "cluster",
      description:
        "Commands to manage all the clusters in a private cloud, excluding the first cluster which is the default management cluster.\n\n\t\tThe default management cluster is created and managed as part of the private cloud. To view details of the management cluster, use az vmware private-cloud show",
      subcommands: [
        {
          name: "create",
          description: "Create a cluster in a private cloud",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
              description: "The name of the SKU",
              args: { name: "sku" },
              isRequired: true,
            },
            {
              name: ["--cluster-size", "--size"],
              description: "The cluster size",
              args: { name: "cluster-size" },
            },
            {
              name: "--hosts",
              description:
                'The hosts Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "hosts" },
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
          description:
            "Delete a cluster in a private cloud, excluding the first cluster which is the default management cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "Name of the cluster in the private cloud",
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
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
            "List clusters in a private cloud, excluding the first cluster which is the default management cluster",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "list-zones",
          description:
            "List hosts by zone in a cluster in a private cloud, including the first cluster which is the default management cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
            "Get a cluster by name in a private cloud, excluding the first cluster which is the default management cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
            "Update a cluster in a private cloud, excluding the first cluster which is the default management cluster",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
            },
            {
              name: ["--cluster-size", "--size"],
              description: "The cluster size",
              args: { name: "cluster-size" },
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
              name: "--hosts",
              description:
                'The hosts Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "hosts" },
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
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
              description: "The name of the SKU",
              args: { name: "sku" },
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
              description: "Name of the cluster in the private cloud",
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
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
      name: "datastore",
      description: "Commands to manage a datastore in a private cloud cluster",
      subcommands: [
        {
          name: "create",
          description:
            'Please use "netapp-volume create" or "disk-pool-volume create" instead',
        },
        {
          name: "delete",
          description: "Delete a datastore in a private cloud cluster",
          options: [
            {
              name: ["--cluster-name", "--cluster"],
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
            },
            {
              name: ["--datastore-name", "--name", "-n"],
              description: "Name of the datastore in the private cloud cluster",
              args: { name: "datastore-name" },
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
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "List datastores in a private cloud cluster",
          options: [
            {
              name: ["--cluster-name", "--cluster"],
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "Show details of a datastore in a private cloud cluster",
          options: [
            {
              name: ["--cluster-name", "--cluster"],
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
            },
            {
              name: ["--datastore-name", "--name", "-n"],
              description: "Name of the datastore in the private cloud cluster",
              args: { name: "datastore-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--cluster-name", "--cluster"],
              description: "Name of the cluster in the private cloud",
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
            {
              name: ["--datastore-name", "--name", "-n"],
              description: "Name of the datastore in the private cloud cluster",
              args: { name: "datastore-name" },
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
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "disk-pool-volume",
          description:
            "Create a VMFS datastore in a private cloud cluster using Microsoft.StoragePool provided iSCSI target",
          subcommands: [
            {
              name: "create",
              description:
                "Create a VMFS datastore in a private cloud cluster using Microsoft.StoragePool provided iSCSI target",
              options: [
                {
                  name: ["--cluster-name", "--cluster"],
                  description: "Name of the cluster in the private cloud",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--datastore-name", "--name", "-n"],
                  description:
                    "Name of the datastore in the private cloud cluster",
                  args: { name: "datastore-name" },
                  isRequired: true,
                },
                {
                  name: "--lun-name",
                  description: "Name of the LUN to be used for datastore",
                  args: { name: "lun-name" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--target-id",
                  description: "Azure resource ID of the iSCSI target",
                  args: { name: "target-id" },
                  isRequired: true,
                },
                {
                  name: "--mount-option",
                  description:
                    "Mode that describes whether the LUN has to be mounted as a datastore or attached as a LUN",
                  args: {
                    name: "mount-option",
                    suggestions: ["ATTACH", "MOUNT"],
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
              ],
            },
          ],
        },
        {
          name: "netapp-volume",
          description:
            "Create a new Microsoft.NetApp provided NetApp volume in a private cloud cluster",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new Microsoft.NetApp provided NetApp volume in a private cloud cluster",
              options: [
                {
                  name: ["--cluster-name", "--cluster"],
                  description: "Name of the cluster in the private cloud",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--datastore-name", "--name", "-n"],
                  description:
                    "Name of the datastore in the private cloud cluster",
                  args: { name: "datastore-name" },
                  isRequired: true,
                },
                {
                  name: ["--net-app-volumn", "--volume-id"],
                  description: "Azure resource ID of the NetApp volume",
                  args: { name: "net-app-volumn" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          ],
        },
      ],
    },
    {
      name: "global-reach-connection",
      description:
        "Commands to manage global reach connections in a private cloud",
      subcommands: [
        {
          name: "create",
          description: "Create a global reach connection in a private cloud",
          options: [
            {
              name: ["--global-reach-connection-name", "--name", "-n"],
              description:
                "Name of the global reach connection in the private cloud",
              args: { name: "global-reach-connection-name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
              name: "--authorization-key",
              description:
                "Authorization key from the peer express route used for the global reach connection",
              args: { name: "authorization-key" },
            },
            {
              name: "--express-route-id",
              description:
                "The ID of the Private Cloud's ExpressRoute Circuit that is participating in the global reach connection",
              args: { name: "express-route-id" },
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
              name: "--peer-express-route-circuit",
              description:
                "Identifier of the ExpressRoute Circuit to peer with in the global reach connection",
              args: { name: "peer-express-route-circuit" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a global reach connection in a private cloud",
          options: [
            {
              name: ["--global-reach-connection-name", "--name", "-n"],
              description:
                "Name of the global reach connection in the private cloud",
              args: { name: "global-reach-connection-name" },
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
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "List global reach connections in a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          description:
            "Get a global reach connection by name in a private cloud",
          options: [
            {
              name: ["--global-reach-connection-name", "--name", "-n"],
              description:
                "Name of the global reach connection in the private cloud",
              args: { name: "global-reach-connection-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
              name: ["--global-reach-connection-name", "--name", "-n"],
              description:
                "Name of the global reach connection in the private cloud",
              args: { name: "global-reach-connection-name" },
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
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
      name: "hcx-enterprise-site",
      description: "Commands to manage HCX Enterprise Sites in a private cloud",
      subcommands: [
        {
          name: "create",
          description: "Create an HCX Enterprise Site in a private cloud",
          options: [
            {
              name: ["--hcx-enterprise-site-name", "--name", "-n"],
              description:
                "Name of the HCX Enterprise Site in the private cloud",
              args: { name: "hcx-enterprise-site-name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "delete",
          description: "Delete an HCX Enterprise Site in a private cloud",
          options: [
            {
              name: ["--hcx-enterprise-site-name", "--name", "-n"],
              description:
                "Name of the HCX Enterprise Site in the private cloud",
              args: { name: "hcx-enterprise-site-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "List HCX Enterprise Sites in a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "Get an HCX Enterprise Site by name in a private cloud",
          options: [
            {
              name: ["--hcx-enterprise-site-name", "--name", "-n"],
              description:
                "Name of the HCX Enterprise Site in the private cloud",
              args: { name: "hcx-enterprise-site-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "The name of the private cloud",
              args: { name: "private-cloud" },
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
      name: "location",
      description: "Commands to check availability by location",
      subcommands: [
        {
          name: "check-quota-availability",
          description: "Return quota for subscription by region",
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "check-trial-availability",
          description: "Return trial status for subscription by region",
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
              name: "--sku",
              description: "The name of the SKU",
              args: { name: "sku" },
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
          name: "checkquotaavailability",
          description: "Return quota for subscription by region",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
        {
          name: "checktrialavailability",
          description: "Return trial status for subscription by region",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--sku",
              description: "The name of the SKU",
              args: { name: "sku" },
            },
          ],
        },
      ],
    },
    {
      name: "placement-policy",
      description: "Commands to manage placement policies",
      subcommands: [
        {
          name: "list",
          description: "List placement policies in a private cloud cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          description:
            "Get a placement policy by name in a private cloud cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--placement-policy-name", "--name", "-n"],
              description:
                "Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy",
              args: { name: "placement-policy-name" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "vm",
          description: "Commands to manage VM placement policies",
          subcommands: [
            {
              name: "create",
              description:
                "Create a VM placement policy in a private cloud cluster",
              options: [
                {
                  name: "--affinity-type",
                  description: "Placement policy affinity type",
                  args: {
                    name: "affinity-type",
                    suggestions: ["Affinity", "AntiAffinity"],
                  },
                  isRequired: true,
                },
                {
                  name: "--cluster-name",
                  description: "Name of the cluster in the private cloud",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--placement-policy-name", "--name", "-n"],
                  description:
                    "Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy",
                  args: { name: "placement-policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--vm-members",
                  description:
                    'Virtual machine members list Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "vm-members" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "Display name of the placement policy",
                  args: { name: "display-name" },
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
                  name: "--state",
                  description:
                    "Whether the placement policy is enabled or disabled",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a VM placement policy in a private cloud cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "Name of the cluster in the private cloud",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--placement-policy-name", "--name", "-n"],
                  description:
                    "Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy",
                  args: { name: "placement-policy-name" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              name: "update",
              description:
                "Update a VM placement policy in a private cloud cluster",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--cluster-name",
                  description: "Name of the cluster in the private cloud",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the placement policy",
                  args: { name: "display-name" },
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
                  name: ["--placement-policy-name", "--name", "-n"],
                  description:
                    "Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy",
                  args: { name: "placement-policy-name" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--state",
                  description:
                    "Whether the placement policy is enabled or disabled",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--vm-members",
                  description:
                    'Virtual machine members list Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "vm-members" },
                },
              ],
            },
          ],
        },
        {
          name: "vm-host",
          description: "Commands to manage VM Host placement policies",
          subcommands: [
            {
              name: "create",
              description:
                "Create a VM Host placement policy in a private cloud cluster",
              options: [
                {
                  name: "--affinity-type",
                  description: "Placement policy affinity type",
                  args: {
                    name: "affinity-type",
                    suggestions: ["Affinity", "AntiAffinity"],
                  },
                  isRequired: true,
                },
                {
                  name: "--cluster-name",
                  description: "Name of the cluster in the private cloud",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--host-members",
                  description:
                    'Host members list Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "host-members" },
                  isRequired: true,
                },
                {
                  name: ["--placement-policy-name", "--name", "-n"],
                  description:
                    "Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy",
                  args: { name: "placement-policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--vm-members",
                  description:
                    'Virtual machine members list Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "vm-members" },
                  isRequired: true,
                },
                {
                  name: "--affinity-strength",
                  description:
                    "Vm-host placement policy affinity strength (should/must)",
                  args: {
                    name: "affinity-strength",
                    suggestions: ["Must", "Should"],
                  },
                },
                {
                  name: "--azure-hybrid-benefit",
                  description:
                    "Placement policy azure hybrid benefit opt-in type",
                  args: {
                    name: "azure-hybrid-benefit",
                    suggestions: ["None", "SqlHost"],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the placement policy",
                  args: { name: "display-name" },
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
                  name: "--state",
                  description:
                    "Whether the placement policy is enabled or disabled",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a VM Host placement policy in a private cloud cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "Name of the cluster in the private cloud",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--placement-policy-name", "--name", "-n"],
                  description:
                    "Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy",
                  args: { name: "placement-policy-name" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              name: "update",
              description:
                "Update a VM Host placement policy in a private cloud cluster",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--affinity-strength",
                  description:
                    "Vm-host placement policy affinity strength (should/must)",
                  args: {
                    name: "affinity-strength",
                    suggestions: ["Must", "Should"],
                  },
                },
                {
                  name: "--azure-hybrid-benefit",
                  description:
                    "Placement policy azure hybrid benefit opt-in type",
                  args: {
                    name: "azure-hybrid-benefit",
                    suggestions: ["None", "SqlHost"],
                  },
                },
                {
                  name: "--cluster-name",
                  description: "Name of the cluster in the private cloud",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the placement policy",
                  args: { name: "display-name" },
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
                  name: "--host-members",
                  description:
                    'Host members list Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "host-members" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--placement-policy-name", "--name", "-n"],
                  description:
                    "Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy",
                  args: { name: "placement-policy-name" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--state",
                  description:
                    "Whether the placement policy is enabled or disabled",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--vm-members",
                  description:
                    'Virtual machine members list Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "vm-members" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "private-cloud",
      description: "Commands to manage private clouds",
      subcommands: [
        {
          name: "add-cmk-encryption",
          description:
            "Add a Customer Managed Keys Encryption to a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
              name: "--enc-kv-key-name",
              description: "The name of the encryption key vault key",
              args: { name: "enc-kv-key-name" },
            },
            {
              name: "--enc-kv-key-version",
              description: "The version of the encryption key vault key",
              args: { name: "enc-kv-key-version" },
            },
            {
              name: "--enc-kv-url",
              description: "The URL of the encryption key vault",
              args: { name: "enc-kv-url" },
            },
          ],
        },
        {
          name: "add-identity-source",
          description:
            "Add a vCenter Single Sign On Identity Source to a private cloud",
          options: [
            {
              name: "--alias",
              description: "The domain's NetBIOS name",
              args: { name: "alias" },
              isRequired: true,
            },
            {
              name: "--base-group-dn",
              description: "The base distinguished name for groups",
              args: { name: "base-group-dn" },
              isRequired: true,
            },
            {
              name: "--base-user-dn",
              description: "The base distinguished name for users",
              args: { name: "base-user-dn" },
              isRequired: true,
            },
            {
              name: "--domain",
              description: "The domain's dns name",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the identity source",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--password",
              description:
                "The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--primary-server",
              description: "Primary server URL",
              args: { name: "primary-server" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
              name: "--username",
              description:
                "The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--secondary-server",
              description: "Secondary server URL",
              args: { name: "secondary-server" },
            },
            {
              name: "--ssl",
              description:
                'Protect LDAP communication using SSL certificate (LDAPS). Specify "Enabled" or "Disabled"',
              args: { name: "ssl" },
            },
          ],
        },
        {
          name: "addidentitysource",
          description:
            "Add a vCenter Single Sign On Identity Source to a private cloud",
          options: [
            {
              name: "--alias",
              description: "The domain's NetBIOS name",
              args: { name: "alias" },
              isRequired: true,
            },
            {
              name: "--base-group-dn",
              description: "The base distinguished name for groups",
              args: { name: "base-group-dn" },
              isRequired: true,
            },
            {
              name: "--base-user-dn",
              description: "The base distinguished name for users",
              args: { name: "base-user-dn" },
              isRequired: true,
            },
            {
              name: "--domain",
              description: "The domain's dns name",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the identity source",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--password",
              description:
                "The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--primary-server",
              description: "Primary server URL",
              args: { name: "primary-server" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
              name: "--username",
              description:
                "The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--secondary-server",
              description: "Secondary server URL",
              args: { name: "secondary-server" },
            },
            {
              name: "--ssl",
              description:
                'Protect LDAP communication using SSL certificate (LDAPS). Specify "Enabled" or "Disabled"',
              args: { name: "ssl" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a private cloud",
          options: [
            {
              name: "--cluster-size",
              description:
                "Number of hosts for the default management cluster. Minimum of 3 and maximum of 16",
              args: { name: "cluster-size" },
              isRequired: true,
            },
            {
              name: ["--private-cloud-name", "--name", "-n"],
              description: "Name of the private cloud",
              args: { name: "private-cloud-name" },
              isRequired: true,
            },
            {
              name: "--network-block",
              description:
                "The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22",
              args: { name: "network-block" },
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
              description: "The name of the SKU",
              args: { name: "sku" },
              isRequired: true,
            },
            {
              name: ["--accept-eula", "--yes", "-y"],
              description:
                "Accept the end-user license agreement without prompting",
            },
            {
              name: ["--extended-network-blocks", "--ext-nw-blocks"],
              description:
                'Array of additional networks noncontiguous with networkBlock. Networks must be unique and non-overlapping across VNet in your subscription, on-premise, and this privateCloud networkBlock attribute. Make sure the CIDR format conforms to (A.B.C.D/X). Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-network-blocks" },
            },
            {
              name: "--internet",
              description: "Connectivity to internet is enabled or disabled",
              args: { name: "internet", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Resource location When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description: "Enable a system assigned identity",
              args: {
                name: "mi-system-assigned",
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
              name: "--nsxt-password",
              description:
                "NSX-T Manager password when the private cloud is created If value is blank it's asked from the tty",
              args: { name: "nsxt-password" },
            },
            {
              name: "--secondary-zone",
              description:
                "The secondary availability zone for the private cloud",
              args: { name: "secondary-zone" },
            },
            {
              name: "--strategy",
              description: "The availability strategy for the private cloud",
              args: {
                name: "strategy",
                suggestions: ["DualZone", "SingleZone"],
              },
            },
            {
              name: "--tags",
              description:
                'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--vcenter-password",
              description:
                "VCenter admin password when the private cloud is created If value is blank it's asked from the tty",
              args: { name: "vcenter-password" },
            },
            {
              name: "--zone",
              description:
                "The primary availability zone for the private cloud",
              args: { name: "zone" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a private cloud",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud-name", "--name", "-n"],
              description: "Name of the private cloud",
              args: { name: "private-cloud-name" },
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
          name: "delete-cmk-encryption",
          description:
            "Delete a Customer Managed Keys Encryption from a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            { name: "--yes", description: "Delete without confirmation" },
          ],
        },
        {
          name: "delete-identity-source",
          description:
            "Delete a vCenter Single Sign On Identity Source for a private cloud",
          options: [
            {
              name: "--alias",
              description: "The domain's NetBIOS name",
              args: { name: "alias" },
              isRequired: true,
            },
            {
              name: "--domain",
              description: "The domain's dns name",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the identity source",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            { name: "--yes", description: "Delete without confirmation" },
          ],
        },
        {
          name: "deleteidentitysource",
          description:
            "Delete a vCenter Single Sign On Identity Source for a private cloud",
          options: [
            {
              name: "--alias",
              description: "The domain's NetBIOS name",
              args: { name: "alias" },
              isRequired: true,
            },
            {
              name: "--domain",
              description: "The domain's dns name",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the identity source",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            { name: "--yes", description: "Delete without confirmation" },
          ],
        },
        {
          name: "disable-cmk-encryption",
          description:
            "Disable a Customer Managed Keys Encryption from a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            { name: "--yes", description: "Delete without confirmation" },
          ],
        },
        {
          name: "enable-cmk-encryption",
          description:
            "Enable a Customer Managed Keys Encryption to a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
              name: "--enc-kv-key-name",
              description: "The name of the encryption key vault key",
              args: { name: "enc-kv-key-name" },
            },
            {
              name: "--enc-kv-key-version",
              description: "The version of the encryption key vault key",
              args: { name: "enc-kv-key-version" },
            },
            {
              name: "--enc-kv-url",
              description: "The URL of the encryption key vault",
              args: { name: "enc-kv-url" },
            },
          ],
        },
        {
          name: "list",
          description: "List the private clouds",
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
          name: "list-admin-credentials",
          description: "List the admin credentials for the private cloud",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "listadmincredentials",
          description: "List the admin credentials for the private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "rotate-nsxt-password",
          description: "Rotate the NSX-T Manager password",
        },
        {
          name: "rotate-vcenter-password",
          description: "Rotate the vCenter password",
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
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "show",
          description: "Get a private cloud",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-cloud-name", "--name", "-n"],
              description: "Name of the private cloud",
              args: { name: "private-cloud-name" },
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
          description: "Update a private cloud",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--cluster-size",
              description: "The cluster size",
              args: { name: "cluster-size" },
            },
            {
              name: ["--extended-network-blocks", "--ext-nw-blocks"],
              description:
                'Array of additional networks noncontiguous with networkBlock. Networks must be unique and non-overlapping across VNet in your subscription, on-premise, and this privateCloud networkBlock attribute. Make sure the CIDR format conforms to (A.B.C.D/X). Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-network-blocks" },
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
              name: "--internet",
              description: "Connectivity to internet is enabled or disabled",
              args: { name: "internet", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: ["--private-cloud-name", "--name", "-n"],
              description: "Name of the private cloud",
              args: { name: "private-cloud-name" },
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
              name: "--nsxt-password",
              description:
                "Optionally, set the NSX-T Manager password when the private cloud is created If value is blank it's asked from the tty",
              args: { name: "nsxt-password" },
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
                'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--vcenter-password",
              description:
                "Optionally, set the vCenter admin password when the private cloud is created If value is blank it's asked from the tty",
              args: { name: "vcenter-password" },
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
              name: ["--private-cloud-name", "--name", "-n"],
              description: "Name of the private cloud",
              args: { name: "private-cloud-name" },
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
          name: "identity",
          description: "Commands for Managed Identity in a private cloud",
          subcommands: [
            {
              name: "assign",
              description: "Assign a Managed Identity in a private cloud",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--system-assigned",
                  description: "Enable a system assigned identity",
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a Managed Identity in a private cloud",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--system-assigned",
                  description: "Disable a system assigned identity",
                },
              ],
            },
            {
              name: "show",
              description: "Show Managed Identities in a private cloud",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          name: "identity-source",
          description:
            "Manage a vCenter Single Sign On Identity Source of a  private cloud",
          subcommands: [
            {
              name: "create",
              description:
                "Create a vCenter Single Sign On Identity Source to a private cloud",
              options: [
                {
                  name: "--alias",
                  description: "The domain's NetBIOS name",
                  args: { name: "alias" },
                  isRequired: true,
                },
                {
                  name: "--base-group-dn",
                  description: "The base distinguished name for groups",
                  args: { name: "base-group-dn" },
                  isRequired: true,
                },
                {
                  name: "--base-user-dn",
                  description: "The base distinguished name for users",
                  args: { name: "base-user-dn" },
                  isRequired: true,
                },
                {
                  name: "--domain",
                  description: "The domain's dns name",
                  args: { name: "domain" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the identity source",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--password",
                  description:
                    "The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups",
                  args: { name: "password" },
                  isRequired: true,
                },
                {
                  name: "--primary-server",
                  description: "Primary server URL",
                  args: { name: "primary-server" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--username",
                  description:
                    "The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group",
                  args: { name: "username" },
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
                {
                  name: "--secondary-server",
                  description: "Secondary server URL",
                  args: { name: "secondary-server" },
                },
                {
                  name: "--ssl",
                  description:
                    "Protect LDAP communication using SSL certificate (LDAPS)",
                  args: { name: "ssl", suggestions: ["Disabled", "Enabled"] },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a vCenter Single Sign On Identity Source of a private cloud",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the identity source",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List vCenter Single Sign On Identity Sources of a private cloud",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "Show a vCenter Single Sign On Identity Source of a private cloud",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the identity source",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "Update a vCenter Single Sign On Identity Source of a private cloud",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the identity source",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--alias",
                  description: "The domain's NetBIOS name",
                  args: { name: "alias" },
                },
                {
                  name: "--base-group-dn",
                  description: "The base distinguished name for groups",
                  args: { name: "base-group-dn" },
                },
                {
                  name: "--base-user-dn",
                  description: "The base distinguished name for users",
                  args: { name: "base-user-dn" },
                },
                {
                  name: "--domain",
                  description: "The domain's dns name",
                  args: { name: "domain" },
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
                  name: "--password",
                  description:
                    "The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups",
                  args: { name: "password" },
                },
                {
                  name: "--primary-server",
                  description: "Primary server URL",
                  args: { name: "primary-server" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: "--secondary-server",
                  description: "Secondary server URL",
                  args: { name: "secondary-server" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--ssl",
                  description:
                    "Protect LDAP communication using SSL certificate (LDAPS)",
                  args: { name: "ssl", suggestions: ["Disabled", "Enabled"] },
                },
                {
                  name: "--username",
                  description:
                    "The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group",
                  args: { name: "username" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
    },
    {
      name: "script-cmdlet",
      description: "Commands to list and show script cmdlet resources",
      subcommands: [
        {
          name: "list",
          description:
            "List script cmdlet resources available for a private cloud to create a script execution resource on a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
              name: ["--script-package", "-p"],
              description: "Name of the script package in the private cloud",
              args: { name: "script-package" },
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
            "Get information about a script cmdlet resource in a specific package on a private cloud",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--script-cmdlet-name", "--name", "-n"],
              description:
                "Name of the script cmdlet resource in the script package in the private cloud",
              args: { name: "script-cmdlet-name" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--script-package", "-p"],
              description: "Name of the script package in the private cloud",
              args: { name: "script-package" },
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
      name: "script-execution",
      description: "Commands to manage script executions in a private cloud",
      subcommands: [
        {
          name: "create",
          description: "Create or update a script execution in a private cloud",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the script execution",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
              name: "--timeout",
              description: "Time limit for execution",
              args: { name: "timeout" },
              isRequired: true,
            },
            {
              name: "--failure-reason",
              description:
                "Error message if the script was able to run, but if the script itself had errors or powershell threw an exception",
              args: { name: "failure-reason" },
            },
            {
              name: "--hidden-parameter",
              description:
                "Parameters that will be hidden/not visible to ARM, such as passwords and credentials",
              args: { name: "hidden-parameter" },
            },
            {
              name: "--named-outputs",
              description: "User-defined dictionary",
              args: { name: "named-outputs" },
            },
            {
              name: "--out",
              description:
                "Standard output stream from the powershell execution",
              args: { name: "out" },
            },
            {
              name: ["--parameter", "-p"],
              description: "Parameters the script will accept",
              args: { name: "parameter" },
            },
            {
              name: "--retention",
              description:
                "Time to live for the resource. If not provided, will be available for 60 days",
              args: { name: "retention" },
            },
            {
              name: "--script-cmdlet-id",
              description:
                "A reference to the script cmdlet resource if user is running a AVS script",
              args: { name: "script-cmdlet-id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a ScriptExecution in a private cloud",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--script-execution-name", "--name", "-n"],
              description: "Name of the user-invoked script execution resource",
              args: { name: "script-execution-name" },
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
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "List script executions in a private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          description: "Get an script execution by name in a private cloud",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--script-execution-name", "--name", "-n"],
              description: "Name of the user-invoked script execution resource",
              args: { name: "script-execution-name" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
              name: ["--script-execution-name", "--name", "-n"],
              description: "Name of the user-invoked script execution resource",
              args: { name: "script-execution-name" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
      name: "script-package",
      description:
        "Commands to list and show script packages available to run on the private cloud",
      subcommands: [
        {
          name: "list",
          description:
            "List script packages available to run on the private cloud",
          options: [
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          description:
            "Get a script package available to run on a private cloud",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--script-package-name", "--name", "-n"],
              description: "Name of the script package in the private cloud",
              args: { name: "script-package-name" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
      name: "vm",
      description: "Commands to manage Virtual Machines",
      subcommands: [
        {
          name: "list",
          description: "List of virtual machines in a private cloud cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
          name: "restrict-movement",
          description: "Enable or disable DRS-driven VM movement restriction",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the cluster in the private cloud",
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
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--restrict-movement",
              description:
                "Whether VM DRS-driven movement is restricted (enabled) or not (disabled)",
              args: {
                name: "restrict-movement",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--virtual-machine",
              description: "Virtual Machine identifier",
              args: { name: "virtual-machine" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a virtual machine by id in a private cloud cluster",
          options: [
            {
              name: "--cluster-name",
              description: "Name of the cluster in the private cloud",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtual-machine", "--name", "-n"],
              description: "Virtual Machine identifier",
              args: { name: "virtual-machine" },
            },
            {
              name: ["--private-cloud", "-c"],
              description: "Name of the private cloud",
              args: { name: "private-cloud" },
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
      name: "workload-network",
      description: "Commands to manage workload-networks in a private cloud",
      subcommands: [
        {
          name: "dhcp",
          description:
            "Commands to manage a DHCP (Data Host Configuration Protocol) workload network",
          subcommands: [
            {
              name: "list",
              description: "List dhcp in a private cloud workload network",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description: "Get dhcp by id in a private cloud workload network",
              options: [
                {
                  name: ["--dhcp", "--name", "-n"],
                  description:
                    "NSX DHCP identifier. Generally the same as the DHCP display name",
                  args: { name: "dhcp" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              name: "relay",
              description:
                "Commands to manage a DHCP (Data Host Configuration Protocol) workload network",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create DHCP by ID in a private cloud workload network",
                  options: [
                    {
                      name: ["--dhcp", "--name", "-n"],
                      description:
                        "NSX DHCP identifier. Generally the same as the DHCP display name",
                      args: { name: "dhcp" },
                      isRequired: true,
                    },
                    {
                      name: ["--private-cloud", "-c"],
                      description: "Name of the private cloud",
                      args: { name: "private-cloud" },
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
                      name: "--display-name",
                      description: "Display name of the DHCP entity",
                      args: { name: "display-name" },
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
                      name: "--revision",
                      description: "NSX revision number",
                      args: { name: "revision" },
                    },
                    {
                      name: "--server-addresses",
                      description:
                        'DHCP Relay Addresses. Max 3. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "server-addresses" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete DHCP by ID in a private cloud workload network",
                  options: [
                    {
                      name: ["--dhcp", "--name", "-n"],
                      description:
                        "NSX DHCP identifier. Generally the same as the DHCP display name",
                      args: { name: "dhcp" },
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
                      name: ["--private-cloud", "-c"],
                      description: "Name of the private cloud",
                      args: { name: "private-cloud" },
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
                  name: "update",
                  description:
                    "Create DHCP by ID in a private cloud workload network",
                  options: [
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: ["--dhcp", "--name", "-n"],
                      description:
                        "NSX DHCP identifier. Generally the same as the DHCP display name",
                      args: { name: "dhcp" },
                    },
                    {
                      name: "--display-name",
                      description: "Display name of the DHCP entity",
                      args: { name: "display-name" },
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
                      name: ["--private-cloud", "-c"],
                      description: "Name of the private cloud",
                      args: { name: "private-cloud" },
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
                      name: "--revision",
                      description: "NSX revision number",
                      args: { name: "revision" },
                    },
                    {
                      name: "--server-addresses",
                      description:
                        'DHCP Relay Addresses. Max 3. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "server-addresses" },
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
              ],
            },
            {
              name: "server",
              description:
                "Commands to manage a DHCP (Data Host Configuration Protocol) workload network",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create DHCP by ID in a private cloud workload network",
                  options: [
                    {
                      name: ["--dhcp", "--name", "-n"],
                      description:
                        "NSX DHCP identifier. Generally the same as the DHCP display name",
                      args: { name: "dhcp" },
                      isRequired: true,
                    },
                    {
                      name: ["--private-cloud", "-c"],
                      description: "Name of the private cloud",
                      args: { name: "private-cloud" },
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
                      name: "--display-name",
                      description: "Display name of the DHCP entity",
                      args: { name: "display-name" },
                    },
                    {
                      name: "--lease-time",
                      description: "DHCP Server Lease Time",
                      args: { name: "lease-time" },
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
                      name: "--revision",
                      description: "NSX revision number",
                      args: { name: "revision" },
                    },
                    {
                      name: "--server-address",
                      description: "DHCP Server Address",
                      args: { name: "server-address" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete DHCP by ID in a private cloud workload network",
                  options: [
                    {
                      name: ["--dhcp", "--name", "-n"],
                      description:
                        "NSX DHCP identifier. Generally the same as the DHCP display name",
                      args: { name: "dhcp" },
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
                      name: ["--private-cloud", "-c"],
                      description: "Name of the private cloud",
                      args: { name: "private-cloud" },
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
                  name: "update",
                  description:
                    "Update DHCP by ID in a private cloud workload network",
                  options: [
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: ["--dhcp", "--name", "-n"],
                      description:
                        "NSX DHCP identifier. Generally the same as the DHCP display name",
                      args: { name: "dhcp" },
                    },
                    {
                      name: "--display-name",
                      description: "Display name of the DHCP entity",
                      args: { name: "display-name" },
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
                      name: "--lease-time",
                      description: "DHCP Server Lease Time",
                      args: { name: "lease-time" },
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
                      name: ["--private-cloud", "-c"],
                      description: "Name of the private cloud",
                      args: { name: "private-cloud" },
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
                      name: "--revision",
                      description: "NSX revision number",
                      args: { name: "revision" },
                    },
                    {
                      name: "--server-address",
                      description: "DHCP Server Address",
                      args: { name: "server-address" },
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
              ],
            },
          ],
        },
        {
          name: "dns-service",
          description: "Commands to manage a DNS Service workload network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a DNS service by id in a private cloud workload network",
              options: [
                {
                  name: ["--dns-service", "--name", "-n"],
                  description:
                    "NSX DNS Service identifier. Generally the same as the DNS Service's display name",
                  args: { name: "dns-service" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--default-dns-zone",
                  description: "Default DNS zone of the DNS Service",
                  args: { name: "default-dns-zone" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the DNS Service",
                  args: { name: "display-name" },
                },
                {
                  name: "--dns-service-ip",
                  description: "DNS service IP of the DNS Service",
                  args: { name: "dns-service-ip" },
                },
                {
                  name: "--fqdn-zones",
                  description:
                    'FQDN zones of the DNS Service. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "fqdn-zones" },
                },
                {
                  name: "--log-level",
                  description: "DNS Service log level",
                  args: {
                    name: "log-level",
                    suggestions: ["DEBUG", "ERROR", "FATAL", "INFO", "WARNING"],
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a DNS service by id in a private cloud workload network",
              options: [
                {
                  name: ["--dns-service", "--name", "-n"],
                  description:
                    "NSX DNS Service identifier. Generally the same as the DNS Service's display name",
                  args: { name: "dns-service" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "List of DNS services in a private cloud workload network",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description:
                "Get a DNS service by id in a private cloud workload network",
              options: [
                {
                  name: ["--dns-service", "--name", "-n"],
                  description:
                    "NSX DNS Service identifier. Generally the same as the DNS Service's display name",
                  args: { name: "dns-service" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "Update a DNS service by id in a private cloud workload network",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--default-dns-zone",
                  description: "Default DNS zone of the DNS Service",
                  args: { name: "default-dns-zone" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the DNS Service",
                  args: { name: "display-name" },
                },
                {
                  name: ["--dns-service", "--name", "-n"],
                  description:
                    "NSX DNS Service identifier. Generally the same as the DNS Service's display name",
                  args: { name: "dns-service" },
                },
                {
                  name: "--dns-service-ip",
                  description: "DNS service IP of the DNS Service",
                  args: { name: "dns-service-ip" },
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
                  name: "--fqdn-zones",
                  description:
                    'FQDN zones of the DNS Service. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "fqdn-zones" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--log-level",
                  description: "DNS Service log level",
                  args: {
                    name: "log-level",
                    suggestions: ["DEBUG", "ERROR", "FATAL", "INFO", "WARNING"],
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
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
                  name: ["--dns-service", "--name", "-n"],
                  description:
                    "NSX DNS Service identifier. Generally the same as the DNS Service's display name",
                  args: { name: "dns-service" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          name: "dns-zone",
          description: "Commands to manage a DNS Zone workload network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a DNS zone by id in a private cloud workload network",
              options: [
                {
                  name: ["--dns-zone", "--name", "-n"],
                  description:
                    "NSX DNS Zone identifier. Generally the same as the DNS Zone's display name",
                  args: { name: "dns-zone" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--display-name",
                  description: "Display name of the DNS Zone",
                  args: { name: "display-name" },
                },
                {
                  name: "--dns-server-ips",
                  description:
                    'DNS Server IP array of the DNS Zone. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "dns-server-ips" },
                },
                {
                  name: "--dns-services",
                  description: "Number of DNS Services using the DNS zone",
                  args: { name: "dns-services" },
                },
                {
                  name: "--domain",
                  description:
                    'Domain names of the DNS Zone. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "domain" },
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
                },
                {
                  name: "--source-ip",
                  description: "Source IP of the DNS Zone",
                  args: { name: "source-ip" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a DNS zone by id in a private cloud workload network",
              options: [
                {
                  name: ["--dns-zone", "--name", "-n"],
                  description:
                    "NSX DNS Zone identifier. Generally the same as the DNS Zone's display name",
                  args: { name: "dns-zone" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "List of DNS zones in a private cloud workload network",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description:
                "Get a DNS zone by id in a private cloud workload network",
              options: [
                {
                  name: ["--dns-zone", "--name", "-n"],
                  description:
                    "NSX DNS Zone identifier. Generally the same as the DNS Zone's display name",
                  args: { name: "dns-zone" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "Update a DNS zone by id in a private cloud workload network",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the DNS Zone",
                  args: { name: "display-name" },
                },
                {
                  name: "--dns-server-ips",
                  description:
                    'DNS Server IP array of the DNS Zone. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "dns-server-ips" },
                },
                {
                  name: "--dns-services",
                  description: "Number of DNS Services using the DNS zone",
                  args: { name: "dns-services" },
                },
                {
                  name: ["--dns-zone", "--name", "-n"],
                  description:
                    "NSX DNS Zone identifier. Generally the same as the DNS Zone's display name",
                  args: { name: "dns-zone" },
                },
                {
                  name: "--domain",
                  description:
                    'Domain names of the DNS Zone. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "domain" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--source-ip",
                  description: "Source IP of the DNS Zone",
                  args: { name: "source-ip" },
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
                  name: ["--dns-zone", "--name", "-n"],
                  description:
                    "NSX DNS Zone identifier. Generally the same as the DNS Zone's display name",
                  args: { name: "dns-zone" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          name: "gateway",
          description: "Commands to manage a Gateway workload network",
          subcommands: [
            {
              name: "list",
              description:
                "List of gateways in a private cloud workload network",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description:
                "Get a gateway by id in a private cloud workload network",
              options: [
                {
                  name: ["--gateway", "--name", "-n"],
                  description:
                    "NSX Gateway identifier. Generally the same as the Gateway's display name",
                  args: { name: "gateway" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          name: "port-mirroring",
          description: "Commands to manage a Port Mirroring workload network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a port mirroring profile by id in a private cloud workload network",
              options: [
                {
                  name: ["--port-mirroring", "--name", "-n"],
                  description:
                    "NSX Port Mirroring identifier. Generally the same as the Port Mirroring display name",
                  args: { name: "port-mirroring" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--destination",
                  description: "Destination VM Group",
                  args: { name: "destination" },
                },
                {
                  name: "--direction",
                  description: "Direction of port mirroring profile",
                  args: {
                    name: "direction",
                    suggestions: ["BIDIRECTIONAL", "EGRESS", "INGRESS"],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the port mirroring profile",
                  args: { name: "display-name" },
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
                },
                {
                  name: "--source",
                  description: "Source VM Group",
                  args: { name: "source" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a port mirroring profile by id in a private cloud workload network",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--port-mirroring", "--name", "-n"],
                  description:
                    "NSX Port Mirroring identifier. Generally the same as the Port Mirroring display name",
                  args: { name: "port-mirroring" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "List of port mirroring profiles in a private cloud workload network",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description:
                "Get a port mirroring profile by id in a private cloud workload network",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--port-mirroring", "--name", "-n"],
                  description:
                    "NSX Port Mirroring identifier. Generally the same as the Port Mirroring display name",
                  args: { name: "port-mirroring" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "Update a port mirroring profile by id in a private cloud workload network",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--destination",
                  description: "Destination VM Group",
                  args: { name: "destination" },
                },
                {
                  name: "--direction",
                  description: "Direction of port mirroring profile",
                  args: {
                    name: "direction",
                    suggestions: ["BIDIRECTIONAL", "EGRESS", "INGRESS"],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the port mirroring profile",
                  args: { name: "display-name" },
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
                  name: ["--port-mirroring", "--name", "-n"],
                  description:
                    "NSX Port Mirroring identifier. Generally the same as the Port Mirroring display name",
                  args: { name: "port-mirroring" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--source",
                  description: "Source VM Group",
                  args: { name: "source" },
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
                  name: ["--port-mirroring", "--name", "-n"],
                  description:
                    "NSX Port Mirroring identifier. Generally the same as the Port Mirroring display name",
                  args: { name: "port-mirroring" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          name: "public-ip",
          description: "Commands to manage a Public-IP workload network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Public IP Block by id in a private cloud workload network",
              options: [
                {
                  name: ["--public-ip", "--name", "-n"],
                  description:
                    "NSX Public IP Block identifier. Generally the same as the Public IP Block's display name",
                  args: { name: "public-ip" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--display-name",
                  description: "Display name of the Public IP Block",
                  args: { name: "display-name" },
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
                  name: "--number-of-public-ips",
                  description: "Number of Public IPs requested",
                  args: { name: "number-of-public-ips" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a Public IP Block by id in a private cloud workload network",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--public-ip", "--name", "-n"],
                  description:
                    "NSX Public IP Block identifier. Generally the same as the Public IP Block's display name",
                  args: { name: "public-ip" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "List of Public IP Blocks in a private cloud workload network",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description:
                "Get a Public IP Block by id in a private cloud workload network",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--public-ip", "--name", "-n"],
                  description:
                    "NSX Public IP Block identifier. Generally the same as the Public IP Block's display name",
                  args: { name: "public-ip" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: ["--public-ip", "--name", "-n"],
                  description:
                    "NSX Public IP Block identifier. Generally the same as the Public IP Block's display name",
                  args: { name: "public-ip" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          name: "segment",
          description: "Commands to manage a Segment workload network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a segment by id in a private cloud workload network",
              options: [
                {
                  name: ["--segment", "--name", "-n"],
                  description:
                    "NSX Segment identifier. Generally the same as the Segment's display name",
                  args: { name: "segment" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--connected-gateway",
                  description: "Gateway which to connect segment to",
                  args: { name: "connected-gateway" },
                },
                {
                  name: "--dhcp-ranges",
                  description:
                    'DHCP Range assigned for subnet. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "dhcp-ranges" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the segment",
                  args: { name: "display-name" },
                },
                {
                  name: "--gateway-address",
                  description: "Gateway address",
                  args: { name: "gateway-address" },
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a segment by id in a private cloud workload network",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--segment", "--name", "-n"],
                  description:
                    "NSX Segment identifier. Generally the same as the Segment's display name",
                  args: { name: "segment" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "List of segments in a private cloud workload network",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description:
                "Get a segment by id in a private cloud workload network",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--segment", "--name", "-n"],
                  description:
                    "NSX Segment identifier. Generally the same as the Segment's display name",
                  args: { name: "segment" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "Update a segment by id in a private cloud workload network",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--connected-gateway",
                  description: "Gateway which to connect segment to",
                  args: { name: "connected-gateway" },
                },
                {
                  name: "--dhcp-ranges",
                  description:
                    'DHCP Range assigned for subnet. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "dhcp-ranges" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the segment",
                  args: { name: "display-name" },
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
                  name: "--gateway-address",
                  description: "Gateway address",
                  args: { name: "gateway-address" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--segment", "--name", "-n"],
                  description:
                    "NSX Segment identifier. Generally the same as the Segment's display name",
                  args: { name: "segment" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
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
                  name: ["--segment", "--name", "-n"],
                  description:
                    "NSX Segment identifier. Generally the same as the Segment's display name",
                  args: { name: "segment" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          name: "vm",
          description: "Commands to manage a Virtual Machine workload network",
          subcommands: [
            {
              name: "list",
              description:
                "List of virtual machines in a private cloud workload network",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description:
                "Get a virtual machine by id in a private cloud workload network",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--virtual-machine", "--name", "-n"],
                  description: "Virtual Machine identifier",
                  args: { name: "virtual-machine" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
          name: "vm-group",
          description: "Commands to manage a VM Group workload network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a vm group by id in a private cloud workload network",
              options: [
                {
                  name: ["--vm-group", "--name", "-n"],
                  description:
                    "NSX VM Group identifier. Generally the same as the VM Group's display name",
                  args: { name: "vm-group" },
                  isRequired: true,
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--display-name",
                  description: "Display name of the VM group",
                  args: { name: "display-name" },
                },
                {
                  name: "--members",
                  description:
                    'Virtual machine members of this group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "members" },
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a vm group by id in a private cloud workload network",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--vm-group", "--name", "-n"],
                  description:
                    "NSX VM Group identifier. Generally the same as the VM Group's display name",
                  args: { name: "vm-group" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "List of vm groups in a private cloud workload network",
              options: [
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
              description:
                "Get a vm group by id in a private cloud workload network",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--vm-group", "--name", "-n"],
                  description:
                    "NSX VM Group identifier. Generally the same as the VM Group's display name",
                  args: { name: "vm-group" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                "Update a vm group by id in a private cloud workload network",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--display-name",
                  description: "Display name of the VM group",
                  args: { name: "display-name" },
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
                  name: "--members",
                  description:
                    'Virtual machine members of this group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "members" },
                },
                {
                  name: ["--vm-group", "--name", "-n"],
                  description:
                    "NSX VM Group identifier. Generally the same as the VM Group's display name",
                  args: { name: "vm-group" },
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
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
                  name: "--revision",
                  description: "NSX revision number",
                  args: { name: "revision" },
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
                  name: ["--vm-group", "--name", "-n"],
                  description:
                    "NSX VM Group identifier. Generally the same as the VM Group's display name",
                  args: { name: "vm-group" },
                },
                {
                  name: ["--private-cloud", "-c"],
                  description: "Name of the private cloud",
                  args: { name: "private-cloud" },
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
    },
  ],
};

export default completion;
